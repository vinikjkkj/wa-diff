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
          var t,
            n = e.expiration,
            a = e.invitee,
            i = e.isSentByMe,
            l = e.newsletterWid;
          if (!(l == null || n == null)) {
            var s = r("WAWebNewsletterCollection").get(l);
            if (!i) {
              var c = o(
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
                    return m(l, n, c);
                  },
                }),
              );
            }
            var d =
              a != null
                ? o("WAWebContactCollection").ContactCollection.get(a)
                : null;
            s != null &&
              s != null &&
              (t = s.newsletterMetadata) != null &&
              t.iAmAdminOrOwner() &&
              d != null &&
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebNewsletterRevokeInvitePopup.react")
                    .NewsletterRevokeInvitePopupWithNewsletterInformation,
                  { chatId: s.id, contact: d },
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
                chatId: i.id,
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
