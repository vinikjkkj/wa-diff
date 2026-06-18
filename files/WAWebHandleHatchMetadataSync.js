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
      if (n.kind !== "approval") {
        var r = e.timestamp;
        if (r != null) {
          var a = u.get(e.index);
          if (a != null && r <= a) return;
          u.set(e.index, r);
        }
      }
      (m(t, e, n),
        e.operation !== "REMOVE" &&
          (n.kind === "agent_status"
            ? o("WAWebHandleHatchAgentStatus").handleHatchAgentStatus(n.status)
            : n.kind === "identity"
              ? o("WAWebAIHatchIdentityStore").applyHatchIdentity(n.identity)
              : n.kind === "approval" &&
                o("WAWebHandleHatchApproval").handleHatchApproval(n.approval)));
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
