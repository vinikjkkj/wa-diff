__d(
  "WAWebMediaEditorCanvasBackground.react",
  [
    "ReactKonva",
    "WAWebCanvasUtils",
    "WAWebMediaEditorCanvasImage.react",
    "WAWebMediaEditorCanvasOutline.react",
    "WAWebStickerConstants",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef;
    function m(e) {
      var t = e.activeFilter,
        n = e.layer,
        a = e.outlineLayer,
        i = e.ref,
        l = e.scale,
        u = e.visible,
        m = d(),
        p = d(),
        _ = function () {
          var e;
          (e = p.current) == null || e.show();
        },
        f = function () {
          var e;
          (e = p.current) == null || e.hide();
        };
      if (
        (c(i, function () {
          return {
            toCanvas: function () {
              var e,
                t = (e = p.current) == null ? void 0 : e.getBoundingRect(),
                n = m.current;
              if (!(!t || !n || t.getSize().isEmpty())) {
                var r = t.getX(),
                  a = t.getY(),
                  i = t.getWidth(),
                  s = t.getHeight();
                _();
                var u = n.toCanvas({
                  x: r,
                  y: a,
                  width: i,
                  height: s,
                  pixelRatio: 1 / l.x,
                });
                f();
                var c = Math.max(u.width, u.height),
                  d = c / o("WAWebStickerConstants").STICKER_DIMENSION,
                  g = o("WAWebStickerConstants").STICKER_BORDER_WIDTH * d,
                  h = Math.max(Math.ceil(g), 2),
                  y = o("WAWebCanvasUtils").addBorder(u, h),
                  C = o("WAWebCanvasUtils").trim(y);
                return C;
              }
            },
          };
        }),
        !n || !a)
      )
        return null;
      var g = n.getFrame().getCenter();
      return s.jsxs(o("ReactKonva").Group, {
        ref: m,
        visible: u,
        children: [
          s.jsx(o("ReactKonva").Group, {
            x: g.getX(),
            y: g.getY(),
            offsetX: n.getWidth() / 2,
            offsetY: n.getHeight() / 2,
            width: n.getWidth(),
            height: n.getHeight(),
            rotation: n.getRotation(),
            scaleX: n.getScale().x,
            scaleY: n.getScale().y,
            children: s.jsx(r("WAWebMediaEditorCanvasImage.react"), {
              layer: n,
              activeFilter: t,
            }),
          }),
          s.jsx(o("WAWebMediaEditorCanvasOutline.react").Outline, {
            ref: p,
            layer: a,
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
