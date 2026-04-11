__d(
  "WAWebNewsletterPendingInvitesAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterPendingInvitesJob",
    "WAWebNewsletterSubscriberModel",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
          if (
            !o("WAWebNewsletterMembershipUtil").iAmOwner(
              t == null ? void 0 : t.newsletterMetadata,
            )
          )
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
            var n,
              a,
              i = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                t.id.toJid(),
              ),
              l = yield o(
                "WAWebNewsletterPendingInvitesJob",
              ).getNewsletterPendingInvites(i),
              d =
                l != null
                  ? r("compactMap")(l, function (e) {
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
              m = d != null ? d : [];
            return (
              t == null ||
                (n = t.newsletterMetadata) == null ||
                (n = n.pendingAdmins) == null ||
                n.reset(),
              t == null ||
                (a = t.newsletterMetadata) == null ||
                (a = a.pendingAdmins) == null ||
                a.add(m, { sort: !1 }),
              m.map(function (e) {
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
        })),
        m.apply(this, arguments)
      );
    }
    l.getNewsletterPendingInvitesAction = d;
  },
  98,
);
