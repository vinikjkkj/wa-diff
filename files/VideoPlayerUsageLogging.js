__d(
  "VideoPlayerUsageLogging",
  [
    "CurrentUser",
    "FBLogger",
    "ODS",
    "Random",
    "justknobx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e || (e = o("react"))).useEffect,
      c = 2079,
      d = "player_engine";
    function m() {
      var e;
      return (e = r("CurrentUser").getAppID()) != null ? e : "no_appid";
    }
    function p(e) {
      var t = m();
      ((s || (s = o("ODS"))).bumpEntityKey(c, d, "instantiated.total." + t),
        s.bumpEntityKey(c, d, "instantiated." + e + "." + t));
    }
    function _(e, t) {
      var n =
          t.implementations.length > 0 ? t.implementations[0].typename : null,
        r = t.hasDashManifest,
        o = t.implementations.some(function (e) {
          return e.typename === "VideoPlayerNextgendashImplementation";
        });
      return {
        hasDashManifest: r,
        ngdInImplementations: o,
        preferBrowserNativeImplementation: e.preferBrowserNativeImplementation,
        primaryTypename: n,
      };
    }
    function f(e) {
      var t = e.hasDashManifest,
        n = e.ngdInImplementations,
        r = e.preferBrowserNativeImplementation,
        a = e.primaryTypename,
        i = m();
      ((s || (s = o("ODS"))).bumpEntityKey(c, d, "selection.total." + i),
        t &&
          (s || (s = o("ODS"))).bumpEntityKey(
            c,
            d,
            "selection.dash_manifest_available." + i,
          ),
        t &&
          a !== "VideoPlayerNextgendashImplementation" &&
          a !== "VideoPlayerOzImplementation" &&
          (r === !0
            ? (s || (s = o("ODS"))).bumpEntityKey(
                c,
                d,
                "selection.dash_manifest_skipped.prefer_browser_native." + i,
              )
            : (s || (s = o("ODS"))).bumpEntityKey(
                c,
                d,
                "selection.dash_manifest_skipped.other." + i,
              )),
        a === "VideoPlayerNextgendashImplementation"
          ? (s || (s = o("ODS"))).bumpEntityKey(
              c,
              d,
              "selection.nextgendash_selected." + i,
            )
          : a === "VideoPlayerOzImplementation" &&
            (s || (s = o("ODS"))).bumpEntityKey(
              c,
              d,
              "selection.oz_selected." + i,
            ),
        n &&
          (s || (s = o("ODS"))).bumpEntityKey(
            c,
            d,
            "selection.nextgendash_enabled." + i,
          ));
    }
    var g = {
      VideoPlayerNextgendashImplementation: "comet_nextgendash",
      VideoPlayerOzImplementation: "comet_oz",
      VideoPlayerProgressiveImplementation: "comet_progressive",
    };
    function h(e, t) {
      var n,
        r,
        a = (n = g[e]) != null ? n : e,
        i = (r = g[t]) != null ? r : t,
        l = m();
      (s || (s = o("ODS"))).bumpEntityKey(
        c,
        d,
        "fallback." + a + "." + i + "." + l,
      );
    }
    function y(e, t, n, a) {
      if (o("Random").coinflip(r("justknobx")._("3521"))) {
        var i = m();
        r("FBLogger")("comet_video_player", "player_engine.instantiated").info(
          "app_id=%s, player_version=%s, player_suborigin=%s, video_fbid=%s, instance_key=%s",
          i,
          e,
          t,
          String(n != null ? n : ""),
          a,
        );
      }
    }
    function C(e, t) {
      var n = o("react-compiler-runtime").c(9),
        r;
      n[0] !== e || n[1] !== t
        ? ((r = _(e, t)), (n[0] = e), (n[1] = t), (n[2] = r))
        : (r = n[2]);
      var a = r,
        i = a.hasDashManifest,
        l = a.ngdInImplementations,
        s = a.preferBrowserNativeImplementation,
        c = a.primaryTypename,
        d,
        m;
      (n[3] !== i || n[4] !== l || n[5] !== s || n[6] !== c
        ? ((d = function () {
            f({
              hasDashManifest: i,
              ngdInImplementations: l,
              preferBrowserNativeImplementation: s,
              primaryTypename: c,
            });
          }),
          (m = [i, c, s, l]),
          (n[3] = i),
          (n[4] = l),
          (n[5] = s),
          (n[6] = c),
          (n[7] = d),
          (n[8] = m))
        : ((d = n[7]), (m = n[8])),
        u(d, m));
    }
    ((l.countEngineInstantiated = p),
      (l.deriveDashEngineSelectionParams = _),
      (l.countDashEngineSelection = f),
      (l.countEngineFallback = h),
      (l.logEngineInstantiatedDetailed = y),
      (l.useDashEngineSelectionODS = C));
  },
  98,
);
