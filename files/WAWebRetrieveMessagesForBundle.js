__d(
  "WAWebRetrieveMessagesForBundle",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebDBMessageUtils",
    "WAWebDualUploadsAssociationTypes",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50;
    function s(e) {
      var t = e != null ? e : o("WATimeUtils").unixTime(),
        n = o("WAWebGroupHistoryGating").getGroupHistoryMessagesTimeLimitSecs();
      return t - n;
    }
    function u(e, t, n) {
      if (
        !r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type) ||
        e.isScheduledMsg === !0 ||
        e.viewMode === o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE ||
        (e.t != null && e.t < t) ||
        (n != null && e.t != null && e.t > n) ||
        o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(
          e.associationType,
        )
      )
        return !1;
      var a =
        r("WAWebMsgKey").fromString(e.id).fromMe &&
        e.ack === o("WAWebAck").ACK.CLOCK;
      return !(
        e.isSendFailure === !0 ||
        e.ack < o("WAWebAck").ACK.CLOCK ||
        a ||
        (e.expiredTimestamp != null &&
          e.expiredTimestamp < o("WATimeUtils").unixTime() &&
          !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState))
      );
    }
    async function c(t, n, r) {
      var a = Math.min(
          n != null ? n : 1 / 0,
          o("WAWebABProps").getABPropConfigValue(
            "group_history_message_count_limit",
          ),
        ),
        i = s(r),
        l = [];
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message"], async function (n) {
            for (
              var s = n[0], c = o("WAWebDBMessageUtils").endOfChat(t), d = !0;
              l.length < a;
            ) {
              var m = await s.between(
                ["internalId"],
                o("WAWebDBMessageUtils").beginningOfChat(t),
                c,
                {
                  lowerInclusive: !0,
                  upperInclusive: d,
                  reverse: !0,
                  limit: e,
                },
                function (e) {
                  return e.t != null && e.t < i;
                },
              );
              if (m.length === 0) break;
              var p = a - l.length;
              l.push.apply(
                l,
                m
                  .filter(function (e) {
                    return u(e, i, r);
                  })
                  .slice(0, p),
              );
              var _ = m[m.length - 1];
              ((c = _.internalId), (d = !1));
            }
          }),
        l
      );
    }
    ((l.isValidMessageForGroupHistoryBundle = u),
      (l.retrieveMessagesForBundle = c));
  },
  98,
);
