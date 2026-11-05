__d(
  "WAWebHatchApiKeyInput",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.trim();
      return t === "" ? { status: "empty" } : { status: "ok", key: t };
    }
    i.parseHatchApiKey = e;
  },
  66,
);
