__d(
  "WAWebContactsAndGroupsMyCommunities",
  [
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatSortTime",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebContactsAndGroupsGroupsTableRows",
    "WAWebContactsAndGroupsMyGroups",
    "WAWebFrontendChatGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      members: v,
      name: b,
      nameDescending: function (t, n) {
        return b(n, t);
      },
      recent: S,
    };
    function s() {
      return o("WAWebChatCollection").ChatCollection.filter(u).sort(b);
    }
    function u(e) {
      return (
        o("WAWebChatGetters").getIsGroup(e) &&
        e.groupMetadata != null &&
        !e.isLocked &&
        o("WAWebFrontendChatGetters").getIsCommunity(e)
      );
    }
    function c(t, n, r, a) {
      var i = o("WAWebContactsAndGroupsMyGroups").createGroupSearch(r);
      return t
        .filter(function (e) {
          return (
            (n === "all" ||
              o("WAWebContactsAndGroupsGroupsTableRows").isGroupAdmin(e)) &&
            i(e)
          );
        })
        .sort(e[a]);
    }
    function d(e) {
      var t;
      return (
        ((t = e.groupMetadata) == null ? void 0 : t.parentGroup) != null ||
        o("WAWebFrontendChatGetters").getIsCommunity(e)
      );
    }
    function m(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = e.groupMetadata;
          [
            n,
            o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroupMetadata(n),
          ].forEach(function (e) {
            e != null && t.push(e.participants);
          });
        }),
        t
      );
    }
    function p(e) {
      return C(e).reduce(function (e, t) {
        return Math.max(e, o("WAWebChatSortTime").getChatSortTime(t));
      }, 0);
    }
    function _(e) {
      var t = e.groupMetadata;
      return t == null
        ? []
        : []
            .concat(
              C(e).map(function (e) {
                return {
                  chat: e,
                  isAnnouncements: o(
                    "WAWebChatGroupUtils",
                  ).isCommunityAnnouncementGroup(e),
                  kind: "joined",
                };
              }),
              t
                .getUnjoinedSubgroupsMetadata()
                .filter(function (e) {
                  return (
                    o("WAWebGroupMetadataTypeUtils").getGroupTypeForMetadata(
                      e,
                    ) !==
                    o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                  );
                })
                .map(function (e) {
                  return { isAnnouncements: !1, kind: "unjoined", metadata: e };
                }),
            )
            .sort(g);
    }
    function f(e) {
      return e.kind === "joined"
        ? e.chat.id.toString()
        : e.metadata.id.toString();
    }
    function g(e, t) {
      return h(e) - h(t) || y(e).localeCompare(y(t));
    }
    function h(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.isAnnouncements === !0
        )
          return 0;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "joined" &&
          "chat" in e
        ) {
          var t = e.chat;
          return o("WAWebContactsAndGroupsGroupsTableRows").isGroupAdmin(t)
            ? 1
            : 2;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unjoined"
        )
          return 3;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function y(e) {
      return e.kind === "joined" ? e.chat.title() : e.metadata.subject;
    }
    function C(e) {
      var t, n;
      return (
        (t =
          (n = e.groupMetadata) == null
            ? void 0
            : n.getJoinedSubgroupsChat()) != null
          ? t
          : []
      ).filter(function (e) {
        return !e.isLocked;
      });
    }
    function b(e, t) {
      return e.title().localeCompare(t.title());
    }
    function v(e, t) {
      var n, r;
      return (
        ((n = o("WAWebContactsAndGroupsMyGroups").getGroupMemberCount(t)) !=
        null
          ? n
          : 0) -
          ((r = o("WAWebContactsAndGroupsMyGroups").getGroupMemberCount(e)) !=
          null
            ? r
            : 0) || b(e, t)
      );
    }
    function S(e, t) {
      return p(t) - p(e) || b(e, t);
    }
    ((l.getMyCommunities = s),
      (l.isMyCommunity = u),
      (l.getCommunitiesTableRows = c),
      (l.isInCommunity = d),
      (l.getCommunityParticipantLists = m),
      (l.getCommunityLastActive = p),
      (l.getCommunityGroups = _),
      (l.getCommunityGroupId = f));
  },
  98,
);
