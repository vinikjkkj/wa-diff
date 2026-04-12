__d(
  "WAWebMediaEditorToolbarFont.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebMediaEditorEnumsFonts",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebMediaEditorToolbarFontDropdown.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useImperativeHandle,
      _ = m.useRef,
      f = m.useState,
      g = {
        icon: {
          width: "xw4jnvo",
          height: "x1qx5ct2",
          fontSize: "x1nxh6w3",
          color: "x1r3oa16",
          textAlign: "x2b8uid",
          backgroundColor: "x1518k6t",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      };
    function h(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.fonts,
        l = a.onAlignmentSelect,
        c = a.onFontSelect,
        m = a.selectedAlignment,
        h = a.selectedFont,
        y = _(null),
        C = f(null),
        b = C[0],
        v = C[1],
        S = function (t) {
          if (!b && y.current) {
            var e = d.jsx(r("WAWebMediaEditorToolbarFontDropdown.react"), {
              fonts: i,
              selectedFont: h,
              selectedAlignment: m,
              showAlignmentOptions: !0,
              onFontSelect: c,
              onAlignmentSelect: l,
            });
            v({ menu: e, anchor: y.current });
          }
        },
        R = function () {
          v(null);
        },
        L = function () {
          return !!b;
        };
      p(n, function () {
        return { isMenuVisible: L };
      });
      var E = !!b,
        k;
      b &&
        (k = d.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "MediaEditorFontDropdown",
          escapable: !0,
          popable: !0,
          dismissOnWindowResize: !0,
          requestDismiss: R,
          children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: b }),
        }));
      var I = d.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: g.icon,
          style: babelHelpers.extends(
            {},
            o("WAWebMediaEditorEnumsFonts").getFontStyle(h),
          ),
          justify: "center",
          align: "center",
          children: d.jsx("div", {
            "aria-hidden": "true",
            children: s._(/*BTDS*/ "A"),
          }),
        }),
        T = d.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
          onClick: S,
          icon: I,
          selected: E,
          caret: E ? "down" : "up",
          children: d.jsx(
            "span",
            babelHelpers.extends(
              {},
              (u || (u = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.end5,
              ),
              {
                children: o("WAWebMediaEditorEnumsFonts").getFontTranslation(h),
              },
            ),
          ),
        });
      return d.jsxs("div", {
        ref: y,
        className: "x1n2onr6 x2lah0s",
        children: [
          T,
          d.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "dropdown",
            children: k,
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = h;
    l.Font = y;
  },
  226,
);
