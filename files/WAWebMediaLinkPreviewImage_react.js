__d(
  "WAWebMediaLinkPreviewImage.react",
  [
    "WAWebDisplayType",
    "WAWebMediaGatingUtils",
    "WAWebMediaLinkPreviewImageLayout.react",
    "WDSIconIcLink.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = "102px",
      d = {
        fullPreviewNotHighQualityLayoutMediaWithoutDescription: {
          marginBottom: "xyorhqc",
          $$css: !0,
        },
        media: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          $$css: !0,
        },
        mediaLQ: {
          height: "xkzwgj6",
          width: "x1hcvz70",
          objectFit: "xl1xv1r",
          $$css: !0,
        },
        composeMediaHQ: { maxHeight: "x1vke2v8", $$css: !0 },
        composeMedia: {
          minHeight: "x1t8mtvt",
          height: "xk1v102",
          minWidth: "x17csl3h",
          width: "x1mpcz0v",
          $$css: !0,
        },
        botPluginLinkMedia: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          height: "x1s09uj0",
          width: "xduvqi9",
          objectFit: "xl1xv1r",
          $$css: !0,
        },
        supportCitationsLinkMedia: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          marginTop: "xvijh9v",
          marginInlineEnd: "x1mpyi22",
          marginBottom: "x1ty9z65",
          marginInlineStart: "xm2jcoa",
          objectFit: "xl1xv1r",
          $$css: !0,
        },
        statusMedia: { height: "xwc1p85", width: "xpmtt7c", $$css: !0 },
        highQualityLayoutMedia: {
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
        fullPreviewNotHighQualityLayoutMedia: {
          marginTop: "x1anpbxc",
          marginInlineEnd: "x1sa5p1d",
          marginBottom: "xat24cr",
          marginInlineStart: "x1hm9lzh",
          borderStartStartRadius: "xrxyp3c",
          borderStartEndRadius: "xv0oops",
          borderEndEndRadius: "x1isl5vh",
          borderEndStartRadius: "xn8zj9a",
          float: "x1faq86j",
          height: "xx6r9nl",
          width: "x155sd6h",
          $$css: !0,
        },
        isInviteMedia: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          marginTop: "x1xmf6yo",
          marginInlineEnd: "x14z9mp",
          marginBottom: "x1e56ztr",
          marginInlineStart: "x1hm9lzh",
          height: "x112a4uq",
          width: "x15jighw",
          $$css: !0,
        },
        noThumbIcon: { color: "xqa0p2g", $$css: !0 },
      };
    function m(t) {
      var n = t.displayType,
        a = t.isCompose,
        i = t.isFullPreview,
        l = t.isHighQualityLayout,
        s = t.isInvite,
        c = t.isStatus,
        m = t.theme,
        p = t.thumbnail,
        _ = t.thumbnailJpeg,
        f = t.thumbnailJpegDirectPath,
        g = t.thumbnailJpegHeight,
        h = t.thumbnailJpegHQ,
        y = t.thumbnailJpegWidth,
        C = t.withoutDescription,
        b =
          a &&
          h != null &&
          y != null &&
          y > 240 &&
          o("WAWebMediaGatingUtils").shouldUseLargeHQPreviewInComposer(),
        v = m === "bot_plugin_link",
        S = m === "support_citations_link",
        R = (e || (e = r("stylex")))([
          v && d.botPluginLinkMedia,
          S && d.supportCitationsLinkMedia,
          !v && d.media,
          !v && !S && (b ? d.composeMediaHQ : d.mediaLQ),
          c && d.statusMedia,
          l && d.highQualityLayoutMedia,
          i && !l && d.fullPreviewNotHighQualityLayoutMedia,
          i &&
            !l &&
            C &&
            d.fullPreviewNotHighQualityLayoutMediaWithoutDescription,
          s && d.isInviteMedia,
          a && !b && d.composeMedia,
        ]),
        L = n === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
      if (p != null && p !== "")
        return u.jsx("div", {
          "data-testid": void 0,
          className: R,
          children: p,
        });
      if ((_ != null && _ !== "") || (h != null && h !== "")) {
        var E = h != null && h !== "" && !L ? h : _;
        if (E != null)
          return u.jsx(r("WAWebMediaLinkPreviewImageLayout.react"), {
            thumbnailJpegDirectPath: f,
            thumbnailJpegHQ: h,
            height: g,
            width: y,
            galleryView: L,
            isStatus: c,
            isComposerHightQualityLayout: b,
            displayType: n,
            isHighQualityLayout: l,
            children: u.jsx("img", {
              "data-testid": void 0,
              alt: "",
              className: R,
              src: "data:image/jpeg;base64," + E,
            }),
          });
      }
      return L
        ? u.jsx("div", {
            "data-testid": void 0,
            className:
              "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x1hcvz70 xkzwgj6 x6ikm8r x10wlt62 x1280gxy",
            children: u.jsx(r("WDSIconIcLink.react"), {
              testid: void 0,
              xstyle: d.noThumbIcon,
              width: 32,
              height: 32,
            }),
          })
        : null;
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
