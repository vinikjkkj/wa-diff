__d(
  "WAWebMessageCommunitySubgroupWelcome.react",
  [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebMessageCommunityCard.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.author,
        r = e.chat,
        a = e.clickable,
        i = e.templateParams,
        l = i[0],
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [
            s._(
              /*BTDS*/ "As a member, you can join groups in the community and get admin announcements.",
            ),
            s._(/*BTDS*/ "Your profile is visible to admins."),
          ]),
          (t[0] = c))
        : (c = t[0]);
      var m = c,
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Explore the community")), (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f = r.id,
        g;
      t[2] !== n || t[3] !== a || t[4] !== i
        ? ((g = d({ templateParams: i, clickable: a, author: n })),
          (t[2] = n),
          (t[3] = a),
          (t[4] = i),
          (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
            items: m,
          })),
          (t[6] = h))
        : (h = t[6]);
      var y;
      return (
        t[7] !== r.id || t[8] !== l || t[9] !== g
          ? ((y = u.jsx(
              o("WAWebMessageCommunityCard.react").MessageCommunityCard,
              {
                communityId: l,
                subgroupId: f,
                title: g,
                body: h,
                footer: _,
                openNavigation: !0,
              },
            )),
            (t[7] = r.id),
            (t[8] = l),
            (t[9] = g),
            (t[10] = y))
          : (y = t[10]),
        y
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
        l = !i;
      return l
        ? a != null
          ? s._(/*BTDS*/ "{user_name} added you to a group in a community", [
              s._param("user_name", a),
            ])
          : s._(/*BTDS*/ "You joined a group via invite in a community")
        : a != null
          ? s._(
              /*BTDS*/ "{user_name} added you to a group in the community: {community}",
              [s._param("user_name", a), s._param("community", i)],
            )
          : s._(
              /*BTDS*/ "You joined a group via invite in the community: {community}",
              [s._param("community", i)],
            );
    }
    ((l.MessageCommunitySubgroupWelcome = c),
      (l.communitySubgroupWelcomeTitle = d));
  },
  226,
);
