# Appliance Ally Database

PostgreSQL database schema for Appliance Ally application.

## Schema Overview

### Tables

1. **users**
   - Stores user account information
   - Links to Firebase authentication via `firebase_uid`
   - Fields: id, firebase_uid, email, display_name, created_at, updated_at

2. **homes**
   - Stores home profiles for organizing appliances
   - Multiple homes per user supported
   - Fields: id, user_id, name, address, created_at, updated_at

3. **appliances**
   - Stores appliance information
   - Links to user and home
   - Fields: id, user_id, home_id, brand, model, serial_number, type, purchase_date, warranty_expiration, notes, created_at, updated_at

4. **documents**
   - Stores metadata for appliance documents (manuals, warranties, receipts)
   - Actual files stored in AWS S3
   - Fields: id, appliance_id, user_id, document_type, filename, file_size, mime_type, s3_key, s3_url, uploaded_at

5. **maintenance_logs**
   - Tracks maintenance history and schedules
   - Fields: id, appliance_id, user_id, maintenance_type, description, cost, performed_at, next_due_date, notes, created_at

## Setup Instructions

### Prerequisites

- PostgreSQL 12 or higher installed
- Access to a PostgreSQL server

### Installation

1. Create a new database:
   ```sql
   CREATE DATABASE appliance_ally;
   ```

2. Connect to the database:
   ```bash
   psql -U postgres -d appliance_ally
   ```

3. Run the schema script:
   ```bash
   psql -U postgres -d appliance_ally -f schema.sql
   ```

   Or from within psql:
   ```sql
   \i schema.sql
   ```

### Verification

Check that all tables were created:
```sql
\dt
```

You should see:
- users
- homes
- appliances
- documents
- maintenance_logs

## Data Relationships

```
users (1) ─── (many) homes
users (1) ─── (many) appliances
users (1) ─── (many) documents
users (1) ─── (many) maintenance_logs

homes (1) ─── (many) appliances

appliances (1) ─── (many) documents
appliances (1) ─── (many) maintenance_logs
```

## Indexes

The schema includes indexes on frequently queried columns:
- User authentication fields
- Foreign key relationships
- User-specific queries

## Triggers

Automatic `updated_at` timestamp updates on:
- users table
- homes table
- appliances table

## Sample Data (Optional)

To insert sample data for testing:

```sql
-- Insert a sample user
INSERT INTO users (firebase_uid, email, display_name) 
VALUES ('sample_firebase_uid_123', 'user@example.com', 'John Doe');

-- Insert a sample home
INSERT INTO homes (user_id, name, address) 
VALUES (1, 'Main House', '123 Main St, City, State 12345');

-- Insert a sample appliance
INSERT INTO appliances (user_id, home_id, brand, model, serial_number, type, purchase_date) 
VALUES (1, 1, 'Samsung', 'RF28R7351SR', 'SN123456789', 'refrigerator', '2023-01-15');
```

## Migrations

For future schema changes, consider using a migration tool like:
- node-pg-migrate
- Flyway
- Liquibase

## Security Considerations

- Ensure row-level security policies are implemented for multi-tenant isolation
- Use parameterized queries to prevent SQL injection
- Restrict database user permissions appropriately
- Enable SSL/TLS for database connections in production

## Backup and Recovery

Recommended backup strategy:
```bash
# Full backup
pg_dump -U postgres appliance_ally > backup.sql

# Restore
psql -U postgres appliance_ally < backup.sql
```

## License

MIT
