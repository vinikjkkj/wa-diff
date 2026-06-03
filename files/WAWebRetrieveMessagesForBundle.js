__d(
  "WAWebRetrieveMessagesForBundle",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebDBMessageRange",
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
    var e,
      s,
      u = 50,
      c = [
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_VIDEO_DUAL_UPLOAD,
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_IMAGE_DUAL_UPLOAD,
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HEVC_VIDEO_DUAL_UPLOAD,
      ];
    function d(e, t) {
      var n = t != null ? t : o("WATimeUtils").unixTime(),
        r = o("WAWebGroupHistoryGating").getGroupHistoryMessagesTimeLimitSecs(
          e,
        );
      return n - r;
    }
    function m(e, t, n) {
      if (
        !r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type) ||
        (e.t != null && e.t < t) ||
        (n != null && e.t != null && e.t > n) ||
        (e.associationType != null && c.includes(e.associationType))
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
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = o("WAWebDBMessageRange").getLastMessageTimestamp(t);
          if (i == null)
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] no messages found in chat ",
                    "",
                  ])),
                t,
              ),
              (s || (s = n("Promise"))).resolve([])
            );
          var l = Math.min(
              r != null ? r : 1 / 0,
              o("WAWebABProps").getABPropConfigValue(
                "group_history_message_count_limit",
              ),
            ),
            c = d(t, a),
            p = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      for (
                        var n = e[0],
                          r = o("WAWebDBMessageUtils").endOfChat(t),
                          i = !0;
                        p.length < l;
                      ) {
                        var s = yield n.between(
                          ["internalId"],
                          o("WAWebDBMessageUtils").beginningOfChat(t),
                          r,
                          {
                            lowerInclusive: !0,
                            upperInclusive: i,
                            reverse: !0,
                            limit: u,
                          },
                          function (e) {
                            return e.t != null && e.t < c;
                          },
                        );
                        if (s.length === 0) break;
                        var d = l - p.length;
                        p.push.apply(
                          p,
                          s
                            .filter(function (e) {
                              return m(e, c, a);
                            })
                            .slice(0, d),
                        );
                        var _ = s[s.length - 1];
                        ((r = _.internalId), (i = !1));
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            p
          );
        })),
        _.apply(this, arguments)
      );
    }
    l.retrieveMessagesForBundle = p;
  },
  98,
);
