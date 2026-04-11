__d(
  "useWebPressableTouchStartHandler",
  [
    "ExecutionEnvironment",
    "UserAgent",
    "passiveEventListenerUtil",
    "react",
    "useDynamicCallbackDANGEROUS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useEffect,
      c =
        r("UserAgent").isBrowser("Safari") ||
        r("UserAgent").isBrowser("Mobile Safari"),
      d = c
        ? function (e) {
            var t,
              n =
                (t = window) == null || (t = t.document) == null
                  ? void 0
                  : t.body;
            if (n != null) {
              n.style.WebkitUserSelect = "none";
              var r = o("passiveEventListenerUtil").makeEventOptions({
                  passive: !0,
                }),
                a = function () {
                  ((n.style.WebkitUserSelect = null),
                    document.removeEventListener(
                      "touchend",
                      a,
                      typeof r == "boolean" ? r : r.capture,
                    ));
                };
              return (document.addEventListener("touchend", a, r), a);
            }
          }
        : null;
    function m(e, t, n) {
      var a = r("useDynamicCallbackDANGEROUS")(n);
      u(
        function () {
          var n;
          if (!(!t && !d)) {
            var r = e.current,
              i =
                (n = window) == null || (n = n.document) == null
                  ? void 0
                  : n.body;
            if (!(!r || !i || !r.addEventListener || !p(r))) {
              var l;
              t &&
                (t.register(r, a),
                (l = function (n) {
                  (n.preventDefault(), t.onTouchStart());
                }));
              var s,
                u =
                  l || d
                    ? function (e) {
                        (l == null || l(e), (s = d == null ? void 0 : d(e)));
                      }
                    : null,
                c = u
                  ? o("passiveEventListenerUtil").makeEventOptions({
                      passive: !t,
                    })
                  : null;
              return (
                u && c != null && r.addEventListener("touchstart", u, c),
                function () {
                  (s == null || s(),
                    t == null || t.unRegister(r),
                    u &&
                      c != null &&
                      r.removeEventListener(
                        "touchstart",
                        u,
                        typeof c == "boolean" ? c : c.capture,
                      ));
                }
              );
            }
          }
        },
        [a, e, t],
      );
    }
    function p(e) {
      return typeof document != "undefined" &&
        typeof document.contains == "function"
        ? document.contains(e)
        : !1;
    }
    function _(e, t, n) {}
    var f = (e || (e = r("ExecutionEnvironment"))).canUseDOM ? m : _,
      g = f;
    l.default = g;
  },
  98,
);
