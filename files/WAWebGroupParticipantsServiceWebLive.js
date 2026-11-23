__d(
  "WAWebGroupParticipantsServiceWebLive",
  ["JSResourceForInteraction", "WAWebGroupParticipantsService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebGroupModifyParticipantsJob",
      ).__setRef("WAWebGroupParticipantsServiceWebLive"),
      s = o("WAWebGroupParticipantsService").GroupParticipantsService.make(
        function* () {
          var t = yield* o("WebDi.Async").fromPromise(function () {
              return e.load();
            }),
            n = t.addGroupParticipants,
            r = t.demoteGroupParticipants,
            a = t.promoteGroupParticipants,
            i = t.removeGroupParticipants,
            l = {
              addGroupParticipants: function (t, r, a) {
                return o("WebDi.Async").fromPromise(function () {
                  return n(t, r, a);
                });
              },
              removeGroupParticipants: function (t, n) {
                return o("WebDi.Async").fromPromise(function () {
                  return i(t, n);
                });
              },
              promoteGroupParticipants: function (t, n, r) {
                return o("WebDi.Async").fromPromise(function () {
                  return a(t, n, r);
                });
              },
              demoteGroupParticipants: function (t, n, a) {
                return o("WebDi.Async").fromPromise(function () {
                  return r(t, n, a);
                });
              },
            };
          return l;
        },
      );
    l.GroupParticipantsServiceWebLive = s;
  },
  98,
);
