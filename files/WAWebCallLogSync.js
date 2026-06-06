__d(
  "WAWebCallLogSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 1;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.CallLog;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = 0,
                  i = 0,
                  l = 0,
                  _ = yield (p || (p = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation === "set") {
                                var t,
                                  n = e.value,
                                  s = (t = n.callLogAction) != null ? t : {},
                                  u = s.callLogRecord;
                                if (!u)
                                  return (
                                    a++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(r.collectionName)
                                  );
                                var c = o(
                                  "WAWebUserPrefsMultiDevice",
                                ).getPairingTimestamp();
                                if (c != null) {
                                  var d = o(
                                    "WATimeUtils",
                                  ).castMilliSecondsToUnixTime(e.timestamp);
                                  if (d > o("WATimeUtils").castToUnixTime(c)) {
                                    var m = !o("WATimeUtils").happenedWithin(
                                      d,
                                      o("WATimeUtils").MINUTE_SECONDS,
                                    );
                                    (yield o(
                                      "WAWebVoipActionWriteCallLogSync",
                                    ).generateCallLogFromCallSyncRecord({
                                      callLogRecord: u,
                                      shouldHideInConversation: m,
                                    }),
                                      i++);
                                  }
                                }
                                return {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                };
                              } else if (e.operation === "remove")
                                return {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                };
                              return (
                                l++,
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState
                                      .Unsupported,
                                }
                              );
                            } catch (e) {
                              return {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Failed,
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
                  a === 1
                    ? o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: malformed mutation",
                          ])),
                      )
                    : a > 1 &&
                      o("WALogger").WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: ",
                            " malformed mutations",
                          ])),
                        a,
                      ),
                  i === 1
                    ? o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: successfully applied",
                          ])),
                      )
                    : i > 1 &&
                      o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: ",
                            " successfully applied",
                          ])),
                        i,
                      ),
                  l === 1
                    ? o("WALogger").WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: operation not supported",
                          ])),
                      )
                    : l > 1 &&
                      o("WALogger").WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "call log sync: ",
                            " operations not supported",
                          ])),
                        l,
                      ),
                  _
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.getCallLogMutation = function (t, n) {
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
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      f = new _();
    l.default = f;
  },
  98,
);
