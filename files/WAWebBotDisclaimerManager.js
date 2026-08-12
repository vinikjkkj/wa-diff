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
    "WAWebPDFNCommonUtils",
    "WAWebPDFNModal.react",
    "WAWebToastManager",
    "WAWebTosGating",
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
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = o("WAWebBotFrontendUtils").getBotNuxOriginType(t),
            l = a;
          return new (e || (e = n("Promise")))(function (e, t) {
            (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosView(l),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebBotNux.react"), {
                  origin: i,
                  onOK: function () {
                    (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosAccept(
                      a,
                    ),
                      e(!0));
                  },
                  onCancel: function () {
                    (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosDismiss(
                      a,
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
            s = t.noticeId,
            u = t.wamEntryPoint;
          if (!o("WAWebBotUtils").isBotChannelFBID(l.id)) {
            var g = o("WAWebBotTos").isMasterBotTosNotice(Number(s));
            if (g) {
              var h = v(i);
              if (
                h.some(function (e) {
                  return C(String(e));
                })
              )
                return;
            }
            var y =
                (a = o("WAWebBotGating").getMasterBotNoticeId()) != null
                  ? a
                  : Number(s),
              b = o("WAWebBotTos").isNonBlockingBotNotice(Number(y));
            if (g || b)
              return C(String(y))
                ? void 0
                : (o("WAWebBotJourneyLogger").BotJourneyLogger.logTosView(u),
                  new (e || (e = n("Promise")))(function (e, t) {
                    o("WAWebModalManager").ModalManager.open(
                      c.jsx(r("WAWebPDFNModal.react"), {
                        pdfnId: Number(y),
                        runIfTosAccepted: function () {
                          (o(
                            "WAWebBotJourneyLogger",
                          ).BotJourneyLogger.logTosAccept(u),
                            e());
                        },
                        onCancel: b
                          ? function () {
                              o(
                                "WAWebBotJourneyLogger",
                              ).BotJourneyLogger.logTosAccept(u);
                            }
                          : function () {
                              (o(
                                "WAWebBotJourneyLogger",
                              ).BotJourneyLogger.logTosDismiss(u),
                                t(m));
                            },
                        verifyTosAccepted: o("WAWebBoolFunc").returnFalse,
                        theme: o("WAWebPDFNCommonUtils").PdfnTheme.Meta,
                        noticeType: b
                          ? o("WAWebPDFNCommonUtils").PdfnNoticeType.NonBlocking
                          : o("WAWebPDFNCommonUtils").PdfnNoticeType.Blocking,
                        onAcceptError: b ? _ : void 0,
                      }),
                    );
                  }));
            if (d.includes(i)) {
              if (!o("WAWebTosGating").shouldBlockByBotTos(l.contact)) return;
              if (o("WAWebBotTosIds").supportedTosNoticeIds.has(s)) {
                yield f(i, u);
                return;
              }
            }
            if (i === o("WAWebBotLogging").BotEntryPointType.Invoke) {
              if (o("WAWebBotTos").hasSeenInvokeTos()) return;
              yield f(i, u);
              return;
            }
            return (e || (e = n("Promise"))).reject(p);
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return o("WAWebPDFNCommonUtils").hasAcceptedTos(e);
    }
    function b(e) {
      return o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function v(e) {
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
