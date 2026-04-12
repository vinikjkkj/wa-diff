__d(
  "WAWebBizAiThreadControlFab.react",
  [
    "fbt",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebText.react",
    "WDSIconWdsIcAiFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        aiIconXstyle: { color: "xhslqc4", $$css: !0 },
        aiIconHover: { color: "xx4v7xm", $$css: !0 },
      };
    function m() {
      return u.jsx("div", {
        className:
          "xixxii4 x1kmv161 xd7zvh7 x3l9nec xhtitgo x1dmp6jm xlrawln x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr",
        children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
          color: "white",
          children: s._(/*BTDS*/ "AI responses"),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.chat,
        n = c(!1),
        a = n[0],
        i = n[1];
      function l() {
        i(!0);
      }
      function s() {
        i(!1);
      }
      return u.jsxs(o("WAWebClickable.react").Clickable, {
        onClick: function () {
          o("WAWebCmd").Cmd.changeAiReplyStatus(t, !1);
        },
        tabIndex: 0,
        children: [
          u.jsx("div", {
            className:
              "xixxii4 xhjxwu4 x9q68il x889kno x2vl965 x1a8lsjc xe2zdcy xhtitgo xvni27 xdd8jsf x1c9tyrk xeusxvb x1pahc9y x1ertn4p x27vdmw x1c7u0tx x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xisoiy x347gel xfl8pta x1svocj7 x78zum5 xl56j7k x6s0dn4 x15g2dp1",
            onMouseEnter: l,
            onMouseLeave: s,
            children: a
              ? u.jsx(r("WDSIconWdsIcAiFilled.react"), {
                  width: 30,
                  height: 30,
                  iconXstyle: d.aiIconHover,
                })
              : u.jsx(r("WDSIconWdsIcAiFilled.react"), {
                  width: 30,
                  height: 30,
                  iconXstyle: d.aiIconXstyle,
                }),
          }),
          a && u.jsx(m, {}),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.WAWEbBizAiThreadControlFab = p));
  },
  226,
);
