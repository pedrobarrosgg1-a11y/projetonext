import { useCallback, useMemo } from 'react';
import { Link } from 'lucide-react';
import {
  ShareConfig,
  SOCIAL_PROVIDERS,
  SocialProvider,
} from './social-providers';
import { useClipBoard } from '../use-clipboard';

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export const useShare = ({ url, title, text, clipboardTimeout = 2000 }: UseShareProps) => {
  const { isCopied, HandleCopy } = useClipBoard({timeout: clipboardTimeout});

  

  const share = useCallback(async(provider: SocialProvider) => {
      try {
        if (provider === 'clipboard') {
          return await HandleCopy(url);
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];
        if (!providerConfig) {
          throw new Error(`Provider não suportado: ${provider}`);
        }

        const shareUrl = providerConfig.shareUrl({
          url,
          ...(title && { title }),
          ...(text && { text }),
        });
        const shareWindow = window.open(
          shareUrl,
          '_blank',
          'width=600, height=600, location=yes, status=yes'
        );

        return !!shareWindow;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [url, title, text, HandleCopy]
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })), {
        provider: 'clipboard',
        name: isCopied ? 'Link Copiado!' : 'Copiar Link',
        icon: <Link className='h-4 w-4'/>,
        action: () => share('clipboard')
      }
    ], [isCopied, share]);

  return { shareButtons };
};