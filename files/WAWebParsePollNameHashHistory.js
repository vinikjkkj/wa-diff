__d(
  "WAWebParsePollNameHashHistory",
  ["WAWebPollNameHashHistoryUtils", "WAWebPollsGatingUtils", "compactMap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      if (o("WAWebPollsGatingUtils").isPollTCReceivingEnabled()) {
        var n = r("compactMap")(
          (t = e == null ? void 0 : e.pollNameHashHistory) != null ? t : [],
          function (e) {
            var t = e.editStanzaId,
              n = e.pollNameHash;
            return n != null
              ? {
                  editStanzaId:
                    t != null
                      ? t
                      : o("WAWebPollNameHashHistoryUtils")
                          .ORIGINAL_POLL_VERSION_EDIT_STANZA_ID,
                  pollNameHash: new Uint8Array(n),
                }
              : null;
          },
        );
        return n.length > 0 ? n : void 0;
      }
    }
    l.parsePollNameHashHistoryFromHistorySync = e;
  },
  98,
);
