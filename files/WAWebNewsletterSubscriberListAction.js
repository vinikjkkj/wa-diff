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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
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
    function c(e) {
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
    var d = 9;
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
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
              l = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                t.id.toJid(),
              ),
              m = yield o(
                "WAWebNewsletterSubscriberListJob",
              ).getNewsletterSubscribers(l, n, r),
              p = (i = m == null ? void 0 : m.followers.length) != null ? i : 0,
              _ = {
                subscribers: c(m == null ? void 0 : m.followers),
                hasMore: p >= d,
              };
            return (yield u(t, _.subscribers), _);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[getNewsletterSubscribersAction] get subscribers failed",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("get-subscribers-from-newsletter-failed"),
              { subscribers: null, hasMore: !1 }
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.getSubscribersInContacts = c),
      (l.NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT = d),
      (l.getNewsletterSubscribersAction = m));
  },
  98,
);
