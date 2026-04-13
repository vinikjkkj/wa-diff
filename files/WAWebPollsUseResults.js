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
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo;
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["id", "pollOptions"]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebModelValues").useModelValues(e, n),
        i = a.id,
        l = a.pollOptions,
        s;
      t[1] !== i
        ? ((s = o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getForParentAddressingModeInsensitive([i])),
          (t[1] = i),
          (t[2] = s))
        : (s = t[2]);
      var c = s,
        d = c[0],
        f;
      t[3] !== d
        ? ((f = function () {
            return d.toArray();
          }),
          (t[3] = d),
          (t[4] = f))
        : (f = t[4]);
      var g = r("useWAWebEventTargetValue")(d, "add remove reset", f),
        h = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead(),
        y,
        C;
      (t[5] !== i
        ? ((y = function () {
            o("WAWebAddonHydrationUtils").hydrateAddons({
              ids: [i],
              hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            });
          }),
          (C = [i]),
          (t[5] = i),
          (t[6] = y),
          (t[7] = C))
        : ((y = t[6]), (C = t[7])),
        u(y, C));
      var b, v;
      (t[8] !== h || t[9] !== g
        ? ((b = function () {
            if (o("WAWebPollsGatingUtils").arePollsNotificationsEnabled()) {
              var e = g.filter(p);
              e.length !== 0 &&
                h({
                  addOnType: o("WAWebMessageAddOnType").MessageAddOnType
                    .PollVote,
                  addOns: e.map(m),
                });
            }
          }),
          (v = [g, h]),
          (t[8] = h),
          (t[9] = g),
          (t[10] = b),
          (t[11] = v))
        : ((b = t[10]), (v = t[11])),
        u(b, v));
      var S;
      return (
        t[12] !== l || t[13] !== g
          ? ((S = _(g, l)), (t[12] = l), (t[13] = g), (t[14] = S))
          : (S = t[14]),
        S
      );
    }
    function m(e) {
      return { msgKey: e.msgKey, sender: e.sender.toString() };
    }
    function p(e) {
      return !e.read;
    }
    function _(e, t) {
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
    function f(e) {
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
    ((l.useResults = d), (l.aggregateVotes = _), (l.getOptionWithCount = f));
  },
  98,
);
