__d(
  "WAWebPaymentBackground.react",
  ["cx", "WAWebClassnames", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(17),
        a;
      n[0] !== t.thumbXstyle
        ? ((a =
            t.thumbXstyle != null
              ? (e || (e = r("stylex"))).props(t.thumbXstyle)
              : {}),
          (n[0] = t.thumbXstyle),
          (n[1] = a))
        : (a = n[1]);
      var i = a,
        l;
      if (n[2] !== t.isQuoted || n[3] !== t.isQuotedInComposeBox) {
        var s;
        ((l = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((s = {}),
          (s._ajyf = t.isQuoted),
          (s._ajyg = t.isQuotedInComposeBox),
          (s._ajye = !0),
          s),
        )),
          (n[2] = t.isQuoted),
          (n[3] = t.isQuotedInComposeBox),
          (n[4] = l));
      } else l = n[4];
      var u;
      if (n[5] !== t.isQuoted) {
        var d;
        ((u = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          { "bg-payments": !t.isQuoted },
          ((d = {}), (d._ajyh = !0), (d._ajyi = !0), d),
        )),
          (n[5] = t.isQuoted),
          (n[6] = u));
      } else u = n[6];
      var m;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { className: "x1vjfegm" }), (n[7] = m))
        : (m = n[7]);
      var p;
      n[8] !== t.children
        ? ((p = c.jsx(
            "div",
            babelHelpers.extends({}, m, { children: t.children }),
          )),
          (n[8] = t.children),
          (n[9] = p))
        : (p = n[9]);
      var _;
      n[10] !== i || n[11] !== u || n[12] !== p
        ? ((_ = c.jsx(
            "div",
            babelHelpers.extends({}, i, {
              "data-testid": void 0,
              className: u,
              children: p,
            }),
          )),
          (n[10] = i),
          (n[11] = u),
          (n[12] = p),
          (n[13] = _))
        : (_ = n[13]);
      var f;
      return (
        n[14] !== l || n[15] !== _
          ? ((f = c.jsx("div", { className: l, children: _ })),
            (n[14] = l),
            (n[15] = _),
            (n[16] = f))
          : (f = n[16]),
        f
      );
    }
    l.default = d;
  },
  98,
);
