__d(
  "WAWebBizAdCreationIGPreviewMedia.react",
  [
    "fbt",
    "WAWebBizAdCreationPreviewMediaRenderers.react",
    "WAWebChevronIcon.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 300,
      d = {
        chevronButtonIcon: { color: "x17t9dm2", $$css: !0 },
        chevronButtonIconFlipped: { transform: "xpk2tj9", $$css: !0 },
      };
    function m(e) {
      var t = e.currentIndex,
        n = e.media,
        a = e.totalCount;
      return u.jsxs("div", {
        className: "x1n2onr6 x2lah0s x6ikm8r x10wlt62",
        children: [
          u.jsx(
            o("WAWebBizAdCreationPreviewMediaRenderers.react")
              .SingleMediaPreview,
            { media: n },
          ),
          u.jsx("div", {
            className:
              "x10l6tqk x1ctoq22 xffp2at x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xhtitgo",
            children: u.jsx(r("WDSText.react"), {
              type: "Body3Emphasized",
              colorName: "contentInverse",
              children: t + 1 + "/" + a,
            }),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.currentIndex,
        n = e.medias,
        r = e.setCurrentIndex;
      if (n == null || n.length === 0) return null;
      var a = function () {
          r(function (e) {
            return e > 0 ? e - 1 : n.length - 1;
          });
        },
        i = function () {
          r(function (e) {
            return e < n.length - 1 ? e + 1 : 0;
          });
        },
        l = t === 0,
        c = t === n.length - 1,
        p = n.length > 1 && !l,
        _ = n.length > 1 && !c;
      return u.jsxs("div", {
        className: "x1n2onr6 x2lah0s x6ikm8r x10wlt62",
        children: [
          u.jsx(m, { currentIndex: t, media: n[t], totalCount: n.length }),
          p &&
            u.jsx("button", {
              className:
                "x10l6tqk xwa60dl x1cb1t30 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1ypdohk x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x78zum5 x6s0dn4 xl56j7k xhtitgo x10ohsjv x1ixa496",
              onClick: a,
              "aria-label": s._(/*BTDS*/ "Previous media"),
              children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                height: 24,
                width: 24,
                directional: !0,
                iconXstyle: [d.chevronButtonIcon, d.chevronButtonIconFlipped],
              }),
            }),
          _ &&
            u.jsx("button", {
              className:
                "x10l6tqk xwa60dl x1cb1t30 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1ypdohk x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x78zum5 x6s0dn4 xl56j7k xhtitgo x10ohsjv xffp2at",
              onClick: i,
              "aria-label": s._(/*BTDS*/ "Next media"),
              children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                height: 24,
                width: 24,
                directional: !0,
                iconXstyle: d.chevronButtonIcon,
              }),
            }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.currentIndex,
        n = e.medias,
        a = e.setCurrentIndex,
        i = e.thumbnailUrl,
        l = e.videoPosterUrl,
        c = e.videoUrl;
      if (c != null)
        return u.jsx("div", {
          className: "x2lah0s x6ikm8r x10wlt62",
          children: u.jsx("div", {
            className: "x1vd4hg5 x6ikm8r x10wlt62",
            children: u.jsx("video", {
              className: "x5yr21d x19kjcj4 xh8yej3",
              src: c,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              playsInline: !0,
              poster: l,
            }),
          }),
        });
      if (n != null && n.length > 0) {
        if (n.length === 1) {
          var m = n[0];
          return u.jsx("div", {
            className: "x2lah0s x6ikm8r x10wlt62",
            children:
              typeof m == "string"
                ? u.jsx("div", {
                    className: "x1vd4hg5 x6ikm8r x10wlt62",
                    children: u.jsx("img", {
                      className: "x5yr21d xl1xv1r xh8yej3",
                      src: m,
                      alt: s._(/*BTDS*/ "Media preview"),
                    }),
                  })
                : u.jsx(
                    o("WAWebBizAdCreationPreviewMediaRenderers.react")
                      .SingleMediaPreview,
                    { media: m },
                  ),
          });
        }
        var _ = n.every(function (e) {
          return typeof e == "string";
        });
        if (_) {
          var f = t === 0,
            g = t === n.length - 1,
            h = !f,
            y = !g,
            C = function () {
              a(function (e) {
                return e > 0 ? e - 1 : n.length - 1;
              });
            },
            b = function () {
              a(function (e) {
                return e < n.length - 1 ? e + 1 : 0;
              });
            },
            v = n[t];
          return u.jsxs("div", {
            className: "x1n2onr6 x2lah0s x6ikm8r x10wlt62",
            children: [
              u.jsxs("div", {
                className: "x1vd4hg5 x6ikm8r x10wlt62",
                children: [
                  u.jsx("div", {
                    className:
                      "x10l6tqk x1ctoq22 xffp2at x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xhtitgo",
                    children: u.jsxs(r("WDSText.react"), {
                      type: "Body3",
                      colorName: "contentDefault",
                      children: [t + 1, "/", n.length],
                    }),
                  }),
                  u.jsx("img", {
                    className: "x5yr21d xl1xv1r xh8yej3",
                    src: typeof v == "string" ? v : "",
                    alt: s._(/*BTDS*/ "Media preview"),
                  }),
                ],
              }),
              h &&
                u.jsx("button", {
                  className:
                    "x10l6tqk xwa60dl x1cb1t30 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1ypdohk x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x78zum5 x6s0dn4 xl56j7k xhtitgo x10ohsjv x1ixa496",
                  onClick: C,
                  "aria-label": s._(/*BTDS*/ "Previous media"),
                  children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                    height: 24,
                    width: 24,
                    directional: !0,
                    iconXstyle: [
                      d.chevronButtonIcon,
                      d.chevronButtonIconFlipped,
                    ],
                  }),
                }),
              y &&
                u.jsx("button", {
                  className:
                    "x10l6tqk xwa60dl x1cb1t30 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1ypdohk x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl x78zum5 x6s0dn4 xl56j7k xhtitgo x10ohsjv xffp2at",
                  onClick: b,
                  "aria-label": s._(/*BTDS*/ "Next media"),
                  children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                    height: 24,
                    width: 24,
                    directional: !0,
                    iconXstyle: d.chevronButtonIcon,
                  }),
                }),
            ],
          });
        }
        var S = n.filter(function (e) {
          return typeof e != "string";
        });
        return u.jsx(p, { currentIndex: t, medias: S, setCurrentIndex: a });
      }
      return u.jsx("div", {
        className: "x2lah0s x6ikm8r x10wlt62",
        children: u.jsx(
          o("WAWebBizAdCreationPreviewMediaRenderers.react")
            .PlaceholderMediaPreview,
          { thumbnailUrl: i },
        ),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.MediaPreviewRow = _));
  },
  226,
);
