__d(
  "WAWebBrazilPaymentStateBridgeApi",
  [
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebRemoveBrazilPaymentStatePlaceholdersAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      updateBrazilPaymentStateMsgs: function (t) {
        var e = t.updates;
        e.forEach(function (e) {
          var t,
            n = e.interactivePayload,
            r = e.msgKey;
          (t = s(r)) == null || t.set({ interactivePayload: n });
        });
      },
      removeBrazilPaymentStatePlaceholders: function (t) {
        var e = t.msgKeys,
          n = t.unreadReductions;
        o(
          "WAWebRemoveBrazilPaymentStatePlaceholdersAction",
        ).removeResolvedBrazilPaymentStatePlaceholders(e, n);
      },
    };
    function s(e) {
      var t,
        n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
      return (t = o("WAWebMsgCollection").MsgCollection.get(e)) != null
        ? t
        : n != null
          ? o("WAWebMsgCollection").MsgCollection.get(n)
          : null;
    }
    l.BrazilPaymentStateBridgeApi = e;
  },
  98,
);
