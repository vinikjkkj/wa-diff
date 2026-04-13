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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(11),
        n = e.checkmarkLarge,
        r = e.children,
        a = e.skipCheckMark,
        i = e.verified,
        l;
      if (i && !a) {
        var u;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = s._(/*BTDS*/ "Verified channel")), (t[0] = u))
          : (u = t[0]);
        var d = u,
          m = n ? 24 : 16,
          p;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = { className: "x78zum5 x6s0dn4 xl56j7k xwklpps x2lah0s" }),
            (t[1] = p))
          : (p = t[1]);
        var _;
        (t[2] !== m
          ? ((_ = c.jsx(
              "div",
              babelHelpers.extends({}, p, {
                children: o("WAWebMiscGatingUtils").isBlueEnabled()
                  ? c.jsx(
                      o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon,
                      { "aria-label": d, width: m, height: m },
                    )
                  : c.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {
                      "aria-label": d,
                    }),
              }),
            )),
            (t[2] = m),
            (t[3] = _))
          : (_ = t[3]),
          (l = _));
      }
      var f, g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = {
            className:
              "x1c4vz4f x3nfvp2 x1i7k8ik xq9mrsl x6s0dn4 x6ikm8r x10wlt62 x193iq5w",
          }),
          (g = {
            className: "x78zum5 xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft",
          }),
          (t[4] = f),
          (t[5] = g))
        : ((f = t[4]), (g = t[5]));
      var h;
      t[6] !== r
        ? ((h = c.jsx("span", babelHelpers.extends({}, g, { children: r }))),
          (t[6] = r),
          (t[7] = h))
        : (h = t[7]);
      var y;
      return (
        t[8] !== l || t[9] !== h
          ? ((y = c.jsxs(
              "span",
              babelHelpers.extends({}, f, { children: [h, l] }),
            )),
            (t[8] = l),
            (t[9] = h),
            (t[10] = y))
          : (y = t[10]),
        y
      );
    }
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
