__d(
  "WAWebOpenNewsletterChat",
  [
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConversationPanelActions",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterOpenQPLLogger",
    "WAWebNewsletterOpenQPLLoggerV2",
    "WAWebPDFNGatingUtils",
    "WAWebPDFNModal.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebCmd").Cmd.openChatFromUnread({
            chat: e,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .NewsletterChatlist,
          });
          return (
            n &&
              (o(
                "WAWebConversationPanelActions",
              ).ConversationPanelActions.focus(),
              o("WAWebComposeBoxActions").ComposeBoxActions.focus(e)),
            t == null || t.end({ success: n }),
            e
          );
        })),
        c.apply(this, arguments)
      );
    }
    var d = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
        var t,
          n = e.newsletter,
          a = e.onSelect;
        if (
          o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterOpenQPLImprovementsEnabled()
        ) {
          var i;
          ((t = new (o(
            "WAWebNewsletterOpenQPLLoggerV2",
          ).WAWebNewsletterOpenQPLLoggerV2)()),
            t.annotate({
              unreadCount: n.unreadCount,
              role:
                (i = n.newsletterMetadata) == null ? void 0 : i.membershipType,
              isCached: !0,
              discoverySurface: e.discoverySurface,
            }));
        } else
          o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled() &&
            ((t = new (o(
              "WAWebNewsletterOpenQPLLogger",
            ).WAWebNewsletterOpenQPLLogger)()),
            t.annotate(n, e.chatEntryPoint));
        if (
          (a == null || a(),
          o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos())
        )
          return u(n, t);
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebPDFNModal.react"), {
            pdfnId: o("WAWebPDFNGatingUtils").getNewsletterNuxOrTos(),
            verifyTosAccepted: o("WAWebPDFNGatingUtils")
              .hasAckedNewsletterNuxOrTos,
            runIfTosAccepted: function () {
              return u(n, t);
            },
          }),
        );
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    })();
    l.openNewsletterChat = d;
  },
  98,
);
