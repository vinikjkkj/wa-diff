__d(
  "WAWebMediaEditorToolbarColorPickerInput.react",
  [
    "WAWebCopyPasteSelectable.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaEditorToolbarColor.react",
    "WAWebMediaEditorToolbarColorChip.react",
    "WAWebMediaEditorToolbarColorPickerConsts",
    "WAWebMediaEditorUtilsColor",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        container: {
          alignItems: "x6s0dn4",
          boxSizing: "x9f619",
          display: "x78zum5",
          justifyContent: "x1nhvcw1",
          $$css: !0,
        },
        defaultHeight: { minHeight: "x7ywyr2", $$css: !0 },
        compactHeight: { maxHeight: "x1aa1le3", $$css: !0 },
        input: {
          backgroundColor: "xjbqb8w",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          color: "x14ug900",
          fontSize: "x6prxxf",
          lineHeight: "x1fc57z9",
          outline: "x1a2a7pz",
          $$css: !0,
        },
      };
    function f(t) {
      var n = t.color,
        a = t.onColorPickerClose,
        i = t.onChangeColor,
        l = t.theme,
        s =
          l === void 0
            ? o("WAWebMediaEditorToolbarColor.react").Theme.Default
            : l,
        c = m(null),
        f = p(n.toHex()),
        g = f[0],
        h = f[1],
        y = p(!1),
        C = y[0],
        b = y[1];
      d(
        function () {
          C || h(n.toHex());
        },
        [n, C],
      );
      var v = function (t) {
          var e = t.target.value;
          if ((h(e), !(!e || !o("WAWebMediaEditorUtilsColor").isValidHex(e)))) {
            var n = o("WAWebMediaEditorUtilsColor").Color.fromHex(e);
            i(n);
          }
        },
        S = function () {
          b(!1);
        },
        R = function () {
          b(!0);
        };
      return u.jsxs("div", {
        className: (e || (e = r("stylex")))([
          _.container,
          s === o("WAWebMediaEditorToolbarColor.react").Theme.Default
            ? [_.defaultHeight, o("WAWebUISpacing").uiPadding.horiz8]
            : _.compactHeight,
        ]),
        style: {
          width: o("WAWebMediaEditorToolbarColorPickerConsts").CONTAINER_WIDTH,
          height: o("WAWebMediaEditorToolbarColorPickerConsts").INPUT_HEIGHT,
        },
        children: [
          u.jsx(r("WAWebMediaEditorToolbarColorChip.react"), {
            withBorder: !0,
            primaryColor: n,
            selected: !1,
            theme: "medium",
          }),
          u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            handlers: { enter: a },
            children: u.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
              selectable: !0,
              children: u.jsx(
                "input",
                babelHelpers.extends(
                  { type: "text", ref: c },
                  e.props([
                    _.input,
                    o("WAWebUISpacing").uiPadding.vert10,
                    o("WAWebUISpacing").uiPadding.horiz8,
                  ]),
                  { value: g, onChange: v, onBlur: S, onFocus: R },
                ),
              ),
            }),
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
