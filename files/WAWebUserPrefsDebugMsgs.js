__d(
  "WAWebUserPrefsDebugMsgs",
  ["WAWebDebugMsg", "WAWebUserPrefsDebugKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
      ["DistributeSenderKey", !0],
      ["GroupDirectedMessage", !0],
      ["PHashMismatch", !0],
      ["GroupAddressingModeMismatch", !0],
      ["ResendRevoke", !0],
      ["RotateSenderKey", !0],
      ["RetryReceiptSent", !1],
      ["RetryReceiptReceived", !1],
    ]);
    function s(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_SHOWN_MSGS,
        e,
      );
    }
    function u() {
      var t = {},
        n = r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_SHOWN_MSGS,
        );
      for (var a of o("WAWebDebugMsg").DebugMessageMembers) {
        if (n == null || typeof n != "object" || n instanceof Array) {
          var i;
          t[a] = (i = e.get(a)) != null ? i : !1;
          continue;
        }
        var l = n[a];
        if (typeof l != "boolean") {
          var s;
          t[a] = (s = e.get(a)) != null ? s : !1;
        } else t[a] = l;
      }
      return t;
    }
    ((l.DEFAULT_VALUES = e),
      (l.setDebugShownMsgs = s),
      (l.getDebugShownMsgs = u));
  },
  98,
);
