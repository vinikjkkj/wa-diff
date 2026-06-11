__d(
  "WAWebHandleHatchMetadataSync",
  [
    "WALogger",
    "WAWebCurrentUser",
    "WAWebHandleHatchAgentStatus",
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
          i = a.timestamp;
        if (i != null) {
          var l = u.get(a.index);
          if (l != null && i <= l) return;
          u.set(a.index, i);
        }
        var s = o("WAWebHatchPayloadDecoder").decodeHatchPayload(a);
        if ((d(n, a, s), a.operation === "REMOVE")) return;
        s.kind === "agent_status" &&
          o("WAWebHandleHatchAgentStatus").handleHatchAgentStatus(s.status);
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
