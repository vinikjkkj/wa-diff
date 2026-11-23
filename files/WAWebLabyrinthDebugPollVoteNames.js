__d(
  "WAWebLabyrinthDebugPollVoteNames",
  ["WABase64", "WAWebPollOptionHashUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = s(e);
      if (t == null || !e.badges.some(u)) return e;
      var n = new Map(
        await Promise.all(
          t.map(async function (e) {
            return [
              o("WABase64").encodeB64(
                await o("WAWebPollOptionHashUtils").getHashBufferForString(e),
              ),
              e,
            ];
          }),
        ),
      );
      return babelHelpers.extends({}, e, {
        badges: e.badges.map(function (e) {
          return e.kind === "votes"
            ? {
                kind: "votes",
                votes: e.votes.map(function (e) {
                  return babelHelpers.extends({}, e, {
                    optionNames: e.selectedOptionHashes.map(function (e) {
                      var t;
                      return (t = n.get(e)) != null ? t : null;
                    }),
                  });
                }),
              }
            : e;
        }),
      });
    }
    function s(e) {
      var t = e.facts;
      for (var n of t) if (n.kind === "pollOptions") return n.names;
      return null;
    }
    function u(e) {
      return e.kind === "votes";
    }
    l.resolveLabyrinthDebugPollVoteNames = e;
  },
  98,
);
