__d(
  "WAWebGroupParticipantsServiceWebLive",
  [
    "WAWebGroupModifyParticipantsJob",
    "WAWebGroupParticipantsService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGroupParticipantsService").GroupParticipantsService.make(
      function* () {
        var e = {
          addGroupParticipants: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebGroupModifyParticipantsJob").addGroupParticipants(
                t,
                n,
                r,
              );
            });
          },
          removeGroupParticipants: function (t, n) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebGroupModifyParticipantsJob",
              ).removeGroupParticipants(t, n);
            });
          },
          promoteGroupParticipants: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebGroupModifyParticipantsJob",
              ).promoteGroupParticipants(t, n, r);
            });
          },
          demoteGroupParticipants: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebGroupModifyParticipantsJob",
              ).demoteGroupParticipants(t, n, r);
            });
          },
        };
        return e;
      },
    );
    l.GroupParticipantsServiceWebLive = e;
  },
  98,
);
