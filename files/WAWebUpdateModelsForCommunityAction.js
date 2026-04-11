__d(
  "WAWebUpdateModelsForCommunityAction",
  [
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityActivityModel",
    "WAWebContactCollection",
    "WAWebGroupMetadataCollection",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUpdateDbForCommunityAction",
    "WAWebUpdateSubgroupsCommunityAction",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      (r("WAWebGroupMetadataCollection").remove(e),
        o("WAWebChatCollection").ChatCollection.remove(e),
        o("WAWebContactCollection").ContactCollection.remove(e));
    }
    function s(e) {
      var t = e.author,
        n = e.parentGroupId,
        a = e.subgroups,
        i = e.timestamp,
        l = o("WAWebUpdateDbForCommunityAction").partitionSubgroups(
          a,
          function (e) {
            return !o("WAWebUpdateSubgroupsCommunityAction").determineUnjoined(
              e,
            );
          },
        ),
        s = l.joinedSubgroups,
        u = l.unjoinedSubgroups;
      (o(
        "WAWebUpdateSubgroupsCommunityAction",
      ).updateUnjoinedSubgroupsInCollection(u, n),
        o(
          "WAWebUpdateSubgroupsCommunityAction",
        ).updateJoinedSubgroupsInCollection(s, n));
      var c = r("WAWebGroupMetadataCollection").assertGet(n);
      if (
        (c.set({ lastActivityTimestamp: o("WATimeUtils").unixTime() }),
        !o("WAWebUserPrefsMeUser").isMeAccount(t))
      ) {
        var d = a.map(function (e) {
          return new (o("WAWebCommunityActivityModel").CommunityActivity)({
            id: r("WAWebPonyfillsCryptoRandomUUID")(),
            timestamp: i != null ? i : o("WATimeUtils").unixTime(),
            communityId: n,
            type: o("WAWebCommunityActivityModel").ActivityTypeType
              .SUB_GROUP_LINK,
            subgroupName: e.subject,
            subgroupId: e.id,
          });
        });
        r("WAWebCommunityActivityCollection").addDeduppedSubgroupLink(d);
      }
    }
    function u(e, t) {
      var n = o("WAWebUpdateDbForCommunityAction").partitionSubgroups(
          t,
          function (e) {
            return !o("WAWebUpdateSubgroupsCommunityAction").determineUnjoined(
              e,
            );
          },
        ),
        a = n.joinedSubgroups,
        i = n.unjoinedSubgroups;
      (o(
        "WAWebUpdateSubgroupsCommunityAction",
      ).updateUnjoinedSubgroupsInCollection(i, e, !1),
        o(
          "WAWebUpdateSubgroupsCommunityAction",
        ).updateJoinedSubgroupsInCollection(a, e, !1));
      var l = t.map(function (e) {
        return e.id.toString();
      });
      r("WAWebCommunityActivityCollection").remove(l);
    }
    function c(e) {
      var t = r("WAWebGroupMetadataCollection").assertGet(e);
      if (t.isParentGroup === !0) {
        t.set({ suspended: !0, terminated: !0 });
        var n = o("WAWebChatCommunityUtils").getCagIdFromCommunity(e);
        n.forEach(function (e) {
          var t = r("WAWebGroupMetadataCollection").get(e);
          t != null &&
            t.participants.iAmMember() &&
            (t == null || t.set({ terminated: !0, suspended: !0 }));
        });
        var a = o("WAWebChatCommunityUtils")
          .formatSubgroupUpdateTypes(
            t.joinedSubgroups.filter(function (e) {
              return !n.includes(e);
            }),
            !0,
          )
          .concat(
            o("WAWebChatCommunityUtils").formatSubgroupUpdateTypes(
              t.unjoinedSubgroups,
              !1,
            ),
          );
        u(e, a);
      }
    }
    function d(t) {
      var n = r("WAWebGroupMetadataCollection").get(t);
      if (!(n == null || n.isParentGroup !== !0)) {
        var a = o("WAWebChatCommunityUtils").getCagIdFromCommunity(t);
        a.forEach(function (e) {
          var t = r("WAWebGroupMetadataCollection").get(e);
          t != null &&
            t.participants.iAmMember() &&
            (t == null || t.set({ terminated: !0, parentGroup: void 0 }));
        });
        var i = o("WAWebChatCommunityUtils")
          .formatSubgroupUpdateTypes(
            n.joinedSubgroups.filter(function (e) {
              return !a.includes(e);
            }),
            !0,
          )
          .concat(
            o("WAWebChatCommunityUtils").formatSubgroupUpdateTypes(
              n.unjoinedSubgroups,
              !1,
            ),
          );
        (u(t, i), e(t));
      }
    }
    function m(t) {
      if (t) {
        var n = r("WAWebGroupMetadataCollection").get(t);
        n &&
          (u(
            t,
            o("WAWebChatCommunityUtils").formatSubgroupUpdateTypes(
              n.unjoinedSubgroups,
              !1,
            ),
          ),
          e(t));
      }
    }
    function p(e, t) {
      var n = r("WAWebGroupMetadataCollection").assertGet(e);
      if (!(n.defaultSubgroup !== !0 || n.parentGroup == null)) {
        var o = r("WAWebGroupMetadataCollection").get(n.parentGroup);
        o == null || o.set({ suspended: t });
      }
    }
    ((l.updateModelsForSubgroupLink = s),
      (l.updateModelsForSubgroupUnlink = u),
      (l.updateModelsForIntegrityDeactivateCommunity = c),
      (l.updateModelsForDeactivateCommunity = d),
      (l.updateModelsForExitedCommunity = m),
      (l.maybeUpdateModelsForCommunitySuspendedStatus = p));
  },
  98,
);
