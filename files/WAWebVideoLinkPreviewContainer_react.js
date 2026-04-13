__d(
  "WAWebVideoLinkPreviewContainer.react",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMediaVideoLinkPreview.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.memo,
      d = u.useEffect;
    function m(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebMsgGetters").getT,
            o("WAWebMsgGetters").getThumbnailHQ,
            o("WAWebFrontendMsgGetters").getAsUrl,
            o("WAWebMsgGetters").getIsSentByMe,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(e.msg.id, a),
        l = i[0],
        u = i[1],
        c = i[2],
        m = i[3],
        p;
      t[1] !== c || t[2] !== n || t[3] !== l
        ? ((p = function () {
            var e = c;
            e &&
              !o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(l) &&
              !e.thumbnailHQ &&
              r("WAWebMediaDownloadMmsThumbnail")({
                chat: o("WAWebFrontendMsgGetters").getChat(n),
                msg: e,
                isPreload: !1,
              });
          }),
          (t[1] = c),
          (t[2] = n),
          (t[3] = l),
          (t[4] = p))
        : (p = t[4]);
      var _;
      (t[5] !== c || t[6] !== m || t[7] !== n || t[8] !== l || t[9] !== u
        ? ((_ = [c, l, u, m, n]),
          (t[5] = c),
          (t[6] = m),
          (t[7] = n),
          (t[8] = l),
          (t[9] = u),
          (t[10] = _))
        : (_ = t[10]),
        d(p, _));
      var f;
      t[11] !== n ? ((f = n.unsafe()), (t[11] = n), (t[12] = f)) : (f = t[12]);
      var g;
      return (
        t[13] !== f
          ? ((g = s.jsx(r("WAWebMediaVideoLinkPreview.react"), { msg: f })),
            (t[13] = f),
            (t[14] = g))
          : (g = t[14]),
        g
      );
    }
    var p = c(m);
    l.default = p;
  },
  98,
);
