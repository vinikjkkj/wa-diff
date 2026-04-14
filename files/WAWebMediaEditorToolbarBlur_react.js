__d(
  "WAWebMediaEditorToolbarBlur.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebCheckmarkMediumIcon.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebFlex.react",
    "WAWebMediaEditorBlurPixelateIcon.react",
    "WAWebMediaEditorBlurSmoothIcon.react",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebSlider.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useImperativeHandle,
      m = c.useRef,
      p = c.useState,
      _ = 10,
      f = 100,
      g = 50,
      h = {
        blurModeIconContainer: { marginInlineEnd: "x3aesyq", $$css: !0 },
        blurModeIcon: { width: "xvy4d1p", height: "xxk0z11", $$css: !0 },
        checkmarkIcon: { width: "x1kky2od", height: "xlup9mm", $$css: !0 },
      };
    function y(e) {
      var t = e.blurMode,
        n = e.blurRadius,
        a = e.onBlurModeChange,
        i = e.onBlurRadiusChange,
        l = e.ref,
        c = p(null),
        g = c[0],
        y = c[1],
        C = m(null),
        b = function (t, n) {
          (t.preventDefault(), a(n));
        },
        v = function (t, n) {
          i(t, n);
        },
        S = function () {
          y(null);
        },
        R = function (n) {
          n.preventDefault();
          var e = Array.from(
              [
                o("WAWebMediaEditorLayersShape").BlurMode.Pixelate,
                o("WAWebMediaEditorLayersShape").BlurMode.Smooth,
              ],
              function (e) {
                var n =
                  e === o("WAWebMediaEditorLayersShape").BlurMode.Smooth
                    ? o("WAWebMediaEditorBlurSmoothIcon.react")
                        .MediaEditorBlurSmoothIcon
                    : o("WAWebMediaEditorBlurPixelateIcon.react")
                        .MediaEditorBlurPixelateIcon;
                return u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: function (n) {
                      return b(n, e);
                    },
                    children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      className: "xyinxu5 x1g2khh7 x1onr9mi x1x5flf6 x1ubxc9n",
                      children: [
                        u.jsx(n, {
                          xstyle: h.blurModeIconContainer,
                          iconXstyle: h.blurModeIcon,
                        }),
                        e === t &&
                          u.jsx(
                            o("WAWebCheckmarkMediumIcon.react")
                              .CheckmarkMediumIcon,
                            { iconXstyle: h.checkmarkIcon },
                          ),
                      ],
                    }),
                  },
                  e,
                );
              },
            ),
            a = {
              menu: e,
              dirX: o("WAWebDropdown.react").DirX.CENTER,
              dirY: o("WAWebDropdown.react").DirY.TOP,
              offsetY: -5,
              anchor: r("WANullthrows")(C.current),
            };
          y(a);
        },
        L = function () {
          return !!g;
        };
      d(l, function () {
        return { isPanelVisible: L };
      });
      var E =
        t === o("WAWebMediaEditorLayersShape").BlurMode.Smooth
          ? o("WAWebMediaEditorBlurSmoothIcon.react").MediaEditorBlurSmoothIcon
          : o("WAWebMediaEditorBlurPixelateIcon.react")
              .MediaEditorBlurPixelateIcon;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        children: [
          u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            ref: C,
            onClick: R,
            caret: g ? "down" : "up",
            icon: u.jsx(E, { iconXstyle: h.blurModeIcon, displayInline: !0 }),
            title: s._(/*BTDS*/ "Blur mode"),
            children: u.jsx("div", {
              className:
                "x1g8rjiy xexx8yu xyri2b x18d9i69 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak",
            }),
          }),
          u.jsx("div", {
            className: "x13jy36j x1o5r3ls",
            children: u.jsx(o("WAWebSlider.react").Slider, {
              min: _,
              max: f,
              value: n,
              onChange: v,
              displayValue: !0,
            }),
          }),
          g &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "BlurModePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: S,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: g }),
            }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = y;
    ((l.BLUR_DEFAULT_RADIUS = g),
      (l.BLUR_DEFAULT_MODE = o(
        "WAWebMediaEditorLayersShape",
      ).BlurMode.Pixelate),
      (l.BlurToolbar = C));
  },
  226,
);
