__d(
  "VideoPlayerEncodingCostTelemetry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 64;
    function l(t) {
      var n = t.getRepresentationAtMediaTime,
        r = t.onBeforeReset,
        o = null,
        a = null,
        i = 0,
        l = 0,
        s = -1,
        u = 0,
        c = 0,
        d = 0,
        m = 0,
        p = 0,
        _ = "unsupported",
        f = -1,
        g = -1,
        h = new Map();
      function y() {
        i > 0 && (f !== i || g !== u) && r();
      }
      function C() {
        (y(),
          i++,
          (l = 0),
          (s = -1),
          (u = 0),
          (c = 0),
          (d = 0),
          (m = 0),
          (p = 0),
          (_ = o == null ? "unsupported" : "not_measured"),
          h.clear());
      }
      function b(t) {
        var r = i,
          l = t.requestVideoFrameCallback;
        l != null &&
          (a = l.call(t, function (l, f) {
            if (!(o !== t || i !== r)) {
              if (
                ((a = null),
                f.presentedFrames < s && C(),
                f.presentedFrames !== s)
              ) {
                ((s = f.presentedFrames), u++);
                var g = f.processingDuration,
                  y = g == null ? null : Math.round(g * 1e6);
                if (g == null) (m++, _ !== "supported" && (_ = "unavailable"));
                else if (g < 0 || y == null || !Number.isSafeInteger(y)) d++;
                else {
                  _ = "supported";
                  var v = n(f.mediaTime);
                  if (v == null) c++;
                  else {
                    var S = JSON.stringify([
                        v.representationID,
                        v.codec,
                        v.variantKey,
                        v.width,
                        v.height,
                      ]),
                      R = h.get(S);
                    (R == null &&
                      h.size < e &&
                      ((R = {
                        codec: v.codec,
                        decode_duration_sum_us: 0,
                        decode_sample_count: 0,
                        height: v.height,
                        representation_id: v.representationID,
                        video_variant_key: v.variantKey,
                        width: v.width,
                      }),
                      h.set(S, R)),
                      R == null
                        ? p++
                        : Number.isSafeInteger(R.decode_duration_sum_us + y)
                          ? ((R.decode_duration_sum_us += y),
                            R.decode_sample_count++)
                          : d++);
                  }
                }
              }
              o === t && b(t);
            }
          }));
      }
      function v() {
        var e = o;
        e != null &&
          (a != null &&
            (e.cancelVideoFrameCallback == null ||
              e.cancelVideoFrameCallback(a),
            (a = null)),
          C(),
          (_ = "not_measured"),
          b(e));
      }
      function S() {
        y();
        var e = o;
        ((o = null),
          e != null &&
            (e.removeEventListener("emptied", v),
            a != null &&
              (e.cancelVideoFrameCallback == null ||
                e.cancelVideoFrameCallback(a))),
          (a = null));
      }
      return {
        attach: function (t) {
          if (t !== o && (S(), t != null)) {
            if (
              (C(),
              typeof t.requestVideoFrameCallback != "function" ||
                typeof t.cancelVideoFrameCallback != "function")
            ) {
              _ = "unsupported";
              return;
            }
            ((_ = "not_measured"),
              (o = t),
              t.addEventListener("emptied", v),
              b(t));
          }
        },
        getSnapshot: function () {
          return (
            (f = i),
            (g = u),
            {
              counter_epoch: i,
              invalid_sample_count: d,
              measurement_method: "browser_processing_duration",
              missing_measurement_frame_count: m,
              observed_frame_count: u,
              overflow_frame_count: p,
              representations: Array.from(h.values(), function (e) {
                return babelHelpers.extends({}, e);
              }),
              schema_version: 1,
              snapshot_sequence: ++l,
              support_status: _,
              unattributed_frame_count: c,
            }
          );
        },
        reset: function () {
          o != null ? v() : C();
        },
        stop: S,
      };
    }
    i.createVideoPlayerEncodingCostTelemetry = l;
  },
  66,
);
