__d(
  "BrowserSupportCore",
  ["getVendorPrefixedName"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        hasCSSAnimations: function () {
          return !!n("getVendorPrefixedName")("animationName");
        },
        hasCSSTransforms: function () {
          return !!n("getVendorPrefixedName")("transform");
        },
        hasCSS3DTransforms: function () {
          return !!n("getVendorPrefixedName")("perspective");
        },
        hasCSSTransitions: function () {
          return !!n("getVendorPrefixedName")("transition");
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
