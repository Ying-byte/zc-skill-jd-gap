---
name: zc-skill-jd-gap
description: >-
  对照岗位要求标出短板与学习优先级。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-jd-gap.
---

# 技能缺口诊断 · Skill

## When to use

- User asks for: 技能缺口诊断
- 对照岗位要求标出短板与学习优先级。

## Tools (`zc-skill-jd-gap`)

| Tool | Args |
|------|------|
| `diagnose_gap` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
