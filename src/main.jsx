import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rckihpzhqrdydxqvawlq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJja2locHpocXJkeWR4cXZhd2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMjkxMDQsImV4cCI6MjA0NzkwNTEwNH0.7nuy1LSZ5FgNjReMye7xe7rl0ZWBuZ7ti8ydkrJR_e0'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 