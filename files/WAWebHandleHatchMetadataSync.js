__d(
  "WAWebHandleHatchMetadataSync",
  [
    "WALogger",
    "WAWebAIHatchIdentityStore",
    "WAWebCurrentUser",
    "WAWebHandleHatchAgentStatus",
    "WAWebHandleHatchApproval",
    "WAWebHatchMetadataExchangeManager",
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
        e: {
          var a = t;
          if (
            ((typeof a == "object" && a !== null) || typeof a == "function") &&
            a.type === "res" &&
            "requestId" in a &&
            "response" in a
          ) {
            var i = a.requestId,
              l = a.response;
            i != null &&
              r("WAWebHatchMetadataExchangeManager").resolveRequest(i, l);
            break e;
          }
          if (
            ((typeof a == "object" && a !== null) || typeof a == "function") &&
            a.type === "event" &&
            "event" in a
          ) {
            var s = a.event;
            d(s, n);
            break e;
          }
          break e;
        }
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
    function d(e, t) {
      var n = o("WAWebHatchPayloadDecoder").decodeHatchPayload(e);
      if (n.kind !== "approval_record") {
        var r,
          a = (r = e.seq) != null ? r : e.timestamp;
        if (a != null) {
          var i = u.get(e.index);
          if (i != null && a <= i) return;
          u.set(e.index, a);
        }
      }
      if ((m(t, e, n), e.operation === "REMOVE")) {
        n.kind === "approval_record" &&
          o("WAWebHandleHatchApproval").handleRemovedHatchApprovalRecord(
            n.event,
          );
        return;
      }
      n.kind === "agent_status"
        ? o("WAWebHandleHatchAgentStatus").handleHatchAgentStatus(n.status)
        : n.kind === "identity"
          ? o("WAWebAIHatchIdentityStore").applyHatchIdentity(n.identity)
          : n.kind === "approval_record" &&
            o("WAWebHandleHatchApproval").handleHatchApprovalRecord(n.event);
    }
    function m(e, t, n) {
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
