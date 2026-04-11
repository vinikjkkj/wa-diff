__d(
  "WAWebMediaEditorToolbarThickness.react",
  [
    "WAWebMediaEditorEnumsThickness",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        container: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
        thicknessButton: {
          cursor: "x1ypdohk",
          transition: "x3uy0m3",
          backgroundColor: "x1b09ust",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundClip: "xqkn89t",
          ":hover_backgroundColor": "x1v5ln58",
          ":active_backgroundColor": "x1yj6aur",
          $$css: !0,
        },
        thicknessButtonSelected: { backgroundColor: "xoger0s", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(19),
        a = t.onThicknessSelect,
        i = t.selectedThickness,
        l = t.thickness,
        s = i === l,
        d;
      n[0] !== l
        ? ((d = o("WAWebMediaEditorEnumsThickness").ThicknessType.getName(l)),
          (n[0] = l),
          (n[1] = d))
        : (d = n[1]);
      var m;
      n[2] !== a || n[3] !== l
        ? ((m = function () {
            return a(l);
          }),
          (n[2] = a),
          (n[3] = l),
          (n[4] = m))
        : (m = n[4]);
      var p;
      n[5] !== s
        ? ((p = (e || (e = r("stylex")))(
            c.thicknessButton,
            s && c.thicknessButtonSelected,
            [
              o("WAWebUISpacing").uiPadding.vert4,
              o("WAWebUISpacing").uiPadding.horiz5,
            ],
          )),
          (n[5] = s),
          (n[6] = p))
        : (p = n[6]);
      var _;
      n[7] !== l
        ? ((_ = o("WAWebMediaEditorEnumsThickness").getThicknessValue(l)),
          (n[7] = l),
          (n[8] = _))
        : (_ = n[8]);
      var f;
      n[9] !== l
        ? ((f = o("WAWebMediaEditorEnumsThickness").getThicknessValue(l)),
          (n[9] = l),
          (n[10] = f))
        : (f = n[10]);
      var g;
      n[11] !== _ || n[12] !== f
        ? ((g = { height: _, width: f }), (n[11] = _), (n[12] = f), (n[13] = g))
        : (g = n[13]);
      var h;
      return (
        n[14] !== d || n[15] !== m || n[16] !== p || n[17] !== g
          ? ((h = u.jsx("div", { onClick: m, className: p, style: g }, d)),
            (n[14] = d),
            (n[15] = m),
            (n[16] = p),
            (n[17] = g),
            (n[18] = h))
          : (h = n[18]),
        h
      );
    }
    function m(t) {
      var n = o("react-compiler-runtime").c(10),
        a = t.onThicknessSelect,
        i = t.selectedThickness,
        l = t.thicknesses,
        s;
      if (n[0] !== a || n[1] !== i || n[2] !== l) {
        var m;
        (n[4] !== a || n[5] !== i
          ? ((m = function (t, n) {
              return u.jsx(
                d,
                { thickness: t, onThicknessSelect: a, selectedThickness: i },
                n,
              );
            }),
            (n[4] = a),
            (n[5] = i),
            (n[6] = m))
          : (m = n[6]),
          (s = l.map(m)),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = s));
      } else s = n[3];
      var p = s,
        _;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (e || (e = r("stylex"))).props(c.container, [
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.end8,
            o("WAWebUISpacing").uiPadding.start20,
          ])),
          (n[7] = _))
        : (_ = n[7]);
      var f;
      return (
        n[8] !== p
          ? ((f = u.jsx("div", babelHelpers.extends({}, _, { children: p }))),
            (n[8] = p),
            (n[9] = f))
          : (f = n[9]),
        f
      );
    }
    l.default = m;
  },
  98,
);
