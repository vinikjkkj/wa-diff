__d(
  "WAWebNewsletterErrorPopups.react",
  [
    "fbt",
    "WAWebBackendErrors",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFbtIntlList",
    "WAWebModalManager",
    "WAWebParticipantListUtils",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.chat,
        r = s._(/*BTDS*/ "Update not available"),
        a = s._(
          /*BTDS*/ "You can follow this channel to see all future updates",
        ),
        i = ((t = n.newsletterMetadata) == null ? void 0 : t.isPreview) === !0,
        l = i ? r : null,
        c = i ? a : r;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: l,
        onOK: o("WAWebModalManager").closeModalManager,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-error-unavailable",
        },
        children: c,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      var e = s._(/*BTDS*/ "Update deleted"),
        t = s._(/*BTDS*/ "The channel admin deleted this update.");
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: e,
        onOK: o("WAWebModalManager").closeModalManager,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-error-deleted",
        },
        children: t,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      r("vulture")("Ch9JkW0MQMa870xZOUSyTP0GIbo=");
      var e = s._(
        /*BTDS*/ "An error occurred while sending invite. Please try again.",
      );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: o("WAWebModalManager").closeModalManager,
        onCancel: o("WAWebModalManager").closeModalManager,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-error-sending-invite",
        },
        children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
          color: "secondary",
          children: e,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.error,
        n = e.onOK,
        a =
          t instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
          (t.status === 404 || t.statusCode === 404),
        i = a
          ? s._(/*BTDS*/ "This invite has been revoked.")
          : s._(/*BTDS*/ "Couldn't accept the admin invite. Please try again.");
      return u.jsx(
        o("WAWebConfirmPopup.react").ConfirmPopup,
        babelHelpers.extends(
          {
            onOK: a ? o("WAWebModalManager").closeModalManager : n,
            okText: a ? null : r("WAWebFbtCommon")("Try again"),
          },
          a ? {} : { onCancel: o("WAWebModalManager").closeModalManager },
          {
            tsNavigationData: {
              surface: "unknown",
              viewName: "newsletter-error-accept-invite",
            },
            children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              color: "secondary",
              children: i,
            }),
          },
        ),
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.contact,
        n = e.onOK,
        a = o("WAWebParticipantListUtils").getFirstNameForContact(t),
        i = s._(
          /*BTDS*/ "Couldn't revoke the admin invite for {contact-revoke-name}. Please try again.",
          [s._param("contact-revoke-name", a)],
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: n,
        onCancel: o("WAWebModalManager").closeModalManager,
        okText: r("WAWebFbtCommon")("Try again"),
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-error-revoke-invite",
        },
        children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
          color: "secondary",
          children: i,
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.contact,
        n = e.onOK,
        a = o("WAWebParticipantListUtils").getFirstNameForContact(t),
        i = o("WAWebUserPrefsMeUser").isMeAccount(t.id)
          ? s._(
              /*BTDS*/ "Couldn't dismiss yourself as admin. Please try again.",
            )
          : s._(
              /*BTDS*/ "Couldn't dismiss {contact-revoke-name} as admin. Please try again.",
              [s._param("contact-revoke-name", a)],
            );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: n,
        onCancel: o("WAWebModalManager").closeModalManager,
        okText: r("WAWebFbtCommon")("Try again"),
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-error-dismiss-admin",
        },
        children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
          color: "secondary",
          children: i,
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = 4;
    function h(e) {
      var t = e.contactList,
        n = e.numberOfSuccessfulInvites,
        a = e.onOk,
        i = s._(
          /*BTDS*/ '_j{"*":"{number-of-overflow-failed-invitees} others","_1":"1 other"}',
          [s._plural(t.length - (g - 1), "number-of-overflow-failed-invitees")],
        ),
        l = t
          .map(function (e, n) {
            return n === g - 1 && t.length > g
              ? i.toString()
              : o("WAWebParticipantListUtils").getFirstNameForContact(e);
          })
          .slice(0, g),
        c = r("WAWebFbtIntlList")(
          l,
          r("WAWebFbtIntlList").CONJUNCTIONS.AND,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ),
        d =
          n > 0
            ? s._(
                /*BTDS*/ '_j{"*":"Only {number-of-successful-invites} invites were sent. Couldn\'t send invites to {localized-failed-invites-lists}.","_1":"Only {number-of-successful-invites} invite was sent. Couldn\'t send invites to {localized-failed-invites-lists}."}',
                [
                  s._plural(n),
                  s._param("number-of-successful-invites", n),
                  s._param("localized-failed-invites-lists", c),
                ],
              )
            : s._(
                /*BTDS*/ "Couldn't send invites to {localized-failed-invites-lists}.",
                [s._param("localized-failed-invites-lists", c)],
              );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: a,
        onCancel: o("WAWebModalManager").closeModalManager,
        okText: r("WAWebFbtCommon")("Try again"),
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-error-send-invite-list",
        },
        children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
          color: "secondary",
          children: d,
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.NewsletterMessageNotFoundPopup = c),
      (l.NewsletterMessageDeletedPopup = d),
      (l.NewsletterErrorSendingInvitePopup = m),
      (l.NewsletterCouldNotAcceptInvitePopup = p),
      (l.NewsletterCouldNotRevokeInvitePopup = _),
      (l.NewsletterCouldNotDismissAdminPopup = f),
      (l.NewsletterCouldNotSendInviteListPopup = h));
  },
  226,
);
