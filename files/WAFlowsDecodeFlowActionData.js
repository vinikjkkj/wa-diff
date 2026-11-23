__d(
  "WAFlowsDecodeFlowActionData",
  ["WAFlowsError", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null || typeof e != "object" ? !1 : e.screen != null;
    }
    function s(t) {
      if (t == null || t.length === 0) return null;
      try {
        var n = new TextDecoder("utf8").decode(
            new Uint8Array(
              atob(t)
                .split("")
                .map(function (e) {
                  return e.charCodeAt(0);
                }),
            ),
          ),
          a = JSON.parse(n);
        if (e(a)) return a;
        throw new (o("WAFlowsError").WAFlowsInvalidFlowActionMessageDataError)(
          "Invalid flow data action payload, " +
            JSON.stringify(a != null ? a : {}),
        );
      } catch (e) {
        var i = r("getErrorSafe")(e);
        throw new (o("WAFlowsError").WAFlowsInvalidFlowActionMessageDataError)(
          i.message,
        );
      }
    }
    l.default = s;
  },
  98,
);
