__d(
  "WAWebMoveResizeDragArea.react",
  ["WAWebMoveResizeComponentUtils", "react", "stylex"],
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
      var n = t.children,
        a = t.currentAction,
        i = t.disabled,
        l = t.dragCursor,
        s = t.onMouseDown,
        d = t.onMouseUp,
        m = t.xstyle;
      return i === !0
        ? n
        : u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props([
                c.moveable,
                a === o("WAWebMoveResizeComponentUtils").UserActions.RESIZE
                  ? c.defaultCursor
                  : a === o("WAWebMoveResizeComponentUtils").UserActions.MOVE
                    ? l === "grab"
                      ? c.grabbingCursor
                      : null
                    : a === o("WAWebMoveResizeComponentUtils").UserActions.IDLE
                      ? l === "grab"
                        ? c.grabCursor
                        : null
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              a,
                          );
                        })(),
                m,
              ]),
              {
                onMouseDown: s,
                onMouseUp: d,
                grab:
                  a === o("WAWebMoveResizeComponentUtils").UserActions.MOVE
                    ? "true"
                    : "supported",
                children: n,
              },
            ),
          );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
