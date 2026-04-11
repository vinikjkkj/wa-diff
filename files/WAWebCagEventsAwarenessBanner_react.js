__d(
  "WAWebCagEventsAwarenessBanner.react",
  [
    "fbt",
    "WAWebAnnouncementSpeakerIcon.react",
    "WAWebConversationBanner.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUserPrefsEvents",
    "react",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        banner: { backgroundColor: "x1280gxy", $$css: !0 },
        announcementSpeaker: { color: "xo1mcw5", $$css: !0 },
      };
    function d(e) {
      var t = e.onClose,
        n = e.ref;
      (o(
        "WAWebUserPrefsEvents",
      ).getCagEventsAwarenessBannerFirstSeenTimestamp() ||
        o(
          "WAWebUserPrefsEvents",
        ).setCagEventsAwarenessBannerFirstSeenTimestamp(),
        o("useWAWebTimeout").useAlarm(
          t,
          o(
            "WAWebUserPrefsEvents",
          ).getCagEventsAwarenessBannerAutoDismissalExpiration(),
          { immediate: !0, isGlobal: !0 },
        ));
      var a = o("WAWebFaqUrl").getEventsLearnMoreFaqUrl(),
        i = o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON;
      return u.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "CagEventsAwarenessBanner",
        escapable: !0,
        children: u.jsx(r("WAWebConversationBanner.react"), {
          ref: n,
          xstyle: c.banner,
          onClose: t,
          "data-tab": i,
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              u.jsx(r("WAWebFlexItem.react"), {
                xstyle: o("WAWebUISpacing").uiPadding.end18,
                children: u.jsx(
                  o("WAWebAnnouncementSpeakerIcon.react")
                    .AnnouncementSpeakerIcon,
                  { iconXstyle: c.announcementSpeaker, width: 40, height: 40 },
                ),
              }),
              u.jsx(r("WAWebFlexItem.react"), {
                children: u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                  as: "span",
                  children: [
                    s._(/*BTDS*/ "Create events in announcement groups."),
                    " ",
                    u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: a,
                      tabIndex: 0,
                      "data-tab": i,
                      children: r("WAWebFbtCommon")("Learn more"),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
