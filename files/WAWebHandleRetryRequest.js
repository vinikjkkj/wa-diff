__d(
  "WAWebHandleRetryRequest",
  [
    "WAJids",
    "WALogger",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebHandleRetryRequestNonMigratedLog",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMdRetryFromUnknownDeviceWamEvent",
    "WAWebMessageQueue",
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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S;
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield I(e);
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
            h = e.type,
            y =
              (p.isStatus() || i.isStatus()) &&
              o(
                "WAWebStatusSessionGatingUtils",
              ).shouldUseStatusSessionForOutgoingMessage()
                ? o("WAWebSessionScope").SessionScope.STATUS
                : o("WAWebSessionScope").SessionScope.DEFAULT;
          return (
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
              y,
            ),
            o("WAWebMessageQueue").onMessageQueue({
              chatWid: i,
              isOffline: !1,
              msgCategory: null,
              action: (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var t = yield E(i, e, y);
                    if (t != null) {
                      var s = t.identity,
                        u = t.isLidBot,
                        C = t.originalMsgId,
                        b = t.requester;
                      r("gkx")("26258") ||
                        n("cr:10198") == null ||
                        n("cr:10198").injectDebug(
                          i,
                          "RetryReceiptReceived",
                          "originalMsgId:" + C + " - requester:" + b.toString(),
                        );
                      try {
                        if (h === "enc_rekey_retry") {
                          var v = yield o(
                            "WAWebVoipStackInterface",
                          ).getVoipStackInterface();
                          yield v == null
                            ? void 0
                            : v.resendEncRekeyRetry(
                                l.toString({ legacy: !0 }),
                                g,
                              );
                        } else if (h !== "voip_1x1_retry") {
                          var S = yield o(
                              "WAWebProcessRetryKeyBundle",
                            ).getMsgIfAuthorized(C, i, b, u, g, s),
                            R =
                              S == null
                                ? o("WAWebApiContact").getAlternateDeviceWid(
                                    o(
                                      "WAWebWidFactory",
                                    ).createDeviceWidFromWidOrThrow(b),
                                  )
                                : null;
                          if (
                            (R &&
                              (S = yield o(
                                "WAWebProcessRetryKeyBundle",
                              ).getMsgIfAuthorized(C, i, R, u, g, s)),
                            !S)
                          ) {
                            var L;
                            o("WALogger").WARN(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "handleMessageRetryRequest ",
                                  " retry not authorized",
                                ])),
                              (L = S) == null ? void 0 : L.type,
                            );
                            return;
                          }
                          var k = {
                            to: p,
                            participant: _,
                            msgRecord: S,
                            retryCount: g,
                            isLidBot: u,
                            sessionScope: y,
                          };
                          (f && (k.recipient = f),
                            m && (k.lidOrigin = m),
                            a && (k.accountLid = a),
                            yield o("WAWebSendRetryMsgJob").sendRetry(k));
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
                    }
                  },
                );
                function s() {
                  return t.apply(this, arguments);
                }
                return s;
              })(),
            })
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = t.from,
            i = t.isLid,
            l = i === void 0 ? !1 : i,
            s = t.offline,
            u = t.originalMsgId,
            c = t.participant,
            d = t.retryCount;
          if (d >= o("WAWebPostMessageHighRetryCountMetric").MAX_RETRY) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "handleRetryRequest refusing retry attempt #",
                  "",
                ])),
              d,
            );
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
                  yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                    [h],
                    !1,
                    r,
                  ));
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i = D(e);
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
                c = [u, o("WAWebLidMigrationUtils").getAlternateMsgKey(u)]
                  .filter(Boolean)
                  .map(function (e) {
                    return e.toString();
                  }),
                d;
              if (e.type === "retry") {
                var m = (yield o("WAWebSchemaMessage")
                  .getMessageTable()
                  .bulkGet(c, !1)).filter(Boolean);
                if (m.length === 0)
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
                (m.length > 1 &&
                  o("WALogger").WARN(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "getActualChatInfo: multiple messages found",
                      ])),
                  ),
                  (d = o("WAWebWidFactory").createWidFromWidLike(m[0].to)));
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
                R = g == null ? void 0 : g.lidOriginType,
                L =
                  (g == null ? void 0 : g.accountLid) != null
                    ? o("WAWebWidFactory").createWidFromWidLike(g.accountLid)
                    : void 0;
              return { chat: d, from: f, lidOrigin: R, accountLid: L };
            }
          }
          return { chat: i, from: e.from };
        })),
        T.apply(this, arguments)
      );
    }
    function D(t) {
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
    ((l.handleRetryRequest = R), (l.getTargetChat = D));
  },
  98,
);
