# Appliance Ally Backend API

Backend REST API for the Appliance Ally mobile application.

## Features

- **Authentication**: User registration, login, and token verification (Firebase integration scaffold)
- **Appliance Management**: CRUD operations for appliances
- **Document Management**: Upload and manage appliance documents (AWS S3 integration scaffold)
- **OCR Processing**: Extract text and appliance information from images (OCR service integration scaffold)

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Firebase Admin SDK (for authentication)
- AWS S3 (for document storage)
- Multer (for file uploads)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- Firebase project
- AWS account with S3 bucket

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your configuration values:
     ```bash
     cp .env.example .env
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify authentication token

### Appliances
- `POST /api/appliances` - Create a new appliance
- `GET /api/appliances` - Get all appliances for a user/home
- `GET /api/appliances/:id` - Get specific appliance
- `PUT /api/appliances/:id` - Update appliance
- `DELETE /api/appliances/:id` - Delete appliance

### Documents
- `POST /api/documents` - Upload a document
- `GET /api/documents` - Get all documents for an appliance
- `GET /api/documents/:id` - Get specific document
- `DELETE /api/documents/:id` - Delete document

### OCR
- `POST /api/ocr/extract` - Extract text from image
- `POST /api/ocr/appliance-label` - Extract appliance information from label photo

### Health Check
- `GET /health` - Server health check

## Database Setup

Run the database schema setup script from the `/database` directory (see database README).

## Integration Notes

### Firebase Authentication
The authentication endpoints are scaffolded but require Firebase Admin SDK configuration:
1. Create a Firebase project
2. Download service account credentials
3. Configure credentials in environment variables

### AWS S3
The document storage endpoints are scaffolded but require AWS S3 configuration:
1. Create an S3 bucket
2. Configure AWS credentials in environment variables
3. Set appropriate bucket policies

### OCR Service
The OCR endpoints are scaffolded and require integration with an OCR service:
- Google Cloud Vision API (recommended)
- AWS Textract
- Tesseract.js

## Development

Run tests:
```bash
npm test
```

## License

MIT
