__d(
  "CometComposedTextV2Utils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (var t = new Set(), n = e, r = 1; n > 0; )
        (n & r && (t.add(r), (n ^= r)), (r <<= 1));
      return t;
    }
    i.getFormats = e;
  },
  66,
);
