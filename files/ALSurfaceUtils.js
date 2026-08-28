__d(
  "ALSurfaceUtils",
  ["AutoLoggingConsts", "hyperionAutoLogging"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      for (var n = [], r = t; r && r.nodeType === Node.ELEMENT_NODE; ) {
        var a = (
          e || (e = o("hyperionAutoLogging"))
        ).ALSurfaceUtils.getElementSurface(r);
        if (
          a != null &&
          (n.push(a),
          a != null && a.includes(o("AutoLoggingConsts").SURFACE_SEPARATOR))
        )
          break;
        r = e.ALSurfaceUtils.getAncestralSurfaceNode(r.parentElement);
      }
      var i = n.reverse().join("/");
      return i.includes(o("AutoLoggingConsts").SURFACE_SEPARATOR) || !i
        ? i
        : o("AutoLoggingConsts").SURFACE_SEPARATOR + i;
    }
    l.getProductSurface = s;
  },
  98,
);
