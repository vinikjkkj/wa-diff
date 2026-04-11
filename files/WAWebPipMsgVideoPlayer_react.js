__d(
  "WAWebPipMsgVideoPlayer.react",
  [
    "WAWebCmd",
    "WAWebMediaMissingModal.react",
    "WAWebMediaNeedPokeModal.react",
    "WAWebMediaTypes",
    "WAWebMediaUnsupportedModal.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebPipController",
    "WAWebPipSharedVideoPlayer.react",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebSendViewCount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef;
    function _(t) {
      var n = o("react-compiler-runtime").c(58),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.msg,
        c = l.onClose,
        _ = l.onMissingMedia,
        f = l.onNeedPokeMedia,
        g = l.onOpenMediaViewer,
        h = l.onOpenVideoFloater,
        y = l.onUnsupportedMedia,
        C = p(null),
        b;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = [o("WAWebMsgGetters").getId]), (n[3] = b))
        : (b = n[3]),
        o("useWAWebMsgValues").useMsgValues(a.msg.id, b));
      var v;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = ["mediaStage", "preview", "streamable"]), (n[4] = v))
        : (v = n[4]);
      var S = o("useWAWebModelValues").useModelValues(a.mediaData, v),
        R;
      n[5] !== S
        ? ((R = { mediaData: S }), (n[5] = S), (n[6] = R))
        : (R = n[6]);
      var L = o("useWAWebSendViewCount").usePlaybackSendViewCount(a.msg.id, R),
        E;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            return C.current ? C.current.getCurrentTimeFromVideo() : 0;
          }),
          (n[7] = E))
        : (E = n[7]);
      var k = E,
        I;
      n[8] !== s || n[9] !== g
        ? ((I = function () {
            (g && g(),
              o("WAWebCmd").Cmd.mediaViewerModal({
                msg: o("WAWebStateUtils").unproxy(s),
                currentTime: k(),
              }));
          }),
          (n[8] = s),
          (n[9] = g),
          (n[10] = I))
        : (I = n[10]);
      var T = I,
        D;
      n[11] !== s || n[12] !== h
        ? ((D = function () {
            (h && h(),
              r("WAWebPipController").openPiP(
                o("WAWebStateUtils").unproxy(s),
                k(),
                null,
              ));
          }),
          (n[11] = s),
          (n[12] = h),
          (n[13] = D))
        : (D = n[13]);
      var x = D,
        $;
      n[14] !== s || n[15] !== c || n[16] !== _
        ? (($ = function () {
            (_ && _(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebMediaMissingModal.react"), { msg: s }),
              ),
              c());
          }),
          (n[14] = s),
          (n[15] = c),
          (n[16] = _),
          (n[17] = $))
        : ($ = n[17]);
      var P = r("useWAWebStableCallback")($),
        N;
      n[18] !== s || n[19] !== c || n[20] !== y
        ? ((N = function () {
            (y && y(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebMediaUnsupportedModal.react"), { msg: s }),
              ),
              c());
          }),
          (n[18] = s),
          (n[19] = c),
          (n[20] = y),
          (n[21] = N))
        : (N = n[21]);
      var M = r("useWAWebStableCallback")(N),
        w;
      n[22] !== s || n[23] !== c || n[24] !== f
        ? ((w = function () {
            (f && f(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebMediaNeedPokeModal.react"), { msg: s }),
              ),
              c());
          }),
          (n[22] = s),
          (n[23] = c),
          (n[24] = f),
          (n[25] = w))
        : (w = n[25]);
      var A = r("useWAWebStableCallback")(w),
        F;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function () {
            var e;
            return (e = C.current) == null ? void 0 : e.getContainerElement();
          }),
          (n[26] = F))
        : (F = n[26]);
      var O = F,
        B;
      (n[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = function () {
            return { getContainerElement: O };
          }),
          (n[27] = B))
        : (B = n[27]),
        m(i, B));
      var W, q;
      (n[28] !== P || n[29] !== A || n[30] !== M || n[31] !== S.mediaStage
        ? ((W = function () {
            e: switch (S.mediaStage) {
              case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING: {
                P();
                break e;
              }
              case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED: {
                M();
                break e;
              }
              case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
                A();
                break e;
              }
              default:
            }
          }),
          (q = [P, A, M, S.mediaStage]),
          (n[28] = P),
          (n[29] = A),
          (n[30] = M),
          (n[31] = S.mediaStage),
          (n[32] = W),
          (n[33] = q))
        : ((W = n[32]), (q = n[33])),
        d(W, q));
      var U;
      n[34] !== S || n[35] !== s
        ? ((U = { msg: s, mediaData: S }),
          (n[34] = S),
          (n[35] = s),
          (n[36] = U))
        : (U = n[36]);
      var V = U,
        H;
      return (
        n[37] !== P ||
        n[38] !== T ||
        n[39] !== x ||
        n[40] !== L ||
        n[41] !== M ||
        n[42] !== V ||
        n[43] !== a.autoPlay ||
        n[44] !== a.disablePiPControls ||
        n[45] !== a.noPip ||
        n[46] !== a.onClose ||
        n[47] !== a.onError ||
        n[48] !== a.onFullscreenToggle ||
        n[49] !== a.onLoadedData ||
        n[50] !== a.onRefSet ||
        n[51] !== a.onSetFullscreenToggleCallback ||
        n[52] !== a.onVideoEnded ||
        n[53] !== a.onVideoMetadataChange ||
        n[54] !== a.overlays ||
        n[55] !== a.startTime ||
        n[56] !== a.type
          ? ((H = u.jsx(
              o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer,
              {
                ref: C,
                type: a.type,
                msgVideoInfo: V,
                startTime: a.startTime,
                onClose: a.onClose,
                onVideoEnded: a.onVideoEnded,
                onError: a.onError,
                onOpenMediaViewer: T,
                onOpenVideoFloater: x,
                onMissingMedia: P,
                onUnsupportedMedia: M,
                onTimeUpdate: L,
                onLoadedData: a.onLoadedData,
                onFullscreenToggle: a.onFullscreenToggle,
                autoPlay: a.autoPlay,
                overlays: a.overlays,
                noPip: a.noPip,
                disablePiPControls: a.disablePiPControls,
                onRefSet: a.onRefSet,
                onVideoMetadataChange: a.onVideoMetadataChange,
                onSetFullscreenToggleCallback: a.onSetFullscreenToggleCallback,
              },
            )),
            (n[37] = P),
            (n[38] = T),
            (n[39] = x),
            (n[40] = L),
            (n[41] = M),
            (n[42] = V),
            (n[43] = a.autoPlay),
            (n[44] = a.disablePiPControls),
            (n[45] = a.noPip),
            (n[46] = a.onClose),
            (n[47] = a.onError),
            (n[48] = a.onFullscreenToggle),
            (n[49] = a.onLoadedData),
            (n[50] = a.onRefSet),
            (n[51] = a.onSetFullscreenToggleCallback),
            (n[52] = a.onVideoEnded),
            (n[53] = a.onVideoMetadataChange),
            (n[54] = a.overlays),
            (n[55] = a.startTime),
            (n[56] = a.type),
            (n[57] = H))
          : (H = n[57]),
        H
      );
    }
    var f = _;
    l.WrappedMsgVideoPlayer = f;
  },
  98,
);
