__d(
  "WAWebBizCatalogPreviewContainer.react",
  [
    "WAWebExternalLink.react",
    "WAWebMediaLinkPreview.react",
    "WAWebMsgGetters",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.msg,
        a = o("useWAWebMsgValues").useMsgValues(n.id, [
          (t = o("WAWebMsgGetters")).getThumbnail,
          t.getTitle,
          t.getDescription,
          t.getMatchedText,
          t.getIsSentByMe,
          t.getStar,
          t.getIsKept,
        ]),
        i = a[0],
        l = a[1],
        u = a[2],
        c = a[3],
        d = a[4],
        m = a[5],
        p = a[6],
        _ = function () {
          var e = c;
          o("WAWebExternalLink.react").openExternalLink(e);
        };
      return s.jsx(r("WAWebMediaLinkPreview.react"), {
        title: l,
        description: u,
        thumbnailJpeg: i,
        onClick: _,
        isSentByMe: d,
        star: m,
        kept: p,
        isLoading: !1,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
