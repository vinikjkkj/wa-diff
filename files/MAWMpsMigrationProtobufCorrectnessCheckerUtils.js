__d(
  "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
  ["WACryptoUtils", "WALongInt", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        (e == null ? void 0 : e.fromMe) === (t == null ? void 0 : t.fromMe) &&
        (e == null ? void 0 : e.id) === (t == null ? void 0 : t.id) &&
        (e == null ? void 0 : e.participant) ===
          (t == null ? void 0 : t.participant) &&
        (e == null ? void 0 : e.remoteJid) ===
          (t == null ? void 0 : t.remoteJid)
      );
    }
    function s(e, t) {
      if ((e == null ? void 0 : e.text) !== (t == null ? void 0 : t.text))
        return o("WAResultOrError").makeError("message_text_mismatch");
      var n = g(
        e == null ? void 0 : e.mentionedJid,
        t == null ? void 0 : t.mentionedJid,
        function (e, t) {
          return e.localeCompare(t);
        },
        h,
      );
      if (!n.success)
        return o("WAResultOrError").makeError(
          "message_mentioned_jid_" + n.error,
        );
      var r = g(
        e == null ? void 0 : e.commands,
        t == null ? void 0 : t.commands,
        u,
        c,
      );
      if (!r.success)
        return o("WAResultOrError").makeError("message_commands_" + r.error);
      var a = g(
        e == null ? void 0 : e.mentions,
        t == null ? void 0 : t.mentions,
        d,
        m,
      );
      return a.success
        ? o("WAResultOrError").makeResult()
        : o("WAResultOrError").makeError("message_mentions_" + a.error);
    }
    function u(e, t) {
      return ((e == null ? void 0 : e.validationToken) || "").localeCompare(
        (t == null ? void 0 : t.validationToken) || "",
      );
    }
    function c(e, t) {
      return (e == null ? void 0 : e.commandType) !==
        (t == null ? void 0 : t.commandType)
        ? o("WAResultOrError").makeError("command_type_mismatch")
        : (e == null ? void 0 : e.length) !== (t == null ? void 0 : t.length)
          ? o("WAResultOrError").makeError("command_length_mismatch")
          : (e == null ? void 0 : e.offset) !== (t == null ? void 0 : t.offset)
            ? o("WAResultOrError").makeError("command_offset_mismatch")
            : ((e == null ? void 0 : e.validationToken) || "") !==
                ((t == null ? void 0 : t.validationToken) || "")
              ? o("WAResultOrError").makeError(
                  "command_validation_token_mismatch",
                )
              : o("WAResultOrError").makeResult();
    }
    function d(e, t) {
      return ((e == null ? void 0 : e.mentionedJid) || "").localeCompare(
        (t == null ? void 0 : t.mentionedJid) || "",
      );
    }
    function m(e, t) {
      return (e == null ? void 0 : e.mentionType) !==
        (t == null ? void 0 : t.mentionType)
        ? o("WAResultOrError").makeError("mention_type_mismatch")
        : (e == null ? void 0 : e.length) !== (t == null ? void 0 : t.length)
          ? o("WAResultOrError").makeError("mention_length_mismatch")
          : (e == null ? void 0 : e.offset) !== (t == null ? void 0 : t.offset)
            ? o("WAResultOrError").makeError("mention_offset_mismatch")
            : (e == null ? void 0 : e.mentionedJid) !==
                (t == null ? void 0 : t.mentionedJid)
              ? o("WAResultOrError").makeError("mention_mentioned_jid_mismatch")
              : o("WAResultOrError").makeResult();
    }
    function p(e, t) {
      return (e || "") === (t || "");
    }
    function _(e, t) {
      if (e == null && t == null) return !0;
      if (e != null && t != null) {
        var n = o("WALongInt").numberOrThrowIfTooLarge(e),
          r = o("WALongInt").numberOrThrowIfTooLarge(t);
        return n === r;
      }
      if (e == null && t != null) {
        var a = o("WALongInt").numberOrThrowIfTooLarge(t);
        return a === 0;
      }
      if (t == null && e != null) {
        var i = o("WALongInt").numberOrThrowIfTooLarge(e);
        return i === 0;
      }
      return !1;
    }
    function f(e, t) {
      if (e == null && t == null) return !0;
      if (e != null && t != null) {
        var n = o("WALongInt").numberOrThrowIfTooLarge(e),
          r = o("WALongInt").numberOrThrowIfTooLarge(t);
        return n === r ? !0 : n - (n % 1e3) === r - (r % 1e3);
      }
      return !1;
    }
    function g(e, t, n, r) {
      if (e == null && t == null) return o("WAResultOrError").makeResult();
      if (e != null && t != null) {
        if (e.length !== t.length)
          return o("WAResultOrError").makeError("array_length_mismatch");
        for (var a = e.sort(n), i = t.sort(n), l = 0; l < a.length; l++) {
          var s = r(a[l], i[l]);
          if (!s.success) return s;
        }
        return o("WAResultOrError").makeResult();
      }
      return o("WAResultOrError").makeError("null_vs_non_null_mismatch");
    }
    function h(e, t) {
      return e !== t
        ? o("WAResultOrError").makeError("mismatch")
        : o("WAResultOrError").makeResult();
    }
    function y(e, t) {
      if (e == null && t == null) return !0;
      if (e != null && t != null) {
        if (e instanceof Uint8Array && t instanceof Uint8Array)
          return o("WACryptoUtils").uint8ArraysEqual(e, t);
        if (e instanceof ArrayBuffer && t instanceof ArrayBuffer)
          return o("WACryptoUtils").arrayBuffersEqual(e, t);
      }
      return !1;
    }
    ((l.compareMessageKey = e),
      (l.compareMessageText = s),
      (l.sortCommand = u),
      (l.compareCommand = c),
      (l.sortMention = d),
      (l.compareMention = m),
      (l.softCompareStrings = p),
      (l.softCompareLongInt = _),
      (l.softCompareTimestamps = f),
      (l.compareArray = g),
      (l.directComparsionFunction = h),
      (l.compareBinary = y));
  },
  98,
);
