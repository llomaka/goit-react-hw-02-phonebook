import { nanoid } from 'nanoid';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
