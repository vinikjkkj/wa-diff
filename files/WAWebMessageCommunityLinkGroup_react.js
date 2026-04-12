__d(
  "WAWebMessageCommunityLinkGroup.react",
  [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebGroupMetadataCollection",
    "WAWebMessageCommunityCard.react",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = e.author,
        i = e.chat,
        l = e.clickable,
        c = e.templateParams,
        m = c[0],
        p = r("WAWebGroupMetadataCollection").get(m),
        _ = p == null ? void 0 : p.participants.iAmAdmin(),
        f = (t = i.groupMetadata) == null ? void 0 : t.membershipApprovalMode,
        g = (n = i.groupMetadata) == null ? void 0 : n.hiddenSubgroup,
        h;
      g === !0
        ? (h = s._(
            /*BTDS*/ "Only people in the community who have been invited can see and join this group.",
          ))
        : f === !0
          ? (h = s._(
              /*BTDS*/ "Anyone in the community can request to join this group.",
            ))
          : (h = s._(/*BTDS*/ "Anyone in the community can join this group."));
      var y = [
          s._(
            /*BTDS*/ "As a member, you can join groups in the community and get admin announcements.",
          ),
          h,
          s._(/*BTDS*/ "Your profile is visible to admins."),
        ],
        C = [
          s._(/*BTDS*/ "Members in this group are now community members."),
          h,
        ],
        b =
          _ === !0
            ? s._(/*BTDS*/ "Manage the community")
            : s._(/*BTDS*/ "Explore the community");
      return u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
        communityId: m,
        subgroupId: i.id,
        title: d({ templateParams: c, clickable: l, author: a }),
        body: u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
          items: _ === !0 ? C : y,
        }),
        footer: b,
        openNavigation: !_,
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
