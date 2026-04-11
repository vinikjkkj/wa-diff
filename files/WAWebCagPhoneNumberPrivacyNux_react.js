__d(
  "WAWebCagPhoneNumberPrivacyNux.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebPhoneNumberPrivacyNux.react",
    "WAWebPhoneUtils",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = s._(/*BTDS*/ "Your phone number is visible in this chat"),
        t = s._(
          /*BTDS*/ "Members can see your phone number because you are a community admin.",
        );
      return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
        testid: void 0,
        onOK: o("WAWebModalManager").closeModalManager,
        okText: r("WAWebFbtCommon")("OK"),
        onCancel: m,
        cancelText: s._(/*BTDS*/ "Learn more"),
        displayName: o("WAWebPhoneUtils").formatPhone(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
        ),
        title: e,
        subTitle: t,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      var e = s._(/*BTDS*/ "Added privacy for your phone number"),
        t = s._(
          /*BTDS*/ "Your phone number is only visible to community admins and people who have saved you as a contact. All other members will not see your full phone number in this chat.",
        );
      return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
        testid: void 0,
        onOK: o("WAWebModalManager").closeModalManager,
        okText: r("WAWebFbtCommon")("OK"),
        onCancel: m,
        cancelText: s._(/*BTDS*/ "Learn more"),
        displayName: o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
        title: e,
        subTitle: t,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getCagPhoneNumberHidingFaqUrl(),
      );
    }
    ((l.CagPhoneNumberSharedNux = c), (l.CagPhoneNumberHiddenNux = d));
  },
  226,
);
