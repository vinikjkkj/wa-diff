__d(
  "DOMDimensions",
  ["Style", "getDocumentScrollElement"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e ? e.offsetHeight : 0,
        n = e ? e.offsetWidth : 0;
      return { height: t, width: n };
    }
    function s(e) {
      var t = r("getDocumentScrollElement")(e),
        n = t.scrollWidth || 0,
        o = t.scrollHeight || 0;
      return { width: n, height: o };
    }
    function u(e, t, n, o, a) {
      var i;
      switch (t) {
        case "left":
        case "right":
        case "top":
        case "bottom":
          i = [t];
          break;
        case "width":
          i = ["left", "right"];
          break;
        case "height":
          i = ["top", "bottom"];
          break;
        default:
          throw Error("Invalid plane: " + t);
      }
      var l = function (n, o) {
        for (var t = 0, a = 0; a < i.length; a++)
          t += parseFloat(r("Style").get(e, n + "-" + i[a] + o)) || 0;
        return t;
      };
      return (
        (n ? l("padding", "") : 0) +
        (o ? l("border", "-width") : 0) +
        (a ? l("margin", "") : 0)
      );
    }
    ((l.getElementDimensions = e),
      (l.getDocumentDimensions = s),
      (l.measureElementBox = u));
  },
  98,
);
