# Estructura de Actions

## 📁 Organización de Archivos

Se ha creado una nueva estructura para organizar las acciones del servidor:

```
src/
├── actions/
│   └── authentication.ts    # Acciones de autenticación
├── app/
│   └── (sections)/
│       ├── login/page.tsx   # Página de login
│       └── register/page.tsx # Página de registro
└── ...
```

## 🔐 Acciones de Autenticación

### **signInWithGoogle()**
- **Propósito**: Iniciar sesión con Google OAuth
- **Uso**: `<form action={signInWithGoogle}>`
- **Redirección**: `/dashboard`

### **signInWithCredentials(formData)**
- **Propósito**: Iniciar sesión con email/password
- **Parámetros**: FormData con email y password
- **Validaciones**: Campos requeridos
- **Redirección**: `/dashboard`

### **createAccount(formData)**
- **Propósito**: Crear nueva cuenta de usuario
- **Parámetros**: FormData con name, email, password, confirmPassword
- **Validaciones**:
  - Todos los campos requeridos
  - Contraseñas coinciden
  - Contraseña mínimo 6 caracteres
- **Redirección**: `/login?message=Cuenta creada exitosamente`

## 🚀 Ventajas de esta Estructura

### **1. Separación de Responsabilidades**
- **UI Components**: Solo se encargan de la presentación
- **Server Actions**: Manejan la lógica del servidor
- **Código más limpio**: Fácil de mantener y testear

### **2. Reutilización**
- Las acciones pueden ser reutilizadas en diferentes componentes
- Lógica centralizada en un solo lugar
- Fácil de modificar y actualizar

### **3. Type Safety**
- TypeScript garantiza tipos correctos
- Mejor autocompletado en el IDE
- Menos errores en tiempo de ejecución

### **4. Mejor Testing**
- Acciones pueden ser testeadas independientemente
- Mocks más fáciles de implementar
- Cobertura de código mejorada

## 📝 Ejemplo de Uso

### **En el Componente:**
```tsx
import { signInWithGoogle, signInWithCredentials } from '@/actions/authentication';

// Google Login
<form action={signInWithGoogle}>
  <Button type="submit">Continuar con Google</Button>
</form>

// Email/Password Login
<form action={signInWithCredentials}>
  <input name="email" type="email" required />
  <input name="password" type="password" required />
  <Button type="submit">Iniciar Sesión</Button>
</form>
```

### **En la Acción:**
```typescript
export async function signInWithCredentials(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  
  // Validaciones y lógica del servidor
  await signIn('credentials', { email, password });
}
```

## 🔄 Próximas Mejoras

1. **Validación con Zod**: Implementar esquemas de validación
2. **Manejo de Errores**: Mejorar el manejo de errores
3. **Loading States**: Agregar estados de carga
4. **Logging**: Implementar logging de acciones
5. **Rate Limiting**: Agregar límites de tasa
6. **Email Verification**: Implementar verificación por email

## 🛠️ Beneficios Técnicos

- **Performance**: Server Actions son más eficientes
- **SEO**: Mejor indexación por motores de búsqueda
- **UX**: Mejor experiencia de usuario
- **Security**: Validaciones del lado del servidor
- **Maintainability**: Código más organizado y mantenible
