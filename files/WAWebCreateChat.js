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
            E = L === void 0 ? !1 : L;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "createChat: ",
                "",
              ])),
            t,
          );
          var D = a.chatId;
          if (D.isLid()) {
            r("nullthrows")(
              i == null ? void 0 : i.lidOriginType,
              "Origin type is missing when creating LID chat",
            );
            var P = yield o("WAWebApiContact").getContactRecord(
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            );
            t === "username_contactless_search" &&
              (P == null ? void 0 : P.username) == null &&
              (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
                { lid: D, data: { shareOwnPn: !0 } },
              ]));
          }
          var M =
              D.isUser() && S
                ? yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                    "getOrQueryUsyncInfo",
                    { wid: D, forceUsync: !0 },
                  )
                : null,
            w = M == null ? D : M.wid;
          if (!D.equals(w)) {
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
              i != null ? babelHelpers.extends({}, i, { id: w }) : { id: w },
            H = null;
          if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(w)) {
            var G,
              z,
              j = r("nullthrows")(
                a.accountLid,
                "account lid not provided for one on one chat creation",
              );
            ((V.accountLid = j),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: new chat id=",
                    " lid=",
                    " pn=",
                    "",
                  ])),
                w.toLogString(),
                j.toLogString(),
                (G =
                  (z = o("WAWebLidMigrationUtils").toPn(w)) == null
                    ? void 0
                    : z.toLogString()) != null
                  ? G
                  : "n/a",
              ),
              (H = yield n("cr:17538") == null
                ? void 0
                : n("cr:17538").readNewChatNonE2eeState(j)),
              H != null && (V.aeaThreadState = String(H.state)));
          }
          var K =
            w.isUser() && !w.isBot()
              ? yield $({ firstIncomingMsg: C, id: w, userIsEnterprise: F })
              : null;
          K != null &&
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] DM settings found for new chat",
                ])),
            ),
            (V.ephemeralDuration = K.duration),
            (V.ephemeralSettingTimestamp = K.settingTimestamp),
            (V.disappearingModeInitiator = K.initiator),
            (V.disappearingModeTrigger = K.disappearingModeTrigger),
            (V.disappearingModeInitiatedByMe = K.initiatedByMe),
            K.afterReadDuration != null &&
              (V.afterReadDuration = K.afterReadDuration));
          var Q = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(R, B);
          w.isUser() &&
            o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
              contactId: w,
              businessInfo: { privacyMode: Q },
            });
          var X;
          (C == null ? void 0 : C.subtype) !== "ephemeral_setting" &&
            (X = x(
              w,
              K == null ? void 0 : K.duration,
              K == null ? void 0 : K.initiator,
              K == null ? void 0 : K.afterReadDuration,
            ));
          var Y =
              (C == null ? void 0 : C.ctwaContext) != null
                ? o(
                    "WAWebGetCTWAEligibilityFromConversion",
                  ).getCTWAEligibilityFromConversion({
                    conversionData: C.ctwaContext.conversionData,
                    conversionSource: C.ctwaContext.conversionSource,
                    ctwaSignals: C.ctwaContext.ctwaSignals,
                  })
                : null,
            J = C == null ? void 0 : C.ctwaContext,
            Z =
              (J == null ? void 0 : J.sourceApp) !==
              o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP,
            ee = t === "signupAGM",
            te = J != null && Y != null && !Y.is3pdag,
            ne = C == null || C.id.fromMe,
            re = J != null && Z,
            oe = yield o("WAWebContactSystemMsg").genContactInfoCardMsg(w, {
              isSmb: O,
              isEnterprise:
                F ||
                (C == null ? void 0 : C.senderOrRecipientAccountTypeHosted) ===
                  !0,
              iAmStartingChat: ne,
              isWASupportStartingChat: C != null && w.isCAPISupportAccount(),
              isFromCTWA: te,
              isFMXCtWA: re,
              isSignupDeeplink: ee,
            });
          (w.isUser() && ne && !re && (V.notSpam = !0),
            oe != null &&
              new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
                fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                  .FMX_CARD,
                fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_INSERTED,
                isSenderSmb: O,
              }).commit());
          var ae;
          (O || F) && (ae = yield N(w));
          var ie = k(Q, H),
            le = (yield r("WAWebInitialSystemMsg")(w, ie, ae)).filter(
              function (e) {
                return !E || e.subtype !== "encrypt";
              },
            );
          (H != null &&
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] createChat chat=",
                  " thread_state=",
                  " enforced=",
                  " e2ee_notice=",
                  "",
                ])),
              w.toLogString(),
              H.state,
              String(H.isEnforced),
              String(
                le.some(function (e) {
                  return e.subtype === "encrypt";
                }),
              ),
            ),
            le.some(function (e) {
              return e.subtype === "biz_bot_3p_disclosure";
            })
              ? (V.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_3P)
              : le.some(function (e) {
                  return e.subtype === "biz_bot_1p_disclosure";
                }) &&
                (V.bizBotSystemMsgType = o("WAWebBotTypes").BizBotType.BIZ_1P));
          var se = yield o("WAWebApiOrphanTcToken").getOrphanTcToken(w);
          if (se) {
            var ue, ce;
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: found orphan tc token for ",
                  "",
                ])),
              w.toLogString(),
            ),
              (V.tcToken = (ue = se.tcToken) != null ? ue : null),
              (V.tcTokenTimestamp =
                (ce = se.tcTokenTimestamp) != null ? ce : null),
              yield o("WAWebApiOrphanTcToken").removeOrphanTcToken(w));
          }
          var de;
          if (
            w.isLid() &&
            o(
              "WAWebUsernameGatingUtils",
            ).usernameAdoptionAndEngagementMonitoringEnabled()
          ) {
            var me = o("WAWebLidMigrationUtils").toPn(w) != null;
            if (me) V.isUsernameThreadAtCreation = !1;
            else {
              var pe;
              ((de = yield o("WAWebApiContact").getContactRecord(w)),
                (V.isUsernameThreadAtCreation =
                  ((pe = de) == null ? void 0 : pe.username) != null));
            }
          }
          (yield o("WAWebBackendApi").frontendFireAndForget(
            "chatCollectionGadd",
            { chat: V },
          ),
            yield o("WAWebApiChat").createChatRecord(w, T(V)));
          var _e = V.accountLid,
            fe =
              _e != null && H == null
                ? yield n("cr:17538") == null
                    ? void 0
                    : n("cr:17538").settleNewChatNonE2eeState(_e)
                : null;
          if (
            oe != null &&
            !O &&
            !F &&
            o("WAWebFMXGatingUtils").isExpandFmxMexEnabled()
          ) {
            var ge = o(
              "WAWebFetchAndSetIntegritySignals",
            ).fetchAndSetIntegritySignals(w);
            o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
              updates: [{ id: w, integritySignalsPromise: ge }],
            });
          }
          var he = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
              .NO_OVERWRITE,
            ye = !1,
            Ce = []
              .concat(
                (fe == null ? void 0 : fe.isEnforced) === !0 ? I(w, le) : le,
                [oe, X],
              )
              .filter(Boolean);
          if (
            (fe != null &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] createChat chat=",
                    " settled_state=",
                    " enforced=",
                    " e2ee_notice_replaced=",
                    "",
                  ])),
                w.toLogString(),
                fe.state,
                String(fe.isEnforced),
                String(
                  fe.isEnforced &&
                    le.some(function (e) {
                      return e.subtype === "encrypt";
                    }),
                ),
              ),
            y)
          )
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
              Ce.length,
              w.toLogString(),
            );
            for (var be of Ce)
              yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: w,
                newMsg: be,
                handleSingleMsgOrigin: "createChat",
                messageOverwriteOption: he,
                preserveOrder: ye,
              });
            var ve = [H, fe].find(function (e) {
                return (e == null ? void 0 : e.isEnforced) === !0;
              }),
              Se = Ce.find(function (e) {
                return e.subtype === "biz_privacy_mode_init_fb";
              });
            _e != null &&
              ve != null &&
              Se != null &&
              (yield n("cr:17538") == null
                ? void 0
                : n("cr:17538").recordAeaNewChatDisclosure(
                    _e,
                    ve.state,
                    Se.id.toString(),
                  ));
          }
          if (a.chatId.isUser()) {
            var Re = o("WAWebWidFactory").createUserWidOrThrow(
                a.chatId.toString(),
              ),
              Le = Re.toJid(),
              Ee = o("WAWebApiContact").getContactHash(Le),
              ke = { id: Le, contactHash: Ee },
              Ie;
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
              var Te, De;
              ((Ie =
                (Te = (De = de) == null ? void 0 : De.usernameCountryCode) !=
                null
                  ? Te
                  : yield o(
                      "WAWebApiContactUsernameFields",
                    ).getOrFetchContactUsernameCountryCode(w)),
                Ie != null && (ke.usernameCountryCode = Ie));
            }
            yield r("WAWebLidAwareContactsDB").createOrMerge(Le, ke);
          }
          v(a.chatId);
        })),
        L.apply(this, arguments)
      );
    }
    var E = {
      actualActors: o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.Bsp,
      hostStorage: o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook,
      privacyModeTs: 0,
    };
    function k(e, t) {
      return (t == null ? void 0 : t.isEnforced) === !0 &&
        o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(e) ===
          o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE
        ? E
        : e;
    }
    function I(e, t) {
      return t.map(function (t) {
        return t.subtype === "encrypt"
          ? o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
              e,
              "biz_privacy_mode_init_fb",
            )
          : t;
      });
    }
    function T(t) {
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
    function D(e) {
      return o("WAFilterObjectNullishProps").filterObjectNullishProps(T(e));
    }
    function x(e, t, n, r) {
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
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        M.apply(this, arguments)
      );
    }
    ((l.createChat = R), (l.createNewsletterObjectForStorage = D));
  },
  98,
);
