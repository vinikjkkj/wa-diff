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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50;
    function s(e, t) {
      var n = t != null ? t : o("WATimeUtils").unixTime(),
        r = o("WAWebGroupHistoryGating").getGroupHistoryMessagesTimeLimitSecs(
          e,
        );
      return n - r;
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
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = Math.min(
              r != null ? r : 1 / 0,
              o("WAWebABProps").getABPropConfigValue(
                "group_history_message_count_limit",
              ),
            ),
            l = s(t, a),
            c = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message"],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      for (
                        var r = n[0],
                          s = o("WAWebDBMessageUtils").endOfChat(t),
                          d = !0;
                        c.length < i;
                      ) {
                        var m = yield r.between(
                          ["internalId"],
                          o("WAWebDBMessageUtils").beginningOfChat(t),
                          s,
                          {
                            lowerInclusive: !0,
                            upperInclusive: d,
                            reverse: !0,
                            limit: e,
                          },
                          function (e) {
                            return e.t != null && e.t < l;
                          },
                        );
                        if (m.length === 0) break;
                        var p = i - c.length;
                        c.push.apply(
                          c,
                          m
                            .filter(function (e) {
                              return u(e, l, a);
                            })
                            .slice(0, p),
                        );
                        var _ = m[m.length - 1];
                        ((s = _.internalId), (d = !1));
                      }
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
            c
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.retrieveMessagesForBundle = c;
  },
  98,
);
