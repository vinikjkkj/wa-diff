__d(
  "WAWebDebugBot",
  [
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebBizBot1pLearnMore.react",
    "WAWebBizBotTos.react",
    "WAWebBoolFunc",
    "WAWebBotFeatureNotAvailable.react",
    "WAWebBotGating",
    "WAWebBotLearnMore.react",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotProductGating",
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
    "WAWebHandleMsgTypes.flow",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebHttpExtendedFetch",
    "WAWebInitializeBots",
    "WAWebMediaInMemoryBlobCache",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModelFromData",
    "WAWebPDFNCommonUtils",
    "WAWebPDFNModal.react",
    "WAWebPersistBotProfiles",
    "WAWebRequestBotList",
    "WAWebSchemaBotProfile",
    "WAWebTos",
    "WAWebTosJob",
    "WAWebUpdateForwardedBotValidationStatusAction",
    "WAWebUserPrefsBot",
    "WAWebUserPrefsMultiDeviceDebug",
    "WAWebWidFactory",
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
      h,
      y = h || (h = o("react")),
      C = { injectBizBotFields: !1 };
    function b() {
      ((C.injectBizBotFields = !C.injectBizBotFields),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Inject Biz Bot fields: ",
              "",
            ])),
          C.injectBizBotFields ? "enabled" : "disabled",
        ));
    }
    function v() {
      (o("WAWebTos").TosManager.resetState(
        o("WAWebBotTosIds").getBizBotTosId(),
      ),
        o("WAWebBotTos").setBizBotTosDismissalTime(null));
    }
    function S() {
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
    function R() {
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e &&
            (yield o("WAWebSchemaBotProfile").getBotProfileTable().clear(),
            o("WAWebUserPrefsBot").setUgcBotListLastBhash(null)),
            o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(0),
            o("WAWebUserPrefsBot").setUgcBotListLastRequestedTimestamp(0),
            window.location.reload());
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      o("WAWebModalManager").ModalManager.open(
        y.jsx(r("WAWebPDFNModal.react"), {
          pdfnId: e,
          runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
          verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
        }),
      );
    }
    function I(e) {
      o("WAWebModalManager").ModalManager.open(
        y.jsx(r("WAWebPDFNModal.react"), {
          noticeType: o("WAWebPDFNCommonUtils").PdfnNoticeType.NonBlocking,
          pdfnId: e,
          runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
          verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
        }),
      );
    }
    var T = function () {
      o("WAWebModalManager").ModalManager.open(
        y.jsx(r("WAWebBizBot1pLearnMore.react"), {}),
      );
    };
    ((T.doc = "Opens the biz bot 1p learn more modal"),
      (T.paramsToExecute = []));
    var D = function () {
      o("WAWebModalManager").ModalManager.open(
        y.jsx(r("WAWebBizBotTos.react"), {
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Debug,
        }),
      );
    };
    ((D.doc = "Opens the biz bot consumer consent"), (D.paramsToExecute = []));
    var x = function () {
      o("WAWebModalManager").ModalManager.open(
        y.jsx(r("WAWebBotFeatureNotAvailable.react"), {}),
      );
    };
    ((x.doc = "Opens the bot feature not available modal"),
      (x.paramsToExecute = []));
    var $ = function () {
      o("WAWebModalManager").ModalManager.open(
        y.jsx(r("WAWebBotLearnMore.react"), { fromInvoke: !1 }),
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
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebDebugUtils").getSelectedChat();
          (yield o(
            "WAWebHandlePrivacyModeUpdateMsgAction",
          ).handlePrivacyModeTransition(e.id, null),
            yield o(
              "WAWebHandlePrivacyModeUpdateMsgAction",
            ).handlePrivacyModeTransition(e.id, {
              actualActors: o("WAWebHandleMsgTypes.flow").ActualActorsEnumType
                .Self,
              hostStorage: o("WAWebHandleMsgTypes.flow").HostStorageEnumType
                .Facebook,
              privacyModeTs: o("WATimeUtils").unixTime(),
            }),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[debugBot] simulateBizPrivacyTransition: ",
                  "",
                ])),
              e.id.toLogString(),
            ));
        })),
        w.apply(this, arguments)
      );
    }
    M.doc =
      'Run an FB-hosted biz privacy transition on the open chat, as an incoming message or verified-name sync would. A business chat gets the "is now using a secure service from Meta" system message; a bot chat must get none.';
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, a;
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            p = btoa(String.fromCharCode.apply(null, m));
          o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(p, c);
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
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[debugBot] downloadImagineMedia: revokeObjectURL failed, ",
                      "",
                    ])),
                  e,
                );
              }),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[debugBot] downloadImagineMedia: saved ",
                  " bytes, filehash=",
                  "",
                ])),
              c.size,
              p,
            ),
            c
          );
        })),
        F.apply(this, arguments)
      );
    }
    A.doc =
      "Downloads imagine media and caches it. Usage: downloadImagineMedia(url, mimeType?)";
    function O(e, t) {
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
    O.doc =
      "Sets validationStatus on a forwarded bot message by msgId. Usage: updateForwardedBotValidationStatus(msgId, status)";
    function B(e) {
      return e != null && e !== ""
        ? o("WAWebWidFactory").createWid(e)
        : o("WAWebDebugUtils").getSelectedChat().id;
    }
    function W(e) {
      var t,
        n,
        r = B(e),
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
            o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures(),
          );
        });
      return babelHelpers.extends(
        {},
        o("WAWebBotProfileDebugUtils").formatProfileDebug(i, l),
        {
          name: (t = a == null ? void 0 : a.name) != null ? t : null,
          lastFetchedTimeMs:
            (n = a == null ? void 0 : a.lastFetchedTimeMs) != null ? n : null,
        },
      );
    }
    W.doc =
      "Show a bot's Standard Bot Profile fields + computed support state. Usage: showBotProfile(widStr?) \u2014 defaults to the open chat";
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                  o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures(),
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
        U.apply(this, arguments)
      );
    }
    ((q.doc =
      "Show SBP fields + computed support state for all cached bot profiles"),
      (q.paramsToExecute = []));
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = B(e),
            r = o("WAWebBotProfileCollection").BotProfileCollection.get(n),
            a =
              r != null
                ? o("WAWebBotProfileDebugUtils").profileTypeFromModel(r)
                : o("WAWebBotProfileDebugUtils").emptyBotProfile(n),
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
                o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures(),
              );
            });
          return o("WAWebBotProfileDebugUtils").formatProfileDebug(l, s);
        })),
        H.apply(this, arguments)
      );
    }
    V.doc =
      "Force SBP fields on a bot and persist to IndexedDB. Usage: overrideBotProfile(widStr, {product?, isDeprecated?, isDeleted?})";
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = B(e);
          (yield o("WAWebSchemaBotProfile")
            .getBotProfileTable()
            .remove(t.toString()),
            o("WAWebBotProfileCollection").BotProfileCollection.remove(t));
        })),
        z.apply(this, arguments)
      );
    }
    G.doc =
      "Remove a bot's cached profile row so it refetches on next sync. Usage: clearBotProfileOverride(widStr)";
    var j = {
      toggleInjectBizBotProfileFields: b,
      resetBizBotTos: v,
      resetBotTos: S,
      getBotTosStates: R,
      queryTosState: o("WAWebTosJob").queryTosState,
      TosManager: o("WAWebTos").TosManager,
      fetchBotProfiles: L,
      debugBotConfigs: C,
      getBotAgentTosId: o("WAWebBotTosIds").getBotAgentTosId,
      getBotShortcutTosId: o("WAWebBotTosIds").getBotShortcutTosId,
      getBotInvokeTosId: o("WAWebBotTosIds").getBotInvokeTosId,
      showPdfnModal: k,
      showNonBlockingModal: I,
      openBizBot1pLearnMore: T,
      openBizBotTos: D,
      openBotFeatureNotAvailable: x,
      openBotLearnMore: $,
      overrideDefaultBotForTest: P,
      genSessionTransparencySystemMsg: N,
      simulateBizPrivacyTransition: M,
      updateForwardedBotValidationStatus: O,
      downloadImagineMedia: A,
      showBotProfile: W,
      showAllBotProfiles: q,
      overrideBotProfile: V,
      clearBotProfileOverride: G,
      BotProfileCollection: o("WAWebBotProfileCollection").BotProfileCollection,
      requestBotList: o("WAWebRequestBotList").requestBotList,
      getBotProfilesFromServer: o("WAWebInitializeBots")
        .getBotProfilesFromServer,
    };
    l.default = j;
  },
  98,
);
