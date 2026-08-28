__d(
  "RpGenaiSctpToolcallGenAIToolCallTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        SUCCESS: 0,
        ERROR: 1,
        NOT_SUPPORTED: 2,
        CANCELLED: 3,
      }),
      l = n("$InternalEnum")({
        UNKNOWN: 0,
        ARRAY: 1,
        BOOLEAN: 2,
        OBJECT: 3,
        STRING: 4,
        INTEGER: 5,
        NUMBER: 6,
      }),
      s = n("$InternalEnum")({ Request: "request", Cancel: "cancel" });
    a.exports = {
      InputType: l,
      ToolCallDispatchMessage$Types: s,
      ToolCallResultStatus: e,
    };
  },
  null,
);
