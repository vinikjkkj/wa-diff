__d(
  "LSDeserializeFromJsonIntoDictionaryV2.nop",
  ["FBLogger", "LSDict", "LSJson", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (a, i, l) {
        var t = o("LSJson").parse(l, { useLSTypes: !0 });
        if (t instanceof r("LSDict"))
          return (e || (e = n("Promise"))).resolve([t]);
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected Dictionary type",
        );
      };
    ((s.__nop_name__ = "LSDeserializeFromJsonIntoDictionary"), (l.default = s));
  },
  98,
);
