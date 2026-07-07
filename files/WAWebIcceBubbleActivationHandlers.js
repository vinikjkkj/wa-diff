__d(
  "WAWebIcceBubbleActivationHandlers",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
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
    i.getIcceBubbleActivationHandlers = e;
  },
  66,
);
