__d(
  "WAWebVoipSelfPreviewPositionUtils",
  ["WAWebVoIPSelfPreviewConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        ? o("WAWebVoIPSelfPreviewConsts").SELF_PREVIEW_POPOUT_INSETS
        : o("WAWebVoIPSelfPreviewConsts").SELF_PREVIEW_INLINE_INSETS;
    }
    function s(e) {
      var t = e.containerHeight,
        n = e.containerWidth,
        r = e.previewHeight,
        o = e.previewWidth,
        a = e.x,
        i = e.y,
        l = n / 2,
        s = t / 2,
        u = a + o / 2 < l,
        c = i + r / 2 < s;
      return c && u
        ? "top-left"
        : c && !u
          ? "top-right"
          : !c && u
            ? "bottom-left"
            : "bottom-right";
    }
    function u(e, t, n, r, o, a) {
      var i = t - r - a.right,
        l = n - o - a.bottom;
      return e === "top-left"
        ? { x: a.left, y: a.top }
        : e === "top-right"
          ? { x: i, y: a.top }
          : e === "bottom-left"
            ? { x: a.left, y: l }
            : e === "bottom-right"
              ? { x: i, y: l }
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    ((l.getSelfPreviewInsets = e),
      (l.getCornerFromPosition = s),
      (l.getPositionFromCorner = u));
  },
  98,
);
