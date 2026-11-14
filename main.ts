// ai-happy-01 entry (Node 22, standard library only).
// The image this entry ships is entry.png beside this file. The program
// copies it, byte for byte, to the grader's output directory so the judge
// sees exactly those bytes as /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The copy is byte-identical every run: the same file is written each time,
// so the grader's two runs produce the same bytes.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
