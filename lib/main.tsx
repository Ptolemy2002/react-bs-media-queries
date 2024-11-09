import MediaQuery, { useMediaQuery } from "react-responsive";
import { Breakpoint, BreakpointComparison, breakpointComparisonRange, breakpointToIndex } from "@ptolemy2002/bs-utils";

export function useBreakpointQuery(breakpoint: Breakpoint | number, comparison: BreakpointComparison = "same"): boolean {
    const [minPixels, maxPixels] = breakpointComparisonRange(breakpoint, comparison);

    if (maxPixels === null) {
        return useMediaQuery({ minWidth: minPixels });
    } else if (minPixels === 0) {
        return useMediaQuery({ maxWidth: maxPixels });
    } else {
        return useMediaQuery({ minWidth: minPixels, maxWidth: maxPixels });
    }
}

export type BSMediaQueryProps = {
    children: React.ReactNode;
    breakpoint: Breakpoint | number;
    comparison?: BreakpointComparison;
};
export function BSMediaQuery({ children, breakpoint, comparison = "same" }: BSMediaQueryProps) {
    const [minPixels, maxPixels] = breakpointComparisonRange(breakpoint, comparison);

    if (maxPixels === null) {
        return <MediaQuery minWidth={minPixels}>{children}</MediaQuery>;
    } else if (minPixels === 0) {
        return <MediaQuery maxWidth={maxPixels}>{children}</MediaQuery>;
    } else {
        return <MediaQuery minWidth={minPixels} maxWidth={maxPixels}>{children}</MediaQuery>;
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