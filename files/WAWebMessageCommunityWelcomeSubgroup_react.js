__d(
  "WAWebMessageCommunityWelcomeSubgroup.react",
  [
    "fbt",
    "WAWebGroupMetadataCollection",
    "WAWebMessageCommunityCard.react",
    "WAWebMessageCommunityWelcomeMember.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(12),
        a = e.templateParams,
        i = a[0],
        l = a[2],
        c =
          (t = r("WAWebGroupMetadataCollection").get(l)) == null
            ? void 0
            : t.subject,
        d;
      n[0] !== c
        ? ((d = u.jsx(u.Fragment, {
            children:
              c != null
                ? s._(
                    /*BTDS*/ 'You were added because "{group_name}" was added to this community',
                    [s._param("group_name", c)],
                  )
                : s._(
                    /*BTDS*/ "You were added because one of your groups was added to this community",
                  ),
          })),
          (n[0] = c),
          (n[1] = d))
        : (d = n[1]);
      var m;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(
            /*BTDS*/ "Admins will send all members important community announcements here",
          )),
          (n[2] = m))
        : (m = n[2]);
      var p;
      n[3] !== d ? ((p = [d, m]), (n[3] = d), (n[4] = p)) : (p = n[4]);
      var _ = p,
        f;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "See community info")), (n[5] = f))
        : (f = n[5]);
      var g = f,
        h;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o(
            "WAWebMessageCommunityWelcomeMember.react",
          ).communityWelcomeMemberTitle()),
          (n[6] = h))
        : (h = n[6]);
      var y;
      n[7] !== _
        ? ((y = u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
            items: _,
          })),
          (n[7] = _),
          (n[8] = y))
        : (y = n[8]);
      var C;
      return (
        n[9] !== i || n[10] !== y
          ? ((C = u.jsx(
              o("WAWebMessageCommunityCard.react").MessageCommunityCard,
              { communityId: i, title: h, body: y, footer: g },
            )),
            (n[9] = i),
            (n[10] = y),
            (n[11] = C))
          : (C = n[11]),
        C
      );
    }
    l.default = c;
  },
  226,
);
