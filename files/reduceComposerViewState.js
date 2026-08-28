__d(
  "reduceComposerViewState",
  ["CometComposerDirtyTracker", "isComposerEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l,
        s,
        u = n,
        c = e.current.keys();
      for (var d of c) u = d(u, i);
      var m =
          u.lexicalEditorIsDirty === !0 ||
          Array.from(t.current.keys()).some(function (e) {
            var t = e(a, u);
            return t === !0 || t === "UPDATED" || t === "DELETED";
          }),
        p = r("isComposerEmpty")(u);
      return (
        o("CometComposerDirtyTracker").setIsComposerDirty(
          n.creationSessionID,
          p ? !1 : m,
        ),
        babelHelpers.extends({}, u, {
          isDirty: m,
          isEmptyMetaData: {
            isEmpty: p,
            useIsEmpty:
              (l = (s = u.isEmptyMetaData) == null ? void 0 : s.useIsEmpty) !=
              null
                ? l
                : !0,
          },
        })
      );
    }
    l.default = e;
  },
  98,
);
