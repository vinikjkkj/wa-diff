__d(
  "WAWebCreateChat",
  [
    "JSResourceForInteraction",
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
    "WAWebBotStaticProfiles",
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
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = r("JSResourceForInteraction")(
        "WAWebFetchBotProfileOnChatAdd",
      ).__setRef("WAWebCreateChat");
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(!e.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(e))
          )
            try {
              var t = yield S.load(),
                n = t.fetchBotProfileOnChatAdd;
              yield n(e);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "createChat: loading the bot profile fetch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-chat-add-profile-load-failed");
            }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.createChatOrigin,
            n = e.destination,
            a = e.initialProps,
            i = e.options,
            l = i != null ? i : {},
            s = l.createdOffline,
            C = s === void 0 ? !1 : s,
            b = l.firstIncomingMsg,
            v = l.forceUsync,
            S = v === void 0 ? !1 : v,
            L = l.nextPrivacyMode;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "createChat: ",
                "",
              ])),
            t,
          );
          var E = n.chatId,
            k = E;
          if (E.isLid()) {
            r("nullthrows")(
              a == null ? void 0 : a.lidOriginType,
              "Origin type is missing when creating LID chat",
            );
            var T = o("WAWebApiContact").getPhoneNumber(E),
              $ = !o("WAWebChatOriginTypes").VALID_LID_ORIGINS.has(t),
              N =
                o("WAWebChatOriginTypes").VALID_USERNAME_ORIGINS.has(t) &&
                T != null;
            N &&
            !o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated()
              ? (o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "createChat: ",
                        " username chat with known pn",
                      ])),
                    t,
                  )
                  .sendLogs("unexpected-username-lid-chat"),
                T != null && (k = T))
              : $ &&
                !o(
                  "WAWebLid1X1MigrationGating",
                ).Lid1X1MigrationUtils.isLidMigrated() &&
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "lid: ",
                      ", origin type: ",
                      "",
                    ])),
                  n.chatId.toLogString(),
                  a == null ? void 0 : a.lidOriginType,
                ),
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "createChat: ",
                        " unexpected lid chat created",
                      ])),
                    t,
                  )
                  .sendLogs("unexpected-lid-chat"));
            var M = yield o("WAWebApiContact").getContactRecord(
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            );
            t === "username_contactless_search" &&
              (M == null ? void 0 : M.username) == null &&
              (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
                { lid: E, data: { shareOwnPn: !0 } },
              ]));
          }
          var w =
              k.isUser() && S
                ? yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                    "getOrQueryUsyncInfo",
                    { wid: k, forceUsync: !0 },
                  )
                : null,
            A = w == null ? k : w.wid;
          if (!k.equals(A)) {
            var F = yield o("WAWebApiChatCommon").getChatRecord(A);
            if (F != null) return;
          }
          var O = !1,
            B = !1,
            W = null;
          if ((w == null ? void 0 : w.bizInfo) != null) {
            var q, U;
            ((O = (q = w.bizInfo) == null ? void 0 : q.verifiedName.isApi),
              (B = (U = w.bizInfo) == null ? void 0 : U.verifiedName.isSmb),
              (W = o(
                "WAWebPrivacyModeSystemMsg",
              ).getPrivacyModeFromQueryExistResponse(w)));
          } else if (w == null) {
            var V = yield o(
              "WAWebApiVerifiedBusinessName",
            ).getVerifiedBusinessNameRecordLidAware(A);
            V != null &&
              ((B = V.isSmb),
              (O = V.isApi),
              (W =
                V.privacyMode != null
                  ? o(
                      "WAWebApiVerifiedBusinessName",
                    ).convertPrivacyModeFromStorageType(V.privacyMode)
                  : null));
          }
          var H =
            a != null ? babelHelpers.extends({}, a, { id: A }) : { id: A };
          if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(A)) {
            var G, z, j;
            ((H.accountLid = r("nullthrows")(
              n.accountLid,
              "account lid not provided for one on one chat creation",
            )),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: new chat id=",
                    " lid=",
                    " pn=",
                    "",
                  ])),
                A.toLogString(),
                (G = H.accountLid) == null ? void 0 : G.toLogString(),
                (z =
                  (j = o("WAWebLidMigrationUtils").toPn(A)) == null
                    ? void 0
                    : j.toLogString()) != null
                  ? z
                  : "n/a",
              ));
          }
          var K = A.isUser() && !A.isBot() ? yield x(A, O, b) : null;
          K != null &&
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] DM settings found for new chat",
                ])),
            ),
            (H.ephemeralDuration = K.duration),
            (H.ephemeralSettingTimestamp = K.settingTimestamp),
            (H.disappearingModeInitiator = K.initiator),
            (H.disappearingModeTrigger = K.disappearingModeTrigger),
            (H.disappearingModeInitiatedByMe = K.initiatedByMe),
            K.afterReadDuration != null &&
              (H.afterReadDuration = K.afterReadDuration));
          var Q = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(L, W);
          A.isUser() &&
            o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
              contactId: A,
              businessInfo: { privacyMode: Q },
            });
          var X;
          (b == null ? void 0 : b.subtype) !== "ephemeral_setting" &&
            (X = D(
              A,
              K == null ? void 0 : K.duration,
              K == null ? void 0 : K.initiator,
              K == null ? void 0 : K.afterReadDuration,
            ));
          var Y =
              (b == null ? void 0 : b.ctwaContext) != null
                ? o(
                    "WAWebGetCTWAEligibilityFromConversion",
                  ).getCTWAEligibilityFromConversion({
                    conversionData: b.ctwaContext.conversionData,
                    conversionSource: b.ctwaContext.conversionSource,
                    ctwaSignals: b.ctwaContext.ctwaSignals,
                  })
                : null,
            J = b == null ? void 0 : b.ctwaContext,
            Z =
              (J == null ? void 0 : J.sourceApp) !==
              o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP,
            ee = t === "signupAGM",
            te = J != null && Y != null && !Y.is3pdag,
            ne = b == null || b.id.fromMe,
            re = J != null && Z,
            oe = yield o("WAWebContactSystemMsg").genContactInfoCardMsg(A, {
              isSmb: B,
              isEnterprise:
                O ||
                (b == null ? void 0 : b.senderOrRecipientAccountTypeHosted) ===
                  !0,
              iAmStartingChat: ne,
              isWASupportStartingChat: b != null && A.isCAPISupportAccount(),
              isFromCTWA: te,
              isFMXCtWA: re,
              isSignupDeeplink: ee,
            });
          (A.isUser() && ne && !re && (H.notSpam = !0),
            oe != null &&
              new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
                fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                  .FMX_CARD,
                fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_INSERTED,
                isSenderSmb: B,
              }).commit());
          var ae;
          (B || O) && (ae = yield P(A));
          var ie = yield r("WAWebInitialSystemMsg")(A, Q, ae);
          ie.some(function (e) {
            return e.subtype === "biz_bot_3p_disclosure";
          })
            ? (H.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_3P)
            : ie.some(function (e) {
                return e.subtype === "biz_bot_1p_disclosure";
              }) &&
              (H.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_1P);
          var le = yield o("WAWebApiOrphanTcToken").getOrphanTcToken(A);
          if (le) {
            var se, ue;
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: found orphan tc token for ",
                  "",
                ])),
              A.toLogString(),
            ),
              (H.tcToken = (se = le.tcToken) != null ? se : null),
              (H.tcTokenTimestamp =
                (ue = le.tcTokenTimestamp) != null ? ue : null),
              yield o("WAWebApiOrphanTcToken").removeOrphanTcToken(A));
          }
          try {
            if (
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() &&
              H.id.isRegularUserPn()
            ) {
              var ce = o("WAWebApiContact").getCurrentLid(H.id);
              ce != null && (H.originalLid = ce);
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: failed to get lid for ",
                    "",
                  ])),
                H.id.toLogString(),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("createChat-lid-offline-resume-workaround-failed-chat");
          }
          var de;
          if (
            A.isLid() &&
            o(
              "WAWebUsernameGatingUtils",
            ).usernameAdoptionAndEngagementMonitoringEnabled()
          ) {
            var me = o("WAWebLidMigrationUtils").toPn(A) != null;
            if (me) H.isUsernameThreadAtCreation = !1;
            else {
              var pe;
              ((de = yield o("WAWebApiContact").getContactRecord(A)),
                (H.isUsernameThreadAtCreation =
                  ((pe = de) == null ? void 0 : pe.username) != null));
            }
          }
          if (
            (yield o("WAWebBackendApi").frontendFireAndForget(
              "chatCollectionGadd",
              { chat: H },
            ),
            yield o("WAWebApiChat").createChatRecord(A, I(H)),
            oe != null &&
              !B &&
              !O &&
              o("WAWebFMXGatingUtils").isExpandFmxMexEnabled())
          ) {
            var _e = o(
              "WAWebFetchAndSetIntegritySignals",
            ).fetchAndSetIntegritySignals(A);
            o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
              updates: [{ id: A, integritySignalsPromise: _e }],
            });
          }
          var fe = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
              .NO_OVERWRITE,
            ge = !1,
            he = [].concat(ie, [oe, X]).filter(Boolean);
          if (C)
            o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages(
                he.map(function (e) {
                  return { msg: e };
                }),
                !1,
              )
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "createChat: failed to add messages to the message cache",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("createChat-add-messages-failed");
              });
          else {
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: will add ",
                  " messages to chat ",
                  "",
                ])),
              he.length,
              A.toLogString(),
            );
            for (var ye of he)
              yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: A,
                newMsg: ye,
                handleSingleMsgOrigin: "createChat",
                messageOverwriteOption: fe,
                preserveOrder: ge,
              });
          }
          if (n.chatId.isUser()) {
            var Ce = o("WAWebWidFactory").createUserWidOrThrow(
                n.chatId.toString(),
              ),
              be = Ce.toJid(),
              ve = o("WAWebApiContact").getContactHash(be),
              Se = { id: be, contactHash: ve },
              Re;
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
              var Le, Ee;
              ((Re =
                (Le = (Ee = de) == null ? void 0 : Ee.usernameCountryCode) !=
                null
                  ? Le
                  : yield o(
                      "WAWebApiContactUsernameFields",
                    ).getOrFetchContactUsernameCountryCode(A)),
                Re != null && (Se.usernameCountryCode = Re));
            }
            yield r("WAWebLidAwareContactsDB").createOrMerge(be, Se);
          }
          R(n.chatId);
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
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
    function T(e) {
      return o("WAFilterObjectNullishProps").filterObjectNullishProps(I(e));
    }
    function D(e, t, n, r) {
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
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "getDisappearingModeSettingForNewChat",
              ])),
          );
          var a = yield (v || (v = n("Promise"))).all([
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        N.apply(this, arguments)
      );
    }
    ((l.createChat = E), (l.createNewsletterObjectForStorage = T));
  },
  98,
);
