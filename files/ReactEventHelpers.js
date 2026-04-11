__d(
  "ReactEventHelpers",
  [],
  function (t, n, r, o, a, i) {
    var e =
        typeof window != "undefined" && window.navigator != null
          ? /^Mac/.test(window.navigator.platform)
          : !1,
      l = typeof window != "undefined" && window.PointerEvent != null;
    function s(e, t) {
      return t == null
        ? !1
        : typeof e.containsNode == "function"
          ? e.containsNode(t)
          : e.contains(t);
    }
    ((i.isMac = e), (i.hasPointerEvents = l), (i.isRelatedTargetWithin = s));
  },
  66,
);
