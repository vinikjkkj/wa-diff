__d(
  "WAWebCreateTextStatusFlow.react",
  [
    "WAWebStatusPostingTextView.react",
    "WAWebUimUie.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.isNewsletterStatus,
        a = e.newsletterWid,
        i = n === void 0 ? !1 : n,
        l = u(),
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function (t) {
            var e;
            (e = l.current) == null || e.handleRequestDismiss(t);
          }),
          (t[0] = c))
        : (c = t[0]);
      var d = c,
        m;
      return (
        t[1] !== i || t[2] !== a
          ? ((m = s.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "CreateTextStatusFlow",
              escapable: !0,
              requestDismiss: d,
              children: s.jsx(r("WAWebStatusPostingTextView.react"), {
                ref: l,
                newsletterWid: a,
                isNewsletterStatus: i,
              }),
            })),
            (t[1] = i),
            (t[2] = a),
            (t[3] = m))
          : (m = t[3]),
        m
      );
    }
    l.default = c;
  },
  98,
);
