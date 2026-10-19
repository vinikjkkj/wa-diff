__d(
  "WAWebReloadReason",
  ["WALogger", "WAWebOfflineResumeCounters", "WAWebSessionStorage"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "wa_web_last_reload",
      u = !1;
    function c(t, n) {
      if (!u) {
        u = !0;
        try {
          r("WAWebSessionStorage") == null ||
            r("WAWebSessionStorage").setItem(
              s,
              JSON.stringify(
                babelHelpers.extends({ reason: t, ts: Date.now() }, n),
              ),
            );
        } catch (e) {}
        try {
          o("WAWebOfflineResumeCounters").logAppReload(t);
        } catch (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[reload] counting reload reason failed: ",
                "",
              ])),
            String(t),
          );
        }
      }
    }
    function d() {
      var e = m();
      if (e == null) return null;
      var t = e.msg,
        n = e.reason,
        r = e.receipt,
        o = e.ts,
        a = { reason: n, ageS: Math.round((Date.now() - o) / 1e3) };
      return (
        typeof t == "number" && (a.msg = t),
        typeof r == "number" && (a.receipt = r),
        a
      );
    }
    function m() {
      try {
        var e =
          r("WAWebSessionStorage") == null
            ? void 0
            : r("WAWebSessionStorage").getItem(s);
        if (e == null) return null;
        var t = JSON.parse(e);
        if (t == null || typeof t != "object") return null;
        var n = t.msg,
          o = t.reason,
          a = t.receipt,
          i = t.ts;
        return typeof o != "string" || typeof i != "number"
          ? null
          : { reason: o, ts: i, msg: n, receipt: a };
      } catch (e) {
        return null;
      }
    }
    ((l.recordReloadReason = c), (l.getLastReload = d));
  },
  98,
);
