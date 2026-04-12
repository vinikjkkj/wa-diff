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
      var t = e.link,
        n = e.msg,
        a = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebFrontendMsgGetters").getAsUrl,
          o("WAWebMsgGetters").getFaviconMMSMetadata,
        ]),
        i = a[0],
        l = a[1],
        d = r("useWAWebPrevious")(l == null ? void 0 : l.thumbnailDirectPath);
      u(
        function () {
          var e,
            t,
            a = i;
          a != null &&
            (((e = a.faviconMMSMetadata) == null ? void 0 : e.thumbnail) ==
              null ||
              d !== (l == null ? void 0 : l.thumbnailDirectPath)) &&
            !o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(
              (t = l == null ? void 0 : l.mediaKeyTimestamp) != null ? t : a.t,
            ) &&
            r("WAWebMediaDownloadMmsThumbnail")({
              chat: o("WAWebFrontendMsgGetters").getMaybeChat(n),
              msg: a,
              isPreload: !1,
            });
        },
        [
          i,
          l == null ? void 0 : l.thumbnailDirectPath,
          d,
          n,
          l == null ? void 0 : l.mediaKeyTimestamp,
        ],
      );
      var m = l == null ? void 0 : l.thumbnail,
        p =
          m != null
            ? "data:image/jpeg;base64," + m
            : o("WAWebLinkPngIcon").getSupportedFavicon(t),
        _ = o("WAWebLinkSVGIcon").getSupportedFaviconSvg(t),
        f =
          p != null
            ? s.jsx(o("WAWebCopyPasteSelectable.react").SelectableImg, {
                selectable: !1,
                "data-testid": void 0,
                className:
                  "xvy4d1p xxk0z11 xbrszos xea3l6g x18isctg x2q3nzr x7v7x1q xc26acl x1lliihq",
                alt: "",
                src: p,
              })
            : null;
      return s.jsx(r("WAWebLinkIconContained.react"), {
        backgroundXstyle:
          m != null
            ? c.transparent
            : o("WAWebLinkIconBackground").getSupportedFaviconBackgroundColor(
                t,
              ),
        icon: _ != null ? _ : f,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
