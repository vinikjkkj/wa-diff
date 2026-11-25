__d(
  "MWLSSacThreadRowHooks",
  [
    "I64",
    "LSMessagingThreadTypeUtil",
    "MWLSSacOwnedThreadWrites",
    "PromiseOrValue",
    "WmiSacGating",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      var r,
        a,
        i =
          (r = n.lastActivityTimestampMs) != null
            ? r
            : (e || (e = o("I64"))).zero,
        l =
          (a = n.lastReadWatermarkTimestampMs) != null
            ? a
            : (e || (e = o("I64"))).zero;
      if (t == null || (e || (e = o("I64"))).gt(i, t.lastActivityTimestampMs))
        return null;
      var s = t.snippet != null,
        u = (e || (e = o("I64"))).lt(i, t.lastActivityTimestampMs),
        c = s ? t : n,
        d = u
          ? (e || (e = o("I64"))).max(t.lastReadWatermarkTimestampMs, l)
          : l;
      return {
        lastActivityTimestampMs: t.lastActivityTimestampMs,
        lastMessageCtaType: c.lastMessageCtaType,
        lastReadWatermarkTimestampMs: d,
        snippet: c.snippet,
        snippetMessageOtid: c.snippetMessageOtid,
        snippetSenderContactId: c.snippetSenderContactId,
      };
    }
    function c(e) {
      return (
        !o("MWLSSacOwnedThreadWrites").isSacOwnedThreadWrite(e) &&
        o("LSMessagingThreadTypeUtil").isArmadilloSecureOneToOne(
          e.threadType,
        ) &&
        o("WmiSacGating").isSacWebEnabled() &&
        r("justknobx")._("7218")
      );
    }
    function d(e, t) {
      return c(t)
        ? (s || (s = o("PromiseOrValue"))).map(
            e.threads.get(t.threadKey),
            function (e) {
              return u(e, t);
            },
          )
        : null;
    }
    var m = {
      onBeforePut: function (t) {
        if (t.tableName !== "threads") return t.value;
        var e = t.transaction,
          n = t.value;
        return (s || (s = o("PromiseOrValue"))).map(d(e, n), function (e) {
          return e == null ? n : babelHelpers.extends({}, n, e);
        });
      },
      onBeforeUpsert: function (t) {
        if (t.tableName !== "threads") return t.value;
        var e = t.transaction,
          n = t.value;
        return (s || (s = o("PromiseOrValue"))).map(d(e, n), function (e) {
          return e == null ? n : babelHelpers.extends({}, n, e);
        });
      },
    };
    ((l.getSacThreadRowPatch = u), (l.MWLSSacThreadRowHooks = m));
  },
  98,
);
