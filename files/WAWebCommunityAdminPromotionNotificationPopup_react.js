__d(
  "WAWebCommunityAdminPromotionNotificationPopup.react",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebModal.react",
    "WAWebWdsPictoCommunitiesHeartIcon.react",
    "WDSButtonGroup.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onContinue,
        n = e.onDemote,
        a = e.ref,
        i = function (t) {
          (t.stopPropagation(), t.preventDefault(), n());
        },
        l = function (n) {
          (n.stopPropagation(), n.preventDefault(), t());
        },
        c = { enter: l, escape: l },
        m = u.jsx(r("WDSButtonGroup.react"), {
          width: "hug",
          orientation: "horizontal",
          primaryButtonProps: {
            variant: "filled",
            type: "default",
            onPress: l,
            testid: "popup-controls-continue",
            label: s._(/*BTDS*/ "Continue"),
          },
          secondaryButtonProps: {
            variant: "outline",
            type: "default",
            onPress: i,
            testid: "popup-controls-demote",
            label: s._(/*BTDS*/ "Dismiss yourself as admin"),
          },
        }),
        p = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: d(),
          children: s._(/*BTDS*/ "admin tools"),
        }),
        _ = s._(
          /*BTDS*/ "You can send announcements, manage the community and use {learn-more-link} to help keep it safe. Your profile is now visible to community members.",
          [s._param("learn-more-link", p)],
        );
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: a,
        handlers: c,
        children: u.jsx(o("WAWebModal.react").Modal, {
          type: o("WAWebModal.react").ModalTheme.Promote,
          actions: m,
          children: u.jsxs("div", {
            className: "x78zum5 xdt5ytf x6s0dn4 x16w0wmm",
            children: [
              u.jsx("div", {
                className: "x1yztbdb",
                children: u.jsx(
                  o("WAWebWdsPictoCommunitiesHeartIcon.react")
                    .WdsPictoCommunitiesHeartIcon,
                  { width: 130 },
                ),
              }),
              u.jsx("div", {
                className: "x1yztbdb x2b8uid",
                children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  className: "x1603h9y x1u7k74 xk50ysn",
                  text: s._(/*BTDS*/ "You're now a community admin"),
                }),
              }),
              u.jsx("div", {
                className: "xg0cujg",
                children: u.jsx("div", { className: "x1f6kntn", children: _ }),
              }),
            ],
          }),
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return p("communities/learning");
    }
    var m = "https://www.whatsapp.com";
    function p(e) {
      return m + "/" + e + "?lang=" + r("WAWebL10N").getNormalizedLocale();
    }
    l.default = c;
  },
  226,
);
