__d(
  "WAWebHandleHatchMetadataSync",
  [
    "WALogger",
    "WAWebAIHatchIdentityStore",
    "WAWebCurrentUser",
    "WAWebHandleHatchAgentStatus",
    "WAWebHandleHatchApproval",
    "WAWebHandleHatchChannelNotification",
    "WAWebHatchBodyEncoding",
    "WAWebHatchChannelNotificationDecoder",
    "WAWebHatchMetadataExchangeManager",
    "WAWebHatchPayloadDecoder",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = new Map();
    function m(t, n) {
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
            i != null && p(i, l);
            break e;
          }
          if (
            ((typeof a == "object" && a !== null) || typeof a == "function") &&
            a.type === "event" &&
            "event" in a
          ) {
            var s = a.event;
            _(s, n);
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
    function p(e, t) {
      if (t.status !== "ok" || t.bodyEncoding == null) {
        r("WAWebHatchMetadataExchangeManager").resolveRequest(e, t);
        return;
      }
      var n = t.body;
      if (typeof n != "string") {
        r("WAWebHatchMetadataExchangeManager").failRequest(e, "decode_failed");
        return;
      }
      if (r("WAWebHatchMetadataExchangeManager").isPending(e)) {
        var a = t.method;
        o("WAWebHatchBodyEncoding")
          .inflateHatchResponseBody(n)
          .then(
            function (t) {
              var n = t.body,
                i = t.compressedBytes,
                l = t.inflatedBytes;
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-metadata: inflated res method=",
                    " wire_bucket=",
                    " decoded_bucket=",
                    "",
                  ])),
                a,
                o("WAWebHatchBodyEncoding").hatchSizeBucket(i),
                o("WAWebHatchBodyEncoding").hatchSizeBucket(l),
              ),
                r("WAWebHatchMetadataExchangeManager").resolveRequest(e, {
                  status: "ok",
                  method: a,
                  body: n,
                }));
            },
            function (t) {
              (o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-metadata: gzip inflate failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("hatch-metadata-gzip-inflate-error"),
                r("WAWebHatchMetadataExchangeManager").failRequest(
                  e,
                  "decode_failed",
                ));
            },
          );
      }
    }
    function _(e, t) {
      var n = o("WAWebHatchPayloadDecoder").decodeHatchPayload(e);
      if (
        !(
          !o("WAWebHatchPayloadDecoder").bypassesLastWriteWins(e.opKey) && !f(e)
        )
      ) {
        if ((g(t, e, n), e.operation === "REMOVE")) {
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
            : n.kind === "approval_record"
              ? o("WAWebHandleHatchApproval").handleHatchApprovalRecord(n.event)
              : n.kind === "channel_notification" &&
                o(
                  "WAWebHandleHatchChannelNotification",
                ).handleHatchChannelNotification(n.notification);
      }
    }
    function f(e) {
      var t = e.index,
        n = e.seq,
        r = e.timestamp;
      if (r == null) return !0;
      var o = d.get(t),
        a =
          o == null ||
          r > o.timestamp ||
          (r === o.timestamp && n != null && o.seq != null && n > o.seq);
      return (a && d.set(t, { timestamp: r, seq: n }), a);
    }
    function g(e, t, n) {
      var r;
      if (o("WAWebCurrentUser").isEmployee()) {
        var a =
          n.kind === "agent_status"
            ? (r = n.status.activityCode) != null
              ? r
              : "none"
            : "n/a";
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function h(e) {
      return e.kind === "channel_notification"
        ? {
            kind: e.kind,
            notification: o(
              "WAWebHatchChannelNotificationDecoder",
            ).summarizeHatchChannelNotification(e.notification),
          }
        : e;
    }
    l.handleHatchMetadataSync = m;
  },
  98,
);
