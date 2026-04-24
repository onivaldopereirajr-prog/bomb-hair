import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean
}

export function useIntersectionObserver<T extends Element = HTMLDivElement>({
  threshold = 0.15,
  root = null,
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverOptions = {}) {
  const ref = useRef<T | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          if (triggerOnce) observer.unobserve(element)
        } else if (!triggerOnce) {
          setIsIntersecting(false)
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, root, rootMargin, triggerOnce])

  return { ref, isIntersecting }
}

