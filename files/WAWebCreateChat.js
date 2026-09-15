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
    "WAWebBotBaseGating",
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
      v = r("JSResourceForInteraction")(
        "WAWebFetchBotProfileOnChatAdd",
      ).__setRef("WAWebCreateChat");
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              !e.isFbidBot() ||
              !o("WAWebBotBaseGating").isStandardBotProfileEnabled() ||
              o("WAWebBotStaticProfiles").isStaticProfile(e)
            )
          )
            try {
              var t = yield v.load(),
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
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.createChatOrigin,
            n = e.destination,
            a = e.initialProps,
            i = e.options,
            l = i != null ? i : {},
            s = l.createdOffline,
            y = s === void 0 ? !1 : s,
            C = l.firstIncomingMsg,
            b = l.forceUsync,
            v = b === void 0 ? !1 : b,
            R = l.nextPrivacyMode;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "createChat: ",
                "",
              ])),
            t,
          );
          var L = n.chatId,
            E = L;
          if (L.isLid()) {
            r("nullthrows")(
              a == null ? void 0 : a.lidOriginType,
              "Origin type is missing when creating LID chat",
            );
            var I = o("WAWebApiContact").getPhoneNumber(L),
              x = !o("WAWebChatOriginTypes").VALID_LID_ORIGINS.has(t),
              P =
                o("WAWebChatOriginTypes").VALID_USERNAME_ORIGINS.has(t) &&
                I != null;
            P &&
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
                I != null && (E = I))
              : x &&
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
            var N = yield o("WAWebApiContact").getContactRecord(
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            );
            t === "username_contactless_search" &&
              (N == null ? void 0 : N.username) == null &&
              (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
                { lid: L, data: { shareOwnPn: !0 } },
              ]));
          }
          var M =
              E.isUser() && v
                ? yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                    "getOrQueryUsyncInfo",
                    { wid: E, forceUsync: !0 },
                  )
                : null,
            w = M == null ? E : M.wid;
          if (!E.equals(w)) {
            var A = yield o("WAWebApiChatCommon").getChatRecord(w);
            if (A != null) return;
          }
          var F = !1,
            O = !1,
            B = null;
          if ((M == null ? void 0 : M.bizInfo) != null) {
            var W, q;
            ((F = (W = M.bizInfo) == null ? void 0 : W.verifiedName.isApi),
              (O = (q = M.bizInfo) == null ? void 0 : q.verifiedName.isSmb),
              (B = o(
                "WAWebPrivacyModeSystemMsg",
              ).getPrivacyModeFromQueryExistResponse(M)));
          } else if (M == null) {
            var U = yield o(
              "WAWebApiVerifiedBusinessName",
            ).getVerifiedBusinessNameRecordLidAware(w);
            U != null &&
              ((O = U.isSmb),
              (F = U.isApi),
              (B =
                U.privacyMode != null
                  ? o(
                      "WAWebApiVerifiedBusinessName",
                    ).convertPrivacyModeFromStorageType(U.privacyMode)
                  : null));
          }
          var V =
            a != null ? babelHelpers.extends({}, a, { id: w }) : { id: w };
          if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(w)) {
            var H, G, z;
            ((V.accountLid = r("nullthrows")(
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
                w.toLogString(),
                (H = V.accountLid) == null ? void 0 : H.toLogString(),
                (G =
                  (z = o("WAWebLidMigrationUtils").toPn(w)) == null
                    ? void 0
                    : z.toLogString()) != null
                  ? G
                  : "n/a",
              ));
          }
          var j = w.isUser() && !w.isBot() ? yield D(w, F, C) : null;
          j != null &&
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] DM settings found for new chat",
                ])),
            ),
            (V.ephemeralDuration = j.duration),
            (V.ephemeralSettingTimestamp = j.settingTimestamp),
            (V.disappearingModeInitiator = j.initiator),
            (V.disappearingModeTrigger = j.disappearingModeTrigger),
            (V.disappearingModeInitiatedByMe = j.initiatedByMe),
            j.afterReadDuration != null &&
              (V.afterReadDuration = j.afterReadDuration));
          var K = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(R, B);
          w.isUser() &&
            o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
              contactId: w,
              businessInfo: { privacyMode: K },
            });
          var Q;
          (C == null ? void 0 : C.subtype) !== "ephemeral_setting" &&
            (Q = T(
              w,
              j == null ? void 0 : j.duration,
              j == null ? void 0 : j.initiator,
              j == null ? void 0 : j.afterReadDuration,
            ));
          var X =
              (C == null ? void 0 : C.ctwaContext) != null
                ? o(
                    "WAWebGetCTWAEligibilityFromConversion",
                  ).getCTWAEligibilityFromConversion({
                    conversionData: C.ctwaContext.conversionData,
                    conversionSource: C.ctwaContext.conversionSource,
                    ctwaSignals: C.ctwaContext.ctwaSignals,
                  })
                : null,
            Y = C == null ? void 0 : C.ctwaContext,
            J =
              (Y == null ? void 0 : Y.sourceApp) !==
              o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP,
            Z = t === "signupAGM",
            ee = Y != null && X != null && !X.is3pdag,
            te = C == null || C.id.fromMe,
            ne = Y != null && J,
            re = yield o("WAWebContactSystemMsg").genContactInfoCardMsg(w, {
              isSmb: O,
              isEnterprise:
                F ||
                (C == null ? void 0 : C.senderOrRecipientAccountTypeHosted) ===
                  !0,
              iAmStartingChat: te,
              isWASupportStartingChat: C != null && w.isCAPISupportAccount(),
              isFromCTWA: ee,
              isFMXCtWA: ne,
              isSignupDeeplink: Z,
            });
          (w.isUser() && te && !ne && (V.notSpam = !0),
            re != null &&
              new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
                fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                  .FMX_CARD,
                fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_INSERTED,
                isSenderSmb: O,
              }).commit());
          var oe;
          (O || F) && (oe = yield $(w));
          var ae = yield r("WAWebInitialSystemMsg")(w, K, oe);
          ae.some(function (e) {
            return e.subtype === "biz_bot_3p_disclosure";
          })
            ? (V.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_3P)
            : ae.some(function (e) {
                return e.subtype === "biz_bot_1p_disclosure";
              }) &&
              (V.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_1P);
          var ie = yield o("WAWebApiOrphanTcToken").getOrphanTcToken(w);
          if (ie) {
            var le, se;
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: found orphan tc token for ",
                  "",
                ])),
              w.toLogString(),
            ),
              (V.tcToken = (le = ie.tcToken) != null ? le : null),
              (V.tcTokenTimestamp =
                (se = ie.tcTokenTimestamp) != null ? se : null),
              yield o("WAWebApiOrphanTcToken").removeOrphanTcToken(w));
          }
          try {
            if (
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() &&
              V.id.isRegularUserPn()
            ) {
              var ue = o("WAWebApiContact").getCurrentLid(V.id);
              ue != null && (V.originalLid = ue);
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: failed to get lid for ",
                    "",
                  ])),
                V.id.toLogString(),
              )
              .catching(e)
              .sendLogs("createChat-lid-offline-resume-workaround-failed-chat");
          }
          var ce;
          if (
            w.isLid() &&
            o(
              "WAWebUsernameGatingUtils",
            ).usernameAdoptionAndEngagementMonitoringEnabled()
          ) {
            var de = o("WAWebLidMigrationUtils").toPn(w) != null;
            if (de) V.isUsernameThreadAtCreation = !1;
            else {
              var me;
              ((ce = yield o("WAWebApiContact").getContactRecord(w)),
                (V.isUsernameThreadAtCreation =
                  ((me = ce) == null ? void 0 : me.username) != null));
            }
          }
          if (
            (yield o("WAWebBackendApi").frontendFireAndForget(
              "chatCollectionGadd",
              { chat: V },
            ),
            yield o("WAWebApiChat").createChatRecord(w, k(V)),
            re != null &&
              !O &&
              !F &&
              o("WAWebFMXGatingUtils").isExpandFmxMexEnabled())
          ) {
            var pe = o(
              "WAWebFetchAndSetIntegritySignals",
            ).fetchAndSetIntegritySignals(w);
            o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
              updates: [{ id: w, integritySignalsPromise: pe }],
            });
          }
          var _e = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
              .NO_OVERWRITE,
            fe = !1,
            ge = [].concat(ae, [re, Q]).filter(Boolean);
          if (y)
            o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages(
                ge.map(function (e) {
                  return { msg: e };
                }),
                !1,
              );
          else {
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: will add ",
                  " messages to chat ",
                  "",
                ])),
              ge.length,
              w.toLogString(),
            );
            for (var he of ge)
              yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: w,
                newMsg: he,
                handleSingleMsgOrigin: "createChat",
                messageOverwriteOption: _e,
                preserveOrder: fe,
              });
          }
          if (n.chatId.isUser()) {
            var ye = o("WAWebWidFactory").createUserWidOrThrow(
                n.chatId.toString(),
              ),
              Ce = ye.toJid(),
              be = o("WAWebApiContact").getContactHash(Ce),
              ve = { id: Ce, contactHash: be },
              Se;
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
              var Re, Le;
              ((Se =
                (Re = (Le = ce) == null ? void 0 : Le.usernameCountryCode) !=
                null
                  ? Re
                  : yield o(
                      "WAWebApiContactUsernameFields",
                    ).getOrFetchContactUsernameCountryCode(w)),
                Se != null && (ve.usernameCountryCode = Se));
            }
            yield r("WAWebLidAwareContactsDB").createOrMerge(Ce, ve);
          }
          S(n.chatId);
        })),
        E.apply(this, arguments)
      );
    }
    function k(t) {
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
    function I(e) {
      return o("WAFilterObjectNullishProps").filterObjectNullishProps(k(e));
    }
    function T(e, t, n, r) {
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
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "getDisappearingModeSettingForNewChat",
              ])),
          );
          var a = yield (b || (b = n("Promise"))).all([
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
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        P.apply(this, arguments)
      );
    }
    ((l.createChat = L), (l.createNewsletterObjectForStorage = I));
  },
  98,
);
