__d(
  "MAIBABusinessSetupReviewPresentation",
  ["MAIBAWorkspaceTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e.show_cta === "true" ||
        e.show_edit === "true" ||
        e.recommended_by_ai === "true" ||
        (e.title != null && e.title !== "")
      );
    }
    function s(t) {
      return t.tag === "ws-card" && t.attrs.kind === "overview" && e(t.attrs);
    }
    function u(e) {
      var t,
        n = o("MAIBAWorkspaceTypes").getViewStackFromBlocks(e),
        r = n.rootViewId,
        a = n.viewMap;
      return ((t = a[r]) == null ? void 0 : t.children.some(s)) === !0;
    }
    function c(e) {
      return u(o("MAIBAWorkspaceTypes").parseBlocksJSON(e.blocks_json));
    }
    function d(e) {
      var t = c(e);
      return function (e) {
        var n = o("MAIBAWorkspaceTypes").parseBlocksJSON(e.blocks_json);
        return (n.length === 0 || (t = u(n)), t);
      };
    }
    ((l.isReviewOverviewAttrs = e),
      (l.isReviewWorkspaceBlocks = u),
      (l.isReviewWorkspace = c),
      (l.createStickyReviewWorkspaceEligibility = d));
  },
  98,
);
