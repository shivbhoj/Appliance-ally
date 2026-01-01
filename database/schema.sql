-- Appliance Ally Database Schema
-- PostgreSQL

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firebase_uid VARCHAR(128) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    display_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Homes table
CREATE TABLE IF NOT EXISTS homes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Appliances table
CREATE TABLE IF NOT EXISTS appliances (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    home_id INTEGER NOT NULL REFERENCES homes(id) ON DELETE CASCADE,
    brand VARCHAR(255),
    model VARCHAR(255),
    serial_number VARCHAR(255),
    type VARCHAR(100), -- e.g., 'refrigerator', 'washing_machine', 'dishwasher'
    purchase_date DATE,
    warranty_expiration DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Documents table
CREATE TABLE IF NOT EXISTS documents (
    id SERIAL PRIMARY KEY,
    appliance_id INTEGER NOT NULL REFERENCES appliances(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    document_type VARCHAR(50), -- e.g., 'manual', 'warranty', 'receipt'
    filename VARCHAR(255) NOT NULL,
    file_size INTEGER,
    mime_type VARCHAR(100),
    s3_key VARCHAR(500), -- AWS S3 object key
    s3_url TEXT, -- AWS S3 URL
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Maintenance logs table
CREATE TABLE IF NOT EXISTS maintenance_logs (
    id SERIAL PRIMARY KEY,
    appliance_id INTEGER NOT NULL REFERENCES appliances(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    maintenance_type VARCHAR(100), -- e.g., 'filter_change', 'cleaning', 'repair'
    description TEXT,
    cost DECIMAL(10, 2),
    performed_at TIMESTAMP,
    next_due_date DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better query performance
CREATE INDEX idx_users_firebase_uid ON users(firebase_uid);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_homes_user_id ON homes(user_id);
CREATE INDEX idx_appliances_user_id ON appliances(user_id);
CREATE INDEX idx_appliances_home_id ON appliances(home_id);
CREATE INDEX idx_documents_appliance_id ON documents(appliance_id);
CREATE INDEX idx_documents_user_id ON documents(user_id);
CREATE INDEX idx_maintenance_logs_appliance_id ON maintenance_logs(appliance_id);
CREATE INDEX idx_maintenance_logs_user_id ON maintenance_logs(user_id);

-- Trigger to update 'updated_at' timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_homes_updated_at BEFORE UPDATE ON homes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_appliances_updated_at BEFORE UPDATE ON appliances
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
