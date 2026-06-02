__d(
  "WAWebCallLogSync",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebVoipActionWriteCallLogSync",
    "WAWebVoipWaCallEnums",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.CallLog;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = 0,
              l = await Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n,
                        l = e.value,
                        s = (n = l.callLogAction) != null ? n : {},
                        u = s.callLogRecord;
                      if (!u)
                        return (
                          r++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var c = o(
                        "WAWebUserPrefsMultiDevice",
                      ).getPairingTimestamp();
                      if (c != null) {
                        var d = o("WATimeUtils").castMilliSecondsToUnixTime(
                          e.timestamp,
                        );
                        if (d > o("WATimeUtils").castToUnixTime(c)) {
                          var m = !o("WATimeUtils").happenedWithin(
                            d,
                            o("WATimeUtils").MINUTE_SECONDS,
                          );
                          (await o(
                            "WAWebVoipActionWriteCallLogSync",
                          ).generateCallLogFromCallSyncRecord({
                            callLogRecord: u,
                            shouldHideInConversation: m,
                          }),
                            a++);
                        }
                      }
                      return {
                        actionState: o("WASyncdConst").SyncActionState.Success,
                      };
                    } else if (e.operation === "remove")
                      return {
                        actionState: o("WASyncdConst").SyncActionState.Success,
                      };
                    return (
                      i++,
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              r === 1
                ? o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: malformed mutation",
                      ])),
                  )
                : r > 1 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: ",
                        " malformed mutations",
                      ])),
                    r,
                  ),
              a === 1
                ? o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: successfully applied",
                      ])),
                  )
                : a > 1 &&
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: ",
                        " successfully applied",
                      ])),
                    a,
                  ),
              i === 1
                ? o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: operation not supported",
                      ])),
                  )
                : i > 1 &&
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "call log sync: ",
                        " operations not supported",
                      ])),
                    i,
                  ),
              l
            );
          }),
          (a.getCallLogMutation = function (t, n) {
            var e,
              a,
              i,
              l,
              s,
              u,
              c = (e = n.callCreatorJid) == null ? void 0 : e.toJid(),
              d = c;
            d == null &&
              (d = n.fromMe
                ? o("WAWebUserPrefsMeUser")
                    .getMeDevicePnOrThrow_DO_NOT_USE()
                    .toJid()
                : n.peerJid.toJid());
            var m = n.fromMe ? "1" : "0",
              p = n.callId,
              _ = n.participantEntries.map(function (e) {
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
              f = {
                callResult: o(
                  "WAWebVoipWaCallEnums",
                ).getSyncCallResultFromCallLogResult(n.result),
                duration: n.connectTime != null ? n.connectTime : void 0,
                startTime: n.startTime,
                isIncoming: n.fromMe,
                isVideo: (a = n.videoCall) != null ? a : void 0,
                isCallLink: (i = n.isCallLink) != null ? i : void 0,
                callLinkToken: (l = n.callLinkToken) != null ? l : void 0,
                scheduledCallId: (s = n.scheduledId) != null ? s : void 0,
                callId: n.callId,
                callCreatorJid: c,
                groupJid: (u = n.groupJid) == null ? void 0 : u.toJid(),
                participants: _,
                callType: r("isStringNullOrEmpty")(n.scheduledId)
                  ? o("WAWebProtobufSyncAction.pb").CallLogRecord$CallType
                      .REGULAR
                  : o("WAWebProtobufSyncAction.pb").CallLogRecord$CallType
                      .SCHEDULED_CALL,
              },
              g = { callLogAction: { callLogRecord: f } };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [d, p, m],
              value: g,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t,
              action: this.getAction(),
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      _ = new p();
    l.default = _;
  },
  98,
);
