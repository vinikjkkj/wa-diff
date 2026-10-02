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
      return e === "top-left"
        ? "left top"
        : e === "top-right"
          ? "right top"
          : e === "bottom-left"
            ? "left bottom"
            : e === "bottom-right"
              ? "right bottom"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function u(e, t) {
      return {
        scaleX: t.width > 0 ? e.width / t.width : 1,
        scaleY: t.height > 0 ? e.height / t.height : 1,
      };
    }
    function c(e) {
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
    function d(e) {
      var t = e.containerHeight,
        n = e.containerWidth,
        r = e.corner,
        o = e.insets,
        a = e.previewHeight,
        i = e.previewWidth,
        l = n - i - o.right,
        s = t - a - o.bottom,
        u = Math.max(0, Math.min(o.top, t - a));
      return r === "top-left"
        ? { x: o.left, y: u }
        : r === "top-right"
          ? { x: l, y: u }
          : r === "bottom-left"
            ? { x: o.left, y: s }
            : r === "bottom-right"
              ? { x: l, y: s }
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      r,
                  );
                })();
    }
    ((l.getSelfPreviewInsets = e),
      (l.getTransformOriginForCorner = s),
      (l.getSelfPreviewSizeFlipInversion = u),
      (l.getCornerFromPosition = c),
      (l.getPositionFromCorner = d));
  },
  98,
);
