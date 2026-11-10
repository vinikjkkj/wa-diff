__d(
  "WAWebReloadCrashAnnotations",
  ["WAWebAICrashAnnotationGate", "WAWebTemporaryStorage"],
  function (t, n, r, o, a, i, l) {
    var e = "wa_crash_reload_reason",
      s = 64,
      u = '{"bad":1}',
      c = !1;
    function d(t) {
      c ||
        ((c = !0),
        o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
          "wa:reloadReason",
          function () {
            r("WAWebTemporaryStorage").setItem(
              e,
              JSON.stringify({ r: t.slice(0, s), t: Date.now() }),
            );
          },
        ));
    }
    function m() {
      var t = r("WAWebTemporaryStorage").getItem(e);
      if (t == null) return null;
      r("WAWebTemporaryStorage").removeItem(e);
      var n = null;
      try {
        n = JSON.parse(t);
      } catch (e) {
        return u;
      }
      var o = p(n, "r"),
        a = p(n, "t");
      return typeof o != "string" || typeof a != "number"
        ? u
        : JSON.stringify({
            r: o.slice(0, s),
            age: Math.round((Date.now() - a) / 1e3),
          });
    }
    function p(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    ((l.annotateCrashWithReloadReason = d), (l.takeReloadReasonForCrash = m));
  },
  98,
);
