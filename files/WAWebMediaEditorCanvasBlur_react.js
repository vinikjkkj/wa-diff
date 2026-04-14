__d(
  "WAWebMediaEditorCanvasBlur.react",
  [
    "ReactKonva",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorUtilsFilters",
    "konva",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["composition", "overlay"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = 3,
      _ = 0.4;
    function f(t) {
      var n,
        a,
        i,
        l,
        s,
        c,
        f,
        g = t.activeFilter,
        h = t.frame,
        y = t.layer,
        C = t.onTransform,
        b = t.onTransformEnd,
        v = t.onTransformStart,
        S = t.scale,
        R = t.selectedNodeRef,
        L = t.showPadding,
        E = m(),
        k = y.getImage();
      d(
        function () {
          var e;
          E == null ||
            (e = E.current) == null ||
            e.cache({ pixelRatio: _, imageSmoothingEnabled: !1 });
        },
        [k],
      );
      var I = L ? 50 : 0,
        T = (n = h == null ? void 0 : h.getX()) != null ? n : y.getX(),
        D = (a = h == null ? void 0 : h.getY()) != null ? a : y.getY(),
        x = (i = h == null ? void 0 : h.getWidth()) != null ? i : y.getWidth(),
        $ =
          (l = h == null ? void 0 : h.getHeight()) != null ? l : y.getHeight(),
        P =
          (((s = S == null ? void 0 : S.x) != null ? s : 1) *
            y.getBackgroundFrame().getScale().x *
            p) /
          _,
        N =
          -T +
          y.getBackgroundFrame().getWidth() / 2 +
          y.getBackgroundFrame().getX(),
        M =
          -D +
          y.getBackgroundFrame().getHeight() / 2 +
          y.getBackgroundFrame().getY(),
        w =
          y.getBackgroundFrame().getWidth() +
          (I / y.getBackgroundFrame().getScale().x) * 2,
        A =
          y.getBackgroundFrame().getHeight() +
          (I / y.getBackgroundFrame().getScale().y) * 2,
        F = w / 2,
        O = A / 2,
        B = o("WAWebMediaEditorUtilsFilters").getKonvaFilters(g);
      y.getMode() === o("WAWebMediaEditorLayersShape").BlurMode.Smooth
        ? B.push(r("konva").Filters.Blur)
        : y.getMode() === o("WAWebMediaEditorLayersShape").BlurMode.Pixelate &&
          B.push(r("konva").Filters.Pixelate);
      var W = o("WAWebMediaEditorUtilsFilters").getFilterPresets(g),
        q = W.composition,
        U = W.overlay,
        V = babelHelpers.objectWithoutPropertiesLoose(W, e);
      return u.jsxs(o("ReactKonva").Group, {
        width: x,
        height: $,
        clipX: 0,
        clipY: 0,
        clipWidth: x,
        clipHeight: $,
        children: [
          u.jsx(
            o("ReactKonva").Image,
            babelHelpers.extends(
              {
                ref: E,
                x: N,
                y: M,
                width: w,
                height: A,
                offsetX: F,
                offsetY: O,
                fillPatternImage: y.getImage(),
                fillPatternOffsetX: -I / y.getBackgroundFrame().getScale().x,
                fillPatternOffsetY: -I / y.getBackgroundFrame().getScale().y,
                fillPatternRepeat: "no-repeat",
                scaleX: y.getBackgroundFrame().getScale().x,
                scaleY: y.getBackgroundFrame().getScale().y,
                rotation:
                  (c =
                    (f = y.getBackgroundFrame()) == null
                      ? void 0
                      : f.getRotation()) != null
                    ? c
                    : 0,
                perfectDrawEnabled: !1,
                filters: B,
                blurRadius: y.getRadius() / P,
                pixelSize: y.getRadius() / P,
              },
              V,
            ),
          ),
          u.jsx(o("ReactKonva").Rect, {
            ref: R,
            x: 0,
            y: 0,
            width: x,
            height: $,
            fill: U,
            globalCompositeOperation: q,
            onTransformStart: v,
            onTransformEnd: b,
            onTransform: C,
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
