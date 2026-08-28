__d(
  "BrowserSupport",
  [
    "BrowserSupportCore",
    "ExecutionEnvironment",
    "UserAgent_DEPRECATED",
    "getVendorPrefixedName",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = null;
    function d() {
      return (u || (u = r("ExecutionEnvironment"))).canUseDOM
        ? (c || (c = document.createElement("div")), c)
        : null;
    }
    var m = function (t) {
        return r("memoize")(function () {
          var e = d();
          return e ? t(e) : !1;
        });
      },
      p = m(function (e) {
        return (
          (e.style.cssText =
            "position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;"),
          /sticky/.test(e.style.position)
        );
      }),
      _ = m(function (e) {
        return (
          "scrollSnapType" in e.style ||
          "webkitScrollSnapType" in e.style ||
          "msScrollSnapType" in e.style
        );
      }),
      f = m(function (e) {
        return "scrollBehavior" in e.style;
      }),
      g = m(function (e) {
        return "pointerEvents" in e.style
          ? ((e.style.cssText = "pointer-events:auto"),
            e.style.pointerEvents === "auto")
          : !1;
      }),
      h = (e = r("memoize"))(function () {
        return (
          !(
            o("UserAgent_DEPRECATED").webkit() &&
            !o("UserAgent_DEPRECATED").chrome() &&
            o("UserAgent_DEPRECATED").windows()
          ) &&
          "FileList" in window &&
          "FormData" in window
        );
      }),
      y = e(function () {
        return !!t.blob;
      }),
      C = e(function () {
        return (
          (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
          "createElementNS" in document &&
          document
            .createElementNS("http://www.w3.org/2000/svg", "foreignObject")
            .toString()
            .includes("SVGForeignObject")
        );
      }),
      b = e(function () {
        return !!window.MutationObserver;
      }),
      v = e(function () {
        var e = {
            transition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "mozTransitionEnd",
            OTransition: "oTransitionEnd",
          },
          t = r("getVendorPrefixedName")("transition");
        return e[t] || null;
      }),
      S = function () {
        return !!window.CanvasRenderingContext2D;
      };
    ((l.hasCSSAnimations = (s = r("BrowserSupportCore")).hasCSSAnimations),
      (l.hasCSSTransforms = s.hasCSSTransforms),
      (l.hasCSS3DTransforms = s.hasCSS3DTransforms),
      (l.hasCSSTransitions = s.hasCSSTransitions),
      (l.hasPositionSticky = p),
      (l.hasScrollSnapPoints = _),
      (l.hasScrollBehavior = f),
      (l.hasPointerEvents = g),
      (l.hasFileAPI = h),
      (l.hasBlobFactory = y),
      (l.hasSVGForeignObject = C),
      (l.hasMutationObserver = b),
      (l.getTransitionEndEvent = v),
      (l.hasCanvasRenderingContext2D = S));
  },
  98,
);
