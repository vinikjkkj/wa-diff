__d(
  "getCometRouteKey",
  ["stableStringify"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = typeof WeakMap == "function" ? new WeakMap() : new Map();
    function s(t) {
      var n = e.get(t);
      if (n != null) return n;
      var o = t.rootView.resource.getModuleId(),
        a = o + "||" + r("stableStringify")(t.rootView.props),
        i = t.hostableView;
      if (i != null) {
        var l = i.resource.getModuleId();
        a = a + "||" + l + "||" + r("stableStringify")(i.props);
      }
      var s = t.actorID;
      return (s != null && (a = a + "||" + s), e.set(t, a), a);
    }
    l.default = s;
  },
  98,
);
