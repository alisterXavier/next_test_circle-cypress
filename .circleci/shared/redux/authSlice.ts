import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';
import { SupabaseClient, User } from '@supabase/auth-helpers-nextjs';
import { AuthError, Session } from '@supabase/supabase-js';

export interface AuthState {
  authState: {
    data: {
      user: User | null;
    };
    error: null | AuthError;
  } | null;
  isLoadingUser: boolean;
}

export interface SessionState {
  sessionState: {
    session: {
      token: string | null;
      rtoken: string | null;
    };
  } | null;
}
export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (auth: SupabaseClient<any, 'public', any> | null) => {
    if (auth) {
      const user = await auth.auth.getUser();
      return user.data.user ? user : null;
    }
    return null;
  }
);

export const fetchSession = createAsyncThunk(
  'auth/fetchSession',
  async (auth: SupabaseClient<any, 'public', any> | null) => {
    if (auth) {
      const session = await auth.auth.getSession();
      // console.log(session)
      return session.data.session
        ? {
            session: {
              token: session.data.session.access_token,
              rtoken: session.data.session.refresh_token,
            },
          }
        : null;
    }
    return null;
  }
);

// Initial state
const initialState: AuthState & SessionState = {
  authState: {
    data: {
      user: null,
    },
    error: null,
  },
  isLoadingUser: false,
  sessionState: null,
};

// Actual Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const hyrdateAction = action as PayloadAction<
        SupabaseClient,
        string,
        any,
        any
      >;
      return { ...state, ...hyrdateAction.payload.auth };
    });

    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoadingUser = true;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.authState = action.payload;
      state.isLoadingUser = false;
    });

    // Session
    builder.addCase(fetchSession.fulfilled, (state, action) => {
      state.sessionState = action.payload;
    });
  },
});

// export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;
export const selectSession = (state: AppState) => state.auth.sessionState;
export const selectUserLoadingState = (state: AppState) =>
  state.auth.isLoadingUser;

export default authSlice.reducer;
