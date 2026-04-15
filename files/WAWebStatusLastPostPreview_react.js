__d(
  "WAWebStatusLastPostPreview.react",
  [
    "fbt",
    "WAWebAck",
    "WAWebClock",
    "WAWebMsgTimeIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        statusAck: {
          verticalAlign: "x16dsc37",
          display: "x1rg5ohu",
          color: "xhslqc4",
          $$css: !0,
        },
        marginEnd2: { marginInlineEnd: "x16q7b9a", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.msg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = ["ack", "t"]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebModelValues").useModelValues(n, r),
        i = a.ack,
        l = a.t,
        d;
      t[1] !== l
        ? ((d = o("WAWebClock").Clock.relativeDateAndTimeStr(l)),
          (t[1] = l),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== d
        ? ((m = u.jsx("span", { children: d })), (t[3] = d), (t[4] = m))
        : (m = t[4]);
      var p = m;
      if (i === o("WAWebAck").ACK.CLOCK) {
        var _;
        (t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = u.jsxs("span", {
              children: [
                u.jsx(o("WAWebMsgTimeIcon.react").MsgTimeIcon, {
                  xstyle: [c.statusAck, c.marginEnd2],
                }),
                s._(/*BTDS*/ "Sending..."),
              ],
            })),
            (t[5] = _))
          : (_ = t[5]),
          (p = _));
      }
      var f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x1f6kntn xhslqc4" }), (t[6] = f))
        : (f = t[6]);
      var g;
      return (
        t[7] !== p
          ? ((g = u.jsx("span", babelHelpers.extends({}, f, { children: p }))),
            (t[7] = p),
            (t[8] = g))
          : (g = t[8]),
        g
      );
    }
    l.default = d;
  },
  226,
);
