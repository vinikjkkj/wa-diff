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
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPostMdDeviceSyncAckMetric",
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
            k = b.data.id.id,
            I = b.data.to;
          (o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "resendGroupMsg: ",
                  " to ",
                  "",
                ])),
              k,
              I.toString(),
            )
            .tags("messaging"),
            o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric({
              chatWid: I,
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
          var T = Array.from(
            new Set(
              v.map(function (e) {
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
                v,
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
              v,
              "message",
              S,
            );
          else
            try {
              (yield o("WAWebGroupQueryBridge").sendQueryGroup(I),
                E({
                  groupData: r,
                  groupId: I,
                  msgProtobuf: l,
                  oldParticipantList: T.map(
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
                      k,
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
                    k,
                    e,
                  )
                  .tags("messaging"),
                L(i),
                e
              );
            }
          var D = o("WAWebSendMsgCommonApi").getResendTimeoutInSeconds();
          if (o("WATimeUtils").unixTime() - n > D) {
            var x;
            (o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsg: ",
                    ": skip group resending due to ",
                    " min timeout",
                  ])),
                k,
                D / 60,
              )
              .tags("messaging"),
              (x = i.sendReporter) == null ||
                x.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
                  isTerminal: !1,
                }),
              (i.sendReporter = null));
            return;
          }
          try {
            var $ = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
                I.toString(),
              ),
              P = $ == null ? void 0 : $.participants;
            if (P != null && P.length !== T.length) {
              var N = P.length - T.length,
                M = N > 0 ? "increased" : "decreased",
                w = Math.abs(N);
              if (
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "resendGroupMsg: ",
                      ": participant list ",
                      " by ",
                      "",
                    ])),
                  k,
                  M,
                  w,
                ),
                o("WAWebCurrentUser").isEmployee())
              ) {
                var A = P.map(function (e) {
                    return o("WAWebWidFactory").createUserWidOrThrow(e);
                  }),
                  F = new Set(T),
                  O = A.filter(function (e) {
                    return !F.has(e);
                  }),
                  B = O.join();
                o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "resendGroupMsg: ",
                        ": msg not sent to: ",
                        "",
                      ])),
                    k,
                    B,
                  )
                  .sendLogs("resendGroupMsg-missed-participants", {
                    sampling: 0.01,
                  });
              }
            }
            var W = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: T,
              }),
              q = o("WAArrayDifferenceBy").differenceBy(W, v, String);
            if (q.length === 0) {
              o("WALogger")
                .LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "resendGroupMsg: ",
                      ": skip resending to the empty list",
                    ])),
                  k,
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
                  k,
                  q.join(","),
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
                  k,
                )
                .tags("messaging");
              return;
            }
            (yield o(
              "WAWebSendDirectMsgToDeviceList",
            ).sendDirectMsgToDeviceList({
              deviceList: q,
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
                  k,
                )
                .tags("messaging"));
          } catch (e) {
            var U;
            throw (
              o("WALogger")
                .LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "resendGroupMsg: failed to resend ",
                      " message: ",
                      "",
                    ])),
                  k,
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
              (U = i.sendReporter) == null ||
                U.postFailure({
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
      var t;
      ((t = e.sendReporter) == null ||
        t.postFailure({
          result: o("WAWebWamEnumMessageSendResultType")
            .MESSAGE_SEND_RESULT_TYPE.ERROR_BACKFILL_USYNC_FAILED,
          isTerminal: !1,
        }),
        (e.sendReporter = null));
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var s = i.participants.map(o("WAWebWidFactory").createWid);
          o("WAWebMaybePostMdGroupSyncMetrics").maybePostGroupSyncMetrics({
            currentParticipantList: s,
            groupData: t,
            msgProtobuf: r,
            oldParticipantList: a,
          });
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ackTime,
            n = e.groupData,
            r = e.isDirect,
            a = e.msgRecord,
            i = e.oldList,
            l = e.phash,
            s = e.serverAddressingMode,
            u = yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .accessors.maybeCreateJob(
                o("WAWebPersistedJobDefinitions").jobSerializers.resendGroupMsg(
                  a,
                  n,
                  r,
                  i,
                  l,
                  t,
                  s,
                ),
              );
          (yield S(e),
            yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .accessors.deletePersistedJob(u.id));
        })),
        T.apply(this, arguments)
      );
    }
    ((l.resendGroupMsg = S), (l.resendPersistedGroupMsgWrapper = I));
  },
  98,
);
