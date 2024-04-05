import dedent from "dedent";
import { Snippet } from "./types";

export const snippets: Snippet[] = [
    {
        id: 1,
        title: 'Hello World',
        description: 'Prints Hello World',
        code: dedent`
        export function helloWorld() {
            console.log('Hello World');
        }
        `,
        inputs: [],
        output: null
    },
    {
        id: 2,
        title: 'Hello World',
        description: 'Prints Hello World',
        code: dedent`
        export function helloWorld() {
            console.log('Hello World');
        }
        `,
        inputs: [],
        output: null
    },
    {
        id: 3,
        title: 'Adder',
        description: 'Adds two numbers',
        code: dedent`
        export function add(a, b) {
            return a + b;
        }
        `,
        inputs: ["2", "3"],
        output: "5"
    }
]