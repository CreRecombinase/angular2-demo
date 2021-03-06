/**
 * Stolen from: 
 */

/** Default debounce duration (in ms) */
export const DEFAULT_DEBOUNCE_DURATION = 500

/** Decorates a class method so that it is debounced by the specified duration */
export function debounce(duration) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                // Attach this function to the instance (not the class)
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: debounceFn(descriptor.value, duration)
                })

                return this[key]
            }
        }
    }
}

/** Debounces the specified function and returns a wrapper function */
export function debounceFn(method, duration = DEFAULT_DEBOUNCE_DURATION) {
    let timeoutId

    function debounceWrapper(...args) {
        if (timeoutId)
            clearTimeout(timeoutId)
        timeoutId = null


        timeoutId = setTimeout(() => {
            timeoutId = null
            method.apply(this, args)
        }, duration)
    }


    return debounceWrapper
}
