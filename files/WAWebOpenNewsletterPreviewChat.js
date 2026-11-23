__d(
  "WAWebOpenNewsletterPreviewChat",
  [
    "WAJids",
    "WAWebCmd",
    "WAWebCommonNewsletterEnums",
    "WAWebComposeBoxActions",
    "WAWebLoadingNewsletterPreviewModal.react",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterInfoDialogsLoadable",
    "WAWebNewsletterOpenAtAction",
    "WAWebNewsletterOpenQPLLogger",
    "WAWebNewsletterOpenQPLLoggerV2",
    "WAWebNewsletterRoleIdentifier",
    "WAWebPDFNGatingUtils",
    "WAWebPDFNModal.react",
    "WAWebSideNavButtonsActivityModel",
    "WDSDialogBridge",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.chatEntryPoint,
        n = e.discoverySurface,
        a = e.failInteraction,
        i = e.identifier,
        l = e.serverMessageId,
        u = e.stopInteraction;
      if (o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos())
        return c({
          identifier: i,
          chatEntryPoint: t,
          serverMessageId: l,
          discoverySurface: n,
          failInteraction: a,
          stopInteraction: u,
        });
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebPDFNModal.react"), {
          pdfnId: o("WAWebPDFNGatingUtils").getNewsletterNuxOrTos(),
          verifyTosAccepted: o("WAWebPDFNGatingUtils")
            .hasAckedNewsletterNuxOrTos,
          runIfTosAccepted: function () {
            return c({
              identifier: i,
              chatEntryPoint: t,
              serverMessageId: l,
              discoverySurface: n,
              failInteraction: a,
              stopInteraction: u,
            });
          },
        }),
      );
    }
    function c(e) {
      var t = e.chatEntryPoint,
        n = e.discoverySurface,
        a = e.failInteraction,
        i = e.identifier,
        l = e.onNewsletterOpen,
        u = e.serverMessageId,
        c = e.stopInteraction,
        m;
      if (
        o("WAWebNewsletterGatingUtils").isNewsletterOpenQPLImprovementsEnabled()
      ) {
        var p;
        m = new (o(
          "WAWebNewsletterOpenQPLLoggerV2",
        ).WAWebNewsletterOpenQPLLoggerV2)();
        var _ = o("WAWebNewsletterRoleIdentifier").getRoleByIdentifier(i);
        (p = m) == null ||
          p.annotate({
            role:
              _ != null
                ? _
                : o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                    .Guest,
            unreadCount: 0,
            discoverySurface: n,
            isCached: !1,
          });
      }
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebLoadingNewsletterPreviewModal.react"), {
          identifier: i,
          chatEntryPoint: t,
          qpl: m,
          onFailure: function () {
            var e;
            (e = m) == null || e.end({ success: !1 });
          },
          onSuccess: function (n) {
            var e;
            if (
              o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled() &&
              !o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterOpenQPLImprovementsEnabled()
            ) {
              var i;
              ((e = new (o(
                "WAWebNewsletterOpenQPLLogger",
              ).WAWebNewsletterOpenQPLLogger)()),
                (i = e) == null || i.annotate(n, t));
            } else e = m;
            (o(
              "WAWebSideNavButtonsActivityModel",
            ).setLastActiveNewsletterEntryPoint(t),
              d({
                chat: n,
                chatEntryPoint: t,
                serverMessageId: u,
                onNewsletterOpen: l,
              })
                .then(function (t) {
                  var r;
                  (o("WAWebComposeBoxActions").ComposeBoxActions.focus(n),
                    c && c(),
                    (r = e) == null || r.end({ success: t }));
                })
                .catch(function (t) {
                  var n;
                  ((n = e) == null || n.end({ success: !1 }),
                    a && a(r("getErrorSafe")(t)));
                }));
          },
        }),
      );
    }
    async function d(e) {
      var t = e.chat,
        n = e.chatEntryPoint,
        r = e.onNewsletterOpen,
        a = e.serverMessageId,
        i =
          a != null &&
          a > 0 &&
          o(
            "WAWebNewsletterGatingUtils",
          ).isNavigationToForwardedNewsletterMessageEnabled()
            ? await o("WAWebNewsletterOpenAtAction").openNewsletterAt({
                newsletterJid: o("WAJids").toNewsletterJid(t.id.toJid()),
                serverId: a,
                chatEntryPoint: n,
                onMessageDeleted: function () {
                  (o("WAWebModalManager").ModalManager.close(),
                    o("WDSDialogBridge").openWDSDialog(
                      s.jsx(
                        o("WAWebNewsletterInfoDialogsLoadable")
                          .NewsletterMessageDeletedPopupLoadable,
                        {},
                      ),
                    ));
                },
              })
            : await o("WAWebCmd").Cmd.openChatBottom({
                chat: t,
                chatEntryPoint: n,
              });
      return (r == null || r(), i);
    }
    l.openNewsletterPreviewChat = u;
  },
  98,
);
