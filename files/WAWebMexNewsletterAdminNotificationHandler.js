__d(
  "WAWebMexNewsletterAdminNotificationHandler",
  [
    "WALogger",
    "WAWebAsISOCountryCode",
    "WAWebBackendApi",
    "WAWebCommonNewsletterEnums",
    "WAWebJidToWid",
    "WAWebNewsletterAdminNotificationJob",
    "WAWebNewsletterHandleMessageDeliveryUpdateNotification",
    "WAWebNewsletterValidationUtils",
    "WAWebNux",
    "WAWebUserPrefsNuxPreferences",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = n.xwa2_notify_newsletter_on_admin_metadata_update,
            a = r.id,
            i = r.messages,
            l = r.thread_metadata;
          try {
            if (a == null) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][newsletter] null id in admin_metadata_update",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs(
                  "newsletter-mex-admin-metadata-notification-unexpected-null-id",
                );
              return;
            }
            (yield p(a, l), yield f(a, i));
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][newsletter] admin-metadata persist failed",
                  ])),
              )
              .tags("mex", "newsletter")
              .sendLogs("mex-newsletter-admin-metadata-notification-db-fail");
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((t == null ? void 0 : t.geo_states) != null) {
            var n = t.geo_states,
              r = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e),
              a = o("WAWebJidToWid").newsletterJidToWid(r),
              i = n.reduce(
                function (e, t) {
                  var n,
                    r =
                      t.country_code != null
                        ? o("WAWebAsISOCountryCode").asISOCountryCode(
                            t.country_code,
                          )
                        : null;
                  return (
                    r == null ||
                      (o("WAWebCommonNewsletterEnums").NewsletterState.cast(
                        (n = t.state.type) == null ? void 0 : n.toLowerCase(),
                      ) ===
                      o("WAWebCommonNewsletterEnums").NewsletterState
                        .GeoSuspended
                        ? e.countriesToAdd.push(r)
                        : e.countriesToRemove.push(r)),
                    e
                  );
                },
                { countriesToAdd: [], countriesToRemove: [] },
              ),
              l = i.countriesToAdd,
              s = i.countriesToRemove;
            try {
              if (l.length > 0) {
                (yield o(
                  "WAWebNewsletterAdminNotificationJob",
                ).updateGeosuspendedCountry(r, l, !0),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGeosuspendedCountry",
                    { id: a, countryCodes: l, toAdd: !0 },
                  ));
                var c = o("WAWebNux").getNewsletterAlertsBannerNuxKey(r);
                o("WAWebUserPrefsNuxPreferences").resetNux(c);
              }
              s.length > 0 &&
                (yield o(
                  "WAWebNewsletterAdminNotificationJob",
                ).updateGeosuspendedCountry(r, s, !1),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateGeosuspendedCountry",
                  { id: a, countryCodes: s, toAdd: !1 },
                ));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][newsletter] geosuspension persist failed",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs(
                  "mex-newsletter-admin-metadata-notification-geosuspension-db-fail",
                );
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t != null)
            try {
              var n = o(
                  "WAWebNewsletterValidationUtils",
                ).toNewsletterJidOrThrow(e),
                a = t.edges.map(function (e) {
                  var t = e.node,
                    n = t.message_delivery_update.issue.code,
                    o;
                  switch (n) {
                    case "NEEDS_REVIEW": {
                      o = 1;
                      break;
                    }
                    case "NONE": {
                      o = 0;
                      break;
                    }
                    default:
                      throw r("err")("Unexpected mex issue code: " + n);
                  }
                  return { serverId: parseInt(t.server_id, 10), issueCode: o };
                });
              yield o(
                "WAWebNewsletterHandleMessageDeliveryUpdateNotification",
              ).handleNewsletterMessageDeliveryUpdateNotificationImpl(n, a);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][newsletter] hide-channel persist failed",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs(
                  "mex-newsletter-admin-metadata-notification-hidechannel-db-fail",
                );
            }
        })),
        g.apply(this, arguments)
      );
    }
    l.mexHandleNewsletterAdminNotification = d;
  },
  98,
);
