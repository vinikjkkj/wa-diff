__d(
  "WAWebOrphanBotMsgError",
  [],
  function (t, n, r, o, a, i) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n =
            e.call(this, "decryptMsmsgBotMessage: orphan bot message") || this),
          (n.name = "OrphanBotMsgError"),
          (n.message = "decryptMsmsgBotMessage: orphan bot message"),
          (n.targetMsgKey = t),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    i.default = e;
  },
  66,
);
