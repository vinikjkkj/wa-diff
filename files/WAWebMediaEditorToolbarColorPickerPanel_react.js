__d(
  "WAWebMediaEditorToolbarColorPickerPanel.react",
  [
    "WAWebMediaEditorToolbarColor.react",
    "WAWebMediaEditorToolbarColorPickerConsts",
    "WAWebMediaEditorUtilsColor",
    "WAWebMediaEditorUtilsGetCursorPositionFromColor",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        canvas: {
          borderStartStartRadius: "x13t61ll",
          borderStartEndRadius: "x1kchd1x",
          boxSizing: "x9f619",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          position: "x1n2onr6",
          $$css: !0,
        },
        integratedCanvas: {
          width: "x1yinuae",
          borderStartStartRadius: "x1hmjwmn",
          borderStartEndRadius: "x41ahdt",
          borderEndEndRadius: "xr1pq3a",
          borderEndStartRadius: "x4k4xos",
          $$css: !0,
        },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(33),
        a = t.color,
        i = t.onChangeCanvasColor,
        l = t.onChangeSelectedColor,
        s = t.theme,
        c = m(null),
        f = p(!1),
        g = f[0],
        h = f[1],
        y,
        C;
      (n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            var e = c.current;
            if (e) {
              var t = e.getContext("2d"),
                n = t.createLinearGradient(0, 0, e.width, 0);
              (n.addColorStop(0, "#ff0000"),
                n.addColorStop(0.16666666666666666, "#ffff00"),
                n.addColorStop(0.3333333333333333, "#00ff00"),
                n.addColorStop(0.5, "#00ffff"),
                n.addColorStop(0.6666666666666666, "#0000ff"),
                n.addColorStop(0.8333333333333333, "#ff00ff"),
                n.addColorStop(1, "#ff0000"),
                (t.fillStyle = n),
                t.fillRect(0, 0, e.width, e.height),
                (n = t.createLinearGradient(0, 0, 0, e.height)),
                n.addColorStop(0, "rgba(255, 255, 255, 1)"),
                n.addColorStop(0.5, "rgba(255, 255, 255, 0)"),
                n.addColorStop(1, "rgba(255, 255, 255, 0)"),
                (t.fillStyle = n),
                t.fillRect(0, 0, e.width, e.height),
                (n = t.createLinearGradient(0, 0, 0, e.height)),
                n.addColorStop(0, "rgba(0, 0, 0, 0)"),
                n.addColorStop(0.5, "rgba(0, 0, 0, 0)"),
                n.addColorStop(1, "rgba(0, 0, 0, 1)"),
                (t.fillStyle = n),
                t.fillRect(0, 0, e.width, e.height));
            }
          }),
          (C = []),
          (n[0] = y),
          (n[1] = C))
        : ((y = n[0]), (C = n[1])),
        d(y, C));
      var b;
      n[2] !== a
        ? ((b = o(
            "WAWebMediaEditorUtilsGetCursorPositionFromColor",
          ).getPositionFromColor(a)),
          (n[2] = a),
          (n[3] = b))
        : (b = n[3]);
      var v = b,
        S;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function (t) {
            var e = c.current;
            if (!e) return { x: 0, y: 0 };
            var n = e.getBoundingClientRect(),
              r = t.clientX - n.left,
              a = t.clientY - n.top;
            return (
              r > n.width && (r = n.width - 0.1),
              r < 0 && (r = 0),
              a > n.height && (a = n.height),
              a < 0 && (a = 0.1),
              (r =
                r -
                o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2),
              (a =
                a -
                o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2),
              { x: r, y: a }
            );
          }),
          (n[4] = S))
        : (S = n[4]);
      var R = S,
        L;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function (t) {
            var e = c.current;
            if (!e) return new (o("WAWebMediaEditorUtilsColor").Color)(0, 0, 0);
            var n =
                t.x +
                o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2,
              r =
                t.y +
                o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2,
              a = e.getContext("2d"),
              i = a.getImageData(n, r, 1, 1),
              l = i.data;
            return new (o("WAWebMediaEditorUtilsColor").Color)(
              l[0],
              l[1],
              l[2],
            );
          }),
          (n[5] = L))
        : (L = n[5]);
      var E = L,
        k = r("useWAWebThrottledCallback")(
          l,
          o("WAWebMediaEditorToolbarColorPickerConsts").THROTTLE_WAIT_TIME,
        ),
        I;
      n[6] !== i || n[7] !== k
        ? ((I = function (t, n) {
            n != null && h(n);
            var e = R(t),
              r = e.x,
              o = e.y,
              a = E({ x: r, y: o });
            (k(a), i(a));
          }),
          (n[6] = i),
          (n[7] = k),
          (n[8] = I))
        : (I = n[8]);
      var T = I,
        D;
      n[9] !== T
        ? ((D = function (t) {
            T(t, !0);
          }),
          (n[9] = T),
          (n[10] = D))
        : (D = n[10]);
      var x = D,
        $;
      n[11] !== g || n[12] !== T
        ? (($ = function (t) {
            g && (t.stopPropagation(), t.preventDefault(), T(t));
          }),
          (n[11] = g),
          (n[12] = T),
          (n[13] = $))
        : ($ = n[13]);
      var P = $,
        N;
      n[14] !== T
        ? ((N = function (t) {
            T(t, !1);
          }),
          (n[14] = T),
          (n[15] = N))
        : (N = n[15]);
      var M = N,
        w;
      n[16] !== s
        ? ((w = (e || (e = r("stylex"))).props([
            _.canvas,
            s === o("WAWebMediaEditorToolbarColor.react").Theme.Integrated
              ? _.integratedCanvas
              : null,
            o("WAWebUISpacing").uiPadding.top7,
          ])),
          (n[16] = s),
          (n[17] = w))
        : (w = n[17]);
      var A;
      n[18] !== x || n[19] !== P || n[20] !== M || n[21] !== w
        ? ((A = u.jsx(
            "canvas",
            babelHelpers.extends(
              {
                width: o("WAWebMediaEditorToolbarColorPickerConsts")
                  .CONTAINER_WIDTH,
                height: o("WAWebMediaEditorToolbarColorPickerConsts")
                  .CANVAS_HEIGHT,
              },
              w,
              { ref: c, onMouseDown: x, onMouseMove: P, onMouseUp: M },
            ),
          )),
          (n[18] = x),
          (n[19] = P),
          (n[20] = M),
          (n[21] = w),
          (n[22] = A))
        : (A = n[22]);
      var F;
      n[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((F =
            "x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x192kdpm x2e1hkk x4o825q x1h4eksf x1xstdij x1hpb3w5 xyd612o x1pvccs7 x1l8gmyy x9f619 xt0e3qv x47corl x10l6tqk"),
          (n[23] = F))
        : (F = n[23]);
      var O = v.x,
        B = v.y,
        W;
      n[24] !== a
        ? ((W = a.toRgbaString()), (n[24] = a), (n[25] = W))
        : (W = n[25]);
      var q;
      n[26] !== v.x || n[27] !== v.y || n[28] !== W
        ? ((q = u.jsx("div", {
            className: F,
            style: {
              width: o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE,
              height: o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE,
              left: O,
              top: B,
              backgroundColor: W,
            },
          })),
          (n[26] = v.x),
          (n[27] = v.y),
          (n[28] = W),
          (n[29] = q))
        : (q = n[29]);
      var U;
      return (
        n[30] !== A || n[31] !== q
          ? ((U = u.jsxs(u.Fragment, { children: [A, q] })),
            (n[30] = A),
            (n[31] = q),
            (n[32] = U))
          : (U = n[32]),
        U
      );
    }
    l.default = f;
  },
  98,
);
