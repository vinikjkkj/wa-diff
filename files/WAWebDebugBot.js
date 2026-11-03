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
    "WAWebBotTosIds",
    "WAWebChatEntryPoint",
    "WAWebDataLink",
    "WAWebDebugUtils",
    "WAWebFilenameManager",
    "WAWebFrontendMsgGetters",
    "WAWebHandleMsgTypes",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebHttpExtendedFetch",
    "WAWebInitializeBots",
    "WAWebMediaInMemoryBlobCache",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModelFromData",
    "WAWebMuseGroupNuxDebug",
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
    "err",
    "react",
    "vulture",
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
      (r("vulture")("BL8NGb8C7hVgaxH1pq3hRxz5OBk="),
        (C.injectBizBotFields = !C.injectBizBotFields),
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
      (r("vulture")("s7kqS4Ny72Xv65YVnTmhvfITlpw="),
        o("WAWebTos").TosManager.resetState(
          o("WAWebBotTosIds").getBizBotTosId(),
        ));
    }
    function S() {
      var e;
      r("vulture")("AUiXK83eJuQpXI4dV5ElhhjD6kE=");
      var t = [
          (e = o("WAWebBotTosIds")).getBotAgentTosId(),
          e.getBotLegacyShortcutTosId(),
          e.getBotInvokeTosId(),
          e.getBotLegacyInvokeTosId(),
          e.getBotShortcutTosId(),
          e.getUgcAiStudioTosId(),
        ].concat(o("WAWebBotGating").getInlineBotNoticeIds()),
        n = o("WAWebBotGating").getMasterBotNoticeId();
      n != null && t.push(String(n.toString()));
      for (var a of t)
        try {
          o("WAWebTos").TosManager.resetState(a.toString());
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
      return (
        r("vulture")("yN2DfSQnBBuRFcPXAsBQEoL7ITA="),
        o("WAWebMuseGroupNuxDebug").resetMuseGroupNux()
      );
    }
    ((R.doc =
      "Clears the Muse group member and Owner notice acceptance on the server (non-prod builds) and on this device, then re-queries the server and returns {noticeId, serverDelete, serverDeleteFailed, serverAcceptedAfter} per notice. Usage: await resetMuseGroupNux()"),
      (R.paramsToExecute = []));
    function L() {
      r("vulture")("b_q2be0JJ00XBrS0APU6c4K6qhQ=");
      var e = o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotAgentTosId(),
        ),
        t = o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotInvokeTosId(),
        ),
        n = o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotShortcutTosId(),
        ),
        a = o("WAWebBotGating").getMasterBotNoticeId(),
        i = null;
      return (
        a != null && (i = o("WAWebTos").TosManager.getState(String(a))),
        {
          botAgentTosState: e,
          botInvokeTosState: t,
          botShortcutTosState: n,
          masterBotNoticeState: i,
        }
      );
    }
    async function E(e) {
      (r("vulture")("g9ej20toXglyKEdJvhAMuRHAxqc="),
        e && (await o("WAWebSchemaBotProfile").getBotProfileTable().clear()),
        o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(0),
        window.location.reload());
    }
    function k(e) {
      (r("vulture")("DnLZ0fhhDYgq69QQ3nRJDxGc_Yk="),
        o("WAWebModalManager").ModalManager.open(
          y.jsx(r("WAWebPDFNModal.react"), {
            pdfnId: e,
            runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
            verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
          }),
        ));
    }
    function I(e) {
      (r("vulture")("RvnwZY6UbZD7v0pKl_6XLhO5qRs="),
        o("WAWebModalManager").ModalManager.open(
          y.jsx(r("WAWebPDFNModal.react"), {
            noticeType: o("WAWebPDFNCommonUtils").PdfnNoticeType.NonBlocking,
            pdfnId: e,
            runIfTosAccepted: o("WAWebBoolFunc").returnTrue,
            verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
          }),
        ));
    }
    var T = function () {
      (r("vulture")("_vqa3QjOI20RiFgGGAV7zojeAtc="),
        o("WAWebModalManager").ModalManager.open(
          y.jsx(r("WAWebBizBot1pLearnMore.react"), {}),
        ));
    };
    ((T.doc = "Opens the biz bot 1p learn more modal"),
      (T.paramsToExecute = []));
    var D = function () {
      (r("vulture")("-Z7fu7y91QnAeOW0tco28LMD7oc="),
        o("WAWebModalManager").ModalManager.open(
          y.jsx(r("WAWebBizBotTos.react"), {
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Debug,
          }),
        ));
    };
    ((D.doc = "Opens the biz bot consumer consent"), (D.paramsToExecute = []));
    var x = function () {
      (r("vulture")("UpIZtnENcZQjc8fLkK6B2bn6CG4="),
        o("WAWebModalManager").ModalManager.open(
          y.jsx(r("WAWebBotFeatureNotAvailable.react"), {}),
        ));
    };
    ((x.doc = "Opens the bot feature not available modal"),
      (x.paramsToExecute = []));
    var $ = function () {
      (r("vulture")("dGHuyVB4D6MfZFQd8FpeMQkhPBI="),
        o("WAWebModalManager").ModalManager.open(
          y.jsx(r("WAWebBotLearnMore.react"), { fromInvoke: !1 }),
        ));
    };
    (($.doc = "Opens the bot learn more modal"), ($.paramsToExecute = []));
    function P(e) {
      (r("vulture")("fsaZVBMEKLlOpatIVjsxe-AU298="),
        o("WAWebUserPrefsMultiDeviceDebug").setDebugDefaultBotOverride(e));
    }
    P.doc =
      "Adds a debug default bot for testing invoke against new bot numbers";
    function N() {
      r("vulture")("kKu8F4yr9yrL-lpLPAkiCOJvEvw=");
      var e = o("WAWebDebugUtils").getSelectedChat(),
        t = o("WAWebBotSystemMsg").genBotSessionTransparencyNoticeSystemMsg(
          e.id,
          o("WAWebBotSessionTransparencyNotice").BotSessionTransparencyType
            .AiSafetyDisclaimer,
        ),
        n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
      e.msgs.add(n);
    }
    async function M() {
      r("vulture")("8yshQ0M0njamkRiQZIT04g4G7Rg=");
      var e = o("WAWebDebugUtils").getSelectedChat();
      (await o(
        "WAWebHandlePrivacyModeUpdateMsgAction",
      ).handlePrivacyModeTransition(e.id, null),
        await o(
          "WAWebHandlePrivacyModeUpdateMsgAction",
        ).handlePrivacyModeTransition(e.id, {
          actualActors: o("WAWebHandleMsgTypes").ActualActorsEnumType.Self,
          hostStorage: o("WAWebHandleMsgTypes").HostStorageEnumType.Facebook,
          privacyModeTs: o("WATimeUtils").unixTime(),
        }),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[debugBot] simulateBizPrivacyTransition: ",
              "",
            ])),
          e.id.toLogString(),
        ));
    }
    M.doc =
      'Run an FB-hosted biz privacy transition on the open chat, as an incoming message or verified-name sync would. A business chat gets the "is now using a secure service from Meta" system message; a bot chat must get none.';
    async function w(e, t) {
      var n, a;
      (r("vulture")("EVWCH6kuuuWYhm1rGXm2sGVAKRg="),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[debugBot] downloadImagineMedia: ",
              "",
            ])),
          e,
        ));
      var i = new AbortController(),
        l = await o("WAWebHttpExtendedFetch").extendedFetch(e, {
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
        u = await l.arrayBuffer(),
        p = new Blob([u], { type: s }),
        _ = await crypto.subtle.digest("SHA-256", u),
        f = Array.from(new Uint8Array(_)),
        g = btoa(String.fromCharCode.apply(null, f));
      o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(g, p);
      var h = o("WAWebFilenameManager").getDefaultName({
          t: Math.round(Date.now() / 1e3),
          type: "image",
          mimetype: s,
          isVcardOverMmsDocument: !1,
          filename: "",
          vcardList: [],
        }),
        y = window.URL.createObjectURL(p),
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[debugBot] downloadImagineMedia: revokeObjectURL failed, ",
                  "",
                ])),
              e,
            );
          }),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[debugBot] downloadImagineMedia: saved ",
              " bytes, filehash=",
              "",
            ])),
          p.size,
          g,
        ),
        p
      );
    }
    w.doc =
      "Downloads imagine media and caches it. Usage: downloadImagineMedia(url, mimeType?)";
    function A(e, t) {
      r("vulture")("Pu5vPy3aySejEFwK8EWDebwh7PQ=");
      var n = r("WAWebMsgKey").fromString(e),
        a = o("WAWebMsgCollection").MsgCollection.get(n);
      if (a == null) {
        o("WALogger").WARN(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[debugBot] Message not found: ",
              "",
            ])),
          e,
        );
        return;
      }
      if (a.forwardedAiBotMessageInfo == null) {
        o("WALogger").WARN(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[debugBot] Message has no forwardedAiBotMessageInfo",
            ])),
        );
        return;
      }
      var i = o("WAWebFrontendMsgGetters").getAsRichResponse(a);
      if (i == null) {
        o("WALogger").WARN(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[debugBot] Message is not a rich response",
            ])),
        );
        return;
      }
      (o(
        "WAWebUpdateForwardedBotValidationStatusAction",
      ).updateForwardedBotValidationStatusAction(i, t),
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[debugBot] Set validationStatus=",
              " on ",
              "",
            ])),
          t,
          e,
        ));
    }
    A.doc =
      "Sets validationStatus on a forwarded bot message by msgId. Usage: updateForwardedBotValidationStatus(msgId, status)";
    function F(e) {
      return (
        r("vulture")("shwk5wsZL1jeKFG0eF_8BEpUqYE="),
        e != null && e !== ""
          ? o("WAWebWidFactory").createWid(e)
          : o("WAWebDebugUtils").getSelectedChat().id
      );
    }
    function O(e) {
      var t, n;
      r("vulture")("KvVtAr8wszc__M9aEmkSzClFpHU=");
      var a = F(e),
        i = o("WAWebBotProfileCollection").BotProfileCollection.get(a),
        l =
          i != null
            ? {
                product: i.product,
                isDeprecated: i.isDeprecated,
                isDeleted: i.isDeleted,
              }
            : null,
        s = o("WAWebBotSupportState").evaluateBotSupport(l, function (e) {
          return o("WAWebBotProductGating").isBotProductGateOn(
            e,
            o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures(),
          );
        });
      return babelHelpers.extends(
        {},
        o("WAWebBotProfileDebugUtils").formatProfileDebug(l, s),
        {
          name: (t = i == null ? void 0 : i.name) != null ? t : null,
          lastFetchedTimeMs:
            (n = i == null ? void 0 : i.lastFetchedTimeMs) != null ? n : null,
        },
      );
    }
    O.doc =
      "Show a bot's Standard Bot Profile fields + computed support state. Usage: showBotProfile(widStr?) \u2014 defaults to the open chat";
    async function B() {
      r("vulture")("juFAlneQMyDv37o4gYTrYQRXLNY=");
      var e = await o("WAWebSchemaBotProfile").getBotProfileTable().all();
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
    }
    ((B.doc =
      "Show SBP fields + computed support state for all cached bot profiles"),
      (B.paramsToExecute = []));
    async function W(e, t) {
      r("vulture")("meMja3cAshYs3sN15R4ekx1nc4U=");
      var n = F(e),
        a = o("WAWebBotProfileCollection").BotProfileCollection.get(n),
        i =
          a != null
            ? o("WAWebBotProfileDebugUtils").profileTypeFromModel(a)
            : o("WAWebBotProfileDebugUtils").emptyBotProfile(n),
        l = o("WAWebBotProfileDebugUtils").mergeProfileOverride(i, t);
      await o("WAWebPersistBotProfiles").persistBotProfiles([l]);
      var s = {
          product: l.product,
          isDeprecated: l.isDeprecated,
          isDeleted: l.isDeleted,
        },
        u = o("WAWebBotSupportState").evaluateBotSupport(s, function (e) {
          return o("WAWebBotProductGating").isBotProductGateOn(
            e,
            o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures(),
          );
        });
      return o("WAWebBotProfileDebugUtils").formatProfileDebug(s, u);
    }
    W.doc =
      "Force SBP fields on a bot and persist to IndexedDB. Usage: overrideBotProfile(widStr, {product?, isDeprecated?, isDeleted?})";
    async function q(e) {
      r("vulture")("oiZBfzOwo0MX_jTlv__Lq8cp5n0=");
      var t = F(e);
      (await o("WAWebSchemaBotProfile")
        .getBotProfileTable()
        .remove(t.toString()),
        o("WAWebBotProfileCollection").BotProfileCollection.remove(t));
    }
    q.doc =
      "Remove a bot's cached profile row so it refetches on next sync. Usage: clearBotProfileOverride(widStr)";
    var U = {
      toggleInjectBizBotProfileFields: b,
      resetBizBotTos: v,
      resetBotTos: S,
      resetMuseGroupNux: R,
      getBotTosStates: L,
      queryTosState: o("WAWebTosJob").queryTosState,
      TosManager: o("WAWebTos").TosManager,
      fetchBotProfiles: E,
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
      updateForwardedBotValidationStatus: A,
      downloadImagineMedia: w,
      showBotProfile: O,
      showAllBotProfiles: B,
      overrideBotProfile: W,
      clearBotProfileOverride: q,
      BotProfileCollection: o("WAWebBotProfileCollection").BotProfileCollection,
      requestBotList: o("WAWebRequestBotList").requestBotList,
      getBotProfilesFromServer: o("WAWebInitializeBots")
        .getBotProfilesFromServer,
    };
    l.default = U;
  },
  98,
);
