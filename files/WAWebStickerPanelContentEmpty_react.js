__d(
  "WAWebStickerPanelContentEmpty.react",
  ["WAWebClassnames", "bx", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("bx").getURL(r("bx")("9559"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.text,
        r,
        a,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "x78zum5 xdt5ytf x6s0dn4 x1q4hjzm",
          )),
          (a = s.jsx("div", {
            className: "x1tucx9d xjnb2h5 x1yztbdb xiy17q3 x1tbiz1a",
            style: { backgroundImage: "url(" + u + ")" },
          })),
          (i = { className: "x1j9u4d2 x1f6kntn x1fc57z9 xhslqc4 x2b8uid" }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : ((r = t[0]), (a = t[1]), (i = t[2]));
      var l;
      return (
        t[3] !== n
          ? ((l = s.jsxs("div", {
              "data-testid": void 0,
              className: r,
              children: [
                a,
                s.jsx("p", babelHelpers.extends({}, i, { children: n })),
              ],
            })),
            (t[3] = n),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    l.default = c;
  },
  98,
);
