import { feedback } from '@/src/actions/feedback'
import Image from "next/image";

export default function Home() {
  return (
    <form action={feedback}>
      <input type="text" name='name'/>
      <textarea  name='message'/>
      <button type='submit'>Ok</button>
    </form>
  );
}
