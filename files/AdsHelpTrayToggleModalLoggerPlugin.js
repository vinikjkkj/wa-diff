__d(
  "AdsHelpTrayToggleModalLoggerPlugin",
  ["AdsHelpTrayUILogger", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = t.data.openModal;
          r("isTruthy")(e) &&
            o("AdsHelpTrayUILogger").logModalOpen(e, t.data.source);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
