__d(
  "WAWebNewsletterMembershipActionLogger",
  ["WAWebChannelMembershipActionEventWamEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.actionResult,
        n = e.cid;
      new (o(
        "WAWebChannelMembershipActionEventWamEvent",
      ).ChannelMembershipActionEventWamEvent)({
        cid: n.user,
        actionResult: t,
      }).commit();
    }
    l.logNewsletterMembershipActionEvent = e;
  },
  98,
);
