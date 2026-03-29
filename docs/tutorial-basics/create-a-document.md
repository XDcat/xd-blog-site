---
title: Harness 设计思路
description: 长任务开发为什么要用 harness，如何让 AI 持续规划、执行和验证。
tags: [AI, harness, long-running, agents]
sidebar_position: 1
---

# Harness 设计思路

> 案例来源：`/home/xdcat/.openclaw/workspace/harness-design-long-running-apps-summary.md`

这篇内容总结了长任务开发里最重要的一件事：**不要让模型独自扛完整个项目，而要给它一个能分工、能记忆、能验证的外部执行框架。**

## 核心观点

- 长任务的难点不是“会不会写”，而是“能不能持续写下去”
- 状态要外置，不能只靠模型记忆
- 生成和评估要分开
- 复杂任务更适合结构化反馈，而不是自由发挥

## 为什么值得看

如果你在做：

- AI coding agent
- UI 自动化
- 长链路工作流
- 多轮修 bug

那这篇总结会很有参考价值。

## 相关标签

#AI #harness #agents #long-running
