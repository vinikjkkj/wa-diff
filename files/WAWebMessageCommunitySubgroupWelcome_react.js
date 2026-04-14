__d(
  "WAWebMessageCommunitySubgroupWelcome.react",
  [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebMessageCommunityCard.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.author,
        n = e.chat,
        r = e.clickable,
        a = e.templateParams,
        i = a[0],
        l = [
          s._(
            /*BTDS*/ "As a member, you can join groups in the community and get admin announcements.",
          ),
          s._(/*BTDS*/ "Your profile is visible to admins."),
        ],
        c = s._(/*BTDS*/ "Explore the community");
      return u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
        communityId: i,
        subgroupId: n.id,
        title: d({ templateParams: a, clickable: r, author: t }),
        body: u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
          items: l,
        }),
        footer: c,
        openNavigation: !0,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
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
