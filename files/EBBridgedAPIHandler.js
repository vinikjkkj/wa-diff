__d(
  "EBBridgedAPIHandler",
  ["EBAPI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getContactEpochHead: function () {
        return r("EBAPI").getContactEpochHead.apply(r("EBAPI"), arguments);
      },
      getMessageKeys: function () {
        return r("EBAPI").getMessageKeys.apply(r("EBAPI"), arguments);
      },
      isEbEnabledEbSwitch: function () {
        return r("EBAPI").isEbEnabledEbSwitch();
      },
    };
    l.ebapi = e;
  },
  98,
);
