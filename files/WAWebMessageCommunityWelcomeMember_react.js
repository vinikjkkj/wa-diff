__d(
  "WAWebMessageCommunityWelcomeMember.react",
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
      var t = o("react-compiler-runtime").c(16),
        n = e.author,
        r = e.chat,
        a = e.clickable,
        i = e.templateParams,
        l = i[0],
        c;
      t[0] !== n || t[1] !== a
        ? ((c = n
            ? o("WAWebFormatParticipantNames").getFormattedName(n, a)
            : null),
          (t[0] = n),
          (t[1] = a),
          (t[2] = c))
        : (c = t[2]);
      var m = c,
        p;
      t[3] !== m
        ? ((p = u.jsx(u.Fragment, {
            children:
              m == null || m === ""
                ? s._(/*BTDS*/ "You joined this community")
                : s._(/*BTDS*/ "{author} added you", [s._param("author", m)]),
          })),
          (t[3] = m),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(
            /*BTDS*/ "Admins will send all members important community announcements here",
          )),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] !== p ? ((f = [p, _]), (t[6] = p), (t[7] = f)) : (f = t[7]);
      var g = f,
        h;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "See community info")), (t[8] = h))
        : (h = t[8]);
      var y = h,
        C = r.id,
        b;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = d()), (t[9] = b))
        : (b = t[9]);
      var v;
      t[10] !== g
        ? ((v = u.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
            items: g,
          })),
          (t[10] = g),
          (t[11] = v))
        : (v = t[11]);
      var S;
      return (
        t[12] !== r.id || t[13] !== l || t[14] !== v
          ? ((S = u.jsx(
              o("WAWebMessageCommunityCard.react").MessageCommunityCard,
              { communityId: l, subgroupId: C, title: b, body: v, footer: y },
            )),
            (t[12] = r.id),
            (t[13] = l),
            (t[14] = v),
            (t[15] = S))
          : (S = t[15]),
        S
      );
    }
    function d() {
      return s._(/*BTDS*/ "Welcome to the community!");
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.MessageCommunityWelcomeMember = c),
      (l.communityWelcomeMemberTitle = d));
  },
  226,
);
