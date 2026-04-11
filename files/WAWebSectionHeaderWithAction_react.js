__d(
  "WAWebSectionHeaderWithAction.react",
  [
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebText.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.actionText,
        a = e.active,
        i = e.onClick,
        l = e.subtitle,
        u = e.title,
        c = e.xstyle,
        d = p,
        m;
      t[0] !== u
        ? ((m = s.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            children: u,
          })),
          (t[0] = u),
          (t[1] = m))
        : (m = t[1]);
      var f;
      t[2] !== l
        ? ((f = s.jsx(o("WAWebText.react").WAWebTextSmall, { children: l })),
          (t[2] = l),
          (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== m || t[5] !== f
        ? ((g = s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [m, f] })),
          (t[4] = m),
          (t[5] = f),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== n ? ((h = d(n)), (t[7] = n), (t[8] = h)) : (h = t[8]);
      var y;
      t[9] !== u ? ((y = d(u)), (t[9] = u), (t[10] = y)) : (y = t[10]);
      var C = h + "-" + y,
        b;
      t[11] !== n || t[12] !== a || t[13] !== i || t[14] !== C
        ? ((b = s.jsx(_, { active: a, onClick: i, testid: void 0, text: n })),
          (t[11] = n),
          (t[12] = a),
          (t[13] = i),
          (t[14] = C),
          (t[15] = b))
        : (b = t[15]);
      var v;
      return (
        t[16] !== g || t[17] !== b || t[18] !== c
          ? ((v = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              xstyle: c,
              children: [g, b],
            })),
            (t[16] = g),
            (t[17] = b),
            (t[18] = c),
            (t[19] = v))
          : (v = t[19]),
        v
      );
    }
    function p(e) {
      return e.toString().toLowerCase().replaceAll(" ", "-");
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.active,
        a = e.onClick,
        i = e.testid,
        l = e.text,
        u = d(),
        m,
        p;
      (t[0] !== n
        ? ((m = function () {
            n && r("WAWebFocusTracer").focus(u.current);
          }),
          (p = [n]),
          (t[0] = n),
          (t[1] = m),
          (t[2] = p))
        : ((m = t[1]), (p = t[2])),
        c(m, p));
      var _;
      t[3] !== a
        ? ((_ = function () {
            return a(void 0);
          }),
          (t[3] = a),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      return (
        t[5] !== _ || t[6] !== i || t[7] !== l
          ? ((f = s.jsx(r("WDSButton.react"), {
              ref: u,
              variant: "borderless",
              label: l,
              onPress: _,
              testid: void 0,
            })),
            (t[5] = _),
            (t[6] = i),
            (t[7] = l),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    l.default = m;
  },
  98,
);
