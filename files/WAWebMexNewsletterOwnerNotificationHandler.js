__d(
  "WAWebMexNewsletterOwnerNotificationHandler",
  [
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterAdminNotificationJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = n.xwa2_notify_newsletter_owner_on_metadata_update,
              i = a.actor,
              l = a.id,
              _ = a.thread_metadata;
            if (_ == null) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex-owner-update] no metadata changes found",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs(
                  "newsletter-mex-owner-metadata-notification-no-metadata-updates",
                );
              return;
            }
            yield g(l, _, i);
            var f = i == null ? void 0 : i.id;
            if (f == null) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex-owner-update] no actor found",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs(
                  "newsletter-mex-owner-metadata-notification-no-actor",
                );
              return;
            }
            var h = [],
              y = _.description,
              C = _.name,
              b = _.picture,
              v = _.preview,
              S = _.settings;
            if (
              ((b != null || v != null) && h.push({ item: "profile_picture" }),
              C != null)
            ) {
              var R = C.text;
              R == null
                ? o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[mex-owner-update] name missing updated value",
                        ])),
                    )
                    .tags("mex", "newsletter")
                    .sendLogs(
                      "newsletter-mex-owner-metadata-notification-no-updated-name-value",
                    )
                : h.push({ item: "name", value: R });
            }
            if (y != null) {
              var L = y.text;
              L == null
                ? o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[mex-owner-update] description missing updated value",
                        ])),
                    )
                    .tags("mex", "newsletter")
                    .sendLogs(
                      "newsletter-mex-owner-metadata-notification-no-updated-description-value",
                    )
                : h.push({ item: "description", value: L });
            }
            var E = S == null ? void 0 : S.reaction_codes;
            if (S != null && E != null) {
              var k = o(
                "WAWebMexNewsletterParseUtils",
              ).toReactionCodesSettingMixin(E.value);
              k == null
                ? o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[mex-owner-update] reaction_codes missing value",
                        ])),
                    )
                    .tags("mex", "newsletter")
                    .sendLogs(
                      "newsletter-mex-owner-metadata-notification-no-updated-reaction-codes-value",
                    )
                : h.push({ item: "reaction_setting", value: k });
            }
            if (h.length === 0) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex-owner-update] no updates found",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs(
                  "newsletter-mex-owner-metadata-notification-no-updates",
                );
              return;
            }
            var I = o("WAJids").toNewsletterJid(l),
              T = o("WAWebJidToWid").newsletterJidToWid(I),
              D = o("WAWebWidFactory").createWid(f),
              x = {
                newsletterId: o("WAWebWidFactory").asNewsletterWidOrThrow(T),
                actorId: o("WAWebWidFactory").asUserWidOrThrow(D),
                updates: h,
              };
            o("WAWebBackendApi").frontendFireAndForget(
              "displayNewsletterMetadataUpdateNotification",
              { notification: x },
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex-owner-update] failed to handle owner notification",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("mex", "newsletter")
              .sendLogs("newsletter-mex-owner-notification-failed");
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          if (
            !(
              ((r = t.preview) == null ? void 0 : r.direct_path) !== "" ||
              n != null
            )
          ) {
            var a = o("WAJids").toNewsletterJid(e),
              i = o("WAWebJidToWid").newsletterJidToWid(a);
            (yield o(
              "WAWebNewsletterAdminNotificationJob",
            ).updateProfilePictureDeletionAlertState(a),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateProfilePictureDeletionAlertState",
                {
                  newsletterWid: o("WAWebWidFactory").asNewsletterWidOrThrow(i),
                },
              ));
          }
        })),
        h.apply(this, arguments)
      );
    }
    l.mexHandleNewsletterOwnerNotification = _;
  },
  98,
);
