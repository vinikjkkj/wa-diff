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
    function m(e, t) {
      if (
        !r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type) ||
        (e.t != null && e.t < t) ||
        (e.associationType != null && c.includes(e.associationType))
      )
        return !1;
      var n =
        r("WAWebMsgKey").fromString(e.id).fromMe &&
        e.ack === o("WAWebAck").ACK.CLOCK;
      return !(
        e.isSendFailure === !0 ||
        e.ack < o("WAWebAck").ACK.CLOCK ||
        n ||
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
                          a = !0;
                        p.length < l;
                      ) {
                        var i = yield n.between(
                          ["internalId"],
                          o("WAWebDBMessageUtils").beginningOfChat(t),
                          r,
                          {
                            lowerInclusive: !0,
                            upperInclusive: a,
                            reverse: !0,
                            limit: u,
                          },
                          function (e) {
                            return e.t != null && e.t < c;
                          },
                        );
                        if (i.length === 0) break;
                        var s = l - p.length;
                        p.push.apply(
                          p,
                          i
                            .filter(function (e) {
                              return m(e, c);
                            })
                            .slice(0, s),
                        );
                        var d = i[i.length - 1];
                        ((r = d.internalId), (a = !1));
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
