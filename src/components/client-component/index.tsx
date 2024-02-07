import dynamic from "next/dynamic";

export const clientComponent = (component: any) =>
  dynamic(() => component, { ssr: false });
