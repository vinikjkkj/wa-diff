__d(
  "GlobalVideoPortsRenderers.react",
  [
    "CoreVideoPlayer.react",
    "VideoPlayerContexts",
    "VideoPlayerPortalingPlaceInfoProvider.react",
    "emptyFunction",
    "fb-error",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = r("emptyFunction").thatReturns(null);
    function _(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.coreVideoPlayerMetaData,
        a = e.currentPlaceID,
        i = e.currentVideoID,
        l = e.fullscreenController,
        s = e.implementations,
        c = e.isFullscreen,
        d = e.onCoreVideoStatesChanged,
        m = e.previousPlaceMetaData,
        _ = e.trackingDataEncrypted,
        f = e.trackingNodes,
        g = e.viewportMarginsForViewability,
        h;
      t[0] !== n ||
      t[1] !== l ||
      t[2] !== s ||
      t[3] !== c ||
      t[4] !== d ||
      t[5] !== _ ||
      t[6] !== f ||
      t[7] !== g
        ? ((h = u.jsx(r("CoreVideoPlayer.react"), {
            coreVideoPlayerMetaData: n,
            fullscreenController: l,
            implementations: s,
            isFullscreen: c,
            onCoreVideoStatesChanged: d,
            renderWithCoreVideoStates: p,
            trackingDataEncrypted: _,
            trackingNodes: f,
            viewportMarginsForViewability: g,
          })),
          (t[0] = n),
          (t[1] = l),
          (t[2] = s),
          (t[3] = c),
          (t[4] = d),
          (t[5] = _),
          (t[6] = f),
          (t[7] = g),
          (t[8] = h))
        : (h = t[8]);
      var y;
      return (
        t[9] !== a || t[10] !== i || t[11] !== m || t[12] !== h
          ? ((y = u.jsx(
              o("VideoPlayerPortalingPlaceInfoProvider.react")
                .VideoPlayerPortalingPlaceInfoProvider,
              {
                currentPlaceID: a,
                currentVideoID: i,
                portalingEnabled: !0,
                previousPlaceMetaData: m,
                thisPlaceID: a,
                children: h,
              },
            )),
            (t[9] = a),
            (t[10] = i),
            (t[11] = m),
            (t[12] = h),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.currentPlaceID,
        r = e.currentVideoID,
        a = e.previousPlaceMetaData,
        i = e.renderPlaceholder,
        l = e.thisPlaceID,
        c = e.videoPixelsAspectRatio,
        d;
      t[0] !== i
        ? ((d = i != null ? i() : null), (t[0] = i), (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== d || t[3] !== c
        ? ((m = u.jsx(
            (s || (s = o("VideoPlayerContexts"))).VideoPixelsAspectRatioContext
              .Provider,
            { value: c, children: d },
          )),
          (t[2] = d),
          (t[3] = c),
          (t[4] = m))
        : (m = t[4]);
      var p;
      return (
        t[5] !== n || t[6] !== r || t[7] !== a || t[8] !== m || t[9] !== l
          ? ((p = u.jsx(
              o("VideoPlayerPortalingPlaceInfoProvider.react")
                .VideoPlayerPortalingPlaceInfoProvider,
              {
                currentPlaceID: n,
                currentVideoID: r,
                portalingEnabled: !0,
                previousPlaceMetaData: a,
                thisPlaceID: l,
                children: m,
              },
            )),
            (t[5] = n),
            (t[6] = r),
            (t[7] = a),
            (t[8] = m),
            (t[9] = l),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.currentPlaceID,
        a = e.currentVideoID,
        i = e.injectCoreVideoStatesRef,
        l = e.previousPlaceMetaData,
        s = e.renderComponents,
        c = e.thisPlaceID,
        p = m(null),
        _ = p[0],
        f = p[1],
        g = m(null),
        h = g[0],
        y = g[1],
        C,
        b;
      if (
        (t[0] !== i
          ? ((C = function () {
              return (
                (i.current = function (e, t) {
                  if (e != null) {
                    var n,
                      o,
                      a = r("fb-error").getErrorSafe(e),
                      i = r("fb-error").err.apply(
                        r("fb-error"),
                        [(n = a.messageFormat) != null ? n : a.message].concat(
                          a.messageFormat != null
                            ? (o = a.messageParams) != null
                              ? o
                              : []
                            : [],
                        ),
                      );
                    ((i.name = i.errorName = a.name),
                      (i.metadata = a.metadata),
                      (i.stack = a.stack),
                      (i.taalOpcodes = a.taalOpcodes),
                      (i.cause = e),
                      y(i));
                  }
                  f(t);
                }),
                function () {
                  i.current = null;
                }
              );
            }),
            (b = [i]),
            (t[0] = i),
            (t[1] = C),
            (t[2] = b))
          : ((C = t[1]), (b = t[2])),
        d(C, b),
        c === n)
      ) {
        if (h != null) throw h;
        if (_ != null) {
          var v;
          t[3] !== _ || t[4] !== s
            ? ((v = s(_)), (t[3] = _), (t[4] = s), (t[5] = v))
            : (v = t[5]);
          var S;
          return (
            t[6] !== n || t[7] !== a || t[8] !== l || t[9] !== v || t[10] !== c
              ? ((S = u.jsx(
                  o("VideoPlayerPortalingPlaceInfoProvider.react")
                    .VideoPlayerPortalingPlaceInfoProvider,
                  {
                    currentPlaceID: n,
                    currentVideoID: a,
                    portalingEnabled: !0,
                    previousPlaceMetaData: l,
                    thisPlaceID: c,
                    children: v,
                  },
                )),
                (t[6] = n),
                (t[7] = a),
                (t[8] = l),
                (t[9] = v),
                (t[10] = c),
                (t[11] = S))
              : (S = t[11]),
            S
          );
        } else return null;
      } else return null;
    }
    ((l.GlobalVideoPortsPlayerRenderer = _),
      (l.GlobalVideoPortsPlaceholderRenderer = f),
      (l.GlobalVideoPortsVideoComponentsRenderer = g));
  },
  98,
);
