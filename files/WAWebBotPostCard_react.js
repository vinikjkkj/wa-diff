__d(
  "WAWebBotPostCard.react",
  [
    "WAWebBotCardImageUtils",
    "WAWebExternalLink.react",
    "WAWebImg.react",
    "WAWebPsaVerifiedBlueIcon.react",
    "WDSFlex.stylex",
    "WDSIconWdsIcLogoFacebook.react",
    "WDSIconWdsIcLogoInstagram.react",
    "WDSIconWdsIcLogoThreads.react",
    "WDSIconWdsIcVerifiedFilled.react",
    "WDSText.react",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = 300,
      d = 40,
      m = 300,
      p = 24,
      _ = 12,
      f = 16,
      g = 24,
      h = 20,
      y = 3,
      C = 10,
      b = {
        withImage: {
          usernameType: "Body2Emphasized",
          usernameColor: "persistentAlwaysWhite",
          captionColor: "persistentAlwaysWhite",
          captionMaxLines: y,
          sourceAppIconStyle: "footerSourceAppIconOnImage",
        },
        withoutImage: {
          usernameType: "Body2",
          usernameColor: "contentDefault",
          captionColor: "contentDefault",
          captionMaxLines: C,
          sourceAppIconStyle: "footerSourceAppIcon",
        },
      },
      v = { height: p, width: p },
      S = {
        content: {
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          $$css: !0,
        },
        footerSourceAppIcon: {
          color: "x14ug900",
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        footerSourceAppIconOnImage: {
          color: "x17t9dm2",
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
      };
    function R(e) {
      var t = e.sourceApp,
        n = e.xstyle,
        o = t != null ? String(t) : null;
      return o === "INSTAGRAM"
        ? u.jsx(
            r("WDSIconWdsIcLogoInstagram.react"),
            babelHelpers.extends({}, v, { iconXstyle: n }),
          )
        : o === "FACEBOOK"
          ? u.jsx(
              r("WDSIconWdsIcLogoFacebook.react"),
              babelHelpers.extends({}, v, { iconXstyle: n }),
            )
          : o === "THREADS"
            ? u.jsx(
                r("WDSIconWdsIcLogoThreads.react"),
                babelHelpers.extends({}, v, { iconXstyle: n }),
              )
            : null;
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.caption,
        n = e.colorName,
        o = e.maxLines;
      return r("isStringNotNullAndNotWhitespaceOnly")(t)
        ? u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: n,
            maxLines: o,
            children: t,
          })
        : null;
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.hasImage;
      return t
        ? u.jsx("span", {
            className: "x17t9dm2 x78zum5",
            children: u.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
              height: _,
              width: _,
              viewBox: { x: 0, y: 0, width: g, height: g },
            }),
          })
        : u.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
            height: f,
            width: f,
            viewBox: { x: 0, y: 0, width: h, height: h },
          });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.hasImage,
        n = e.isVerified,
        a = e.profilePicDataUrl,
        i = e.username,
        l = e.variantConfig;
      return u.jsxs("div", {
        className:
          "x6s0dn4 x1s70e7g x78zum5 x1q0g3np x2lah0s x1xrf6ya xde1mab xscbp6u x1iw51ew x1n2onr6 x1vjfegm",
        children: [
          t &&
            u.jsx("div", {
              className:
                "x12hflea x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy x1ja2u2z",
            }),
          a != null &&
            u.jsx(r("WAWebImg.react"), {
              alt: i,
              src: o("WAWebBotCardImageUtils").toJpegDataUrl(a),
              className:
                "x1c7u0tx x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x1vqgdyp xl1xv1r x1n2onr6 x100vrsf x1vjfegm",
            }),
          u.jsx("div", {
            className:
              "x78zum5 xdt5ytf x1iyjqo2 xeuugli x1n2onr6 x1b73lln x1vjfegm",
            children: u.jsxs("div", {
              className: "x6s0dn4 x1trrmfo x78zum5",
              children: [
                u.jsx(r("WDSText.react"), {
                  type: l.usernameType,
                  colorName: l.usernameColor,
                  maxLines: 1,
                  children: i,
                }),
                n === !0 && u.jsx(E, { hasImage: t }),
              ],
            }),
          }),
        ],
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.hasImage,
        n = e.postCaption,
        r = e.sourceApp,
        o = e.variantConfig,
        a =
          o.sourceAppIconStyle === "footerSourceAppIconOnImage"
            ? S.footerSourceAppIconOnImage
            : S.footerSourceAppIcon;
      return u.jsxs("div", {
        className:
          "x78zum5 xdt5ytf x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1n2onr6 x1qvou4u x1vjfegm",
        children: [
          t &&
            u.jsx("div", {
              className:
                "x1ue4b2t x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy x1ja2u2z",
            }),
          u.jsx(L, {
            caption: n,
            colorName: o.captionColor,
            maxLines: o.captionMaxLines,
          }),
          r != null && u.jsx(R, { sourceApp: r, xstyle: a }),
        ],
      });
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(t) {
      var n = t.postCaption,
        a = t.variantConfig;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
            o("WDSFlex.stylex").wdsFlex.alignStart,
            o("WDSFlex.stylex").wdsFlex.justifyStart,
            S.content,
          ),
          {
            children: u.jsx(L, {
              caption: n,
              colorName: a.captionColor,
              maxLines: a.captionMaxLines,
            }),
          },
        ),
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      var t = e.isVerified,
        n = e.postCaption,
        a = e.postUrl,
        i = e.profilePictureUrl,
        l = e.sourceApp,
        s = e.thumbnailUrl,
        m = e.username,
        p = o("WAWebBotCardImageUtils").useResizedImage({
          imageUrl: s,
          width: c,
          height: c,
        }),
        _ = o("WAWebBotCardImageUtils").useResizedImage({
          imageUrl: i,
          width: d,
          height: d,
        }),
        f = r("isStringNotNullAndNotWhitespaceOnly")(s),
        g = f ? b.withImage : b.withoutImage,
        h = function () {
          o("WAWebExternalLink.react").openExternalLink(a);
        };
      return u.jsxs(
        "div",
        babelHelpers.extends(
          { onClick: h },
          {
            0: {
              className:
                "xlr9sxt xvvg52n xwd4zgb xq8v1ta x1ypdohk x78zum5 xdt5ytf x1qughib x6ikm8r x10wlt62 x1n2onr6 x1hl2dhg xdzyupr x1plog1",
            },
            1: {
              className:
                "xlr9sxt xvvg52n xwd4zgb xq8v1ta x1ypdohk x78zum5 xdt5ytf x1qughib x6ikm8r x10wlt62 x1n2onr6 x1hl2dhg xdzyupr x1plog1 xx42vgk xbogo7e x120ee7l x1vb5itz x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4",
            },
          }[!f << 0],
          {
            children: [
              f &&
                p != null &&
                u.jsx(r("WAWebImg.react"), {
                  alt: "",
                  src: o("WAWebBotCardImageUtils").toJpegDataUrl(p),
                  className:
                    "x5yr21d x1o0tod xl1xv1r x10l6tqk x13vifvy xh8yej3 x1ja2u2z",
                }),
              u.jsx(k, {
                hasImage: f,
                isVerified: t,
                profilePicDataUrl: _,
                username: m,
                variantConfig: g,
              }),
              f
                ? u.jsx(I, {
                    hasImage: f,
                    postCaption: n,
                    sourceApp: l,
                    variantConfig: g,
                  })
                : u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(T, { postCaption: n, variantConfig: g }),
                      l != null &&
                        u.jsx(I, {
                          hasImage: f,
                          postCaption: null,
                          sourceApp: l,
                          variantConfig: g,
                        }),
                    ],
                  }),
            ],
          },
        ),
      );
    }
    ((D.displayName = D.name + " [from " + i.id + "]"), (l.default = D));
  },
  98,
);
