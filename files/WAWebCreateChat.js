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
    "WAWebChatViewMode.flow",
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
      y = r("JSResourceForInteraction")(
        "WAWebFetchBotProfileOnChatAdd",
      ).__setRef("WAWebCreateChat");
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(!e.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(e))
          )
            try {
              var t = yield y.load(),
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
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.createChatOrigin,
            n = e.destination,
            a = e.initialProps,
            i = e.options,
            l = i != null ? i : {},
            s = l.createdOffline,
            f = s === void 0 ? !1 : s,
            g = l.firstIncomingMsg,
            h = l.forceUsync,
            y = h === void 0 ? !1 : h,
            b = l.nextPrivacyMode,
            v = l.suppressInitialE2EENotice,
            S = v === void 0 ? !1 : v;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "createChat: ",
                "",
              ])),
            t,
          );
          var L = n.chatId;
          if (L.isLid()) {
            r("nullthrows")(
              a == null ? void 0 : a.lidOriginType,
              "Origin type is missing when creating LID chat",
            );
            var I = yield o("WAWebApiContact").getContactRecord(
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            );
            t === "username_contactless_search" &&
              (I == null ? void 0 : I.username) == null &&
              (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
                { lid: L, data: { shareOwnPn: !0 } },
              ]));
          }
          var D =
              L.isUser() && y
                ? yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                    "getOrQueryUsyncInfo",
                    { wid: L, forceUsync: !0 },
                  )
                : null,
            x = D == null ? L : D.wid;
          if (!L.equals(x)) {
            var $ = yield o("WAWebApiChatCommon").getChatRecord(x);
            if ($ != null) return;
          }
          var P = !1,
            N = !1,
            M = null;
          if ((D == null ? void 0 : D.bizInfo) != null) {
            var w, A;
            ((P = (w = D.bizInfo) == null ? void 0 : w.verifiedName.isApi),
              (N = (A = D.bizInfo) == null ? void 0 : A.verifiedName.isSmb),
              (M = o(
                "WAWebPrivacyModeSystemMsg",
              ).getPrivacyModeFromQueryExistResponse(D)));
          } else if (D == null) {
            var F = yield o(
              "WAWebApiVerifiedBusinessName",
            ).getVerifiedBusinessNameRecordLidAware(x);
            F != null &&
              ((N = F.isSmb),
              (P = F.isApi),
              (M =
                F.privacyMode != null
                  ? o(
                      "WAWebApiVerifiedBusinessName",
                    ).convertPrivacyModeFromStorageType(F.privacyMode)
                  : null));
          }
          var O =
            a != null ? babelHelpers.extends({}, a, { id: x }) : { id: x };
          if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(x)) {
            var B, W, q;
            ((O.accountLid = r("nullthrows")(
              n.accountLid,
              "account lid not provided for one on one chat creation",
            )),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: new chat id=",
                    " lid=",
                    " pn=",
                    "",
                  ])),
                x.toLogString(),
                (B = O.accountLid) == null ? void 0 : B.toLogString(),
                (W =
                  (q = o("WAWebLidMigrationUtils").toPn(x)) == null
                    ? void 0
                    : q.toLogString()) != null
                  ? W
                  : "n/a",
              ));
          }
          var U =
            x.isUser() && !x.isBot()
              ? yield k({ firstIncomingMsg: g, id: x, userIsEnterprise: P })
              : null;
          U != null &&
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] DM settings found for new chat",
                ])),
            ),
            (O.ephemeralDuration = U.duration),
            (O.ephemeralSettingTimestamp = U.settingTimestamp),
            (O.disappearingModeInitiator = U.initiator),
            (O.disappearingModeTrigger = U.disappearingModeTrigger),
            (O.disappearingModeInitiatedByMe = U.initiatedByMe),
            U.afterReadDuration != null &&
              (O.afterReadDuration = U.afterReadDuration));
          var V = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(b, M);
          x.isUser() &&
            o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
              contactId: x,
              businessInfo: { privacyMode: V },
            });
          var H;
          (g == null ? void 0 : g.subtype) !== "ephemeral_setting" &&
            (H = E(
              x,
              U == null ? void 0 : U.duration,
              U == null ? void 0 : U.initiator,
              U == null ? void 0 : U.afterReadDuration,
            ));
          var G =
              (g == null ? void 0 : g.ctwaContext) != null
                ? o(
                    "WAWebGetCTWAEligibilityFromConversion",
                  ).getCTWAEligibilityFromConversion({
                    conversionData: g.ctwaContext.conversionData,
                    conversionSource: g.ctwaContext.conversionSource,
                    ctwaSignals: g.ctwaContext.ctwaSignals,
                  })
                : null,
            z = g == null ? void 0 : g.ctwaContext,
            j =
              (z == null ? void 0 : z.sourceApp) !==
              o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP,
            K = t === "signupAGM",
            Q = z != null && G != null && !G.is3pdag,
            X = g == null || g.id.fromMe,
            Y = z != null && j,
            J = yield o("WAWebContactSystemMsg").genContactInfoCardMsg(x, {
              isSmb: N,
              isEnterprise:
                P ||
                (g == null ? void 0 : g.senderOrRecipientAccountTypeHosted) ===
                  !0,
              iAmStartingChat: X,
              isWASupportStartingChat: g != null && x.isCAPISupportAccount(),
              isFromCTWA: Q,
              isFMXCtWA: Y,
              isSignupDeeplink: K,
            });
          (x.isUser() && X && !Y && (O.notSpam = !0),
            J != null &&
              new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
                fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                  .FMX_CARD,
                fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_INSERTED,
                isSenderSmb: N,
              }).commit());
          var Z;
          (N || P) && (Z = yield T(x));
          var ee = (yield r("WAWebInitialSystemMsg")(x, V, Z)).filter(
            function (e) {
              return !S || e.subtype !== "encrypt";
            },
          );
          ee.some(function (e) {
            return e.subtype === "biz_bot_3p_disclosure";
          })
            ? (O.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_3P)
            : ee.some(function (e) {
                return e.subtype === "biz_bot_1p_disclosure";
              }) &&
              (O.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_1P);
          var te = yield o("WAWebApiOrphanTcToken").getOrphanTcToken(x);
          if (te) {
            var ne, re;
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: found orphan tc token for ",
                  "",
                ])),
              x.toLogString(),
            ),
              (O.tcToken = (ne = te.tcToken) != null ? ne : null),
              (O.tcTokenTimestamp =
                (re = te.tcTokenTimestamp) != null ? re : null),
              yield o("WAWebApiOrphanTcToken").removeOrphanTcToken(x));
          }
          var oe;
          if (
            x.isLid() &&
            o(
              "WAWebUsernameGatingUtils",
            ).usernameAdoptionAndEngagementMonitoringEnabled()
          ) {
            var ae = o("WAWebLidMigrationUtils").toPn(x) != null;
            if (ae) O.isUsernameThreadAtCreation = !1;
            else {
              var ie;
              ((oe = yield o("WAWebApiContact").getContactRecord(x)),
                (O.isUsernameThreadAtCreation =
                  ((ie = oe) == null ? void 0 : ie.username) != null));
            }
          }
          if (
            (yield o("WAWebBackendApi").frontendFireAndForget(
              "chatCollectionGadd",
              { chat: O },
            ),
            yield o("WAWebApiChat").createChatRecord(x, R(O)),
            J != null &&
              !N &&
              !P &&
              o("WAWebFMXGatingUtils").isExpandFmxMexEnabled())
          ) {
            var le = o(
              "WAWebFetchAndSetIntegritySignals",
            ).fetchAndSetIntegritySignals(x);
            o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
              updates: [{ id: x, integritySignalsPromise: le }],
            });
          }
          var se = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
              .NO_OVERWRITE,
            ue = !1,
            ce = [].concat(ee, [J, H]).filter(Boolean);
          if (f)
            o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages(
                ce.map(function (e) {
                  return { msg: e };
                }),
                !1,
              )
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "createChat: failed to add messages to the message cache",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("createChat-add-messages-failed");
              });
          else {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: will add ",
                  " messages to chat ",
                  "",
                ])),
              ce.length,
              x.toLogString(),
            );
            for (var de of ce)
              yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: x,
                newMsg: de,
                handleSingleMsgOrigin: "createChat",
                messageOverwriteOption: se,
                preserveOrder: ue,
              });
          }
          if (n.chatId.isUser()) {
            var me = o("WAWebWidFactory").createUserWidOrThrow(
                n.chatId.toString(),
              ),
              pe = me.toJid(),
              _e = o("WAWebApiContact").getContactHash(pe),
              fe = { id: pe, contactHash: _e },
              ge;
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
              var he, ye;
              ((ge =
                (he = (ye = oe) == null ? void 0 : ye.usernameCountryCode) !=
                null
                  ? he
                  : yield o(
                      "WAWebApiContactUsernameFields",
                    ).getOrFetchContactUsernameCountryCode(x)),
                ge != null && (fe.usernameCountryCode = ge));
            }
            yield r("WAWebLidAwareContactsDB").createOrMerge(pe, fe);
          }
          C(n.chatId);
        })),
        S.apply(this, arguments)
      );
    }
    function R(t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m = {
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
          chatViewMode:
            (u = t.chatViewMode) != null
              ? u
              : o("WAWebChatViewMode.flow").ChatViewModeType.VISIBLE,
          lidOriginType: t.lidOriginType,
          createdLocally: (c = t.createdLocally) != null ? c : !1,
        };
      ((m.disappearingModeTrigger =
        (t.disappearingModeTrigger != null, t.disappearingModeTrigger)),
        (m.disappearingModeInitiatedByMe =
          (d = t.disappearingModeInitiatedByMe) != null ? d : void 0));
      var p = t;
      (p.isUsernameThreadAtCreation != null &&
        (m.isUsernameThreadAtCreation = p.isUsernameThreadAtCreation),
        p.isSenderNewAccount != null &&
          (m.isSenderNewAccount = p.isSenderNewAccount),
        t.name != null && (m.name = t.name),
        t.isReadOnly != null && (m.isReadOnly = t.isReadOnly),
        t.muteExpiration != null && (m.muteExpiration = t.muteExpiration));
      try {
        var _ = t;
        _.originalLid != null && (m.originalLid = _.originalLid.toString());
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
      return m;
    }
    function L(e) {
      return o("WAFilterObjectNullishProps").filterObjectNullishProps(R(e));
    }
    function E(e, t, n, r) {
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
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.firstIncomingMsg,
            r = e.id,
            a = e.userIsEnterprise;
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "getDisappearingModeSettingForNewChat",
              ])),
          );
          var i = yield (h || (h = n("Promise"))).all([
              o("WAWebApiContact").getContactRecord(
                o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              ),
              o("WAWebApiContact").getContactRecord(r),
            ]),
            l = i[0],
            s = i[1];
          if (
            s &&
            o(
              "WAWebEphemeralityUtils",
            ).isEphemeralityDisabledForMessagingWithContact(s)
          )
            return (
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "getDisappearingModeSettingForNewChat: ephemerality disabled",
                  ])),
              ),
              null
            );
          if (!a && r.isUser() && !r.isPSA()) {
            var u = t == null || t.id.fromMe;
            if (u)
              return o("WAWebEphemeralityResolver").resolveNewChatDMSettings(
                l,
                s,
              );
            var c = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
              l,
            );
            return o(
              "WAWebEphemeralityResolver",
            ).resolveNewIncomingChatDMSettings(
              t
                ? o("WAWebMsgEphemerality").getMsgEphemeralitySettings(t)
                : null,
              c,
            );
          }
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
        D.apply(this, arguments)
      );
    }
    ((l.createChat = v), (l.createNewsletterObjectForStorage = L));
  },
  98,
);
