#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "jd-gap",
  "titleZh": "技能缺口诊断",
  "summary": "对照岗位要求标出短板与学习优先级。",
  "tools": [
    "diagnose_gap"
  ],
  "proxyTools": {
    "diagnose_gap": "zc_gap_diagnose"
  },
  "localKind": "eval"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
