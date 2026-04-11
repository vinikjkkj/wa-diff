__d(
  "useWAWebOnOutsideClick",
  ["react", "react-compiler-runtime"],
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
      var n = o("react-compiler-runtime").c(5),
        r = c(!1),
        a = d(!1),
        i = a[0],
        l = a[1],
        s,
        m;
      (n[0] !== e || n[1] !== i || n[2] !== t
        ? ((s = function () {
            if (!(t == null || i)) {
              var n = function (n) {
                  var t = e.current;
                  return t ? n instanceof Node && !t.contains(n) : !1;
                },
                o = function (t) {
                  if (t.isPrimary) {
                    var e = n(t.target);
                    r.current = e;
                  }
                },
                a = function (t) {
                  (t.pointerType === "touch" || t.pointerType === "pen") &&
                    (r.current = !1);
                },
                s = function (o) {
                  var e = n(o.target);
                  (r.current &&
                    e &&
                    o.isPrimary &&
                    t(o, function () {
                      return l(!0);
                    }),
                    (r.current = !1));
                },
                u = function (r) {
                  n(r.target) &&
                    t(r, function () {
                      return l(!0);
                    });
                },
                c = "PointerEvent" in window;
              return (
                c
                  ? (document.addEventListener("pointerdown", o),
                    document.addEventListener("pointermove", a),
                    document.addEventListener("pointerup", s))
                  : document.addEventListener("click", u),
                function () {
                  c
                    ? (document.removeEventListener("pointerdown", o),
                      document.removeEventListener("pointermove", a),
                      document.removeEventListener("pointerup", s))
                    : document.removeEventListener("click", u);
                }
              );
            }
          }),
          (m = [t, e, i]),
          (n[0] = e),
          (n[1] = i),
          (n[2] = t),
          (n[3] = s),
          (n[4] = m))
        : ((s = n[3]), (m = n[4])),
        u(s, m));
    }
    ((l.useOnOutsideClickRef = m), (l.useOnOutsideClick = p));
  },
  98,
);
