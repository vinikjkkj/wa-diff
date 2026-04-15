__d(
  "WAWebMessageCommunityLinkGroup.react",
  [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebGroupMetadataCollection",
    "WAWebMessageCommunityCard.react",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(27),
        i = e.author,
        l = e.chat,
        c = e.clickable,
        m = e.templateParams,
        p = m[0],
        _;
      if (a[0] !== p) {
        var f = r("WAWebGroupMetadataCollection").get(p);
        ((_ = f == null ? void 0 : f.participants.iAmAdmin()),
          (a[0] = p),
          (a[1] = _));
      } else _ = a[1];
      var g = _,
        h = (t = l.groupMetadata) == null ? void 0 : t.membershipApprovalMode,
        y = (n = l.groupMetadata) == null ? void 0 : n.hiddenSubgroup,
        C;
      if (y === !0) {
        var b;
        (a[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = s._(
              /*BTDS*/ "Only people in the community who have been invited can see and join this group.",
            )),
            (a[2] = b))
          : (b = a[2]),
          (C = b));
      } else if (h === !0) {
        var v;
        (a[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = s._(
              /*BTDS*/ "Anyone in the community can request to join this group.",
            )),
            (a[3] = v))
          : (v = a[3]),
          (C = v));
      } else {
        var S;
        (a[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = s._(/*BTDS*/ "Anyone in the community can join this group.")),
            (a[4] = S))
          : (S = a[4]),
          (C = S));
      }
      var R;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(
            /*BTDS*/ "As a member, you can join groups in the community and get admin announcements.",
          )),
          (a[5] = R))
        : (R = a[5]);
      var L;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Your profile is visible to admins.")), (a[6] = L))
        : (L = a[6]);
      var E;
      a[7] !== C ? ((E = [R, C, L]), (a[7] = C), (a[8] = E)) : (E = a[8]);
      var k = E,
        I;
      a[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(
            /*BTDS*/ "Members in this group are now community members.",
          )),
          (a[9] = I))
        : (I = a[9]);
      var T;
      a[10] !== C ? ((T = [I, C]), (a[10] = C), (a[11] = T)) : (T = a[11]);
      var D = T,
        x;
      a[12] !== g
        ? ((x =
            g === !0
              ? s._(/*BTDS*/ "Manage the community")
              : s._(/*BTDS*/ "Explore the community")),
          (a[12] = g),
          (a[13] = x))
        : (x = a[13]);
      var $ = x,
        P = l.id,
        N;
      a[14] !== i || a[15] !== c || a[16] !== m
        ? ((N = d({ templateParams: m, clickable: c, author: i })),
          (a[14] = i),
          (a[15] = c),
          (a[16] = m),
          (a[17] = N))
        : (N = a[17]);
      var M = g === !0 ? D : k,
        w;
      a[18] !== M
        ? ((w = u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
            items: M,
          })),
          (a[18] = M),
          (a[19] = w))
        : (w = a[19]);
      var A = !g,
        F;
      return (
        a[20] !== l.id ||
        a[21] !== p ||
        a[22] !== $ ||
        a[23] !== w ||
        a[24] !== A ||
        a[25] !== N
          ? ((F = u.jsx(
              o("WAWebMessageCommunityCard.react").MessageCommunityCard,
              {
                communityId: p,
                subgroupId: P,
                title: N,
                body: w,
                footer: $,
                openNavigation: A,
              },
            )),
            (a[20] = l.id),
            (a[21] = p),
            (a[22] = $),
            (a[23] = w),
            (a[24] = A),
            (a[25] = N),
            (a[26] = F))
          : (F = a[26]),
        F
      );
    }
    function d(e) {
      var t = e.author,
        n = e.clickable,
        r = e.templateParams,
        a = t ? o("WAWebFormatParticipantNames").getFormattedName(t, n) : null,
        i = o(
          "WAWebFormatParticipantNames",
        ).getFormattedCommunityNameWithAlternative({
          jid: r[0],
          asString: !n,
          alternativeStringName: r[1],
        }),
        l = !i,
        u = o("WAWebUserPrefsMeUser").isMeAccount(t);
      return l
        ? u
          ? s._(/*BTDS*/ "You added this group to a community")
          : a != null
            ? s._(/*BTDS*/ "{author} added this group to a community", [
                s._param("author", a),
              ])
            : s._(/*BTDS*/ "This group was added to a community")
        : u
          ? s._(/*BTDS*/ "You added this group to the community: {community}", [
              s._param("community", i),
            ])
          : a != null
            ? s._(
                /*BTDS*/ "{author} added this group to the community: {community}",
                [s._param("author", a), s._param("community", i)],
              )
            : s._(
                /*BTDS*/ "This group was added to the community: {community}",
                [s._param("community", i)],
              );
    }
    ((l.MessageCommunityLinkGroup = c), (l.communityLinkGroupTitle = d));
  },
  226,
);
