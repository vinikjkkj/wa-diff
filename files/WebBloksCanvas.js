__d(
  "WebBloksCanvas",
  [
    "WebBloksCanvasDrawToContext",
    "WebBloksCanvasMinificationKeys",
    "WebBloksConstants",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef;
    function m(e) {
      var t = e.externalStyle,
        n = e.node,
        a = o("WebBloksStyle").useStyle(n, t),
        i = a.style,
        l = a.wrapper,
        u = a.wrapperProps,
        m = o("WebBloksTheme").useTheme().getTheme(),
        _ = d(null);
      return (
        c(
          function () {
            var e = _.current,
              t = e == null ? void 0 : e.getContext("2d");
            if (!(e == null || t == null)) {
              var r = o("WebBloksUtils").toPx(
                  n.get(o("WebBloksCanvasMinificationKeys").CANVAS_WIDTH),
                ),
                a = o("WebBloksUtils").toPx(
                  n.get(o("WebBloksCanvasMinificationKeys").CANVAS_HEIGHT),
                );
              if (!(r == null || a == null)) {
                ((e.style.width = r), (e.style.height = a));
                var i = window.devicePixelRatio;
                ((e.width = p(r, t.canvas.clientWidth, i)),
                  (e.height = p(a, t.canvas.clientHeight, i)),
                  t.scale(i, i));
              }
            }
          },
          [n],
        ),
        c(
          function () {
            var e,
              t = (e = _.current) == null ? void 0 : e.getContext("2d");
            if (t != null) {
              var a = n.getSubNodes(
                o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY,
              );
              if (a != null)
                for (var i of a)
                  (t.save(),
                    r("WebBloksCanvasDrawToContext")(i, t, m),
                    t.restore());
            }
          },
          [n, m],
        ),
        l(
          s.jsx(
            "canvas",
            babelHelpers.extends({}, u, {
              ref: _,
              style: babelHelpers.extends({}, i),
            }),
          ),
        )
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t, n) {
      return (
        n === void 0 && (n = 1),
        t != null && e.includes("%")
          ? (parseFloat(e) / 100) * t * n
          : parseFloat(e) * n
      );
    }
    l.default = m;
  },
  98,
);
