__d(
  "WmiSacGating",
  ["LSMessagingThreadTypeUtil", "WAJids", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("6193");
    }
    function s() {
      return e();
    }
    function u() {
      return r("gkx")("24756");
    }
    function c() {
      return e() || u();
    }
    function d() {
      return e() && u();
    }
    function m(t) {
      return o("WAJids").switchOnMsgrChatJidType(t, {
        group: function () {
          return u();
        },
        user: function () {
          return e();
        },
      });
    }
    function p(t) {
      return (
        (o("LSMessagingThreadTypeUtil").isArmadilloSecureOneToOne(t) && e()) ||
        (o("LSMessagingThreadTypeUtil").isArmadilloSecureGroup(t) && u())
      );
    }
    ((l.isSacWebEnabled = e),
      (l.isSacUiMpsEnabled = s),
      (l.isSacGroupsEnabled = u),
      (l.isSacEnabled = c),
      (l.shouldSkipCacheDb = d),
      (l.isSacEligibleThread = m),
      (l.isSacEligibleThreadType = p));
  },
  98,
);
