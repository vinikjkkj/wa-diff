__d(
  "useWAWebCommunityMembers",
  [
    "Promise",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebCommunityParticipantsUtils",
    "WAWebQueryAndUpdateCommunityParticipantsAction",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebCommunitySubgroups",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i,
        l = o("react-compiler-runtime").c(26),
        s = a == null ? void 0 : a.participants,
        u =
          t == null || (i = t.groupMetadata) == null ? void 0 : i.participants,
        c;
      l[0] !== u
        ? ((c = u == null ? void 0 : u.iAmAdmin()), (l[0] = u), (l[1] = c))
        : (c = l[1]);
      var d = !!c,
        m = r("useWAWebCommunitySubgroups")(
          d ? null : t == null ? void 0 : t.groupMetadata,
        ),
        p = m.joinedSubgroups,
        _;
      l[2] !== a || l[3] !== d || l[4] !== t
        ? ((_ = function () {
            return t && a && d
              ? o(
                  "WAWebQueryAndUpdateCommunityParticipantsAction",
                ).queryAndUpdateCommunityParticipants(t.id)
              : (e || (e = n("Promise"))).resolve();
          }),
          (l[2] = a),
          (l[3] = d),
          (l[4] = t),
          (l[5] = _))
        : (_ = l[5]);
      var f = t == null ? void 0 : t.id,
        g;
      l[6] !== a || l[7] !== d || l[8] !== f
        ? ((g = [a, d, f]), (l[6] = a), (l[7] = d), (l[8] = f), (l[9] = g))
        : (g = l[9]);
      var h = r("useWAWebAsync")(_, g),
        y = h.loading,
        C = a == null ? void 0 : a.id,
        b;
      l[10] !== C
        ? ((b = o(
            "WAWebCommunityAnnouncementGroupUtils",
          ).isLidAddressingModeGivenCAGId(C)),
          (l[10] = C),
          (l[11] = b))
        : (b = l[11]);
      var v = b,
        S;
      l[12] !== s || l[13] !== u
        ? ((S = [u, s]), (l[12] = s), (l[13] = u), (l[14] = S))
        : (S = l[14]);
      var R;
      l[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = ["bulk_add", "bulk_remove", "reset", "change:isAdmin"]),
          (l[15] = R))
        : (R = l[15]);
      var L;
      l[16] !== s || l[17] !== v || l[18] !== p || l[19] !== u
        ? ((L = function () {
            return o(
              "WAWebCommunityParticipantsUtils",
            ).mergeAndSortCommunityParticipants(s, u, p, v);
          }),
          (l[16] = s),
          (l[17] = v),
          (l[18] = p),
          (l[19] = u),
          (l[20] = L))
        : (L = l[20]);
      var E = r("useWAWebEventTargetValue")(S, R, L),
        k;
      return (
        l[21] !== s || l[22] !== y || l[23] !== E || l[24] !== u
          ? ((k = {
              members: E,
              announcementGroupParticipants: s,
              parentGroupParticipants: u,
              loading: y,
            }),
            (l[21] = s),
            (l[22] = y),
            (l[23] = E),
            (l[24] = u),
            (l[25] = k))
          : (k = l[25]),
        k
      );
    }
    l.useCommunityMembers = s;
  },
  98,
);
