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
            L = l.nextPrivacyMode,
            E = l.suppressInitialE2EENotice,
            k = E === void 0 ? !1 : E;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "createChat: ",
                "",
              ])),
            t,
          );
          var T = n.chatId,
            $ = T;
          if (T.isLid()) {
            r("nullthrows")(
              a == null ? void 0 : a.lidOriginType,
              "Origin type is missing when creating LID chat",
            );
            var N = o("WAWebApiContact").getPhoneNumber(T),
              M = !o("WAWebChatOriginTypes").VALID_LID_ORIGINS.has(t),
              w =
                o("WAWebChatOriginTypes").VALID_USERNAME_ORIGINS.has(t) &&
                N != null;
            w &&
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
                N != null && ($ = N))
              : M &&
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
            var A = yield o("WAWebApiContact").getContactRecord(
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            );
            t === "username_contactless_search" &&
              (A == null ? void 0 : A.username) == null &&
              (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
                { lid: T, data: { shareOwnPn: !0 } },
              ]));
          }
          var F =
              $.isUser() && S
                ? yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                    "getOrQueryUsyncInfo",
                    { wid: $, forceUsync: !0 },
                  )
                : null,
            O = F == null ? $ : F.wid;
          if (!$.equals(O)) {
            var B = yield o("WAWebApiChatCommon").getChatRecord(O);
            if (B != null) return;
          }
          var W = !1,
            q = !1,
            U = null;
          if ((F == null ? void 0 : F.bizInfo) != null) {
            var V, H;
            ((W = (V = F.bizInfo) == null ? void 0 : V.verifiedName.isApi),
              (q = (H = F.bizInfo) == null ? void 0 : H.verifiedName.isSmb),
              (U = o(
                "WAWebPrivacyModeSystemMsg",
              ).getPrivacyModeFromQueryExistResponse(F)));
          } else if (F == null) {
            var G = yield o(
              "WAWebApiVerifiedBusinessName",
            ).getVerifiedBusinessNameRecordLidAware(O);
            G != null &&
              ((q = G.isSmb),
              (W = G.isApi),
              (U =
                G.privacyMode != null
                  ? o(
                      "WAWebApiVerifiedBusinessName",
                    ).convertPrivacyModeFromStorageType(G.privacyMode)
                  : null));
          }
          var z =
            a != null ? babelHelpers.extends({}, a, { id: O }) : { id: O };
          if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(O)) {
            var j, K, Q;
            ((z.accountLid = r("nullthrows")(
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
                O.toLogString(),
                (j = z.accountLid) == null ? void 0 : j.toLogString(),
                (K =
                  (Q = o("WAWebLidMigrationUtils").toPn(O)) == null
                    ? void 0
                    : Q.toLogString()) != null
                  ? K
                  : "n/a",
              ));
          }
          var X = O.isUser() && !O.isBot() ? yield x(O, W, b) : null;
          X != null &&
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] DM settings found for new chat",
                ])),
            ),
            (z.ephemeralDuration = X.duration),
            (z.ephemeralSettingTimestamp = X.settingTimestamp),
            (z.disappearingModeInitiator = X.initiator),
            (z.disappearingModeTrigger = X.disappearingModeTrigger),
            (z.disappearingModeInitiatedByMe = X.initiatedByMe),
            X.afterReadDuration != null &&
              (z.afterReadDuration = X.afterReadDuration));
          var Y = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(L, U);
          O.isUser() &&
            o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
              contactId: O,
              businessInfo: { privacyMode: Y },
            });
          var J;
          (b == null ? void 0 : b.subtype) !== "ephemeral_setting" &&
            (J = D(
              O,
              X == null ? void 0 : X.duration,
              X == null ? void 0 : X.initiator,
              X == null ? void 0 : X.afterReadDuration,
            ));
          var Z =
              (b == null ? void 0 : b.ctwaContext) != null
                ? o(
                    "WAWebGetCTWAEligibilityFromConversion",
                  ).getCTWAEligibilityFromConversion({
                    conversionData: b.ctwaContext.conversionData,
                    conversionSource: b.ctwaContext.conversionSource,
                    ctwaSignals: b.ctwaContext.ctwaSignals,
                  })
                : null,
            ee = b == null ? void 0 : b.ctwaContext,
            te =
              (ee == null ? void 0 : ee.sourceApp) !==
              o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP,
            ne = t === "signupAGM",
            re = ee != null && Z != null && !Z.is3pdag,
            oe = b == null || b.id.fromMe,
            ae = ee != null && te,
            ie = yield o("WAWebContactSystemMsg").genContactInfoCardMsg(O, {
              isSmb: q,
              isEnterprise:
                W ||
                (b == null ? void 0 : b.senderOrRecipientAccountTypeHosted) ===
                  !0,
              iAmStartingChat: oe,
              isWASupportStartingChat: b != null && O.isCAPISupportAccount(),
              isFromCTWA: re,
              isFMXCtWA: ae,
              isSignupDeeplink: ne,
            });
          (O.isUser() && oe && !ae && (z.notSpam = !0),
            ie != null &&
              new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
                fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                  .FMX_CARD,
                fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_INSERTED,
                isSenderSmb: q,
              }).commit());
          var le;
          (q || W) && (le = yield P(O));
          var se = (yield r("WAWebInitialSystemMsg")(O, Y, le)).filter(
            function (e) {
              return !k || e.subtype !== "encrypt";
            },
          );
          se.some(function (e) {
            return e.subtype === "biz_bot_3p_disclosure";
          })
            ? (z.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_3P)
            : se.some(function (e) {
                return e.subtype === "biz_bot_1p_disclosure";
              }) &&
              (z.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_1P);
          var ue = yield o("WAWebApiOrphanTcToken").getOrphanTcToken(O);
          if (ue) {
            var ce, de;
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: found orphan tc token for ",
                  "",
                ])),
              O.toLogString(),
            ),
              (z.tcToken = (ce = ue.tcToken) != null ? ce : null),
              (z.tcTokenTimestamp =
                (de = ue.tcTokenTimestamp) != null ? de : null),
              yield o("WAWebApiOrphanTcToken").removeOrphanTcToken(O));
          }
          try {
            if (
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() &&
              z.id.isRegularUserPn()
            ) {
              var me = o("WAWebApiContact").getCurrentLid(z.id);
              me != null && (z.originalLid = me);
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: failed to get lid for ",
                    "",
                  ])),
                z.id.toLogString(),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("createChat-lid-offline-resume-workaround-failed-chat");
          }
          var pe;
          if (
            O.isLid() &&
            o(
              "WAWebUsernameGatingUtils",
            ).usernameAdoptionAndEngagementMonitoringEnabled()
          ) {
            var _e = o("WAWebLidMigrationUtils").toPn(O) != null;
            if (_e) z.isUsernameThreadAtCreation = !1;
            else {
              var fe;
              ((pe = yield o("WAWebApiContact").getContactRecord(O)),
                (z.isUsernameThreadAtCreation =
                  ((fe = pe) == null ? void 0 : fe.username) != null));
            }
          }
          if (
            (yield o("WAWebBackendApi").frontendFireAndForget(
              "chatCollectionGadd",
              { chat: z },
            ),
            yield o("WAWebApiChat").createChatRecord(O, I(z)),
            ie != null &&
              !q &&
              !W &&
              o("WAWebFMXGatingUtils").isExpandFmxMexEnabled())
          ) {
            var ge = o(
              "WAWebFetchAndSetIntegritySignals",
            ).fetchAndSetIntegritySignals(O);
            o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
              updates: [{ id: O, integritySignalsPromise: ge }],
            });
          }
          var he = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
              .NO_OVERWRITE,
            ye = !1,
            Ce = [].concat(se, [ie, J]).filter(Boolean);
          if (C)
            o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages(
                Ce.map(function (e) {
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
              Ce.length,
              O.toLogString(),
            );
            for (var be of Ce)
              yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: O,
                newMsg: be,
                handleSingleMsgOrigin: "createChat",
                messageOverwriteOption: he,
                preserveOrder: ye,
              });
          }
          if (n.chatId.isUser()) {
            var ve = o("WAWebWidFactory").createUserWidOrThrow(
                n.chatId.toString(),
              ),
              Se = ve.toJid(),
              Re = o("WAWebApiContact").getContactHash(Se),
              Le = { id: Se, contactHash: Re },
              Ee;
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
              var ke, Ie;
              ((Ee =
                (ke = (Ie = pe) == null ? void 0 : Ie.usernameCountryCode) !=
                null
                  ? ke
                  : yield o(
                      "WAWebApiContactUsernameFields",
                    ).getOrFetchContactUsernameCountryCode(O)),
                Ee != null && (Le.usernameCountryCode = Ee));
            }
            yield r("WAWebLidAwareContactsDB").createOrMerge(Se, Le);
          }
          R(n.chatId);
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        d = {
          id: t.id.toString(),
          accountLid: (n = t.accountLid) == null ? void 0 : n.toString(),
          t: t.t,
          isAutoMuted: !1,
          unreadCount: (a = t.unreadCount) != null ? a : 0,
          notSpam: t.notSpam,
          ephemeralDuration: t.ephemeralDuration,
          ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
          disappearingModeInitiator:
            (t.disappearingModeInitiator != null, t.disappearingModeInitiator),
          tcToken: (i = t.tcToken) != null ? i : void 0,
          tcTokenTimestamp: (l = t.tcTokenTimestamp) != null ? l : void 0,
          tcTokenSenderTimestamp:
            (s = t.tcTokenSenderTimestamp) != null ? s : void 0,
          bizBotSystemMsgType: t.bizBotSystemMsgType,
          lidOriginType: t.lidOriginType,
          createdLocally: (u = t.createdLocally) != null ? u : !1,
        };
      ((d.disappearingModeTrigger =
        (t.disappearingModeTrigger != null, t.disappearingModeTrigger)),
        (d.disappearingModeInitiatedByMe =
          (c = t.disappearingModeInitiatedByMe) != null ? c : void 0));
      var m = t;
      (m.isUsernameThreadAtCreation != null &&
        (d.isUsernameThreadAtCreation = m.isUsernameThreadAtCreation),
        m.isSenderNewAccount != null &&
          (d.isSenderNewAccount = m.isSenderNewAccount),
        t.name != null && (d.name = t.name),
        t.isReadOnly != null && (d.isReadOnly = t.isReadOnly),
        t.muteExpiration != null && (d.muteExpiration = t.muteExpiration));
      try {
        var p = t;
        p.originalLid != null && (d.originalLid = p.originalLid.toString());
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "createChatObjectForStorage: failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs(
            "createChat-lid-offline-resume-workaround-failed-conversion",
          );
      }
      return d;
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
