__d(
  "WAWebCallLogSync",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebVoipActionWriteCallLogSync",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(t) {
      var n = t.callCreatorJid,
        r = t.fromMe,
        a = t.peerJid,
        i =
          n != null ? n : r ? o("WAWebUserPrefsMeUser").getMeUserOrThrow() : a;
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
    var g = (function (e) {
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
        var a = t.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.CallLog;
          }),
          (a.applyMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  r = 0,
                  a = 0,
                  i = 0,
                  l = yield (_ || (_ = n("Promise"))).all(
                    e.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation === "set") {
                                var n,
                                  l = e.value,
                                  s = (n = l.callLogAction) != null ? n : {},
                                  u = s.callLogRecord;
                                if (!u)
                                  return (
                                    r++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(t.collectionName)
                                  );
                                var c = o(
                                  "WAWebUserPrefsMultiDevice",
                                ).getPairingTimestamp();
                                if (c != null) {
                                  var d = o(
                                    "WATimeUtils",
                                  ).castMilliSecondsToUnixTime(e.timestamp);
                                  d > o("WATimeUtils").castToUnixTime(c) &&
                                    (yield o(
                                      "WAWebVoipActionWriteCallLogSync",
                                    ).generateCallLogFromCallSyncRecord({
                                      callLogRecord: u,
                                    }),
                                    a++);
                                }
                                return {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Success,
                                };
                              } else if (e.operation === "remove")
                                return {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Success,
                                };
                              return (
                                i++,
                                {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Unsupported,
                                }
                              );
                            } catch (e) {
                              return {
                                actionState:
                                  o("WAWebSyncdConst").SyncActionState.Failed,
                              };
                            }
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return (
                  r === 1
                    ? o("WALogger").WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: malformed mutation",
                          ])),
                      )
                    : r > 1 &&
                      o("WALogger").WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: ",
                            " malformed mutations",
                          ])),
                        r,
                      ),
                  a === 1
                    ? o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: successfully applied",
                          ])),
                      )
                    : a > 1 &&
                      o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: ",
                            " successfully applied",
                          ])),
                        a,
                      ),
                  i === 1
                    ? o("WALogger").WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: operation not supported",
                          ])),
                      )
                    : i > 1 &&
                      o("WALogger").WARN(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: ",
                            " operations not supported",
                          ])),
                        i,
                      ),
                  l
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getCallLogMutation = function (t, n) {
            var e,
              a,
              i,
              l,
              s,
              u = f(n).toJid(),
              c = n.fromMe ? "1" : "0",
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
                isIncoming: n.fromMe,
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
              _ = { callLogAction: { callLogRecord: p } };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [u, d, c],
              value: _,
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
      h = new g();
    l.default = h;
  },
  98,
);
