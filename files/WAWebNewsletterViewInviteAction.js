__d(
  "WAWebNewsletterViewInviteAction",
  [
    "WALogger",
    "WAWebContactCollection",
    "WAWebLoadNewsletterPreviewChatAction",
    "WAWebModalManager",
    "WAWebNewsletterAcceptAdminInviteModal.react",
    "WAWebNewsletterCollection",
    "WAWebNewsletterRevokeInvitePopup.react",
    "WAWebPDFNModal.react",
    "WAWebWamoPDFNGatingUtils",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    async function c(e) {
      var t,
        n,
        a = e.expiration,
        i = e.invitee,
        l = e.isSentByMe,
        s = e.newsletterWid;
      if (!(s == null || a == null)) {
        var c = r("WAWebNewsletterCollection").get(s);
        if (!l) {
          var m = o(
            "WAWebWamoPDFNGatingUtils",
          ).hasAckedNewsletterAdminInviteNuxOrTos();
          return o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebPDFNModal.react"), {
              pdfnId: o(
                "WAWebWamoPDFNGatingUtils",
              ).getNewsletterAdminInviteNuxOrTos(),
              verifyTosAccepted: o("WAWebWamoPDFNGatingUtils")
                .hasAckedNewsletterAdminInviteNuxOrTos,
              runIfTosAccepted: function () {
                return d(s, a, m);
              },
            }),
          );
        }
        var p =
          i != null
            ? o("WAWebContactCollection").ContactCollection.get(i)
            : null;
        c != null &&
          (t =
            c == null || (n = c.newsletterMetadata) == null
              ? void 0
              : n.iAmAdminOrOwner()) != null &&
          t &&
          p != null &&
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebNewsletterRevokeInvitePopup.react")
                .NewsletterRevokeInvitePopupWithNewsletterInformation,
              { chat: c, contact: p },
            ),
          );
      }
    }
    async function d(t, n, a) {
      try {
        var i = await o(
          "WAWebLoadNewsletterPreviewChatAction",
        ).loadNewsletterPreviewChat(t.toString());
        if (i == null) throw r("err")("Failed to retrieve newsletter");
        o("WAWebModalManager").ModalManager.open(
          u.jsx(r("WAWebNewsletterAcceptAdminInviteModal.react"), {
            chat: i,
            expiration: n,
            extendedNux: a,
          }),
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[openNewsletterAndInviteModal] admin invite open failed ",
                "",
              ])),
            t,
          )
          .tags("newsletter")
          .sendLogs("newsletter-failed-to-open-newsletter-invite");
      }
    }
    l.viewNewsletterInviteAction = c;
  },
  98,
);
