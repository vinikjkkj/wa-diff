__d(
  "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebSyncGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Set(),
      s = new Set(),
      u = 32;
    function c(t, n) {
      if (
        !(!o("WAWebSyncGatingUtils").isPlaceholderMessageResendEnabled() || !n)
      ) {
        var r = [],
          a = o("WATimeUtils").unixTime(),
          i =
            o("WAWebABProps").getABPropConfigValue(
              "placeholder_message_resend_maximum_days_limit",
            ) * o("WATimeUtils").DAY_SECONDS;
        if (
          (t.forEach(function (t) {
            t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
              !e.has(t.id) &&
              a - t.t <= i &&
              !t.unsafe().isMdHistoryMsg &&
              t.subtype !== "bot_unavailable_fanout" &&
              t.subtype !== "hosted_unavailable_fanout" &&
              t.subtype !== "view_once_unavailable_fanout" &&
              (e.add(t.id), r.push(t.id));
          }),
          r.length > 0)
        )
          for (var l = 0; l < r.length; l += u) {
            var s = r.slice(l, l + u);
            o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .PLACEHOLDER_MESSAGE_RESEND,
              { msgKeys: s },
            );
          }
      }
    }
    ((l.inFlightPlaceholderResendRequests = s),
      (l.handlePlaceholderMsgsSeen = c));
  },
  98,
);
