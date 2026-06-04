__d(
  "WAWebQuickPromotionDebugLogger",
  ["Random", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = [],
      s = "",
      u = "";
    function c() {
      return o("Random").random().toString(36).slice(2, 10);
    }
    function d(e) {
      return e === "12015"
        ? o("WAWebABProps").getABPropConfigValue("smb_qp_web_debug_recunit") ===
            !0
        : !1;
    }
    function m(e) {
      return ((u = e), (s = c()), s);
    }
    function p(t, n) {
      d(u) && e.push({ ts: Date.now(), sessionId: s, event: t, data: n });
    }
    function _() {
      return e.slice();
    }
    function f() {
      ((e.length = 0), (s = ""), (u = ""));
    }
    ((l.isDebugEnabledForSurface = d),
      (l.startQPDebugSession = m),
      (l.qpLog = p),
      (l.getQPDebugLogs = _),
      (l.clearQPDebugLogs = f));
  },
  98,
);
