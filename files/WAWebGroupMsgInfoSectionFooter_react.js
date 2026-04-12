__d(
  "WAWebGroupMsgInfoSectionFooter.react",
  [
    "fbt",
    "WALogger",
    "WAWebGroupMsgInfoSections",
    "WAWebMsgInfoGetters",
    "WAWebText.react",
    "react",
    "useWAWebMsgInfoValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.msgInfo,
        r = t.section,
        a = o("useWAWebMsgInfoValues").useMsgInfoValues(n.id, [
          o("WAWebMsgInfoGetters").getPlayedRemaining,
          o("WAWebMsgInfoGetters").getReadRemaining,
          o("WAWebMsgInfoGetters").getDeliveryRemaining,
        ]),
        i = a[0],
        l = a[1],
        u = a[2],
        d,
        m;
      switch (r) {
        case o("WAWebGroupMsgInfoSections").Sections.PLAYED_FOOTER:
        case o("WAWebGroupMsgInfoSections").Sections.VIEWED_FOOTER:
          ((d = i), (m = i));
          break;
        case o("WAWebGroupMsgInfoSections").Sections.READ_FOOTER:
        case o("WAWebGroupMsgInfoSections").Sections.SEEN_FOOTER:
          ((d = l), (m = l));
          break;
        case o("WAWebGroupMsgInfoSections").Sections.DELIVERED_FOOTER:
          ((d = u), (m = u));
          break;
        default:
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Invalid SECTION for group message info section footer",
                ])),
            ),
            null
          );
      }
      if (d == null || d === 0) return null;
      var p = s._(/*BTDS*/ '_j{"*":"{count} remaining","_1":"1 remaining"}', [
        s._plural(m, "count"),
      ]);
      return c.jsx("div", {
        "data-testid": void 0,
        className: "x1yrsyyn x5zjp28 x1g2khh7 x162tt16 x1280gxy x1bnvlk4",
        children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
          as: "span",
          children: p,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
