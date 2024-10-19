import MediaQuery, { useMediaQuery } from "react-responsive";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type BreakpointComparison = "same" | "min" | "max";

// Remove set method from breakpointMap so we can make sure it's not modified
export const breakpointMap: Readonly<Omit<Map<Breakpoint, number>, "set">> = Object.freeze(
    new Map<Breakpoint, number>([
        ["xs", 0],
        ["sm", 576],
        ["md", 768],
        ["lg", 992],
        ["xl", 1200],
        ["xxl", 1400]
    ])
);
export const breakpoints: ReadonlyArray<Breakpoint> = Object.freeze(
    Array.from(breakpointMap.keys())
);

export function breakpointToIndex(breakpoint: Breakpoint): number {
    return breakpoints.indexOf(breakpoint);
}

export function useBreakpointQuery(breakpoint: Breakpoint, comparison: BreakpointComparison = "same"): boolean {
    const breakpointIndex = breakpointToIndex(breakpoint);

    if (comparison === "max") {
        if (breakpointIndex === breakpoints.length - 1) return true;
        return useMediaQuery({ maxWidth: breakpointMap.get(breakpoints[breakpointIndex + 1])! - 1 });
    } else if (comparison === "min" || breakpointIndex === breakpoints.length - 1) {
        return useMediaQuery({ minWidth: breakpointMap.get(breakpoint) });
    } else {
        return useMediaQuery({
            minWidth: breakpointMap.get(breakpoint),
            maxWidth: breakpointMap.get(breakpoints[breakpointIndex + 1])! - 1
        });
    }
}

export type BSMediaQueryProps = {
    children: React.ReactNode;
    breakpoint: Breakpoint;
    comparison?: BreakpointComparison;
};
export function BSMediaQuery({ children, breakpoint, comparison = "same" }: BSMediaQueryProps) {
    const breakpointIndex = breakpointToIndex(breakpoint);

    if (comparison === "max") {
        if (breakpointIndex === breakpoints.length - 1) return children;
        return <MediaQuery maxWidth={breakpointMap.get(breakpoints[breakpointIndex + 1])! - 1}>{children}</MediaQuery>;
    } else if (comparison === "min" || breakpointIndex === breakpoints.length - 1) {
        return <MediaQuery minWidth={breakpointMap.get(breakpoint)}>{children}</MediaQuery>;
    } else {
        return (
            <MediaQuery minWidth={breakpointMap.get(breakpoint)} maxWidth={breakpointMap.get(breakpoints[breakpointIndex + 1])! - 1}>
                {children}
            </MediaQuery>
        );
    }
}

export function useCurrentBreakpoint(): Breakpoint {
    const xs = useBreakpointQuery("xs");
    const sm = useBreakpointQuery("sm");
    const md = useBreakpointQuery("md");
    const lg = useBreakpointQuery("lg");
    const xl = useBreakpointQuery("xl");
    const xxl = useBreakpointQuery("xxl");

    switch (true) {
        case xxl: return "xxl";
        case xl: return "xl";
        case lg: return "lg";
        case md: return "md";
        case sm: return "sm";
        case xs: return "xs";
    }
    
    return "xs";
}

export function useCurrentBreakpointIndex(): number {
    const currentBreakpoint = useCurrentBreakpoint();
    return breakpointToIndex(currentBreakpoint);
}