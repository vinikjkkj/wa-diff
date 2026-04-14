__d(
  "WAWebMediaAudio.react",
  [
    "fbt",
    "WAWebEnvironment",
    "WAWebMediaUrlProvider",
    "WAWebPttAudioTag.react",
    "WAWebStopEvent",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.msg,
        n = e.url,
        a =
          r("WAWebEnvironment").isWindows === !0
            ? s._(/*BTDS*/ "Audio playback is not supported on this device.")
            : s._(/*BTDS*/ "Your browser doesn't support audio playback.");
      return u.jsx(r("WAWebPttAudioTag.react"), {
        url: n,
        className: "xh8yej3 xqolr7f x1anomrk",
        onClick: o("WAWebStopEvent").stopPropagation,
        autoPlay: !0,
        msg: t,
        controls: !0,
        testId: "media-audio",
        children: a,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return u.jsx("div", {
        className: "xzkaem6 xdzyupr x1vd4hg5 xx5krr6 xztyhrg x18d0r48",
        onClick: o("WAWebStopEvent").stopPropagation,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.mediaData,
        n = e.msg,
        a = o("useWAWebModelValues").useModelValues(t, [
          "mediaStage",
          "renderableUrl",
        ]);
      return u.jsx(r("WAWebMediaUrlProvider"), {
        mediaData: a,
        placeholderRenderer: d,
        children: function (t) {
          return u.jsx(c, { url: t, msg: n });
        },
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
