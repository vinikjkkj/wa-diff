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
            n,
            a = e.expiration,
            i = e.invitee,
            l = e.isSentByMe,
            s = e.newsletterWid;
          if (!(s == null || a == null)) {
            var c = r("WAWebNewsletterCollection").get(s);
            if (!l) {
              var d = o(
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
                    return m(s, a, d);
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
