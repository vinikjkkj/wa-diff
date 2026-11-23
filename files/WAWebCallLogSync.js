__d(
  "WAWebCallLogSync",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserUtils",
    "WAWebVoipActionWriteCallLogSync",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(t) {
      var n = t.callCreatorJid,
        r = t.fromMe,
        a = t.peerJid,
        i = n != null ? n : r ? o("WAWebUserUtils").getMeUserOrThrow() : a;
      return i.isUser()
        ? o("WAWebWidFactory").asUserWidOrThrow(i)
        : (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "call log sync: call creator is not a user wid: ",
                  "",
                ])),
              i.toLogString(),
            )
            .sendLogs("call-log-sync-non-user-creator"),
          i);
    }
    var f = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getVersion = function () {
            return 1;
          }),
          (n.getAction = function () {
            return o("WAWebSyncdConst").Actions.CallLog;
          }),
          (n.applyMutations = async function (t) {
            var e = this,
              n = 0,
              r = 0,
              a = 0,
              i = await Promise.all(
                t.map(async function (t) {
                  try {
                    if (t.operation === "set") {
                      var i,
                        l = t.value,
                        s = (i = l.callLogAction) != null ? i : {},
                        u = s.callLogRecord;
                      if (!u)
                        return (
                          n++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            e.collectionName,
                          )
                        );
                      var c = o(
                        "WAWebUserPrefsMultiDevice",
                      ).getPairingTimestamp();
                      if (c != null) {
                        var d = o("WATimeUtils").castMilliSecondsToUnixTime(
                          t.timestamp,
                        );
                        d > o("WATimeUtils").castToUnixTime(c) &&
                          (await o(
                            "WAWebVoipActionWriteCallLogSync",
                          ).generateCallLogFromCallSyncRecord({
                            callLogRecord: u,
                          }),
                          r++);
                      }
                      return {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Success,
                      };
                    } else if (t.operation === "remove")
                      return {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Success,
                      };
                    return (
                      a++,
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WAWebSyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              n === 1
                ? o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: malformed mutation",
                      ])),
                  )
                : n > 1 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: ",
                        " malformed mutations",
                      ])),
                    n,
                  ),
              r === 1
                ? o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: successfully applied",
                      ])),
                  )
                : r > 1 &&
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: ",
                        " successfully applied",
                      ])),
                    r,
                  ),
              a === 1
                ? o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: operation not supported",
                      ])),
                  )
                : a > 1 &&
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: ",
                        " operations not supported",
                      ])),
                    a,
                  ),
              i
            );
          }),
          (n.getCallLogMutation = function (t, n) {
            var e,
              a,
              i,
              l,
              s,
              u = _(n).toJid(),
              c = n.fromMe ? "0" : "1",
              d = n.callId,
              m = n.participantEntries.map(function (e) {
                var t, n;
                return {
                  userJid:
                    (t = (n = e.jid) == null ? void 0 : n.toJid()) != null
                      ? t
                      : void 0,
                  callResult: o(
                    "WAWebVoipWaCallEnums",
                  ).getSyncParticipantCallResultFromParticipantState(e.result),
                };
              }),
              p = {
                callResult: o(
                  "WAWebVoipWaCallEnums",
                ).getSyncCallResultFromCallLogResult(n.result),
                duration: n.connectTime != null ? n.connectTime : void 0,
                startTime: n.startTime,
                isIncoming: !n.fromMe,
                isVideo: (e = n.videoCall) != null ? e : void 0,
                isCallLink: (a = n.isCallLink) != null ? a : void 0,
                callLinkToken: (i = n.callLinkToken) != null ? i : void 0,
                scheduledCallId: (l = n.scheduledId) != null ? l : void 0,
                callId: n.callId,
                callCreatorJid: u,
                groupJid: (s = n.groupJid) == null ? void 0 : s.toJid(),
                participants: m,
                callType: r("isStringNullOrEmpty")(n.scheduledId)
                  ? o("WAWebProtobufSyncAction.pb").CallLogRecord$CallType
                      .REGULAR
                  : o("WAWebProtobufSyncAction.pb").CallLogRecord$CallType
                      .SCHEDULED_CALL,
              },
              f = { callLogAction: { callLogRecord: p } };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [u, d, c],
              value: f,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t,
              action: this.getAction(),
            });
          }),
          t
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      g = new f();
    l.default = g;
  },
  98,
);
