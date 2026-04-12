__d(
  "WAWebMediaEditorToolbarColor.react",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebDropdown.react",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebMediaEditorToolbarColorChip.react",
    "WAWebMediaEditorToolbarColorPicker.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef,
      p = c.useState,
      _ = {
        container: { minWidth: "xeuugli", $$css: !0 },
        colorChipsContainer: {
          minWidth: "x187xtus",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      },
      f = n("$InternalEnum").Mirrored(["Default", "Integrated"]);
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.colors,
        l = a.onColorSelect,
        s = a.selectedColor,
        c = a.theme,
        g = c === void 0 ? f.Default : c,
        h = m(),
        y = p(null),
        C = y[0],
        b = y[1],
        v = function () {
          b(null);
        },
        S = function (t) {
          (t.preventDefault(), t.stopPropagation());
          var e = {
            menu: u.jsx(r("WAWebMediaEditorToolbarColorPicker.react"), {
              onColorSelect: l,
              selectedColor: s,
              onColorPickerClose: v,
            }),
            dirX: r("WAWebL10N").isRTL()
              ? o("WAWebDropdown.react").DirX.RIGHT
              : o("WAWebDropdown.react").DirX.LEFT,
            dirY: o("WAWebDropdown.react").DirY.BOTTOM,
            type: o("WAWebDropdown.react").MenuType.ColorPicker,
            anchor: r("WANullthrows")(h.current),
          };
          b(e);
        },
        R = function () {
          return !!C;
        },
        L = function (t) {
          l(t);
        };
      d(n, function () {
        return { isPanelVisible: R };
      });
      var E = i.map(function (e) {
          var t = e.primaryColor;
          return u.jsx(
            r("WAWebMediaEditorToolbarColorChip.react"),
            {
              primaryColor: t,
              onSelect: function () {
                return L(t);
              },
              selected: !!(s && s.equals(t)),
              withBorder: !0,
              theme: g === f.Integrated ? "small" : void 0,
            },
            t.toString(),
          );
        }),
        k = null;
      return (
        C &&
          (k = u.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "ColorPicker",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: v,
            children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: C }),
          })),
        u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          xstyle: _.container,
          children: [
            u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: _.colorChipsContainer,
              gap: g === f.Integrated ? 8 : 0,
              children: E,
            }),
            g === f.Default &&
              u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
                ref: h,
                onClick: S,
                caret: C ? "down" : "up",
              }),
            k,
          ],
        })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.Theme = f),
      (l.ColorToolbar = g));
  },
  98,
);
