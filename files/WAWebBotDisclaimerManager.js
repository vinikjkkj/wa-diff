__d(
  "WAWebBotDisclaimerManager",
  [
    "fbt",
    "Promise",
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
    "WAWebNoop",
    "WAWebPDFNModal.react",
    "WAWebToastManager",
    "WAWebTosGating",
    "WaWebPDFNCommonUtils",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = [
        o("WAWebBotLogging").BotEntryPointType.Shortcut,
        o("WAWebBotLogging").BotEntryPointType.Agent,
        o("WAWebBotLogging").BotEntryPointType.Search,
      ],
      m = "TOS_DID_NOT_ACCEPT",
      p = "TOS_ACCEPTANCE_NOT_SUPPORTED";
    function _() {
      var t = s._(/*BTDS*/ "Something went wrong, please try again.");
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: null,
          pendingAction: (e || (e = n("Promise"))).reject({ text: t }),
        }),
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = o("WAWebBotFrontendUtils").getBotNuxOriginType(t),
            i = o("WAWebBotLogging").getWamBotEntryPoint(t);
          return new (e || (e = n("Promise")))(function (e, t) {
            (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosView(i),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebBotNux.react"), {
                  origin: a,
                  onOK: function () {
                    (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosAccept(
                      i,
                    ),
                      e(!0));
                  },
                  onCancel: function () {
                    (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosDismiss(
                      i,
                    ),
                      t(m));
                  },
                }),
              ));
          });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = t.botEntryPoint,
            l = t.chat,
            s = t.noticeId;
          if (!o("WAWebBotUtils").isBotChannelFBID(l.id)) {
            var u = o("WAWebBotTos").isMasterBotTosNotice(Number(s));
            if (u) {
              var g = v(i);
              if (
                g.some(function (e) {
                  return C(String(e));
                })
              )
                return;
            }
            var h =
                (a = o("WAWebBotGating").getMasterBotNoticeId()) != null
                  ? a
                  : Number(s),
              y = o("WAWebBotTos").isNonBlockingBotNotice(Number(h));
            if (u || y)
              return C(String(h))
                ? void 0
                : (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosView(
                    o("WAWebBotLogging").getWamBotEntryPoint(i),
                  ),
                  new (e || (e = n("Promise")))(function (e, t) {
                    o("WAWebModalManager").ModalManager.open(
                      c.jsx(r("WAWebPDFNModal.react"), {
                        pdfnId: Number(h),
                        runIfTosAccepted: function () {
                          e();
                        },
                        onCancel: y
                          ? r("WAWebNoop")
                          : function () {
                              t(m);
                            },
                        verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
                        theme: o("WaWebPDFNCommonUtils").PdfnTheme.Meta,
                        noticeType: y
                          ? o("WaWebPDFNCommonUtils").PdfnNoticeType.NonBlocking
                          : o("WaWebPDFNCommonUtils").PdfnNoticeType.Blocking,
                        onAcceptError: y ? _ : void 0,
                      }),
                    );
                  }));
            if (d.includes(i)) {
              if (!o("WAWebTosGating").shouldBlockByBotTos(l.contact)) return;
              if (o("WAWebBotTosIds").supportedTosNoticeIds.has(s)) {
                yield f(i);
                return;
              }
            }
            if (i === o("WAWebBotLogging").BotEntryPointType.Invoke) {
              if (o("WAWebBotTos").hasSeenInvokeTos()) return;
              yield f(i);
              return;
            }
            return (e || (e = n("Promise"))).reject(p);
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return o("WaWebPDFNCommonUtils").hasAcceptedTos(e);
    }
    function b(e) {
      return o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function v(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId(),
        n = [];
      switch ((t != null && n.push(t), e)) {
        case o("WAWebBotLogging").BotEntryPointType.Agent:
          n.push(Number(o("WAWebBotTosIds").getBotAgentTosId()));
          break;
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
    ((l.TOS_DID_NOT_ACCEPT_ERROR = m),
      (l.TOS_ACCEPTANCE_NOT_SUPPORTED_ERROR = p),
      (l.enterOldBotNuxFlow = f),
      (l.enterBotTosFlow = h),
      (l.hasAcceptedTos = C),
      (l.canShowLegacyBotNux = b),
      (l.getRelevantBotEntryPointNoticeIds = v));
  },
  226,
);
