__d(
  "WAWebBizAiTeachYourAiDrawer.react",
  [
    "fbt",
    "WAWebAccountBalanceIcon.react",
    "WAWebBizAiTeachYourAiDetailDrawer.react",
    "WAWebClickable.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebRound.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = { svgColorRefreshed: { color: "xhslqc4", $$css: !0 } };
    function m() {
      var e = o("react-compiler-runtime").c(2);
      r("vulture")("PxG8Rx3CogGcJk4GrsCH_CjMz1g=");
      var t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t =
            "x10l6tqk x2rgi xqxmu37 x3l9nec xhtitgo xgf8fm xxk0z11 x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr"),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx("div", {
              className: t,
              children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                color: "white",
                children: s._(/*BTDS*/ "Teach your AI"),
              }),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.msg;
      r("vulture")("GXwuzMwRnhUJuQ8purA1FDMVdMY=");
      var a = c(!1),
        i = a[0],
        l = a[1],
        s;
      t[0] !== n
        ? ((s = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebBizAiTeachYourAiDetailDrawer.react"), { msg: n }),
            );
          }),
          (t[0] = n),
          (t[1] = s))
        : (s = t[1]);
      var p = s,
        _,
        f;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function () {
            return l(!0);
          }),
          (f = function () {
            return l(!1);
          }),
          (t[2] = _),
          (t[3] = f))
        : ((_ = t[2]), (f = t[3]));
      var g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(o("WAWebRound.react").Round, {
            title: null,
            theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
            onClick: r("WAWebNoop"),
            children: u.jsx(
              o("WAWebAccountBalanceIcon.react").AccountBalanceIcon,
              { xstyle: d.svgColorRefreshed, height: 20 },
            ),
          })),
          (t[4] = g))
        : (g = t[4]);
      var h;
      t[5] !== i
        ? ((h = i && u.jsx(m, {})), (t[5] = i), (t[6] = h))
        : (h = t[6]);
      var y;
      return (
        t[7] !== p || t[8] !== h
          ? ((y = u.jsx("div", {
              onMouseEnter: _,
              onMouseLeave: f,
              children: u.jsxs(o("WAWebClickable.react").Clickable, {
                onClick: p,
                children: [g, h],
              }),
            })),
            (t[7] = p),
            (t[8] = h),
            (t[9] = y))
          : (y = t[9]),
        y
      );
    }
    l.default = p;
  },
  226,
);
