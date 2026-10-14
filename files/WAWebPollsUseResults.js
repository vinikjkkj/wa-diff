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
    "WAWebUserPrefsMeUser",
    "nullthrows",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(18),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebMsgGetters").getPollOptions]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(
          e,
          r("WAWebCastToPollCreationMsg"),
          n,
        ),
        i = a[0],
        l;
      t[1] !== i
        ? ((l = r("nullthrows")(
            i,
            "Poll creation message is missing poll options",
          )),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var s = l,
        c;
      t[3] !== e
        ? ((c = o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getForParentAddressingModeInsensitive([e])),
          (t[3] = e),
          (t[4] = c))
        : (c = t[4]);
      var d = c,
        f = d[0],
        g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = ["add", "remove", "reset"]), (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== f
        ? ((h = function () {
            return f.toArray();
          }),
          (t[6] = f),
          (t[7] = h))
        : (h = t[7]);
      var y = r("useWAWebEventTargetValue")(f, g, h),
        C = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead(),
        b,
        v;
      (t[8] !== e
        ? ((b = function () {
            o("WAWebAddonHydrationUtils").hydrateAddons({
              ids: [e],
              hydrationType: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            });
          }),
          (v = [e]),
          (t[8] = e),
          (t[9] = b),
          (t[10] = v))
        : ((b = t[9]), (v = t[10])),
        u(b, v));
      var S, R;
      (t[11] !== C || t[12] !== y
        ? ((S = function () {
            var e = y.filter(p);
            e.length !== 0 &&
              C({
                addOnType: o("WAWebMessageAddOnType").MessageAddOnType.PollVote,
                addOns: e.map(m),
              });
          }),
          (R = [y, C]),
          (t[11] = C),
          (t[12] = y),
          (t[13] = S),
          (t[14] = R))
        : ((S = t[13]), (R = t[14])),
        u(S, R));
      var L;
      return (
        t[15] !== s || t[16] !== y
          ? ((L = _(y, s)), (t[15] = s), (t[16] = y), (t[17] = L))
          : (L = t[17]),
        L
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
          return o("WAWebUserPrefsMeUser").isMeAccount(t.sender)
            ? 1
            : o("WAWebUserPrefsMeUser").isMeAccount(e.sender)
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
            o("WAWebUserPrefsMeUser").isMeAccount(
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
