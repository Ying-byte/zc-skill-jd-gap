# 技能缺口诊断

Standard **MCP + Skill** for any Agent Host (Cursor / Claude Code / Codex / Zhencheng).

对照岗位要求标出短板与学习优先级。

> One capability = one GitHub project. This folder is the sellable unit.

## Quick start

```bash
cd zc-skill-jd-gap
npm i
node stdio_mcp_server.mjs
```

## Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "zc-skill-jd-gap": {
      "command": "node",
      "args": ["/ABS/PATH/zc-skill-jd-gap/stdio_mcp_server.mjs"]
    }
  }
}
```

Optional (use Zhencheng live tools):

```json
"env": {
  "ZC_AGENT_API_URL": "https://your-zhencheng-host",
  "ZC_MCP_TOKEN": "your-token"
}
```

## Tools

| Tool | Args |
|------|------|
| `diagnose_gap` | `query?` `jdText?` `profileText?` `location?` `notes?` `limit?` (number) |

## Skill

See `skills/zc-skill-jd-gap/SKILL.md`.

## License

MIT — see `LICENSE`.
