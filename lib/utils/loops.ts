import { LoopsClient } from "loops";

export const loops = new LoopsClient(process.env.LOOPS_API_KEY!);

// const resp = await loops.createContact("email@provider.com");
