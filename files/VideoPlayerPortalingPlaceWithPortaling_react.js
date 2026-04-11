__d(
  "VideoPlayerPortalingPlaceWithPortaling.react",
  [
    "BaseContextualLayerAnchorRootContext",
    "CoreVideoPlayerFitParentContainer.react",
    "GlobalVideoPortsRenderers.react",
    "deepEquals",
    "getOwnObjectValues",
    "gkx",
    "react",
    "react-compiler-runtime",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t = e.coreVideoPlayerMetaData,
        n = e.currentVideoID,
        o = e.fullscreenController,
        a = e.globalVideoPortsManager,
        i = e.implementations,
        l = e.injectCoreVideoStatesRef,
        s = e.isFullscreen,
        u = e.portablePlaceContainer,
        c = e.portablePlaceMetaData,
        m = e.renderComponents,
        p = e.renderPlaceholder,
        _ = e.thisPlaceID,
        f = e.trackingDataEncrypted,
        g = e.trackingNodes,
        h = e.viewportMarginsForViewability;
      (d(
        function () {
          a.addOrUpdatePlace({
            coreVideoPlayerMetaData: t,
            fullscreenController: o,
            implementations: i,
            injectCoreVideoStatesRef: l,
            isFullscreen: s,
            portablePlaceContainer: u,
            portablePlaceID: _,
            portablePlaceMetaData: c,
            portableVideoID: n,
            renderComponents: m,
            renderPlaceholder: p,
            trackingDataEncrypted: f,
            trackingNodes: g,
            viewportMarginsForViewability: h,
          });
        },
        [].concat(
          r("getOwnObjectValues")(t),
          [n, o, s, a, u],
          r("getOwnObjectValues")(c || {}),
          [m, p, _, f, g, h],
        ),
      ),
        d(
          function () {
            return function () {
              a.removePlace({ portablePlaceID: _ });
            };
          },
          [a, _],
        ));
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.coreVideoPlayerMetaData,
        a = e.currentVideoID,
        i = e.fullscreenController,
        l = e.globalVideoPortsManager,
        s = e.implementations,
        u = e.injectCoreVideoStatesRef,
        c = e.isFullscreen,
        p = e.portablePlaceContainer,
        _ = e.portablePlaceMetaData,
        f = e.renderComponents,
        g = e.renderPlaceholder,
        h = e.thisPlaceID,
        y = e.trackingDataEncrypted,
        C = e.trackingNodes,
        b = e.viewportMarginsForViewability,
        v = m(null),
        S = m(null),
        R;
      (t[0] !== n ||
      t[1] !== a ||
      t[2] !== i ||
      t[3] !== l ||
      t[4] !== s ||
      t[5] !== u ||
      t[6] !== c ||
      t[7] !== p ||
      t[8] !== _ ||
      t[9] !== f ||
      t[10] !== g ||
      t[11] !== h ||
      t[12] !== y ||
      t[13] !== C ||
      t[14] !== b
        ? ((R = function () {
            var e = {
                coreVideoPlayerMetaData: n,
                implementations: s,
                isFullscreen: c,
                portablePlaceID: h,
                portablePlaceMetaData: _,
                portableVideoID: a,
                trackingDataEncrypted: y,
                trackingNodes: C,
                viewportMarginsForViewability: b,
              },
              t = {
                fullscreenController: i,
                injectCoreVideoStatesRef: u,
                portablePlaceContainer: p,
                renderComponents: f,
                renderPlaceholder: g,
              };
            (r("deepEquals")(e, v.current) &&
              r("shallowEqual")(t, S.current)) ||
              ((v.current = e),
              (S.current = t),
              l.addOrUpdatePlace(babelHelpers.extends({}, e, t)));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s),
          (t[5] = u),
          (t[6] = c),
          (t[7] = p),
          (t[8] = _),
          (t[9] = f),
          (t[10] = g),
          (t[11] = h),
          (t[12] = y),
          (t[13] = C),
          (t[14] = b),
          (t[15] = R))
        : (R = t[15]),
        d(R));
      var L, E;
      (t[16] !== l || t[17] !== h
        ? ((L = function () {
            return function () {
              ((v.current = null),
                (S.current = null),
                l.removePlace({ portablePlaceID: h }));
            };
          }),
          (E = [l, h]),
          (t[16] = l),
          (t[17] = h),
          (t[18] = L),
          (t[19] = E))
        : ((L = t[18]), (E = t[19])),
        d(L, E));
    }
    var g = r("gkx")("17097") ? f : _;
    function h(e) {
      var t,
        n,
        a,
        i,
        l = o("react-compiler-runtime").c(17),
        u = e.currentPlaceID,
        d = e.currentVideoID,
        _ = e.globalVideoPortsManager,
        f = e.globalVideoPortsState_DEPRECATED,
        h = e.isFullscreen,
        C = e.previousPlaceMetaData,
        b = e.renderComponents,
        v = e.thisPlaceID,
        S = p(y),
        R = S[0],
        L = m(null),
        E;
      (l[0] !== R || l[1] !== e
        ? ((E = babelHelpers.extends({}, e, {
            injectCoreVideoStatesRef: L,
            portablePlaceContainer: R,
          })),
          (l[0] = R),
          (l[1] = e),
          (l[2] = E))
        : (E = l[2]),
        g(E));
      var k = c(r("BaseContextualLayerAnchorRootContext")),
        I = m(null),
        T = h ? I : k,
        D;
      l[3] !== R || l[4] !== v
        ? ((D = s.jsx(
            o("CoreVideoPlayerFitParentContainer.react")
              .CoreVideoPlayerFitParentDOMContainer,
            { debugRole: null, domElement: R },
            v,
          )),
          (l[3] = R),
          (l[4] = v),
          (l[5] = D))
        : (D = l[5]);
      var x =
          f != null
            ? (t =
                (n = _.getCurrentPlaceStateForVideo(f, d)) == null
                  ? void 0
                  : n.portablePlaceID) != null
              ? t
              : null
            : u,
        $ =
          f != null
            ? (a =
                (i = _.getPortableVideoState(f, d)) == null
                  ? void 0
                  : i.previousPlaceMetaData) != null
              ? a
              : null
            : C,
        P;
      l[6] !== d || l[7] !== b || l[8] !== x || l[9] !== $ || l[10] !== v
        ? ((P = s.jsx(
            o("GlobalVideoPortsRenderers.react")
              .GlobalVideoPortsVideoComponentsRenderer,
            {
              currentPlaceID: x,
              currentVideoID: d,
              injectCoreVideoStatesRef: L,
              previousPlaceMetaData: $,
              renderComponents: b,
              thisPlaceID: v,
            },
          )),
          (l[6] = d),
          (l[7] = b),
          (l[8] = x),
          (l[9] = $),
          (l[10] = v),
          (l[11] = P))
        : (P = l[11]);
      var N;
      l[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = s.jsx("div", { ref: I })), (l[12] = N))
        : (N = l[12]);
      var M;
      return (
        l[13] !== T || l[14] !== D || l[15] !== P
          ? ((M = s.jsxs(r("BaseContextualLayerAnchorRootContext").Provider, {
              value: T,
              children: [D, P, N],
            })),
            (l[13] = T),
            (l[14] = D),
            (l[15] = P),
            (l[16] = M))
          : (M = l[16]),
        M
      );
    }
    function y() {
      return o(
        "CoreVideoPlayerFitParentContainer.react",
      ).createFitParentContainerDiv({ debugRole: null });
    }
    l.default = h;
  },
  98,
);
