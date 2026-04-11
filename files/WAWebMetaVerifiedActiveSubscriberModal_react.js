__d(
  "WAWebMetaVerifiedActiveSubscriberModal.react",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebImg.react",
    "WAWebMetaVerifiedUserActionLogger",
    "WAWebModalManager",
    "WAWebPsaVerifiedBlueIcon.react",
    "WAWebText.react",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMetaVerifiedUserActionAction",
    "WAWebWamEnumMetaVerifiedUserActionReferral",
    "WAWebWamEnumMetaVerifiedUserActionSurface",
    "bx",
    "react",
    "useWAWebLogEventOnce",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { headerText: { textAlign: "x2b8uid", $$css: !0 } };
    function d() {
      var e,
        t,
        n,
        a = o("WAWebThemeContext").useIsDarkTheme(),
        i = u.jsxs(u.Fragment, {
          children: [
            s._(
              /*BTDS*/ "Your verified badge shows up on your business profile and in chats, helping you build trust and credibility with customers.",
            ),
            u.jsx("br", {}),
            u.jsx("br", {}),
            s._(
              /*BTDS*/ "Explore and use your Meta Verified benefits - including verified channels, a custom web page, and linking devices - on WhatsApp Business on your phone.",
            ),
          ],
        }),
        l = u.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          size: 88,
          quality: o("WAWebDetailImage.react").DetailImageQuality.High,
        }),
        d = u.jsx((t = o("WAWebFlex.react")).FlexItem, {
          children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: o("WAWebConnModel").Conn.pushname,
            ellipsify: !0,
            titlify: !0,
          }),
        }),
        m = u.jsx(t.FlexItem, {
          xstyle: (n = o("WAWebUISpacing")).uiMargin.start2,
          children: u.jsx(
            o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon,
            { height: 20, width: 20 },
          ),
        }),
        p = [d, m],
        _ = s._(/*BTDS*/ "Your Meta Verified subscription is active"),
        f = { draggable: !1, style: { width: 59.49, height: 12 } };
      return (
        o("useWAWebLogEventOnce").useLogEventOnce(function () {
          o("WAWebMetaVerifiedUserActionLogger").logMetaVerifiedModalEvents(
            o("WAWebWamEnumMetaVerifiedUserActionAction")
              .META_VERIFIED_USER_ACTION_ACTION.VIEW,
            o("WAWebWamEnumMetaVerifiedUserActionSurface")
              .META_VERIFIED_USER_ACTION_SURFACE.WEB_ACTIVE_SUBSCRIBER_DIALOG,
            o("WAWebWamEnumMetaVerifiedUserActionReferral")
              .META_VERIFIED_USER_ACTION_REFERRAL.BUSINESS_TOOLS,
          );
        }),
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          okText: r("WAWebFbtCommon")("Close"),
          children: u.jsxs(t.FlexColumn, {
            align: "center",
            xstyle: [n.uiMargin.vertAuto, n.uiPadding.bottom16],
            children: [
              u.jsx((e = r("WAWebBox.react")), {
                xstyle: [
                  c.headerText,
                  n.uiMargin.horiz8,
                  n.uiMargin.top16,
                  n.uiMargin.bottom8,
                ],
                children: l,
              }),
              u.jsx(e, { children: u.jsx(t.FlexRow, { children: p }) }),
              u.jsx(e, {
                xstyle: [
                  c.headerText,
                  n.uiMargin.horiz8,
                  n.uiMargin.top16,
                  n.uiMargin.bottom8,
                ],
                children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
                  children: _,
                }),
              }),
              u.jsxs(e, {
                xstyle: [n.uiMargin.horiz8, n.uiMargin.vert8],
                children: [
                  u.jsx(t.FlexColumn, {
                    children: u.jsx(t.FlexItem, {
                      xstyle: n.uiMargin.bottom8,
                      children: a
                        ? u.jsx(
                            r("WAWebImg.react"),
                            babelHelpers.extends(
                              { src: r("bx").getURL(r("bx")("31849")) },
                              f,
                            ),
                          )
                        : u.jsx(
                            r("WAWebImg.react"),
                            babelHelpers.extends(
                              { src: r("bx").getURL(r("bx")("31850")) },
                              f,
                            ),
                          ),
                    }),
                  }),
                  i,
                ],
              }),
            ],
          }),
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
