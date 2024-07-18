interface BlockData {
    name: string,
    ring_color: string[],
    sattelite_name: string[],
    main_color: string
}

export const block_data: BlockData[] = [
    {
        name: "chemistry",
        ring_color : [
            "#FFFEFf",
            "#FED5D7",
            "#F7ADB0",
            "#F28683"
        ],
        sattelite_name: Array(8).fill("chemistry1"),
        main_color: "var(--blue1)"
    },
    {
        name: "math",
        ring_color : [
            "#FFFEFF",
            "#FED5D7",
            "#F7ADB0",
            "#F28683"
        ],
        sattelite_name: Array(8).fill("math1"),
        main_color: "var(--red1)"
    },
    {
        name: "physics",
        ring_color : [
            "#FFFEFF",
            "#FED5D7",
            "#F7ADB0",
            "#F28683"
        ],
        sattelite_name: Array(8).fill("physics1"),
        main_color: "var(--yellow1)"
    },
    {
        name: "biology",
        ring_color : [
            "#FFFEFF",
            "#FED5D7",
            "#F7ADB0",
            "#F28683"
        ],
        sattelite_name: Array(8).fill("biology1"),
        main_color: "var(--green1)"
    },
]
