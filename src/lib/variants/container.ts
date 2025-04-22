import { tv } from "tailwind-variants";

export const container = tv({
    base: "mx-auto border-dashed border-l border-r max-w-7xl p-2 sm:p-4",
    variants:{
        element:{
            main: "pt-22 sm:pt-30"
        }
    },
    defaultVariants:{
    },
});