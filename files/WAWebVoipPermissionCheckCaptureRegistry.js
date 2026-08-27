__d(
  "WAWebVoipPermissionCheckCaptureRegistry",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map();
    function u(t, n) {
      var a = !1,
        i = function () {
          if (!a) {
            if (((a = !0), t != null)) {
              var l = s.get(t);
              (l == null || l.delete(i),
                (l == null ? void 0 : l.size) === 0 && s.delete(t));
            }
            try {
              n();
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: failed to dispose permission-check capture",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("voip-permission-check-capture-dispose-failed");
            }
          }
        };
      if (t != null) {
        var l = s.get(t);
        (l == null && ((l = new Set()), s.set(t, l)), l.add(i));
      }
      return i;
    }
    function c(e) {
      var t = s.get(e);
      if (t != null) for (var n of Array.from(t)) n();
    }
    ((l.registerPermissionCheckCapture = u),
      (l.releasePermissionCheckCaptures = c));
  },
  98,
);
