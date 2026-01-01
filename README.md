# Appliance Ally

Appliance Ally is an AI-powered assistant that helps households organize, troubleshoot, and maintain their appliances. The application leverages Google's Gemini AI to provide multimodal diagnostics, proactive maintenance guidance, and streamlined parts and service recommendations.

## Core Features

### 1. Digital Garage (Inventory)
- **Quick Add:** Capture a photo of an appliance label and automatically extract the brand, model, and serial number.
- **Document Storage:** Keep receipts, warranties, and manuals in one place, with automatic fetching where available.
- **Recall Alerts:** Monitor safety recalls and notify users when their appliances are affected.

### 2. AI Diagnostic Chat
- **Multimodal Input:** Submit text descriptions, photos, audio clips, or videos that showcase appliance issues.
- **Smart Analysis:** Gemini reviews the inputs to diagnose problems, propose DIY repair steps, recommend required parts, and assess whether professional service is needed.

### 3. Smart Maintenance
- **Automated Scheduling:** Set up reminders for routine tasks such as filter changes or deep cleanings.
- **Predictive Insights:** Forecast potential failures before they happen using historical data and AI predictions.
- **Repair Tracking:** Log repair history through voice notes for easy reference later.

### 4. Parts & Services
- **Parts Matching:** Identify the exact replacement parts required and compare prices across retailers.
- **Service Connections:** Discover vetted repair technicians when professional help is necessary.

## Suggested MVP

Focus the first release on a tight, high-value workflow that proves the AI assistant's utility while remaining feasible with a small team:

1. **Guided Appliance Intake**
   - Mobile-friendly flow to photograph a nameplate and confirm OCR results for brand and model.
   - Manual entry fallback with smart typeahead for popular brands and model numbers.
   - Secure storage for purchase date, receipt upload, and warranty expiration reminders.

2. **AI Diagnostic Chat (Text + Photo)**
   - Conversational interface to describe symptoms and share a supporting photo.
   - Gemini-powered response that lists likely causes, confidence level, and DIY next steps.
   - Escalation guidance that flags safety risks and recommends when to contact a professional.

3. **Maintenance Timeline Basics**
   - Automatically generate a maintenance schedule using manufacturer guidelines for the captured model.
   - Push reminders via email and in-app notifications for upcoming tasks.
   - Log completed maintenance events with quick-add notes and optional cost tracking.

4. **Parts Lookup MVP**
   - Surface frequently replaced parts (filters, hoses, belts) based on the stored model data.
   - Provide price comparisons for at least two retailers with direct purchase links.

Success can be measured through user activation (first appliance added), diagnostic chat engagement, and completion of the first maintenance reminder.

## Vision

Appliance Ally aims to become the central hub for home appliance care, reducing downtime, extending appliance lifespan, and empowering users with the knowledge needed to handle repairs confidently.

## Project Structure

```
Appliance-ally/
├── frontend/          # React Native mobile app
├── backend/           # Node.js REST API
├── database/          # PostgreSQL schema
└── README.md          # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- React Native development environment
- Firebase account
- AWS account (for S3 storage)

### Setup

1. **Database Setup**
   ```bash
   cd database
   # Follow instructions in database/README.md
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Configure environment variables
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Configure environment variables
   npm run ios    # For iOS
   npm run android # For Android
   ```

## Documentation

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)
- [Database Documentation](./database/README.md)

## Current Status

The foundational codebase has been set up with:
- ✅ Backend REST API with Express.js
- ✅ Database schema for PostgreSQL
- ✅ React Native mobile app structure
- ✅ Authentication screens (Login/Register)
- ✅ Home profile creation
- ✅ Appliance addition screens (manual, photo OCR)
- ✅ Document upload functionality

### Integration Required

The following integrations are scaffolded and need to be configured:
- **Firebase Authentication**: User authentication endpoints
- **AWS S3**: Document storage
- **OCR Service**: Appliance label extraction (Google Cloud Vision or AWS Textract)
- **Gemini AI**: Diagnostic chat and AI analysis

## Contributing

This project is currently in development. Contributions are welcome!

## License

MIT
