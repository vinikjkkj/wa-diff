__d(
  "WAWebNewsletterSubscriberListAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterSubscriberListJob",
    "WAWebNewsletterSubscriberModel",
    "WAWebNewsletterValidationUtils",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      var n, r;
      if (t != null) {
        var a = t.map(function (e) {
          var t = e.adminProfile,
            n = e.contact,
            r = e.role;
          return new (o("WAWebNewsletterSubscriberModel").NewsletterSubscriber)(
            {
              id: n.id,
              adminProfile: t,
              contact: n,
              membership: r,
              isPendingAdmin: !1,
            },
          );
        });
        ((n = e.newsletterMetadata) == null ||
          (n = n.subscribers) == null ||
          n.reset(),
          (r = e.newsletterMetadata) == null ||
            (r = r.subscribers) == null ||
            r.add(a, { sort: !0 }));
      }
    }
    function d(e) {
      if (e == null) return [];
      var t = e.reduce(function (e, t) {
        var n = o("WAWebContactCollection").ContactCollection.get(t.id),
          r =
            !o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterMultiAdminLidMigrationEnabled() &&
            n != null &&
            n.phoneNumber
              ? o("WAWebContactCollection").ContactCollection.get(n.phoneNumber)
              : n,
          a =
            t.role ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin ||
            t.role ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
        if (r == null) {
          if (!a) return e;
          var i = o("WAWebContactCollection").ContactCollection.gadd({
            id: t.id,
            phoneNumber: t.phoneNumber,
            name: t.displayName,
            type: "out",
          });
          e.push({ adminProfile: t.adminProfile, contact: i, role: t.role });
        } else {
          if (!a && !o("WAWebFrontendContactGetters").getIsMyContact(r))
            return e;
          (a && r.phoneNumber == null && r.set({ phoneNumber: t.phoneNumber }),
            e.push({ adminProfile: t.adminProfile, contact: r, role: t.role }));
        }
        return e;
      }, []);
      return t;
    }
    var m = 9;
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          if (!o("WAWebChatGetters").getIsNewsletter(t))
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[getNewsletterSubscribersAction] non-newsletter chat",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("get-subscribers-of-non-newsletter"),
              { subscribers: null, hasMore: !1 }
            );
          if (
            !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
              t == null ? void 0 : t.newsletterMetadata,
            )
          )
            return { subscribers: null, hasMore: !1 };
          try {
            var a,
              i,
              l = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                t.id.toJid(),
              ),
              p = yield o(
                "WAWebNewsletterSubscriberListJob",
              ).getNewsletterSubscribers(l, n, r),
              _ = (a = p == null ? void 0 : p.followers.length) != null ? a : 0,
              f = {
                subscribers: d(p == null ? void 0 : p.followers),
                hasMore: _ >= m,
              };
            return (
              (i = f.subscribers) != null &&
                i.some(function (e) {
                  return (
                    !e.contact.name &&
                    e.contact.phoneNumber != null &&
                    o(
                      "WAWebUsernameWorkerCompatibleGatingUtils",
                    ).isNewsletterUsernamePnPrivacyEnabled()
                  );
                }) &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[getNewsletterSubscribersAction] pn visible non-contact admin",
                      ])),
                  )
                  .tags("newsletter", "username")
                  .sendLogs("newsletter-phone-number-not-null"),
              yield c(t, f.subscribers),
              f
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[getNewsletterSubscribersAction] get subscribers failed",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("get-subscribers-from-newsletter-failed"),
              { subscribers: null, hasMore: !1 }
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.getSubscribersInContacts = d),
      (l.NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT = m),
      (l.getNewsletterSubscribersAction = p));
  },
  98,
);
