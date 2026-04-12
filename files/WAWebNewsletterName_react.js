__d(
  "WAWebNewsletterName.react",
  [
    "fbt",
    "WALogger",
    "WAWebContactSearchGatingUtils",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebFormatConfiguration",
    "WAWebMiscGatingUtils",
    "WAWebPsaVerifiedBlueIcon.react",
    "WAWebPsaVerifiedIcon.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        verified: {
          flexGrow: "x1c4vz4f",
          display: "x3nfvp2",
          overflowX: "xuce83p",
          overflowY: "x1bft6iq",
          textOverflow: "x1i7k8ik",
          whiteSpace: "xq9mrsl",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        newsletterIcon: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          marginInlineStart: "xwklpps",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.breakWord,
        n = e.chat,
        r = e.checkmarkLarge,
        a = r === void 0 ? !1 : r,
        i = e.className,
        l = e.element,
        s = e.ellipsify,
        u = e.highlightText,
        d = e.onClick,
        m = e.selectable,
        f = e.skipCheckMark,
        g = f === void 0 ? !1 : f,
        h = e.testid,
        y = e.titlify,
        C = e.xstyle,
        b = o("useWAWebModelValues").useModelValues(n, [
          "id",
          "newsletterMetadata",
        ]),
        v = o("useWAWebModelValues").useOptionalModelValues(
          b.newsletterMetadata,
          ["verified"],
        ),
        S = _(n),
        R =
          u != null && u !== ""
            ? o("WAWebFormatConfiguration").SearchName({
                terms: o(
                  "WAWebContactSearchGatingUtils",
                ).isTokenizedSearchEnabled()
                  ? u.split(/\s+/).filter(Boolean)
                  : [u],
              })
            : void 0,
        L = c.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: S,
          element: l,
          className: i,
          xstyle: C,
          formatters: R,
          titlify: y,
          ellipsify: s,
          breakWord: t,
          direction: "auto",
          inlineblock: !0,
          onClick: d,
          testid: void 0,
          selectable: m,
        }),
        E = (v == null ? void 0 : v.verified) === !0;
      return c.jsx(p, {
        verified: E,
        checkmarkLarge: a,
        skipCheckMark: g,
        children: L,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.checkmarkLarge,
        n = e.children,
        r = e.skipCheckMark,
        a = e.verified,
        i;
      if (a && !r) {
        var l = s._(/*BTDS*/ "Verified channel"),
          u = t ? 24 : 16;
        i = c.jsx("div", {
          className: "x78zum5 x6s0dn4 xl56j7k xwklpps x2lah0s",
          children: o("WAWebMiscGatingUtils").isBlueEnabled()
            ? c.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
                "aria-label": l,
                width: u,
                height: u,
              })
            : c.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {
                "aria-label": l,
              }),
        });
      }
      return c.jsxs("span", {
        className:
          "x1c4vz4f x3nfvp2 x1i7k8ik xq9mrsl x6s0dn4 x6ikm8r x10wlt62 x193iq5w",
        children: [
          c.jsx("span", {
            className: "x78zum5 xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft",
            children: n,
          }),
          i,
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = o("useWAWebModelValues").useModelValues(t, [
          "id",
          "newsletterMetadata",
          "formattedTitle",
        ]),
        a = o("useWAWebModelValues").useOptionalModelValues(
          n.newsletterMetadata,
          ["name", "verified"],
        );
      return (a == null ? void 0 : a.name) != null
        ? a.name
        : n.formattedTitle != null
          ? n.formattedTitle
          : (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][NewsletterName] undefined name",
                  ])),
              )
              .tags("newsletter")
              .sendLogs("newsletter-undefined-name"),
            r("WAWebFbtCommon")("Untitled Channel"));
    }
    ((l.styles = d), (l.NewsletterName = m));
  },
  226,
);
