__d(
  "WAWebIcceBubbleActivationHandlers",
  ["WAWebWamEnumSubSurface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        ? o("WAWebWamEnumSubSurface").SUB_SURFACE.MISSED_ICCE_BUBBLE
        : o("WAWebWamEnumSubSurface").SUB_SURFACE.ICCE_BUBBLE_OTHER_RESULT;
    }
    function s(e) {
      return {
        onClick: function (n) {
          var t = window.getSelection(),
            r = n.currentTarget;
          (t != null &&
            t.toString().length > 0 &&
            (r.contains(t.anchorNode) || r.contains(t.focusNode))) ||
            e();
        },
        onKeyDown: function (n) {
          (n.key === "Enter" || n.key === " ") &&
            (n.preventDefault(), n.stopPropagation(), e());
        },
      };
    }
    ((l.getIcceBubbleSubSurface = e), (l.getIcceBubbleActivationHandlers = s));
  },
  98,
);
