__d(
  "URCRendererUtils",
  [
    "GeoBaseText.react",
    "GeoDottedUnderlineText.react",
    "GeoLink.react",
    "GeoPopover.react",
    "Image.react",
    "LeadAdsCMSBlock.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = function (t, n) {
        var e, o, a;
        return n != null && (e = n.tag_names) != null && e.includes("tooltip")
          ? s.jsx(r("GeoDottedUnderlineText.react"), {
              tooltip: s.jsx(r("GeoPopover.react"), {
                content: s.jsx(r("LeadAdsCMSBlock.react"), {
                  id: (o = n.id) != null ? o : "",
                  isFbt: !1,
                }),
                groupName: "URCCMSRenderer",
                heading: "",
                isSticky: !1,
                position: "right",
              }),
              weight: "bold",
              children: t,
            })
          : s.jsx(r("GeoLink.react"), {
              href: "/business/help/" + ((a = n.id) != null ? a : ""),
              target: "_blank",
              children: t,
            });
      },
      c = function (t, n) {
        return s.jsx(r("GeoLink.react"), {
          href: n.url,
          target: "_blank",
          children: t,
        });
      },
      d = function (t, n) {
        return s.jsx("strong", { children: t });
      },
      m = function (t, n) {
        return n.image.downloadable_uri == null
          ? s.jsx(s.Fragment, {})
          : s.jsx(r("Image.react"), { src: n.image.downloadable_uri });
      };
    function p(e, t, n, o, a, i) {
      return (
        n === void 0 && (n = "value"),
        o === void 0 && (o = "opportunity"),
        function (u, c) {
          if (c.inline_style === "BOLD") {
            var l = o === "opportunity" ? "success" : o;
            return s.jsx(r("GeoBaseText.react"), {
              color: l,
              size: n,
              weight: "inherit",
              children: u,
            });
          }
          return c.inline_style === "SECONDARY_UNDERLINE"
            ? i != null
              ? s.jsx(r("GeoDottedUnderlineText.react"), {
                  color: o,
                  size: n,
                  tooltip: s.jsx(r("GeoPopover.react"), {
                    content: i,
                    heading: void 0,
                    isSticky: !1,
                  }),
                  weight: "inherit",
                  children: u,
                })
              : s.jsx(r("GeoDottedUnderlineText.react"), {
                  color: o,
                  size: n,
                  weight: "inherit",
                  children: u,
                })
            : a != null
              ? s.jsx(r("GeoDottedUnderlineText.react"), {
                  color: o,
                  size: n,
                  tooltip: a,
                  weight: "inherit",
                  children: u,
                })
              : e != null
                ? s.jsx(r("GeoDottedUnderlineText.react"), {
                    color: o,
                    size: n,
                    tooltip: s.jsx(r("GeoPopover.react"), {
                      content: e,
                      heading: t != null ? t : void 0,
                      isSticky: !1,
                    }),
                    weight: "inherit",
                    children: u,
                  })
                : s.jsx(r("GeoDottedUnderlineText.react"), {
                    color: o,
                    size: n,
                    weight: "inherit",
                    children: u,
                  });
        }
      );
    }
    var _ = function (t) {
        return t == null
          ? []
          : t.map(function (e) {
              var t = e.inline_style,
                n = e.length,
                r = e.offset;
              return {
                entity: {
                  __typename: "Inline",
                  inline_style: t != null ? t : "",
                },
                length: n,
                offset: r,
              };
            });
      },
      f = function (t) {
        return t == null
          ? []
          : t.map(function (e) {
              var t = e.entity_with_image,
                n = e.length,
                r = e.offset;
              return {
                entity: {
                  __typename: "IconWithURIInText",
                  image: t == null ? void 0 : t.image,
                },
                length: n,
                offset: r,
              };
            });
      };
    ((l.CMSRenderer = u),
      (l.URLRenderer = c),
      (l.BoldRenderer = d),
      (l.IconRenderer = m),
      (l.genHoverWithDottedColorUnderline = p),
      (l.normalizeInlineStyleRanges = _),
      (l.normalizeImageRanges = f));
  },
  98,
);
