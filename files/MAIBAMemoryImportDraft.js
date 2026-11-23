__d(
  "MAIBAMemoryImportDraft",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      return e != null && e.adAccountId === t
        ? { didCopyPrompt: e.didCopyPrompt, pasteValue: e.pasteValue }
        : null;
    }
    function s(t, n) {
      e =
        n.pasteValue.trim() === "" && !n.didCopyPrompt
          ? null
          : babelHelpers.extends({}, n, { adAccountId: t });
    }
    function u() {
      e = null;
    }
    ((i.getMAIBAMemoryImportDraft = l),
      (i.saveMAIBAMemoryImportDraft = s),
      (i.clearMAIBAMemoryImportDraft = u));
  },
  66,
);
