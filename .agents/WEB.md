# Web Project Instructions

These instructions apply to AI agents working on web-related code in this repository.

This document supplements the repository's `AGENTS.md`.

Follow both documents. If a web-specific instruction conflicts with a general instruction, the web-specific instruction takes precedence.

---

# 1. Understand the Existing Stack

Before making significant web-related changes:

1. Inspect the project's package manifest and lockfile.
2. Identify the framework, runtime, package manager, and build tooling.
3. Inspect relevant configuration files.
4. Identify the existing application architecture and conventions.

Do not assume that a project uses a particular framework, routing system, styling approach, test framework, or package manager without verifying it.

Do not introduce tooling from another ecosystem merely because it is familiar.

---

# 2. Package Manager and Dependencies

Use the package manager already established by the repository.

Do **NOT**:

- Switch package managers without explicit authorization.
- Create a new lockfile using a different package manager.
- Regenerate the lockfile unnecessarily.
- Upgrade unrelated dependencies as part of another task.
- Add a dependency when existing project capabilities adequately solve the problem.

Before adding a dependency:

1. Check whether equivalent functionality already exists.
2. Check existing dependencies.
3. Consider bundle size and maintenance cost.
4. Verify compatibility with the existing framework and runtime.

Treat package manifest and lockfile changes as significant breaking changes.

---

# 3. Project Architecture

Follow the project's established architecture.

Before creating new directories or abstractions:

1. Inspect similar existing features.
2. Follow existing naming and organizational conventions.
3. Prefer extending existing patterns over introducing parallel patterns.

Do not reorganize unrelated parts of the application while implementing a focused feature.

Avoid unnecessary architectural changes.

---

# 4. Type Safety

When the project uses a typed language such as TypeScript:

- Preserve and follow existing type-safety conventions.
- Prefer existing domain types and interfaces.
- Avoid introducing `any` merely to bypass type errors.
- Do not suppress type errors without understanding their cause.
- Keep runtime validation and compile-time typing conceptually distinct.

Do not weaken existing compiler settings merely to make new code compile.

---

# 5. Frontend Changes

When modifying user-facing interfaces:

1. Inspect existing components and styling patterns.
2. Reuse existing components when appropriate.
3. Preserve consistency with the existing design system.
4. Avoid introducing a second styling methodology unnecessarily.
5. Keep changes focused on the requested behavior.

Do not redesign unrelated pages or components.

Avoid unnecessary visual changes when the requested task is behavioral.

---

# 6. Accessibility

For user-facing changes, consider accessibility as part of the implementation rather than an optional enhancement.

Where applicable:

- Use semantic HTML.
- Ensure interactive elements are accessible by keyboard.
- Provide accessible labels for controls.
- Preserve meaningful focus behavior.
- Do not rely solely on color to communicate essential information.
- Use appropriate alternative text for meaningful images.

Follow existing accessibility conventions and tooling within the project.

Do not introduce unnecessary ARIA attributes when native HTML semantics provide the correct behavior.

---

# 7. Responsive and Cross-Environment Behavior

When modifying user-facing layouts:

- Prefer mobile-first layouts and behaviors.
- Preserve existing responsive behavior.
- Consider all relevant viewport sizes.
- Avoid introducing unnecessary fixed dimensions.
- Avoid assumptions about a single browser or screen size.

Do not claim cross-browser compatibility unless it has been tested and is supported by the project's existing compatibility targets.

---

# 8. Client and Server Boundaries

When working on full-stack or hybrid web applications:

1. Identify whether code executes on the client, server, build system, or another runtime.
2. Preserve existing boundaries between client and server code.
3. Do not expose server-side secrets or sensitive logic to client-side bundles.
4. Validate untrusted data at all appropriate boundaries.

Do not move sensitive server-side logic into client-side code merely for convenience.

Do not assume browser APIs are available in server-side environments.

---

# 9. API and External Data

When modifying APIs or code that consumes external data:

- Preserve existing API contracts unless changes are explicitly required.
- Validate all untrusted external input.
- Handle expected error conditions.
- Consider loading and failure states for user-facing requests.
- Avoid silently swallowing errors.

