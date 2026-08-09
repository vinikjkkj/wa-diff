__d(
  "LSLogEventAnnotate.nop",
  [
    "FBLogger",
    "I64",
    "LSDict",
    "LSIntEnum",
    "LSSyncError",
    "LSSynchronousPromise",
    "MAWMIC",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (n, a, i, l, u, c) {
        var t = c.has("error_msg");
        if (t) {
          r("FBLogger")("messenger_web").warn(
            "[LS] LS log event for logCategory %s, logEventId %s, logEventInstanceId %s, annotations %s, is during MIC: %s",
            (e || (e = o("I64"))).to_string(i),
            e.to_string(l),
            e.to_string(u),
            JSON.stringify(r("LSDict").shapeToRecord(c)),
            o("MAWMIC").duringMIC(),
          );
          var d = c.get("database_id");
          d != null &&
            (e || (e = o("I64"))).isI64(d) &&
            o("LSSyncError").setSyncError(
              (s || (s = o("LSIntEnum"))).unwrapIntEnum(d),
              c,
            );
        }
        return o("LSSynchronousPromise").makeSynchronousPromise();
      };
    ((u.__nop_name__ = "LSLogEventAnnotate"), (l.default = u));
  },
  98,
);
