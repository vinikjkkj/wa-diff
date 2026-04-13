__d(
  "WAWebRenderDocumentPreviewIcon.react",
  [
    "WAWebDocumentRefreshedThinIcon.react",
    "WAWebFrontendMsgGetters",
    "WAWebPersonRefreshedOutlineThinIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.msg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [o("WAWebFrontendMsgGetters").getMediaData]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(n.id, r),
        i = a[0],
        l = i == null ? void 0 : i.parsedVcards;
      if (l) {
        var u;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = s.jsx(
                o("WAWebPersonRefreshedOutlineThinIcon.react")
                  .PersonRefreshedOutlineThinIcon,
                {},
              )),
              (t[1] = u))
            : (u = t[1]),
          u
        );
      }
      var c;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = s.jsx(
              o("WAWebDocumentRefreshedThinIcon.react")
                .DocumentRefreshedThinIcon,
              {},
            )),
            (t[2] = c))
          : (c = t[2]),
        c
      );
    }
    l.default = u;
  },
  98,
);