Do not change externally observable API behavior without considering existing consumers.

If an API contract must change, identify potentially affected clients or services and relay that information for other developers.

---

# 10. Forms and User Input

Treat all user-controlled input as untrusted until appropriately handled.

When working with forms or user input:

- Follow existing validation patterns.
- Provide clear user-facing validation where appropriate.
- Validate data at all appropriate trust boundaries.
- Preserve existing error handling behavior unless improvement is required.

Do not rely solely on client-side validation for data that also requires server-side validation.

---

# 11. Security

When making web-related changes, consider:

- Authentication.
- Authorization.
- Input validation.
- Output encoding.
- Exposure of secrets.
- Cross-site scripting risks.
- Injection risks.
- Unsafe redirects.
- Sensitive data in client-side bundles or logs.

**Do not introduce security mechanisms casually or disable existing security controls to simplify development.**

If a requested change introduces a significant security concern, identify it clearly for review before writing any implementation.

---

# 12. State and Side Effects

Before introducing new state:

1. Check whether the required state already exists.
2. Determine the appropriate ownership and lifetime of the state.
3. Follow the project's existing state-management patterns.

Avoid duplicating state unnecessarily.

Keep side effects explicit and appropriately scoped.

Do not introduce new state-management libraries without clear justification.

---

# 13. Performance

For performance-sensitive changes:

- Avoid unnecessary repeated work.
- Avoid unnecessary network requests.
- Avoid large dependencies for small features.
- Follow existing loading and code-splitting strategies.
- Avoid premature optimization.

Do not claim a change improves performance unless performance was actually measured or the improvement is otherwise directly verifiable.

Prioritize correctness and maintainability unless performance is an explicit requirement.

---

# 14. Error Handling and User Experience

When adding asynchronous or failure-prone behavior, consider:

- Loading states.
- Error states.
- Empty states.
- Retry behavior where appropriate.

Follow existing project patterns.

Do not leave users without meaningful feedback when an expected failure can occur.

**Avoid exposing sensitive implementation details in user-facing error messages.**

---

# 15. Testing

When changing web functionality, identify the appropriate level of validation.

Depending on the project, this may include:

- Unit tests.
- Component tests.
- Integration tests.
- End-to-end tests.
- Type checking.
- Linting.
- Production builds.
- Manual browser testing.

Follow the project's existing testing strategy.

Do not introduce a new testing framework solely for a small change unless explicitly requested.

Do not claim that browser behavior was verified unless it was actually tested.

---

# 16. Build and Tooling Changes

Before modifying build, bundler, linting, formatting, or deployment configuration:

1. Understand why the existing configuration is structured as it is.
2. Determine the narrowest change necessary.
3. Consider downstream effects on development and production environments.

Treat changes to infrastructure and tooling configuration as potentially higher risk than ordinary application changes.

**Do not modify configuration to merely silence warnings or errors.**

---

# 17. Environment Configuration

Follow the repository's existing environment-variable conventions.

Do **NOT**:

- Commit `.env` files containing secrets.
- Hard-code credentials or API keys.
- Expose server-only variables to client-side code.
- Invent a new environment-variable convention without justification.

If a new configuration variable is required:

1. Document its purpose.
2. Follow existing naming conventions.
3. Update non-secret example configuration where appropriate.
4. Clearly identify the expected runtime environment.

---

# 18. Web Change Review

Before completing a significant web-related task, review the resulting changes for:

- Unintended package or lockfile changes.
- Broken imports or module boundaries.
- Type errors.
- Client/server boundary violations.
- Exposed secrets or sensitive data.
- Missing loading or error handling.
- Accessibility regressions.
- Unnecessary UI or styling changes.
- Unrelated refactoring.
- Compatibility with existing project conventions.

Report any validation that could not be performed.

---

# 19. Completion Standard

For substantive web-related work, a task is generally complete when:

1. The requested behavior has been implemented.
2. The implementation follows existing project conventions.
3. Relevant type checks, tests, linting, or builds have been attempted.
4. User-facing changes have appropriate error and loading behavior where applicable.
5. Significant accessibility or security concerns have been considered.
6. The resulting changes remain within the requested scope.
