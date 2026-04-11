__d(
  "WAWebVoipJsonParserNative",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    i.parseJsonFromNativeBridge = e;
  },
  66,
);
