__d(
  "WAWebCheckIfDomainIsPreviewable",
  [
    "WAWebChatGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterIsDomainPreviewableAction",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n =
        t != null
          ? o("WAWebChatGetters").getIsNewsletter(
              o("WAWebStateUtils").unproxy(t),
            )
          : !1;
      if (
        !n ||
        !o("WAWebNewsletterGatingUtils").isNewsletterHideNewsUrlPreviewEnabled()
      )
        return !0;
      var r = await o(
        "WAWebNewsletterIsDomainPreviewableAction",
      ).isDomainPreviewableAction(e);
      return r;
    }
    l.checkIfDomainIsPreviewable = e;
  },
  98,
);
