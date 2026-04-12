__d(
  "WAWebVideoLinkPreviewContainer.react",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMediaVideoLinkPreview.react",
    "WAWebMsgGetters",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.memo,
      d = u.useEffect;
    function m(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          o("WAWebMsgGetters").getT,
          o("WAWebMsgGetters").getThumbnailHQ,
          o("WAWebFrontendMsgGetters").getAsUrl,
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        a = n[0],
        i = n[1],
        l = n[2],
        u = n[3];
      return (
        d(
          function () {
            var e = l;
            e &&
              !o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(a) &&
              !e.thumbnailHQ &&
              r("WAWebMediaDownloadMmsThumbnail")({
                chat: o("WAWebFrontendMsgGetters").getChat(t),
                msg: e,
                isPreload: !1,
              });
          },
          [l, a, i, u, t],
        ),
        s.jsx(r("WAWebMediaVideoLinkPreview.react"), { msg: t.unsafe() })
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = c(m);
    l.default = p;
  },
  98,
);
