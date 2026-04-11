__d(
  "WAWebResendGroupMsg",
  [
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
    "lodash",
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
            a = t.groupData,
            i = t.isDirect,
            l = t.metricReporter,
            b = t.msgProtobuf,
            v = t.msgRecord,
            S = t.oldList,
            R = t.phash,
            k = t.serverAddressingMode,
            I = v.data.id.id,
            T = v.data.to;
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
            o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric(
              T,
              v,
              b,
              a,
              k,
            ),
            (l.sendReporter = l.createSendReporter({
              isResend: !0,
              originalMessage: v.type === "message" ? v.data : void 0,
              groupData: a,
            })));
          var D = Array.from(
            new Set(
              S.map(function (e) {
                return o("WAWebWidFactory").asUserWidOrThrow(e).toString();
              }),
            ),
            function (e) {
              return o("WAWebWidFactory").createUserWidOrThrow(e);
            },
          );
          if (!o("WAWebGroupMsgSendUtils").isCagAddon(v.data, a))
            try {
              yield o("WAWebFetchResendMissingKeyJob").fetchResendMissingKeys(
                S,
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
          if (i)
            yield o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
              S,
              "message",
              R,
            );
          else
            try {
              (yield o("WAWebGroupQueryBridge").sendQueryGroup(T),
                E(
                  a,
                  T,
                  b,
                  D.map(o("WAWebWidFactory").createWidFromWidLike),
                ).catch(function (e) {
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[postGroupParticipantSyncMetric] ",
                          ": failed ",
                          "",
                        ])),
                      I,
                      e,
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
                L(l),
                e
              );
            }
          var x = o("WAWebSendMsgCommonApi").getResendTimeoutInSeconds();
          if (o("WATimeUtils").unixTime() - n > x) {
            var $;
            (o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsg: ",
                    ": skip group resending due to ",
                    " min timeout",
                  ])),
                I,
                x / 60,
              )
              .tags("messaging"),
              ($ = l.sendReporter) == null ||
                $.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
                  isTerminal: !1,
                }),
              (l.sendReporter = null));
            return;
          }
          try {
            var P = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
                T.toString(),
              ),
              N = P == null ? void 0 : P.participants;
            if (N != null && N.length !== D.length) {
              var M = N.length - D.length,
                w = M > 0 ? "increased" : "decreased",
                A = Math.abs(M);
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
                  w,
                  A,
                ),
                o("WAWebCurrentUser").isEmployee())
              ) {
                var F = N.map(function (e) {
                    return o("WAWebWidFactory").createUserWidOrThrow(e);
                  }),
                  O = new Set(D),
                  B = F.filter(function (e) {
                    return !O.has(e);
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
                wids: D,
              }),
              U = r("lodash").differenceBy(q, S, String);
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
              v.data.isOverwrittenByRevoke === !0)
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
            ).sendDirectMsgToDeviceList(
              v,
              b,
              U,
              {
                fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                isResendingMsg: !0,
              },
              a,
              l,
            ),
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
              (V = l.sendReporter) == null ||
                V.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                  isTerminal: !1,
                }),
              (l.sendReporter = null),
              e
            );
          }
          yield o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(
            v.data,
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
    function E(e, t, n, r) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "postGroupParticipantSyncMetric: start",
                ])),
            );
            var a = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
              String(t),
            );
            if (!a) {
              var i = String(t);
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "postGroupParticipantSyncMetric: no participant record ",
                    "",
                  ])),
                i,
              );
              return;
            }
            var l = a.participants.map(o("WAWebWidFactory").createWid);
            o("WAWebMaybePostMdGroupSyncMetrics").maybePostGroupSyncMetrics(
              r,
              l,
              n,
              e,
            );
          },
        )),
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
