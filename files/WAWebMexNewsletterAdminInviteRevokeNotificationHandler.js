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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum").Mirrored(["ACTOR", "USER", "OBSERVER"]);
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = n.xwa2_notify_newsletter_admin_invite_revoke,
            a = r.actor,
            i = r.id,
            l = r.user,
            m = l.id,
            p = a.id;
          if (p == null || m == null) {
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
          var _ = o("WAJids").toNewsletterJid(i),
            f = o("WAWebJidToWid").newsletterJidToWid(_),
            g = o("WAWebLidMigrationUtils").toUserLid(
              o("WAWebWidFactory").createWid(m),
            ),
            h = o("WAWebLidMigrationUtils").toUserLid(
              o("WAWebWidFactory").createWid(p),
            );
          if (!g || !h) {
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
          var y = d.OBSERVER;
          if (
            (o("WAWebUserPrefsMeUser").isMeAccount(g) && (y = d.USER),
            o("WAWebUserPrefsMeUser").isMeAccount(h) && (y = d.ACTOR),
            y === d.OBSERVER)
          ) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleNewsletterAdminInviteRevoke] Message sent to observer",
                  ])),
              )
              .tags("mex", "newsletter")
              .sendLogs("newsletter-mex-admin-invite-revoke-sent-to-observer", {
                sendLogsType: o("WALogger").SendLogsType.MINOR_ISSUE,
              });
            return;
          }
          var C = null;
          if (
            (y === d.ACTOR
              ? (C = yield o("WAWebLidMigrationDbUtils").getChatWidFromUserLid(
                  g,
                ))
              : (C = yield o("WAWebLidMigrationDbUtils").getChatWidFromUserLid(
                  h,
                )),
            C == null)
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
          var b = yield o(
            "WAWebNewsletterDBUtils",
          ).getUnexpiredNewsletterAdminInviteMessageRecordsFromChat(
            o("WAWebWidFactory").asNewsletterWidOrThrow(f),
            C,
          );
          (b.forEach(function (e) {
            var t;
            ((t = e.newsletterAdminInviteInfo) == null
              ? void 0
              : t.inviteExpiration) != null &&
              (e.newsletterAdminInviteInfo.inviteExpiration =
                o("WATimeUtils").castToUnixTime(0));
          }),
            yield o("WAWebDBProcessMessage").updateExistingMessages(b, C),
            o("WAWebBackendApi").frontendFireAndForget(
              "expireNewsletterAdminInvites",
              { expiredMsgData: b },
            ));
        })),
        p.apply(this, arguments)
      );
    }
    l.handleNewsletterAdminInviteRevoke = m;
  },
  98,
);
