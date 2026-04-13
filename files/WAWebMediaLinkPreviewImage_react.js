__d(
  "WAWebMediaLinkPreviewImage.react",
  [
    "WAWebDisplayType",
    "WAWebMediaGatingUtils",
    "WAWebMediaLinkPreviewImageLayout.react",
    "WDSIconIcLink.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(32),
        a = t.displayType,
        i = t.isCompose,
        l = t.isFullPreview,
        s = t.isHighQualityLayout,
        c = t.isInvite,
        m = t.isStatus,
        p = t.theme,
        _ = t.thumbnail,
        f = t.thumbnailJpeg,
        g = t.thumbnailJpegDirectPath,
        h = t.thumbnailJpegHeight,
        y = t.thumbnailJpegHQ,
        C = t.thumbnailJpegWidth,
        b = t.withoutDescription,
        v;
      n[0] !== i || n[1] !== y || n[2] !== C
        ? ((v =
            i &&
            y != null &&
            C != null &&
            C > 240 &&
            o("WAWebMediaGatingUtils").shouldUseLargeHQPreviewInComposer()),
          (n[0] = i),
          (n[1] = y),
          (n[2] = C),
          (n[3] = v))
        : (v = n[3]);
      var S = v,
        R = p === "bot_plugin_link",
        L = p === "support_citations_link",
        E;
      n[4] !== R ||
      n[5] !== i ||
      n[6] !== l ||
      n[7] !== S ||
      n[8] !== s ||
      n[9] !== c ||
      n[10] !== m ||
      n[11] !== L ||
      n[12] !== b
        ? ((E = (e || (e = r("stylex")))([
            R && d.botPluginLinkMedia,
            L && d.supportCitationsLinkMedia,
            !R && d.media,
            !R && !L && (S ? d.composeMediaHQ : d.mediaLQ),
            m && d.statusMedia,
            s && d.highQualityLayoutMedia,
            l && !s && d.fullPreviewNotHighQualityLayoutMedia,
            l &&
              !s &&
              b &&
              d.fullPreviewNotHighQualityLayoutMediaWithoutDescription,
            c && d.isInviteMedia,
            i && !S && d.composeMedia,
          ])),
          (n[4] = R),
          (n[5] = i),
          (n[6] = l),
          (n[7] = S),
          (n[8] = s),
          (n[9] = c),
          (n[10] = m),
          (n[11] = L),
          (n[12] = b),
          (n[13] = E))
        : (E = n[13]);
      var k = E,
        I = a === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
      if (_ != null && _ !== "") {
        var T;
        return (
          n[14] !== k || n[15] !== _
            ? ((T = u.jsx("div", {
                "data-testid": void 0,
                className: k,
                children: _,
              })),
              (n[14] = k),
              (n[15] = _),
              (n[16] = T))
            : (T = n[16]),
          T
        );
      }
      if ((f != null && f !== "") || (y != null && y !== "")) {
        var D = y != null && y !== "" && !I ? y : f;
        if (D != null) {
          var x = "data:image/jpeg;base64," + D,
            $;
          n[17] !== k || n[18] !== x
            ? (($ = u.jsx("img", {
                "data-testid": void 0,
                alt: "",
                className: k,
                src: x,
              })),
              (n[17] = k),
              (n[18] = x),
              (n[19] = $))
            : ($ = n[19]);
          var P;
          return (
            n[20] !== a ||
            n[21] !== I ||
            n[22] !== S ||
            n[23] !== s ||
            n[24] !== m ||
            n[25] !== $ ||
            n[26] !== g ||
            n[27] !== y ||
            n[28] !== h ||
            n[29] !== C
              ? ((P = u.jsx(r("WAWebMediaLinkPreviewImageLayout.react"), {
                  thumbnailJpegDirectPath: g,
                  thumbnailJpegHQ: y,
                  height: h,
                  width: C,
                  galleryView: I,
                  isStatus: m,
                  isComposerHightQualityLayout: S,
                  displayType: a,
                  isHighQualityLayout: s,
                  children: $,
                })),
                (n[20] = a),
                (n[21] = I),
                (n[22] = S),
                (n[23] = s),
                (n[24] = m),
                (n[25] = $),
                (n[26] = g),
                (n[27] = y),
                (n[28] = h),
                (n[29] = C),
                (n[30] = P))
              : (P = n[30]),
            P
          );
        }
      }
      if (I) {
        var N;
        return (
          n[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((N = u.jsx("div", {
                "data-testid": void 0,
                className:
                  "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x1hcvz70 xkzwgj6 x6ikm8r x10wlt62 x1280gxy",
                children: u.jsx(r("WDSIconIcLink.react"), {
                  testid: void 0,
                  xstyle: d.noThumbIcon,
                  width: 32,
                  height: 32,
                }),
              })),
              (n[31] = N))
            : (N = n[31]),
          N
        );
      }
      return null;
    }
    l.default = m;
  },
  98,
);
