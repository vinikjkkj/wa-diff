__d(
  "WAWebStatusFileDropScope",
  ["WAWebDrawerManagerGlobalContext", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = null,
      c = 0,
      d = new Set();
    function m(e, t) {
      var n = u;
      (n != null && n.drawerId === e && n.acceptingFiles === t) ||
        ((n != null || !t) && (c += 1),
        (u = { drawerId: e, acceptingFiles: t }),
        d.forEach(function (e) {
          return e();
        }));
    }
    function p(e) {
      var t;
      ((t = u) == null ? void 0 : t.drawerId) === e &&
        ((u = null),
        (c += 1),
        d.forEach(function (e) {
          return e();
        }));
    }
    function _(e, t) {
      var n,
        r,
        a = c,
        i =
          e === "mid"
            ? t
            : (n =
                  (r = o(
                    "WAWebDrawerManagerGlobalContext",
                  ).getGlobalDrawerManager("mid")) == null
                    ? void 0
                    : r.drawerId) != null
              ? n
              : t;
      return {
        key: (i != null ? i : "") + ":" + a,
        isCurrent: function () {
          var n, r, i, l;
          return (
            t != null &&
            ((n =
              (r = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
                e,
              )) == null
                ? void 0
                : r.isCurrentDrawer(t)) != null
              ? n
              : !1) &&
            c === a &&
            ((i = (l = y()) == null ? void 0 : l.acceptingFiles) != null
              ? i
              : e === "mid")
          );
        },
      };
    }
    function f() {
      return s(g, h);
    }
    function g(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function h() {
      var e, t;
      return (e = (t = y()) == null ? void 0 : t.acceptingFiles) != null
        ? e
        : !0;
    }
    function y() {
      var e,
        t,
        n = u;
      return n != null &&
        (e =
          (t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
            "left",
          )) == null
            ? void 0
            : t.isCurrentDrawer(n.drawerId)) != null &&
        e
        ? n
        : null;
    }
    ((l.updateStatusFileDropScope = m),
      (l.clearStatusFileDropScope = p),
      (l.captureStatusFileDropScope = _),
      (l.useStatusFileDropScopeEnabled = f));
  },
  98,
);
