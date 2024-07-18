// Stolen from: https://stackoverflow.com/a/75060088
import {TouchEvent, useState} from "react";

interface SwipeInput {
    onSwipedLeft: () => void
    onSwipedRight: () => void
}

interface SwipeOutput {
    onTouchStart: (e: TouchEvent) => void
    onTouchMove: (e: TouchEvent) => void
    onTouchEnd: () => void
}

export default function useSwipe(input: SwipeInput): SwipeOutput {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const minSwipeDistance = 50;

    const onTouchStart = (e: TouchEvent) => {
        setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isRightSwipe = distance > minSwipeDistance;
        const isLeftSwipe = distance < -minSwipeDistance;
        if (isRightSwipe) {
            input.onSwipedRight();
        }
        if (isLeftSwipe) {
            input.onSwipedLeft();
        }
    }

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd
    }
}
