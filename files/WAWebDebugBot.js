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
    "WAWebBotSessionTransparencyNotice",
    "WAWebBotSystemMsg",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebChatEntryPoint",
    "WAWebDebugUtils",
    "WAWebGetMetaAISearchSuggestionsAction",
    "WAWebModalManager",
    "WAWebMsgModelFromData",
    "WAWebPDFNModal.react",
    "WAWebSchemaBotProfile",
    "WAWebTos",
    "WAWebTosJob",
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
      c = u || (u = o("react")),
      d = { injectBizBotFields: !1 };
    function m() {
      ((d.injectBizBotFields = !d.injectBizBotFields),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Inject Biz Bot fields: ",
              "",
            ])),
          d.injectBizBotFields ? "enabled" : "disabled",
        ));
    }
    function p() {
      (o("WAWebTos").TosManager.resetState(
        o("WAWebBotTosIds").getBizBotTosId(),
      ),
        o("WAWebBotTos").setBizBotTosDismissalTime(null));
    }
    function _() {
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
    function f() {
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e &&
            (yield o("WAWebSchemaBotProfile").getBotProfileTable().clear(),
            o("WAWebUserPrefsBot").setUgcBotListLastBhash(null)),
            o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(0),
            o("WAWebUserPrefsBot").setUgcBotListLastRequestedTimestamp(0),
            window.location.reload());
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebGetMetaAISearchSuggestionsAction",
          ).getMetaAISearchNullStateSuggestionsAction();
          return e;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebGetMetaAISearchSuggestionsAction",
          ).getMetaAISearchTypeAheadSuggestionsAction(e);
          return t;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebPDFNModal.react"), {
          pdfnId: e,
          runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
          verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
        }),
      );
    }
    function R(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebPDFNModal.react"), {
          noticeType: o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking,
          pdfnId: e,
          runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
          verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
        }),
      );
    }
    var L = function () {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebBizBot1pLearnMore.react"), {}),
      );
    };
    ((L.doc = "Opens the biz bot 1p learn more modal"),
      (L.paramsToExecute = []));
    var E = function () {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebBizBotTos.react"), {
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Unknown,
        }),
      );
    };
    ((E.doc = "Opens the biz bot consumer consent"), (E.paramsToExecute = []));
    var k = function () {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebBotFeatureNotAvailable.react"), {}),
      );
    };
    ((k.doc = "Opens the bot feature not available modal"),
      (k.paramsToExecute = []));
    var I = function () {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebBotLearnMore.react"), { fromInvoke: !1 }),
      );
    };
    ((I.doc = "Opens the bot learn more modal"), (I.paramsToExecute = []));
    function T(e) {
      o("WAWebUserPrefsMultiDeviceDebug").setDebugDefaultBotOverride(e);
    }
    T.doc =
      "Adds a debug default bot for testing invoke against new bot numbers";
    function D() {
      var e = o("WAWebDebugUtils").getSelectedChat(),
        t = o("WAWebBotSystemMsg").genBotSessionTransparencyNoticeSystemMsg(
          e.id,
          o("WAWebBotSessionTransparencyNotice").BotSessionTransparencyType
            .AiSafetyDisclaimer,
        ),
        n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
      e.msgs.add(n);
    }
    var x = {
      toggleInjectBizBotProfileFields: m,
      resetBizBotTos: p,
      resetBotTos: _,
      getBotTosStates: f,
      queryTosState: o("WAWebTosJob").queryTosState,
      TosManager: o("WAWebTos").TosManager,
      fetchBotProfiles: g,
      debugBotConfigs: d,
      getBotAgentTosId: o("WAWebBotTosIds").getBotAgentTosId,
      getBotShortcutTosId: o("WAWebBotTosIds").getBotShortcutTosId,
      getBotInvokeTosId: o("WAWebBotTosIds").getBotInvokeTosId,
      getMetaAINullStateSuggestions: y,
      getMetaAITypeAheadSuggestions: b,
      showPdfnModal: S,
      showNonBlockingModal: R,
      openBizBot1pLearnMore: L,
      openBizBotTos: E,
      openBotFeatureNotAvailable: k,
      openBotLearnMore: I,
      overrideDefaultBotForTest: T,
      genSessionTransparencySystemMsg: D,
    };
    l.default = x;
  },
  98,
);
