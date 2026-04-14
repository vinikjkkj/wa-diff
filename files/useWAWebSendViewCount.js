__d(
  "useWAWebSendViewCount",
  [
    "WAWebABProps",
    "WAWebDisplayType",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebNewsletterSendViewReceiptAction",
    "react",
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
      var n = t.displayType,
        a = o("useWAWebMsgValues").useMsgValues(e, [
          o("WAWebMsgGetters").getViewed,
          o("WAWebMsgGetters").getIsNewsletterMsg,
          o("WAWebMsgGetters").getCaption,
        ]),
        i = a[0],
        l = a[1],
        s = a[2],
        u = o("useWAWebModelValues").useOptionalModelValues(
          t == null ? void 0 : t.mediaData,
          ["mediaStage", "type", "isGif"],
        ),
        d = u != null ? u : {},
        p = d.isGif,
        _ = d.mediaStage,
        f = d.type,
        g = !!(t != null && t.isIntersecting),
        h = r("useWAWebIntersection")({ root: null, threshold: 0.99 }),
        y = h[0],
        C = h[1].isIntersecting,
        b = r("useWAWebUnmountSignal")(),
        v = o("useWAWebTimeout").useTimeout(function () {
          o("WAWebNewsletterSendViewReceiptAction").sendViewReceipt({
            id: e,
            signal: new AbortController().signal,
          });
        }, o("WAWebABProps").getABPropConfigValue("channel_views_duration_milliseconds")),
        S = v[0],
        R = v[1];
      return (
        c(
          function () {
            !l ||
              n !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ||
              (m({
                isIntersecting: C || g,
                viewed: i,
                caption: s,
                mediaStage: _,
                mediaType: f,
                isGif: p,
              })
                ? S()
                : R());
          },
          [C, g, S, R, i, s, _, p, f, l, n],
        ),
        c(
          function () {
            b.aborted && R();
          },
          [b.aborted, R],
        ),
        l &&
        (t == null ? void 0 : t.isIntersecting) == null &&
        n === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
          ? y
          : null
      );
    }
    function _(e, t) {
      var n = r("useWAWebUnmountSignal")(),
        a = o("useWAWebMsgValues").useMsgValues(e, [
          o("WAWebMsgGetters").getViewed,
          o("WAWebMsgGetters").getIsNewsletterMsg,
        ]),
        i = a[0],
        l = a[1],
        s = o("useWAWebModelValues").useModelValues(t.mediaData, ["duration"]),
        c = s.duration,
        m = Math.min(
          o("WAWebABProps").getABPropConfigValue(
            "channel_playable_message_views_duration_milliseconds",
          ),
          parseInt(c, 10) * 1e3,
        ),
        p = u(
          function (t) {
            !i &&
              t * 1e3 >= m &&
              o("WAWebNewsletterSendViewReceiptAction").sendViewReceipt({
                id: e,
                signal: n,
              });
          },
          [e, n, m, i],
        );
      return l ? p : d;
    }
    ((l.useSendViewCount = p), (l.usePlaybackSendViewCount = _));
  },
  98,
);
