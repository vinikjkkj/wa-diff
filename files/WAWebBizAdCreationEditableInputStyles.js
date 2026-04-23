__d(
  "WAWebBizAdCreationEditableInputStyles",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 24,
      l = 8;
    function s(t, n) {
      if (n == null) return e;
      var r = document.createElement("canvas"),
        o = r.getContext("2d");
      if (o == null) return e;
      var a = window.getComputedStyle(n),
        i = a.fontWeight,
        l = a.fontSize,
        s = a.fontFamily,
        u = i + " " + l + " " + s;
      o.font = u;
      var c = o.measureText(t);
      return Math.ceil(c.width);
    }
    ((i.MIN_INPUT_WIDTH = e),
      (i.INPUT_PADDING = l),
      (i.getTextWidthFromElement = s));
  },
  66,
);
