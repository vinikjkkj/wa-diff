__d(
  "WAWebGroupParticipantsServiceClient",
  ["WAWebGroupParticipantsService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        addGroupParticipants: function (n, r, a) {
          return e(
            o("WAWebGroupParticipantsService").GroupParticipantsService,
            function (e) {
              return e.addGroupParticipants(n, r, a);
            },
          );
        },
        removeGroupParticipants: function (n, r) {
          return e(
            o("WAWebGroupParticipantsService").GroupParticipantsService,
            function (e) {
              return e.removeGroupParticipants(n, r);
            },
          );
        },
        promoteGroupParticipants: function (n, r, a) {
          return e(
            o("WAWebGroupParticipantsService").GroupParticipantsService,
            function (e) {
              return e.promoteGroupParticipants(n, r, a);
            },
          );
        },
        demoteGroupParticipants: function (n, r, a) {
          return e(
            o("WAWebGroupParticipantsService").GroupParticipantsService,
            function (e) {
              return e.demoteGroupParticipants(n, r, a);
            },
          );
        },
      };
    }
    l.groupParticipantsServiceClient = e;
  },
  98,
);
