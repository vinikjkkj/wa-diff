__d(
  "useWAWebNewsletterSubscribers",
  [
    "WALogger",
    "WAWebContactCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSubscriberListAction",
    "WAWebUserPrefsNewsletter",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s || (s = o("react"))).useEffect;
    function c(t) {
      var a,
        i = t.cacheType,
        l = t.count,
        s = t.includeMeContact,
        c = s === void 0 ? !1 : s,
        d = t.newsletter,
        m = r("useWAWebUnmountSignal")(),
        p = r("useWAWebEventTargetValue")(
          d == null || (a = d.newsletterMetadata) == null
            ? void 0
            : a.subscribers,
          ["add", "remove", "sort", "change"],
          function () {
            var e,
              t,
              n =
                (e =
                  d == null ||
                  (t = d.newsletterMetadata) == null ||
                  (t = t.subscribers) == null
                    ? void 0
                    : t.map(function (e) {
                        return {
                          adminProfile: e.adminProfile,
                          contact: e.contact,
                          role: e.membership,
                        };
                      })) != null
                  ? e
                  : [],
              r = o("WAWebContactCollection").ContactCollection.getMeContact();
            if (c && r != null) {
              var a;
              n.unshift({
                adminProfile: null,
                contact: r,
                role:
                  d == null || (a = d.newsletterMetadata) == null
                    ? void 0
                    : a.membershipType,
              });
            }
            return [
              n,
              n.length >=
                o("WAWebNewsletterSubscriberListAction")
                  .NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT,
            ];
          },
        ),
        _ = p[0],
        f = p[1];
      return (
        u(
          function () {
            n("asyncToGeneratorRuntime")
              .asyncToGenerator(function* () {
                m.aborted ||
                  (yield o(
                    "WAWebNewsletterSubscriberListAction",
                  ).getNewsletterSubscribersAction(d, l, i));
              })()
              .catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[useNewsletterSubscribers] Failed to get subscribers for newsletter ",
                        "",
                      ])),
                    d.id,
                  )
                  .sendLogs("newsletter-hook-failed-to-get-subscribers");
              });
          },
          [d, m.aborted, l, i, c],
        ),
        [_, f]
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = o("WAWebNewsletterGatingUtils").getMaxSubscriberNumber()),
          (t[0] = n))
        : (n = t[0]);
      var r;
      t[1] !== e
        ? ((r = {
            newsletter: e,
            cacheType: o("WAWebUserPrefsNewsletter")
              .ValidCachedNewsletterSubscriberKeys.FULL,
            count: n,
            includeMeContact: !1,
          }),
          (t[1] = e),
          (t[2] = r))
        : (r = t[2]);
      var a = c(r),
        i = a[0],
        l;
      return (
        t[3] !== i ? ((l = i.map(m)), (t[3] = i), (t[4] = l)) : (l = t[4]),
        l
      );
    }
    function m(e) {
      return e.contact;
    }
    ((l.useNewsletterSubscribers = c), (l.useNewsletterAllSubscribers = d));
  },
  98,
);
