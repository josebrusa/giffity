import { act, renderHook } from '@testing-library/react-hooks';
import useForm from "./hook";

test('should change keyword', () => {
    const { result } = renderHook(() => useForm())

    act(() => {
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
})

test('should use initial values', () => {
    const { result } = renderHook(() => useForm({
        initialKeyword: 'matrix'
    }))

    expect(result.current.keyword).toBe('matrix')
})