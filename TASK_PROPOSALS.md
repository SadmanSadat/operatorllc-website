# Task Proposals from Codebase Review

## 1) Typos/wording cleanup
**Issue found:** The page meta description uses awkward possessive wording: `Austin Texas's premier...`, which reads like a typo and can look unpolished in search snippets.

**Proposed task:** Update SEO metadata copy to use correct location punctuation and possessive style (e.g., `Austin, Texas premier...` or `Austin, Texas' premier...`) and run a quick copy pass for other visible text.

## 2) Functional bug fix
**Issue found:** The smooth-scroll handler attaches to every anchor with `href^="#"`, but explicitly exits early for `href="#"` without `preventDefault()`. Placeholder links in the footer/social area use `href="#"`, so clicks trigger browser default behavior (jump to top), which is a UX bug.

**Proposed task:** Normalize placeholder links to real URLs where available and update the click handler so `href="#"` links never jump unexpectedly (either prevent default for placeholders or exclude them from the selector).

## 3) Comment/docs discrepancy
**Issue found:** The form submit logic is documented in code as simulated only (`replace with actual API call`), while the UI and contact flow present as if users are submitting real inquiries.

**Proposed task:** Resolve the mismatch by either (a) implementing real submission to backend/email service or (b) explicitly labeling the form as demo/staging until backend integration exists.

## 4) Test improvement
**Issue found:** There is no automated test coverage for the primary interaction paths (navigation, in-page anchor behavior, and contact form success state).

**Proposed task:** Add a minimal browser E2E smoke test suite (e.g., Playwright) that verifies:
1. key sections render,
2. anchor clicks scroll to expected sections,
3. `href="#"` links do not jump unexpectedly,
4. contact form submit flow displays success state.
