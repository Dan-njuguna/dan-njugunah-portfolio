import { cn } from "@/utils";

export function H3(props: React.HTMLProps<HTMLHeadingElement>) {
    if (!props) return null; // base case to prevent infinite recursion

    return (
        <h3
            {...props}
            className={cn("text-2x1 font-semibold tracking-tight", props.className)}
        />
    )
}