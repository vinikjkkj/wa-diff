__d(
  "ContextualLayerDimensions",
  ["LayerBounds", "Locale", "Rect", "Vector"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("LayerBounds").getViewportRectForContext(e.getContext());
    }
    function s(e, t) {
      var n = e.getContextBounds("viewport"),
        a = e.simulateOrientation(t, function () {
          return r("Vector").getElementDimensions(e.getContentRoot());
        }),
        i = n.t + t.getOffsetY();
      t.getPosition() === "above"
        ? (i -= a.y)
        : t.getPosition() === "below" && (i += n.b - n.t);
      var l = n.l + t.getOffsetX(),
        s = n.r - n.l;
      if (t.isVertical()) {
        var u = t.getAlignment();
        u === "center"
          ? (l += (s - a.x) / 2)
          : (u === "right") !== o("Locale").isRTL()
            ? (l += s - a.x + t.getArrowOffset())
            : (l -= t.getArrowOffset());
      } else
        (t.getPosition() === "right") !== o("Locale").isRTL()
          ? (l += s)
          : (l -= a.x);
      return new (r("Rect"))(i, l + a.x, i + a.y, l, "viewport");
    }
    ((l.getViewportRect = e), (l.getLayerRect = s));
  },
  98,
);
