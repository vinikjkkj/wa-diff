__d(
  "WAWebMexNewsletterAdminInviteRevokeNotificationHandler",
  [
    "$InternalEnum",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebDBProcessMessage",
    "WAWebJidToWid",
    "WAWebLidMigrationDbUtils",
    "WAWebLidMigrationUtils",
    "WAWebNewsletterDBUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = n("$InternalEnum").Mirrored(["ACTOR", "USER", "OBSERVER"]);
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = n.xwa2_notify_newsletter_admin_invite_revoke,
              i = a.actor,
              l = a.id,
              p = a.user,
              _ = p.id,
              f = i.id;
            if (f == null || _ == null) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[handleNewsletterAdminInviteRevoke] actor or user is null",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs(
                  "newsletter-mex-admin-invite-revoke-null-actor-or-user",
                );
              return;
            }
            var g = o("WAJids").toNewsletterJid(l),
              h = o("WAWebJidToWid").newsletterJidToWid(g),
              y = o("WAWebLidMigrationUtils").toUserLid(
                o("WAWebWidFactory").createWid(_),
              ),
              C = o("WAWebLidMigrationUtils").toUserLid(
                o("WAWebWidFactory").createWid(f),
              );
            if (!y || !C) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[handleNewsletterAdminInviteRevoke] non-lid user/actor id",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs(
                  "newsletter-mex-admin-invite-revoke-non-lid-user-or-actor-id",
                );
              return;
            }
            var b = m.OBSERVER;
            if (
              (o("WAWebUserPrefsMeUser").isMeAccount(y) && (b = m.USER),
              o("WAWebUserPrefsMeUser").isMeAccount(C) && (b = m.ACTOR),
              b === m.OBSERVER)
            ) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[handleNewsletterAdminInviteRevoke] Message sent to observer",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs(
                  "newsletter-mex-admin-invite-revoke-sent-to-observer",
                  { sendLogsType: o("WALogger").SendLogsType.MINOR_ISSUE },
                );
              return;
            }
            var v = null;
            if (
              (b === m.ACTOR
                ? (v = yield o(
                    "WAWebLidMigrationDbUtils",
                  ).getChatWidFromUserLid(y))
                : (v = yield o(
                    "WAWebLidMigrationDbUtils",
                  ).getChatWidFromUserLid(C)),
              v == null)
            ) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[handleNewsletterAdminInviteRevoke] chat id not found",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs(
                  "newsletter-mex-admin-invite-revoke-actor-or-user-chat-id-not-found",
                );
              return;
            }
            var S = yield o(
              "WAWebNewsletterDBUtils",
            ).getUnexpiredNewsletterAdminInviteMessageRecordsFromChat(
              o("WAWebWidFactory").asNewsletterWidOrThrow(h),
              v,
            );
            (S.forEach(function (e) {
              var t;
              ((t = e.newsletterAdminInviteInfo) == null
                ? void 0
                : t.inviteExpiration) != null &&
                (e.newsletterAdminInviteInfo.inviteExpiration =
                  o("WATimeUtils").castToUnixTime(0));
            }),
              yield o("WAWebDBProcessMessage").updateExistingMessages(S, v),
              o("WAWebBackendApi").frontendFireAndForget(
                "expireNewsletterAdminInvites",
                { expiredMsgData: S },
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleNewsletterAdminInviteRevoke] failed to handle admin invite revoke",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("mex", "newsletter")
              .sendLogs("newsletter-mex-admin-invite-revoke-failed");
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.handleNewsletterAdminInviteRevoke = p;
  },
  98,
);
