__d(
  "WAWebMexNewsletterMilestoneNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebChatGetExistingBridge",
    "WAWebMsgModelFromData",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDBUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = n.xwa2_notify_newsletter_milestone,
              i = a.message_server_id,
              l = a.newsletter_id,
              u = a.reaction_code,
              c = a.type,
              d = a.value,
              m = yield o("WAWebNewsletterDBUtils").getMessageByServerId(
                Number(i),
                l,
              ),
              p = yield o("WAWebChatGetExistingBridge").getExisting(
                o("WAWebWidFactory").createWid(l),
              );
            if (p == null) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[milestone-notif] no chat for newsletter",
                    ])),
                )
                .tags("mex", "newsletter", "milestone-notification")
                .sendLogs("newsletter-mex-milestone-notification-no-chat");
              return;
            }
            if (
              c === "MESSAGE_FORWARDS" &&
              !o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
                "channels_admin_notifications_forwards_enabled",
              )
            )
              return;
            o("WAWebBackendApi").frontendFireAndForget(
              "displayNewsletterMilestoneDesktopNotification",
              {
                msg: m && o("WAWebMsgModelFromData").msgModelFromMsgData(m),
                reactionCode: u,
                milestoneType: c,
                value: d,
                chat: p,
              },
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[milestone-notif] failed to handle milestone notification",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("mex", "newsletter")
              .sendLogs("newsletter-mex-milestone-notification-failed");
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.mexHandleNewsletterMilestone = u;
  },
  98,
);
