__d(
  "WAWebHandleHatchMetadataSync",
  [
    "WALogger",
    "WAWebAIHatchIdentityStore",
    "WAWebCurrentUser",
    "WAWebHandleHatchAgentStatus",
    "WAWebHandleHatchApproval",
    "WAWebHatchPayloadDecoder",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Map();
    function c(t, n) {
      try {
        if (t.type !== "event") return;
        var a = t.event,
          i = o("WAWebHatchPayloadDecoder").decodeHatchPayload(a);
        if (i.kind !== "approval") {
          var l = a.timestamp;
          if (l != null) {
            var s = u.get(a.index);
            if (s != null && l <= s) return;
            u.set(a.index, l);
          }
        }
        if ((d(n, a, i), a.operation === "REMOVE")) return;
        i.kind === "agent_status"
          ? o("WAWebHandleHatchAgentStatus").handleHatchAgentStatus(i.status)
          : i.kind === "identity"
            ? o("WAWebAIHatchIdentityStore").applyHatchIdentity(i.identity)
            : i.kind === "approval" &&
              o("WAWebHandleHatchApproval").handleHatchApproval(i.approval);
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-metadata: handler failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("hatch-metadata-handler-error");
      }
    }
    function d(e, t, n) {
      var r;
      if (o("WAWebCurrentUser").isEmployee()) {
        var a =
          n.kind === "agent_status"
            ? (r = n.status.activityCode) != null
              ? r
              : "none"
            : "n/a";
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-metadata: decoded msgId=",
              " op=",
              " action=",
              " kind=",
              " code=",
              "",
            ])),
          e != null ? e : "unknown",
          t.opKey,
          t.operation,
          n.kind,
          a,
        );
      }
    }
    l.handleHatchMetadataSync = c;
  },
  98,
);
