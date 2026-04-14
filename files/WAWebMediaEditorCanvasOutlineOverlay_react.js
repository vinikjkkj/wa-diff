__d(
  "WAWebMediaEditorCanvasOutlineOverlay.react",
  [
    "ReactKonva",
    "WAWebMediaConstants",
    "WAWebMediaEditorUtilsColor",
    "cr:10204",
    "lodash",
    "react",
    "useWAWebMediaEditorCanvasDraw",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useImperativeHandle,
      m = u.useRef,
      p = 12,
      _ = 3,
      f = "#FA6533",
      g = 12,
      h = 6,
      y = "dot-first",
      C = "dot-last";
    function b(e) {
      var t,
        n = e.data,
        a = e.height,
        i = e.onCursorChange,
        l = e.onDone,
        u = e.onDrawEnd,
        b = e.ref,
        S = e.scale,
        R = e.smoothing,
        L = e.width,
        E = m(),
        k = m(!1),
        I = m("crosshair");
      (c(function () {
        i("crosshair");
      }, []),
        d(b, function () {
          return {
            show: function () {
              var e;
              (e = E.current) == null || e.show();
            },
            hide: function () {
              var e;
              (e = E.current) == null || e.hide();
            },
          };
        }));
      var T = function () {
          k.current = !0;
        },
        D = function (t) {
          ((k.current = !1), u(t));
        },
        x = function (t) {
          var e = t.target.name() === y,
            n = k.current,
            r = e && !n ? "pointer" : "crosshair";
          r !== I.current && ((I.current = r), i(r));
        },
        $ = r("useWAWebMediaEditorCanvasDraw")({
          onDrawStart: T,
          onDrawEnd: D,
          onDone: l,
          onMouseMove: x,
          data: n,
          stage: (t = E.current) == null ? void 0 : t.getStage(),
          minPointDistance: p / S.x,
          clickThreshold: 200,
          boundToStage: !0,
          doneTargets: { mousedown: [y, C], mouseup: [y] },
          pathStyle: {
            color: o("WAWebMediaEditorUtilsColor").Color.White,
            thickness: 0,
            smoothing: R,
          },
        }),
        P = $.cursorPosition,
        N = $.handlers,
        M = $.points,
        w = n
          .getOutlineLayer()
          .getAllPoints()
          .map(function (e) {
            return n.toScreenPoint(e);
          });
      !R && w.length && w.push(w[w.length - 1]);
      var A = !!M.length;
      (A && w.push(M[0]), w.push.apply(w, M));
      var F = [].concat(w);
      (!R && F.length && F.push(F[F.length - 1]), P && F.push(P));
      var O = r("lodash").flatMap(F, function (e) {
          return [e.getX(), e.getY()];
        }),
        B = _ / S.x,
        W = [g / S.x, h / S.x];
      return s.jsxs(
        o("ReactKonva").Layer,
        babelHelpers.extends({ ref: E }, N, {
          width: L,
          height: a,
          children: [
            s.jsx(o("ReactKonva").Rect, {
              x: 0,
              y: 0,
              width: L,
              height: a,
              fill: "rgba(0,0,0,0)",
            }),
            s.jsx(o("ReactKonva").Line, {
              points: O,
              lineCap: "round",
              lineJoin: "round",
              stroke: f,
              strokeWidth: B,
              dash: W,
              tension: o("WAWebMediaConstants").MEDIA_EDITOR_OUTLINE_TENSION,
            }),
            s.jsx(v, { points: w, scale: S }),
          ],
        }),
        "paintCursor",
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.points,
        n = e.scale;
      if (!t.length) return null;
      var r = t[0],
        a = t[t.length - 1],
        i = _ / n.x,
        l;
      return s.jsxs(s.Fragment, {
        children: [
          l,
          s.jsx(o("ReactKonva").Circle, {
            name: C,
            x: a.getX(),
            y: a.getY(),
            radius: i,
          }),
          s.jsx(o("ReactKonva").Circle, {
            x: r.getX(),
            y: r.getY(),
            radius: i,
            stroke: "white",
          }),
          s.jsx(o("ReactKonva").Circle, {
            name: y,
            x: r.getX(),
            y: r.getY(),
            radius: i * 4,
          }),
        ],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = b));
  },
  98,
);
