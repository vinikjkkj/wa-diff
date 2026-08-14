__d(
  "MAWWebInitDataHelpers",
  ["FBLogger", "MessengerWebInitData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return 2;
    }
    function s(e) {
      var t;
      switch (e) {
        case 2:
          return [r("MessengerWebInitData").accountKeyV2];
        case 1:
          return [r("MessengerWebInitData").accountKey].concat(
            (t = r("MessengerWebInitData").additionalAccountKeysV1) != null
              ? t
              : [],
          );
        default:
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "Invalid format version, should never happen.",
          );
      }
    }
    ((l.getLastAccountKeyFormatVersion = e), (l.getAccountKeysString = s));
  },
  98,
);
