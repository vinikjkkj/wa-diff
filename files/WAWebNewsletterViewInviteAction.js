__d(
  "WAWebNewsletterViewInviteAction",
  [
    "WALogger",
    "WAWebContactCollection",
    "WAWebLoadNewsletterPreviewChatAction",
    "WAWebModalManager",
    "WAWebNewsletterAcceptAdminInviteModal.react",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterRevokeInvitePopup.react",
    "WAWebPDFNModal.react",
    "WAWebWamoPDFNGatingUtils",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.expiration,
            n = e.invitee,
            a = e.isSentByMe,
            i = e.newsletterWid;
          if (!(i == null || t == null)) {
            var l = r("WAWebNewsletterCollection").get(i);
            if (!a) {
              var s = o(
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
                    return m(i, t, s);
                  },
                }),
              );
            }
            var c =
              n != null
                ? o("WAWebContactCollection").ContactCollection.get(n)
                : null;
            l != null &&
              o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
                l == null ? void 0 : l.newsletterMetadata,
              ) &&
              c != null &&
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebNewsletterRevokeInvitePopup.react")
                    .NewsletterRevokeInvitePopupWithNewsletterInformation,
                  { chat: l, contact: c },
                ),
              );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          try {
            var i = yield o(
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
        })),
        p.apply(this, arguments)
      );
    }
    l.viewNewsletterInviteAction = c;
  },
  98,
);
