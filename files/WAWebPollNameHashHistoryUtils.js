__d(
  "WAWebPollNameHashHistoryUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = "";
    function l(e) {
      var t, n;
      return (
        ((t = (n = e.pollNameHashHistory) == null ? void 0 : n.length) != null
          ? t
          : 0) > 0
      );
    }
    function s(e, t) {
      var n;
      return (n = e.pollNameHashHistory) == null ||
        (n = n.find(function (e) {
          return e.editStanzaId === t;
        })) == null
        ? void 0
        : n.pollNameHash;
    }
    function u(e, t, n) {
      return [].concat(e != null ? e : [], [
        { editStanzaId: t, pollNameHash: n },
      ]);
    }
    ((i.ORIGINAL_POLL_VERSION_EDIT_STANZA_ID = e),
      (i.hasPollNameHashHistory = l),
      (i.getPollNameHashFor = s),
      (i.appendPollNameHash = u));
  },
  66,
);
