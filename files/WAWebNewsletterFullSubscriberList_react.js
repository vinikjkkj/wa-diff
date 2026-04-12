__d(
  "WAWebNewsletterFullSubscriberList.react",
  [
    "WAWebBoolFunc",
    "WAWebCommonNewsletterStrings",
    "WAWebContactsModal.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSubscriberList.react",
    "WAWebUserPrefsNewsletter",
    "react",
    "useWAWebNewsletterSubscribers",
    "useWAWebNewsletterSubscribersContextMenu",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = e.newsletter,
        n = e.onCancel,
        a = e.onTransferOwnershipSelection,
        i = e.onVerification,
        l = o("useWAWebNewsletterSubscribers").useNewsletterSubscribers({
          newsletter: t,
          count: o("WAWebNewsletterGatingUtils").getMaxSubscriberNumber(),
          cacheType: o("WAWebUserPrefsNewsletter")
            .ValidCachedNewsletterSubscriberKeys.FULL,
          includeMeContact: !0,
        }),
        c = l[0],
        d = new Map(
          c.map(function (e) {
            var t = e.contact.id,
              n = e.role;
            return [t, { role: n }];
          }),
        ),
        m = o(
          "useWAWebNewsletterSubscribersContextMenu",
        ).useNewsletterSubscribersContextMenu({
          chat: t,
          isFullModal: !0,
          onVerification: i,
          followerInformation: new Map(
            c.map(function (e) {
              var t = e.contact,
                n = e.role;
              return [t.id, { newsletterRole: n }];
            }),
          ),
          newsletter: t,
          onTransferOwnershipSelection: a,
        }),
        p = m[0],
        _ = m[1],
        f = u(
          function (e) {
            return o("WAWebNewsletterSubscriberList.react").showContextForCell(
              e,
              t == null ? void 0 : t.newsletterMetadata,
            );
          },
          [t],
        );
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WAWebContactsModal.react"), {
            title: o(
              "WAWebCommonNewsletterStrings",
            ).getSearchForChannelFollowersText(),
            onCancel: n,
            contacts: c.map(function (e) {
              var t = e.contact;
              return t;
            }),
            newsletterRoles: d,
            isNewsletter: !0,
            openContextOnClick: !0,
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            contextMenu: f,
            onContext: _,
          }),
          p,
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
