__d(
  "WAWebNativeContactsNuxPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebContactLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWdsIllFavoritesIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        contactsHeroIcon: { strokeWidth: "xupzf07", $$css: !0 },
        contactsHeroIconHeart: { display: "x1s85apg", $$css: !0 },
        contactsHeroIconAvatar: { fill: "x2xlkv5", $$css: !0 },
        contactsHeroIconBackpage: { fill: "x8e2w6c", $$css: !0 },
        text: { maxWidth: "x1lr1uin", $$css: !0 },
      };
    function m(e) {
      var t = e.source;
      c(function () {
        o("WAWebContactLogging").logViewNativeContactNux(t);
      }, []);
      var n = s._(/*BTDS*/ "Manage contacts from web"),
        a = s._(
          /*BTDS*/ "On your phone, turn on WhatsApp contacts to start managing contacts from web. Go to WhatsApp > Settings > Privacy > Contacts. {=m2}",
          [
            s._implicitParam(
              "=m2",
              u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o("WAWebFaqUrl").getNativeContactLearnMoreFaqUrl(),
                children: s._(/*BTDS*/ "Learn more"),
              }),
            ),
          ],
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: o("WAWebModalManager").closeModalManager,
        okText: r("WAWebFbtCommon")("OK"),
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          children: [
            u.jsx(o("WAWebWdsIllFavoritesIcon.react").WdsIllFavoritesIcon, {
              xstyle: o("WAWebUISpacing").uiMargin.start30,
              height: 96,
              iconXstyle: d.contactsHeroIcon,
              innerStyles: {
                heart: d.contactsHeroIconHeart,
                avatar: d.contactsHeroIconAvatar,
                backpage: d.contactsHeroIconBackpage,
              },
            }),
            u.jsx(o("WAWebText.react").WAWebTextLarge, {
              weight: "bold",
              xstyle: o("WAWebUISpacing").uiMargin.top20,
              textAlign: "center",
              children: n,
            }),
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              xstyle: [o("WAWebUISpacing").uiMargin.top16, d.text],
              textAlign: "center",
              children: a,
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
