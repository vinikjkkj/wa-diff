__d(
  "WAWebPollsDailyStatsUtils",
  [
    "WAWebApiContact",
    "WAWebChatGetters",
    "WAWebDailyAggregatedStatsCollection",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebMsgGetters",
    "WAWebPollsActionsMetricUtils",
    "WAWebWamNumberToClientGroupSizeBucket",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        a,
        i = e.pollLoggingId;
      if (
        !(i == null || i === 0) &&
        o("WAWebMsgGetters").getIsSentByMeFromWeb(e.unsafe())
      ) {
        var l = o(
            "WAWebDailyAggregatedStatsCollection",
          ).DailyAggregatedStatsCollection.gaddForToday(),
          m = String(i),
          p = (r = l.pollsDailyStats[m]) != null ? r : u(),
          _ = babelHelpers.extends({}, p, {
            participantIds: [].concat(p.participantIds),
          });
        (s(_, t, n), c(_, e));
        var f = o("WAWebFrontendMsgGetters").getMaybeChat(e.unsafe());
        (f != null && d(_, f),
          (l.pollsDailyStats = babelHelpers.extends(
            {},
            l.pollsDailyStats,
            ((a = {}), (a[m] = _), a),
          )));
      }
    }
    function s(e, t, n) {
      e: {
        if (t === "poll_edit") {
          ((e.pollCreatorEdit += 1), m(e, n));
          break e;
        }
        if (t === "poll_edit_rejected") {
          e.pollCreatorEditRejected += 1;
          break e;
        }
        if (t === "vote") {
          ((e.pollVotes += 1), m(e, n));
          break e;
        }
        if (t === "vote_change") {
          ((e.pollVotesChanged += 1), m(e, n));
          break e;
        }
        if (t === "vote_delete") {
          ((e.pollVoteDeletes += 1), m(e, n));
          break e;
        }
        if (t === "vote_rejected") {
          e.pollVoteRejected += 1;
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function u() {
      return {
        isAGroup: !1,
        optionsCount: 0,
        participantIds: [],
        pollCreationDs: 0,
        pollCreatorEdit: 0,
        pollCreatorEditRejected: 0,
        pollVoteDeletes: 0,
        pollVoteRejected: 0,
        pollVotes: 0,
        pollVotesChanged: 0,
      };
    }
    function c(e, t) {
      var n = o(
          "WAWebPollsActionsMetricUtils",
        ).getPollMetricFieldsFromCreationMsg(t),
        r = n.creationDateInSeconds,
        a = n.hideVoterName,
        i = n.pollDurationMs,
        l = n.pollOptionsCount;
      ((e.hideVoterName = a),
        (e.optionsCount = l),
        (e.pollCreationDs = o(
          "WAWebPollsActionsMetricUtils",
        ).getNearestDayEpochDatestamp(r)),
        (e.pollDurationMs = i));
    }
    function d(e, t) {
      var n = t.groupMetadata,
        a = o("WAWebChatGetters").getIsGroup(t);
      (a &&
        n != null &&
        !n.stale &&
        ((e.groupSizeBucket = r("WAWebWamNumberToClientGroupSizeBucket")(
          t.getParticipantCount(),
        )),
        (e.typeOfGroup = o("WAWebGroupType").groupTypeToWamEnum(
          o("WAWebGroupMetadataGetters").getGroupType(n),
        ))),
        (e.isAGroup = a));
    }
    function m(e, t) {
      var n,
        r = t.toString(),
        a =
          (n = o("WAWebApiContact").getAlternateUserWid(t)) == null
            ? void 0
            : n.toString();
      if (
        !e.participantIds.includes(r) &&
        !(a != null && e.participantIds.includes(a))
      ) {
        for (var i of e.participantIds) {
          var l,
            s = void 0;
          try {
            s = o("WAWebWidFactory").createUserWidOrThrow(i);
          } catch (e) {
            continue;
          }
          var u =
            (l = o("WAWebApiContact").getAlternateUserWid(s)) == null
              ? void 0
              : l.toString();
          if (u != null && u === r) return;
        }
        var c = a != null && !t.isLid() ? a : r;
        e.participantIds.push(c);
      }
    }
    l.incrementPollsDailyStat = e;
  },
  98,
);
