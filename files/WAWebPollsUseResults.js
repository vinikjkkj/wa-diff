__d(
  "WAWebPollsUseResults",
  [
    "WANullthrows",
    "WAWebAddonHydrationUtils",
    "WAWebFrontendPollVoteGetters",
    "WAWebMarkAddOnsAsReadAction",
    "WAWebMessageAddOnType",
    "WAWebMsgType",
    "WAWebPollVoteGetters",
    "WAWebPollsGatingUtils",
    "WAWebPollsPollVoteCollection",
    "WAWebUserPrefsMeUser",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo;
    function d(e) {
      var t = o("useWAWebModelValues").useModelValues(e, ["id", "pollOptions"]),
        n = t.id,
        a = t.pollOptions,
        i = o(
          "WAWebPollsPollVoteCollection",
        ).PollVoteCollection.getForParentAddressingModeInsensitive([n]),
        l = i[0],
        s = r("useWAWebEventTargetValue")(l, "add remove reset", function () {
          return l.toArray();
        }),
        d = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead();
      return (
        u(
          function () {
            o("WAWebAddonHydrationUtils").hydrateAddons({
              ids: [n],
              hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            });
          },
          [n],
        ),
        u(
          function () {
            if (o("WAWebPollsGatingUtils").arePollsNotificationsEnabled()) {
              var e = s.filter(function (e) {
                return !e.read;
              });
              e.length !== 0 &&
                d({
                  addOnType: o("WAWebMessageAddOnType").MessageAddOnType
                    .PollVote,
                  addOns: e.map(function (e) {
                    return { msgKey: e.msgKey, sender: e.sender.toString() };
                  }),
                });
            }
          },
          [s, d],
        ),
        c(
          function () {
            return m(s, a);
          },
          [s, a],
        )
      );
    }
    function m(e, t) {
      var n = new Map(),
        a = 0,
        i = 0;
      for (var l of t)
        n.set(l, {
          isVotedForByMe: !1,
          isCurrentLeader: !1,
          percentageOfAll: 0,
          percentageOfMostVotedForOption: 0,
          votes: [],
          count: 0,
          mode: "e2ee",
        });
      var s = Array.from(e).sort(function (e, t) {
        return o("WAWebUserPrefsMeUser").isMeAccount(t.sender)
          ? 1
          : o("WAWebUserPrefsMeUser").isMeAccount(e.sender)
            ? -1
            : o("WAWebPollVoteGetters").getTimestamp(t) -
              o("WAWebPollVoteGetters").getTimestamp(e);
      });
      for (var u of s)
        for (var c of u.selectedOptionLocalIds) {
          var d = t[c],
            m = r("WANullthrows")(
              n.get(d),
              "Option with local ID " + c + " not found",
            );
          m.mode === "e2ee" &&
            (m.votes.push(u),
            (a = Math.max(a, m.votes.length)),
            (i += 1),
            o("WAWebUserPrefsMeUser").isMeAccount(
              o("WAWebFrontendPollVoteGetters").getSenderObj(u).id,
            ) && (m.isVotedForByMe = !0));
        }
      for (var p of n.values())
        ((p.percentageOfMostVotedForOption = a === 0 ? 0 : p.votes.length / a),
          (p.percentageOfAll = i === 0 ? 0 : p.votes.length / i),
          (p.isCurrentLeader = a > 0 && p.votes.length === a),
          (p.count = p.votes.length));
      return n;
    }
    function p(e) {
      return Array.from(e.entries())
        .map(function (e) {
          var t = e[0],
            n = e[1];
          return { optionName: t.name, optionVoteCount: n.count };
        })
        .sort(function (e, t) {
          return t.optionVoteCount - e.optionVoteCount;
        })
        .map(function (e) {
          var t = e.optionName,
            n = e.optionVoteCount;
          return t + ": " + n;
        })
        .join(", ");
    }
    ((l.useResults = d), (l.aggregateVotes = m), (l.getOptionWithCount = p));
  },
  98,
);
