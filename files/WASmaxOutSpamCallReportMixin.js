__d(
  "WASmaxOutSpamCallReportMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.callTo,
        a = e.callFrom,
        i = e.callId,
        l = e.callInfoDuration,
        s = e.callInfoTerminateReason,
        u = e.callInfoReason,
        c = e.callInfoTerminator,
        d = e.callInfoStartTime,
        m = e.callInfoAdder,
        p = e.callInfoCreator,
        _ = e.callInfoMediatype,
        f = o("WASmaxJsx").smax(
          "call",
          {
            to: (t = o("WAWap")).JID(r),
            from: t.USER_JID(a),
            id: t.STANZA_ID(i),
          },
          o("WASmaxJsx").smax("call_info", {
            duration: t.INT(l),
            terminate_reason: (n = o("WASmaxAttrs")).OPTIONAL(
              t.CUSTOM_STRING,
              s,
            ),
            reason: n.OPTIONAL(t.CUSTOM_STRING, u),
            terminator: n.OPTIONAL(t.USER_JID, c),
            start_time: n.OPTIONAL(t.INT, d),
            adder: n.OPTIONAL(t.USER_JID, m),
            creator: n.OPTIONAL(t.USER_JID, p),
            mediatype: n.OPTIONAL(t.CUSTOM_STRING, _),
          }),
        );
      return f;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeCallReportMixin = s;
  },
  98,
);
