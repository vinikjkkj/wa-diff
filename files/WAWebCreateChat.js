__d(
  "WAWebCreateChat",
  [
    "JSResourceForInteraction",
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
      C = r("JSResourceForInteraction")(
        "WAWebFetchBotProfileOnChatAdd",
      ).__setRef("WAWebCreateChat");
    async function b(t) {
      if (!(!t.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(t)))
        try {
          var n = await C.load(),
            a = n.fetchBotProfileOnChatAdd;
          await a(t);
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "createChat: loading the bot profile fetch failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("bot-chat-add-profile-load-failed");
        }
    }
    async function v(e) {
      var t = e.createChatOrigin,
        a = e.destination,
        i = e.initialProps,
        l = e.options,
        g = l != null ? l : {},
        h = g.createdOffline,
        y = h === void 0 ? !1 : h,
        C = g.firstIncomingMsg,
        v = g.forceUsync,
        L = v === void 0 ? !1 : v,
        T = g.nextPrivacyMode,
        P = g.suppressInitialE2EENotice,
        N = P === void 0 ? !1 : P;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose(["createChat: ", ""])),
        t,
      );
      var M = a.chatId;
      if (M.isLid()) {
        r("nullthrows")(
          i == null ? void 0 : i.lidOriginType,
          "Origin type is missing when creating LID chat",
        );
        var w = await o("WAWebApiContact").getContactRecord(
          o("WAWebUserUtils").getMeLidUserOrThrow(),
        );
        t === "username_contactless_search" &&
          (w == null ? void 0 : w.username) == null &&
          (await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
            { lid: M, data: { shareOwnPn: !0 } },
          ]));
      }
      var A =
          M.isUser() && L
            ? await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                "getOrQueryUsyncInfo",
                { wid: M, forceUsync: !0 },
              )
            : null,
        F = A == null ? M : A.wid;
      if (!M.equals(F)) {
        var O = await o("WAWebApiChatCommon").getChatRecord(F);
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
        var H = await o(
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
      var G = i != null ? babelHelpers.extends({}, i, { id: F }) : { id: F },
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
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
          (z = await (n("cr:17538") == null
            ? void 0
            : n("cr:17538").readNewChatNonE2eeState(Q))),
          z != null && (G.aeaThreadState = String(z.state)));
      }
      var X =
        F.isUser() && !F.isBot()
          ? await x({ firstIncomingMsg: C, id: F, userIsEnterprise: B })
          : null;
      X != null &&
        (o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
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
      var Y = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(T, q);
      F.isUser() &&
        o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
          contactId: F,
          businessInfo: { privacyMode: Y },
        });
      var J;
      (C == null ? void 0 : C.subtype) !== "ephemeral_setting" &&
        (J = D(
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
        oe = R(C),
        ae = ee != null && te,
        ie = await o("WAWebContactSystemMsg").genContactInfoCardMsg(F, {
          isSmb: W,
          isEnterprise:
            B ||
            (C == null ? void 0 : C.senderOrRecipientAccountTypeHosted) === !0,
          iAmStartingChat: oe,
          isWASupportStartingChat: C != null && F.isCAPISupportAccount(),
          isFromCTWA: re,
          isFMXCtWA: ae,
          isSignupDeeplink: ne,
        });
      (F.isUser() && (G.notSpam = S(C, ae)),
        ie != null &&
          new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
            fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
              .FMX_CARD,
            fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_INSERTED,
            isSenderSmb: W,
          }).commit());
      var le;
      (W || B) && (le = await $(F));
      var se = E(Y, z),
        ue = (await r("WAWebInitialSystemMsg")(F, se, le)).filter(function (e) {
          return !N || e.subtype !== "encrypt";
        });
      (z != null &&
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
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
      var ce = await o("WAWebApiOrphanTcToken").getOrphanTcToken(F);
      if (ce) {
        var de, me;
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "createChat: found orphan tc token for ",
              "",
            ])),
          F.toLogString(),
        ),
          (G.tcToken = (de = ce.tcToken) != null ? de : null),
          (G.tcTokenTimestamp = (me = ce.tcTokenTimestamp) != null ? me : null),
          await o("WAWebApiOrphanTcToken").removeOrphanTcToken(F));
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
          ((pe = await o("WAWebApiContact").getContactRecord(F)),
            (G.isUsernameThreadAtCreation =
              ((fe = pe) == null ? void 0 : fe.username) != null));
        }
      }
      (await o("WAWebBackendApi").frontendFireAndForget("chatCollectionGadd", {
        chat: G,
      }),
        await o("WAWebApiChat").createChatRecord(F, I(G)));
      var ge = G.accountLid,
        he =
          ge != null && z == null
            ? await (n("cr:17538") == null
                ? void 0
                : n("cr:17538").settleNewChatNonE2eeState(ge))
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
            (he == null ? void 0 : he.isEnforced) === !0 ? k(F, ue) : ue,
            [ie, J],
          )
          .filter(Boolean);
      if (
        (he != null &&
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "createChat: failed to add messages to the message cache",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("createChat-add-messages-failed");
          });
      else {
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "createChat: will add ",
              " messages to chat ",
              "",
            ])),
          ve.length,
          F.toLogString(),
        );
        for (var Se of ve)
          await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
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
          (await (n("cr:17538") == null
            ? void 0
            : n("cr:17538").recordAeaNewChatDisclosure(
                ge,
                Re.state,
                Le.id.toString(),
              )));
      }
      if (a.chatId.isUser()) {
        var Ee = o("WAWebWidFactory").createUserWidOrThrow(a.chatId.toString()),
          ke = Ee.toJid(),
          Ie = o("WAWebApiContact").getContactHash(ke),
          Te = { id: ke, contactHash: Ie },
          De;
        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
          var xe, $e;
          ((De =
            (xe = ($e = pe) == null ? void 0 : $e.usernameCountryCode) != null
              ? xe
              : await o(
                  "WAWebApiContactUsernameFields",
                ).getOrFetchContactUsernameCountryCode(F)),
            De != null && (Te.usernameCountryCode = De));
        }
        await r("WAWebLidAwareContactsDB").createOrMerge(ke, Te);
      }
      b(a.chatId);
    }
    function S(e, t) {
      return e != null &&
        o("WAWebIsUserInitiatedOutgoingMsg").isUserInitiatedOutgoingMsg(e) &&
        !t
        ? !0
        : void 0;
    }
    function R(e) {
      return (
        e == null ||
        o("WAWebIsUserInitiatedOutgoingMsg").isUserInitiatedOutgoingMsg(e)
      );
    }
    var L = {
      actualActors: o("WAWebHandleMsgTypes").ActualActorsEnumType.Bsp,
      hostStorage: o("WAWebHandleMsgTypes").HostStorageEnumType.Facebook,
      privacyModeTs: 0,
    };
    function E(e, t) {
      return (t == null ? void 0 : t.isEnforced) === !0 &&
        o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(e) ===
          o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE
        ? L
        : e;
    }
    function k(e, t) {
      return t.map(function (t) {
        return t.subtype === "encrypt"
          ? o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
              e,
              o("WAWebChatOpeningNotice").CHAT_OPENING_NOTICE.META_PRIVACY,
            )
          : t;
      });
    }
    function I(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u,
        c,
        d = {
          id: e.id.toString(),
          accountLid: (t = e.accountLid) == null ? void 0 : t.toString(),
          aeaThreadState: e.aeaThreadState,
          t: e.t,
          isAutoMuted: !1,
          unreadCount: (n = e.unreadCount) != null ? n : 0,
          notSpam: e.notSpam,
          ephemeralDuration: e.ephemeralDuration,
          ephemeralSettingTimestamp: e.ephemeralSettingTimestamp,
          disappearingModeInitiator:
            (e.disappearingModeInitiator != null, e.disappearingModeInitiator),
          tcToken: (a = e.tcToken) != null ? a : void 0,
          tcTokenTimestamp: (i = e.tcTokenTimestamp) != null ? i : void 0,
          tcTokenSenderTimestamp:
            (l = e.tcTokenSenderTimestamp) != null ? l : void 0,
          bizBotSystemMsgType: e.bizBotSystemMsgType,
          chatViewMode:
            (s = e.chatViewMode) != null
              ? s
              : o("WAWebChatViewMode.flow").ChatViewModeType.VISIBLE,
          lidOriginType: e.lidOriginType,
          createdLocally: (u = e.createdLocally) != null ? u : !1,
        };
      ((d.disappearingModeTrigger =
        (e.disappearingModeTrigger != null, e.disappearingModeTrigger)),
        (d.disappearingModeInitiatedByMe =
          (c = e.disappearingModeInitiatedByMe) != null ? c : void 0));
      var m = e;
      (m.isUsernameThreadAtCreation != null &&
        (d.isUsernameThreadAtCreation = m.isUsernameThreadAtCreation),
        m.isSenderNewAccount != null &&
          (d.isSenderNewAccount = m.isSenderNewAccount),
        e.name != null && (d.name = e.name),
        e.isReadOnly != null && (d.isReadOnly = e.isReadOnly),
        e.muteExpiration != null && (d.muteExpiration = e.muteExpiration));
      try {
        var p = e;
        p.originalLid != null && (d.originalLid = p.originalLid.toString());
      } catch (e) {
        o("WALogger")
          .ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "createChatObjectForStorage: failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs(
            "createChat-lid-offline-resume-workaround-failed-conversion",
          );
      }
      return d;
    }
    function T(e) {
      var t;
      return o("WAFilterObjectNullishProps").filterObjectNullishProps(
        babelHelpers.extends({}, I(e), {
          unreadCount: (t = e.unreadCount) != null ? t : void 0,
        }),
      );
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
    async function x(e) {
      var t = e.firstIncomingMsg,
        n = e.id,
        r = e.userIsEnterprise;
      o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "getDisappearingModeSettingForNewChat",
          ])),
      );
      var a = await Promise.all([
          o("WAWebApiContact").getContactRecord(
            o("WAWebUserUtils").getMeLidUserOrThrow(),
          ),
          o("WAWebApiContact").getContactRecord(n),
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
      if (!r && n.isUser() && !n.isPSA()) {
        var s = R(t);
        if (s)
          return o("WAWebEphemeralityResolver").resolveNewChatDMSettings(i, l);
        var u = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(i);
        return o("WAWebEphemeralityResolver").resolveNewIncomingChatDMSettings(
          t ? o("WAWebMsgEphemerality").getMsgEphemeralitySettings(t) : null,
          u,
        );
      }
    }
    async function $(e) {
      var t,
        n = await o("WAWebApiBusinessProfile").getBusinessProfileRow(
          e.toString(),
        );
      if (n)
        return o("WAWebBotTypes").BizBotAutomatedType.cast(n.automatedType);
      var r = await o("WAWebQueryBusinessProfile").queryBusinessProfile([
        { wid: e },
      ]);
      return (t = r[0]) == null || (t = t.profile) == null
        ? void 0
        : t.automated_type;
    }
    ((l.createChat = v), (l.createNewsletterObjectForStorage = T));
  },
  98,
);
