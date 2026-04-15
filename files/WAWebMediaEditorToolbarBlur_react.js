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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(30),
        n = e.blurMode,
        a = e.blurRadius,
        i = e.onBlurModeChange,
        l = e.onBlurRadiusChange,
        c = e.ref,
        g = p(null),
        y = g[0],
        C = g[1],
        b = m(null),
        v;
      t[0] !== i
        ? ((v = function (t, n) {
            (t.preventDefault(), i(n));
          }),
          (t[0] = i),
          (t[1] = v))
        : (v = t[1]);
      var S = v,
        R;
      t[2] !== l
        ? ((R = function (t, n) {
            l(t, n);
          }),
          (t[2] = l),
          (t[3] = R))
        : (R = t[3]);
      var L = R,
        E;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            C(null);
          }),
          (t[4] = E))
        : (E = t[4]);
      var k = E,
        I;
      t[5] !== n || t[6] !== S
        ? ((I = function (t) {
            t.preventDefault();
            var e = Array.from(
                [
                  o("WAWebMediaEditorLayersShape").BlurMode.Pixelate,
                  o("WAWebMediaEditorLayersShape").BlurMode.Smooth,
                ],
                function (e) {
                  var t =
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
                        return S(n, e);
                      },
                      children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                        align: "center",
                        className:
                          "xyinxu5 x1g2khh7 x1onr9mi x1x5flf6 x1ubxc9n",
                        children: [
                          u.jsx(t, {
                            xstyle: h.blurModeIconContainer,
                            iconXstyle: h.blurModeIcon,
                          }),
                          e === n &&
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
                anchor: r("WANullthrows")(b.current),
              };
            C(a);
          }),
          (t[5] = n),
          (t[6] = S),
          (t[7] = I))
        : (I = t[7]);
      var T = I,
        D;
      t[8] !== y
        ? ((D = function () {
            return !!y;
          }),
          (t[8] = y),
          (t[9] = D))
        : (D = t[9]);
      var x = D,
        $;
      (t[10] !== x
        ? (($ = function () {
            return { isPanelVisible: x };
          }),
          (t[10] = x),
          (t[11] = $))
        : ($ = t[11]),
        d(c, $));
      var P =
          n === o("WAWebMediaEditorLayersShape").BlurMode.Smooth
            ? o("WAWebMediaEditorBlurSmoothIcon.react")
                .MediaEditorBlurSmoothIcon
            : o("WAWebMediaEditorBlurPixelateIcon.react")
                .MediaEditorBlurPixelateIcon,
        N = y ? "down" : "up",
        M;
      t[12] !== P
        ? ((M = u.jsx(P, { iconXstyle: h.blurModeIcon, displayInline: !0 })),
          (t[12] = P),
          (t[13] = M))
        : (M = t[13]);
      var w, A;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Blur mode")),
          (w = u.jsx("div", {
            className:
              "x1g8rjiy xexx8yu xyri2b x18d9i69 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak",
          })),
          (t[14] = w),
          (t[15] = A))
        : ((w = t[14]), (A = t[15]));
      var F;
      t[16] !== T || t[17] !== N || t[18] !== M
        ? ((F = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            ref: b,
            onClick: T,
            caret: N,
            icon: M,
            title: A,
            children: w,
          })),
          (t[16] = T),
          (t[17] = N),
          (t[18] = M),
          (t[19] = F))
        : (F = t[19]);
      var O;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = { className: "x13jy36j x1o5r3ls" }), (t[20] = O))
        : (O = t[20]);
      var B;
      t[21] !== a || t[22] !== L
        ? ((B = u.jsx(
            "div",
            babelHelpers.extends({}, O, {
              children: u.jsx(o("WAWebSlider.react").Slider, {
                min: _,
                max: f,
                value: a,
                onChange: L,
                displayValue: !0,
              }),
            }),
          )),
          (t[21] = a),
          (t[22] = L),
          (t[23] = B))
        : (B = t[23]);
      var W;
      t[24] !== y
        ? ((W =
            y &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "BlurModePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: k,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: y }),
            })),
          (t[24] = y),
          (t[25] = W))
        : (W = t[25]);
      var q;
      return (
        t[26] !== F || t[27] !== B || t[28] !== W
          ? ((q = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [F, B, W],
            })),
            (t[26] = F),
            (t[27] = B),
            (t[28] = W),
            (t[29] = q))
          : (q = t[29]),
        q
      );
    }
    var C = y;
    ((l.BLUR_DEFAULT_RADIUS = g),
      (l.BLUR_DEFAULT_MODE = o(
        "WAWebMediaEditorLayersShape",
      ).BlurMode.Pixelate),
      (l.BlurToolbar = C));
  },
  226,
);
