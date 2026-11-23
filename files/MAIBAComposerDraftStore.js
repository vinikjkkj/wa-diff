__d(
  "MAIBAComposerDraftStore",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = { draft: null },
      c = new Set();
    function d() {
      for (var e of c) e();
    }
    function m(e) {
      ((u = { draft: e }), d());
    }
    function p() {
      u.draft != null && ((u = { draft: null }), d());
    }
    function _() {
      return u;
    }
    function f(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function g() {
      return s(f, _, _);
    }
    ((l.setComposerDraft = m),
      (l.clearComposerDraft = p),
      (l.getComposerDraftSnapshot = _),
      (l.subscribeComposerDraft = f),
      (l.useComposerDraftStore = g));
  },
  98,
);
