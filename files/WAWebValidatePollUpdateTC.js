__d(
  "WAWebValidatePollUpdateTC",
  ["WACryptoUtils", "WAWebPollNameHashHistoryUtils", "WAWebPollsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.parentMsg,
        r = e.voteMetadata;
      if (
        !o("WAWebPollsGatingUtils").isPollTCReceivingEnabled() ||
        !o("WAWebPollNameHashHistoryUtils").hasPollNameHashHistory(n) ||
        r == null
      )
        return { kind: "pass" };
      var a =
          (t = r.lastEditStanzaId) != null
            ? t
            : o("WAWebPollNameHashHistoryUtils")
                .ORIGINAL_POLL_VERSION_EDIT_STANZA_ID,
        i = o("WAWebPollNameHashHistoryUtils").getPollNameHashFor(n, a);
      return i == null
        ? { kind: "park", dependencyId: a }
        : o("WACryptoUtils").uint8ArraysEqual(i, r.pollNameHash)
          ? { kind: "pass" }
          : { kind: "mismatch" };
    }
    l.validatePollUpdateTC = e;
  },
  98,
);
