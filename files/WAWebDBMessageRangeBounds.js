__d(
  "WAWebDBMessageRangeBounds",
  ["WAWebDBMessageRangeIndex", "WAWebOrderPreservingHex", "WAWebSchemaMessage"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(
          ["messageRangeIndex"],
          s(
            e,
            o("WAWebDBMessageRangeIndex").MessagePropertyType
              .IncomingChatMessage,
          ),
          u(
            e,
            o("WAWebDBMessageRangeIndex").MessagePropertyType
              .IncomingChatMessage,
          ),
          { lowerInclusive: !0, reverse: !0, limit: 1, shouldDecrypt: !1 },
        )
        .then(function (e) {
          var t;
          return c((t = e[0]) == null ? void 0 : t.messageRangeIndex);
        });
    }
    function s(e, t, n) {
      var r =
        n != null ? o("WAWebOrderPreservingHex").orderPreservingHex(n) : "";
      return e.toString() + "_" + t + "_" + r;
    }
    function u(e, t) {
      return e.toString() + "_" + t + "_g";
    }
    function c(e) {
      if (e == null || e.length < 3) return null;
      var t = e.split("_")[2];
      return t ? o("WAWebOrderPreservingHex").undoOrderPreservingHex(t) : null;
    }
    ((l.getLastMessageTimestamp = e),
      (l.beginningOfMessageRange = s),
      (l.endOfMessageRange = u),
      (l.extractC2STimestampFromMessageRangeIndex = c));
  },
  98,
);
