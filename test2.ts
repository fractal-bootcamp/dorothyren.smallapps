
const poem: Poem = [
    {
        content: "The Windhover",
        position: 0
    },
    {
        content: "by Gerard Manley Hopkins",
        position: 1
    },
    {
        content: "To Christ our Lord",
        position: 2
    },
    {
        content: "I caught this morning morning's minion, king-",
        position: 3
    },
    {
        content: "dom of daylight's dauphin, dapple-dawn-drawn Falcon, in his riding",
        position: 4
    },
    {
        content: "Of the rolling level underneath him steady air, and striding",
        position: 5
    },
    {
        content: "High there, how he rung upon the rein of a wimpling wing",
        position: 6
    },
    {
        content: "In his ecstasy! then off, off forth on swing,",
        position: 7
    },
    {
        content: "As a skate's heel sweeps smooth on a bow-bend: the hurl and gliding",
        position: 8
    },
    {
        content: "Rebuffed the big wind. My heart in hiding",
        position: 9
    },
    {
        content: "Stirred for a bird, -- the achieve of, the mastery of the thing!",
        position: 10
    },
    {
        content: "Brute beauty and valour and act, oh, air, pride, plume, here",
        position: 11
    },
    {
        content: "Buckle! AND the fire that breaks from thee then, a billion",
        position: 12
    },
    {
        content: "Times told lovelier, more dangerous, O my chevalier!",
        position: 13
    },
    {
        content: "No wonder of it: shéer plód makes plough down sillion",
        position: 14
    }, {
        content: "Shine, and blue-bleak embers, ah my dear,",
        position: 15
    }, {
        content: "Fall, gall themselves, and gash gold-vermilion.",
        position: 16
    }
]

type Poem = Line[];

interface Line {
    content: string
    position: number
}

function getLine(line: Line): string {
    return line.content
}

console.log(getLine(poem[4]))

poem