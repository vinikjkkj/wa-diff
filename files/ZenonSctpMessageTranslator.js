__d(
  "ZenonSctpMessageTranslator",
  [
    "RequestStreamBodyUtils",
    "ZenonActorHooks",
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "ZenonPeerConnectionConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r) {
        ((this.$1 = e), (this.$2 = t), (this.$3 = n), (this.$4 = r));
      }
      var t = e.prototype;
      return (
        (t.toSctpDatagram = function (t) {
          var e,
            n = this,
            a,
            i,
            l = this.$1(t.sender);
          if (l == null) {
            r("ZenonInfraActionsLogger").logError({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__ERROR,
              error:
                "Cannot find node id of SCTP datagram sender " +
                o("ZenonActorHooks").ZenonActor.getID(),
              errorDomain: "ZenonSctpMessageTranslator toSctpDatagram",
            });
            return;
          }
          var s = new Set();
          return t.recipients
            ? ((e = t.recipients.recipientIDs) == null ||
                e.forEach(function (e) {
                  var t = n.$2(e);
                  if (t != null) s.add(t);
                  else {
                    var o = n.$1(e);
                    o == null
                      ? r("ZenonInfraActionsLogger").logError({
                          auditId: r("ZenonAuditedCheckpointLogId")
                            .RP_ROOMS_INFRA_WWW__ERROR,
                          error:
                            "Cannot find node id of SCTP datagram receiver " +
                            e,
                          errorDomain:
                            "ZenonSctpMessageTranslator toSctpDatagram",
                        })
                      : s.add(o);
                  }
                }),
              (a = t.recipients) == null ||
                (a = a.recipientNodeIDs) == null ||
                a.forEach(function (e) {
                  s.add(e);
                }),
              (i = t.recipients) == null ||
                (i = i.serviceRecipients) == null ||
                i.forEach(function (e) {
                  if (e === 2) {
                    var t = n.$2(
                      o("ZenonPeerConnectionConstants").SCTP_MEDIA_SERVER_ID,
                    );
                    t != null && s.add(t);
                  }
                }),
              {
                payload: o("RequestStreamBodyUtils").stringToUint8Array(
                  t.message,
                ),
                receivers: s,
                sender: l,
              })
            : {
                payload: o("RequestStreamBodyUtils").stringToUint8Array(
                  t.message,
                ),
                receivers: s,
                sender: l,
              };
        }),
        (t.toUserId = function (t) {
          return this.$3(t);
        }),
        (t.toNodeId = function (t) {
          return this.$1(t);
        }),
        (t.userIds = function () {
          return this.$4();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
