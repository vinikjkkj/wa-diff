__d(
  "WAWebCreateChat",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebApiBusinessProfile",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebApiOrphanTcToken",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebBizGatingUtils",
    "WAWebBotTypes",
    "WAWebChatOriginTypes",
    "WAWebContactSystemMsg",
    "WAWebCtwaAGMUtils",
    "WAWebEphemeralityResolver",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebFMXGatingUtils",
    "WAWebFetchAndSetIntegritySignals",
    "WAWebGetCTWAEligibilityFromConversion",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgFactory",
    "WAWebInitialSystemMsg",
    "WAWebLid1X1MigrationGating",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebMsgEphemerality",
    "WAWebPrivacyModeSystemMsg",
    "WAWebPsFmxActionWamEvent",
    "WAWebQueryBusinessProfile",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = a != null ? a : {},
              l = i.createdOffline,
              h = l === void 0 ? !1 : l,
              y = i.firstIncomingMsg,
              C = i.forceUsync,
              b = C === void 0 ? !1 : C,
              v = i.nextPrivacyMode;
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: ",
                  "",
                ])),
              t,
            );
            var R = e.chatId,
              k = R;
            if (R.isLid()) {
              r("WANullthrows")(
                n == null ? void 0 : n.lidOriginType,
                "Origin type is missing when creating LID chat",
              );
              var T = o("WAWebApiContact").getPhoneNumber(R),
                D = !o("WAWebChatOriginTypes").VALID_LID_ORIGINS.has(t),
                x =
                  o("WAWebChatOriginTypes").VALID_USERNAME_ORIGINS.has(t) &&
                  T != null;
              x &&
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated()
                ? (o("WALogger")
                    .LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "createChat: ",
                          " username chat with known pn",
                        ])),
                      t,
                    )
                    .sendLogs("unexpected-username-lid-chat"),
                  T != null && (k = T))
                : D &&
                  !o(
                    "WAWebLid1X1MigrationGating",
                  ).Lid1X1MigrationUtils.isLidMigrated() &&
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "lid: ",
                        ", origin type: ",
                        "",
                      ])),
                    e.chatId.toLogString(),
                    n == null ? void 0 : n.lidOriginType,
                  ),
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "createChat: ",
                          " unexpected lid chat created",
                        ])),
                      t,
                    )
                    .sendLogs("unexpected-lid-chat"));
              var $ = yield o("WAWebApiContact").getContactRecord(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              );
              t === "username_contactless_search" &&
                ($ == null ? void 0 : $.username) == null &&
                (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
                  { lid: R, data: { shareOwnPn: !0 } },
                ]));
            }
            var P =
                k.isUser() && b
                  ? yield o(
                      "WAWebWorkerSafeBackendApi",
                    ).workerSafeSendAndReceive("getOrQueryUsyncInfo", {
                      wid: k,
                      forceUsync: !0,
                    })
                  : null,
              N = P == null ? k : P.wid;
            if (!k.equals(N)) {
              var M = yield o("WAWebApiChatCommon").getChatRecord(N);
              if (M != null) return;
            }
            var w = !1,
              A = !1,
              F = null;
            if ((P == null ? void 0 : P.bizInfo) != null) {
              var O, B;
              ((w = (O = P.bizInfo) == null ? void 0 : O.verifiedName.isApi),
                (A = (B = P.bizInfo) == null ? void 0 : B.verifiedName.isSmb),
                (F = o(
                  "WAWebPrivacyModeSystemMsg",
                ).getPrivacyModeFromQueryExistResponse(P)));
            } else if (P == null) {
              var W = yield o(
                "WAWebApiVerifiedBusinessName",
              ).getVerifiedBusinessNameRecordLidAware(N);
              W != null &&
                ((A = W.isSmb),
                (w = W.isApi),
                (F =
                  W.privacyMode != null
                    ? o(
                        "WAWebApiVerifiedBusinessName",
                      ).convertPrivacyModeFromStorageType(W.privacyMode)
                    : null));
            }
            var q =
              n != null ? babelHelpers.extends({}, n, { id: N }) : { id: N };
            if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(N)) {
              var U, V, H;
              ((q.accountLid = r("WANullthrows")(
                e.accountLid,
                "account lid not provided for one on one chat creation",
              )),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "createChat: new chat id=",
                      " lid=",
                      " pn=",
                      "",
                    ])),
                  N.toLogString(),
                  (U = q.accountLid) == null ? void 0 : U.toLogString(),
                  (V =
                    (H = o("WAWebLidMigrationUtils").toPn(N)) == null
                      ? void 0
                      : H.toLogString()) != null
                    ? V
                    : "n/a",
                ));
            }
            var G = N.isUser() && !N.isBot() ? yield E(N, w, y) : null;
            G != null &&
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] DM settings found for new chat",
                  ])),
              ),
              (q.ephemeralDuration = G.duration),
              (q.ephemeralSettingTimestamp = G.settingTimestamp),
              (q.disappearingModeInitiator = G.initiator),
              (q.disappearingModeTrigger = G.disappearingModeTrigger),
              (q.disappearingModeInitiatedByMe = G.initiatedByMe),
              G.afterReadDuration != null &&
                (q.afterReadDuration = G.afterReadDuration));
            var z = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(v, F);
            N.isUser() &&
              o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
                contactId: N,
                businessInfo: { privacyMode: z },
              });
            var j;
            (y == null ? void 0 : y.subtype) !== "ephemeral_setting" &&
              (j = L(
                N,
                G == null ? void 0 : G.duration,
                G == null ? void 0 : G.initiator,
                G == null ? void 0 : G.afterReadDuration,
              ));
            var K = o("WAWebBizGatingUtils").getFmxAgmEnabled(),
              Q =
                (y == null ? void 0 : y.ctwaContext) != null &&
                o(
                  "WAWebGetCTWAEligibilityFromConversion",
                ).getCTWAEligibilityFromConversion({
                  conversionData: y.ctwaContext.conversionData,
                  conversionSource: y.ctwaContext.conversionSource,
                }),
              X = y == null ? void 0 : y.ctwaContext,
              Y =
                (X == null ? void 0 : X.sourceApp) !==
                  o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP ||
                o("WAWebBizGatingUtils").getWamoAgmEnabled(),
              J = t === "signupAGM",
              Z = yield o("WAWebContactSystemMsg").genContactInfoCardMsg(N, {
                isSmb: A,
                isEnterprise:
                  w ||
                  (y == null
                    ? void 0
                    : y.senderOrRecipientAccountTypeHosted) === !0,
                iAmStartingChat: y == null || y.id.fromMe,
                isWASupportStartingChat: y != null && N.isCAPISupportAccount(),
                isFromCTWA: X != null && Q != null,
                isFMXCtWA:
                  X != null && Y && o("WAWebBizGatingUtils").getFmxAgmEnabled(),
                isSignupDeeplink: J,
              });
            Z != null &&
              o("WAWebFMXGatingUtils").fmxLoggingEnabled() &&
              new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
                fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                  .FMX_CARD,
                fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_INSERTED,
                isSenderSmb: A,
              }).commit();
            var ee;
            (A || w) && (ee = yield I(N));
            var te = yield r("WAWebInitialSystemMsg")(N, z, ee);
            te.some(function (e) {
              return e.subtype === "biz_bot_3p_disclosure";
            })
              ? (q.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_3P)
              : te.some(function (e) {
                  return e.subtype === "biz_bot_1p_disclosure";
                }) &&
                (q.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_1P);
            var ne = yield o("WAWebApiOrphanTcToken").getOrphanTcToken(N);
            if (ne) {
              var re, oe;
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: found orphan tc token for ",
                    "",
                  ])),
                N.toLogString(),
              ),
                (q.tcToken = (re = ne.tcToken) != null ? re : null),
                (q.tcTokenTimestamp =
                  (oe = ne.tcTokenTimestamp) != null ? oe : null),
                yield o("WAWebApiOrphanTcToken").removeOrphanTcToken(N));
            }
            try {
              if (
                !o(
                  "WAWebLid1X1MigrationGating",
                ).Lid1X1MigrationUtils.isLidMigrated() &&
                q.id.isRegularUserPn()
              ) {
                var ae = o("WAWebApiContact").getCurrentLid(q.id);
                ae != null && (q.originalLid = ae);
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "createChat: failed to get lid for ",
                      "",
                    ])),
                  q.id.toLogString(),
                )
                .catching(e)
                .sendLogs(
                  "createChat-lid-offline-resume-workaround-failed-chat",
                );
            }
            if (
              (yield o("WAWebBackendApi").frontendFireAndForget(
                "chatCollectionGadd",
                { chat: q },
              ),
              yield o("WAWebApiChat").createChatRecord(N, S(q)),
              Z != null &&
                !w &&
                o("WAWebFMXGatingUtils").isExpandFmxMexEnabled())
            ) {
              var ie = o(
                "WAWebFetchAndSetIntegritySignals",
              ).fetchAndSetIntegritySignals(N);
              o("WAWebBackendApi").frontendFireAndForget(
                "chatCollectionUpdate",
                { updates: [{ id: N, integritySignalsPromise: ie }] },
              );
            }
            var le = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                .NO_OVERWRITE,
              se = !1,
              ue = K
                ? [].concat(te, [Z, j]).filter(Boolean)
                : [Z].concat(te, [j]).filter(Boolean);
            if (h)
              o("WAWebGetMessageCache")
                .getMessageCache()
                .addMessages(
                  ue.map(function (e) {
                    return { msg: e };
                  }),
                  !1,
                );
            else {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: will add ",
                    " messages to chat ",
                    "",
                  ])),
                ue.length,
                N.toLogString(),
              );
              for (var ce of ue)
                yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
                  chatId: N,
                  newMsg: ce,
                  handleSingleMsgOrigin: "createChat",
                  messageOverwriteOption: le,
                  preserveOrder: se,
                });
            }
            if (e.chatId.isUser()) {
              var de = o("WAWebWidFactory").createUserWidOrThrow(
                  e.chatId.toString(),
                ),
                me = de.toJid(),
                pe = o("WAWebApiContact").getContactHash(me),
                _e = { id: me, contactHash: pe },
                fe;
              (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                ((fe = yield o(
                  "WAWebApiContactUsernameFields",
                ).getOrFetchContactUsernameCountryCode(N)),
                fe != null && (_e.usernameCountryCode = fe)),
                yield r("WAWebLidAwareContactsDB").createOrMerge(me, _e));
            }
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(t) {
      var n,
        r,
        a,
        i,
        l,
        s,
        u,
        c = {
          id: t.id.toString(),
          accountLid: (n = t.accountLid) == null ? void 0 : n.toString(),
          t: t.t,
          isAutoMuted: !1,
          unreadCount: (r = t.unreadCount) != null ? r : 0,
          notSpam: t.notSpam,
          ephemeralDuration: t.ephemeralDuration,
          ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
          disappearingModeInitiator:
            (t.disappearingModeInitiator != null, t.disappearingModeInitiator),
          tcToken: (a = t.tcToken) != null ? a : void 0,
          tcTokenTimestamp: (i = t.tcTokenTimestamp) != null ? i : void 0,
          tcTokenSenderTimestamp:
            (l = t.tcTokenSenderTimestamp) != null ? l : void 0,
          bizBotSystemMsgType: t.bizBotSystemMsgType,
          lidOriginType: t.lidOriginType,
          createdLocally: (s = t.createdLocally) != null ? s : !1,
        };
      ((c.disappearingModeTrigger =
        (t.disappearingModeTrigger != null, t.disappearingModeTrigger)),
        (c.disappearingModeInitiatedByMe =
          (u = t.disappearingModeInitiatedByMe) != null ? u : void 0));
      var d = t;
      (d.isUsernameThreadAtCreation != null &&
        (c.isUsernameThreadAtCreation = d.isUsernameThreadAtCreation),
        d.isSenderNewAccount != null &&
          (c.isSenderNewAccount = d.isSenderNewAccount),
        t.name != null && (c.name = t.name),
        t.isReadOnly != null && (c.isReadOnly = t.isReadOnly),
        t.muteExpiration != null && (c.muteExpiration = t.muteExpiration));
      try {
        var m = t;
        m.originalLid != null && (c.originalLid = m.originalLid.toString());
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "createChatObjectForStorage: failed",
              ])),
          )
          .catching(t)
          .sendLogs(
            "createChat-lid-offline-resume-workaround-failed-conversion",
          );
      }
      return c;
    }
    function R(e) {
      var t = S(e);
      return r("lodash").pickBy(t, function (e) {
        return e != null;
      });
    }
    function L(e, t, n, r) {
      var a = null;
      return (
        t != null &&
          (n ===
          o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat
            ? (a = o(
                "WAWebContactSystemMsg",
              ).genDisappearingModeUpdateSystemMsg(e, t, null))
            : (a = o(
                "WAWebContactSystemMsg",
              ).genDefaultDisappearingModeSystemMsg(
                e,
                t,
                n ===
                  o("WAWebEphemeralityTypes").DisappearingModeInitiator
                    .InitiatedByMe,
                r,
              ))),
        a
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "getDisappearingModeSettingForNewChat",
              ])),
          );
          var a = yield (C || (C = n("Promise"))).all([
              o("WAWebApiContact").getContactRecord(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              ),
              o("WAWebApiContact").getContactRecord(e),
            ]),
            i = a[0],
            l = a[1];
          if (
            l &&
            o(
              "WAWebEphemeralityUtils",
            ).isEphemeralityDisabledForMessagingWithContact(l)
          )
            return (
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "getDisappearingModeSettingForNewChat: ephemerality disabled",
                  ])),
              ),
              null
            );
          if (!t && e.isUser() && !e.isPSA()) {
            var s = r == null || r.id.fromMe;
            if (s)
              return o("WAWebEphemeralityResolver").resolveNewChatDMSettings(
                i,
                l,
              );
            var u = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
              i,
            );
            return o(
              "WAWebEphemeralityResolver",
            ).resolveNewIncomingChatDMSettings(
              r
                ? o("WAWebMsgEphemerality").getMsgEphemeralitySettings(r)
                : null,
              u,
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
            n = yield o("WAWebApiBusinessProfile").getBusinessProfileRow(
              e.toString(),
            );
          if (n)
            return o("WAWebBotTypes").BizBotAutomatedType.cast(n.automatedType);
          var r = yield o("WAWebQueryBusinessProfile").queryBusinessProfile([
            { wid: e },
          ]);
          return (t = r[0]) == null || (t = t.profile) == null
            ? void 0
            : t.automated_type;
        })),
        T.apply(this, arguments)
      );
    }
    ((l.createChat = b), (l.createNewsletterObjectForStorage = R));
  },
  98,
);
