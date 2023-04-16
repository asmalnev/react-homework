import Counter from './counter';
import { useState } from 'react';

const CountersList = () => {
  const initialState = [
    {
      id: 0,
      value: 0,
      name: 'Ненужная вещь'
    },
    {
      id: 1,
      value: 4,
      name: 'Ложка'
    },
    {
      id: 2,
      value: 0,
      name: 'Вилка'
    },
    {
      id: 3,
      value: 0,
      name: 'Тарелка'
    },
    {
      id: 4,
      value: 0,
      name: 'Набор минималиста'
    }
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters(counters.filter((count) => count.id !== id));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    setCounters(counters.map((count) => {
      if (id === count.id) {
        count.value += 1;
      }

      return {...count};
    }));
  };

  const handleDecrement = (id) => {
    setCounters(counters.map((count) => {
      if (id === count.id) {
        count.value -= 1;
      }

      return {...count};
    }));
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}

      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
  );
};

export default CountersList;