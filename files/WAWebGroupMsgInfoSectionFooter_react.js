__d(
  "WAWebGroupMsgInfoSectionFooter.react",
  [
    "fbt",
    "WALogger",
    "WAWebGroupMsgInfoSections",
    "WAWebMsgInfoGetters",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgInfoValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(6),
        r = t.msgInfo,
        a = t.section,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebMsgInfoGetters").getPlayedRemaining,
            o("WAWebMsgInfoGetters").getReadRemaining,
            o("WAWebMsgInfoGetters").getDeliveryRemaining,
          ]),
          (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebMsgInfoValues").useMsgInfoValues(r.id, i),
        u = l[0],
        d = l[1],
        m = l[2],
        p,
        _;
      e: switch (a) {
        case o("WAWebGroupMsgInfoSections").Sections.PLAYED_FOOTER:
        case o("WAWebGroupMsgInfoSections").Sections.VIEWED_FOOTER: {
          ((p = u), (_ = u));
          break e;
        }
        case o("WAWebGroupMsgInfoSections").Sections.READ_FOOTER:
        case o("WAWebGroupMsgInfoSections").Sections.SEEN_FOOTER: {
          ((p = d), (_ = d));
          break e;
        }
        case o("WAWebGroupMsgInfoSections").Sections.DELIVERED_FOOTER: {
          ((p = m), (_ = m));
          break e;
        }
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
      if (p == null || p === 0) return null;
      var f;
      n[1] !== _
        ? ((f = s._(/*BTDS*/ '_j{"*":"{count} remaining","_1":"1 remaining"}', [
            s._plural(_, "count"),
          ])),
          (n[1] = _),
          (n[2] = f))
        : (f = n[2]);
      var g = f,
        h;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            className: "x1yrsyyn x5zjp28 x1g2khh7 x162tt16 x1280gxy x1bnvlk4",
          }),
          (n[3] = h))
        : (h = n[3]);
      var y;
      return (
        n[4] !== g
          ? ((y = c.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, h, {
                children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  as: "span",
                  children: g,
                }),
              }),
            )),
            (n[4] = g),
            (n[5] = y))
          : (y = n[5]),
        y
      );
    }
    l.default = d;
  },
  226,
);
