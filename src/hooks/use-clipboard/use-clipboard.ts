import { useCallback, useState, useEffect } from "react";

type UseClipboardPropos = {
  timeout?: number;
}

export const useClipBoard = ({timeout = 2000}: UseClipboardPropos) => {
  const [isCopied, setIscopied] = useState(false);

  const HandleCopy = useCallback(async (text: string) => {
    if (!navigator.clipboard) {
      console.error("Clipboard não suportado");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIscopied(true)
    } catch (error) {
        console.error('Falha ao copiar o texto:', error);
        setIscopied(false)
        return false;
    }
  }, []);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIscopied(false)
      }, timeout)
      return () => clearTimeout(timer);
    }

  }, [isCopied, timeout])

  return {
    isCopied,
    HandleCopy,
  };
};
