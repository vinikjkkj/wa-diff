__d(
  "WAWebOrderMessageSendResultError",
  [],
  function (t, n, r, o, a, i) {
    var e = "Order message SendMsgResult failure status",
      l = (function (t) {
        function n(n, r, o, a) {
          var i;
          return (
            (i = t.call(this, e) || this),
            (i.name = "Error"),
            (i.message = e),
            (i.messageSendResult = n),
            (i.failureReason = r),
            (i.failureErrorName = a),
            (i.ackErrorCode = o),
            i
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(babelHelpers.wrapNativeSuper(Error));
    i.default = l;
  },
  66,
);
