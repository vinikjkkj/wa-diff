__d(
  "WAWebMessageForwardedIndicator.react",
  [
    "WAWebClassnames",
    "WAWebForwardRefreshedIcon.react",
    "WAWebForwardUtils",
    "WAWebForwardedNewsletterMessageInfoHeader.react",
    "WAWebMessageForwardedIndicatorSearchTheWeb.react",
    "WAWebMessageTopIndicatorText.react",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        icon: {
          display: "x1rg5ohu",
          verticalAlign: "x16dsc37",
          color: "xhslqc4",
          $$css: !0,
        },
        container: { marginInlineStart: "xe9ewy2", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(18),
        a = t.className,
        i = t.msg,
        l = t.xstyle,
        s;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var d;
        ((s = [
          (d = o("WAWebMsgGetters")).getIsFrequentlyForwarded,
          d.getIsForwarded,
          d.getForwardingScore,
          d.getNumTimesForwarded,
          d.getType,
        ]),
          (n[0] = s));
      } else s = n[0];
      o("useWAWebMsgValues").useMsgValues(t.msg.id, s);
      var m = o("WAWebMsgSelectors").showForwarded(i);
      if (!m) return null;
      var p;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(
            o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
            { directional: !0, width: 16, height: 16, xstyle: c.icon },
          )),
          (n[1] = p))
        : (p = n[1]);
      var _ = p,
        f;
      n[2] !== a || n[3] !== l
        ? ((f = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (e || (e = r("stylex")))(c.container, l),
            a,
          )),
          (n[2] = a),
          (n[3] = l),
          (n[4] = f))
        : (f = n[4]);
      var g;
      n[5] !== i
        ? ((g = o("WAWebForwardUtils").getForwardedIndicatorText(i)),
          (n[5] = i),
          (n[6] = g))
        : (g = n[6]);
      var h;
      n[7] !== g
        ? ((h = u.jsx(r("WAWebMessageTopIndicatorText.react"), {
            children: g,
          })),
          (n[7] = g),
          (n[8] = h))
        : (h = n[8]);
      var y;
      n[9] !== i
        ? ((y = u.jsx(r("WAWebMessageForwardedIndicatorSearchTheWeb.react"), {
            msg: i,
          })),
          (n[9] = i),
          (n[10] = y))
        : (y = n[10]);
      var C;
      n[11] !== t.msg
        ? ((C = u.jsx(r("WAWebForwardedNewsletterMessageInfoHeader.react"), {
            msg: t.msg,
          })),
          (n[11] = t.msg),
          (n[12] = C))
        : (C = n[12]);
      var b;
      return (
        n[13] !== f || n[14] !== h || n[15] !== y || n[16] !== C
          ? ((b = u.jsxs("div", {
              "data-testid": void 0,
              className: f,
              children: [_, h, y, C],
            })),
            (n[13] = f),
            (n[14] = h),
            (n[15] = y),
            (n[16] = C),
            (n[17] = b))
          : (b = n[17]),
        b
      );
    }
    l.default = d;
  },
  98,
);
