__d(
  "useWAWebGalaxyFlowIframeReadyTimeout",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = 12e4;
    function m(e) {
      var t = c(!1),
        n = c(null),
        r = e.timeoutMs,
        o = r === void 0 ? d : r,
        a = e.onTimeout;
      u(
        function () {
          return (
            (n.current = window.setTimeout(function () {
              t.current || a();
            }, o)),
            function () {
              n.current != null && window.clearTimeout(n.current);
            }
          );
        },
        [o, a],
      );
      var i = function () {
          t.current ||
            ((t.current = !0),
            n.current != null &&
              (window.clearTimeout(n.current), (n.current = null)));
        },
        l = function () {
          return t.current;
        };
      return { markIframeReady: i, isReady: l };
    }
    l.default = m;
  },
  98,
);
