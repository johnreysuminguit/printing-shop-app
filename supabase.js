import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://xhokoymygcohcpfvblei.supabase.co'
const supabaseKey = 'sb_publishable_bZQmBjTE2g8naEA5K7-5YA_Kd_oW9zH'

export const supabase = createClient(supabaseUrl, supabaseKey)