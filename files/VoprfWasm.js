__d(
  "VoprfWasm",
  ["VoprfWasmBuilder", "bx", "voprf_utils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        return r("bx").getURL(r("bx")("6002"));
      },
      s = r("VoprfWasmBuilder")(r("voprf_utils"));
    ((l.locateFile = e), (l.VoprfWasm = s));
  },
  98,
);
