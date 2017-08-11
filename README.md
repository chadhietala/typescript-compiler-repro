# Steps to Reproduce

1. `yarn`
2. `ember s`
3. edit the file in VSCode
4. See the following output

```
file changed index.ts

Build successful (356ms) – Serving on http://localhost:4200/



Slowest Nodes (totalTime => 5% )              | Total (avg)
----------------------------------------------+---------------------
broccoli-typescript-compiler (1)              | 355ms

file changed index.ts

Build successful (295ms) – Serving on http://localhost:4200/



Slowest Nodes (totalTime => 5% )              | Total (avg)
----------------------------------------------+---------------------
broccoli-typescript-compiler (1)              | 294ms
```
