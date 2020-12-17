let data = `35
111
135
32
150
5
106
154
41
7
27
117
109
63
64
21
138
98
40
71
144
13
66
48
12
55
119
103
54
78
65
112
39
128
53
140
77
34
28
81
151
125
85
124
2
99
131
59
60
6
94
33
42
93
14
141
92
38
104
9
29
100
52
19
147
49
74
70
84
113
120
91
97
17
45
139
90
116
149
129
87
69
20
24
148
18
58
123
76
118
130
132
75
110
105
1
8
86`;



data = data.split("\n").map((v) => parseInt(v));

data.sort((a, b) => a - b);

const joltsBetweenAdapters = data.map((v, i, d) => {
  return i === 0 ? v : v - d[i - 1];
});

const jolt1 = joltsBetweenAdapters.filter((v) => v === 1).length;
const jolt3 = joltsBetweenAdapters.filter((v) => v === 3).length + 1;


// [1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
// [1, 4,       7, 10,     12, 15, 16, 19]

const choiceMap = {
  1: 1,
  2: 2,
  3: 4,
  4: 7,
};

const ones =[]
let len = 0
let prev = 3
for (const one of joltsBetweenAdapters) {
  if(one===1){
    len +=1
  }else if(one === 3 && prev === 1){
    ones.push(len)
    len=0
  }
  prev = one
}

console.log(
  ones,
  ones.reduce((acc, v) => {
    return acc * choiceMap[v + ""];
  }, 1)
);
