__d(
  "WAWebMediaEditorToolbarColorPickerPanel.react",
  [
    "WAWebMediaEditorToolbarColor.react",
    "WAWebMediaEditorToolbarColorPickerConsts",
    "WAWebMediaEditorUtilsColor",
    "WAWebMediaEditorUtilsGetCursorPositionFromColor",
    "WAWebUISpacing",
    "react",
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
      var n = t.color,
        a = t.onChangeCanvasColor,
        i = t.onChangeSelectedColor,
        l = t.theme,
        s = m(null),
        c = p(!1),
        f = c[0],
        g = c[1];
      d(function () {
        var e = s.current;
        if (e) {
          var t = e.getContext("2d"),
            n = t.createLinearGradient(0, 0, e.width, 0);
          (n.addColorStop(0, "#ff0000"),
            n.addColorStop(1 / 6, "#ffff00"),
            n.addColorStop((1 / 6) * 2, "#00ff00"),
            n.addColorStop((1 / 6) * 3, "#00ffff"),
            n.addColorStop((1 / 6) * 4, "#0000ff"),
            n.addColorStop((1 / 6) * 5, "#ff00ff"),
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
      }, []);
      var h = o(
          "WAWebMediaEditorUtilsGetCursorPositionFromColor",
        ).getPositionFromColor(n),
        y = function (t) {
          var e = s.current;
          if (!e) return { x: 0, y: 0 };
          var n = e.getBoundingClientRect(),
            r = t.clientX - n.left,
            a = t.clientY - n.top;
          return (
            r > n.width && (r = n.width - 0.1),
            r < 0 && (r = 0),
            a > n.height && (a = n.height),
            a < 0 && (a = 0.1),
            (r -=
              o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2),
            (a -=
              o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE / 2),
            { x: r, y: a }
          );
        },
        C = function (t) {
          var e = s.current;
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
          return new (o("WAWebMediaEditorUtilsColor").Color)(l[0], l[1], l[2]);
        },
        b = r("useWAWebThrottledCallback")(
          i,
          o("WAWebMediaEditorToolbarColorPickerConsts").THROTTLE_WAIT_TIME,
        ),
        v = function (t, n) {
          n != null && g(n);
          var e = y(t),
            r = e.x,
            o = e.y,
            i = C({ x: r, y: o });
          (b(i), a(i));
        },
        S = function (t) {
          v(t, !0);
        },
        R = function (t) {
          f && (t.stopPropagation(), t.preventDefault(), v(t));
        },
        L = function (t) {
          v(t, !1);
        };
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(
            "canvas",
            babelHelpers.extends(
              {
                width: o("WAWebMediaEditorToolbarColorPickerConsts")
                  .CONTAINER_WIDTH,
                height: o("WAWebMediaEditorToolbarColorPickerConsts")
                  .CANVAS_HEIGHT,
              },
              (e || (e = r("stylex"))).props([
                _.canvas,
                l === o("WAWebMediaEditorToolbarColor.react").Theme.Integrated
                  ? _.integratedCanvas
                  : null,
                o("WAWebUISpacing").uiPadding.top7,
              ]),
              { ref: s, onMouseDown: S, onMouseMove: R, onMouseUp: L },
            ),
          ),
          u.jsx("div", {
            className:
              "x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x192kdpm x2e1hkk x4o825q x1h4eksf x1xstdij x1hpb3w5 xyd612o x1pvccs7 x1l8gmyy x9f619 xt0e3qv x47corl x10l6tqk",
            style: {
              width: o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE,
              height: o("WAWebMediaEditorToolbarColorPickerConsts").CURSOR_SIZE,
              left: h.x,
              top: h.y,
              backgroundColor: n.toRgbaString(),
            },
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
