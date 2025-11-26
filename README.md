# TaxMind AI — MVP (Next.js)

Quick-start steps to deploy this MVP to Vercel:

1. Create a GitHub repository (private or public) named `taxmind-app`.
2. Upload the contents of this ZIP into the repo (or push from local).
3. In Vercel, Import Project → Connect to GitHub → select the repo.
4. In Vercel project settings > Environment Variables add:
   - NEXTAUTH_SECRET (a long random string)
   - ADMIN_EMAIL (your admin email)
   - ADMIN_PASSWORD (a strong admin password)
   - PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV (optional for later)
   - NEXT_PUBLIC_BASE_URL (set to your Vercel URL after first deploy)
5. Deploy. Visit `/` for landing, `/auth/signin` to login, and `/dashboard` (protected).

Default credential (set in Vercel env):
- ADMIN_EMAIL
- ADMIN_PASSWORD

This MVP uses NextAuth Credentials provider with a single admin user (for quick testing).
Replace with Supabase, Plaid, or a proper database before production.
