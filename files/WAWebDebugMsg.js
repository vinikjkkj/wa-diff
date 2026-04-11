__d(
  "WAWebDebugMsg",
  [],
  function (t, n, r, o, a, i) {
    var e = [
      "DistributeSenderKey",
      "GroupDirectedMessage",
      "PHashMismatch",
      "GroupAddressingModeMismatch",
      "ResendRevoke",
      "RotateSenderKey",
      "RetryReceiptSent",
      "RetryReceiptReceived",
    ];
    function l(e) {
      if (
        e === "DistributeSenderKey" ||
        e === "GroupDirectedMessage" ||
        e === "PHashMismatch" ||
        e === "GroupAddressingModeMismatch" ||
        e === "ResendRevoke" ||
        e === "RotateSenderKey" ||
        e === "RetryReceiptSent" ||
        e === "RetryReceiptReceived"
      )
        return e;
    }
    ((i.DebugMessageMembers = e), (i.asDebugMessage = l));
  },
  66,
);
