__d(
  "WASmaxOutMessagePublishBotResponseMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.botEditTargetId,
        r = e.botSenderTimestampMs,
        a = e.botEdit,
        i = e.hasBotTypeVoice,
        l = o("WASmaxJsx").smax("bot", {
          edit_target_id: (t = o("WASmaxAttrs")).OPTIONAL(
            o("WAWap").CUSTOM_STRING,
            n,
          ),
          sender_timestamp_ms: t.OPTIONAL(o("WAWap").INT, r),
          edit: t.OPTIONAL(o("WAWap").CUSTOM_STRING, a),
          type: t.OPTIONAL_LITERAL("voice", i),
        });
      return l;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBotResponseMixin = s;
  },
  98,
);
