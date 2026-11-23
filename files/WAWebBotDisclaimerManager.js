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
    "WAWebPDFNCommonUtils",
    "WAWebPDFNModal.react",
    "WAWebToastManager",
    "WAWebTosGating",
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
      var e = s._(/*BTDS*/ "");
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
        l = e.onStage,
        s = e.wamEntryPoint;
      if (
        (l == null || l("tos-start"), o("WAWebBotUtils").isBotChannelFBID(a.id))
      ) {
        l == null || l("tos-not-required");
        return;
      }
      var f = o("WAWebBotTos").isMasterBotTosNotice(Number(i));
      if (f) {
        var h = y(n);
        if (
          h.some(function (e) {
            return g(String(e));
          })
        ) {
          l == null || l("tos-already-accepted");
          return;
        }
      }
      var C =
          (t = o("WAWebBotGating").getMasterBotNoticeId()) != null
            ? t
            : Number(i),
        b = o("WAWebBotTos").isNonBlockingBotNotice(Number(C));
      if (f || b) {
        if (g(String(C))) {
          l == null || l("tos-already-accepted");
          return;
        }
        return (
          o("WAWebBotJourneyLogger").BotJourneyLogger.logTosView(s),
          l == null || l("tos-prompt-shown"),
          new Promise(function (e, t) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebPDFNModal.react"), {
                pdfnId: Number(C),
                runIfTosAccepted: function () {
                  (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosAccept(s),
                    l == null || l("tos-accepted"),
                    e());
                },
                onCancel: b
                  ? function () {
                      (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosAccept(
                        s,
                      ),
                        l == null || l("tos-dismissed-nonblocking"));
                    }
                  : function () {
                      (o(
                        "WAWebBotJourneyLogger",
                      ).BotJourneyLogger.logTosDismiss(s),
                        l == null || l("tos-dismissed"),
                        t(d));
                    },
                verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
                theme: o("WAWebPDFNCommonUtils").PdfnTheme.Meta,
                noticeType: b
                  ? o("WAWebPDFNCommonUtils").PdfnNoticeType.NonBlocking
                  : o("WAWebPDFNCommonUtils").PdfnNoticeType.Blocking,
                onAcceptError: b ? p : void 0,
              }),
            );
          })
        );
      }
      if (c.includes(n)) {
        if (!o("WAWebTosGating").shouldBlockByBotTos(a.contact)) {
          l == null || l("tos-not-required");
          return;
        }
        if (o("WAWebBotTosIds").supportedTosNoticeIds.has(i)) {
          l == null || l("tos-legacy-start");
          try {
            await _(n, s);
          } catch (e) {
            throw (l == null || l("tos-dismissed"), e);
          }
          l == null || l("tos-legacy-complete");
          return;
        }
      }
      if (n === o("WAWebBotLogging").BotEntryPointType.Invoke) {
        if (o("WAWebBotTos").hasSeenInvokeTos()) {
          l == null || l("tos-not-required");
          return;
        }
        l == null || l("tos-legacy-start");
        try {
          await _(n, s);
        } catch (e) {
          throw (l == null || l("tos-dismissed"), e);
        }
        l == null || l("tos-legacy-complete");
        return;
      }
      return (l == null || l("tos-unsupported"), Promise.reject(m));
    }
    function g(e) {
      return o("WAWebPDFNCommonUtils").hasAcceptedTos(e);
    }
    function h(e) {
      return o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function y(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId(),
        n = [];
      t != null && n.push(t);
      var r = o("WAWebBotTosIds").getBusinessAssistantLegacyNoticeId();
      switch ((r != null && n.push(r), e)) {
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
        var a = o("WAWebBotGating").getInlineBotNoticeIds();
        return n.filter(function (e) {
          return !a.includes(Number(e));
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
