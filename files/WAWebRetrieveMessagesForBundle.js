__d(
  "WAWebRetrieveMessagesForBundle",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 50,
      u = [
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_VIDEO_DUAL_UPLOAD,
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_IMAGE_DUAL_UPLOAD,
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HEVC_VIDEO_DUAL_UPLOAD,
      ];
    function c(e, t) {
      var n = t != null ? t : o("WATimeUtils").unixTime(),
        r = o("WAWebGroupHistoryGating").getGroupHistoryMessagesTimeLimitSecs(
          e,
        );
      return n - r;
    }
    function d(e, t, n) {
      if (
        !r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type) ||
        (e.t != null && e.t < t) ||
        (n != null && e.t != null && e.t > n) ||
        (e.associationType != null && u.includes(e.associationType))
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
    async function m(t, n, r) {
      var a = o("WAWebDBMessageRange").getLastMessageTimestamp(t);
      if (a == null)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] no messages found in chat ",
                "",
              ])),
            t,
          ),
          Promise.resolve([])
        );
      var i = Math.min(
          n != null ? n : 1 / 0,
          o("WAWebABProps").getABPropConfigValue(
            "group_history_message_count_limit",
          ),
        ),
        l = c(t, r),
        u = [];
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message"], async function (e) {
            for (
              var n = e[0], a = o("WAWebDBMessageUtils").endOfChat(t), c = !0;
              u.length < i;
            ) {
              var m = await n.between(
                ["internalId"],
                o("WAWebDBMessageUtils").beginningOfChat(t),
                a,
                {
                  lowerInclusive: !0,
                  upperInclusive: c,
                  reverse: !0,
                  limit: s,
                },
                function (e) {
                  return e.t != null && e.t < l;
                },
              );
              if (m.length === 0) break;
              var p = i - u.length;
              u.push.apply(
                u,
                m
                  .filter(function (e) {
                    return d(e, l, r);
                  })
                  .slice(0, p),
              );
              var _ = m[m.length - 1];
              ((a = _.internalId), (c = !1));
            }
          }),
        u
      );
    }
    l.retrieveMessagesForBundle = m;
  },
  98,
);
