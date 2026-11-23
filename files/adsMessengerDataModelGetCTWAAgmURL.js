__d(
  "adsMessengerDataModelGetCTWAAgmURL",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      return (t = e.text_format.message) == null ||
        (t = t.automated_greeting_message_cta) == null
        ? void 0
        : t.url;
    }
    i.default = e;
  },
  66,
);
