__d(
  "VirtualizationConfig",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { isVisible: !0, nodeHeight: null },
      s = 4e3;
    function u() {
      return r("justknobx")._("1003");
    }
    function c() {
      var e;
      return (e = r("justknobx")._("3656")) != null ? e : 1e3;
    }
    function d() {
      return r("justknobx")._("3658");
    }
    function m() {
      return r("justknobx")._("3659");
    }
    function p() {
      var e;
      return ((e = r("justknobx")._("3655")) != null ? e : 0) / 10;
    }
    function _() {
      var e;
      return (e = r("justknobx")._("3657")) != null ? e : 0;
    }
    function f() {
      return r("justknobx")._("5895");
    }
    function g() {
      return r("justknobx")._("6042");
    }
    var h = 0,
      y = !1;
    ((l.DEFAULT_INIT_RENDER_CONFIG = e),
      (l.VERTICAL_HIDEABLE_MARGIN = s),
      (l.isVirtualizationEnabledInJK = u),
      (l.getScrollHandlingDebounceMs = c),
      (l.getMarginScrollDelta = d),
      (l.getScrollSpeedFactorBase = m),
      (l.getScrollDirectionDiscount = p),
      (l.getTopBottomMarginLowerBoundScreenHeightRatio = _),
      (l.getMarginObservationSampleCap = f),
      (l.isNonInteractiveClickPinExclusionEnabled = g),
      (l.HORIZONTAL_HIDEABLE_MARGIN = h),
      (l.IS_INTERSECTION_MARGIN_SUPPORTED = y));
  },
  98,
);
