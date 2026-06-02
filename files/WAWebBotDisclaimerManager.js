__d(
  "WAWebBotDisclaimerManager",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebBoolFunc",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotJourneyLogger",
    "WAWebBotLogging",
    "WAWebBotNux.react",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebModalManager",
    "WAWebPDFNModal.react",
    "WAWebToastManager",
    "WAWebTosGating",
    "WaWebPDFNCommonUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = [
        o("WAWebBotLogging").BotEntryPointType.Shortcut,
        o("WAWebBotLogging").BotEntryPointType.Search,
      ],
      d = "TOS_DID_NOT_ACCEPT",
      m = "TOS_ACCEPTANCE_NOT_SUPPORTED";
    function p() {
      var e = s._(/*BTDS*/ "Something went wrong, please try again.");
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: null,
          pendingAction: Promise.reject({ text: e }),
        }),
      );
    }
    async function _(e, t) {
      var n = o("WAWebBotFrontendUtils").getBotNuxOriginType(e),
        a = t;
      return new Promise(function (e, i) {
        (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosView(a),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebBotNux.react"), {
              origin: n,
              onOK: function () {
                (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosAccept(t),
                  e(!0));
              },
              onCancel: function () {
                (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosDismiss(t),
                  i(d));
              },
            }),
          ));
      });
    }
    async function f(e) {
      var t,
        n = e.botEntryPoint,
        a = e.chat,
        i = e.noticeId,
        l = e.wamEntryPoint;
      if (!o("WAWebBotUtils").isBotChannelFBID(a.id)) {
        var s = o("WAWebBotTos").isMasterBotTosNotice(Number(i));
        if (s) {
          var f = y(n);
          if (
            f.some(function (e) {
              return g(String(e));
            })
          )
            return;
        }
        var h =
            (t = o("WAWebBotGating").getMasterBotNoticeId()) != null
              ? t
              : Number(i),
          C = o("WAWebBotTos").isNonBlockingBotNotice(Number(h));
        if (s || C)
          return g(String(h))
            ? void 0
            : (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosView(l),
              new Promise(function (e, t) {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebPDFNModal.react"), {
                    pdfnId: Number(h),
                    runIfTosAccepted: function () {
                      (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosAccept(
                        l,
                      ),
                        e());
                    },
                    onCancel: C
                      ? function () {
                          o(
                            "WAWebBotJourneyLogger",
                          ).BotJourneyLogger.logTosAccept(l);
                        }
                      : function () {
                          (o(
                            "WAWebBotJourneyLogger",
                          ).BotJourneyLogger.logTosDismiss(l),
                            t(d));
                        },
                    verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
                    theme: o("WaWebPDFNCommonUtils").PdfnTheme.Meta,
                    noticeType: C
                      ? o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking
                      : o("WaWebPDFNCommonUtils").PdfnNoticeType.Blocking,
                    onAcceptError: C ? p : void 0,
                  }),
                );
              }));
        if (c.includes(n)) {
          if (!o("WAWebTosGating").shouldBlockByBotTos(a.contact)) return;
          if (o("WAWebBotTosIds").supportedTosNoticeIds.has(i)) {
            await _(n, l);
            return;
          }
        }
        if (n === o("WAWebBotLogging").BotEntryPointType.Invoke) {
          if (o("WAWebBotTos").hasSeenInvokeTos()) return;
          await _(n, l);
          return;
        }
        return Promise.reject(m);
      }
    }
    function g(e) {
      return o("WaWebPDFNCommonUtils").hasAcceptedTos(e);
    }
    function h(e) {
      return o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function y(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId(),
        n = [];
      switch ((t != null && n.push(t), e)) {
        case o("WAWebBotLogging").BotEntryPointType.Shortcut:
        case o("WAWebBotLogging").BotEntryPointType.Search:
          (n.push(Number(o("WAWebBotTosIds").getBotShortcutTosId())),
            n.push(Number(o("WAWebBotTosIds").getBotLegacyShortcutTosId())));
          break;
        case o("WAWebBotLogging").BotEntryPointType.Invoke:
          (n.push(Number(o("WAWebBotTosIds").getBotInvokeTosId())),
            n.push(Number(o("WAWebBotTosIds").getBotLegacyInvokeTosId())));
          break;
      }
      if (o("WAWebBotGating").isMigrateAwayFromInlineBotTosEnabled()) {
        var r = o("WAWebBotGating").getInlineBotNoticeIds();
        return n.filter(function (e) {
          return !r.includes(Number(e));
        });
      }
      return n;
    }
    ((l.TOS_DID_NOT_ACCEPT_ERROR = d),
      (l.TOS_ACCEPTANCE_NOT_SUPPORTED_ERROR = m),
      (l.enterOldBotNuxFlow = _),
      (l.enterBotTosFlow = f),
      (l.hasAcceptedTos = g),
      (l.canShowLegacyBotNux = h),
      (l.getRelevantBotEntryPointNoticeIds = y));
  },
  226,
);
