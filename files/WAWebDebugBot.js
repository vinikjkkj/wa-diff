__d(
  "WAWebDebugBot",
  [
    "WALogger",
    "WAWebBizBot1pLearnMore.react",
    "WAWebBizBotTos.react",
    "WAWebBoolFunc",
    "WAWebBotFeatureNotAvailable.react",
    "WAWebBotGating",
    "WAWebBotLearnMore.react",
    "WAWebBotProfileCollection",
    "WAWebBotSessionTransparencyNotice",
    "WAWebBotSystemMsg",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebChatEntryPoint",
    "WAWebDebugUtils",
    "WAWebFrontendMsgGetters",
    "WAWebGetMetaAISearchSuggestionsAction",
    "WAWebInitializeBots",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModelFromData",
    "WAWebPDFNModal.react",
    "WAWebRequestBotList",
    "WAWebSchemaBotProfile",
    "WAWebTos",
    "WAWebTosJob",
    "WAWebUpdateForwardedBotValidationStatusAction",
    "WAWebUserPrefsBot",
    "WAWebUserPrefsMultiDeviceDebug",
    "WaWebPDFNCommonUtils",
    "asyncToGeneratorRuntime",
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
      _ = p || (p = o("react")),
      f = { injectBizBotFields: !1 };
    function g() {
      ((f.injectBizBotFields = !f.injectBizBotFields),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Inject Biz Bot fields: ",
              "",
            ])),
          f.injectBizBotFields ? "enabled" : "disabled",
        ));
    }
    function h() {
      (o("WAWebTos").TosManager.resetState(
        o("WAWebBotTosIds").getBizBotTosId(),
      ),
        o("WAWebBotTos").setBizBotTosDismissalTime(null));
    }
    function y() {
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
    function C() {
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
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e &&
            (yield o("WAWebSchemaBotProfile").getBotProfileTable().clear(),
            o("WAWebUserPrefsBot").setUgcBotListLastBhash(null)),
            o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(0),
            o("WAWebUserPrefsBot").setUgcBotListLastRequestedTimestamp(0),
            window.location.reload());
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebGetMetaAISearchSuggestionsAction",
          ).getMetaAISearchNullStateSuggestionsAction();
          return e;
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
          var t = yield o(
            "WAWebGetMetaAISearchSuggestionsAction",
          ).getMetaAISearchTypeAheadSuggestionsAction(e);
          return t;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(r("WAWebPDFNModal.react"), {
          pdfnId: e,
          runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
          verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
        }),
      );
    }
    function I(e) {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(r("WAWebPDFNModal.react"), {
          noticeType: o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking,
          pdfnId: e,
          runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
          verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
        }),
      );
    }
    var T = function () {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(r("WAWebBizBot1pLearnMore.react"), {}),
      );
    };
    ((T.doc = "Opens the biz bot 1p learn more modal"),
      (T.paramsToExecute = []));
    var D = function () {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(r("WAWebBizBotTos.react"), {
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Debug,
        }),
      );
    };
    ((D.doc = "Opens the biz bot consumer consent"), (D.paramsToExecute = []));
    var x = function () {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(r("WAWebBotFeatureNotAvailable.react"), {}),
      );
    };
    ((x.doc = "Opens the bot feature not available modal"),
      (x.paramsToExecute = []));
    var $ = function () {
      o("WAWebModalManager").ModalManager.open(
        _.jsx(r("WAWebBotLearnMore.react"), { fromInvoke: !1 }),
      );
    };
    (($.doc = "Opens the bot learn more modal"), ($.paramsToExecute = []));
    function P(e) {
      o("WAWebUserPrefsMultiDeviceDebug").setDebugDefaultBotOverride(e);
    }
    P.doc =
      "Adds a debug default bot for testing invoke against new bot numbers";
    function N() {
      var e = o("WAWebDebugUtils").getSelectedChat(),
        t = o("WAWebBotSystemMsg").genBotSessionTransparencyNoticeSystemMsg(
          e.id,
          o("WAWebBotSessionTransparencyNotice").BotSessionTransparencyType
            .AiSafetyDisclaimer,
        ),
        n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
      e.msgs.add(n);
    }
    function M(e, t) {
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
    M.doc =
      "Sets validationStatus on a forwarded bot message by msgId. Usage: updateForwardedBotValidationStatus(msgId, status)";
    var w = {
      toggleInjectBizBotProfileFields: g,
      resetBizBotTos: h,
      resetBotTos: y,
      getBotTosStates: C,
      queryTosState: o("WAWebTosJob").queryTosState,
      TosManager: o("WAWebTos").TosManager,
      fetchBotProfiles: b,
      debugBotConfigs: f,
      getBotAgentTosId: o("WAWebBotTosIds").getBotAgentTosId,
      getBotShortcutTosId: o("WAWebBotTosIds").getBotShortcutTosId,
      getBotInvokeTosId: o("WAWebBotTosIds").getBotInvokeTosId,
      getMetaAINullStateSuggestions: S,
      getMetaAITypeAheadSuggestions: L,
      showPdfnModal: k,
      showNonBlockingModal: I,
      openBizBot1pLearnMore: T,
      openBizBotTos: D,
      openBotFeatureNotAvailable: x,
      openBotLearnMore: $,
      overrideDefaultBotForTest: P,
      genSessionTransparencySystemMsg: N,
      updateForwardedBotValidationStatus: M,
      BotProfileCollection: o("WAWebBotProfileCollection").BotProfileCollection,
      requestBotList: o("WAWebRequestBotList").requestBotList,
      getBotProfilesFromServer: o("WAWebInitializeBots")
        .getBotProfilesFromServer,
    };
    l.default = w;
  },
  98,
);
