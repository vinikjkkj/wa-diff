__d(
  "WAWebMoveResizeDragArea.react",
  [
    "WAWebMoveResizeComponentUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        defaultCursor: { cursor: "xt0e3qv", $$css: !0 },
        grabCursor: { cursor: "x1jm3nie", $$css: !0 },
        grabbingCursor: { cursor: "xi9pz9s", $$css: !0 },
        moveable: {
          width: "xh8yej3",
          height: "x5yr21d",
          cursor: "xv5twrn",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(10),
        a = t.children,
        i = t.currentAction,
        l = t.disabled,
        s = t.dragCursor,
        d = t.onMouseDown,
        m = t.onMouseUp,
        p = t.xstyle;
      if (l === !0) return a;
      var _;
      n[0] !== i || n[1] !== s || n[2] !== p
        ? ((_ = (e || (e = r("stylex"))).props([
            c.moveable,
            i === o("WAWebMoveResizeComponentUtils").UserActions.RESIZE
              ? c.defaultCursor
              : i === o("WAWebMoveResizeComponentUtils").UserActions.MOVE
                ? s === "grab"
                  ? c.grabbingCursor
                  : null
                : i === o("WAWebMoveResizeComponentUtils").UserActions.IDLE
                  ? s === "grab"
                    ? c.grabCursor
                    : null
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          i,
                      );
                    })(),
            p,
          ])),
          (n[0] = i),
          (n[1] = s),
          (n[2] = p),
          (n[3] = _))
        : (_ = n[3]);
      var f =
          i === o("WAWebMoveResizeComponentUtils").UserActions.MOVE
            ? "true"
            : "supported",
        g;
      return (
        n[4] !== a || n[5] !== d || n[6] !== m || n[7] !== _ || n[8] !== f
          ? ((g = u.jsx(
              "div",
              babelHelpers.extends({}, _, {
                onMouseDown: d,
                onMouseUp: m,
                grab: f,
                children: a,
              }),
            )),
            (n[4] = a),
            (n[5] = d),
            (n[6] = m),
            (n[7] = _),
            (n[8] = f),
            (n[9] = g))
          : (g = n[9]),
        g
      );
    }
    l.default = d;
  },
  98,
);
