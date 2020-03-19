export const If = props => props.condition ? props.children : null
export const When = props => props.condition ? props.children : null

export const Unless = props => !props.condition ? props.children : null
