__d(
  "WAWebMessageViaAdIndicator.react",
  [
    "fbt",
    "WAWebAdAttributionUtils",
    "WAWebChatMsgIcon.react",
    "WAWebClassnames",
    "WAWebMessageTopIndicatorText.react",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        icon: { display: "x1rg5ohu", color: "xhslqc4", $$css: !0 },
        container: { height: "xhvdbge", lineHeight: "x17fgdl5", $$css: !0 },
        marginVert4: {
          marginTop: "xav9cv8",
          marginBottom: "x4tpdpg",
          $$css: !0,
        },
        marginEnd4: { marginInlineEnd: "x7g7pl8", $$css: !0 },
        marginStart8: { marginInlineStart: "x150mmf0", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(8),
        a = t.className,
        i = t.xstyle,
        l = o("WAWebStateUtils").unproxy(t.msg);
      if (!o("WAWebAdAttributionUtils").shouldShowAdAttribution(l)) return null;
      var u;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { x: 3, y: 2, width: 25, height: 25 }), (n[0] = u))
        : (u = n[0]);
      var m = u,
        p;
      n[1] !== a || n[2] !== i
        ? ((p = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (e || (e = r("stylex")))(
              d.container,
              d.marginVert4,
              d.marginEnd4,
              d.marginStart8,
              i,
            ),
            a,
          )),
          (n[1] = a),
          (n[2] = i),
          (n[3] = p))
        : (p = n[3]);
      var _;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = c.jsx(o("WAWebChatMsgIcon.react").ChatMsgIcon, {
            xstyle: d.icon,
            height: 16,
            width: 16,
            viewBox: m,
          })),
          (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = c.jsx(r("WAWebMessageTopIndicatorText.react"), {
            children: s._(/*BTDS*/ "Message via ad"),
          })),
          (n[5] = f))
        : (f = n[5]);
      var g;
      return (
        n[6] !== p
          ? ((g = c.jsxs("div", { className: p, children: [_, f] })),
            (n[6] = p),
            (n[7] = g))
          : (g = n[7]),
        g
      );
    }
    l.default = m;
  },
  226,
);
