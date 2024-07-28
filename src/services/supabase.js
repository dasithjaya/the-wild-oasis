import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fighxsflqfbikwjauzkf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZ2h4c2ZscWZiaWt3amF1emtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxNDkyNjEsImV4cCI6MjAzNzcyNTI2MX0.HAe2gQXCh1dssTCsc04zxWvvWvBYOIYl9-H10k_FVIE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
