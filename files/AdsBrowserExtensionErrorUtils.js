__d(
  "AdsBrowserExtensionErrorUtils",
  ["SignalsChromeExtensionTypes", "isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "chrome-extension://";
    function s(t) {
      var n = t.split(e),
        r = n[n.length - 1];
      return r.split("/")[0];
    }
    function u(t) {
      return !r("isFalsey")(t) && t.includes(e);
    }
    function c(e) {
      return !o("SignalsChromeExtensionTypes").EXTENSION_IDS.includes(e);
    }
    ((l.extractExtensionID = s),
      (l.isBrowserExtensionError = u),
      (l.isNotMetaSignalHelperExtension = c));
  },
  98,
);
