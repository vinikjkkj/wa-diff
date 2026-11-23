__d(
  "WAWebNewsletterStatusCardAdminProfileLayout",
  ["WAWebNewsletterStatusCardText", "WAWebNewsletterStatusCardTypography"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebNewsletterStatusCardTypography")).fromAndroidDp(6),
      u = e.fromAndroidDp(2),
      c = e.fromAndroidDp(28),
      d = e.fromAndroidDp(8);
    function m(e, t) {
      return e == null ? 0 : s + c + (t ? u : s);
    }
    function p(e) {
      var t = e.adminProfile,
        n = e.bubble,
        r = e.fonts,
        a = e.measure,
        i = e.showsBubble,
        l = { x: n.x + s, y: n.y + s, width: c, height: c },
        u = l.y + c / 2,
        p = l.x + c + d,
        f = t.initials;
      return {
        background: i
          ? null
          : { x: n.x, y: n.y, width: n.width, height: m(t, !1) },
        avatar: l,
        initials:
          f != null
            ? _(f, l.x + (c - a(f, r.initials)) / 2, u, r.initials)
            : null,
        name: _(
          o("WAWebNewsletterStatusCardText").truncateToWidth(
            t.name,
            r.name,
            n.x + n.width - s - p,
            a,
          ),
          p,
          u,
          r.name,
        ),
        nameColor: t.nameColor,
        avatarColor: t.avatarColor,
      };
    }
    function _(e, t, n, r) {
      return {
        text: e,
        x: t,
        y: n,
        font: r,
        align: "left",
        isRtl: o("WAWebNewsletterStatusCardText").isRtlText(e),
      };
    }
    ((l.getCardAdminProfileHeight = m), (l.layoutCardAdminProfile = p));
  },
  98,
);
