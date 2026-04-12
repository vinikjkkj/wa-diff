__d(
  "WAWebMediaEditorToolbarThickness.react",
  ["WAWebMediaEditorEnumsThickness", "WAWebUISpacing", "react", "stylex"],
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
      var n = t.onThicknessSelect,
        a = t.selectedThickness,
        i = t.thickness,
        l = a === i;
      return u.jsx(
        "div",
        {
          onClick: function () {
            return n(i);
          },
          className: (e || (e = r("stylex")))(
            c.thicknessButton,
            l && c.thicknessButtonSelected,
            [
              o("WAWebUISpacing").uiPadding.vert4,
              o("WAWebUISpacing").uiPadding.horiz5,
            ],
          ),
          style: {
            height: o("WAWebMediaEditorEnumsThickness").getThicknessValue(i),
            width: o("WAWebMediaEditorEnumsThickness").getThicknessValue(i),
          },
        },
        o("WAWebMediaEditorEnumsThickness").ThicknessType.getName(i),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t) {
      var n = t.onThicknessSelect,
        a = t.selectedThickness,
        i = t.thicknesses,
        l = i.map(function (e, t) {
          return u.jsx(
            d,
            { thickness: e, onThicknessSelect: n, selectedThickness: a },
            t,
          );
        });
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(c.container, [
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.end8,
            o("WAWebUISpacing").uiPadding.start20,
          ]),
          { children: l },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
