__d(
  "WAWebInteractiveImageHeader",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMessagePicture.react",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.displayType,
        a = e.isMsgVisible,
        i = e.msgKey,
        l = e.pictureRef,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = [o("WAWebFrontendMsgGetters").getMediaData]), (t[0] = u))
        : (u = t[0]);
      var c = o("useWAWebMsgValues").useMsgValues(i, u),
        d = c[0],
        m = r("useWAWebIsMsgTrusted")(i),
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = "x1198e8h x18faa90 x1huwwth x4h0osi"), (t[1] = p))
        : (p = t[1]);
      var _ = l != null ? l : r("WAWebNoop"),
        f;
      return (
        t[2] !== n ||
        t[3] !== a ||
        t[4] !== d ||
        t[5] !== i ||
        t[6] !== _ ||
        t[7] !== m
          ? ((f = s.jsx(o("WAWebMessagePicture.react").ImageMessage, {
              contentContainerClassName: p,
              displayAuthor: !1,
              mediaData: d,
              displayType: n,
              msgKey: i,
              hideMeta: !0,
              trusted: m,
              isMsgVisible: a,
              ref: _,
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = d),
            (t[5] = i),
            (t[6] = _),
            (t[7] = m),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    l.default = u;
  },
  98,
);
