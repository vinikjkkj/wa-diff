__d(
  "useWAWebSendViewCount",
  [
    "WAWebABProps",
    "WAWebDisplayType",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebNewsletterSendViewReceiptAction",
    "react",
    "react-compiler-runtime",
    "useWAWebIntersection",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebTimeout",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect;
    function d() {}
    function m(e) {
      var t = e.caption,
        n = e.isGif,
        r = e.isIntersecting,
        a = e.mediaStage,
        i = e.mediaType,
        l = e.viewed;
      return !r || l
        ? !1
        : i == null || t != null
          ? !0
          : i === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
              i === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER ||
              n === !0 ||
              i === o("WAWebMediaTypes").OUTWARD_TYPES.PTV
            ? a === o("WAWebMediaTypes").MediaDataStage.RESOLVED
            : !1;
    }
    function p(e, t) {
      var n = o("react-compiler-runtime").c(25),
        a = t.displayType,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebMsgGetters").getViewed,
            o("WAWebMsgGetters").getIsNewsletterMsg,
            o("WAWebMsgGetters").getCaption,
          ]),
          (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebMsgValues").useMsgValues(e, i),
        s = l[0],
        u = l[1],
        d = l[2],
        p;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = ["mediaStage", "type", "isGif"]), (n[1] = p))
        : (p = n[1]);
      var _ = o("useWAWebModelValues").useOptionalModelValues(
          t == null ? void 0 : t.mediaData,
          p,
        ),
        f;
      n[2] !== _
        ? ((f = _ != null ? _ : {}), (n[2] = _), (n[3] = f))
        : (f = n[3]);
      var g = f,
        h = g.isGif,
        y = g.mediaStage,
        C = g.type,
        b = !!(t != null && t.isIntersecting),
        v;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { root: null, threshold: 0.99 }), (n[4] = v))
        : (v = n[4]);
      var S = r("useWAWebIntersection")(v),
        R = S[0],
        L = S[1],
        E = L.isIntersecting,
        k = r("useWAWebUnmountSignal")(),
        I;
      n[5] !== e
        ? ((I = function () {
            o("WAWebNewsletterSendViewReceiptAction").sendViewReceipt({
              id: e,
              signal: new AbortController().signal,
            });
          }),
          (n[5] = e),
          (n[6] = I))
        : (I = n[6]);
      var T;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = o("WAWebABProps").getABPropConfigValue(
            "channel_views_duration_milliseconds",
          )),
          (n[7] = T))
        : (T = n[7]);
      var D = o("useWAWebTimeout").useTimeout(I, T),
        x = D[0],
        $ = D[1],
        P,
        N;
      (n[8] !== $ ||
      n[9] !== d ||
      n[10] !== a ||
      n[11] !== h ||
      n[12] !== E ||
      n[13] !== b ||
      n[14] !== u ||
      n[15] !== y ||
      n[16] !== C ||
      n[17] !== x ||
      n[18] !== s
        ? ((P = function () {
            !u ||
              a !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ||
              (m({
                isIntersecting: E || b,
                viewed: s,
                caption: d,
                mediaStage: y,
                mediaType: C,
                isGif: h,
              })
                ? x()
                : $());
          }),
          (N = [E, b, x, $, s, d, y, h, C, u, a]),
          (n[8] = $),
          (n[9] = d),
          (n[10] = a),
          (n[11] = h),
          (n[12] = E),
          (n[13] = b),
          (n[14] = u),
          (n[15] = y),
          (n[16] = C),
          (n[17] = x),
          (n[18] = s),
          (n[19] = P),
          (n[20] = N))
        : ((P = n[19]), (N = n[20])),
        c(P, N));
      var M, w;
      return (
        n[21] !== $ || n[22] !== k.aborted
          ? ((w = function () {
              k.aborted && $();
            }),
            (M = [k.aborted, $]),
            (n[21] = $),
            (n[22] = k.aborted),
            (n[23] = M),
            (n[24] = w))
          : ((M = n[23]), (w = n[24])),
        c(w, M),
        u &&
        (t == null ? void 0 : t.isIntersecting) == null &&
        a === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
          ? R
          : null
      );
    }
    function _(e, t) {
      var n = o("react-compiler-runtime").c(8),
        a = r("useWAWebUnmountSignal")(),
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebMsgGetters").getViewed,
            o("WAWebMsgGetters").getIsNewsletterMsg,
          ]),
          (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebMsgValues").useMsgValues(e, i),
        s = l[0],
        u = l[1],
        c;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = ["duration"]), (n[1] = c))
        : (c = n[1]);
      var m = o("useWAWebModelValues").useModelValues(t.mediaData, c),
        p = m.duration,
        _;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = o("WAWebABProps").getABPropConfigValue(
            "channel_playable_message_views_duration_milliseconds",
          )),
          (n[2] = _))
        : (_ = n[2]);
      var f = Math.min(_, parseInt(p, 10) * 1e3),
        g;
      n[3] !== e || n[4] !== f || n[5] !== a || n[6] !== s
        ? ((g = function (n) {
            !s &&
              n * 1e3 >= f &&
              o("WAWebNewsletterSendViewReceiptAction").sendViewReceipt({
                id: e,
                signal: a,
              });
          }),
          (n[3] = e),
          (n[4] = f),
          (n[5] = a),
          (n[6] = s),
          (n[7] = g))
        : (g = n[7]);
      var h = g;
      return u ? h : d;
    }
    ((l.useSendViewCount = p), (l.usePlaybackSendViewCount = _));
  },
  98,
);
