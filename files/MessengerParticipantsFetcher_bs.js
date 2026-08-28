__d(
  "MessengerParticipantsFetcher.bs",
  [
    "MessengerParticipantsQuery.graphql",
    "MessengerServerPayloadTransformer.bs",
    "MessengerWebGraphQLHelper",
    "ODS",
    "Promise",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      return o("MessengerWebGraphQLHelper")
        .exec(
          {
            id: r("MessengerParticipantsQuery.graphql").params.id,
            variables: t,
          },
          {
            actorID: null,
            batchName: "MessengerParticipantsFetcher",
            msgrRegion: null,
          },
        )
        .catch(function (t) {
          return (
            (s || (s = o("ODS"))).bumpEntityKey(
              2966,
              "messenger_webgraphql",
              "fetch_participants.failure",
            ),
            (e || (e = n("Promise"))).reject(t)
          );
        })
        .then(function (e) {
          (s || (s = o("ODS"))).bumpEntityKey(
            2966,
            "messenger_webgraphql",
            "fetch_participants.success",
          );
          var n = [],
            r = new Set();
          e.messaging_actors.forEach(function (e) {
            if (e != null) {
              var t = o(
                "MessengerServerPayloadTransformer.bs",
              ).transformParticipant(e);
              (r.add(t.fbid), n.push(t));
            }
          });
          var a = t.ids.filter(function (e) {
            return !r.has(e);
          });
          return (
            a.length > 0 &&
              a.forEach(function (e) {
                n.push(
                  o(
                    "MessengerServerPayloadTransformer.bs",
                  ).getBlockedParticipant(e),
                );
              }),
            n
          );
        });
    }
    l.$$fetch = u;
  },
  98,
);
