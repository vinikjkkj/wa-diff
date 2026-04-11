__d(
  "getWrapperComponentPropArrayFromDOMElement_THIS_CAN_BREAK",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = Object.keys(e).find(function (e) {
        return e.startsWith("__reactFiber$");
      });
      return t == null ? null : e[t];
    }
    function l(e, t) {
      return e.pendingProps != null && typeof e.pendingProps[t] == "string"
        ? e.pendingProps[t]
        : e.memoizedProps != null && typeof e.memoizedProps[t] == "string"
          ? e.memoizedProps[t]
          : null;
    }
    function s(e) {
      var t,
        n = (t = e.displayName) != null ? t : e.name;
      if (n == null) return null;
      var r = n.match(/.*\[from (.*)\.react\]/);
      return (r && r[1]) || n;
    }
    function u(t, n, r) {
      try {
        for (var o = e(t), a = []; o; ) {
          var i = o.type;
          if (i == null || typeof i == "string") {
            o = o.return;
            continue;
          }
          var u = s(i);
          if ((u == null && i.render != null && (u = s(i.render)), u === n)) {
            var c = l(o, r);
            c != null && a.push(c);
          }
          o = o.return;
        }
        return a;
      } catch (e) {
        return [];
      }
    }
    i.default = u;
  },
  66,
);
