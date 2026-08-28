__d(
  "AdsConnectWhatsAppToPageHistory",
  ["immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("immutable").List,
      l = n("immutable").Record({
        current: "ENTER_WHATSAPP_NUMBER",
        previous: e(),
      }),
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(l),
      u = s;
    i.default = u;
  },
  66,
);
