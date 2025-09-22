# Configuración de Variables de Entorno

## Variables Requeridas

Para que la aplicación funcione correctamente, necesitas configurar las siguientes variables de entorno en tu archivo `.env.local`:

### Base de Datos
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

## Cómo Obtener las Credenciales de Google

1. Ve a la [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google+ 
4. Ve a "Credenciales" > "Crear credenciales" > "ID de cliente OAuth 2.0"
5. Selecciona "Aplicación web"
6. Agrega las URIs de redirección autorizadas:
   - Para desarrollo: `http://localhost:3000/api/auth/callback/google`
   - Para producción: `https://tu-dominio.com/api/auth/callback/google`
7. Copia el Client ID y Client Secret a tu archivo `.env.local`

## Ejemplo de archivo .env.local

```bash
# Database
DATABASE_URL="postgresql://johndoe:password123@localhost:5432/myventary"

# NextAuth
AUTH_SECRET="your-super-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="123456789-abcdefghijklmnop.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="GOCSPX-abcdefghijklmnopqrstuvwx"
```

## Notas Importantes

- **NUNCA** subas el archivo `.env.local` a tu repositorio
- El `AUTH_SECRET` debe ser una cadena aleatoria y segura
- Asegúrate de que las URLs de redirección en Google Console coincidan con tu dominio
