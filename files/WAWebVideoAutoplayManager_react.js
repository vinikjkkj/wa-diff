__d(
  "WAWebVideoAutoplayManager.react",
  [
    "VideoAutoplayLocalScopeProvider.react",
    "VideoPlayerAutoplayContexts",
    "VideoPlayerAutoplayRulesProvider",
    "react",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = u.useRef,
      p = o("VideoPlayerAutoplayRulesProvider").makeVideoPlayerAutoplayRules(
        [],
      );
    function _(e) {
      var t = e.children,
        n = e.disableAutoplayManagement,
        a = m(new Map()),
        i = m(null),
        l = c(function (e) {
          return { selectedAutoplayVideoSymbol: i.current };
        }, []),
        u = c(function (e, t, n, r, o, i) {
          a.current.set(e, {
            controller: r,
            shouldAutoplayManageVideo: i,
            symbol: e,
          });
        }, []),
        _ = c(function (e) {
          (a.current.delete(e), i.current === e && (i.current = null));
        }, []),
        f = c(function (e, t, n) {
          var o = a.current.get(e);
          if (o != null) {
            var l = o.controller,
              s = o.shouldAutoplayManageVideo;
            if (t === "ALLOW" && s && i.current !== e) {
              var u = l.getCurrentState(),
                c = u.paused;
              c &&
                ((i.current = e),
                r("setTimeout")(function () {
                  var e = l.getCurrentState();
                  e.paused && l.play("autoplay_initiated");
                }, 0));
            } else t !== "ALLOW" && i.current === e && (i.current = null);
          }
        }, []),
        g = d(
          function () {
            return {
              getAutoplayManagerDebugInfo: l,
              register: u,
              unregister: _,
              update: f,
            };
          },
          [l, u, _, f],
        ),
        h =
          n === !0
            ? p
            : o("VideoPlayerAutoplayRulesProvider").provideAutoplayRules(
                "wa_web",
              );
      return s.jsx(
        o("VideoPlayerAutoplayContexts").AutoplayApiContext.Provider,
        {
          value: g,
          children: s.jsx(r("VideoAutoplayLocalScopeProvider.react"), {
            autoplayLocalRules: h,
            children: t,
          }),
        },
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
