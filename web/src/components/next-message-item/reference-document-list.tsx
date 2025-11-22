import { Card, CardContent } from '@/components/ui/card';
import { Docagg } from '@/interfaces/database/chat';
import FileIcon from '../file-icon';
import NewDocumentLink from '../new-document-link';

export function ReferenceDocumentList({ list }: { list: Docagg[] }) {
  return (
    <section className="flex gap-3 flex-wrap">
      {list.map((item) => (
        <Card
          key={item.doc_id}
          className={item.selected ? 'border-primary shadow-md' : undefined}
        >
          <CardContent className="p-2 flex gap-2 items-center">
            <FileIcon id={item.doc_id} name={item.doc_name}></FileIcon>
            <div className="flex flex-col gap-1 text-sm">
              <NewDocumentLink
                documentId={item.doc_id}
                documentName={item.doc_name}
                prefix="document"
                link={item.url}
                className="text-text-sub-title-invert"
              >
                {item.doc_name}
              </NewDocumentLink>
              {typeof item.similarity_sum === 'number' && (
                <span className="text-xs text-text-sub-title">
                  Similarity score: {item.similarity_sum.toFixed(3)}
                </span>
              )}
              {item.selected && (
                <span className="text-xs font-semibold text-primary">
                  Full document sent to the LLM
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
