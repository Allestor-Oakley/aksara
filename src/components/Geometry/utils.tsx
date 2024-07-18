export interface Props {
    show: boolean,
    name: Subject
}

export const SubjectColor = {
    biology : "var(--green2)",
    chemistry : "var(--blue2)",
    physics : "var(--yellow2)",
    math : "var(--red2)",
}
export type Subject = keyof typeof SubjectColor
export function getColor(subj: Subject) {
    return SubjectColor[subj];
}
