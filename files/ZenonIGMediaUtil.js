__d(
  "ZenonIGMediaUtil",
  ["ZenonAppProvider", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        shouldUseSFUOnly: function () {
          return o("ZenonAppProvider").isInstagramApp() && !r("gkx")("2274");
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
