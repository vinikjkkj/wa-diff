__d(
  "WAWebNewsletterSubscriberListAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
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
            t.role ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin ||
            t.role ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
        if (n == null) {
          if (!r) return e;
          var a = o("WAWebContactCollection").ContactCollection.gadd({
            id: t.id,
            phoneNumber: t.phoneNumber,
            name: t.displayName,
            type: "out",
          });
          e.push({ adminProfile: t.adminProfile, contact: a, role: t.role });
        } else {
          if (!r && !o("WAWebFrontendContactGetters").getIsMyContact(n))
            return e;
          (r && n.phoneNumber == null && n.set({ phoneNumber: t.phoneNumber }),
            e.push({ adminProfile: t.adminProfile, contact: n, role: t.role }));
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
          var a;
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
            !(
              t != null &&
              (a = t.newsletterMetadata) != null &&
              a.iAmAdminOrOwner()
            )
          )
            return { subscribers: null, hasMore: !1 };
          try {
            var i,
              l,
              p = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                t.id.toJid(),
              ),
              _ = yield o(
                "WAWebNewsletterSubscriberListJob",
              ).getNewsletterSubscribers(p, n, r),
              f = (i = _ == null ? void 0 : _.followers.length) != null ? i : 0,
              g = {
                subscribers: d(_ == null ? void 0 : _.followers),
                hasMore: f >= m,
              };
            return (
              (l = g.subscribers) != null &&
                l.some(function (e) {
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
              yield c(t, g.subscribers),
              g
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
