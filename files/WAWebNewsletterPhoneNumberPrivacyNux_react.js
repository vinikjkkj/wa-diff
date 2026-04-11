__d(
  "WAWebNewsletterPhoneNumberPrivacyNux.react",
  [
    "fbt",
    "WAWebAccountCircleIcon.react",
    "WAWebDialpadIcon.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebNewsletterFaqUrl",
    "WAWebNewsletterPrivacyRow.react",
    "WAWebPhoneNumberPrivacyNux.react",
    "WAWebUserPrefsMeUser",
    "WDSIconIcVisibilityOff.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { tealColor: { color: "x1v5yvga", $$css: !0 } };
    function d() {
      var e = s._(/*BTDS*/ "Added privacy for your profile and phone number"),
        t = u.jsxs(u.Fragment, {
          children: [
            u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
              icon: u.jsx(r("WDSIconIcVisibilityOff.react"), {
                iconXstyle: c.tealColor,
                height: 20,
              }),
              text: s._(
                /*BTDS*/ "Followers can't see when you follow or interact in a channel.",
              ),
              title: s._(/*BTDS*/ "You're not visible to other followers"),
            }),
            u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
              icon: u.jsx(o("WAWebDialpadIcon.react").DialpadIcon, {
                iconXstyle: c.tealColor,
                height: 20,
              }),
              text: s._(
                /*BTDS*/ "Admins can't see your full phone number, unless they've saved you as a contact.",
              ),
              title: s._(/*BTDS*/ "Your phone number is protected"),
            }),
            u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
              icon: u.jsx(o("WAWebAccountCircleIcon.react").AccountCircleIcon, {
                iconXstyle: c.tealColor,
                height: 20,
              }),
              text: s._(
                /*BTDS*/ "Admins may also see your profile picture based on your privacy settings.",
              ),
              title: s._(/*BTDS*/ "Admins can see your profile name"),
            }),
          ],
        });
      return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
        cancelText: r("WAWebFbtCommon")("Learn more"),
        customContent: t,
        displayName: o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
        okText: r("WAWebFbtCommon")("OK"),
        onCancel: m,
        onOK: o("WAWebModalManager").closeModalManager,
        testid: void 0,
        title: e,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebNewsletterFaqUrl").getNewsletterPrivacyFaqUrl(),
      );
    }
    l.default = d;
  },
  226,
);
