__d(
  "VisibilityAPI",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        ((e = self.document) == null ? void 0 : e.visibilityState) !== void 0 ||
        ((s = self.document) == null ? void 0 : s.hidden) !== void 0;
    function d() {
      return c
        ? document.visibilityState !== void 0
          ? document.visibilityState === "hidden"
          : document.hidden
        : !1;
    }
    function m(e) {
      var t = function (n) {
        var t,
          o =
            (t = n == null ? void 0 : n.timeStamp) != null
              ? t
              : (u || (u = r("performanceNow")))();
        e(o);
      };
      return (document.addEventListener("visibilitychange", t), t);
    }
    function p(e) {
      document.removeEventListener("visibilitychange", e);
    }
    function _() {
      return 0;
    }
    ((l.canUseVisibilityAPI = c),
      (l.isVisibilityHidden = d),
      (l.onVisibilityChange = m),
      (l.removeVisibiltyChangeListener = p),
      (l.getEarliestHiddenStartTime = _));
  },
  98,
);
