__d(
  "WAWebNewsletterPendingInvitesAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebNewsletterPendingInvitesJob",
    "WAWebNewsletterSubscriberModel",
    "WAWebNewsletterValidationUtils",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t,
        n =
          (t = o("WAWebContactCollection").ContactCollection.get(e)) != null
            ? t
            : o("WAWebContactCollection").ContactCollection.gadd(e);
      return e.isLid() && (n == null ? void 0 : n.phoneNumber) != null
        ? o("WAWebContactCollection").ContactCollection.get(n.phoneNumber)
        : n;
    }
    async function d(t) {
      var n;
      if (!o("WAWebChatGetters").getIsNewsletter(t))
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[getNewsletterPendingInvitesAction] non-newsletter chat",
                ])),
            )
            .tags("newsletter")
            .sendLogs("pending-invites-of-non-newsletter"),
          []
        );
      if (!(t != null && (n = t.newsletterMetadata) != null && n.iAmOwner()))
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[getNewsletterPendingInvitesAction] owner-only access",
                ])),
            )
            .tags("newsletter")
            .sendLogs("non-channel-owner-viewing-pending-invites"),
          []
        );
      try {
        var a,
          i,
          l = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            t.id.toJid(),
          ),
          d = await o(
            "WAWebNewsletterPendingInvitesJob",
          ).getNewsletterPendingInvites(l),
          m =
            d != null
              ? r("compactMap")(d, function (e) {
                  var t = c(e);
                  return new (o(
                    "WAWebNewsletterSubscriberModel",
                  ).NewsletterSubscriber)({
                    id: t == null ? void 0 : t.id,
                    contact: t,
                    isPendingAdmin: !0,
                  });
                })
              : void 0,
          p = m != null ? m : [];
        return (
          t == null ||
            (a = t.newsletterMetadata) == null ||
            (a = a.pendingAdmins) == null ||
            a.reset(),
          t == null ||
            (i = t.newsletterMetadata) == null ||
            (i = i.pendingAdmins) == null ||
            i.add(p, { sort: !1 }),
          p.map(function (e) {
            return e.contact;
          })
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[getNewsletterPendingInvitesAction] fetch invites failed",
                ])),
            )
            .tags("newsletter")
            .sendLogs("pending-invites-on-newsletter-failed"),
          []
        );
      }
    }
    l.getNewsletterPendingInvitesAction = d;
  },
  98,
);
