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
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = { svgColorRefreshed: { color: "xhslqc4", $$css: !0 } };
    function m() {
      return (
        r("vulture")("PxG8Rx3CogGcJk4GrsCH_CjMz1g="),
        u.jsx("div", {
          className:
            "x10l6tqk x2rgi xqxmu37 x3l9nec xhtitgo xgf8fm xxk0z11 x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr",
          children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
            color: "white",
            children: s._(/*BTDS*/ "Teach your AI"),
          }),
        })
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.msg;
      r("vulture")("GXwuzMwRnhUJuQ8purA1FDMVdMY=");
      var n = c(!1),
        a = n[0],
        i = n[1],
        l = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebBizAiTeachYourAiDetailDrawer.react"), { msg: t }),
          );
        };
      return u.jsx("div", {
        onMouseEnter: function () {
          return i(!0);
        },
        onMouseLeave: function () {
          return i(!1);
        },
        children: u.jsxs(o("WAWebClickable.react").Clickable, {
          onClick: l,
          children: [
            u.jsx(o("WAWebRound.react").Round, {
              title: null,
              theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
              onClick: r("WAWebNoop"),
              children: u.jsx(
                o("WAWebAccountBalanceIcon.react").AccountBalanceIcon,
                { xstyle: d.svgColorRefreshed, height: 20 },
              ),
            }),
            a && u.jsx(m, {}),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
