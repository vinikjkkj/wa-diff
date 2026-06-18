__d(
  "WAWebDebugBot",
  [
    "WALogger",
    "WAPromiseDelays",
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
    "WAWebDataLink",
    "WAWebDebugUtils",
    "WAWebFilenameManager",
    "WAWebFrontendMsgGetters",
    "WAWebGetMetaAISearchSuggestionsAction",
    "WAWebHttpExtendedFetch",
    "WAWebInitializeBots",
    "WAWebMediaInMemoryBlobCache",
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
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebGetMetaAISearchSuggestionsAction",
          ).getMetaAISearchNullStateSuggestionsAction();
          return e;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebGetMetaAISearchSuggestionsAction",
          ).getMetaAISearchTypeAheadSuggestionsAction(e);
          return t;
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebPDFNModal.react"), {
          pdfnId: e,
          runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
          verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
        }),
      );
    }
    function x(e) {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebPDFNModal.react"), {
          noticeType: o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking,
          pdfnId: e,
          runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
          verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
        }),
      );
    }
    var $ = function () {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebBizBot1pLearnMore.react"), {}),
      );
    };
    (($.doc = "Opens the biz bot 1p learn more modal"),
      ($.paramsToExecute = []));
    var P = function () {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebBizBotTos.react"), {
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Debug,
        }),
      );
    };
    ((P.doc = "Opens the biz bot consumer consent"), (P.paramsToExecute = []));
    var N = function () {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebBotFeatureNotAvailable.react"), {}),
      );
    };
    ((N.doc = "Opens the bot feature not available modal"),
      (N.paramsToExecute = []));
    var M = function () {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(r("WAWebBotLearnMore.react"), { fromInvoke: !1 }),
      );
    };
    ((M.doc = "Opens the bot learn more modal"), (M.paramsToExecute = []));
    function w(e) {
      o("WAWebUserPrefsMultiDeviceDebug").setDebugDefaultBotOverride(e);
    }
    w.doc =
      "Adds a debug default bot for testing invoke against new bot numbers";
    function A() {
      var e = o("WAWebDebugUtils").getSelectedChat(),
        t = o("WAWebBotSystemMsg").genBotSessionTransparencyNoticeSystemMsg(
          e.id,
          o("WAWebBotSessionTransparencyNotice").BotSessionTransparencyType
            .AiSafetyDisclaimer,
        ),
        n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
      e.msgs.add(n);
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        O.apply(this, arguments)
      );
    }
    F.doc =
      "Downloads imagine media and caches it. Usage: downloadImagineMedia(url, mimeType?)";
    function B(e, t) {
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
    B.doc =
      "Sets validationStatus on a forwarded bot message by msgId. Usage: updateForwardedBotValidationStatus(msgId, status)";
    var W = {
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
      getMetaAINullStateSuggestions: E,
      getMetaAITypeAheadSuggestions: I,
      showPdfnModal: D,
      showNonBlockingModal: x,
      openBizBot1pLearnMore: $,
      openBizBotTos: P,
      openBotFeatureNotAvailable: N,
      openBotLearnMore: M,
      overrideDefaultBotForTest: w,
      genSessionTransparencySystemMsg: A,
      updateForwardedBotValidationStatus: B,
      downloadImagineMedia: F,
      BotProfileCollection: o("WAWebBotProfileCollection").BotProfileCollection,
      requestBotList: o("WAWebRequestBotList").requestBotList,
      getBotProfilesFromServer: o("WAWebInitializeBots")
        .getBotProfilesFromServer,
    };
    l.default = W;
  },
  98,
);
