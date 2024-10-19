import { BSMediaQuery, Breakpoint, breakpoints, useCurrentBreakpoint, useCurrentBreakpointIndex } from "@ptolemy2002/react-bs-media-queries";

function App() {
  const currentBreakpoint = useCurrentBreakpoint();
  const currentBreakpointIndex = useCurrentBreakpointIndex();

  return (
      <>
        <h1>BS Media Queries</h1>
          
        <p>Current breakpoint: {currentBreakpoint}</p>
        <p>Current breakpoint index: {currentBreakpointIndex}</p>
          
        {
            breakpoints.map(breakpoint => (
                <Tests key={`${breakpoint}-test`} breakpoint={breakpoint} />
            ))
        }
      </>
  )
}

function Tests({breakpoint}: {breakpoint: Breakpoint}) {
    return (
        <>
            <BSMediaQuery breakpoint={breakpoint} comparison="max">
                <p>Shown on {breakpoint} or smaller screens</p>
            </BSMediaQuery>
            <BSMediaQuery breakpoint={breakpoint} comparison="min">
                <p>Shown on {breakpoint} or larger screens</p>
            </BSMediaQuery>
            <BSMediaQuery breakpoint={breakpoint} comparison="same">
                <p>Shown only on {breakpoint} screens</p>
            </BSMediaQuery>
        </>
    )
}

export default App
