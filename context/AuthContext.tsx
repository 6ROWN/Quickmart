"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ChildrenProps } from "@/types/types";

const AuthContext: React.FC<ChildrenProps> = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContext;
