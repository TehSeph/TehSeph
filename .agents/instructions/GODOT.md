# Godot Project Instructions

These instructions apply to AI agents working on Godot projects in this repository.

This document supplements the repository's `AGENTS.md`.

Follow both documents. If a Godot-specific instruction conflicts with a general instruction, the Godot-specific
instruction takes precedence.

---

# 1. Godot Project Structure

Before making changes, identify the project's Godot version and inspect the existing project structure.

Typical source-controlled Godot project files include:

- `project.godot`
- `*.gd`
- `*.tscn`
- `*.tres`
- `*.gdshader`
- `*.godot`-related project configuration
- `assets/` or other project-specific asset directories

Follow the project's existing `.gitignore` configuration.

Follow the project's existing directory and naming conventions.

---

# 2. Godot Version

Determine the Godot version from the repository before making engine-specific changes.

Do not assume that the project uses the latest Godot version.

Avoid introducing APIs, nodes, properties, or project settings that are unavailable in the project's configured
Godot version.

Do not upgrade the Godot version as part of another task unless explicitly requested.

---

# 3. Generated Files

Do not intentionally modify generated or editor-generated files unless explicitly required.

In particular, be cautious with:

- `.godot/`
- Imported asset data
- Editor caches
- Generated build output
- Temporary files

---

# 4. Scenes and Resources

Godot scenes and resources can contain serialized references between nodes, scripts, resources, and external assets.

When modifying `.tscn` or `.tres` files:

- Make the smallest necessary change.
- Preserve existing resource references.
- Preserve node relationships unless the task requires changing them.
- Avoid unnecessary reordering or rewriting of serialized content.
- Inspect the resulting diff for unrelated changes.

Do not manually edit serialized identifiers or resource references unless necessary and their purpose is understood.

---

# 5. Nodes and Scene Structure

When modifying a scene:

1. Inspect the relevant scene hierarchy.
2. Identify scripts and resources attached to affected nodes.
3. Check for references to the affected nodes from other scripts or resources.
4. Make the smallest appropriate structural change.

Avoid unnecessary:

- Node renaming.
- Node movement within the hierarchy.
- Hierarchy restructuring.
- Component/property changes.
- Scene-wide cleanup.

Remember that node names and scene paths may be referenced directly by scripts.

---

# 6. GDScript

When modifying GDScript:

- Follow the project's existing coding conventions.
- Prefer clear and idiomatic GDScript.
- Use static typing when the project already uses it consistently.
- Preserve existing node lifecycle conventions.
- Respect Godot's signal and scene patterns.
- Avoid unnecessary coupling between unrelated nodes or systems.

Be particularly careful with:

- `_ready()`
- `_process()`
- `_physics_process()`
- `@onready`
- `@export`
- Signals
- Scene instantiation
- Node ownership and lifetime

Do not introduce a new architectural pattern if the existing project already uses a different established pattern.

---

# 7. Godot Signals

Prefer Godot's established signal system for communication between loosely coupled nodes when appropriate.

Before adding a new signal:

1. Check whether an existing signal already provides the required behavior.
2. Inspect existing signal connections.
3. Determine whether the signal should be defined by the emitting node or another appropriate system.

Avoid creating unnecessary global or tightly coupled communication mechanisms.

When modifying signals, check both their declaration and their connection or consumption sites.

---

# 8. Resources and Assets

Treat reusable Godot resources as project assets rather than disposable implementation details.

Exercise particular care with:

- `.tres`
- `.res`
- Imported textures
- Materials
- Shaders
- Audio resources
- Animation resources
- Fonts
- TileSets
- Other project-specific resource types

Do not replace or regenerate assets unnecessarily.

Preserve existing resource references when modifying scenes or scripts.

---

# 9. Input

When modifying player or application input:

1. Inspect the existing Input Map in `project.godot`.
2. Reuse existing actions where appropriate.
3. Prefer named input actions over hard-coded device-specific inputs when consistent with the project.
4. Consider keyboard, mouse, controller, and other supported input methods where relevant.

