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
      var t = e.fillColor,
        n = e.strokeColor,
        r = e.withBorder,
        a = r === void 0 ? !0 : r,
        i = {
          width: "20px",
          height: "20px",
          backgroundColor:
            (t == null ? void 0 : t.toRgbaString()) || "transparent",
          borderRadius: "50%",
          boxSizing:
            (a &&
              t != null &&
              t.equals(
                o("WAWebMediaEditorEnumsColors").getColorValue(
                  o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
                ),
              )) ||
            n
              ? "border-box"
              : "",
          border:
            a &&
            t != null &&
            t.equals(
              o("WAWebMediaEditorEnumsColors").getColorValue(
                o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
              ),
            )
              ? "1px solid #5c5c5c"
              : "",
          borderColor: (n == null ? void 0 : n.toRgbaString()) || "transparent",
          borderStyle: "solid",
          borderWidth: n ? "4px" : "0px",
        };
      return s.jsx("div", { style: i });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.fillColor,
        n = e.onFillColorSelect,
        a = e.onStrokeColorSelect,
        i = e.onStrokeWidthSelect,
        l = e.shape,
        u = e.strokeColor,
        _ = e.strokeWidth,
        f = c(),
        g = c(),
        h = d(null),
        y = h[0],
        C = h[1],
        b = d(null),
        v = b[0],
        S = b[1],
        R =
          l === o("WAWebMediaEditorUtilsShapes").ShapeType.LINE ||
          l === o("WAWebMediaEditorUtilsShapes").ShapeType.ARROW,
        L = {
          dirX: r("WAWebL10N").isRTL()
            ? o("WAWebDropdown.react").DirX.LEFT
            : o("WAWebDropdown.react").DirX.RIGHT,
          dirY: o("WAWebDropdown.react").DirY.TOP,
          offsetY: -5,
        },
        E = function () {
          C(null);
        },
        k = function (a) {
          (a.preventDefault(), S(null));
          var e = s.jsx(
              o("WAWebMediaEditorToolbarColorIntegrated.react")
                .IntegratedColorToolbar,
              { onColorSelect: n, selectedColor: t },
            ),
            i = babelHelpers.extends(
              { menu: e, anchor: r("WANullthrows")(f.current) },
              L,
            );
          C(i);
        },
        I = function () {
          S(null);
        },
        T = function (t) {
          (t.preventDefault(), C(null));
          var e = s.jsx(
              o("WAWebMediaEditorToolbarColorIntegrated.react")
                .IntegratedColorToolbar,
              {
                onColorSelect: a,
                selectedColor: u,
                strokeProps: { onStrokeWidthSelect: i, strokeWidth: _ },
              },
            ),
            n = babelHelpers.extends(
              { menu: e, anchor: r("WANullthrows")(g.current) },
              L,
            );
          S(n);
        },
        D = t.equals(
          o("WAWebMediaEditorEnumsColors").getColorValue(
            o("WAWebMediaEditorEnumsColors").ColorType.TRANSPARENT,
          ),
        )
          ? s.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {
              width: 24,
              height: 24,
            })
          : s.jsx(p, { fillColor: t }),
        x = u.equals(
          o("WAWebMediaEditorEnumsColors").getColorValue(
            o("WAWebMediaEditorEnumsColors").ColorType.TRANSPARENT,
          ),
        )
          ? s.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {
              width: 24,
              height: 24,
            })
          : s.jsx(p, { strokeColor: u });
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        gap: 8,
        children: [
          !R &&
            s.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
              ref: f,
              onClick: k,
              caret: y ? "down" : "up",
              icon: D,
              children: s.jsx("div", { className: "xfo62xy" }),
            }),
          s.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
            ref: g,
            onClick: T,
            caret: v ? "down" : "up",
            xstyle: m.paddingHoriz4,
            icon: x,
            children: s.jsx("div", { className: "xfo62xy" }),
          }),
          y &&
            s.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "fillPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: E,
              children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: y }),
            }),
          v &&
            s.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "strokePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: I,
              children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: v }),
            }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = _;
    l.ShapeToolbar = f;
  },
  98,
);
