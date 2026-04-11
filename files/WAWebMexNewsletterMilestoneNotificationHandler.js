__d(
  "WAWebMexNewsletterMilestoneNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebChatGetExistingBridge",
    "WAWebMsgModelFromData",
    "WAWebNewsletterDBUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = n.xwa2_notify_newsletter_milestone,
            a = r.message_server_id,
            i = r.newsletter_id,
            l = r.reaction_code,
            s = r.type,
            u = r.value,
            c = yield o("WAWebNewsletterDBUtils").getMessageByServerId(
              Number(a),
              i,
            ),
            d = yield o("WAWebChatGetExistingBridge").getExisting(
              o("WAWebWidFactory").createWid(i),
            );
          if (d == null) {
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
          o("WAWebBackendApi").frontendFireAndForget(
            "displayNewsletterMilestoneDesktopNotification",
            {
              msg: c && o("WAWebMsgModelFromData").msgModelFromMsgData(c),
              reactionCode: l,
              milestoneType: s,
              value: u,
              chat: d,
            },
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.mexHandleNewsletterMilestone = s;
  },
  98,
);
