__d(
  "AdsMessengerPhoneNumberUpdateReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e;
          return {
            phoneNumberView: n.phoneNumberView,
            rawPhoneNumber: n.rawPhoneNumber,
            isPhoneNumberSwitchEnabled:
              (e = n.isPhoneNumberEnabled) != null
                ? e
                : t.isPhoneNumberSwitchEnabled,
          };
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
