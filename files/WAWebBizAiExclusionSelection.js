__d(
  "WAWebBizAiExclusionSelection",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = new Set(e);
      return { baseline: t, selected: t };
    }
    function l(e, t) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "toggle" &&
          "id" in t
        ) {
          var n = t.id;
          return {
            baseline: e.baseline,
            selected: e.selected.has(n)
              ? c(e.selected, n)
              : new Set(e.selected).add(n),
          };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "remove" &&
          "id" in t
        ) {
          var r = t.id;
          return e.selected.has(r)
            ? { baseline: e.baseline, selected: c(e.selected, r) }
            : e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "deselect_all"
        )
          return e.selected.size === 0
            ? e
            : { baseline: e.baseline, selected: new Set() };
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function s(e) {
      return !d(e.baseline, e.selected);
    }
    function u(e) {
      return {
        toExclude: m(e.selected, e.baseline),
        toReInclude: m(e.baseline, e.selected),
      };
    }
    function c(e, t) {
      var n = new Set(e);
      return (n.delete(t), n);
    }
    function d(e, t) {
      return e.size === t.size && m(e, t).length === 0;
    }
    function m(e, t) {
      return Array.from(e).filter(function (e) {
        return !t.has(e);
      });
    }
    ((i.createExclusionSelection = e),
      (i.reduceExclusionSelection = l),
      (i.isExclusionSelectionDirty = s),
      (i.getExclusionSelectionDelta = u));
  },
  66,
);
