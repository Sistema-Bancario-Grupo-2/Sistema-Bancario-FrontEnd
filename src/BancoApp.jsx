import { AuthProvider } from "./auth"
import { Principal } from "./pages/Principal"
import { AppRouter } from "./routes/AppRouter"

export const BancoApp = () => {
  return (
    <AuthProvider>

      <AppRouter />

    </AuthProvider>
  )
}
