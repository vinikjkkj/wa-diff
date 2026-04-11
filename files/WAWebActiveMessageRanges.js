__d(
  "WAWebActiveMessageRanges",
  [
    "WALogger",
    "WALongInt",
    "WAWebApiActiveMessageRanges",
    "WAWebHandleForMessageRangeEnums",
    "WAWebSchemaActiveMessageRanges",
    "WAWebTimestampConversionUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      if (t == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: missing message range from row.",
              ])),
          ),
          o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN
        );
      var r = t.lastMessageTimestamp,
        a = t.messages,
        i = o("WAWebTimestampConversionUtils").maybeMillisecondsToSeconds(
          r != null ? r : 0,
        );
      if (
        (i !== (r != null ? r : 0) &&
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: last message timestamp was converted to seconds from ",
                  "",
                ])),
              r,
            )
            .sendLogs(
              "syncd: last message timestamp was converted to seconds",
              { sampling: 0.01 },
            ),
        n.t != null && n.t < o("WALongInt").numberOrThrowIfTooLarge(i))
      )
        return o("WAWebHandleForMessageRangeEnums").RangeContain
          .CONTAINS_BY_TIMESTAMP;
      var l = n.id;
      for (var u of a) {
        var c = u.key;
        if (c != null && l != null && c.id === l.id)
          return o("WAWebHandleForMessageRangeEnums").RangeContain
            .CONTAINS_BY_ADDITIONAL;
      }
      return o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN;
    }
    function c(e, t) {
      o("WAWebApiActiveMessageRanges")
        .getActiveMessageRanges(e.remote.toString())
        .then(function (n) {
          n.forEach(function (n) {
            if (
              [
                o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive,
                o("WAWebSchemaActiveMessageRanges").ActiveRangeAction
                  .MarkChatAsRead,
              ].includes(n.action) &&
              u(n.actionValue.messageRange, { id: e, t: t }) ===
                o("WAWebHandleForMessageRangeEnums").RangeContain
                  .DOES_NOT_CONTAIN
            )
              return o("WAWebApiActiveMessageRanges").removeActiveMessageRange(
                e.remote.toString(),
                n.action,
              );
          });
        });
    }
    ((l.rangeContainsMessage = u), (l.checkAndRemoveActiveMessageRanges = c));
  },
  98,
);
