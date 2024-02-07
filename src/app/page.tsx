"use client";

import { clientComponent } from "@/components";

const LoginPage = clientComponent(
  import("@/@core/presentation").then((mod) => mod.LoginPage)
);

export default LoginPage;
