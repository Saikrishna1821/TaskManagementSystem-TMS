const { createClient } = require('@supabase/supabase-js');

console.log("process.env",process.env.PORT)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
