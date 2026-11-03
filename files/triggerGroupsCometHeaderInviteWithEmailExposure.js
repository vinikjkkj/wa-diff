__d(
  "triggerGroupsCometHeaderInviteWithEmailExposure",
  [
    "CometRelay",
    "promiseDone",
    "triggerGroupsCometHeaderInviteWithEmailExposureQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var a = t.groupId,
        i = t.relayEnvironment;
      r("promiseDone")(
        o("CometRelay")
          .fetchQuery(
            i,
            e !== void 0
              ? e
              : (e = n(
                  "triggerGroupsCometHeaderInviteWithEmailExposureQuery.graphql",
                )),
            { groupId: a },
          )
          .toPromise(),
      );
    }
    l.default = s;
  },
  98,
);
