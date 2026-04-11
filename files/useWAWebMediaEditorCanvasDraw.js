__d(
  "useWAWebMediaEditorCanvasDraw",
  [
    "WAWebMediaEditorUtilsKonva",
    "react",
    "useWAWebForceUpdate",
    "useWAWebIsMouseDownDrag",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState;
    function m(e) {
      "use no forget";
      var t = e.onDrawStart,
        n = e.onDrawEnd,
        a = e.onDone,
        i = e.onMouseMove,
        l = e.data,
        s = e.minPointDistance,
        m = s === void 0 ? 0 : s,
        p = e.clickThreshold,
        _ = p === void 0 ? 0 : p,
        f = e.boundToStage,
        g = f === void 0 ? !1 : f,
        h = e.pathStyle,
        y = e.stage,
        C = e.doneTargets,
        b = C === void 0 ? {} : C,
        v = d(),
        S = v[0],
        R = v[1],
        L = c([]),
        E = c(!1),
        k = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        I = r("useWAWebIsMouseDownDrag")(_),
        T = c(!1),
        D = function (n) {
          var e;
          if (
            (t == null || t(),
            (e = b.mousedown) != null && e.includes(n.target.name()))
          ) {
            a == null || a();
            return;
          }
          var r = o("WAWebMediaEditorUtilsKonva").getPointFromStage(
            n.evt,
            y,
            g,
          );
          (L.current.push(r), (E.current = !0), k());
        },
        x = function (t) {
          var e,
            n =
              ((e = b.mouseup) == null
                ? void 0
                : e.includes(t.target.name())) === !0,
            r = L.current.length === 1;
          n && !r && (T.current = !0);
        },
        $ = function () {
          if (((E.current = !1), L.current.length !== 0)) {
            var e = L.current.map(function (e) {
              return l.toCanvasPoint(e);
            });
            (n(babelHelpers.extends({ points: e }, h)), (L.current = []), k());
          }
        },
        P = function (t) {
          var e = o("WAWebMediaEditorUtilsKonva").getPointFromStage(t, y, g),
            n = g && E.current;
          R(
            n ? o("WAWebMediaEditorUtilsKonva").getPointFromStage(t, y, !0) : e,
          );
          var r = t instanceof MouseEvent;
          if (E.current) {
            var a = L.current,
              i = a[a.length - 1],
              l = (i == null ? void 0 : i.distance(e)) >= m,
              s = r ? l && I() : l,
              u =
                !i || s || o("WAWebMediaEditorUtilsKonva").isStageCorner(e, y);
            u && (a.push(e), r || k());
          }
        },
        N = function (t) {
          D(t);
        },
        M = function (t) {
          x(t);
        },
        w = function (t) {
          i == null || i(t);
        },
        A = function (t) {
          D(t);
        },
        F = function (t) {
          x(t);
        },
        O = function (t) {
          if (E.current) {
            var e = o("WAWebMediaEditorUtilsKonva").getPointFromStage(
                t.evt,
                y,
                g,
              ),
              n = L.current,
              r = n[n.length - 1];
            (!r ||
              r.distance(e) >= m ||
              o("WAWebMediaEditorUtilsKonva").isStageCorner(e, y)) &&
              (n.push(e), k());
          }
        };
      (o("useWAWebListener").useListener(window, "mouseup", $),
        o("useWAWebListener").useListener(window, "mousemove", P),
        o("useWAWebListener").useListener(window, "touchend", $),
        o("useWAWebListener").useListener(window, "touchmove", P),
        u(
          function () {
            T.current && (a == null || a(), (T.current = !1));
          },
          void 0,
        ));
      var B = {
        onMouseDown: N,
        onTouchStart: A,
        onMouseUp: M,
        onTouchEnd: F,
        onMouseMove: w,
        onTouchMove: O,
      };
      return { cursorPosition: S, points: L.current, handlers: B };
    }
    l.default = m;
  },
  98,
);
