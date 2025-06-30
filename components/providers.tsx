import React from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { NuqsAdapter } from "nuqs/adapters/next";


export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <NuqsAdapter>
        {children}
      </NuqsAdapter>
    </AppRouterCacheProvider>
  );
}