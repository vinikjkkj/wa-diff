__d(
  "WAWebGroupHistoryMentionAddSendInfo",
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
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!c(t, n)) return null;
          var a = o("WAWebWidFactory").asGroupWidOrThrow(t.id);
          if (!o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(a))
            return null;
          var i = o("WATimeUtils").unixTime(),
            l;
          try {
            l = yield o(
              "WAWebGetGroupHistoryBundleMessagesCount",
            ).getGroupHistoryBundleMessageCount({
              groupWid: a,
              targetStartMessageTime: i,
            });
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] mention-add availability probe failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("group-history-mention-add-probe-failed"),
              null
            );
          }
          return l === 0 ||
            !o("WAWebABProps").getABPropConfigValue(
              "group_history_send_adding_from_mention",
            )
            ? null
            : { messagesCount: l, targetStartMessageTime: i };
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
    l.resolveGroupHistoryMentionAddSendInfo = s;
  },
  98,
);
