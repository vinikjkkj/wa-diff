__d(
  "WAWebInteractiveImageHeader",
  [
    "WAWebMessagePicture.react",
    "WAWebMsgModelPropUtils",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.displayType,
        a = e.isMsgVisible,
        i = e.msg,
        l = e.pictureRef,
        u;
      t[0] !== i
        ? ((u = o("WAWebMsgModelPropUtils").isTrusted(i.unsafe())),
          (t[0] = i),
          (t[1] = u))
        : (u = t[1]);
      var c = u,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = "x1198e8h x18faa90 x1huwwth x4h0osi"), (t[2] = d))
        : (d = t[2]);
      var m = l != null ? l : r("WAWebNoop"),
        p;
      return (
        t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== m || t[7] !== c
          ? ((p = s.jsx(o("WAWebMessagePicture.react").ImageMessage, {
              contentContainerClassName: d,
              displayAuthor: !1,
              mediaData: i.mediaData,
              displayType: n,
              msg: i,
              hideMeta: !0,
              trusted: c,
              isMsgVisible: a,
              ref: m,
            })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = i),
            (t[6] = m),
            (t[7] = c),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    l.default = u;
  },
  98,
);
