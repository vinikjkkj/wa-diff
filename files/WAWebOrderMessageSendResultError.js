__d(
  "WAWebOrderMessageSendResultError",
  [],
  function (t, n, r, o, a, i) {
    var e = "Order message SendMsgResult failure status",
      l = (function (t) {
        function n(n) {
          var r;
          return (
            (r = t.call(this, e) || this),
            (r.name = "Error"),
            (r.message = e),
            (r.messageSendResult = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(babelHelpers.wrapNativeSuper(Error));
    i.default = l;
  },
  66,
);
