# Appliance Ally Mobile App

React Native mobile application for Appliance Ally - AI-powered appliance management for iOS and Android.

## Features

- **User Authentication**: Login and registration with Firebase
- **Home Management**: Create and manage home profiles
- **Appliance Tracking**: Add appliances via manual entry, photo OCR, or barcode scanning
- **Document Storage**: Upload and manage appliance documents (manuals, warranties, receipts)
- **Intuitive UI**: Clean, user-friendly interface for easy navigation

## Tech Stack

- React Native
- React Navigation
- Firebase Authentication
- Axios (API calls)
- React Native Camera
- React Native Image Picker

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- React Native development environment set up
- For iOS: Xcode and CocoaPods
- For Android: Android Studio and Android SDK

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install iOS dependencies (macOS only):
   ```bash
   cd ios && pod install && cd ..
   ```

4. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your configuration values:
     ```bash
     cp .env.example .env
     ```

5. Configure Firebase:
   - Create a Firebase project
   - Download `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)
   - Place them in the appropriate directories
   - Follow the React Native Firebase setup guide

### Running the App

Start Metro bundler:
```bash
npm start
```

Run on Android:
```bash
npm run android
```

Run on iOS (macOS only):
```bash
npm run ios
```

## Project Structure

```
frontend/
├── src/
│   ├── screens/          # Screen components
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   ├── HomeScreen.js
│   │   ├── CreateHomeScreen.js
│   │   ├── AddApplianceScreen.js
│   │   ├── ApplianceDetailScreen.js
│   │   └── UploadDocumentScreen.js
│   ├── components/       # Reusable components
│   ├── navigation/       # Navigation configuration
│   ├── services/         # API services
│   └── utils/           # Utility functions
├── App.js               # Main app component
├── index.js            # App entry point
└── package.json        # Dependencies
```

## Screens

### Authentication
- **LoginScreen**: User login
- **RegisterScreen**: New user registration

### Home & Appliances
- **HomeScreen**: List of user's appliances
- **CreateHomeScreen**: Create a new home profile
- **AddApplianceScreen**: Add new appliance (manual, photo OCR, or barcode)
- **ApplianceDetailScreen**: View and manage appliance details
- **UploadDocumentScreen**: Upload documents for appliances

## API Integration

The app is configured to connect to the backend API. Update `API_BASE_URL` in `.env` to point to your backend server.

Example API calls are scaffolded in the screen components but need to be implemented with actual API service functions.

## Firebase Integration

### Authentication
The app uses Firebase for user authentication. You'll need to:
1. Set up a Firebase project
2. Enable Email/Password authentication
3. Configure the Firebase SDK with your credentials
4. Implement the authentication methods in the screens

### Configuration
Add your Firebase configuration to `.env`:
```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
...
```

## Camera & Image Picker

The app uses:
- `react-native-camera` for barcode scanning
- `react-native-image-picker` for photo selection and capture

Follow the setup instructions for these libraries to enable camera permissions on both platforms.

## Development

Run tests:
```bash
npm test
```

Lint code:
```bash
npm run lint
```

## Building for Production

### Android
```bash
cd android
./gradlew assembleRelease
```

The APK will be at `android/app/build/outputs/apk/release/app-release.apk`

### iOS
1. Open `ios/ApplianceAlly.xcworkspace` in Xcode
2. Select your team and signing certificate
3. Archive and upload to App Store Connect

## Troubleshooting

### Common Issues

**Metro bundler issues:**
```bash
npm start -- --reset-cache
```

**iOS build issues:**
```bash
cd ios
pod deintegrate
pod install
cd ..
```

**Android build issues:**
```bash
cd android
./gradlew clean
cd ..
```

## License

MIT
