__d(
  "adsCFGetAccountAPIState_HACK",
  ["AdsAccountStore", "AdsDataAtom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return (
        (e || (e = r("AdsDataAtom"))).isDispatching() &&
          (e || (e = r("AdsDataAtom"))).waitFor([
            r("AdsAccountStore").getDispatchToken(),
          ]),
        r("AdsAccountStore").getSelectedAccount().getValue() || {}
      );
    }
    l.default = s;
  },
  98,
);
