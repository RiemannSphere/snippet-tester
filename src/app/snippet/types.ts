// ex. "string", "number", "any", "void", etc.
export type LiteralType = string;

export type Snippet = {
    id: number;
    title: string;
    description: string;
    code: string;
    functions: SnippetFunction[];
    functionValues: SnippetFunctionValues;
    executions: SnippetFunctionExecutions;
}

// note: we don't care about a return type as we render an output as string anyway
export type SnippetFunction = {
    id: number;
    name: string;
    parameters: SnippetFunctionParameter[];
}

export type SnippetFunctionParameter = {
    id: number;
    name: string;
    type: LiteralType;
}

export type SnippetFunctionExecutions = {
    [functionId: SnippetFunction['id']]: string;
}

export type SnippetFunctionValues = {
    [functionId: SnippetFunction['id']]: SnippetFunctionParameterValues; 
}

export type SnippetFunctionParameterValues =  {
    [parameterId: SnippetFunctionParameter['id']]: string; // inputs come as strings from the user
}