__d(
  "WAWebDebugMsg",
  ["vulture"],
  function (t, n, r, o, a, i, l) {
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
    function s(e) {
      if (
        (r("vulture")("C0dHQK8b9sZODm3DYeZfXNxxaDE="),
        e === "DistributeSenderKey" ||
          e === "GroupDirectedMessage" ||
          e === "PHashMismatch" ||
          e === "GroupAddressingModeMismatch" ||
          e === "ResendRevoke" ||
          e === "RotateSenderKey" ||
          e === "RetryReceiptSent" ||
          e === "RetryReceiptReceived")
      )
        return e;
    }
    ((l.DebugMessageMembers = e), (l.asDebugMessage = s));
  },
  98,
);
