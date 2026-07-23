__d(
  "cometRouterUnloadHookUtils",
  ["getTopMostRoute", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      for (var r of e) {
        var o = r(t);
        if (o != null && n !== !0) return o;
      }
    }
    function s(t) {
      var n;
      if (t != null) {
        if (t.pushViewStack != null && t.pushViewStack.length > 0) {
          var r = t.pushViewStack[t.pushViewStack.length - 1],
            o = e(r.mutableState.unloadHooks || []);
          return o != null ? o : void 0;
        }
        if ((n = t.hosted) != null && n.mutableState.unloadHooks) {
          var a,
            i = e(
              ((a = t.hosted) == null ? void 0 : a.mutableState.unloadHooks) ||
                [],
            );
          if (i != null) return i;
        }
        if (
          t.main.mutableState.unloadHooks != null &&
          t.main.mutableState.unloadHooks.length > 0
        ) {
          var l = e(t.main.mutableState.unloadHooks);
          if (l != null) return l;
        }
      }
    }
    function u(t, n, o) {
      var a,
        i,
        l,
        s = r("getTopMostRoute")(n),
        u = t.pushViewStack || [],
        c = n.pushViewStack || [];
      if (u.length > 0) {
        var d = u[u.length - 1],
          m = d.route,
          p = d.mutableState.unloadHooks;
        if (
          p != null &&
          p.length > 0 &&
          (u.length !== c.length || m !== c[c.length - 1].route)
        ) {
          var _ = e(p, s, o);
          if (_ != null) return _;
        }
        return;
      }
      if (
        (a = t.hosted) != null &&
        (a = a.mutableState.unloadHooks) != null &&
        a.length &&
        ((i = t.hosted) == null ? void 0 : i.route) !==
          ((l = n.hosted) == null ? void 0 : l.route)
      ) {
        var f,
          g = e(
            ((f = t.hosted) == null ? void 0 : f.mutableState.unloadHooks) ||
              [],
            s,
            o,
          );
        if (g != null) return g;
      }
      if (
        t.main.mutableState.unloadHooks != null &&
        t.main.mutableState.unloadHooks.length > 0 &&
        (u.length < c.length || t.main.route !== n.main.route)
      ) {
        var h = e(t.main.mutableState.unloadHooks, s, o),
          y = c.length === 0 || c[c.length - 1].route.blockUnloadHooks !== !0;
        if (h != null && (!r("gkx")("26337") || y)) return h;
      }
    }
    function c(e) {
      return function (t) {
        var n = s(e());
        if (n != null)
          return (
            t.preventDefault(),
            (t.returnValue = n.warnMessage),
            n.warnMessage
          );
      };
    }
    ((l.runUnloadHooks = u), (l.createOnBeforeUnloadEventHandler = c));
  },
  98,
);
