__d(
  "WAWebBizBotConsumerContentVariant",
  ["$InternalEnum", "WANullthrows", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ ROW: 0, INDIA: 1, BRAZIL: 2 });
    function s() {
      return r("WANullthrows")(
        e.cast(o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant")),
      );
    }
    ((l.BizBotConsumerContentVariant = e),
      (l.getBizBotConsumerContentVariant = s));
  },
  98,
);