Do not introduce duplicate input actions without a clear reason.

Do not silently change existing input behavior.

---

# 10. Physics and Gameplay

When modifying gameplay or physics behavior:

- Preserve the distinction between frame-based and physics-based processing.
- Follow the project's existing physics architecture.
- Avoid modifying physics state from inappropriate update loops.
- Consider collision layers and masks before changing collision behavior.
- Consider scene ownership and object lifetime.

Do not make broad gameplay-system changes for a narrowly scoped behavior change.

---

# 11. UI

When modifying Godot UI:

- Follow the existing Control-node hierarchy and layout conventions.
- Preserve anchors, containers, and sizing behavior unless changes are required.
- Reuse existing UI components where appropriate.
- Consider different window sizes and aspect ratios.
- Preserve keyboard/controller navigation where the project supports it.

Avoid replacing established UI systems with unrelated approaches without a clear reason.

---

# 12. Shaders and Rendering

When modifying shaders or rendering behavior:

1. Determine which rendering backend and Godot version the project uses.
2. Inspect existing shader conventions.
3. Make the smallest appropriate change.
4. Consider compatibility with the project's target platforms.

Do not assume that shader syntax or rendering features are interchangeable between Godot versions or rendering backends.

---

# 13. Third-Party Plugins and Add-ons

Before adding or modifying a Godot plugin or add-on:

1. Check whether the functionality already exists in the project.
2. Inspect the existing `addons/` directory and project configuration.
3. Determine compatibility with the project's Godot version.
4. Consider whether the dependency is necessary.

Do not add third-party plugins to solve problems that can reasonably be handled using existing project functionality.

Do not modify third-party plugin code unless explicitly required.

---

# 14. Project Configuration

Treat `project.godot` as important project configuration.

Before modifying it:

1. Identify the specific setting required by the task.
2. Preserve unrelated settings.
3. Follow the existing formatting and organization.
4. Review the resulting diff carefully.

Do not modify global project settings such as rendering, input, display, physics, platform, or other settings without
understanding their effects.

---

# 15. Platform and Export Configuration

When modifying export or platform-specific settings:

- Identify the project's existing target platforms.
- Preserve existing export configurations unless changes are required.
- Consider platform-specific paths, permissions, rendering capabilities, and input behavior.
- Avoid changing release configuration merely to simplify local development.

Do not claim that a project successfully exports or runs on a target platform unless that platform has actually been
tested or the result is otherwise verified.

---

# 16. Testing and Validation

After substantive Godot changes, perform appropriate validation when practical.

Depending on the project, this may include:

- Godot project import/open validation.
- Script parsing or compilation.
- Godot automated tests.
- Scene validation.
- Headless execution where appropriate.
- Editor verification.
- Playtesting.
- Project export/build validation.

Clearly distinguish between:

- Static/code validation.
- Editor validation.
- Automated testing.
- Runtime testing.
- Export/build testing.

Do not claim that gameplay or runtime behavior was verified if the project was not actually run.

---

# 17. Godot Change Review

Before completing a significant Godot-related task, inspect the resulting changes for:

- Unexpected `.godot/` modifications.
- Unrelated `.tscn` or `.tres` changes.
- Broken resource references.
- Broken node paths.
- Unintended scene hierarchy changes.
- Unnecessary project configuration changes.
- Unexpected plugin modifications.
- Changes to generated files.
- Compatibility issues with the project's Godot version.

Report any validation that could not be performed.

---

# 18. Completion Standard

For substantive Godot-related work, a task is generally complete when:

1. The requested behavior or change has been implemented.
2. The implementation is compatible with the project's configured Godot version.
3. Existing scenes, resources, node relationships, and project conventions have been preserved where applicable.
4. Changes have been reviewed for unintended serialized, generated, or configuration modifications.
5. Appropriate validation, such as compilation, editor verification, or automated testing has been ran and passed.
6. Any validation that could not be performed or has failed has been clearly disclosed.
7. The resulting changes remain within the requested scope.
