import dedent from "dedent";
import { Snippet } from "./types";

export const snippets: Snippet[] = [
    {
        id: 1,
        title: 'Adder',
        description: 'Add two numbers',
        code: dedent`
            function add(a: number, b: number): number {
                return a + b;
            }
        `,
        output: null,
        functions: [],
        functionValues: {},
        executions: {}
    }
]