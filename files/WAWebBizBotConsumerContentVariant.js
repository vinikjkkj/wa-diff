__d(
  "WAWebBizBotConsumerContentVariant",
  ["$InternalEnum", "WAWebABProps", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ ROW: 0, INDIA: 1, BRAZIL: 2, EU_UK: 3 });
    function s() {
      return r("nullthrows")(
        e.cast(o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant")),
      );
    }
    ((l.BizBotConsumerContentVariant = e),
      (l.getBizBotConsumerContentVariant = s));
  },
  98,
);
