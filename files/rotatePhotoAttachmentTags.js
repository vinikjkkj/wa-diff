__d(
  "rotatePhotoAttachmentTags",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 100;
    function l(t) {
      if (t == null) return t;
      var n = t.x,
        r = t.y;
      return babelHelpers.extends({}, t, { x: r, y: e - n });
    }
    function s(t) {
      if (t == null) return t;
      var n = t.x,
        r = t.y;
      return babelHelpers.extends({}, t, { x: e - r, y: n });
    }
    function u(e, t) {
      switch (t) {
        case "LEFT":
          return e.map(l);
        case "RIGHT":
          return e.map(s);
        default:
          return e;
      }
    }
    i.default = u;
  },
  66,
);
