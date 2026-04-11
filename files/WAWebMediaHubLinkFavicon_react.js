__d(
  "WAWebMediaHubLinkFavicon.react",
  [
    "WAWebCopyPasteSelectable.react",
    "WAWebFrontendMsgGetters",
    "WAWebLinkIconBackground",
    "WAWebLinkIconContained.react",
    "WAWebLinkPngIcon",
    "WAWebLinkSVGIcon",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect,
      c = { transparent: { backgroundColor: "xjbqb8w", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.link,
        a = e.msg,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebFrontendMsgGetters").getAsUrl,
            o("WAWebMsgGetters").getFaviconMMSMetadata,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebMsgValues").useMsgValues(a.id, i),
        d = l[0],
        m = l[1],
        p = r("useWAWebPrevious")(m == null ? void 0 : m.thumbnailDirectPath),
        _;
      t[1] !== d ||
      t[2] !== (m == null ? void 0 : m.mediaKeyTimestamp) ||
      t[3] !== (m == null ? void 0 : m.thumbnailDirectPath) ||
      t[4] !== a ||
      t[5] !== p
        ? ((_ = function () {
            var e,
              t,
              n = d;
            n != null &&
              (((e = n.faviconMMSMetadata) == null ? void 0 : e.thumbnail) ==
                null ||
                p !== (m == null ? void 0 : m.thumbnailDirectPath)) &&
              !o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(
                (t = m == null ? void 0 : m.mediaKeyTimestamp) != null
                  ? t
                  : n.t,
              ) &&
              r("WAWebMediaDownloadMmsThumbnail")({
                chat: o("WAWebFrontendMsgGetters").getMaybeChat(a),
                msg: n,
                isPreload: !1,
              });
          }),
          (t[1] = d),
          (t[2] = m == null ? void 0 : m.mediaKeyTimestamp),
          (t[3] = m == null ? void 0 : m.thumbnailDirectPath),
          (t[4] = a),
          (t[5] = p),
          (t[6] = _))
        : (_ = t[6]);
      var f = m == null ? void 0 : m.thumbnailDirectPath,
        g = m == null ? void 0 : m.mediaKeyTimestamp,
        h;
      (t[7] !== d || t[8] !== a || t[9] !== p || t[10] !== f || t[11] !== g
        ? ((h = [d, f, p, a, g]),
          (t[7] = d),
          (t[8] = a),
          (t[9] = p),
          (t[10] = f),
          (t[11] = g),
          (t[12] = h))
        : (h = t[12]),
        u(_, h));
      var y = m == null ? void 0 : m.thumbnail,
        C;
      t[13] !== n || t[14] !== y
        ? ((C =
            y != null
              ? "data:image/jpeg;base64," + y
              : o("WAWebLinkPngIcon").getSupportedFavicon(n)),
          (t[13] = n),
          (t[14] = y),
          (t[15] = C))
        : (C = t[15]);
      var b = C,
        v;
      t[16] !== n
        ? ((v = o("WAWebLinkSVGIcon").getSupportedFaviconSvg(n)),
          (t[16] = n),
          (t[17] = v))
        : (v = t[17]);
      var S = v,
        R;
      t[18] !== b
        ? ((R =
            b != null
              ? s.jsx(o("WAWebCopyPasteSelectable.react").SelectableImg, {
                  selectable: !1,
                  "data-testid": void 0,
                  className:
                    "xvy4d1p xxk0z11 xbrszos xea3l6g x18isctg x2q3nzr x7v7x1q xc26acl x1lliihq",
                  alt: "",
                  src: b,
                })
              : null),
          (t[18] = b),
          (t[19] = R))
        : (R = t[19]);
      var L = R,
        E;
      t[20] !== n || t[21] !== y
        ? ((E =
            y != null
              ? c.transparent
              : o("WAWebLinkIconBackground").getSupportedFaviconBackgroundColor(
                  n,
                )),
          (t[20] = n),
          (t[21] = y),
          (t[22] = E))
        : (E = t[22]);
      var k = S != null ? S : L,
        I;
      return (
        t[23] !== k || t[24] !== E
          ? ((I = s.jsx(r("WAWebLinkIconContained.react"), {
              backgroundXstyle: E,
              icon: k,
            })),
            (t[23] = k),
            (t[24] = E),
            (t[25] = I))
          : (I = t[25]),
        I
      );
    }
    l.default = d;
  },
  98,
);
