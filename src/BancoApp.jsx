import { AuthProvider } from "./auth"
import { AppRouter } from "./routes/AppRouter"

export const BancoApp = () => {
  return (
    <AuthProvider>

      <AppRouter />

    </AuthProvider>
  )
}
