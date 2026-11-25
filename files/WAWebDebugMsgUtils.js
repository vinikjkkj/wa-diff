__d(
  "WAWebDebugMsgUtils",
  [
    "WAWebDebugSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebUserPrefsDebugMsgs",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e === "DistributeSenderKey"
        ? "Distribute sender key (DEV ONLY)"
        : e === "GroupDirectedMessage"
          ? "Group directed message (DEV ONLY)"
          : e === "PHashMismatch"
            ? "PHash mismatch (DEV ONLY)"
            : e === "GroupAddressingModeMismatch"
              ? "Addressing mode mismatch (DEV ONLY)"
              : e === "ResendRevoke"
                ? "Resend revoke (DEV ONLY)"
                : e === "RetryReceiptSent"
                  ? "Sent retry receipt " + (t != null ? t : "") + " (DEV ONLY)"
                  : e === "RetryReceiptReceived"
                    ? "Received retry receipt " +
                      (t != null ? t : "") +
                      " (DEV ONLY)"
                    : e === "RotateSenderKey"
                      ? "Rotate sender key (DEV ONLY)"
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
    }
    function s(e, t, n) {
      var r = o("WAWebUserPrefsDebugMsgs").getDebugShownMsgs();
      if (r[t] === !0) {
        var a = o("WAWebDebugSystemMsg").genDebugMsg(e, t, n);
        o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: e,
          newMsg: a,
          handleSingleMsgOrigin: "debugMsgUtils",
        });
      }
    }
    var u = { debugReadable: e, injectDebug: s };
    l.default = u;
  },
  98,
);
