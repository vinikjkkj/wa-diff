__d(
  "WAWebRetrieveMessagesForBundle",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebDBMessageUtils",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebMessageAssociation.flow",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50,
      s = [
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_VIDEO_DUAL_UPLOAD,
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_IMAGE_DUAL_UPLOAD,
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HEVC_VIDEO_DUAL_UPLOAD,
      ];
    function u(e, t) {
      var n = t != null ? t : o("WATimeUtils").unixTime(),
        r = o("WAWebGroupHistoryGating").getGroupHistoryMessagesTimeLimitSecs(
          e,
        );
      return n - r;
    }
    function c(e, t, n) {
      if (
        !r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type) ||
        (e.t != null && e.t < t) ||
        (n != null && e.t != null && e.t > n) ||
        (e.associationType != null && s.includes(e.associationType))
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
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = Math.min(
              r != null ? r : 1 / 0,
              o("WAWebABProps").getABPropConfigValue(
                "group_history_message_count_limit",
              ),
            ),
            l = u(t, a),
            s = [];
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
                          u = o("WAWebDBMessageUtils").endOfChat(t),
                          d = !0;
                        s.length < i;
                      ) {
                        var m = yield r.between(
                          ["internalId"],
                          o("WAWebDBMessageUtils").beginningOfChat(t),
                          u,
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
                        var p = i - s.length;
                        s.push.apply(
                          s,
                          m
                            .filter(function (e) {
                              return c(e, l, a);
                            })
                            .slice(0, p),
                        );
                        var _ = m[m.length - 1];
                        ((u = _.internalId), (d = !1));
                      }
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
            s
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.retrieveMessagesForBundle = d;
  },
  98,
);
