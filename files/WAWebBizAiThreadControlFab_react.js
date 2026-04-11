__d(
  "WAWebBizAiThreadControlFab.react",
  [
    "fbt",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebText.react",
    "WDSIconWdsIcAiFilled.react",
    "react",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            className:
              "xixxii4 x1kmv161 xd7zvh7 x3l9nec xhtitgo x1dmp6jm xlrawln x78zum5 x6s0dn4 xl56j7k xbrszos xea3l6g x18isctg x2q3nzr",
          }),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(
              "div",
              babelHelpers.extends({}, t, {
                children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  color: "white",
                  children: s._(/*BTDS*/ "AI responses"),
                }),
              }),
            )),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.chat,
        a = c(!1),
        i = a[0],
        l = a[1],
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = function () {
            l(!0);
          }),
          (t[0] = s))
        : (s = t[0]);
      var p = s,
        _;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function () {
            l(!1);
          }),
          (t[1] = _))
        : (_ = t[1]);
      var f = _,
        g;
      t[2] !== n
        ? ((g = function () {
            o("WAWebCmd").Cmd.changeAiReplyStatus(n, !1);
          }),
          (t[2] = n),
          (t[3] = g))
        : (g = t[3]);
      var h;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            className:
              "xixxii4 xhjxwu4 x9q68il x889kno x2vl965 x1a8lsjc xe2zdcy xhtitgo xvni27 xdd8jsf x1c9tyrk xeusxvb x1pahc9y x1ertn4p x27vdmw x1c7u0tx x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xisoiy x347gel xfl8pta x1svocj7 x78zum5 xl56j7k x6s0dn4 x15g2dp1",
          }),
          (t[4] = h))
        : (h = t[4]);
      var y, C;
      t[5] !== i
        ? ((y = u.jsx(
            "div",
            babelHelpers.extends({}, h, {
              onMouseEnter: p,
              onMouseLeave: f,
              children: i
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
          )),
          (C = i && u.jsx(m, {})),
          (t[5] = i),
          (t[6] = y),
          (t[7] = C))
        : ((y = t[6]), (C = t[7]));
      var b;
      return (
        t[8] !== g || t[9] !== y || t[10] !== C
          ? ((b = u.jsxs(o("WAWebClickable.react").Clickable, {
              onClick: g,
              tabIndex: 0,
              children: [y, C],
            })),
            (t[8] = g),
            (t[9] = y),
            (t[10] = C),
            (t[11] = b))
          : (b = t[11]),
        b
      );
    }
    l.WAWEbBizAiThreadControlFab = p;
  },
  226,
);
