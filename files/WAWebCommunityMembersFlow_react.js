__d(
  "WAWebCommunityMembersFlow.react",
  [
    "$InternalEnum",
    "WAWebViewCommunityMembersModal.react",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "onInviteMembersClick",
        "members",
        "membersNotInCAG",
        "initialFlowStep",
      ],
      u,
      c = u || (u = o("react")),
      d = n("$InternalEnum").Mirrored(["Members", "MembersNotInAnnouncements"]);
    function m(t) {
      var n = t.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = r.onInviteMembersClick,
        i = r.members,
        l = r.membersNotInCAG,
        u = r.initialFlowStep,
        m = u === void 0 ? d.Members : u,
        p = babelHelpers.objectWithoutPropertiesLoose(r, s),
        _ = o("useWAWebFlow").useFlow(m),
        f = _[0],
        g = _[1];
      if (!g.step) return null;
      var h;
      switch (g.step) {
        case d.Members:
          h = c.jsx(
            o("WAWebViewCommunityMembersModal.react").CommunityMembersSearch,
            babelHelpers.extends(
              {
                onInviteMembersClick: a,
                members: i,
                theme: o("WAWebViewCommunityMembersModal.react")
                  .CommunityMembersSearchTheme.Members,
                onMembersNotInAnnouncementsClick:
                  l != null && l.length
                    ? function () {
                        return g.push(d.MembersNotInAnnouncements);
                      }
                    : null,
              },
              p,
            ),
          );
          break;
        case d.MembersNotInAnnouncements: {
          var y = g.stackSize() > 1;
          h = y
            ? c.jsx(
                o("WAWebViewCommunityMembersModal.react")
                  .CommunityMembersSearch,
                babelHelpers.extends(
                  {
                    members: l,
                    theme: o("WAWebViewCommunityMembersModal.react")
                      .CommunityMembersSearchTheme.MembersNotInAnnouncements,
                    onBack: function () {
                      return g.pop();
                    },
                    onInviteMembersClick: a,
                  },
                  p,
                ),
              )
            : c.jsx(
                o("WAWebViewCommunityMembersModal.react")
                  .CommunityMembersSearch,
                babelHelpers.extends(
                  {
                    members: l,
                    theme: o("WAWebViewCommunityMembersModal.react")
                      .CommunityMembersSearchTheme.MembersNotInAnnouncements,
                    onInviteMembersClick: a,
                  },
                  p,
                ),
              );
          break;
        }
      }
      return c.jsx(f, { flow: g, ref: n, children: h });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
