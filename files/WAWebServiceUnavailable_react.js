__d(
  "WAWebServiceUnavailable.react",
  ["fbt", "WAWebModal.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(/*BTDS*/ "Service unavailable")), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(o("WAWebModal.react").Modal, {
              title: t,
              cover: !0,
              children: s._(
                /*BTDS*/ "We're having trouble connecting to WhatsApp. Please try again in a few minutes.",
              ),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = c;
  },
  226,
);
