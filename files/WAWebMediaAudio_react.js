__d(
  "WAWebMediaAudio.react",
  [
    "fbt",
    "WAWebEnvironment",
    "WAWebMediaUrlProvider",
    "WAWebPttAudioTag.react",
    "WAWebStopEvent",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        a = e.url,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i =
            r("WAWebEnvironment").isWindows === !0
              ? s._(/*BTDS*/ "Audio playback is not supported on this device.")
              : s._(/*BTDS*/ "Your browser doesn't support audio playback.")),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = "xh8yej3 xqolr7f x1anomrk"), (t[1] = c))
        : (c = t[1]);
      var d;
      return (
        t[2] !== n || t[3] !== a
          ? ((d = u.jsx(r("WAWebPttAudioTag.react"), {
              url: a,
              className: c,
              onClick: o("WAWebStopEvent").stopPropagation,
              autoPlay: !0,
              msg: n,
              controls: !0,
              testId: "media-audio",
              children: l,
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    function d() {
      return u.jsx("div", {
        className: "xzkaem6 xdzyupr x1vd4hg5 xx5krr6 xztyhrg x18d0r48",
        onClick: o("WAWebStopEvent").stopPropagation,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.mediaData,
        a = e.msg,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["mediaStage", "renderableUrl"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(n, i),
        s;
      t[1] !== a
        ? ((s = function (t) {
            return u.jsx(c, { url: t, msg: a });
          }),
          (t[1] = a),
          (t[2] = s))
        : (s = t[2]);
      var m;
      return (
        t[3] !== l || t[4] !== s
          ? ((m = u.jsx(r("WAWebMediaUrlProvider"), {
              mediaData: l,
              placeholderRenderer: d,
              children: s,
            })),
            (t[3] = l),
            (t[4] = s),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = m;
  },
  226,
);
