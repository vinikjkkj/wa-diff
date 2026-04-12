__d(
  "useWAWebOnOutsideClick",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState;
    function m(e) {
      var t = c(null);
      return (p(t, e), t);
    }
    function p(e, t) {
      var n = c(!1),
        r = d(!1),
        o = r[0],
        a = r[1];
      u(
        function () {
          if (t == null || o) return;
          function r(t) {
            var n = e.current;
            return n ? t instanceof Node && !n.contains(t) : !1;
          }
          function i(e) {
            if (e.isPrimary) {
              var t = r(e.target);
              n.current = t;
            }
          }
          function l(e) {
            (e.pointerType === "touch" || e.pointerType === "pen") &&
              (n.current = !1);
          }
          function s(e) {
            var o = r(e.target);
            (n.current &&
              o &&
              e.isPrimary &&
              t(e, function () {
                return a(!0);
              }),
              (n.current = !1));
          }
          function u(e) {
            r(e.target) &&
              t(e, function () {
                return a(!0);
              });
          }
          var c = "PointerEvent" in window;
          return (
            c
              ? (document.addEventListener("pointerdown", i),
                document.addEventListener("pointermove", l),
                document.addEventListener("pointerup", s))
              : document.addEventListener("click", u),
            function () {
              c
                ? (document.removeEventListener("pointerdown", i),
                  document.removeEventListener("pointermove", l),
                  document.removeEventListener("pointerup", s))
                : document.removeEventListener("click", u);
            }
          );
        },
        [t, e, o],
      );
    }
    ((l.useOnOutsideClickRef = m), (l.useOnOutsideClick = p));
  },
  98,
);
