__d(
  "WAWebResendGroupMsg",
  [
    "WAArrayDifferenceBy",
    "WALogger",
    "WATimeUtils",
    "WAWebCurrentUser",
    "WAWebDBDeviceListFanout",
    "WAWebFetchResendMissingKeyJob",
    "WAWebGroupMsgSendUtils",
    "WAWebGroupQueryBridge",
    "WAWebMaybePostMdGroupSyncMetrics",
    "WAWebMsgFanoutTypes",
    "WAWebMsgUtilsBridge",
    "WAWebPostMdDeviceSyncAckMetric",
    "WAWebRequestMsgResend",
    "WAWebSendDirectMsgToDeviceList",
    "WAWebSendMsgCommonApi",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ackTime,
            r = t.groupData,
            a = t.isDirect,
            i = t.metricReporter,
            l = t.msgProtobuf,
            b = t.msgRecord,
            v = t.oldList,
            S = t.phash,
            R = t.serverAddressingMode,
            I = b.data.id.id,
            T = b.data.to;
          (o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "resendGroupMsg: ",
                  " to ",
                  "",
                ])),
              I,
              T.toString(),
            )
            .tags("messaging"),
            o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric({
              chatWid: T,
              groupData: r,
              msgProtobuf: l,
              msgRecord: b,
              serverAddressingMode: R,
            }),
            (i.sendReporter = i.createSendReporter({
              isResend: !0,
              originalMessage: b.type === "message" ? b.data : void 0,
              groupData: r,
            })));
          var D = v.filter(function (e) {
              return L(o("WAWebWidFactory").asUserWidOrThrow(e));
            }),
            x = Array.from(
              new Set(
                D.map(function (e) {
                  return o("WAWebWidFactory").asUserWidOrThrow(e).toString();
                }),
              ),
              function (e) {
                return o("WAWebWidFactory").createUserWidOrThrow(e);
              },
            );
          if (!o("WAWebGroupMsgSendUtils").isCagAddon(b.data, r))
            try {
              yield o("WAWebFetchResendMissingKeyJob").fetchResendMissingKeys(
                D,
              );
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "fetchResendMissingKeys: failed",
                    ])),
                )
                .sendLogs("fetchResendMissingKeys-sync-error");
            }
          if (a)
            yield o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
              D,
              "message",
              S,
            );
          else
            try {
              (yield o("WAWebGroupQueryBridge").sendQueryGroup(T),
                k({
                  groupData: r,
                  groupId: T,
                  msgProtobuf: l,
                  oldParticipantList: x.map(
                    o("WAWebWidFactory").createWidFromWidLike,
                  ),
                }).catch(function (e) {
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[postGroupParticipantSyncMetric] ",
                          ": failed ",
                          "",
                        ])),
                      I,
                      String(e),
                    )
                    .tags("messaging");
                }));
            } catch (e) {
              throw (
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupMsg: ",
                        ": sendQueryGroup failed: ",
                        "",
                      ])),
                    I,
                    e,
                  )
                  .tags("messaging"),
                E(i),
                e
              );
            }
          var $ = o("WAWebSendMsgCommonApi").getResendTimeoutInSeconds();
          if (o("WATimeUtils").unixTime() - n > $) {
            var P;
            (o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsg: ",
                    ": skip group resending due to ",
                    " min timeout",
                  ])),
                I,
                $ / 60,
              )
              .tags("messaging"),
              (P = i.sendReporter) == null ||
                P.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
                  isTerminal: !1,
                }),
              (i.sendReporter = null));
            return;
          }
          try {
            var N = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
                T.toString(),
              ),
              M =
                N == null
                  ? void 0
                  : N.participants
                      .map(function (e) {
                        return o("WAWebWidFactory").createUserWidOrThrow(e);
                      })
                      .filter(L);
            if (M != null && M.length !== x.length) {
              var w = M.length - x.length,
                A = w > 0 ? "increased" : "decreased",
                F = Math.abs(w);
              if (
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "resendGroupMsg: ",
                      ": participant list ",
                      " by ",
                      "",
                    ])),
                  I,
                  A,
                  F,
                ),
                o("WAWebCurrentUser").isEmployee())
              ) {
                var O = new Set(x.map(String)),
                  B = M.filter(function (e) {
                    return !O.has(e.toString());
                  }),
                  W = B.join();
                o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupMsg: ",
                        ": msg not sent to: ",
                        "",
                      ])),
                    I,
                    W,
                  )
                  .sendLogs("resendGroupMsg-missed-participants", {
                    sampling: 0.01,
                  });
              }
            }
            var q = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: x,
              }),
              U = o("WAArrayDifferenceBy").differenceBy(q, D, String);
            if (U.length === 0) {
              o("WALogger")
                .LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "resendGroupMsg: ",
                      ": skip resending to the empty list",
                    ])),
                  I,
                )
                .tags("messaging");
              return;
            }
            if (
              (o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "resendGroupMsg: ",
                      ": resending to devices: ",
                      "",
                    ])),
                  I,
                  U.join(","),
                )
                .tags("messaging"),
              b.data.isOverwrittenByRevoke === !0)
            ) {
              o("WALogger")
                .LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "resendGroupMsg: ",
                      ": skip, msg overwritten by revoke",
                    ])),
                  I,
                )
                .tags("messaging");
              return;
            }
            (yield o(
              "WAWebSendDirectMsgToDeviceList",
            ).sendDirectMsgToDeviceList({
              deviceList: U,
              groupData: r,
              metricReporter: i,
              msgProtobuf: l,
              msgRecord: b,
              option: {
                fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                isResendingMsg: !0,
              },
            }),
              o("WALogger")
                .LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "resendGroupMsg: ",
                      ": done",
                    ])),
                  I,
                )
                .tags("messaging"));
          } catch (e) {
            var V;
            throw (
              o("WALogger")
                .LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "resendGroupMsg: failed to resend ",
                      " message: ",
                      "",
                    ])),
                  I,
                  e,
                )
                .tags("messaging"),
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "resendGroupMsg: failed to resend message: ",
                      "",
                    ])),
                  e,
                )
                .tags("messaging"),
              (V = i.sendReporter) == null ||
                V.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                  isTerminal: !1,
                }),
              (i.sendReporter = null),
              e
            );
          }
          yield o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(
            b.data,
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return !e.isBot();
    }
    function E(e) {
      var t;
      ((t = e.sendReporter) == null ||
        t.postFailure({
          result: o("WAWebWamEnumMessageSendResultType")
            .MESSAGE_SEND_RESULT_TYPE.ERROR_BACKFILL_USYNC_FAILED,
          isTerminal: !1,
        }),
        (e.sendReporter = null));
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupData,
            n = e.groupId,
            r = e.msgProtobuf,
            a = e.oldParticipantList;
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "postGroupParticipantSyncMetric: start",
              ])),
          );
          var i = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
            String(n),
          );
          if (!i) {
            var l = String(n);
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "postGroupParticipantSyncMetric: no participant record ",
                  "",
                ])),
              l,
            );
            return;
          }
          var s = i.participants
            .map(function (e) {
              return o("WAWebWidFactory").createUserWidOrThrow(e);
            })
            .filter(L)
            .map(function (e) {
              return o("WAWebWidFactory").createWidFromWidLike(e);
            });
          o("WAWebMaybePostMdGroupSyncMetrics").maybePostGroupSyncMetrics({
            currentParticipantList: s,
            groupData: t,
            msgProtobuf: r,
            oldParticipantList: a,
          });
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ackTime,
            n = e.groupData,
            r = e.isDirect,
            a = e.msgRecord,
            i = e.oldList,
            l = e.phash,
            s = e.serverAddressingMode;
          yield o("WAWebRequestMsgResend").runGroupMsgResendRecorded(
            {
              ackTime: t,
              groupData: n,
              isDirect: r,
              msgRecord: a,
              oldList: i,
              phash: l,
              serverAddressingMode: s,
            },
            function () {
              return S(e);
            },
          );
        })),
        D.apply(this, arguments)
      );
    }
    ((l.resendGroupMsg = S), (l.resendPersistedGroupMsgWrapper = T));
  },
  98,
);
