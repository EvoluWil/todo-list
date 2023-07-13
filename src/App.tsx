import React, { useState } from 'react';

import { Task } from './model/Task.model';
import { Tasks } from './components/Task/Task';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { AlertMessage } from './components/AlertMessage/AlertMessage';



type Alert = {
  type: 'SUCCESS' | 'ERROR';
  message: string;
};

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [alert, setAlert] = useState<Alert | null>(null);

  const handleAddTask = (): void => {
    if (newTask.trim() !== '') {
      const task = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, task]);
      setNewTask('');
      setAlert({ type: 'SUCCESS', message: 'Tarefa adicionada com sucesso!' });
    } else {
      setAlert({
        type: 'ERROR',
        message: 'Por favor, adicione uma tarefa válida.'
      });
    }
  };

  const handleTaskComplete = (id: number): void => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <h1>Minhas Tarefas</h1>
      <Input
        type="text"
        placeholder="Adicionar nova tarefa"
        value={newTask}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setNewTask(e.target.value)}
        label={'Nome da tarefa'}
        id={'name'}
      />
      <Button onClick={handleAddTask}>Adicionar Tarefa</Button>
        {alert && <AlertMessage type={alert.type}>{alert.message}</AlertMessage>}
      <Tasks tasks={tasks} onChange={handleTaskComplete} />
    </div>
  );
};

export default App;
