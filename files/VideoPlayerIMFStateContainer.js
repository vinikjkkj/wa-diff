__d(
  "VideoPlayerIMFStateContainer",
  [
    "ErrorMetadata",
    "ErrorSerializer",
    "FBLogger",
    "VideoPlayerEmsg",
    "VideoPlayerHooks",
    "VideoPlayerIMFMetadataContext",
    "VideoPlayerIMFModuleLazy",
    "deepEquals",
    "err",
    "getErrorSafe",
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "useVideoPlayerControllerSubscriptionHavingController",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useDebugValue,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _(e, t, n) {
      e.forEach(function (e) {
        e.segments.forEach(function (r) {
          var o = r.playheadRangeInSeconds,
            a = r.sticker;
          a != null &&
            (o.from == null || o.from <= t) &&
            (o.to == null || t <= o.to) &&
            n.push({
              debugInfo: {
                segmentData: r.segmentData,
                trackData: e.trackData,
                trackName: e.trackName,
              },
              sticker: a,
            });
        });
      });
    }
    function f(e, t, n, r) {
      _(e.tracks, t, r);
    }
    function g(e, t) {
      return {
        debug_reason: null,
        error_user_info: JSON.stringify({
          emsgDataStr: t.emsgDataStr,
          emsgDurationInSec: t.emsgDurationInSec,
          emsgId: t.emsgId,
          emsgScheme: t.emsgScheme,
          emsgStartTimeInSec: t.emsgStartTimeInSec,
        }),
        imf_emsg_id: t.emsgId != null ? String(t.emsgId) : null,
        imf_topic: t.emsgScheme,
        offset_ms:
          t.emsgStartTimeInSec == null
            ? null
            : e * 1e3 - t.emsgStartTimeInSec * 1e3,
        representation_id: t.representationID,
      };
    }
    function h(e, t, n, o, a, i, l) {
      var s = e
          .map(function (e) {
            return e.type === "imf_live_sticker" ? e : null;
          })
          .filter(Boolean),
        u = s[s.length - 1];
      if (u != null)
        try {
          var c = o.parseVideoPlayerIMFSpecFromIMFLiveStickerEmsgBox(u);
          _(c.tracks, t, i);
        } catch (e) {
          var d,
            m = r("getErrorSafe")(e),
            p = m.metadata || new (r("ErrorMetadata"))();
          (n != null && p.addEntry("COMET_VIDEO", "VIDEO_ID", n),
            p.addEntry(
              "COMET_VIDEO",
              "VIDEO_IMPLEMENTATION_DEBUG_DATA",
              JSON.stringify({ imf_live_sticker_emsg_boxes: s }),
            ));
          var f =
              m.errorName != null && m.errorName !== "" ? m.errorName : m.name,
            h = m.messageFormat != null ? m.messageFormat : m.message,
            y = (
              m.messageFormat != null
                ? (d = m.messageParams) != null
                  ? d
                  : []
                : []
            ).slice(),
            C = "CometVideoPlayerEmsgParseFailed",
            b =
              C +
              ":" +
              (m.errorName != null && m.errorName !== ""
                ? m.errorName
                : m.name),
            v = r("ErrorSerializer").toReadableMessage(
              r("err").apply(void 0, [h].concat(y)),
            );
          (l.push(function () {
            var e;
            (e = r("FBLogger")("comet_video_player").catching(m)).warn.apply(
              e,
              [
                "CometVideoPlayerIMFLiveStickerParseFailed:" + f + ": " + h,
              ].concat(y),
            );
          }),
            l.push(function (e) {
              a == null ||
                a(
                  e,
                  babelHelpers.extends({}, g(t, u), {
                    error: b,
                    error_code: "0",
                    error_description: v,
                    error_domain: C,
                    error_type: "GenericParseError",
                    imf_event_type: "IMF_JSON_PARSE_FAILURE",
                  }),
                );
            }));
        }
    }
    function y(e) {
      var t = e.VideoPlayerIMFModuleLoaded,
        n = e.specInlineJson,
        a = e.videoID;
      return function (e, i) {
        var l = e.getPlayheadPosition(),
          s = e.getCurrentState(),
          u = s.activeEmsgBoxes;
        if (
          i != null &&
          l === i.playhead &&
          u === i.activeEmsgBoxes &&
          n === i.specInlineJson
        )
          return i;
        var c = [],
          d = [],
          m =
            n == null
              ? null
              : i != null && n === i.specInlineJson
                ? i.specFromVideoMetadata
                : (function () {
                    var e =
                      t != null
                        ? t
                        : r(
                            "VideoPlayerIMFModuleLazy",
                          ).getModuleIfRequireable();
                    if (e != null)
                      try {
                        return e.parseVideoPlayerIMFSpecFromVODInlineJSON(n);
                      } catch (e) {
                        return (
                          d.push(function () {
                            var t = r("FBLogger")("comet_video_player");
                            (a != null &&
                              t.addMetadata("COMET_VIDEO", "VIDEO_ID", a),
                              t.addMetadata(
                                "COMET_VIDEO",
                                "VIDEO_IMPLEMENTATION_DEBUG_DATA",
                                JSON.stringify({ imf_spec_inline_json: n }),
                              ),
                              t.catching(r("getErrorSafe")(e)),
                              t.mustfix("Failed to parse IMF Inline JSON."));
                          }),
                          null
                        );
                      }
                  })();
        if ((m != null && f(m, l, a, c), u.length > 0)) {
          var p =
            t != null
              ? t
              : r("VideoPlayerIMFModuleLazy").getModuleIfRequireable();
          if (p != null) {
            var _ = function (t, n) {
              t.logVPLEvent_DO_NOT_USE("imf", n);
            };
            (u !== (i == null ? void 0 : i.activeEmsgBoxes) &&
              u.forEach(function (e) {
                e.emsgScheme != null &&
                  o("VideoPlayerEmsg").KnownEmsgSchemes != null &&
                  [
                    o("VideoPlayerEmsg").KnownEmsgSchemes
                      .LIVE_INSTREAM_ADS_SCHEME_ID,
                    o("VideoPlayerEmsg").KnownEmsgSchemes
                      .LIVE_STICKER_SCHEME_ID,
                    o("VideoPlayerEmsg").KnownEmsgSchemes
                      .LIVE_INTERACTIVE_PLUGIN_EVENT_ID,
                  ].includes(e.emsgScheme) &&
                  d.push(function (t) {
                    _ == null ||
                      _(
                        t,
                        babelHelpers.extends({}, g(l, e), {
                          imf_event_type: "IMF_RENDER",
                        }),
                      );
                  });
              }),
              h(u, l, a, p, _, c, d));
          } else
            d.push(function () {
              var e = r("FBLogger")("comet_video_player");
              (a != null && e.addMetadata("COMET_VIDEO", "VIDEO_ID", a),
                e.addMetadata(
                  "COMET_VIDEO",
                  "VIDEO_IMPLEMENTATION_DEBUG_DATA",
                  JSON.stringify({ active_emsg_boxes: u }),
                ),
                e.warn(
                  "VideoPlayerIMFModule is not available to parse active emsg boxes.",
                ));
            });
        }
        var y = { stickers: c };
        return i != null && r("deepEquals")(y, i.exposedState)
          ? i
          : {
              activeEmsgBoxes: u,
              exposedState: y,
              playhead: l,
              sideEffects: d,
              specFromVideoMetadata: m,
              specInlineJson: n,
            };
      };
    }
    function C(e) {
      var t = p(e),
        n = t[0],
        r = t[1];
      return (n === !1 && e === !0 && r(!0), n);
    }
    function b(e) {
      var t,
        n = o("react-compiler-runtime").c(15),
        a = e.videoPlayerIMFFromVideoMetadata,
        i = C(
          (t = a == null ? void 0 : a.imfExpectedFromEmsg) != null ? t : !1,
        ),
        l = a == null ? void 0 : a.specInlineJson;
      (s || (s = o("VideoPlayerHooks"))).useEmsgObserver(i);
      var u;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = r("VideoPlayerIMFModuleLazy").getModuleIfRequireable()),
          (n[0] = u))
        : (u = n[0]);
      var _ = p(u),
        f = _[0],
        g = _[1],
        h = m(null),
        b,
        v;
      (n[1] !== f || n[2] !== i || n[3] !== l
        ? ((b = function () {
            if (f == null && h.current == null && (i || l != null)) {
              var e = r("VideoPlayerIMFModuleLazy")
                .load()
                .then(function (t) {
                  h.current === e && g(t);
                });
              return (
                r("promiseDone")(e),
                (h.current = e),
                function () {
                  h.current = null;
                }
              );
            }
          }),
          (v = [f, i, l]),
          (n[1] = f),
          (n[2] = i),
          (n[3] = l),
          (n[4] = b),
          (n[5] = v))
        : ((b = n[4]), (v = n[5])),
        d(b, v));
      var S = s.useVideoFbid(),
        R = s.useController(),
        L;
      n[6] !== f || n[7] !== l || n[8] !== S
        ? ((L = y({
            VideoPlayerIMFModuleLoaded: f,
            specInlineJson: l,
            videoID: S,
          })),
          (n[6] = f),
          (n[7] = l),
          (n[8] = S),
          (n[9] = L))
        : (L = n[9]);
      var E = r("useVideoPlayerControllerSubscriptionHavingController")(R, L),
        k;
      (n[10] !== E
        ? ((k = { useVideoPlayerIMFStateContainer: E }),
          (n[10] = E),
          (n[11] = k))
        : (k = n[11]),
        c(k));
      var I = m(null),
        T;
      return (
        n[12] !== R || n[13] !== E.sideEffects
          ? ((T = function () {
              var e = E.sideEffects;
              e !== I.current &&
                ((I.current = e),
                e.forEach(function (e) {
                  e(R);
                }));
            }),
            (n[12] = R),
            (n[13] = E.sideEffects),
            (n[14] = T))
          : (T = n[14]),
        d(T, void 0),
        E
      );
    }
    function v() {
      var e,
        t = o("react-compiler-runtime").c(2),
        n = o(
          "VideoPlayerIMFMetadataContext",
        ).useVideoPlayerIMFMetadataFromContext(),
        r;
      t[0] !== n
        ? ((r = { videoPlayerIMFFromVideoMetadata: n }), (t[0] = n), (t[1] = r))
        : (r = t[1]);
      var a = b(r);
      return (e = a.exposedState) != null ? e : null;
    }
    ((l.makeVideoPlayerIMFInternalStateUpdater = y),
      (l.useVideoPlayerIMFStateContainerInternal = b),
      (l.useVideoPlayerIMFStateContainer = v));
  },
  98,
);
