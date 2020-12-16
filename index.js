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

data = `16
10
15
5
1
11
7
19
6
12
4`;

data = data.split("\n").map((v) => parseInt(v));

data.sort((a, b) => a - b);

console.log(data);
const joltsBetweenAdapters = data.map((v, i, d) => {
  return i === 0 ? v : v - d[i - 1];
});

console.log(joltsBetweenAdapters, joltsBetweenAdapters.length, data.length);
const jolt1 = joltsBetweenAdapters.filter((v) => v === 1).length;
const jolt3 = joltsBetweenAdapters.filter((v) => v === 3).length + 1;

console.log(jolt1, jolt3, jolt1 * jolt3);

let outputJolt = Math.max(...data) + 3;
let removable = [];
data.reverse().map((v, i, d) => {
  console.log(outputJolt, outputJolt - v, v - (d[i + 1] ? d[i + 1] : 0));
  if (outputJolt - v < 3 && v - (d[i + 1] ? d[i + 1] : 0) == 1) {
    removable.push(data.length - 1 - i);
  } else {
    outputJolt = v;
  }
  return v;
});

console.log(removable);
// [1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
// [1, 4,       7, 10,     12, 15, 16, 19]
