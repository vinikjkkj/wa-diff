__d(
  "WAWebCommunityMembersFlow.react",
  [
    "$InternalEnum",
    "WAWebViewCommunityMembersModal.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(28),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i, l, u, m, p;
      if (n[3] !== r) {
        var _ = r;
        ((u = _.onInviteMembersClick),
          (i = _.members),
          (l = _.membersNotInCAG),
          (p = _.initialFlowStep),
          (m = babelHelpers.objectWithoutPropertiesLoose(_, s)),
          (n[3] = r),
          (n[4] = i),
          (n[5] = l),
          (n[6] = u),
          (n[7] = m),
          (n[8] = p));
      } else ((i = n[4]), (l = n[5]), (u = n[6]), (m = n[7]), (p = n[8]));
      var f = p === void 0 ? d.Members : p,
        g = o("useWAWebFlow").useFlow(f),
        h = g[0],
        y = g[1];
      if (!y.step) return null;
      var C;
      e: switch (y.step) {
        case d.Members: {
          var b, v;
          if (n[9] !== y || n[10] !== ((b = l) == null ? void 0 : b.length)) {
            var S, R;
            ((v =
              (S = l) != null && S.length
                ? function () {
                    return y.push(d.MembersNotInAnnouncements);
                  }
                : null),
              (n[9] = y),
              (n[10] = (R = l) == null ? void 0 : R.length),
              (n[11] = v));
          } else v = n[11];
          var L;
          (n[12] !== i || n[13] !== u || n[14] !== m || n[15] !== v
            ? ((L = c.jsx(
                o("WAWebViewCommunityMembersModal.react")
                  .CommunityMembersSearch,
                babelHelpers.extends(
                  {
                    onInviteMembersClick: u,
                    members: i,
                    theme: o("WAWebViewCommunityMembersModal.react")
                      .CommunityMembersSearchTheme.Members,
                    onMembersNotInAnnouncementsClick: v,
                  },
                  m,
                ),
              )),
              (n[12] = i),
              (n[13] = u),
              (n[14] = m),
              (n[15] = v),
              (n[16] = L))
            : (L = n[16]),
            (C = L));
          break e;
        }
        case d.MembersNotInAnnouncements: {
          var E = y.stackSize() > 1,
            k;
          (n[17] !== y ||
          n[18] !== E ||
          n[19] !== l ||
          n[20] !== u ||
          n[21] !== m
            ? ((k = E
                ? c.jsx(
                    o("WAWebViewCommunityMembersModal.react")
                      .CommunityMembersSearch,
                    babelHelpers.extends(
                      {
                        members: l,
                        theme: o("WAWebViewCommunityMembersModal.react")
                          .CommunityMembersSearchTheme
                          .MembersNotInAnnouncements,
                        onBack: function () {
                          return y.pop();
                        },
                        onInviteMembersClick: u,
                      },
                      m,
                    ),
                  )
                : c.jsx(
                    o("WAWebViewCommunityMembersModal.react")
                      .CommunityMembersSearch,
                    babelHelpers.extends(
                      {
                        members: l,
                        theme: o("WAWebViewCommunityMembersModal.react")
                          .CommunityMembersSearchTheme
                          .MembersNotInAnnouncements,
                        onInviteMembersClick: u,
                      },
                      m,
                    ),
                  )),
              (n[17] = y),
              (n[18] = E),
              (n[19] = l),
              (n[20] = u),
              (n[21] = m),
              (n[22] = k))
            : (k = n[22]),
            (C = k));
        }
      }
      var I;
      return (
        n[23] !== h || n[24] !== C || n[25] !== y || n[26] !== a
          ? ((I = c.jsx(h, { flow: y, ref: a, children: C })),
            (n[23] = h),
            (n[24] = C),
            (n[25] = y),
            (n[26] = a),
            (n[27] = I))
          : (I = n[27]),
        I
      );
    }
    l.default = m;
  },
  98,
);
