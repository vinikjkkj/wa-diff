__d(
  "AdsALStats",
  ["ALSurfaceUtils", "AdsALStyler", "hyperionAutoLogging"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "401";
    function u() {
      var e,
        t,
        n = document.getElementById("overlayWrapper"),
        r = document.getElementById("overlayWrapper2");
      if (n != null && r != null) return [n, r];
      var o = document.createElement("div");
      ((o.id = "overlayWrapper"),
        (o.style.position = "fixed"),
        (o.style.top = "0"),
        (o.style.left = "0"),
        (o.style.width = "100%"),
        (o.style.height = "100%"),
        (o.style.pointerEvents = "none"),
        (o.style.zIndex = "9000"),
        (o.style.filter = "none"));
      var a = document.createElement("div");
      return (
        (a.id = "overlayWrapper2"),
        (a.style.position = "fixed"),
        (a.style.top = "0"),
        (a.style.left = "0"),
        (a.style.width = "100%"),
        (a.style.height = "100%"),
        (a.style.pointerEvents = "none"),
        (a.style.zIndex = "9001"),
        (a.style.filter = "none"),
        (e = document.body) == null || e.appendChild(o),
        (t = document.body) == null || t.appendChild(a),
        [o, a]
      );
    }
    function c() {
      var t = window.document.documentElement,
        n = [],
        r = [];
      for (n.push(t); n.length > 0; ) {
        var a, i;
        ((t = n[0]),
          n.shift(),
          r.push({
            element: t,
            surface:
              (a = o("ALSurfaceUtils").getProductSurface(t)) != null ? a : "",
            component:
              (i = (
                e || (e = o("hyperionAutoLogging"))
              ).ALElementInfo.getOrCreate(t).getReactComponentName()) != null
                ? i
                : "START",
          }));
        var l = t.childNodes;
        l.forEach(function (e) {
          e instanceof HTMLElement && n.push(e);
        });
      }
      return r;
    }
    function d(e, t, n, r, a) {
      return (
        n === void 0 && (n = !1),
        r === void 0 && (r = !1),
        a === void 0 && (a = s),
        o("AdsALStyler").createElementOverlay(e, t, n, r, a)
      );
    }
    function m(e, t, n) {
      var r = o("AdsALStyler").createElementOverlay(e, t, !1, !1, s),
        a = document.createElement("button");
      return (
        (a.textContent = "+"),
        (a.style.position = "absolute"),
        (a.style.height = "25px"),
        (a.style.width = "25px"),
        (a.style.top = "0px"),
        (a.style.right = "0px"),
        (a.style.pointerEvents = "auto"),
        (a.id = "al-plus-button"),
        (a.onclick = function (e) {
          (e.stopPropagation(), n(e));
        }),
        r.appendChild(a),
        r
      );
    }
    function p() {
      return document.body;
    }
    ((l.setupOverlay = u),
      (l.traverseElements = c),
      (l.overlayColorOnElement = d),
      (l.overlaySelectorOnElement = m),
      (l.getDocumentBody = p));
  },
  98,
);
