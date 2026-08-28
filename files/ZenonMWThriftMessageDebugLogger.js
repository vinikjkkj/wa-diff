__d(
  "ZenonMWThriftMessageDebugLogger",
  [
    "Log",
    "LogHistory",
    "MultiwayCommonTypes",
    "ODS",
    "RequestStreamBodyUtils",
    "RpWebStateMachineLoggingBlocklist.experimental",
    "ZenonAuditedCheckpointLogId",
    "ZenonIceStatsParser",
    "ZenonInfraActionsLogger",
    "ZenonMWThriftMessageMap",
    "ZenonMWThriftTranslatorUtils",
    "formatDate",
    "isEmployeeTestUserZenonLogging",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          ((this.$1 = o("LogHistory").getInstance("webrtc")),
            (this.$2 = new Set(
              r("RpWebStateMachineLoggingBlocklist.experimental").MESSAGE_TYPES,
            )));
        }
        var n = t.prototype;
        return (
          (n.$3 = function (t, n, o) {
            n === void 0 && (n = !0);
            var e = r("formatDate")(new Date(), "[H:i:s:X]", {
              skipPatternLocalization: !0,
            });
            (this.$1.log("Console", e + " " + t),
              n &&
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__PLATFORM,
                  checkpoint: "[ZP] " + t,
                  messageID: o,
                }));
          }),
          (n.$4 = function (t) {
            var e = t.messageHeader.responseStatusCode;
            return e != null;
          }),
          (n.logMWThriftMessage = function (t, n, a) {
            if ((this.$5(t, n, a), !!r("isEmployeeTestUserZenonLogging")())) {
              var e = a.messageHeader,
                i = o("ZenonMWThriftMessageMap").messageTypeToString(
                  a.messageHeader.type,
                ),
                l = this.$4(a) ? "RESPONSE" : "REQUEST",
                s = this.$6(a),
                u =
                  "[ms] " +
                  t +
                  " [" +
                  n +
                  "] " +
                  i +
                  " " +
                  l +
                  " [retryCount: " +
                  e.retryCount +
                  (s != null ? " details: " + s : "") +
                  "]";
              this.$2.has(i) || this.$3(u, !0, e.transactionId);
            }
          }),
          (n.$5 = function (n, r, a) {
            var t = this.$7(n, r, a);
            t !== null &&
              (e || (e = o("ODS"))).bumpEntityKey(4083, "zenon_signaling", t);
          }),
          (n.$7 = function (t, n, r) {
            var e = r.messageBody,
              a = r.messageHeader,
              i = "";
            if (a.type != null)
              switch (a.type) {
                case o("MultiwayCommonTypes").MessageType.DATA_MESSAGE:
                  if (e.dataMessageRequest) {
                    var l;
                    i =
                      (l = o(
                        "ZenonMWThriftTranslatorUtils",
                      ).getGenericMWThriftDataMessageTopic(
                        e.dataMessageRequest,
                      )) != null
                        ? l
                        : "undefined";
                  }
                  break;
                default:
                  break;
              }
            var s = this.$4(r) ? "RESPONSE" : "REQUEST",
              u = o("ZenonMWThriftMessageMap").messageTypeToString(a.type);
            return i === ""
              ? t + "-" + n + "-" + u + "-" + s
              : t + "-" + n + "-" + u + "-" + s + "-" + i;
          }),
          (n.$6 = function (t) {
            var e = t.messageHeader;
            if (o("MultiwayCommonTypes").MessageType == null || e.type == null)
              return null;
            switch (e.type) {
              case o("MultiwayCommonTypes").MessageType.JOIN:
                return this.$8(t);
              case o("MultiwayCommonTypes").MessageType.SERVER_MEDIA_UPDATE:
                return this.$9(t);
              case o("MultiwayCommonTypes").MessageType.CLIENT_MEDIA_UPDATE:
                return this.$10(t);
              case o("MultiwayCommonTypes").MessageType.SUBSCRIPTION:
                return this.$11(t);
              case o("MultiwayCommonTypes").MessageType.ICE_CANDIDATE:
                return this.$12(t);
              default:
                return null;
            }
          }),
          (n.$8 = function (t) {
            var e,
              n,
              r,
              a,
              i = t.messageBody,
              l = t.messageHeader;
            if (this.$4(t)) {
              var s, u, c, d;
              return JSON.stringify({
                hasAnswer:
                  ((s = i.joinResponse) == null ? void 0 : s.answer) != null,
                hasRenegotiationOffer:
                  ((u = i.joinResponse) == null
                    ? void 0
                    : u.renegotiationOffer) != null,
                isPendingApproval:
                  (c = i.joinResponse) == null ? void 0 : c.isPendingApproval,
                multipleVideoStreamsAllowed:
                  (d = i.joinResponse) == null
                    ? void 0
                    : d.multipleVideoStreamsAllowed,
                statusCode: l.responseStatusCode,
                subCode: l.responseSubCode,
              });
            }
            return JSON.stringify({
              deviceCapabilities:
                (e = i.joinRequest) == null ? void 0 : e.deviceCapabilities,
              sdpType:
                ((n = i.joinRequest) == null ? void 0 : n.offer) != null
                  ? "offer"
                  : ((r = i.joinRequest) == null ? void 0 : r.answer) != null
                    ? "answer"
                    : "null",
              userCapabilities:
                (a = i.joinRequest) != null && a.userCapabilities
                  ? o("RequestStreamBodyUtils").uint8ArrayToString(
                      i.joinRequest.userCapabilities,
                    )
                  : "",
            });
          }),
          (n.$9 = function (t) {
            var e,
              n,
              r,
              o,
              a,
              i,
              l,
              s,
              u = t.messageBody,
              c = t.messageHeader;
            if (this.$4(t)) {
              var d, m;
              return JSON.stringify({
                currentVersion:
                  (d = u.serverMediaUpdateResponse) == null
                    ? void 0
                    : d.currentVersion,
                hasAnswer:
                  ((m = u.serverMediaUpdateResponse) == null
                    ? void 0
                    : m.answer) != null,
                statusCode: c.responseStatusCode,
                subCode: c.responseSubCode,
              });
            }
            return JSON.stringify({
              fromVersion:
                (e = u.serverMediaUpdateRequest) == null
                  ? void 0
                  : e.fromVersion,
              messageTags: c.messageTags,
              renegotiationRequested:
                (n =
                  (r = u.serverMediaUpdateRequest) == null
                    ? void 0
                    : r.renegotiationRequested) != null
                  ? n
                  : !1,
              sdpType:
                (o = u.serverMediaUpdateRequest) != null && o.offer
                  ? "offer"
                  : (a = u.serverMediaUpdateRequest) != null && a.answer
                    ? "answer"
                    : (i = u.serverMediaUpdateRequest) != null && i.update
                      ? "delta"
                      : "empty",
              toVersion:
                (l =
                  (s = u.serverMediaUpdateRequest) == null
                    ? void 0
                    : s.toVersion) != null
                  ? l
                  : "",
            });
          }),
          (n.$10 = function (t) {
            var e,
              n,
              r,
              o,
              a = t.messageBody,
              i = t.messageHeader;
            if (this.$4(t)) {
              var l, s;
              return JSON.stringify({
                currentVersion:
                  (l =
                    (s = a.clientMediaUpdateResponse) == null
                      ? void 0
                      : s.currentVersion) != null
                    ? l
                    : "",
                statusCode: i.responseStatusCode,
                subCode: i.responseSubCode,
              });
            }
            return JSON.stringify({
              fromVersion:
                (e =
                  (n = a.clientMediaUpdateRequest) == null
                    ? void 0
                    : n.fromVersion) != null
                  ? e
                  : "",
              toVersion:
                (r =
                  (o = a.clientMediaUpdateRequest) == null
                    ? void 0
                    : o.toVersion) != null
                  ? r
                  : "",
            });
          }),
          (n.$11 = function (t) {
            var e,
              n,
              r = t.messageBody;
            return this.$4(t)
              ? null
              : JSON.stringify({
                  subscriptions:
                    (e =
                      (n = r.subscriptionRequest) == null
                        ? void 0
                        : n.subscriptions) != null
                      ? e
                      : "",
                });
          }),
          (n.$12 = function (t) {
            var e,
              n = t.messageBody;
            if (this.$4(t)) return null;
            var r =
              (e = n.iceCandidateRequest) == null
                ? void 0
                : e.iceCandidateSdps.map(function (e) {
                    var t = e.candidateSdpString;
                    if (t != null)
                      return o("ZenonIceStatsParser").extractIceInfo(t);
                  });
            return JSON.stringify({ iceCandidates: r });
          }),
          (n.logSendMultiwayThriftMessageFailure = function (n, a, i) {
            ((e || (e = o("ODS"))).bumpEntityKey(
              4083,
              "zenon_multiway",
              "send_message_failure",
            ),
              e.flush());
            var t = i ? "Stack Trace: " + i.stack + "." : "Error msg: " + n;
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__ERROR,
              checkpoint:
                "Failed to send MW Thrift message of type " + a + ". " + t,
            });
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
