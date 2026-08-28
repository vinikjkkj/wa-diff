__d(
  "ZenonMediaStatsSerializer",
  [
    "ZenonCallFalcoEventUtils",
    "ZenonCumulativeMediaStat",
    "ZenonMediaStatsConfig",
    "ZenonRenderedView",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = o("ZenonMediaStatsConfig")).OUTBOUND_AUDIO_STATS_TRACKID,
        e.OUTBOUND_VIDEO_STATS_TRACKID,
        e.OUTBOUND_SCREEN_STATS_TRACKID,
        e.GLOBAL_STATS_TRACKID,
        e.PINNED_AUDIO_STATS_TRACK_INFO.trackId,
        e.PINNED_VIDEO_STATS_TRACK_INFO.trackId,
      ],
      u = 1e3,
      c = 1e4,
      d = { tet: 1e3, tpsd: 1e3 };
    function m(e, t, n, a, i, l, s, u) {
      var c = {
          CoreAudioMetrics: { isstall: "0", voice_detect_pct: [] },
          CoreVideoMetrics: {
            screen: {
              capture_stall: { is_stall: "0" },
              encode_stall: { is_stall: "0" },
              sent_stall: { is_stall: "0" },
            },
            video: {
              capture_stall: { is_stall: "0" },
              encode_stall: { is_stall: "0" },
              sent_stall: { is_stall: "0" },
            },
          },
          DebugAudioMetrics: { NetworkReceive: {} },
          audio: { echo_confidence: {} },
          dataChannelMetrics: {},
          ecv: {
            ecv_neteq_wait_time_ms: "0",
            ecv_plccng_v2: "0",
            ecv_rtt_ms: "0",
          },
          extraInfo: { mediaPacketTimes: n.getFirstPacketTimes() },
          receiver: {},
          receiver_pct: { audio: {} },
          receiver_stalls: {
            screen_recv_stalls: {
              recv_decode_stall: { is_stall: "0" },
              recv_no_bytes_stall: { is_stall: "0" },
              recv_render_stall: { is_stall: "0" },
            },
            video_recv_stalls: {
              recv_decode_stall: { is_stall: "0" },
              recv_no_bytes_stall: { is_stall: "0" },
              recv_render_stall: { is_stall: "0" },
            },
          },
          sender: {},
          sender_pct: { screen: {}, video: {} },
          video: {},
        },
        d = {};
      p(u, c);
      var m = t.get(o("ZenonMediaStatsConfig").OUTBOUND_AUDIO_STATS_TRACKID);
      m != null && (E(m, c.sender), N(m, c.CoreAudioMetrics));
      var g = t.get(o("ZenonMediaStatsConfig").OUTBOUND_SCREEN_STATS_TRACKID);
      g != null &&
        (x(a, c.video, g),
        I(a, c.video, g, d),
        A(c.sender_pct.screen, g, r("ZenonRenderedView").GRID, "screen"));
      var b = t.get(o("ZenonMediaStatsConfig").OUTBOUND_VIDEO_STATS_TRACKID);
      return (
        b != null &&
          (I(a, c.video, b, d),
          A(c.sender_pct.video, b, r("ZenonRenderedView").GRID, "video")),
        (g != null || b != null) && $(c.video, b, g),
        v(t, c),
        _(t, c),
        h(e, t, c, l, s),
        f(t, c, d, a),
        R(t, c, d),
        L(c, d),
        y(c, i),
        C(t, c),
        c
      );
    }
    function p(e, t) {
      e.forEach(function (e) {
        var n = e.label;
        if (n != null) {
          var r;
          t.dataChannelMetrics[n] = {
            bytes_received: (r = o(
              "ZenonCallFalcoEventUtils",
            )).nonNullIntNumber(e.bytesReceived),
            bytes_sent: r.nonNullIntNumber(e.bytesSent),
            label: n,
            messages_received: r.nonNullIntNumber(e.messagesReceived),
            messages_sent: r.nonNullIntNumber(e.messagesSent),
          };
        }
      });
    }
    function _(e, t) {
      e.forEach(function (e) {
        var n = e.localIceCandidateStats,
          r = e.remoteIceCandidateStats;
        (!t.extraInfo.localIceCandidate &&
          n &&
          (t.extraInfo.localIceCandidate = n),
          !t.extraInfo.remoteIceCandidate &&
            r &&
            (t.extraInfo.remoteIceCandidate = r));
      });
    }
    function f(e, t, n, r) {
      e.forEach(function (e, o) {
        !s.includes(o) &&
          e.remote === !0 &&
          (e.contentType === "audio"
            ? (k(e, o, t, n), P(e, n))
            : e.contentType === "video"
              ? (T(r, t.video, e, n), g(e, t.receiver_stalls.video_recv_stalls))
              : e.contentType === "screen" &&
                (D(r, t.video), g(e, t.receiver_stalls.screen_recv_stalls)));
      });
    }
    function g(e, t) {
      var n = e.cumulativeStat,
        r = n.videoDecodeStallDuration,
        o = n.videoDecodeTotalStalls,
        a = n.videoReceiveStallDuration,
        i = n.videoReceiveTotalStalls,
        l = n.videoRenderStallDuration,
        s = n.videoRenderTotalStalls,
        u = e.deltaStat,
        c = u.videoDecodeIsStalled,
        d = u.videoReceiveIsStalled,
        m = u.videoRenderIsStall;
      t &&
        (i && a && w(t == null ? void 0 : t.recv_no_bytes_stall, i, a, d),
        o && r && w(t == null ? void 0 : t.recv_decode_stall, o, r, c),
        e.contentType === "video" &&
          s &&
          l &&
          w(t == null ? void 0 : t.recv_render_stall, s, l, m));
    }
    function h(e, t, n, r, o) {
      t.forEach(function (t, a) {
        if (t.remote === !1) {
          var i,
            l = (i = r.get(a)) != null ? i : e.get(a);
          if (l == null) return;
          (l.enabled === !0 &&
            l.webrtcTrack.readyState === "live" &&
            (l.contentType === "audio"
              ? S(o.audioDevices, l)
              : l.contentType === "video" && S(o.videoDevices, l)),
            o.audioDevices.length > 0 &&
              (n.CoreAudioMetrics.audio_device =
                o.audioDevices[o.audioDevices.length - 1]),
            o.videoDevices.length > 0 &&
              (n.CoreVideoMetrics.video_device =
                o.videoDevices[o.videoDevices.length - 1]));
          return;
        }
      });
    }
    function y(e, t) {
      var n,
        r = (n = t.getStats()) != null ? n : [],
        o = r.some(function (e) {
          return e > 0;
        });
      if (o) {
        var a;
        ((e.video.receiver = (a = e.video.receiver) != null ? a : {}),
          (e.video.receiver.avhist = r));
      }
    }
    function C(e, t) {
      var n = e.get(o("ZenonMediaStatsConfig").OUTBOUND_AUDIO_STATS_TRACKID);
      n && b(n, t);
    }
    function b(e, t) {
      var n = e.deltaStat.audioSendGoldenEchoConfidence;
      if (n) {
        var r = n.getMax();
        t.audio = {
          echo_confidence: { audio_send_echo_confidence: r.toString() },
        };
      }
    }
    function v(e, t) {
      var n = e.get(o("ZenonMediaStatsConfig").OUTBOUND_VIDEO_STATS_TRACKID),
        r = e.get(o("ZenonMediaStatsConfig").OUTBOUND_SCREEN_STATS_TRACKID);
      (n != null && M(n, t.CoreVideoMetrics.video),
        r != null && M(r, t.CoreVideoMetrics.screen));
    }
    function S(e, t) {
      (e.length === 0 || t.label !== e[e.length - 1]) && e.push(t.label);
    }
    function R(e, t, n) {
      n.totalRxLevel != null &&
        n.totalRxLevelCount != null &&
        n.totalRxLevelCount > 0 &&
        (t.CoreAudioMetrics.rx_chan_proc_lvl = o(
          "ZenonCallFalcoEventUtils",
        ).nonNullIntNumber(Math.round(n.totalRxLevel / n.totalRxLevelCount)));
      var r = e.get(o("ZenonMediaStatsConfig").GLOBAL_STATS_TRACKID);
      if (r != null) {
        var a =
            r.cumulativeStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOUDNESS_LEVEL
            ],
          i =
            r.cumulativeStat[
              o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL_COUNT
            ];
        a &&
          i &&
          ((t.receiver.rx_sum_lvl = a.getCurrentValue()),
          (t.receiver.taulc = i.getCurrentValue()));
      }
    }
    function L(e, t) {
      var n = {},
        r = e.receiver,
        a = r.jbd,
        i = r.jbec;
      if (a != null && i != null && i > 0) {
        var l = o("ZenonCallFalcoEventUtils").nonNullIntNumber(
          Math.round(a / i),
        );
        n.neteq = { meanWait: l };
      }
      var s =
          t.maxSpeechExpandRate != null
            ? Math.round(t.maxSpeechExpandRate * c)
            : null,
        u =
          t.minSpeechExpandRate != null
            ? Math.round(t.minSpeechExpandRate * c)
            : null,
        d =
          t.countSpeechExpandRate != null &&
          t.countSpeechExpandRate > 0 &&
          t.sumSpeechExpandRate != null
            ? Math.round((t.sumSpeechExpandRate * c) / t.countSpeechExpandRate)
            : null;
      ((s != null || d != null || u != null) &&
        (n.speech_expand_rate = {
          M: o("ZenonCallFalcoEventUtils").nonNullIntNumber(s),
          avg: o("ZenonCallFalcoEventUtils").nonNullIntNumber(d),
          m: o("ZenonCallFalcoEventUtils").nonNullIntNumber(u),
        }),
        (e.DebugAudioMetrics.NetworkReceive = { jb_nm: n }));
    }
    function E(e, t) {
      var n = e.cumulativeStat,
        r = n.bytesSent,
        a = n.packetsSent,
        i =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.PACKETS_LOST_CORRECTED
          ],
        l = e.deltaStat.currentRoundTripTime,
        s =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOUDNESS_LEVEL
          ],
        c =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL_COUNT
          ],
        d = new Map([
          ["bytes", r],
          ["plost", i],
          ["psent", a],
        ]);
      if (
        (d.forEach(function (e, n) {
          e != null &&
            n !== "codec" &&
            n !== "ice" &&
            n !== "ice_g0" &&
            (t[n] = e.getCurrentValue());
        }),
        r)
      ) {
        var m = r.getElapsedTime();
        m > 0 && (t.ube_avg = Math.round(((r.getDeltaValue() * 8) / m) * u));
      }
      if (l) {
        var p = l.getTotal() * u,
          _ = l.getCount();
        if (_ > 0) {
          var f, g;
          ((t.avgrtt = Math.round(p / _)),
            (t.maxrtt = Math.max(
              (f = t.maxrtt) != null ? f : Number.MIN_SAFE_INTEGER,
              l.getMax() * u,
            )),
            (t.minrtt = Math.min(
              (g = t.minrtt) != null ? g : Number.MAX_SAFE_INTEGER,
              l.getMin() * u,
            )));
        }
      }
      return (
        e.codec != null && e.codec !== "" && (t.codec = { www: e.codec }),
        s &&
          c &&
          ((t.tx_sum_lvl = s.getCurrentValue()),
          (t.taulc = c.getCurrentValue())),
        t
      );
    }
    function k(e, t, n, a) {
      var i = n.receiver;
      e.codec != null &&
        e.codec !== "" &&
        (i.codec == null && (i.codec = {}), (i.codec[t] = e.codec));
      var l = e.cumulativeStat,
        s = l.audioDecodingNormal,
        c = l.audioDecodingPLC,
        d = l.audioDecodingPLCCNG,
        m = l.bytesReceived,
        p = l.concealedSamples,
        _ = l.fecPacketsDiscarded,
        f = l.fecPacketsReceived,
        g = l.insertedSamplesForDeceleration,
        h = l.jitterBufferDelay,
        y = l.jitterBufferEmittedCount,
        C = l.packetsReceived,
        b = l.silentConcealedSamples,
        v = l.totalAudioEnergy,
        S = l.totalSamplesDuration,
        R = l.totalSamplesReceived,
        L =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.PACKETS_LOST_CORRECTED
          ],
        E = e.deltaStat,
        k = E.currentRoundTripTime,
        I = E.jitter;
      if (m) {
        var T = m.getElapsedTime();
        if (T > 0) {
          var D = O(i.dbe_total_bytes, m.getDeltaValue());
          i.dbe_total_bytes = D;
          var x = O(i.dbe_total_time, T);
          ((i.dbe_total_time = x), (i.dbe_avg = Math.round(((D * 8) / x) * u)));
        }
      }
      if (k) {
        var $, P, N, M;
        ((a.sumrtt = (($ = a.sumrtt) != null ? $ : 0) + k.getTotal() * u),
          (a.countrtt = ((P = a.countrtt) != null ? P : 0) + k.getCount()),
          a.sumrtt != null &&
            a.countrtt != null &&
            a.countrtt > 0 &&
            (i.avgrtt = Math.round(a.sumrtt / a.countrtt)),
          (i.maxrtt = Math.max(
            (N = i.maxrtt) != null ? N : Number.MIN_SAFE_INTEGER,
            k.getMax() * u,
          )),
          (i.minrtt = Math.min(
            (M = i.minrtt) != null ? M : Number.MAX_SAFE_INTEGER,
            k.getMin() * u,
          )),
          F(n.receiver_pct.audio, e, r("ZenonRenderedView").GRID, "audio"));
      }
      (h && (i.jbd = O(i.jbd, 1e3 * h.getCurrentValue())),
        v &&
          ((i.taue = O(i.taue, 1e5 * v.getCurrentValue())),
          (i.taut = O(i.taut, v.getElapsedTime()))),
        S && (i.sp_dur = O(i.sp_dur, 1e3 * S.getCurrentValue())));
      var w = new Map([
        ["dec_plc", c],
        ["dec_plc_cng", d],
        ["dec_normal", s],
        ["neteq_calls", R],
        ["decel_cnt", g],
        ["bytes", m],
        ["plost", L],
        ["precv", C],
        ["fecpd", _],
        ["fecpr", f],
        ["jbec", y],
        ["sp_c", p],
        ["sp_dur", S],
        ["sp_r", R],
        ["sp_sc", b],
      ]);
      if (
        (w.forEach(function (e, t) {
          e != null &&
            t !== "codec" &&
            t !== "ice" &&
            t !== "ice_g0" &&
            (i[t] = O(i[t], e.getCurrentValue()));
        }),
        I && C && i.precv != null && i.precv > 0)
      ) {
        var A,
          B = i.precv,
          W = I.getTotal() * C.getCurrentValue();
        ((a.weightedJitterSum =
          ((A = a.weightedJitterSum) != null ? A : 0) + W),
          (i.jitter = Math.round((1e3 * a.weightedJitterSum) / B)));
      }
      return i;
    }
    function I(e, t, n, a) {
      t.ld = Math.round(e.getLocalVideoDuration());
      var i = t.sender || {};
      if (
        ((i.video_blur_dur = Math.round(e.getLocalVideoBlurDuration())),
        n.codec != null && n.codec !== "" && (i.ename = n.codec),
        n.histResScale)
      ) {
        i.histResScale == null && (i.histResScale = new Array(5).fill(0));
        var l = i.histResScale;
        l.forEach(function (e, t) {
          l[t] += n.histResScale[t];
        });
      }
      var s = n.cumulativeStat,
        c = s.bytesSent,
        m = s.captureFrameCount,
        p = s.firCount,
        _ = s.framesEncoded,
        f = s.framesSent,
        g = s.keyFramesEncoded,
        h = s.nackCount,
        y = s.packetsSent,
        C = s.pliCount,
        b = s.simulcast_layer_changes,
        v = s.totalEncodeTime,
        S = s.totalPacketSendDelay,
        R = s.videoConvertedQpSum,
        L = s.videoSumCapturePixel,
        E = s.videoSumPixel,
        k =
          n.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.PACKETS_LOST_CORRECTED
          ],
        I = n.deltaStat,
        T = I.frameHeight,
        D = I.frameWidth,
        x = I.height,
        $ = I.width,
        P = new Map([
          ["enc_bytes", c],
          ["eiframes", m],
          ["eqps", R],
          ["plost", k],
          ["psent", y],
          ["pli", C],
          ["fcsn", f],
          ["fir", p],
          ["tet", v],
          ["tpsd", S],
          ["fcap", m],
          ["frames", _],
          ["kframes", g],
          ["nack", h],
          ["sim_l_chg", b],
          ["ah", T],
          ["aw", D],
          ["ch", x],
          ["cw", $],
        ]);
      if (
        (P.forEach(function (e, t) {
          if (
            e != null &&
            t !== "ename" &&
            t !== "histResScale" &&
            t !== "ehist" &&
            t !== "ss"
          )
            if (e instanceof r("ZenonCumulativeMediaStat")) {
              var n,
                o = (n = d[t]) != null ? n : 1;
              i[t] = O(i[t], e.getCurrentValue() * o);
            } else {
              var a;
              i[t] = Math.round((a = e.getLastAddedValue()) != null ? a : 0);
            }
        }),
        t.ld != null &&
          t.ld > 0 &&
          i.frames != null &&
          i.frames > 0 &&
          (i.efrate = Math.round((i.frames * u) / t.ld)),
        L && i.fcap != null && i.fcap > 0)
      ) {
        var N,
          M = i.fcap;
        ((a.videoSumCapturePixel = O(
          (N = a.videoSumCapturePixel) != null ? N : void 0,
          L.getCurrentValue(),
        )),
          (i.video_sum_capture_pixel = a.videoSumCapturePixel),
          (i.eipxl = Math.round(a.videoSumCapturePixel / M)));
      }
      if (E && i.frames != null && i.frames > 0) {
        var w,
          A = i.frames;
        ((a.videoSumPixel = O(
          (w = a.videoSumPixel) != null ? w : void 0,
          E.getCurrentValue(),
        )),
          (i.video_sum_encoded_pixel = a.videoSumPixel),
          (i.eopxl = Math.round(a.videoSumPixel / A)));
      }
      (n.codecHistory != null &&
        (i.ehist = Object.fromEntries(
          n.codecHistory.map(function (e) {
            var t = e.codec,
              n = e.updateTime;
            return [Math.round(n).toString(), t];
          }),
        )),
        (t.sender = i));
    }
    function T(e, t, n, a) {
      var i, l;
      t.rd = Math.round(e.getRemoteVideoDuration());
      var s = t.receiver,
        u = s === void 0 ? {} : s;
      n.codec != null &&
        n.codec !== "" &&
        n.lastUpdate >
          ((i = a.lastCodecUpdate) != null ? i : Number.MIN_SAFE_INTEGER) &&
        ((u.dname = n.codec), (a.lastCodecUpdate = n.lastUpdate));
      var c = n.cumulativeStat,
        d = c.bytesReceived,
        m = c.firCount,
        p = c.framesDecoded,
        _ = c.framesReceived,
        f = c.jitterBufferDelay,
        g = c.jitterBufferEmittedCount,
        h = c.jitterBufferFramesSentToDecoder,
        y = c.keyFramesDecoded,
        C = c.nackCount,
        b = c.packetsReceived,
        v = c.pliCount,
        S = c.timestamp,
        R = c.totalDecodeTime,
        L = c.videoConvertedQpSum,
        E = c.videoDecodedBytes,
        k = c.videoDecodeTime,
        I = c.videoFreezeCount,
        T = c.videoFreezeDuration,
        D = c.videoFreezeDuration500ms,
        x = c.videoPauseCount,
        $ = c.videoPauseDuration,
        P = c.videoSumPixel,
        N =
          n.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.PACKETS_LOST_CORRECTED
          ],
        M = n.deltaStat,
        w = M.avSync,
        A = M.avSyncAbs,
        F = M.frameHeight,
        B = M.frameWidth;
      if (p) {
        if (n.maxTotalDecodeTime != null) {
          var W;
          u.dec_time = Math.round(
            Math.max(n.maxTotalDecodeTime, (W = u.dec_time) != null ? W : 0),
          );
        }
        var q = O(u.frd, p.getCurrentValue());
        if (q > 0) {
          var U;
          u.frd = (U = u.frd) != null ? U : 0;
        }
        if (P != null && q > 0) {
          var V,
            H =
              ((V = a.aggVideoSumPixel) != null ? V : 0) + P.getCurrentValue();
          ((u.dpxl = Math.round(H / q)),
            (a.aggVideoSumPixel = H),
            (u.agg_video_sum_decoded_pixel = H));
        }
        if (w != null && A != null && q > 0) {
          var G,
            z,
            j =
              ((G = a.weigtedAvSync) != null ? G : 0) +
              w.getAverage() * p.getCurrentValue(),
            K =
              ((z = a.weigtedAvSyncAbs) != null ? z : 0) +
              A.getAverage() * p.getCurrentValue();
          ((u.av = Math.round(j / q)),
            (u.avabs = Math.round(K / q)),
            (a.weigtedAvSync = j),
            (a.weigtedAvSyncAbs = K));
        }
        ((u.frd = q), (u.dec_frame = q));
      }
      if (n.percentStat.videoReceiverQualityScore != null) {
        var Q = n.percentStat.videoReceiverQualityScore.getAvgAndPercentile(
          o("ZenonMediaStatsConfig").PERCENTILES_REQUESTED,
          r("ZenonRenderedView").GRID,
          "video",
        );
        Q != null && Q.avg != null && (u.vqs = { avg: Q.avg });
      }
      if (
        B &&
        F &&
        S &&
        S.getCurrentTime() >
          ((l = a.lastFrameUpdate) != null ? l : Number.MIN_SAFE_INTEGER)
      ) {
        var X, Y;
        ((u.rh = (X = F.getLastAddedValue()) != null ? X : 0),
          (u.rw = (Y = B.getLastAddedValue()) != null ? Y : 0),
          (a.lastFrameUpdate = S.getCurrentTime()));
      }
      (R && (u.tdt = O(u.tdt, 1e3 * R.getCurrentValue())),
        f && (u.jbd = O(u.jbd, 1e3 * f.getCurrentValue())));
      var J = new Map([
        ["recv", d],
        ["qps", L],
        ["plost", N],
        ["precv", b],
        ["pli", v],
        ["pact", x],
        ["padur", $],
        ["jbec", g],
        ["jtasb", _],
        ["jtfrm", h],
        ["jtkey", y],
        ["nack", C],
        ["fir", m],
        ["frcnt", I],
        ["frdur", T],
        ["frdur500", D],
        ["dec_time_all_streams", k],
        ["dec_bytes", E],
      ]);
      (J.forEach(function (e, t) {
        e != null &&
          t !== "dname" &&
          t !== "avhist" &&
          t !== "ss_recv" &&
          t !== "vqs" &&
          (u[t] = O(u[t], e.getCurrentValue()));
      }),
        u.jbd != null &&
          u.jbec != null &&
          u.jbec > 0 &&
          (u.recjbl = Math.round(u.jbd / u.jbec)),
        (t.receiver = u));
    }
    function D(e, t) {
      var n,
        r,
        o = ((n = t.receiver) == null ? void 0 : n.ss_recv) || {};
      ((o.ss_recv_dur = Math.round(e.getRemoteScreenShareDuration())),
        (t.receiver = (r = t.receiver) != null ? r : {}),
        (t.receiver.ss_recv = o));
    }
    function x(e, t, n) {
      var r,
        o,
        a = ((r = t.sender) == null ? void 0 : r.ss) || {};
      a.dur = Math.round(e.getLocalScreenShareDuration());
      var i = n.cumulativeStat,
        l = i.captureFrameCount,
        s = i.framesEncoded,
        u = i.videoBytesSent,
        c = i.videoConvertedQpSum,
        d = i.videoSumCapturePixel,
        m = i.videoSumPixel,
        p = n.deltaStat.availableOutgoingBitrate,
        _ = new Map([
          ["eiframes", l],
          ["eqps", c],
          ["frames", s],
        ]);
      if (
        (_.forEach(function (e, t) {
          e != null && (a[t] = e.getCurrentValue());
        }),
        d != null && a.eiframes != null && a.eiframes > 0)
      ) {
        var f = a.eiframes;
        ((a.video_sum_capture_pixel = d.getCurrentValue()),
          (a.eipxl = Math.round(d.getCurrentValue() / f)));
      }
      if (m != null && a.frames != null && a.frames > 0) {
        var g = a.frames;
        ((a.video_sum_encoded_pixel = m.getCurrentValue()),
          (a.eopxl = Math.round(m.getCurrentValue() / g)));
      }
      if (
        (p && (a.avbw = Math.round(p.getAverage())),
        u && a.dur != null && a.dur > 0)
      ) {
        var h = a.dur;
        a.avbr = Math.round((u.getCurrentValue() * 8) / h);
      }
      ((t.sender = (o = t.sender) != null ? o : {}), (t.sender.ss = a));
    }
    function $(e, t, n) {
      var r,
        a,
        i = o("ZenonMediaStatsConfig").DERIVED_METRICS
          .VIDEO_ACTUAL_ENCODED_BITRATE,
        l = (r = t == null ? void 0 : t.deltaStat) != null ? r : {},
        s = l[i],
        u = (a = n == null ? void 0 : n.deltaStat) != null ? a : {},
        c = u[i],
        d = 0,
        m = 0,
        p = 0,
        _ = 0;
      (s != null && ((d += s.getTotal()), (m += s.getCount())),
        c != null &&
          ((p += c.getTotal()), (_ += c.getCount()), (d += p), (m += _)),
        m !== 0 && (e.bwe = { avg_enc_bitrate: Math.round(d / m) }),
        _ !== 0 &&
          (e.bwe = babelHelpers.extends({}, e.bwe, {
            avg_enc_bitrate_ss: Math.round(p / _),
          })));
    }
    function P(e, t) {
      var n =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL
          ],
        r =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL_COUNT
          ];
      if (n && r) {
        var a, i;
        ((t.totalRxLevel =
          ((a = t.totalRxLevel) != null ? a : 0) + n.getCurrentValue()),
          (t.totalRxLevelCount =
            ((i = t.totalRxLevelCount) != null ? i : 0) + r.getCurrentValue()));
      }
    }
    function N(e, t) {
      var n = e.cumulativeStat,
        r = n.audioDevRecStalls,
        a = n.audioDevStallDuration,
        i = n.audioDevTotalStalls,
        l = e.deltaStat.audioDevIsStalled,
        s = new Map([
          ["astall", i],
          ["sdur", a],
          ["rstall", r],
        ]);
      if (
        (s.forEach(function (e, n) {
          e != null &&
            n !== "audio_device" &&
            n !== "rx_chan_proc_lvl_hist" &&
            n !== "voice_detect_pct" &&
            (t[n] = o("ZenonCallFalcoEventUtils").nonNullIntNumber(
              Math.round(e.getCurrentValue()),
            ));
        }),
        l)
      ) {
        var u;
        t.isstall = o("ZenonCallFalcoEventUtils").nonNullIntNumber(
          (u = l.getLastAddedValue()) != null ? u : 0,
        );
      }
      var c =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOUDNESS_LEVEL
          ],
        d =
          e.cumulativeStat[
            o("ZenonMediaStatsConfig").DERIVED_METRICS.AUDIO_LOG_LEVEL_COUNT
          ];
      d != null &&
        d.getCurrentValue() > 0 &&
        c != null &&
        ((t.captured_lvl = o("ZenonCallFalcoEventUtils").nonNullIntNumber(
          Math.round(c.getCurrentValue() / d.getCurrentValue()),
        )),
        (t.loudness_level = String(c.getCurrentValue())),
        (t.loudness_level_count = String(d.getCurrentValue())));
    }
    function M(e, t) {
      var n = e.cumulativeStat,
        r = n.videoCaptureStallDuration,
        o = n.videoCaptureTotalStalls,
        a = n.videoEncodeStallDuration,
        i = n.videoEncodeTotalStalls,
        l = n.videoSentStallDuration,
        s = n.videoSentTotalStalls,
        u = e.deltaStat,
        c = u.videoCaptureIsStalled,
        d = u.videoEncodeIsStalled,
        m = u.videoSentIsStalled;
      (r && o && w(t.capture_stall, o, r, c),
        i && a && w(t.encode_stall, i, a, d),
        s && l && w(t.sent_stall, s, l, m));
    }
    function w(e, t, n, r) {
      var a = new Map([
        ["nstall", t],
        ["sdur", n],
      ]);
      if (
        (a.forEach(function (t, n) {
          t != null &&
            n !== "video_device" &&
            (e[n] = o("ZenonCallFalcoEventUtils").nonNullIntNumber(
              Math.round(t.getCurrentValue()),
            ));
        }),
        n != null &&
          n.getLastStretchDelta() &&
          (e.last_sdur = o("ZenonCallFalcoEventUtils").nonNullIntNumber(
            Math.round(n.getLastStretchDelta()),
          )),
        r)
      ) {
        var i;
        e.is_stall = o("ZenonCallFalcoEventUtils").nonNullIntNumber(
          (i = r.getLastAddedValue()) != null ? i : 0,
        );
      }
    }
    function A(e, t, n, r) {
      if (e != null) {
        var a = t.percentStat,
          i = a.encodedFrameRate,
          l = a.roundTripTime,
          s = a.videoQP,
          u = a.videoQuality,
          c = new Map([
            ["efr", i],
            ["vqs", u],
            ["vrtt", l],
            ["qp", s],
          ]);
        c.forEach(function (t, a) {
          if (t != null) {
            var i = t.getAvgAndPercentile(
              o("ZenonMediaStatsConfig").PERCENTILES_REQUESTED,
              n,
              r,
            );
            ((e[a] = {}),
              i.avg != null && e[a] != null && (e[a].avg = i.avg),
              i.percentiles != null &&
                e[a] != null &&
                ((e[a].p5 = i.percentiles[0]),
                (e[a].p50 = i.percentiles[1]),
                (e[a].p95 = i.percentiles[2])));
          }
        });
      }
    }
    function F(e, t, n, r) {
      if (e != null) {
        var a = t.percentStat,
          i = a.jitterBufferDelay,
          l = a.roundTripTime,
          s = new Map([
            ["jbd", i],
            ["rtt", l],
          ]);
        s.forEach(function (t, a) {
          if (t != null) {
            var i = t.getAvgAndPercentile(
              o("ZenonMediaStatsConfig").PERCENTILES_REQUESTED,
              n,
              r,
            );
            ((e[a] = {}),
              i.avg != null && e[a] != null && (e[a].avg = i.avg),
              i.percentiles != null &&
                e[a] != null &&
                ((e[a].p5 = i.percentiles[0]),
                (e[a].p50 = i.percentiles[1]),
                (e[a].p95 = i.percentiles[2])));
          }
        });
      }
    }
    function O(e, t) {
      return Math.round(e === void 0 ? t : e + t);
    }
    ((l.getMediaStats = m), (l.addAudioReceiverPercentStats = F));
  },
  98,
);
