__d(
  "LayerBounds",
  [
    "Locale",
    "Rect",
    "ViewportBounds",
    "containsNode",
    "ge",
    "getOverlayZIndex",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("ge")("globalContainer"),
        n = (t && r("containsNode")(t, e)) || r("getOverlayZIndex")(e) < 300,
        a = r("Rect").getViewportWithoutScrollbarsBounds();
      return (
        n &&
          ((a.t += r("ViewportBounds").getTop()),
          (a.b -= r("ViewportBounds").getBottom()),
          o("Locale").isRTL()
            ? ((a.r -= r("ViewportBounds").getLeft()),
              (a.l += r("ViewportBounds").getRight()))
            : ((a.r -= r("ViewportBounds").getRight()),
              (a.l += r("ViewportBounds").getLeft()))),
        a
      );
    }
    l.getViewportRectForContext = e;
  },
  98,
);
