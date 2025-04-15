
import * as React from "react"

const MOBILE_BREAKPOINT = 640
const TABLET_BREAKPOINT = 1024

export function useBreakpoint() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [isTablet, setIsTablet] = React.useState<boolean>(false)

  React.useEffect(() => {
    const mobileQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const tabletQuery = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px) and (max-width: ${TABLET_BREAKPOINT - 1}px)`)
    
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      setIsTablet(window.innerWidth >= MOBILE_BREAKPOINT && window.innerWidth < TABLET_BREAKPOINT)
    }
    
    mobileQuery.addEventListener("change", onChange)
    tabletQuery.addEventListener("change", onChange)
    onChange()
    
    return () => {
      mobileQuery.removeEventListener("change", onChange)
      tabletQuery.removeEventListener("change", onChange)
    }
  }, [])

  return { isMobile, isTablet, isDesktop: !isMobile && !isTablet }
}

export function useIsMobile() {
  const { isMobile } = useBreakpoint()
  return isMobile
}
