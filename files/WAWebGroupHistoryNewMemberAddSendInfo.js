__d(
  "WAWebGroupHistoryNewMemberAddSendInfo",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (!c(t, n)) return null;
          var i = o("WAWebWidFactory").asGroupWidOrThrow(t.id);
          if (!o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(i))
            return null;
          var l = o("WATimeUtils").unixTime(),
            s;
          try {
            s = yield o(
              "WAWebGetGroupHistoryBundleMessagesCount",
            ).getGroupHistoryBundleMessageCount({
              groupWid: i,
              targetStartMessageTime: l,
            });
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] new-member add availability probe failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("group-history-new-member-add-probe-failed"),
              null
            );
          }
          return s === 0 || !o("WAWebABProps").getABPropConfigValue(a)
            ? null
            : { messagesCount: s, targetStartMessageTime: l };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return (
        !e.isNonAdminAndACAGJREnabled() &&
        o(
          "WAWebGroupHistoryPostJoinEligibility",
        ).isPostJoinHistoryGroupStructurallyEligible(
          o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(e),
        ) &&
        !o("WAWebGroupHistoryRestrictionHelper").isHistoryRestrictedWid(t.id)
      );
    }
    l.resolveGroupHistoryNewMemberAddSendInfo = s;
  },
  98,
);
