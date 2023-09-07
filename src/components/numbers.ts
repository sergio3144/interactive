import { v4 as uuidv4 } from 'uuid';

type Numbers = {
  numberButtons: number
  id: string
}

export const colectionNumbers: Numbers[] = [
  {numberButtons: 1, id: uuidv4()},
  {numberButtons: 2, id: uuidv4()},
  {numberButtons: 3, id: uuidv4()},
  {numberButtons: 4, id: uuidv4()},
  {numberButtons: 5, id: uuidv4()}
]

