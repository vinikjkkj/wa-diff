__d(
  "calcNextImpressionSnapshotRecord",
  [
    "Visibility",
    "calculateImpressionViewablePercentage",
    "getElementPosition",
    "getStyleProperty",
    "getViewportDimensions",
    "isImpressionTargetOccluded",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { bottom: 0, left: 0, right: 0, top: 0 };
    function s(e) {
      if (e == null || document.documentElement == null) return null;
      for (var t = e.parentElement; t != null; ) {
        if (t === document.documentElement || t.nodeType !== 1) return null;
        if (
          r("getStyleProperty")(t, "position") === "absolute" &&
          r("getStyleProperty")(t, "overflow") !== "visible"
        )
          return t;
        t = t.parentElement;
      }
      return null;
    }
    function u(t, n, o) {
      if ((o === void 0 && (o = {}), o.isCometHiddenSubtree === !0))
        return {
          impressedAt: n.impressedAt,
          invisibleReason: "PUSH_VIEW_HIDDEN",
          status: n.visible ? "EXIT" : null,
          target: t,
          visible: !1,
          visiblePercentage: 0,
        };
      var a = r("getElementPosition")(t),
        i = babelHelpers.extends({ x: 0, y: 0 }, r("getViewportDimensions")()),
        l = r("calculateImpressionViewablePercentage")(a, i, e),
        u = !1;
      if (l.visiblePercentage > 0) {
        var c = s(t);
        c != null &&
          l.intersectionRect != null &&
          ((u = !0),
          (l = r("calculateImpressionViewablePercentage")(
            l.intersectionRect,
            r("getElementPosition")(c),
            e,
          )));
      }
      var d = o,
        m = d.viewportMargin,
        p = m && !u ? r("calculateImpressionViewablePercentage")(a, i, m) : l,
        _ = p.boundingClientRect,
        f = p.intersectionRect,
        g = p.rootBounds,
        h = p.visiblePercentage,
        y = l,
        C = y.intersectionRect,
        b = y.visiblePercentage,
        v = null,
        S = !1;
      b <= 0
        ? (v = "NOT_IN_VIEWPORT")
        : C && r("isImpressionTargetOccluded")(t, C, m || e)
          ? (v =
              p.visiblePercentage === 0
                ? "OCCLUDED_BY_MARGIN"
                : o.isCometHiddenSubtree === !0
                  ? "PUSH_VIEW_HIDDEN"
                  : "OCCLUSION_DETECTED")
          : r("Visibility").isHidden()
            ? (v = "PAGE_VISIBILITY_HIDDEN")
            : a.height === 0 || a.width === 0
              ? (v = "TARGET_SIZE_0")
              : r("getStyleProperty")(t, "opacity") === "0"
                ? (v = "TARGET_TRANSPARENT")
                : r("getStyleProperty")(t, "visibility") === "hidden"
                  ? (v = "TARGET_HIDDEN")
                  : (S = !0);
      var R = S === !1 ? 0 : p.visiblePercentage,
        L = n.visible,
        E = n.impressedAt,
        k = null;
      return (
        L && !S
          ? (k = "EXIT")
          : !L && S
            ? ((k = "ENTER"), (E = Date.now()))
            : n.visiblePercentage !== R && (k = "UPDATE"),
        {
          boundingClientRect: _,
          impressedAt: E,
          intersectionRect: f,
          invisibleReason: v,
          rootBounds: g,
          status: k,
          target: t,
          visible: S,
          visiblePercentage: R,
        }
      );
    }
    l.default = u;
  },
  98,
);
