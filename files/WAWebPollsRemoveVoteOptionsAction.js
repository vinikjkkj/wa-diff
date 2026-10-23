__d(
  "WAWebPollsRemoveVoteOptionsAction",
  ["WAWebPollsPollVoteCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = new Set(t),
        r = function (t) {
          return n.has(t);
        },
        a = o(
          "WAWebPollsPollVoteCollection",
        ).PollVoteCollection.getForParentAddressingModeInsensitive([e]),
        i = a[0],
        l = i.filter(function (e) {
          var t;
          return (
            e.selectedOptionLocalIds.some(r) ||
            ((t = e.lastSuccessfulSelectedOptionLocalIds) == null
              ? void 0
              : t.some(r)) === !0
          );
        });
      if (l.length !== 0) {
        o("WAWebPollsPollVoteCollection").PollVoteCollection.remove(l);
        for (var s of l) {
          var u;
          ((s.selectedOptionLocalIds = s.selectedOptionLocalIds.filter(
            function (e) {
              return !r(e);
            },
          )),
            (s.lastSuccessfulSelectedOptionLocalIds =
              (u = s.lastSuccessfulSelectedOptionLocalIds) == null
                ? void 0
                : u.filter(function (e) {
                    return !r(e);
                  })));
        }
        o("WAWebPollsPollVoteCollection").PollVoteCollection.add(l);
      }
    }
    l.removeOptionsFromPollVotes = e;
  },
  98,
);
