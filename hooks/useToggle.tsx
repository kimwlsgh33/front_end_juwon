import { useCallback, useState } from "react";

export const useToggle = (initialValue: boolean = false, deps: any[] = []) => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggleValue = useCallback(() => {
    setValue((value) => !value);
  }, deps);
  return [value, toggleValue];
};
