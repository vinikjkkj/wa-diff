__d(
  "WAWebHandleRetryRequest",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAddonRetryRequestUtils",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebHandleRetryRequestNonMigratedLog",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebManageE2ESessionsJob",
    "WAWebMdRetryFromUnknownDeviceWamEvent",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgKey",
    "WAWebPostMessageHighRetryCountMetric",
    "WAWebProcessRetryKeyBundle",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSendMsgQueueMap",
    "WAWebSendRetryMsgJob",
    "WAWebSessionScope",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStatusSessionGatingUtils",
    "WAWebUpdateLocalSignalSession",
    "WAWebUserPrefsMeUser",
    "WAWebVoipStackInterface",
    "WAWebWamEnumDeviceType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10198",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield D(e);
          if (t.error) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMessageRetryRequest: no chat info found for incoming retry request. error: ",
                    "",
                  ])),
                t.error,
              )
              .sendLogs(
                yield o(
                  "WAWebHandleRetryRequestNonMigratedLog",
                ).buildNoChatInfoSendLogsArg(e),
              );
            return;
          }
          var a = t.accountLid,
            i = t.chat,
            l = t.from,
            m = t.lidOrigin,
            p = e.from;
          e.from = l;
          var _ = e.participant,
            f = e.recipient,
            g = e.retryCount,
            h = e.type;
          return o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: i,
              isOffline: !1,
              msgCategory: null,
              action: (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    try {
                      var t = p.isStatus() || i.isStatus(),
                        s = k(e, t)
                          ? yield o(
                              "WAWebProcessRetryKeyBundle",
                            ).loadGroupSentMessage(i, e.originalMsgId)
                          : null,
                        y =
                          (s == null
                            ? void 0
                            : s.msgRecord.data.isGroupStatus) === !0,
                        C = t || y,
                        b = C
                          ? o(
                              "WAWebStatusSessionGatingUtils",
                            ).getStatusSessionScope()
                          : o("WAWebSessionScope").SessionScope.DEFAULT,
                        v = C ? b : void 0;
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "handleRetryRequest: receivedFrom=",
                            " chat=",
                            " sessionScope=",
                            "",
                          ])),
                        p.toLogString(),
                        i.toLogString(),
                        b,
                      );
                      var S = yield I(i, e, b);
                      if (S == null) return;
                      var R = S.identity,
                        L = S.isLidBot,
                        E = S.originalMsgId,
                        T = S.requester;
                      if (
                        (r("gkx")("26258") ||
                          n("cr:10198") == null ||
                          n("cr:10198").injectDebug(
                            i,
                            "RetryReceiptReceived",
                            "originalMsgId:" +
                              E +
                              " - requester:" +
                              T.toString(),
                          ),
                        h === "enc_rekey_retry")
                      ) {
                        var D = yield o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        yield D == null
                          ? void 0
                          : D.resendEncRekeyRetry(
                              l.toString({ legacy: !0 }),
                              g,
                            );
                      } else if (h !== "voip_1x1_retry") {
                        var x = yield o(
                            "WAWebProcessRetryKeyBundle",
                          ).getMsgIfAuthorized({
                            chat: i,
                            identity: R,
                            loadedSentMessage: s != null ? s : void 0,
                            originalMsgId: E,
                            requester: T,
                            retryCount: g,
                            sessionScope: v,
                          }),
                          $ =
                            x == null
                              ? o("WAWebApiContact").getAlternateDeviceWid(
                                  o(
                                    "WAWebWidFactory",
                                  ).createDeviceWidFromWidOrThrow(T),
                                )
                              : null;
                        if (
                          ($ &&
                            (x = yield o(
                              "WAWebProcessRetryKeyBundle",
                            ).getMsgIfAuthorized({
                              chat: i,
                              identity: R,
                              originalMsgId: E,
                              requester: $,
                              retryCount: g,
                              sessionScope: v,
                            })),
                          x == null)
                        ) {
                          o("WALogger").WARN(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "handleMessageRetryRequest retry not authorized",
                              ])),
                          );
                          return;
                        }
                        var P = x,
                          N = P.msgRecord,
                          M = P.retryContext,
                          w = {
                            to: p,
                            participant: _,
                            msgRecord: N,
                            retryContext: M,
                            retryCount: g,
                            isLidBot: L,
                            sessionScope: b,
                          };
                        (f && (w.recipient = f),
                          m && (w.lidOrigin = m),
                          a && (w.accountLid = a),
                          yield o("WAWebSendRetryMsgJob").sendRetry(w));
                      }
                    } catch (e) {
                      o("WALogger").WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "handleMessageRetryRequest error: ",
                            "",
                          ])),
                        e,
                      );
                    }
                  },
                );
                function s() {
                  return t.apply(this, arguments);
                }
                return s;
              })(),
            })
            .catch(function (e) {
              return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                e,
                "retry_request",
              );
            });
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      var n = e.retryCount,
        r = e.type;
      return (
        !t &&
        n < o("WAWebPostMessageHighRetryCountMetric").MAX_RETRY &&
        r !== "enc_rekey_retry" &&
        r !== "voip_1x1_retry"
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = t.from,
            i = t.isLid,
            l = i === void 0 ? !1 : i,
            s = t.offline,
            u = t.originalMsgId,
            c = t.participant,
            d = t.retryCount;
          if (d >= o("WAWebPostMessageHighRetryCountMetric").MAX_RETRY) {
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "handleRetryRequest refusing retry attempt #",
                    " for ",
                    "",
                  ])),
                d,
                e.toLogString(),
              )
              .sendLogs("retry-request-cap-exhausted", { sampling: 0.01 });
            return;
          }
          var h = e.isUser() ? a : c;
          if (!h) {
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "handleRetryRequest: no requester found for incoming retry request.",
                ])),
            );
            return;
          }
          var y = h.device || 0;
          try {
            var C = yield o("WAWebApiDeviceList").hasDevice(h, y);
            if (!C) {
              (o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "handleRetryRequest: device ",
                    " not found for ",
                    "",
                  ])),
                y,
                h.user,
              ),
                o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "handleRetryRequest: no device found for isUser:",
                        " lid:",
                        " isLidBot:",
                        "",
                      ])),
                    e.isUser(),
                    h.isLid(),
                    l,
                  )
                  .sendLogs("no-device-found-for-retry-request", {
                    sampling: 0.001,
                  }),
                new (o(
                  "WAWebMdRetryFromUnknownDeviceWamEvent",
                ).MdRetryFromUnknownDeviceWamEvent)({
                  offline: s,
                  senderType:
                    y === o("WAJids").DEFAULT_DEVICE_ID
                      ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY
                      : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION,
                }).commit());
              return;
            }
            return yield o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
              e.toString(),
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield o(
                  "WAWebUpdateLocalSignalSession",
                ).updateLocalSignalSession(e, t, r),
                  yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                    identityChanged: !1,
                    sessionScope: r,
                    wids: [h],
                  }));
                var n = yield o("WAWebSignalProtocolStore")
                  .getPersistSignalProtocolStore()
                  .getIdentityWithRowId(
                    o("WAWebSignalCommonUtils").createSignalAddress(h),
                  );
                return {
                  originalMsgId: u,
                  chat: e,
                  requester: h,
                  isLidBot: l,
                  identity: n,
                };
              }),
            );
          } catch (e) {
            o("WALogger").WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "handleRetryRequest error: ",
                  "",
                ])),
              e,
            );
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i = N(e);
          if (
            (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "getActualChatInfo: retry request from ",
                  ", target chat: ",
                  ", type: ",
                  ",\n      participant: ",
                  ", recipient: ",
                  "",
                ])),
              e.from.toLogString(),
              (t = i) == null ? void 0 : t.toLogString(),
              e.type,
              (n = e.participant) == null ? void 0 : n.toLogString(),
              (a = e.recipient) == null ? void 0 : a.toLogString(),
            ),
            i == null)
          )
            return (
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "getActualChatInfo: no target chat found",
                  ])),
              ),
              { error: "no_target_chat" }
            );
          if (
            ((i = o(
              "WAWebSimpleSignalPNToFBIDMigration",
            ).maybeReplaceFbidWithDeprecatedBotPn(i)),
            (i = o(
              "WAWebMaibaWASSMigration",
            ).resolveMaibaAiHubFbidToLidOrChatId(i)),
            i.isUser())
          ) {
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "getActualChatInfo: this is a user chat",
                ])),
            );
            var l =
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() && i.isLid();
            if (
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() ||
              l
            ) {
              var s;
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "getActualChatInfo: in migrated/pre-migrated flow",
                  ])),
              );
              var u = new (r("WAWebMsgKey"))({
                  fromMe: !0,
                  remote: i,
                  id: e.originalMsgId,
                }),
                c = [
                  u,
                  o("WAWebLidMigrationUtils").getAlternateMsgKey(u),
                ].filter(Boolean),
                d;
              if (e.type === "retry") {
                var m = yield $(c, e.originalMsgId);
                if (m == null)
                  return (
                    o("WALogger").LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "getActualChatInfo: could not find messages",
                        ])),
                    ),
                    {
                      error: o(
                        "WAWebHandleRetryRequestNonMigratedLog",
                      ).selectRetryErrorType(e),
                    }
                  );
                d = m;
              } else (e.type, (d = e.from));
              var p;
              if (e.from.isBot()) p = e.from;
              else {
                var _ = o("WAWebWidFactory").asUserWidOrThrow(e.from);
                p = d.isLid()
                  ? o("WAWebLidMigrationUtils").toLid(_)
                  : o("WAWebLidMigrationUtils").toPn(_);
              }
              if (p == null) return { error: "empty_from_user" };
              var f = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                  p.user,
                  p.server,
                  (s = e.from.device) != null ? s : 0,
                ),
                g = yield o("WAWebSchemaChat").getChatTable().get(d.toString()),
                S = g == null ? void 0 : g.lidOriginType,
                R =
                  (g == null ? void 0 : g.accountLid) != null
                    ? o("WAWebWidFactory").createWidFromWidLike(g.accountLid)
                    : void 0;
              return { chat: d, from: f, lidOrigin: S, accountLid: R };
            }
          }
          return { chat: i, from: e.from };
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r,
            a = (yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet(
                e.map(function (e) {
                  return e.toString();
                }),
                !1,
              )).filter(Boolean);
          if (
            (a.length > 1 &&
              o("WALogger").WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "getActualChatInfo: multiple messages found",
                  ])),
              ),
            a.length > 0)
          )
            return o("WAWebWidFactory").createWidFromWidLike(a[0].to);
          var i = yield (R || (R = n("Promise"))).all(
            e.map(function (e) {
              return o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(e);
            }),
          );
          return (r = i.find(Boolean)) == null ? void 0 : r.msgData.id.remote;
        })),
        P.apply(this, arguments)
      );
    }
    function N(t) {
      var n = t.from,
        r = t.recipient;
      if (n.isBot() && r != null) return r;
      if (n.isUser()) {
        var a = o("WAWebWidFactory").asUserWidOrThrow(n);
        if (o("WAWebUserPrefsMeUser").isMeAccount(a)) {
          if (!r) {
            var i;
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getTargetChat: from is a peer device, but without recipient, isLid: ",
                    ", peer device: ",
                    ", retryCount: ",
                    ", hasKeyBundle: ",
                    "",
                  ])),
                n.isLid(),
                (i = n.device) != null ? i : "primary",
                t.retryCount,
                t.keyBundle != null,
              ),
              null
            );
          }
          return r;
        }
        return o("WAWebWidFactory").asUserWidOrThrow(a);
      }
      return n;
    }
    ((l.handleRetryRequest = L), (l.getTargetChat = N));
  },
  98,
);
