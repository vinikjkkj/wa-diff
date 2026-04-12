__d(
  "WAWebNewsletterRevokeInvitePopup.react",
  [
    "fbt",
    "WAWebCommonNewsletterStrings",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterErrorPopups.react",
    "WAWebNewsletterName.react",
    "WAWebParticipantListUtils",
    "WAWebRevokeNewsletterAdminInviteAction",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = { buttonGroup: { justifyContent: "xl56j7k", $$css: !0 } };
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            r = e.contact,
            a = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  (o("WAWebModalManager").closeModalManager(),
                    yield m({ chat: t, contact: r }));
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          try {
            (yield o(
              "WAWebRevokeNewsletterAdminInviteAction",
            ).revokeNewsletterAdminInviteAction(t, r),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: o("WAWebCommonNewsletterStrings").getInviteRevokedText(),
                }),
              ),
              o("WAWebModalManager").closeModalManager());
          } catch (e) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebNewsletterErrorPopups.react")
                  .NewsletterCouldNotRevokeInvitePopup,
                { onOK: a, contact: r },
              ),
              { transition: "modal-flow" },
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = e.chat,
        r = e.contact,
        a = c(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield m({ chat: t, contact: r });
          }),
          [t, r],
        ),
        i = o("WAWebParticipantListUtils").getFirstNameForContact(r),
        l = s._(/*BTDS*/ "Revoke the admin invite for {contact-name}?", [
          s._param("contact-name", i),
        ]),
        d = s._(
          /*BTDS*/ "If you revoke the invite, {contact-name} won't be able to use it to become an admin of this channel.",
          [s._param("contact-name", i)],
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: l,
        onOK: a,
        onCancel: o("WAWebModalManager").closeModalManager,
        okText: o("WAWebCommonNewsletterStrings").getRevokeButtonFullText(),
        children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
          color: "secondary",
          children: d,
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.chat;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        marginBottom: 12,
        children: [
          u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: t.id,
            size: o("WAWebDetailImage.react").DetailImageSize.Medium,
            xstyle: o("WAWebUISpacing").uiMargin.bottom12,
            showOutline: !0,
          }),
          u.jsx(o("WAWebText.react").WAWebTextLarge, {
            as: "h1",
            xstyle: o("WAWebUISpacing").uiMargin.bottom12,
            children: u.jsx(o("WAWebNewsletterName.react").NewsletterName, {
              chat: t,
              checkmarkLarge: !0,
            }),
          }),
          u.jsx(o("WAWebText.react").WAWebTextSmall, {
            children: o(
              "WAWebCommonNewsletterStrings",
            ).getChannelAdminInviteText(),
          }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.chat,
        r = e.contact,
        a = c(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield m({ chat: t, contact: r });
          }),
          [t, r],
        ),
        i = u.jsx(f, { chat: t });
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: i,
        onOK: a,
        onCancel: o("WAWebModalManager").closeModalManager,
        okText: o("WAWebCommonNewsletterStrings").getRevokeButtonFullText(),
        buttonGroupStyle: [d.buttonGroup, o("WAWebUISpacing").uiPadding.all0],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.NewsletterRevokeInvitePopupWithContactName = _),
      (l.NewsletterRevokeInvitePopupWithNewsletterInformation = g));
  },
  226,
);
