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
    "WAWebChatOpeningNotice",
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
    "WAWebHandleMsgTypes",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebInitialSystemMsg",
    "WAWebIsUserInitiatedOutgoingMsg",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebMsgEphemerality",
    "WAWebPrivacyModeSystemMsg",
    "WAWebPsFmxActionWamEvent",
    "WAWebQueryBusinessProfile",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:17538",
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
      b = r("JSResourceForInteraction")(
        "WAWebFetchBotProfileOnChatAdd",
      ).__setRef("WAWebCreateChat");
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(!e.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(e))
          )
            try {
              var t = yield b.load(),
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.createChatOrigin,
            a = e.destination,
            i = e.initialProps,
            l = e.options,
            s = l != null ? l : {},
            h = s.createdOffline,
            y = h === void 0 ? !1 : h,
            C = s.firstIncomingMsg,
            b = s.forceUsync,
            S = b === void 0 ? !1 : b,
            R = s.nextPrivacyMode,
            L = s.suppressInitialE2EENotice,
            I = L === void 0 ? !1 : L;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "createChat: ",
                "",
              ])),
            t,
          );
          var $ = a.chatId;
          if ($.isLid()) {
            r("nullthrows")(
              i == null ? void 0 : i.lidOriginType,
              "Origin type is missing when creating LID chat",
            );
            var M = yield o("WAWebApiContact").getContactRecord(
              o("WAWebUserUtils").getMeLidUserOrThrow(),
            );
            t === "username_contactless_search" &&
              (M == null ? void 0 : M.username) == null &&
              (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
                { lid: $, data: { shareOwnPn: !0 } },
              ]));
          }
          var A =
              $.isUser() && S
                ? yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                    "getOrQueryUsyncInfo",
                    { wid: $, forceUsync: !0 },
                  )
                : null,
            F = A == null ? $ : A.wid;
          if (!$.equals(F)) {
            var O = yield o("WAWebApiChatCommon").getChatRecord(F);
            if (O != null) return;
          }
          var B = !1,
            W = !1,
            q = null;
          if ((A == null ? void 0 : A.bizInfo) != null) {
            var U, V;
            ((B = (U = A.bizInfo) == null ? void 0 : U.verifiedName.isApi),
              (W = (V = A.bizInfo) == null ? void 0 : V.verifiedName.isSmb),
              (q = o(
                "WAWebPrivacyModeSystemMsg",
              ).getPrivacyModeFromQueryExistResponse(A)));
          } else if (A == null) {
            var H = yield o(
              "WAWebApiVerifiedBusinessName",
            ).getVerifiedBusinessNameRecordLidAware(F);
            H != null &&
              ((W = H.isSmb),
              (B = H.isApi),
              (q =
                H.privacyMode != null
                  ? o(
                      "WAWebApiVerifiedBusinessName",
                    ).convertPrivacyModeFromStorageType(H.privacyMode)
                  : null));
          }
          var G =
              i != null ? babelHelpers.extends({}, i, { id: F }) : { id: F },
            z = null;
          if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(F)) {
            var j,
              K,
              Q = r("nullthrows")(
                a.accountLid,
                "account lid not provided for one on one chat creation",
              );
            ((G.accountLid = Q),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: new chat id=",
                    " lid=",
                    " pn=",
                    "",
                  ])),
                F.toLogString(),
                Q.toLogString(),
                (j =
                  (K = o("WAWebLidMigrationUtils").toPn(F)) == null
                    ? void 0
                    : K.toLogString()) != null
                  ? j
                  : "n/a",
              ),
              (z = yield n("cr:17538") == null
                ? void 0
                : n("cr:17538").readNewChatNonE2eeState(Q)),
              z != null && (G.aeaThreadState = String(z.state)));
          }
          var X =
            F.isUser() && !F.isBot()
              ? yield N({ firstIncomingMsg: C, id: F, userIsEnterprise: B })
              : null;
          X != null &&
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] DM settings found for new chat",
                ])),
            ),
            (G.ephemeralDuration = X.duration),
            (G.ephemeralSettingTimestamp = X.settingTimestamp),
            (G.disappearingModeInitiator = X.initiator),
            (G.disappearingModeTrigger = X.disappearingModeTrigger),
            (G.disappearingModeInitiatedByMe = X.initiatedByMe),
            X.afterReadDuration != null &&
              (G.afterReadDuration = X.afterReadDuration));
          var Y = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(R, q);
          F.isUser() &&
            o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
              contactId: F,
              businessInfo: { privacyMode: Y },
            });
          var J;
          (C == null ? void 0 : C.subtype) !== "ephemeral_setting" &&
            (J = P(
              F,
              X == null ? void 0 : X.duration,
              X == null ? void 0 : X.initiator,
              X == null ? void 0 : X.afterReadDuration,
            ));
          var Z =
              (C == null ? void 0 : C.ctwaContext) != null
                ? o(
                    "WAWebGetCTWAEligibilityFromConversion",
                  ).getCTWAEligibilityFromConversion({
                    conversionData: C.ctwaContext.conversionData,
                    conversionSource: C.ctwaContext.conversionSource,
                    ctwaSignals: C.ctwaContext.ctwaSignals,
                  })
                : null,
            ee = C == null ? void 0 : C.ctwaContext,
            te =
              (ee == null ? void 0 : ee.sourceApp) !==
              o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP,
            ne = t === "signupAGM",
            re = ee != null && Z != null && !Z.is3pdag,
            oe = k(C),
            ae = ee != null && te,
            ie = yield o("WAWebContactSystemMsg").genContactInfoCardMsg(F, {
              isSmb: W,
              isEnterprise:
                B ||
                (C == null ? void 0 : C.senderOrRecipientAccountTypeHosted) ===
                  !0,
              iAmStartingChat: oe,
              isWASupportStartingChat: C != null && F.isCAPISupportAccount(),
              isFromCTWA: re,
              isFMXCtWA: ae,
              isSignupDeeplink: ne,
            });
          (F.isUser() && (G.notSpam = E(C, ae)),
            ie != null &&
              new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
                fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                  .FMX_CARD,
                fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_INSERTED,
                isSenderSmb: W,
              }).commit());
          var le;
          (W || B) && (le = yield w(F));
          var se = T(Y, z),
            ue = (yield r("WAWebInitialSystemMsg")(F, se, le)).filter(
              function (e) {
                return !I || e.subtype !== "encrypt";
              },
            );
          (z != null &&
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] createChat chat=",
                  " thread_state=",
                  " enforced=",
                  " e2ee_notice=",
                  "",
                ])),
              F.toLogString(),
              z.state,
              String(z.isEnforced),
              String(
                ue.some(function (e) {
                  return e.subtype === "encrypt";
                }),
              ),
            ),
            ue.some(function (e) {
              return e.subtype === "biz_bot_3p_disclosure";
            })
              ? (G.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_3P)
              : ue.some(function (e) {
                  return e.subtype === "biz_bot_1p_disclosure";
                }) &&
                (G.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_1P));
          var ce = yield o("WAWebApiOrphanTcToken").getOrphanTcToken(F);
          if (ce) {
            var de, me;
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: found orphan tc token for ",
                  "",
                ])),
              F.toLogString(),
            ),
              (G.tcToken = (de = ce.tcToken) != null ? de : null),
              (G.tcTokenTimestamp =
                (me = ce.tcTokenTimestamp) != null ? me : null),
              yield o("WAWebApiOrphanTcToken").removeOrphanTcToken(F));
          }
          var pe;
          if (
            F.isLid() &&
            o(
              "WAWebUsernameGatingUtils",
            ).usernameAdoptionAndEngagementMonitoringEnabled()
          ) {
            var _e = o("WAWebLidMigrationUtils").toPn(F) != null;
            if (_e) G.isUsernameThreadAtCreation = !1;
            else {
              var fe;
              ((pe = yield o("WAWebApiContact").getContactRecord(F)),
                (G.isUsernameThreadAtCreation =
                  ((fe = pe) == null ? void 0 : fe.username) != null));
            }
          }
          (yield o("WAWebBackendApi").frontendFireAndForget(
            "chatCollectionGadd",
            { chat: G },
          ),
            yield o("WAWebApiChat").createChatRecord(F, x(G)));
          var ge = G.accountLid,
            he =
              ge != null && z == null
                ? yield n("cr:17538") == null
                    ? void 0
                    : n("cr:17538").settleNewChatNonE2eeState(ge)
                : null;
          if (
            ie != null &&
            !W &&
            !B &&
            o("WAWebFMXGatingUtils").isExpandFmxMexEnabled()
          ) {
            var ye = o(
              "WAWebFetchAndSetIntegritySignals",
            ).fetchAndSetIntegritySignals(F);
            o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
              updates: [{ id: F, integritySignalsPromise: ye }],
            });
          }
          var Ce = o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE,
            be = !1,
            ve = []
              .concat(
                (he == null ? void 0 : he.isEnforced) === !0 ? D(F, ue) : ue,
                [ie, J],
              )
              .filter(Boolean);
          if (
            (he != null &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] createChat chat=",
                    " settled_state=",
                    " enforced=",
                    " e2ee_notice_replaced=",
                    "",
                  ])),
                F.toLogString(),
                he.state,
                String(he.isEnforced),
                String(
                  he.isEnforced &&
                    ue.some(function (e) {
                      return e.subtype === "encrypt";
                    }),
                ),
              ),
            y)
          )
            o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages(
                ve.map(function (e) {
                  return { msg: e };
                }),
                !1,
              )
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "createChat: failed to add messages to the message cache",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("createChat-add-messages-failed");
              });
          else {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: will add ",
                  " messages to chat ",
                  "",
                ])),
              ve.length,
              F.toLogString(),
            );
            for (var Se of ve)
              yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: F,
                newMsg: Se,
                handleSingleMsgOrigin: "createChat",
                messageOverwriteOption: Ce,
                preserveOrder: be,
              });
            var Re = [z, he].find(function (e) {
                return (e == null ? void 0 : e.isEnforced) === !0;
              }),
              Le = ve.find(function (e) {
                return e.subtype === "biz_privacy_mode_init_fb";
              });
            ge != null &&
              Re != null &&
              Le != null &&
              (yield n("cr:17538") == null
                ? void 0
                : n("cr:17538").recordAeaNewChatDisclosure(
                    ge,
                    Re.state,
                    Le.id.toString(),
                  ));
          }
          if (a.chatId.isUser()) {
            var Ee = o("WAWebWidFactory").createUserWidOrThrow(
                a.chatId.toString(),
              ),
              ke = Ee.toJid(),
              Ie = o("WAWebApiContact").getContactHash(ke),
              Te = { id: ke, contactHash: Ie },
              De;
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
              var xe, $e;
              ((De =
                (xe = ($e = pe) == null ? void 0 : $e.usernameCountryCode) !=
                null
                  ? xe
                  : yield o(
                      "WAWebApiContactUsernameFields",
                    ).getOrFetchContactUsernameCountryCode(F)),
                De != null && (Te.usernameCountryCode = De));
            }
            yield r("WAWebLidAwareContactsDB").createOrMerge(ke, Te);
          }
          v(a.chatId);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return e != null &&
        o("WAWebIsUserInitiatedOutgoingMsg").isUserInitiatedOutgoingMsg(e) &&
        !t
        ? !0
        : void 0;
    }
    function k(e) {
      return (
        e == null ||
        o("WAWebIsUserInitiatedOutgoingMsg").isUserInitiatedOutgoingMsg(e)
      );
    }
    var I = {
      actualActors: o("WAWebHandleMsgTypes").ActualActorsEnumType.Bsp,
      hostStorage: o("WAWebHandleMsgTypes").HostStorageEnumType.Facebook,
      privacyModeTs: 0,
    };
    function T(e, t) {
      return (t == null ? void 0 : t.isEnforced) === !0 &&
        o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(e) ===
          o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE
        ? I
        : e;
    }
    function D(e, t) {
      return t.map(function (t) {
        return t.subtype === "encrypt"
          ? o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
              e,
              o("WAWebChatOpeningNotice").CHAT_OPENING_NOTICE.META_PRIVACY,
            )
          : t;
      });
    }
    function x(t) {
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
          aeaThreadState: t.aeaThreadState,
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
    function $(e) {
      var t;
      return o("WAFilterObjectNullishProps").filterObjectNullishProps(
        babelHelpers.extends({}, x(e), {
          unreadCount: (t = e.unreadCount) != null ? t : void 0,
        }),
      );
    }
    function P(e, t, n, r) {
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
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.firstIncomingMsg,
            r = e.id,
            a = e.userIsEnterprise;
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "getDisappearingModeSettingForNewChat",
              ])),
          );
          var i = yield (C || (C = n("Promise"))).all([
              o("WAWebApiContact").getContactRecord(
                o("WAWebUserUtils").getMeLidUserOrThrow(),
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "getDisappearingModeSettingForNewChat: ephemerality disabled",
                  ])),
              ),
              null
            );
          if (!a && r.isUser() && !r.isPSA()) {
            var u = k(t);
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
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        A.apply(this, arguments)
      );
    }
    ((l.createChat = R), (l.createNewsletterObjectForStorage = $));
  },
  98,
);
