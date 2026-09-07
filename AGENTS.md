# AGENTS.md

This file defines the default instructions for AI agents working in this repository.

These instructions apply to all coding agents, implementation agents, local models, and other automated development
tools unless more specific repository instructions are provided elsewhere.

---

# 1. Agent Roles and Workflow

The default workflow for this project is:

1. Claude/Copilot (or another designated planning agent) analyzes requirements and produces an implementation plan
or review.
2. Junie/Codex (or another designated coding agent) verifies the plan against the actual repository.
3. A human developer or the primary coding agent implements the approved work.
4. Local models may be used as fallback agents for implementation, explanation, analysis, or review - never for coding.
5. A human developer always remains responsible for approving any significant changes and commits.

Plans produced by another agent are advisory rather than authoritative. Verify relevant assumptions against the actual
repository before implementing changes.

Do not assume that a plan is correct simply because another agent produced it.

---

# 2. Scope and Safety

Work only within the current repository unless explicitly instructed otherwise.

Do **NOT**:

- Use `sudo` on Linux or elevated permissions on Windows.
- Access credentials, private keys, tokens, or secrets unless explicitly required for an authorized task.
- Access unrelated directories or repositories.
- Modify files outside this repository.
- Modify global user configuration.
- Modify operating system configuration.
- Install or remove system packages.
- Delete files unless deletion is necessary for the requested task.
- Perform destructive operations without explaining them first when practical.

Do not broaden the scope of a task without explicit justification.

---

# 3. Understand Before Modifying

Before making significant changes:

1. Inspect the relevant files and existing implementation.
2. Identify applicable project conventions and configuration.
3. Determine the smallest reasonable scope of the change.
4. Check whether an existing solution or pattern already exists in the repository.

Do not redesign, rewrite, or refactor unrelated systems merely because an alternative approach appears preferable.

Preserve existing architecture and conventions unless the task explicitly requires architectural changes.

---

# 4. Planning Significant Changes

For tasks involving multiple files, architectural changes, or potentially destructive modifications:

1. Inspect the relevant implementation.
2. Identify the affected systems.
3. Verify relevant assumptions against the repository.
4. Briefly describe the proposed approach.
5. Identify files likely to be modified.
6. Identify significant risks or assumptions.
7. Implement the smallest appropriate solution.

Do not require a formal planning phase for trivial changes such as obvious typo fixes or narrowly scoped edits.

---

# 5. Implementation Principles

Prefer:

- Small, focused changes.
- Existing project patterns and abstractions.
- Readable and maintainable code.
- Explicit behavior over unnecessary cleverness.
- Minimal dependencies.
- Existing utilities before introducing new ones.

Avoid:

- Unnecessary abstractions.
- Speculative features.
- Unrelated cleanup.
- Large rewrites when a targeted fix is sufficient.
- Changing dependencies without a clear reason.
- Replacing working code solely for stylistic preference.

Do not silently change public APIs, externally observable behavior, or data formats unless required by the task.

---

# 6. Dependencies

Before adding, removing, or upgrading dependencies:

1. Check whether the required functionality already exists in the project or its existing dependencies.
2. Use the project's established package manager and dependency conventions.
3. Prefer stable and well-maintained dependencies.
4. Explain why a new dependency is necessary.

Do not add dependencies for trivial functionality that can reasonably be implemented using existing tools.

---

# 7. Testing and Validation

After making substantive changes:

1. Run the relevant existing validation commands when practical.
2. Run relevant tests when available.
3. Run linting, type checking, formatting, or build commands when applicable.
4. Report validation failures honestly.

Do **NOT**:

- Delete any tests or suppress errors to make a build pass.
- Disable any tests without explicit authorization by the user.
- Claim that a change is verified if validation was not actually performed.

If validation cannot be performed, clearly state what was not run and why.

---

# 8. Git and Version Control

Treat Git history as important project infrastructure.

Do **NOT**:

- Force-push.
- Create commits.
- Modify existing commits.
- Reset or discard unrelated changes.
- Rewrite shared history.
- Delete branches or tags.

Before completing significant work, inspect the relevant diff when practical.

Do not overwrite or revert changes made by the user or another agent unless explicitly instructed and required to
resolve a conflict.

---

# 9. Secrets and Sensitive Data

Never intentionally expose:

- Private keys
- API keys
- Passwords
- Authentication tokens
- Personal credentials
- `.env` contents
- Other secrets

Do not add secrets to source control.

If configuration requires a secret, prefer documented environment variables or the project's existing secret-management
approach.

If a secret appears to have been accidentally committed, stop and inform the user rather than attempting to conceal or
redistribute it.

---

# 10. Communication

When completing a significant task, provide a concise summary containing:

- What was changed.
- Which important files were modified.
- Validation that was performed.
- Any remaining concerns, limitations, or follow-up work.

Do not overstate certainty.

If an assumption was required because the repository did not provide enough information, always state the assumption
clearly for the user or another agent to review.

---

# 11. Agent Cooperation

Plans or suggestions from other AI agents are advisory rather than authoritative.

Before implementing another agent's proposed solution:

- Verify that the relevant files and architecture match the plan.
- Correct any incorrect assumptions.
- Follow the current repository rather than blindly following the plan.
- Preserve useful intent while adapting the implementation to the actual codebase.

When reviewing changes made by another agent:

- Focus on correctness.
- Identify regressions and edge cases.
- Check consistency with existing project architecture.
- Avoid recommending changes merely for stylistic preference.

---

# 12. Local Model Fallback

Local AI models may be used when cloud-based frontier agent access is unavailable or limited.

Because local models have weaker reasoning and context capabilities, they should **ONLY** be used for appropriately
scoped tasks such as:

- Explaining code.
- Reviewing individual files.
- Small bug fixes with simple solutions.
- Test generation.
- Documentation.
- Boilerplate implementation.
- Reviewing manageable diffs.

For complex architectural or multi-system changes, a cloud-based frontier agent or human developer is **REQUIRED**.

**All agents**, including local models, must follow the safety, scope, validation, and version-control rules described
in this document (and subsequent related documents).

---

# 13. Specialized Instructions

Before beginning work:

1. Inspect the repository for applicable project-specific instructions.
2. Check the `.agents/` directory for specialized instruction documents.
3. Read and follow all instruction documents relevant to the task.

Examples may include instructions for:

- Web development.
- Unity development.
- Specific languages.
- Frameworks.
- Testing.
- Deployment.
- Databases.

Specialized instructions supplement the instructions in this document.

If instructions conflict, use the following order of precedence:

1. Explicit instructions from the user.
2. More specific repository or subsystem instructions.
3. `AGENTS.md`.

**No specialized instruction may override safety requirements or authorize actions outside the agent's permissions.**

---

# 14. Default Completion Standard

A task should generally be considered complete only when:

1. The requested functionality has been implemented or the requested analysis has been completed.
2. Relevant existing behavior has been preserved.
3. Appropriate validation has been attempted.
4. Important limitations or unresolved issues have been disclosed.
5. The resulting changes remain within the requested scope.
