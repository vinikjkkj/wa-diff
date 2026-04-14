__d(
  "WAWebMessageCommunityWelcomeMember.react",
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
        l = t ? o("WAWebFormatParticipantNames").getFormattedName(t, r) : null,
        c = [
          u.jsx(u.Fragment, {
            children:
              l == null || l === ""
                ? s._(/*BTDS*/ "You joined this community")
                : s._(/*BTDS*/ "{author} added you", [s._param("author", l)]),
          }),
          s._(
            /*BTDS*/ "Admins will send all members important community announcements here",
          ),
        ],
        m = s._(/*BTDS*/ "See community info");
      return u.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
        communityId: i,
        subgroupId: n.id,
        title: d(),
        body: u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
          items: c,
        }),
        footer: m,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return s._(/*BTDS*/ "Welcome to the community!");
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.MessageCommunityWelcomeMember = c),
      (l.communityWelcomeMemberTitle = d));
  },
  226,
);
