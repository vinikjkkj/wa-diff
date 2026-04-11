__d(
  "WAWebMediaEditorToolbarShape.react",
  [
    "WANullthrows",
    "WAWebDropdown.react",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorToolbarButton.react",
    "WAWebMediaEditorToolbarColorIntegrated.react",
    "WAWebMediaEditorUtilsShapes",
    "WAWebRecalledIcon.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useRef,
      d = u.useState,
      m = {
        paddingHoriz4: {
          paddingInlineStart: "x181vq82",
          paddingInlineEnd: "x1uc92m",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.fillColor,
        r = e.strokeColor,
        a = e.withBorder,
        i = a === void 0 ? !0 : a,
        l;
      t[0] !== n
        ? ((l = (n == null ? void 0 : n.toRgbaString()) || "transparent"),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var u =
          (i &&
            n != null &&
            n.equals(
              o("WAWebMediaEditorEnumsColors").getColorValue(
                o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
              ),
            )) ||
          r
            ? "border-box"
            : "",
        c =
          i &&
          n != null &&
          n.equals(
            o("WAWebMediaEditorEnumsColors").getColorValue(
              o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
            ),
          )
            ? "1px solid #5c5c5c"
            : "",
        d;
      t[2] !== r
        ? ((d = (r == null ? void 0 : r.toRgbaString()) || "transparent"),
          (t[2] = r),
          (t[3] = d))
        : (d = t[3]);
      var m = r ? "4px" : "0px",
        p;
      if (t[4] !== l || t[5] !== u || t[6] !== c || t[7] !== d || t[8] !== m) {
        var _ = {
          width: "20px",
          height: "20px",
          backgroundColor: l,
          borderRadius: "50%",
          boxSizing: u,
          border: c,
          borderColor: d,
          borderStyle: "solid",
          borderWidth: m,
        };
        ((p = s.jsx("div", { style: _ })),
          (t[4] = l),
          (t[5] = u),
          (t[6] = c),
          (t[7] = d),
          (t[8] = m),
          (t[9] = p));
      } else p = t[9];
      return p;
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.fillColor,
        a = e.onFillColorSelect,
        i = e.onStrokeColorSelect,
        l = e.onStrokeWidthSelect,
        u = e.shape,
        _ = e.strokeColor,
        f = e.strokeWidth,
        g = c(),
        h = c(),
        y = d(null),
        C = y[0],
        b = y[1],
        v = d(null),
        S = v[0],
        R = v[1],
        L =
          u === o("WAWebMediaEditorUtilsShapes").ShapeType.LINE ||
          u === o("WAWebMediaEditorUtilsShapes").ShapeType.ARROW,
        E;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = {
            dirX: r("WAWebL10N").isRTL()
              ? o("WAWebDropdown.react").DirX.LEFT
              : o("WAWebDropdown.react").DirX.RIGHT,
            dirY: o("WAWebDropdown.react").DirY.TOP,
            offsetY: -5,
          }),
          (t[0] = E))
        : (E = t[0]);
      var k = E,
        I;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function () {
            b(null);
          }),
          (t[1] = I))
        : (I = t[1]);
      var T = I,
        D;
      t[2] !== n || t[3] !== a
        ? ((D = function (t) {
            (t.preventDefault(), R(null));
            var e = s.jsx(
                o("WAWebMediaEditorToolbarColorIntegrated.react")
                  .IntegratedColorToolbar,
                { onColorSelect: a, selectedColor: n },
              ),
              i = babelHelpers.extends(
                { menu: e, anchor: r("WANullthrows")(g.current) },
                k,
              );
            b(i);
          }),
          (t[2] = n),
          (t[3] = a),
          (t[4] = D))
        : (D = t[4]);
      var x = D,
        $;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            R(null);
          }),
          (t[5] = $))
        : ($ = t[5]);
      var P = $,
        N;
      t[6] !== i || t[7] !== l || t[8] !== _ || t[9] !== f
        ? ((N = function (t) {
            (t.preventDefault(), b(null));
            var e = s.jsx(
                o("WAWebMediaEditorToolbarColorIntegrated.react")
                  .IntegratedColorToolbar,
                {
                  onColorSelect: i,
                  selectedColor: _,
                  strokeProps: { onStrokeWidthSelect: l, strokeWidth: f },
                },
              ),
              n = babelHelpers.extends(
                { menu: e, anchor: r("WANullthrows")(h.current) },
                k,
              );
            R(n);
          }),
          (t[6] = i),
          (t[7] = l),
          (t[8] = _),
          (t[9] = f),
          (t[10] = N))
        : (N = t[10]);
      var M = N,
        w;
      t[11] !== n
        ? ((w = n.equals(
            o("WAWebMediaEditorEnumsColors").getColorValue(
              o("WAWebMediaEditorEnumsColors").ColorType.TRANSPARENT,
            ),
          )
            ? s.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {
                width: 24,
                height: 24,
              })
            : s.jsx(p, { fillColor: n })),
          (t[11] = n),
          (t[12] = w))
        : (w = t[12]);
      var A = w,
        F;
      t[13] !== _
        ? ((F = _.equals(
            o("WAWebMediaEditorEnumsColors").getColorValue(
              o("WAWebMediaEditorEnumsColors").ColorType.TRANSPARENT,
            ),
          )
            ? s.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {
                width: 24,
                height: 24,
              })
            : s.jsx(p, { strokeColor: _ })),
          (t[13] = _),
          (t[14] = F))
        : (F = t[14]);
      var O = F,
        B;
      t[15] !== A || t[16] !== C || t[17] !== x || t[18] !== L
        ? ((B =
            !L &&
            s.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
              ref: g,
              onClick: x,
              caret: C ? "down" : "up",
              icon: A,
              children: s.jsx("div", { className: "xfo62xy" }),
            })),
          (t[15] = A),
          (t[16] = C),
          (t[17] = x),
          (t[18] = L),
          (t[19] = B))
        : (B = t[19]);
      var W = S ? "down" : "up",
        q;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = s.jsx("div", { className: "xfo62xy" })), (t[20] = q))
        : (q = t[20]);
      var U;
      t[21] !== M || t[22] !== O || t[23] !== W
        ? ((U = s.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            ref: h,
            onClick: M,
            caret: W,
            xstyle: m.paddingHoriz4,
            icon: O,
            children: q,
          })),
          (t[21] = M),
          (t[22] = O),
          (t[23] = W),
          (t[24] = U))
        : (U = t[24]);
      var V;
      t[25] !== C
        ? ((V =
            C &&
            s.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "fillPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: T,
              children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: C }),
            })),
          (t[25] = C),
          (t[26] = V))
        : (V = t[26]);
      var H;
      t[27] !== S
        ? ((H =
            S &&
            s.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "strokePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: P,
              children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: S }),
            })),
          (t[27] = S),
          (t[28] = H))
        : (H = t[28]);
      var G;
      return (
        t[29] !== U || t[30] !== V || t[31] !== H || t[32] !== B
          ? ((G = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 8,
              children: [B, U, V, H],
            })),
            (t[29] = U),
            (t[30] = V),
            (t[31] = H),
            (t[32] = B),
            (t[33] = G))
          : (G = t[33]),
        G
      );
    }
    var f = _;
    l.ShapeToolbar = f;
  },
  98,
);
