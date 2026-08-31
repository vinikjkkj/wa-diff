__d(
  "WAWebCreateChat",
  [
    "Promise",
    "WAFilterObjectNullishProps",
    "WALogger",
    "WAWebApiBusinessProfile",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebApiOrphanTcToken",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
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
    "WAWebHandleSingleMsgWorkerCompatible",
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
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.createChatOrigin,
            n = e.destination,
            a = e.initialProps,
            i = e.options,
            l = i != null ? i : {},
            h = l.createdOffline,
            y = h === void 0 ? !1 : h,
            C = l.firstIncomingMsg,
            b = l.forceUsync,
            v = b === void 0 ? !1 : b,
            R = l.nextPrivacyMode;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "createChat: ",
                "",
              ])),
            t,
          );
          var k = n.chatId,
            T = k;
          if (k.isLid()) {
            r("nullthrows")(
              a == null ? void 0 : a.lidOriginType,
              "Origin type is missing when creating LID chat",
            );
            var D = o("WAWebApiContact").getPhoneNumber(k),
              x = !o("WAWebChatOriginTypes").VALID_LID_ORIGINS.has(t),
              $ =
                o("WAWebChatOriginTypes").VALID_USERNAME_ORIGINS.has(t) &&
                D != null;
            $ &&
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
                D != null && (T = D))
              : x &&
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
                  n.chatId.toLogString(),
                  a == null ? void 0 : a.lidOriginType,
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
            var P = yield o("WAWebApiContact").getContactRecord(
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            );
            t === "username_contactless_search" &&
              (P == null ? void 0 : P.username) == null &&
              (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
                { lid: k, data: { shareOwnPn: !0 } },
              ]));
          }
          var N =
              T.isUser() && v
                ? yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                    "getOrQueryUsyncInfo",
                    { wid: T, forceUsync: !0 },
                  )
                : null,
            M = N == null ? T : N.wid;
          if (!T.equals(M)) {
            var w = yield o("WAWebApiChatCommon").getChatRecord(M);
            if (w != null) return;
          }
          var A = !1,
            F = !1,
            O = null;
          if ((N == null ? void 0 : N.bizInfo) != null) {
            var B, W;
            ((A = (B = N.bizInfo) == null ? void 0 : B.verifiedName.isApi),
              (F = (W = N.bizInfo) == null ? void 0 : W.verifiedName.isSmb),
              (O = o(
                "WAWebPrivacyModeSystemMsg",
              ).getPrivacyModeFromQueryExistResponse(N)));
          } else if (N == null) {
            var q = yield o(
              "WAWebApiVerifiedBusinessName",
            ).getVerifiedBusinessNameRecordLidAware(M);
            q != null &&
              ((F = q.isSmb),
              (A = q.isApi),
              (O =
                q.privacyMode != null
                  ? o(
                      "WAWebApiVerifiedBusinessName",
                    ).convertPrivacyModeFromStorageType(q.privacyMode)
                  : null));
          }
          var U =
            a != null ? babelHelpers.extends({}, a, { id: M }) : { id: M };
          if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(M)) {
            var V, H, G;
            ((U.accountLid = r("nullthrows")(
              n.accountLid,
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
                M.toLogString(),
                (V = U.accountLid) == null ? void 0 : V.toLogString(),
                (H =
                  (G = o("WAWebLidMigrationUtils").toPn(M)) == null
                    ? void 0
                    : G.toLogString()) != null
                  ? H
                  : "n/a",
              ));
          }
          var z = M.isUser() && !M.isBot() ? yield E(M, A, C) : null;
          z != null &&
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] DM settings found for new chat",
                ])),
            ),
            (U.ephemeralDuration = z.duration),
            (U.ephemeralSettingTimestamp = z.settingTimestamp),
            (U.disappearingModeInitiator = z.initiator),
            (U.disappearingModeTrigger = z.disappearingModeTrigger),
            (U.disappearingModeInitiatedByMe = z.initiatedByMe),
            z.afterReadDuration != null &&
              (U.afterReadDuration = z.afterReadDuration));
          var j = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(R, O);
          M.isUser() &&
            o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
              contactId: M,
              businessInfo: { privacyMode: j },
            });
          var K;
          (C == null ? void 0 : C.subtype) !== "ephemeral_setting" &&
            (K = L(
              M,
              z == null ? void 0 : z.duration,
              z == null ? void 0 : z.initiator,
              z == null ? void 0 : z.afterReadDuration,
            ));
          var Q =
              (C == null ? void 0 : C.ctwaContext) != null
                ? o(
                    "WAWebGetCTWAEligibilityFromConversion",
                  ).getCTWAEligibilityFromConversion({
                    conversionData: C.ctwaContext.conversionData,
                    conversionSource: C.ctwaContext.conversionSource,
                    ctwaSignals: C.ctwaContext.ctwaSignals,
                  })
                : null,
            X = C == null ? void 0 : C.ctwaContext,
            Y =
              (X == null ? void 0 : X.sourceApp) !==
              o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP,
            J = t === "signupAGM",
            Z = X != null && Q != null && !Q.is3pdag,
            ee = C == null || C.id.fromMe,
            te = X != null && Y,
            ne = yield o("WAWebContactSystemMsg").genContactInfoCardMsg(M, {
              isSmb: F,
              isEnterprise:
                A ||
                (C == null ? void 0 : C.senderOrRecipientAccountTypeHosted) ===
                  !0,
              iAmStartingChat: ee,
              isWASupportStartingChat: C != null && M.isCAPISupportAccount(),
              isFromCTWA: Z,
              isFMXCtWA: te,
              isSignupDeeplink: J,
            });
          (M.isUser() && ee && !te && (U.notSpam = !0),
            ne != null &&
              new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
                fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                  .FMX_CARD,
                fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_INSERTED,
                isSenderSmb: F,
              }).commit());
          var re;
          (F || A) && (re = yield I(M));
          var oe = yield r("WAWebInitialSystemMsg")(M, j, re);
          oe.some(function (e) {
            return e.subtype === "biz_bot_3p_disclosure";
          })
            ? (U.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_3P)
            : oe.some(function (e) {
                return e.subtype === "biz_bot_1p_disclosure";
              }) &&
              (U.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_1P);
          var ae = yield o("WAWebApiOrphanTcToken").getOrphanTcToken(M);
          if (ae) {
            var ie, le;
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: found orphan tc token for ",
                  "",
                ])),
              M.toLogString(),
            ),
              (U.tcToken = (ie = ae.tcToken) != null ? ie : null),
              (U.tcTokenTimestamp =
                (le = ae.tcTokenTimestamp) != null ? le : null),
              yield o("WAWebApiOrphanTcToken").removeOrphanTcToken(M));
          }
          try {
            if (
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() &&
              U.id.isRegularUserPn()
            ) {
              var se = o("WAWebApiContact").getCurrentLid(U.id);
              se != null && (U.originalLid = se);
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: failed to get lid for ",
                    "",
                  ])),
                U.id.toLogString(),
              )
              .catching(e)
              .sendLogs("createChat-lid-offline-resume-workaround-failed-chat");
          }
          var ue;
          if (
            M.isLid() &&
            o(
              "WAWebUsernameGatingUtils",
            ).usernameAdoptionAndEngagementMonitoringEnabled()
          ) {
            var ce = o("WAWebLidMigrationUtils").toPn(M) != null;
            if (ce) U.isUsernameThreadAtCreation = !1;
            else {
              var de;
              ((ue = yield o("WAWebApiContact").getContactRecord(M)),
                (U.isUsernameThreadAtCreation =
                  ((de = ue) == null ? void 0 : de.username) != null));
            }
          }
          if (
            (yield o("WAWebBackendApi").frontendFireAndForget(
              "chatCollectionGadd",
              { chat: U },
            ),
            yield o("WAWebApiChat").createChatRecord(M, S(U)),
            ne != null &&
              !F &&
              !A &&
              o("WAWebFMXGatingUtils").isExpandFmxMexEnabled())
          ) {
            var me = o(
              "WAWebFetchAndSetIntegritySignals",
            ).fetchAndSetIntegritySignals(M);
            o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
              updates: [{ id: M, integritySignalsPromise: me }],
            });
          }
          var pe = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
              .NO_OVERWRITE,
            _e = !1,
            fe = [].concat(oe, [ne, K]).filter(Boolean);
          if (y)
            o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages(
                fe.map(function (e) {
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
              fe.length,
              M.toLogString(),
            );
            for (var ge of fe)
              yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: M,
                newMsg: ge,
                handleSingleMsgOrigin: "createChat",
                messageOverwriteOption: pe,
                preserveOrder: _e,
              });
          }
          if (n.chatId.isUser()) {
            var he = o("WAWebWidFactory").createUserWidOrThrow(
                n.chatId.toString(),
              ),
              ye = he.toJid(),
              Ce = o("WAWebApiContact").getContactHash(ye),
              be = { id: ye, contactHash: Ce },
              ve;
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
              var Se, Re;
              ((ve =
                (Se = (Re = ue) == null ? void 0 : Re.usernameCountryCode) !=
                null
                  ? Se
                  : yield o(
                      "WAWebApiContactUsernameFields",
                    ).getOrFetchContactUsernameCountryCode(M)),
                ve != null && (be.usernameCountryCode = ve));
            }
            yield r("WAWebLidAwareContactsDB").createOrMerge(ye, be);
          }
        })),
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
      return o("WAFilterObjectNullishProps").filterObjectNullishProps(S(e));
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
              ).genDefaultDisappearingModeSystemMsg({
                afterReadDuration: r,
                chatId: e,
                duration: t,
                initiatedByMe:
                  n ===
                  o("WAWebEphemeralityTypes").DisappearingModeInitiator
                    .InitiatedByMe,
              }))),
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
                o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
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
