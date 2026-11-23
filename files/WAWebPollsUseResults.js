__d(
  "WAWebPollsUseResults",
  [
    "WAWebAddonHydrationUtils",
    "WAWebCastToPollCreationMsg",
    "WAWebFrontendPollVoteGetters",
    "WAWebMarkAddOnsAsReadAction",
    "WAWebMessageAddOnType",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteCollection",
    "WAWebUserUtils",
    "nullthrows",
    "react",
    "sumBy",
    "useWAWebEventTargetValue",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo;
    function d(e) {
      var t = o("useWAWebMsgValues").useMsgValues(
          e,
          r("WAWebCastToPollCreationMsg"),
          [o("WAWebMsgGetters").getPollOptions],
        ),
        n = t[0],
        a = r("nullthrows")(n, "Poll creation message is missing poll options"),
        i = o(
          "WAWebPollsPollVoteCollection",
        ).PollVoteCollection.getForParentAddressingModeInsensitive([e]),
        l = i[0],
        s = r("useWAWebEventTargetValue")(
          l,
          ["add", "remove", "reset"],
          function () {
            return l.toArray();
          },
        ),
        d = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead();
      return (
        u(
          function () {
            o("WAWebAddonHydrationUtils").hydrateAddons({
              ids: [e],
              hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            });
          },
          [e],
        ),
        u(
          function () {
            var e = s.filter(function (e) {
              return !e.read;
            });
            e.length !== 0 &&
              d({
                addOnType: o("WAWebMessageAddOnType").MessageAddOnType.PollVote,
                addOns: e.map(function (e) {
                  return { msgKey: e.msgKey, sender: e.sender.toString() };
                }),
              });
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
        a = new Map(
          t.map(function (e) {
            return [e.localId, e];
          }),
        ),
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
          return o("WAWebUserUtils").isMeAccount(t.sender)
            ? 1
            : o("WAWebUserUtils").isMeAccount(e.sender)
              ? -1
              : o("WAWebPollVoteGetters").getTimestamp(t) -
                o("WAWebPollVoteGetters").getTimestamp(e);
        }),
        u = r("sumBy")(s, function (e) {
          return e.selectedOptionLocalIds.length;
        });
      for (var c of s)
        for (var d of c.selectedOptionLocalIds) {
          var m = a.get(d),
            p = r("nullthrows")(
              m == null ? null : n.get(m),
              "Option with local ID " + d + " not found",
            );
          p.mode === "e2ee" &&
            (p.votes.push(c),
            (i = Math.max(i, p.votes.length)),
            o("WAWebUserUtils").isMeAccount(
              o("WAWebFrontendPollVoteGetters").getSenderObj(c).id,
            ) && (p.isVotedForByMe = !0));
        }
      for (var _ of n.values())
        ((_.percentageOfMostVotedForOption = i === 0 ? 0 : _.votes.length / i),
          (_.percentageOfAll = u === 0 ? 0 : _.votes.length / u),
          (_.isCurrentLeader = i > 0 && _.votes.length === i),
          (_.count = _.votes.length));
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
