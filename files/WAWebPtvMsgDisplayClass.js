__d(
  "WAWebPtvMsgDisplayClass",
  ["cx", "WAWebClassnames", "WAWebDisplayType", "WAWebPtvGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.displayType;
      return o("WAWebClassnames").classnamesConvertMeToStylexPlease(
        "_amkd",
        "_am--",
        o("WAWebDisplayType").isWideDisplay(t) ? "_amqb" : null,
        o("WAWebPtvGatingUtils").isPtvReceivingEnabled() ? null : "_amkj",
      );
    }
    l.default = e;
  },
  98,
);
