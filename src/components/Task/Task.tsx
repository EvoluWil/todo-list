import { Task } from '../../model/Task.model';
import { Checkbox } from '../Checkbox/Checkbox';
import "./Tasks.css"

type TasksProps = {
  tasks: Task[];
  onChange: (taskId: number) => void;
};

export function Tasks({ tasks, onChange }: TasksProps) {
  return (
    <ul className='task-list'>
      {tasks.map(task => (
        <li key={task.id}>
          <Checkbox
            checked={task.completed}
            onChange={() => onChange(task.id)}
          />
          <span className={`task-text ${task.completed ? 'task-completed' : ''}`}>
            {task.text}
          </span>
        </li>
      ))}
    </ul>
  );
}