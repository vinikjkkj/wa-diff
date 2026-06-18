__d(
  "WAWebHatchMetadataOperationEncoder",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.method === "init/fetch"
          )
            return { method: "init/fetch", params: {} };
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.method === "hitl.approval.decide" &&
            "approvalId" in e &&
            "decision" in e
          ) {
            var t = e.approvalId,
              n = e.decision;
            return {
              method: "hitl.approval.decide",
              params: { approval_id: t, decision: n },
            };
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        })(t),
        r = { version: 1, type: "req", payload: n };
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-metadata: encoding req method=",
              "",
            ])),
          t.method,
        ),
        new TextEncoder().encode(JSON.stringify(r)).buffer
      );
    }
    l.encodeHatchRequest = s;
  },
  98,
);
