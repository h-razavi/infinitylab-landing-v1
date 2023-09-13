
import { createClient } from "@supabase/supabase-js";
import { config } from 'dotenv'

config();


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwZGRxY2Fpcm54c3NiaWh5d3d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MTQyNzYsImV4cCI6MjAxMDA5MDI3Nn0.fJeApOsv9p3IEXdqFbizTQCMuW6jFV2AvJkC2aHJjGs"
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;