__d(
  "WAWebIsPhotoPollSenderEnabled",
  [
    "WAWebChatGetters",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterExtendedGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebChatGetters").getIsNewsletter(e)
        ? !!(
            o(
              "WAWebNewsletterCommonGatingUtils",
            ).isNewsletterPhotoPollSenderEnabled() ||
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterPhotoPollCapabilityEnabled(e)
          )
        : !1;
    }
    l.isPhotoPollSenderEnabled = e;
  },
  98,
);
