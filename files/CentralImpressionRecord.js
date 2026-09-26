__d(
  "CentralImpressionRecord",
  ["getStyleProperty", "intersectionObserverEntryIsIntersecting"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        impressedAt: 0,
        invisibleReason: null,
        status: null,
        target: e,
        visible: !1,
        visiblePercentage: 0,
      };
    }
    function s(e, t) {
      var n = e.target,
        o = e.boundingClientRect,
        a = null,
        i = !1;
      r("intersectionObserverEntryIsIntersecting")(e)
        ? o == null
          ? (a = "UNDEFINED_BOUNDING_RECT")
          : o.height === 0 || o.width === 0
            ? (a = "TARGET_SIZE_0")
            : r("getStyleProperty")(n, "opacity") === "0"
              ? (a = "TARGET_TRANSPARENT")
              : r("getStyleProperty")(n, "visibility") === "hidden"
                ? (a = "TARGET_HIDDEN")
                : (i = !0)
        : (a = "NOT_IN_VIEWPORT");
      var l = i === !1 ? 0 : e.intersectionRatio,
        s = t.visible,
        u = t.impressedAt,
        c = null;
      return (
        s && !i
          ? (c = "EXIT")
          : !s && i
            ? ((c = "ENTER"), (u = Date.now()))
            : t.visiblePercentage !== l && (c = "UPDATE"),
        {
          boundingClientRect: e.boundingClientRect,
          impressedAt: u,
          intersectionRect: e.intersectionRect,
          invisibleReason: a,
          rootBounds: e.rootBounds,
          status: c,
          target: n,
          visible: i,
          visiblePercentage: l,
        }
      );
    }
    function u(e, t) {
      return e.visible
        ? babelHelpers.extends({}, e, {
            invisibleReason: t,
            status: "EXIT",
            visible: !1,
            visiblePercentage: 0,
          })
        : null;
    }
    function c(e) {
      return u(e, "PUSH_VIEW_HIDDEN");
    }
    function d(e) {
      return u(e, "COMPONENT_UNMOUNTED");
    }
    function m(e) {
      return u(e, "PAGE_VISIBILITY_HIDDEN");
    }
    ((l.initImpressionRecord = e),
      (l.calcNextObservedRecord = s),
      (l.calcExitRecordOnPushViewHidden = c),
      (l.calcExitRecordOnUnmount = d),
      (l.calcExitRecordOnViewportHidden = m));
  },
  98,
);
