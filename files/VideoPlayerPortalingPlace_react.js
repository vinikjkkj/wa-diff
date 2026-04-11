__d(
  "VideoPlayerPortalingPlace.react",
  [
    "BaseViewportMarginsContext",
    "CometTrackingCodeContext",
    "CometTrackingNodesContext",
    "CoreVideoPlayer.react",
    "CoreVideoPlayerFitParentContainer.react",
    "FBLogger",
    "GlobalVideoPortsID",
    "GlobalVideoPortsRenderers.react",
    "VideoPlayerFullscreenController",
    "VideoPlayerPortalingPlaceInfoProvider.react",
    "VideoPlayerPortalingPlaceState",
    "VideoPlayerPortalingPlaceWithPortaling.react",
    "react",
    "react-compiler-runtime",
    "useStable",
    "useUnsafeRef_DEPRECATED",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect,
      p = c.useState,
      _ = { bottom: 0, left: 0, right: 0, top: 0 };
    function f(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.ref,
        r = e.children,
        a = e.debugRole,
        i = e.testid,
        l;
      return (
        t[0] !== r || t[1] !== a || t[2] !== n || t[3] !== i
          ? ((l = u.jsx(
              o("CoreVideoPlayerFitParentContainer.react")
                .CoreVideoPlayerFitParentContainer,
              { debugRole: a, ref: n, testid: void 0, children: r },
            )),
            (t[0] = r),
            (t[1] = a),
            (t[2] = n),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function g(t) {
      var n,
        a = o("react-compiler-runtime").c(69),
        i = t.coreVideoPlayerMetaData,
        l = t.implementations,
        s = t.portalingEnabled,
        c = t.portalingFromVideoID,
        g = t.portalingPlaceMetaData,
        y = t.renderComponents,
        C = t.renderPlaceholder,
        b;
      (a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = []), (a[0] = b))
        : (b = a[0]),
        m(h, b));
      var v;
      a[1] !== c
        ? ((v = c != null ? o("GlobalVideoPortsID").ensureVideoID(c) : null),
          (a[1] = c),
          (a[2] = v))
        : (v = a[2]);
      var S = v;
      c != null &&
        S == null &&
        r("FBLogger")("comet_video_player").mustfix(
          "The provided portalingFromVideoID (%s) does not look like such an ID. The video player will not use portaling until a valid ID is provided",
          String(c),
        );
      var R;
      a[3] !== s || a[4] !== S
        ? ((R = { portalingEnabled: s, portalingFromVideoID: S }),
          (a[3] = s),
          (a[4] = S),
          (a[5] = R))
        : (R = a[5]);
      var L = o(
          "VideoPlayerPortalingPlaceState",
        ).useVideoPlayerPortalingPlaceState(R),
        E = L.canBecomePortableLater,
        k = L.currentVideoID,
        I = L.globalVideoPortsManager,
        T = L.globalVideoPortsState,
        D = L.thisPlaceID,
        x = d(r("BaseViewportMarginsContext")),
        $ = (e || (e = r("useUnsafeRef_DEPRECATED")))(null),
        P;
      a[6] !== $
        ? ((P = function () {
            return o(
              "VideoPlayerFullscreenController",
            ).createFullscreenController($);
          }),
          (a[6] = $),
          (a[7] = P))
        : (P = a[7]);
      var N = r("useStable")(P),
        M;
      a[8] !== N
        ? ((M = N.getIsFullscreen()), (a[8] = N), (a[9] = M))
        : (M = a[9]);
      var w = p(M),
        A = w[0],
        F = w[1],
        O,
        B;
      (a[10] !== N
        ? ((O = function () {
            var e = N.subscribe(function () {
              var e = N.getIsFullscreen();
              F(e);
            });
            return (
              F(N.getIsFullscreen()),
              function () {
                e.remove();
              }
            );
          }),
          (B = [N, F]),
          (a[10] = N),
          (a[11] = O),
          (a[12] = B))
        : ((O = a[11]), (B = a[12])),
        m(O, B));
      var W = d(r("CometTrackingNodesContext")),
        q;
      a[13] !== W ? ((q = W.join("")), (a[13] = W), (a[14] = q)) : (q = a[14]);
      var U = q,
        V = d(r("CometTrackingCodeContext")),
        H = (n = V.encrypted_tracking[0]) != null ? n : "",
        G = A ? _ : x,
        z =
          "comet-video-player-place" +
          (i.videoFBID != null ? "-vid-" + i.videoFBID : "");
      if (!E) {
        var j;
        a[15] !== i ||
        a[16] !== G ||
        a[17] !== N ||
        a[18] !== l ||
        a[19] !== A ||
        a[20] !== y ||
        a[21] !== H ||
        a[22] !== U
          ? ((j = u.jsx(r("CoreVideoPlayer.react"), {
              coreVideoPlayerMetaData: i,
              fullscreenController: N,
              implementations: l,
              isFullscreen: A,
              renderWithCoreVideoStates: y,
              trackingDataEncrypted: H,
              trackingNodes: U,
              viewportMarginsForViewability: G,
            })),
            (a[15] = i),
            (a[16] = G),
            (a[17] = N),
            (a[18] = l),
            (a[19] = A),
            (a[20] = y),
            (a[21] = H),
            (a[22] = U),
            (a[23] = j))
          : (j = a[23]);
        var K;
        a[24] !== k || a[25] !== j || a[26] !== D
          ? ((K = u.jsx(
              o("VideoPlayerPortalingPlaceInfoProvider.react")
                .VideoPlayerPortalingPlaceInfoProvider,
              {
                currentPlaceID: D,
                currentVideoID: k,
                portalingEnabled: !1,
                previousPlaceMetaData: null,
                thisPlaceID: D,
                children: j,
              },
            )),
            (a[24] = k),
            (a[25] = j),
            (a[26] = D),
            (a[27] = K))
          : (K = a[27]);
        var Q;
        return (
          a[28] !== K || a[29] !== z || a[30] !== $
            ? ((Q = u.jsx(f, {
                debugRole: null,
                ref: $,
                testid: void 0,
                children: K,
              })),
              (a[28] = K),
              (a[29] = z),
              (a[30] = $),
              (a[31] = Q))
            : (Q = a[31]),
          Q
        );
      }
      if (I && T) {
        var X;
        if (a[32] !== k || a[33] !== I || a[34] !== T) {
          var Y, J;
          ((X =
            (Y =
              (J = I.getCurrentPlaceStateForVideo(T, k)) == null
                ? void 0
                : J.portablePlaceID) != null
              ? Y
              : null),
            (a[32] = k),
            (a[33] = I),
            (a[34] = T),
            (a[35] = X));
        } else X = a[35];
        var Z;
        if (a[36] !== k || a[37] !== I || a[38] !== T) {
          var ee, te;
          ((Z =
            (ee =
              (te = I.getPortableVideoState(T, k)) == null
                ? void 0
                : te.previousPlaceMetaData) != null
              ? ee
              : null),
            (a[36] = k),
            (a[37] = I),
            (a[38] = T),
            (a[39] = Z));
        } else Z = a[39];
        var ne;
        a[40] !== i ||
        a[41] !== k ||
        a[42] !== G ||
        a[43] !== N ||
        a[44] !== I ||
        a[45] !== l ||
        a[46] !== A ||
        a[47] !== g ||
        a[48] !== y ||
        a[49] !== C ||
        a[50] !== Z ||
        a[51] !== X ||
        a[52] !== D ||
        a[53] !== H ||
        a[54] !== U
          ? ((ne = u.jsx(r("VideoPlayerPortalingPlaceWithPortaling.react"), {
              coreVideoPlayerMetaData: i,
              currentPlaceID: X,
              currentVideoID: k,
              fullscreenController: N,
              globalVideoPortsManager: I,
              globalVideoPortsState_DEPRECATED: null,
              implementations: l,
              isFullscreen: A,
              portablePlaceMetaData: g,
              previousPlaceMetaData: Z,
              renderComponents: y,
              renderPlaceholder: C,
              thisPlaceID: D,
              trackingDataEncrypted: H,
              trackingNodes: U,
              viewportMarginsForViewability: G,
            })),
            (a[40] = i),
            (a[41] = k),
            (a[42] = G),
            (a[43] = N),
            (a[44] = I),
            (a[45] = l),
            (a[46] = A),
            (a[47] = g),
            (a[48] = y),
            (a[49] = C),
            (a[50] = Z),
            (a[51] = X),
            (a[52] = D),
            (a[53] = H),
            (a[54] = U),
            (a[55] = ne))
          : (ne = a[55]);
        var re;
        return (
          a[56] !== ne || a[57] !== z || a[58] !== $
            ? ((re = u.jsx(f, {
                debugRole: null,
                ref: $,
                testid: void 0,
                children: ne,
              })),
              (a[56] = ne),
              (a[57] = z),
              (a[58] = $),
              (a[59] = re))
            : (re = a[59]),
          re
        );
      } else {
        var oe,
          ae = (oe = i.videoPixelsAspectRatio) != null ? oe : null,
          ie;
        a[60] !== k || a[61] !== C || a[62] !== ae || a[63] !== D
          ? ((ie = u.jsx(
              o("GlobalVideoPortsRenderers.react")
                .GlobalVideoPortsPlaceholderRenderer,
              {
                currentPlaceID: null,
                currentVideoID: k,
                previousPlaceMetaData: null,
                renderPlaceholder: C,
                thisPlaceID: D,
                videoPixelsAspectRatio: ae,
              },
            )),
            (a[60] = k),
            (a[61] = C),
            (a[62] = ae),
            (a[63] = D),
            (a[64] = ie))
          : (ie = a[64]);
        var le;
        return (
          a[65] !== ie || a[66] !== z || a[67] !== $
            ? ((le = u.jsx(f, {
                debugRole: null,
                ref: $,
                testid: void 0,
                children: ie,
              })),
              (a[65] = ie),
              (a[66] = z),
              (a[67] = $),
              (a[68] = le))
            : (le = a[68]),
          le
        );
      }
    }
    function h() {
      return y;
    }
    function y() {}
    l.default = g;
  },
  98,
);
