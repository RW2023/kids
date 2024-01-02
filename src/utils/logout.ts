import { supabase } from '@/utils/supabaseClient';

const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error logging out:', error);
  } else {
    // Optionally redirect to login page or handle the logged out state
    // router.push('/login'); // If using useRouter
  }
};

export default handleLogout;