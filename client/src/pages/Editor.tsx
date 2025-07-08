import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import socket from '../socket';

export default function Editor() {
  const { slug } = useParams();
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (slug) {
      socket.emit('join-room', slug);
      socket.on('receive-code', (code) => {
        if (textRef.current) {
          textRef.current.value = code;
        }
      });
    }
    return () => {
      socket.disconnect();
    };
  }, [slug]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    socket.emit('code-change', { roomId: slug, code: e.target.value });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Collaborative Editor: {slug}</h1>
      <textarea
        ref={textRef}
        onChange={handleChange}
        className="w-full h-96 border p-2"
      ></textarea>
    </div>
  );
}
