__d(
  "WAWebDebugBot",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebBizBot1pLearnMore.react",
    "WAWebBizBotTos.react",
    "WAWebBoolFunc",
    "WAWebBotFeatureNotAvailable.react",
    "WAWebBotGating",
    "WAWebBotLearnMore.react",
    "WAWebBotProductGating",
    "WAWebBotProfileCategory",
    "WAWebBotProfileCollection",
    "WAWebBotProfileDebugUtils",
    "WAWebBotSessionTransparencyNotice",
    "WAWebBotSupportState",
    "WAWebBotSystemMsg",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebChatEntryPoint",
    "WAWebDataLink",
    "WAWebDebugUtils",
    "WAWebFilenameManager",
    "WAWebFrontendMsgGetters",
    "WAWebHttpExtendedFetch",
    "WAWebInitializeBots",
    "WAWebMediaInMemoryBlobCache",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModelFromData",
    "WAWebPDFNModal.react",
    "WAWebPersistBotProfiles",
    "WAWebPrimaryFeaturesModel",
    "WAWebRequestBotList",
    "WAWebSchemaBotProfile",
    "WAWebTos",
    "WAWebTosJob",
    "WAWebUpdateForwardedBotValidationStatusAction",
    "WAWebUserPrefsBot",
    "WAWebUserPrefsMultiDeviceDebug",
    "WAWebWidFactory",
    "WaWebPDFNCommonUtils",
    "asyncToGeneratorRuntime",
    "err",
    "react",
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
      h = g || (g = o("react")),
      y = { injectBizBotFields: !1 };
    function C() {
      ((y.injectBizBotFields = !y.injectBizBotFields),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Inject Biz Bot fields: ",
              "",
            ])),
          y.injectBizBotFields ? "enabled" : "disabled",
        ));
    }
    function b() {
      (o("WAWebTos").TosManager.resetState(
        o("WAWebBotTosIds").getBizBotTosId(),
      ),
        o("WAWebBotTos").setBizBotTosDismissalTime(null));
    }
    function v() {
      var e,
        t = [
          (e = o("WAWebBotTosIds")).getBotAgentTosId(),
          e.getBotLegacyShortcutTosId(),
          e.getBotInvokeTosId(),
          e.getBotLegacyInvokeTosId(),
          e.getBotShortcutTosId(),
          e.getUgcAiStudioTosId(),
        ].concat(o("WAWebBotGating").getInlineBotNoticeIds()),
        n = o("WAWebBotGating").getMasterBotNoticeId();
      n != null && t.push(String(n.toString()));
      for (var r of t)
        try {
          o("WAWebTos").TosManager.resetState(r.toString());
        } catch (e) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[resetBotTos] ",
                "",
              ])),
            e,
          );
        }
    }
    function S() {
      var e = o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotAgentTosId(),
        ),
        t = o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotInvokeTosId(),
        ),
        n = o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotShortcutTosId(),
        ),
        r = o("WAWebBotGating").getMasterBotNoticeId(),
        a = null;
      return (
        r != null && (a = o("WAWebTos").TosManager.getState(String(r))),
        {
          botAgentTosState: e,
          botInvokeTosState: t,
          botShortcutTosState: n,
          masterBotNoticeState: a,
        }
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e &&
            (yield o("WAWebSchemaBotProfile").getBotProfileTable().clear(),
            o("WAWebUserPrefsBot").setUgcBotListLastBhash(null)),
            o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(0),
            o("WAWebUserPrefsBot").setUgcBotListLastRequestedTimestamp(0),
            window.location.reload());
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebPDFNModal.react"), {
          pdfnId: e,
          runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
          verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
        }),
      );
    }
    function k(e) {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebPDFNModal.react"), {
          noticeType: o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking,
          pdfnId: e,
          runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
          verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
        }),
      );
    }
    var I = function () {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebBizBot1pLearnMore.react"), {}),
      );
    };
    ((I.doc = "Opens the biz bot 1p learn more modal"),
      (I.paramsToExecute = []));
    var T = function () {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebBizBotTos.react"), {
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Debug,
        }),
      );
    };
    ((T.doc = "Opens the biz bot consumer consent"), (T.paramsToExecute = []));
    var D = function () {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebBotFeatureNotAvailable.react"), {}),
      );
    };
    ((D.doc = "Opens the bot feature not available modal"),
      (D.paramsToExecute = []));
    var x = function () {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebBotLearnMore.react"), { fromInvoke: !1 }),
      );
    };
    ((x.doc = "Opens the bot learn more modal"), (x.paramsToExecute = []));
    function $(e) {
      o("WAWebUserPrefsMultiDeviceDebug").setDebugDefaultBotOverride(e);
    }
    $.doc =
      "Adds a debug default bot for testing invoke against new bot numbers";
    function P() {
      var e = o("WAWebDebugUtils").getSelectedChat(),
        t = o("WAWebBotSystemMsg").genBotSessionTransparencyNoticeSystemMsg(
          e.id,
          o("WAWebBotSessionTransparencyNotice").BotSessionTransparencyType
            .AiSafetyDisclaimer,
        ),
        n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
      e.msgs.add(n);
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, a;
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[debugBot] downloadImagineMedia: ",
                "",
              ])),
            e,
          );
          var i = new AbortController(),
            l = yield o("WAWebHttpExtendedFetch").extendedFetch(e, {
              signal: i.signal,
            });
          if (!l.ok)
            throw r("err")(
              "[debugBot] downloadImagineMedia failed: " +
                l.status +
                " " +
                l.statusText,
            );
          var s = t != null ? t : "image/jpeg",
            u = yield l.arrayBuffer(),
            c = new Blob([u], { type: s }),
            d = yield crypto.subtle.digest("SHA-256", u),
            m = Array.from(new Uint8Array(d)),
            g = btoa(String.fromCharCode.apply(null, m));
          o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(g, c);
          var h = o("WAWebFilenameManager").getDefaultName({
              t: Math.round(Date.now() / 1e3),
              type: "image",
              mimetype: s,
              isVcardOverMmsDocument: !1,
              filename: "",
              vcardList: [],
            }),
            y = window.URL.createObjectURL(c),
            C = o("WAWebDataLink").createDataLink(y);
          return (
            (C.style.display = "none"),
            (C.download = h),
            (n = document.body) == null || n.appendChild(C),
            C.click(),
            (a = document.body) == null || a.removeChild(C),
            o("WAPromiseDelays")
              .delayMs(100)
              .then(function () {
                window.URL.revokeObjectURL(y);
              })
              .catch(function (e) {
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[debugBot] downloadImagineMedia: revokeObjectURL failed, ",
                      "",
                    ])),
                  e,
                );
              }),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[debugBot] downloadImagineMedia: saved ",
                  " bytes, filehash=",
                  "",
                ])),
              c.size,
              g,
            ),
            c
          );
        })),
        M.apply(this, arguments)
      );
    }
    N.doc =
      "Downloads imagine media and caches it. Usage: downloadImagineMedia(url, mimeType?)";
    function w(e, t) {
      var n = r("WAWebMsgKey").fromString(e),
        a = o("WAWebMsgCollection").MsgCollection.get(n);
      if (a == null) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[debugBot] Message not found: ",
              "",
            ])),
          e,
        );
        return;
      }
      if (a.forwardedAiBotMessageInfo == null) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[debugBot] Message has no forwardedAiBotMessageInfo",
            ])),
        );
        return;
      }
      var i = o("WAWebFrontendMsgGetters").getAsRichResponse(a);
      if (i == null) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[debugBot] Message is not a rich response",
            ])),
        );
        return;
      }
      (o(
        "WAWebUpdateForwardedBotValidationStatusAction",
      ).updateForwardedBotValidationStatusAction(i, t),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[debugBot] Set validationStatus=",
              " on ",
              "",
            ])),
          t,
          e,
        ));
    }
    w.doc =
      "Sets validationStatus on a forwarded bot message by msgId. Usage: updateForwardedBotValidationStatus(msgId, status)";
    function A(e) {
      return e != null && e !== ""
        ? o("WAWebWidFactory").createWid(e)
        : o("WAWebDebugUtils").getSelectedChat().id;
    }
    function F(e) {
      return {
        id: e.id,
        name: e.name,
        attrs: e.attrs,
        description: e.description,
        category: e.category,
        isDefault: e.isDefault,
        prompts: e.prompts,
        personaId: e.personaId,
        commands: e.commands,
        commandsDescription: e.commandsDescription,
        isMetaCreated: e.isMetaCreated,
        creatorName: e.creatorName,
        creatorProfileUrl: e.creatorProfileUrl,
        lastUpdateTs: e.lastUpdateTs,
        posingAsProfessional: e.posingAsProfessional,
        product: e.product,
        isDeprecated: e.isDeprecated,
        isDeleted: e.isDeleted,
        lastFetchedTimeMs: e.lastFetchedTimeMs,
      };
    }
    function O(e) {
      return {
        id: e,
        name: "",
        attrs: "",
        description: "",
        category: o("WAWebBotProfileCategory").BotProfileCategory.SYNTHETIC,
        isDefault: !1,
        prompts: [],
        personaId: "",
        commands: [],
        commandsDescription: "",
        isMetaCreated: null,
        creatorName: null,
        creatorProfileUrl: null,
        lastUpdateTs: null,
        posingAsProfessional: null,
        product: null,
        isDeprecated: !1,
        isDeleted: !1,
        lastFetchedTimeMs: null,
      };
    }
    function B(e) {
      var t,
        n,
        r = A(e),
        a = o("WAWebBotProfileCollection").BotProfileCollection.get(r),
        i =
          a != null
            ? {
                product: a.product,
                isDeprecated: a.isDeprecated,
                isDeleted: a.isDeleted,
              }
            : null,
        l = o("WAWebBotSupportState").evaluateBotSupport(i, function (e) {
          return o("WAWebBotProductGating").isBotProductGateOn(
            e,
            o("WAWebPrimaryFeaturesModel").PrimaryFeatures
              .aiBotIntegrationEnabled,
          );
        });
      return babelHelpers.extends(
        {},
        o("WAWebBotProfileDebugUtils").formatProfileDebug(i, l),
        {
          name: (t = a == null ? void 0 : a.name) != null ? t : null,
          lastFetchedTimeMs:
            (n = a == null ? void 0 : a.lastFetchedTimeMs) != null ? n : null,
          standardBotProfileAbProp: o("WAWebABProps").getABPropConfigValue(
            "ai_standard_bot_profile_enabled",
          ),
        },
      );
    }
    B.doc =
      "Show a bot's Standard Bot Profile fields + computed support state. Usage: showBotProfile(widStr?) \u2014 defaults to the open chat";
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaBotProfile").getBotProfileTable().all();
          return e.map(function (e) {
            var t,
              n = {
                product: e.product,
                isDeprecated: e.isDeprecated,
                isDeleted: e.isDeleted,
              },
              r = o("WAWebBotSupportState").evaluateBotSupport(n, function (e) {
                return o("WAWebBotProductGating").isBotProductGateOn(
                  e,
                  o("WAWebPrimaryFeaturesModel").PrimaryFeatures
                    .aiBotIntegrationEnabled,
                );
              });
            return babelHelpers.extends(
              {
                id: e.id,
                name: e.name,
                lastFetchedTimeMs: (t = e.lastFetchedTimeMs) != null ? t : null,
              },
              o("WAWebBotProfileDebugUtils").formatProfileDebug(n, r),
            );
          });
        })),
        q.apply(this, arguments)
      );
    }
    ((W.doc =
      "Show SBP fields + computed support state for all cached bot profiles"),
      (W.paramsToExecute = []));
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = A(e),
            r = o("WAWebBotProfileCollection").BotProfileCollection.get(n),
            a = r != null ? F(r) : O(n),
            i = o("WAWebBotProfileDebugUtils").mergeProfileOverride(a, t);
          yield o("WAWebPersistBotProfiles").persistBotProfiles([i]);
          var l = {
              product: i.product,
              isDeprecated: i.isDeprecated,
              isDeleted: i.isDeleted,
            },
            s = o("WAWebBotSupportState").evaluateBotSupport(l, function (e) {
              return o("WAWebBotProductGating").isBotProductGateOn(
                e,
                o("WAWebPrimaryFeaturesModel").PrimaryFeatures
                  .aiBotIntegrationEnabled,
              );
            });
          return o("WAWebBotProfileDebugUtils").formatProfileDebug(l, s);
        })),
        V.apply(this, arguments)
      );
    }
    U.doc =
      "Force SBP fields on a bot and persist to IndexedDB. Usage: overrideBotProfile(widStr, {product?, isDeprecated?, isDeleted?})";
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = A(e);
          (yield o("WAWebSchemaBotProfile")
            .getBotProfileTable()
            .remove(t.toString()),
            o("WAWebBotProfileCollection").BotProfileCollection.remove(t));
        })),
        G.apply(this, arguments)
      );
    }
    H.doc =
      "Remove a bot's cached profile row so it refetches on next sync. Usage: clearBotProfileOverride(widStr)";
    var z = {
      toggleInjectBizBotProfileFields: C,
      resetBizBotTos: b,
      resetBotTos: v,
      getBotTosStates: S,
      queryTosState: o("WAWebTosJob").queryTosState,
      TosManager: o("WAWebTos").TosManager,
      fetchBotProfiles: R,
      debugBotConfigs: y,
      getBotAgentTosId: o("WAWebBotTosIds").getBotAgentTosId,
      getBotShortcutTosId: o("WAWebBotTosIds").getBotShortcutTosId,
      getBotInvokeTosId: o("WAWebBotTosIds").getBotInvokeTosId,
      showPdfnModal: E,
      showNonBlockingModal: k,
      openBizBot1pLearnMore: I,
      openBizBotTos: T,
      openBotFeatureNotAvailable: D,
      openBotLearnMore: x,
      overrideDefaultBotForTest: $,
      genSessionTransparencySystemMsg: P,
      updateForwardedBotValidationStatus: w,
      downloadImagineMedia: N,
      showBotProfile: B,
      showAllBotProfiles: W,
      overrideBotProfile: U,
      clearBotProfileOverride: H,
      BotProfileCollection: o("WAWebBotProfileCollection").BotProfileCollection,
      requestBotList: o("WAWebRequestBotList").requestBotList,
      getBotProfilesFromServer: o("WAWebInitializeBots")
        .getBotProfilesFromServer,
    };
    l.default = z;
  },
  98,
);
