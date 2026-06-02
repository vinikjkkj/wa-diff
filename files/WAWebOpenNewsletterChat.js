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
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    async function u(e, t) {
      var n = await o("WAWebCmd").Cmd.openChatFromUnread({
        chat: e,
        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
          .NewsletterChatlist,
      });
      return (
        n &&
          (o("WAWebConversationPanelActions").ConversationPanelActions.focus(),
          o("WAWebComposeBoxActions").ComposeBoxActions.focus(e)),
        t == null || t.end({ success: n }),
        e
      );
    }
    var c = async function (t) {
      var e,
        n = t.newsletter,
        a = t.onSelect;
      if (
        o("WAWebNewsletterGatingUtils").isNewsletterOpenQPLImprovementsEnabled()
      ) {
        var i;
        ((e = new (o(
          "WAWebNewsletterOpenQPLLoggerV2",
        ).WAWebNewsletterOpenQPLLoggerV2)()),
          e.annotate({
            unreadCount: n.unreadCount,
            role:
              (i = n.newsletterMetadata) == null ? void 0 : i.membershipType,
            isCached: !0,
            discoverySurface: t.discoverySurface,
          }));
      } else
        o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled() &&
          ((e = new (o(
            "WAWebNewsletterOpenQPLLogger",
          ).WAWebNewsletterOpenQPLLogger)()),
          e.annotate(n, t.chatEntryPoint));
      if (
        (a == null || a(),
        o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos())
      )
        return u(n, e);
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebPDFNModal.react"), {
          pdfnId: o("WAWebPDFNGatingUtils").getNewsletterNuxOrTos(),
          verifyTosAccepted: o("WAWebPDFNGatingUtils")
            .hasAckedNewsletterNuxOrTos,
          runIfTosAccepted: function () {
            return u(n, e);
          },
        }),
      );
    };
    l.openNewsletterChat = c;
  },
  98,
);
