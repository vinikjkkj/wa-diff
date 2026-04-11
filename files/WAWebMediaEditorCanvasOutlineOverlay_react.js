__d(
  "WAWebMediaEditorCanvasOutlineOverlay.react",
  [
    "ReactKonva",
    "WAWebMediaConstants",
    "WAWebMediaEditorUtilsColor",
    "cr:10204",
    "lodash",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(34),
        n = e.points,
        r = e.scale;
      if (!n.length) return null;
      var a = n[0],
        i = n[n.length - 1],
        l = _ / r.x,
        u,
        c = u,
        d;
      t[5] !== i ? ((d = i.getX()), (t[5] = i), (t[6] = d)) : (d = t[6]);
      var m;
      t[7] !== i ? ((m = i.getY()), (t[7] = i), (t[8] = m)) : (m = t[8]);
      var p;
      t[9] !== l || t[10] !== d || t[11] !== m
        ? ((p = s.jsx(o("ReactKonva").Circle, {
            name: C,
            x: d,
            y: m,
            radius: l,
          })),
          (t[9] = l),
          (t[10] = d),
          (t[11] = m),
          (t[12] = p))
        : (p = t[12]);
      var f;
      t[13] !== a ? ((f = a.getX()), (t[13] = a), (t[14] = f)) : (f = t[14]);
      var g;
      t[15] !== a ? ((g = a.getY()), (t[15] = a), (t[16] = g)) : (g = t[16]);
      var h;
      t[17] !== l || t[18] !== f || t[19] !== g
        ? ((h = s.jsx(o("ReactKonva").Circle, {
            x: f,
            y: g,
            radius: l,
            stroke: "white",
          })),
          (t[17] = l),
          (t[18] = f),
          (t[19] = g),
          (t[20] = h))
        : (h = t[20]);
      var b;
      t[21] !== a ? ((b = a.getX()), (t[21] = a), (t[22] = b)) : (b = t[22]);
      var v;
      t[23] !== a ? ((v = a.getY()), (t[23] = a), (t[24] = v)) : (v = t[24]);
      var S = l * 4,
        R;
      t[25] !== S || t[26] !== b || t[27] !== v
        ? ((R = s.jsx(o("ReactKonva").Circle, {
            name: y,
            x: b,
            y: v,
            radius: S,
          })),
          (t[25] = S),
          (t[26] = b),
          (t[27] = v),
          (t[28] = R))
        : (R = t[28]);
      var L;
      return (
        t[29] !== u || t[30] !== R || t[31] !== p || t[32] !== h
          ? ((L = s.jsxs(s.Fragment, { children: [c, p, h, R] })),
            (t[29] = u),
            (t[30] = R),
            (t[31] = p),
            (t[32] = h),
            (t[33] = L))
          : (L = t[33]),
        L
      );
    }
    l.default = b;
  },
  98,
);
