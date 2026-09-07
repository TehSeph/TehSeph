# Unity Project Instructions

These instructions apply to AI agents working on Unity projects in this repository.

This document supplements the repository's `AGENTS.md`.

Follow both documents. If a Unity-specific instruction conflicts with a general instruction, the Unity-specific instruction takes precedence.

---

# 1. Unity Project Structure

Treat Unity project files according to their intended purpose.

Generally source-controlled project files include:

- `Assets/`
- `Packages/`
- `ProjectSettings/`

Do not manually modify generated directories unless explicitly required and the consequences are understood.

In particular, avoid manually editing or relying on generated contents of:

- `Library/`
- `Temp/`
- `Logs/`
- `obj/`

Follow the project's existing `.gitignore` configuration.

---

# 2. Asset and Meta File Safety

**Unity `.meta` files are part of the asset identity system.**

Do **NOT**:

- Delete `.meta` files independently from their corresponding assets.
- Arbitrarily recreate or modify `.meta` files.
- Move or rename assets without considering their associated `.meta` files.
- Duplicate assets in ways that could unintentionally alter asset identity.
- Manually modify GUID references unless specifically required and the relevant serialization behavior is understood.

When moving or renaming assets, preserve Unity's existing asset relationships.

Avoid unnecessary asset movement or reorganization.

---

# 3. Generated and Serialized Files

Do not manually modify generated Unity files unless explicitly required.

Exercise particular caution with:

- Scenes
- Prefabs
- ScriptableObjects
- Animation assets
- Serialized configuration
- Package configuration

Unity serialization can create large and difficult-to-review changes.

Prefer the smallest serialized change necessary to complete the task.

Do not reformat or rewrite large serialized files.

---

# 4. Scenes and Prefabs

Before modifying scenes or prefabs:

1. Identify the purpose of the relevant asset.
2. Inspect related scripts and dependencies.
3. Determine whether the requested behavior can be implemented without unnecessary scene or prefab changes.

When modifying scenes or prefabs:

- Preserve existing object relationships unless the task requires changing them.
- Avoid unrelated hierarchy cleanup.
- Avoid unnecessary object renaming.
- Avoid modifying unrelated components.
- Consider serialized references and dependencies.

Do not make broad scene-wide changes for a narrowly scoped feature.

---

# 5. Unity C# Code

When modifying Unity C# code:

- Follow existing project architecture and conventions.
- Respect Unity lifecycle behavior.
- Avoid unnecessary work in frequently called methods.
- Consider object lifetime and scene transitions.
- Consider serialized references and inspector configuration.
- Avoid introducing hidden dependencies between unrelated systems.

Do not introduce a new architectural pattern if the existing project already uses a different established pattern.

---

# 6. Packages and Dependencies

Before adding or changing a Unity package:

1. Check whether the required functionality already exists.
2. Check the existing `Packages/` configuration.
3. Determine whether the package is compatible with the project's Unity version.
4. Avoid any unnecessary package upgrades.

Do not upgrade unrelated Unity packages as part of another task.

Treat changes to these files as significantly breaking changes:

- `Packages/manifest.json`
- `Packages/packages-lock.json`

---

# 7. Testing and Validation

After substantive Unity changes, perform appropriate validation when practical.

Depending on the project, this may include:

- C# compilation.
- Unity Test Framework tests.
- Play Mode tests.
- Edit Mode tests.
- Project-specific build validation.
- Manual verification within the Unity Editor.

Do not claim that Unity changes are fully verified if the Unity Editor or relevant test suite was not actually run.

Clearly distinguish between:

- Code-level validation.
- Automated testing.
- Unity Editor verification.
- Runtime testing.

---

# 8. Unity Change Review

Before completing a significant Unity-related task, inspect the resulting changes for:

- Unintended `.meta` modifications.
- Broken asset references.
- Unrelated scene or prefab changes.
- Unexpected serialized-file changes.
- Unnecessary package modifications.
- Changes to generated directories.
- Potential lifecycle or initialization issues.

Report any validation that could not be performed.

# 9. Completion Standard

For substantive Unity-related work, a task is generally complete when:

1. The requested behavior or change has been implemented.
2. Relevant Unity asset, serialization, and project conventions have been preserved.
3. The resulting changes have been reviewed for unintended `.meta`, scene, prefab, package, or generated-file modifications.
4. Appropriate validation has been attempted, such as compilation, automated tests, Unity Editor verification, or runtime testing.
5. Any validation that could not be performed has been clearly disclosed.
6. The resulting changes remain within the requested scope.
