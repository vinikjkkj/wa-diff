__d(
  "WAWebMediaEditorPreviewCropRotate.react",
  [
    "ReactKonva",
    "WAWebMediaEditorCanvas.react",
    "WAWebMediaEditorGeometryPoint",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorUtilsSize",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState,
      p = new (r("WAWebMediaEditorGeometrySize"))({ width: 200, height: 200 }),
      _ = 20,
      f = 10,
      g = 10;
    function h(e) {
      var t = e.containerSize,
        n = e.cropOrigin,
        a = e.cropSize,
        i = e.data,
        l = e.keepRatio,
        u = e.onCropChange,
        h = e.rotation,
        S = e.sendAsSticker,
        R = i.resetCropRotate().setRotation(h),
        L = m(null),
        E = L[0],
        k = L[1],
        I = m(null),
        T = I[0],
        D = I[1],
        x = a.getWidth(),
        $ = a.getHeight(),
        P = n.getX(),
        N = n.getY(),
        M = d(a),
        w = x / M.current.getWidth(),
        A = $ / M.current.getHeight(),
        F = i.getWidth(),
        O = i.getHeight(),
        B = y(F, O, h),
        W = B.height,
        q = B.width,
        U = new (r("WAWebMediaEditorGeometrySize"))({
          width: t.getWidth() - g * 2,
          height: t.getHeight() - g * 2,
        }),
        V = o("WAWebMediaEditorUtilsSize").calculateContainScale(
          h % 180 ? O : F,
          h % 180 ? F : O,
          U,
          p,
        ),
        H = g / V.x,
        G = new (r("WAWebMediaEditorGeometrySize"))({
          width: F + H * 2,
          height: O + H * 2,
        }),
        z = y(G.getWidth(), G.getHeight(), h),
        j = z.height,
        K = z.width,
        Q = G.getWidth() / 2,
        X = G.getHeight() / 2,
        Y = K / 2,
        J = j / 2;
      c(
        function () {
          if (E && T && E.nodes().length === 0) {
            var e;
            (E.nodes([T]), (e = T.getLayer()) == null || e.batchDraw());
          }
        },
        [E, T],
      );
      var Z = function (t) {
          var e = t.target,
            n = Math.round(e.x()),
            o = Math.round(e.y()),
            a = Math.min(Math.round(e.width() * e.scaleX()), F - n),
            i = Math.min(Math.round(e.height() * e.scaleY()), O - o);
          u(
            new (r("WAWebMediaEditorGeometryPoint"))({ x: n, y: o }),
            new (r("WAWebMediaEditorGeometrySize"))({ width: a, height: i }),
          );
        },
        ee = function (t, n) {
          var e = F * V.x + g * 2,
            r = O * V.y + g * 2,
            o = v(t, e, r, h, -h),
            a = v(n, e, r, h, -h);
          return (
            Math.round(a.x) < g
              ? ((a.x = g), (a.width = o.width + (o.x - g)))
              : Math.round(a.width) < _
                ? ((a.x = o.x), (a.width = o.width))
                : Math.round(a.x + a.width) > Math.round(e) - g &&
                  (a.width = e - a.x - g),
            Math.round(a.y) < g
              ? ((a.y = g), (a.height = o.height + (o.y - g)))
              : Math.round(a.height) < _
                ? ((a.y = o.y), (a.height = o.height))
                : Math.round(a.y + a.height) > Math.round(r) - g &&
                  (a.height = r - a.y - g),
            v(a, e, r, 0, h)
          );
        },
        te = function (t) {
          var e = y(x, $, h),
            n = e.height,
            r = e.width,
            o = C(t.x, t.y, r * V.x, n * V.y, h),
            a = o.x,
            i = o.y;
          (a < g
            ? (a = g)
            : (a - g) / V.x + r > q && (a = Math.round(q - r + H) * V.x),
            i < g
              ? (i = g)
              : (i - g) / V.y + n > W && (i = Math.round(W - n + H) * V.y));
          var l = b(a, i, r * V.x, n * V.y, h);
          return l;
        },
        ne = ["top-left", "top-right", "bottom-left", "bottom-right"];
      return (
        l ||
          ne.push("top-center", "middle-right", "middle-left", "bottom-center"),
        s.jsxs("div", {
          className: "x1n2onr6",
          "data-testid": void 0,
          children: [
            s.jsx(r("WAWebMediaEditorCanvas.react"), {
              data: R,
              scale: V,
              canEditLayer: !1,
              style: { padding: g },
              outlineEnabled: S,
            }),
            s.jsx(o("ReactKonva").Stage, {
              className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod",
              width: Math.round(K * V.x),
              height: Math.round(j * V.y),
              scaleX: V.x,
              scaleY: V.y,
              children: s.jsx(
                o("ReactKonva").Layer,
                {
                  rotation: h,
                  offsetX: Q,
                  offsetY: X,
                  x: Y,
                  y: J,
                  children: s.jsxs(o("ReactKonva").Group, {
                    x: H,
                    y: H,
                    children: [
                      s.jsx(o("ReactKonva").Rect, {
                        x: 0,
                        y: 0,
                        width: F,
                        height: O,
                        fill: "black",
                        opacity: 0.6,
                      }),
                      s.jsx(o("ReactKonva").Rect, {
                        ref: D,
                        fill: "red",
                        x: P,
                        y: N,
                        width: M.current.getWidth(),
                        height: M.current.getHeight(),
                        scaleX: w,
                        scaleY: A,
                        draggable: !0,
                        dragBoundFunc: te,
                        onTransformEnd: Z,
                        onDragEnd: Z,
                        globalCompositeOperation: "destination-out",
                      }),
                      s.jsx(
                        o("ReactKonva").Transformer,
                        {
                          ref: k,
                          anchorStroke: "black",
                          anchorFill: "white",
                          anchorSize: f,
                          anchorCornerRadius: f / 2,
                          borderEnabled: !1,
                          centeredScaling: !1,
                          resizeEnabled: !0,
                          rotateEnabled: !1,
                          ignoreStroke: !0,
                          boundBoxFunc: ee,
                          keepRatio: l,
                          enabledAnchors: ne,
                        },
                        "transformer",
                      ),
                    ],
                  }),
                },
                "cropper",
              ),
            }),
          ],
        })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t, n) {
      var r = n % 180 === 0 ? e : t,
        o = n % 180 === 0 ? t : e;
      return { width: r, height: o };
    }
    function C(e, t, n, o, a) {
      switch (((a % 360) + 360) % 360) {
        case 0:
          return { x: e, y: t };
        case 90:
          return { x: e - n, y: t };
        case 180:
          return { y: t - o, x: e - n };
        case 270:
          return { x: e, y: t - o };
        default:
          throw r("err")("Unsupported angle");
      }
    }
    function b(e, t, n, o, a) {
      switch (((a % 360) + 360) % 360) {
        case 0:
          return { x: e, y: t };
        case 90:
          return { x: e + n, y: t };
        case 180:
          return { y: t + o, x: e + n };
        case 270:
          return { x: e, y: t + o };
        default:
          throw r("err")("Unsupported angle");
      }
    }
    function v(e, t, n, o, a) {
      var i = Math.max(t, n),
        l = y(t, n, o),
        s = (i - l.width) / 2,
        u = (i - l.height) / 2,
        c = new (r("WAWebMediaEditorGeometryPoint"))({
          x: e.x + s,
          y: e.y + u,
        }),
        d = new (r("WAWebMediaEditorGeometryPoint"))({ x: i / 2, y: i / 2 }),
        m = c.rotate(d, a),
        p = y(t, n, o + a),
        _ = (i - p.width) / 2,
        f = (i - p.height) / 2;
      return {
        x: m.getX() - _,
        y: m.getY() - f,
        width: e.width,
        height: e.height,
        rotation: e.rotation,
      };
    }
    l.default = h;
  },
  98,
);
