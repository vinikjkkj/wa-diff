__d(
  "WAWebMoveResizeResizers.react",
  ["WAWebMoveResizeComponentUtils", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = "-6px",
      d = "12px",
      m = {
        resizer: { position: "x10l6tqk", zIndex: "x1bkdxzg", $$css: !0 },
        topResizer: {
          top: "xtu2xtp",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          width: "xh8yej3",
          height: "x1kpxq89",
          cursor: "x1e5i8e3",
          $$css: !0,
        },
        bottomResizer: {
          bottom: "xsugpx9",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          width: "xh8yej3",
          height: "x1kpxq89",
          cursor: "x1e5i8e3",
          $$css: !0,
        },
        leftResizer: {
          top: "x13vifvy",
          insetInlineStart: "x1w1ezjj",
          left: null,
          right: null,
          width: "xsmyaan",
          height: "x5yr21d",
          cursor: "x7eptgl",
          $$css: !0,
        },
        rightResizer: {
          top: "x13vifvy",
          insetInlineEnd: "x1euzuty",
          left: null,
          right: null,
          width: "xsmyaan",
          height: "x5yr21d",
          cursor: "x7eptgl",
          $$css: !0,
        },
        topRightResizer: {
          top: "xtu2xtp",
          insetInlineEnd: "x1euzuty",
          left: null,
          right: null,
          width: "xsmyaan",
          height: "x1kpxq89",
          cursor: "x1yl03ai",
          $$css: !0,
        },
        topLeftResizer: {
          top: "xtu2xtp",
          insetInlineStart: "x1w1ezjj",
          left: null,
          right: null,
          width: "xsmyaan",
          height: "x1kpxq89",
          cursor: "x16djdpl",
          $$css: !0,
        },
        bottomRightResizer: {
          insetInlineEnd: "x1euzuty",
          left: null,
          right: null,
          bottom: "xsugpx9",
          width: "xsmyaan",
          height: "x1kpxq89",
          cursor: "x16djdpl",
          $$css: !0,
        },
        bottomLeftResizer: {
          bottom: "xsugpx9",
          insetInlineStart: "x1w1ezjj",
          left: null,
          right: null,
          width: "xsmyaan",
          height: "x1kpxq89",
          cursor: "x1yl03ai",
          $$css: !0,
        },
        defaultCursor: { cursor: "xt0e3qv", $$css: !0 },
      };
    function p(e) {
      return e === o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT
        ? m.leftResizer
        : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM
          ? m.bottomResizer
          : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT
            ? m.rightResizer
            : e === o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP
              ? m.topResizer
              : e ===
                  o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT
                ? m.topLeftResizer
                : e ===
                    o("WAWebMoveResizeComponentUtils").ResizeDirections
                      .TOP_RIGHT
                  ? m.topRightResizer
                  : e ===
                      o("WAWebMoveResizeComponentUtils").ResizeDirections
                        .BOTTOM_LEFT
                    ? m.bottomLeftResizer
                    : e ===
                        o("WAWebMoveResizeComponentUtils").ResizeDirections
                          .BOTTOM_RIGHT
                      ? m.bottomRightResizer
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
    }
    function _(t) {
      var n = t.currentAction,
        a = t.directions,
        i =
          a === void 0
            ? Array.from(
                o("WAWebMoveResizeComponentUtils").ResizeDirections.members(),
              )
            : a,
        l = t.getResizeCallback;
      return i.map(function (t) {
        return u.jsx(
          "div",
          babelHelpers.extends(
            { "data-testid": void 0 },
            (e || (e = r("stylex"))).props([
              p(t),
              m.resizer,
              n === o("WAWebMoveResizeComponentUtils").UserActions.RESIZE &&
                m.defaultCursor,
            ]),
            { onMouseDown: l(t) },
          ),
          t,
        );
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
