__d(
  "useWAWebCommunityMembers",
  [
    "Promise",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebCommunityParticipantsUtils",
    "WAWebQueryAndUpdateCommunityParticipantsAction",
    "useWAWebAsync",
    "useWAWebCommunitySubgroups",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i,
        l = a == null ? void 0 : a.participants,
        s =
          t == null || (i = t.groupMetadata) == null ? void 0 : i.participants,
        u = !!(s != null && s.iAmAdmin()),
        c = r("useWAWebCommunitySubgroups")(
          u ? null : t == null ? void 0 : t.groupMetadata,
        ),
        d = c.joinedSubgroups,
        m = r("useWAWebAsync")(
          function () {
            return t && a && u
              ? o(
                  "WAWebQueryAndUpdateCommunityParticipantsAction",
                ).queryAndUpdateCommunityParticipants(t.id)
              : (e || (e = n("Promise"))).resolve();
          },
          [a, u, t == null ? void 0 : t.id],
        ),
        p = m.loading,
        _ = a == null ? void 0 : a.id,
        f = o(
          "WAWebCommunityAnnouncementGroupUtils",
        ).isLidAddressingModeGivenCAGId(_),
        g = r("useWAWebEventTargetValue")(
          [s, l],
          ["bulk_add", "bulk_remove", "reset", "change:isAdmin"],
          function () {
            return o(
              "WAWebCommunityParticipantsUtils",
            ).mergeAndSortCommunityParticipants(l, s, d, f);
          },
        );
      return {
        members: g,
        announcementGroupParticipants: l,
        parentGroupParticipants: s,
        loading: p,
      };
    }
    l.useCommunityMembers = s;
  },
  98,
);
