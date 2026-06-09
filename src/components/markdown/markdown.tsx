import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MarkdownProps = {
  content: string;
};

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, children, ...props }) => (
          <h1 {...props} className="mb-4 text-heading-md md:text-heading-xl">
            {children}
          </h1>
        ),
        h2: ({ node, children, ...props }) => (
          <h2 {...props} className="mb-4 mt-8 text-heading-sm md:text-heading-lg">
            {children}
          </h2>
        ),
        a: ({ node, href, children, ...props }) => (
          <a href={href} {...props} className="text-blue-200 hover:underline">
            {children}
          </a>
        ),
        p: ({ node, children, ...props }) => (
          <p {...props} className="mb-6 leading-relaxed text-gray-200">{children}</p>
        ),
        strong: ({ node, children, ...props }) => (
          <strong {...props} className="font-extrabold text-white">{children}</strong>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};