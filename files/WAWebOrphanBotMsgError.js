__d(
  "WAWebOrphanBotMsgError",
  [],
  function (t, n, r, o, a, i) {
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r =
            e.call(
              this,
              "decryptMsmsgBotMessage: orphan bot message (" + n + ")",
            ) || this),
          (r.name = "OrphanBotMsgError"),
          (r.message =
            "decryptMsmsgBotMessage: orphan bot message (" + n + ")"),
          (r.reason = n),
          (r.targetMsgKey = t),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    i.default = e;
  },
  66,
);
