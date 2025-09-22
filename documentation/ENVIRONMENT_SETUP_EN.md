# Environment Variables Setup

## Required Variables

For the application to work correctly, you need to configure the following environment variables in your `.env.local` file:

### Database
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/myventary"
```

### NextAuth
```bash
AUTH_SECRET="your-secret-key-here"
```

### Google OAuth
```bash
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## How to Get Google Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable Google+ API
4. Go to "Credentials" > "Create credentials" > "OAuth 2.0 Client ID"
5. Select "Web application"
6. Add authorized redirect URIs:
   - For development: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://your-domain.com/api/auth/callback/google`
7. Copy the Client ID and Client Secret to your `.env.local` file

## Example .env.local file

```bash
# Database
DATABASE_URL="postgresql://johndoe:password123@localhost:5432/myventary"

# NextAuth
AUTH_SECRET="your-super-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="123456789-abcdefghijklmnop.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="GOCSPX-abcdefghijklmnopqrstuvwx"
```

## Important Notes

- **NEVER** commit the `.env.local` file to your repository
- The `AUTH_SECRET` should be a random and secure string
- Make sure redirect URLs in Google Console match your domain

