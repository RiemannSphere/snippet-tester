export type Snippet = {
    id: number;
    title: string;
    description: string;
    code: string;
    inputs: unknown[];
    output: unknown | null;
}

export type SnippetFunction = {
    name: string;
    parameters: SnippetFunctionParameter[];
}

export type SnippetFunctionParameter = {
    name: string;
    type: string;
}

