__d(
  "WAWebInviteV4QueryGroupAction",
  ["WAWebApiGroupInviteV4Store", "WAWebGroupInviteV4Job"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebGroupInviteV4Job").revokeGroupInviteV4(e, t);
    }
    function s(e) {
      return o("WAWebApiGroupInviteV4Store").getPendingParticipantsDB(e);
    }
    ((l.revokeGroupInviteV4 = e), (l.getPendingParticipants = s));
  },
  98,
);
