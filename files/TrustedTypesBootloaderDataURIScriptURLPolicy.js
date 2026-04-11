__d(
  "TrustedTypesBootloaderDataURIScriptURLPolicy",
  ["TrustedTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        createScriptURL: function (t) {
          return t;
        },
      },
      s = r("TrustedTypes").createPolicy("bootloader-data-uri", e),
      u = s;
    l.default = u;
  },
  98,
);
