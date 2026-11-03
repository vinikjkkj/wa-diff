__d(
  "MWInboxTrayGating",
  ["CurrentMessengerUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (e === void 0 && (e = !0), c() || e, !1);
    }
    function s() {
      return !1;
    }
    function u() {
      return !1;
    }
    function c() {
      return o("CurrentMessengerUser").getPageMessagingMailboxId() !== "0";
    }
    ((l.isInboxTrayEnabled = e),
      (l.isInboxTrayLiveQueryEnabled = s),
      (l.isInboxTrayNotesEnabled = u));
  },
  98,
);
