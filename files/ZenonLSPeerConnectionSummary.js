__d(
  "ZenonLSPeerConnectionSummary",
  [
    "ZenonCallFalcoEventUtils",
    "ZenonCallInfoManager",
    "ZenonIceStatsParser",
    "ZenonLoggingEventTypes",
    "ZenonMWMessageTypes",
    "ZenonPeerID",
    "gkx",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["deviceID"],
      s,
      u = (function (t) {
        function n(e) {
          var n;
          return (
            (n = t.call(this, e) || this),
            (n.$ZenonLSPeerConnectionSummary$p_1 = {
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
              ecv: {},
              extraInfo: {},
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
            }),
            (n.$ZenonLSPeerConnectionSummary$p_2 = {}),
            (n.$ZenonLSPeerConnectionSummary$p_3 = {}),
            (n.$ZenonLSPeerConnectionSummary$p_5 = -1),
            (n.$ZenonLSPeerConnectionSummary$p_8 = null),
            (n.$ZenonLSPeerConnectionSummary$p_9 = new Map()),
            (n.$ZenonLSPeerConnectionSummary$p_10 = "unknown"),
            (n.$ZenonLSPeerConnectionSummary$p_11 = !1),
            (n.$ZenonLSPeerConnectionSummary$p_6 = (
              s || (s = r("performanceNow"))
            )()),
            (n.$ZenonLSPeerConnectionSummary$p_4 = 0),
            (n.$ZenonLSPeerConnectionSummary$p_7 = null),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$ZenonLSPeerConnectionSummary$p_12 = function () {
            var e,
              t = this,
              n = "",
              r = 0,
              a = 0,
              i = 0,
              l = 0;
            return (
              Object.keys(
                (e =
                  this.$ZenonLSPeerConnectionSummary$p_1.dataChannelMetrics) !=
                  null
                  ? e
                  : {},
              ).forEach(function (e) {
                var o =
                  t.$ZenonLSPeerConnectionSummary$p_1.dataChannelMetrics[e];
                o != null &&
                  ((n +=
                    o.label +
                    ":" +
                    o.bytes_sent +
                    ":" +
                    o.bytes_received +
                    ":" +
                    o.messages_sent +
                    ":" +
                    o.messages_received +
                    ","),
                  (r += Number(o.bytes_sent)),
                  (a += Number(o.bytes_received)),
                  (i += Number(o.messages_sent)),
                  (l += Number(o.messages_received)));
              }),
              {
                data_channel_total_bytes_recv: o(
                  "ZenonCallFalcoEventUtils",
                ).nonNullIntNumber(a),
                data_channel_total_bytes_sent: o(
                  "ZenonCallFalcoEventUtils",
                ).nonNullIntNumber(r),
                data_channel_total_msg_recv: o(
                  "ZenonCallFalcoEventUtils",
                ).nonNullIntNumber(l),
                data_channel_total_msg_sent: o(
                  "ZenonCallFalcoEventUtils",
                ).nonNullIntNumber(i),
                data_channel_type: "SCTP",
                sctp_per_channel_stats_raw: n,
              }
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_13 = function () {
            var e = this.$ZenonLSPeerConnectionSummary$p_1.sender,
              t = e.codec,
              n = t === void 0 ? {} : t,
              r = {
                gen0_ice_sent_host: o(
                  "ZenonCallFalcoEventUtils",
                ).nonNullIntNumber(this.$ZenonLSPeerConnectionSummary$p_2.host),
                gen0_ice_sent_relay: o(
                  "ZenonCallFalcoEventUtils",
                ).nonNullIntNumber(
                  this.$ZenonLSPeerConnectionSummary$p_2.relay,
                ),
                gen0_ice_sent_srflx: o(
                  "ZenonCallFalcoEventUtils",
                ).nonNullIntNumber(
                  this.$ZenonLSPeerConnectionSummary$p_2.srflx,
                ),
              },
              a = n.www;
            return (
              a != null && (r.audio_send_codec = String(a)),
              this.$ZenonLSPeerConnectionSummary$p_14(
                r,
                "audio_send_bytes_sent",
                e.bytes,
              ),
              this.$ZenonLSPeerConnectionSummary$p_14(
                r,
                "audio_send_level_count",
                e.taulc,
              ),
              this.$ZenonLSPeerConnectionSummary$p_14(
                r,
                "audio_send_level_sum",
                e.tx_sum_lvl,
              ),
              this.$ZenonLSPeerConnectionSummary$p_14(
                r,
                "audio_send_packets_sent",
                e.psent,
              ),
              this.$ZenonLSPeerConnectionSummary$p_14(
                r,
                "avg_video_uplink_bandwidth_estimate",
                e.ube_avg,
              ),
              this.$ZenonLSPeerConnectionSummary$p_14(
                r,
                "transport_conn_rtt_avg",
                e.avgrtt,
              ),
              r
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_14 = function (t, n, r) {
            r != null &&
              (t[n] = o("ZenonCallFalcoEventUtils").truncateNumber(r));
          }),
          (a.$ZenonLSPeerConnectionSummary$p_15 = function () {
            var e,
              t,
              n,
              r =
                (e = this.$ZenonLSPeerConnectionSummary$p_1.video.sender) ==
                null
                  ? void 0
                  : e.ss,
              o = (t = r == null ? void 0 : r.frames) != null ? t : 0,
              a = (n = r == null ? void 0 : r.eqps) != null ? n : 0,
              i = o > 0 && a > 0 ? a / o : null,
              l = {};
            return (
              this.$ZenonLSPeerConnectionSummary$p_16(
                l,
                "avg_video_actual_encode_bitrate_ss",
                r == null ? void 0 : r.avbr,
              ),
              this.$ZenonLSPeerConnectionSummary$p_16(
                l,
                "avg_video_uplink_bandwidth_estimate_ss",
                r == null ? void 0 : r.avbw,
              ),
              this.$ZenonLSPeerConnectionSummary$p_16(
                l,
                "video_send_duration_ss",
                r == null ? void 0 : r.dur,
              ),
              this.$ZenonLSPeerConnectionSummary$p_16(
                l,
                "video_send_frames_send_to_encoder_ss",
                r == null ? void 0 : r.eiframes,
              ),
              this.$ZenonLSPeerConnectionSummary$p_16(
                l,
                "video_send_total_input_pixel_ss",
                r == null ? void 0 : r.video_sum_capture_pixel,
              ),
              this.$ZenonLSPeerConnectionSummary$p_16(
                l,
                "video_send_total_output_pixel_ss",
                r == null ? void 0 : r.video_sum_encoded_pixel,
              ),
              this.$ZenonLSPeerConnectionSummary$p_16(
                l,
                "video_send_frames_encoded_ss",
                r == null ? void 0 : r.frames,
              ),
              this.$ZenonLSPeerConnectionSummary$p_16(
                l,
                "video_send_qp_sum_ss",
                i,
              ),
              l
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_16 = function (t, n, r) {
            r != null &&
              (t[n] = o("ZenonCallFalcoEventUtils").truncateNumber(r));
          }),
          (a.$ZenonLSPeerConnectionSummary$p_17 = function () {
            var e = this.$ZenonLSPeerConnectionSummary$p_1.video.bwe,
              t = {};
            return (
              this.$ZenonLSPeerConnectionSummary$p_18(
                t,
                "avg_video_actual_encode_bitrate",
                e == null ? void 0 : e.avg_enc_bitrate,
              ),
              this.$ZenonLSPeerConnectionSummary$p_18(
                t,
                "avg_video_actual_encode_bitrate_ss",
                e == null ? void 0 : e.avg_enc_bitrate_ss,
              ),
              this.$ZenonLSPeerConnectionSummary$p_18(
                t,
                "avg_video_retransmit_bitrate",
                e == null ? void 0 : e.avg_retrans_bitrate,
              ),
              this.$ZenonLSPeerConnectionSummary$p_18(
                t,
                "avg_video_transmit_bitrate",
                e == null ? void 0 : e.avg_trans_bitrate,
              ),
              this.$ZenonLSPeerConnectionSummary$p_18(
                t,
                "avg_video_uplink_bandwidth_estimate",
                e == null ? void 0 : e.avg_send_bw,
              ),
              t
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_18 = function (t, n, r) {
            r != null &&
              (t[n] = o("ZenonCallFalcoEventUtils").truncateNumber(r));
          }),
          (a.$ZenonLSPeerConnectionSummary$p_19 = function () {
            var e,
              t =
                (e = this.$ZenonLSPeerConnectionSummary$p_1.sender_pct.video) ==
                null
                  ? void 0
                  : e.vqs,
              n = {};
            return (
              (t == null ? void 0 : t.avg) != null &&
                (n.video_send_quality_score = o(
                  "ZenonCallFalcoEventUtils",
                ).truncateNumber(t == null ? void 0 : t.avg)),
              n
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_20 = function () {
            var e = this.$ZenonLSPeerConnectionSummary$p_1.video.sender,
              t = { video_send_codec: e == null ? void 0 : e.ename };
            return (
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_recv_firs_sent",
                e == null ? void 0 : e.fir,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_recv_nacks_sent",
                e == null ? void 0 : e.nack,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_recv_plis_sent",
                e == null ? void 0 : e.pli,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_frame_height",
                e == null ? void 0 : e.ah,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_frame_height_input",
                e == null ? void 0 : e.ch,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_frame_width",
                e == null ? void 0 : e.aw,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_frame_width_input",
                e == null ? void 0 : e.cw,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_frames_captured",
                e == null ? void 0 : e.fcap,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_frames_encoded",
                e == null ? void 0 : e.frames,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_frames_sent",
                e == null ? void 0 : e.fcsn,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_frames_send_to_encoder",
                e == null ? void 0 : e.eiframes,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_capture_duration_ms",
                this.$ZenonLSPeerConnectionSummary$p_1.video.ld,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_duration_blur",
                e == null ? void 0 : e.video_blur_dur,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_key_frames_encoded",
                e == null ? void 0 : e.kframes,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_packets_sent",
                e == null ? void 0 : e.psent,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_qp_sum",
                e == null ? void 0 : e.eqps,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_total_input_pixel",
                e == null ? void 0 : e.video_sum_capture_pixel,
              ),
              this.$ZenonLSPeerConnectionSummary$p_21(
                t,
                "video_send_total_output_pixel",
                e == null ? void 0 : e.video_sum_encoded_pixel,
              ),
              t
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_21 = function (t, n, r) {
            r != null &&
              (t[n] = o("ZenonCallFalcoEventUtils").truncateNumber(r));
          }),
          (a.$ZenonLSPeerConnectionSummary$p_22 = function () {
            var e,
              t = this.$ZenonLSPeerConnectionSummary$p_1.video.receiver,
              n = { video_recv_codec: t == null ? void 0 : t.dname };
            (this.$ZenonLSPeerConnectionSummary$p_23(
              n,
              "audio_recv_jitter_buffer_frames_assembled",
              t == null ? void 0 : t.jtasb,
            ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "audio_recv_jitter_buffer_frames_out",
                t == null ? void 0 : t.jtfrm,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "audio_recv_jitter_buffer_keyframes_out",
                t == null ? void 0 : t.jtkey,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_agg_bytes_decoded",
                t == null ? void 0 : t.dec_bytes,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_agg_packets_lost",
                t == null ? void 0 : t.plost,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_agg_packets_recv",
                t == null ? void 0 : t.precv,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_av_sync_abs",
                t == null ? void 0 : t.avabs,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_frame_height",
                t == null ? void 0 : t.rh,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_frame_width",
                t == null ? void 0 : t.rw,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_frames_decoded",
                t == null ? void 0 : t.frd,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_freeze_count",
                t == null ? void 0 : t.frcnt,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_freeze_duration",
                t == null ? void 0 : t.frdur,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_freeze_duration_above_500_ms",
                t == null ? void 0 : t.frdur500,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_freeze_duration_above_500_ms_v2",
                t == null ? void 0 : t.frdur500,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_pause_count",
                t == null ? void 0 : t.pact,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_pause_duration_ms",
                t == null ? void 0 : t.padur,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_qp_sum",
                t == null ? void 0 : t.qps,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_total_pixels_decoded",
                t == null ? void 0 : t.agg_video_sum_decoded_pixel,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_union_decode_time_ms",
                t == null ? void 0 : t.dec_time,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_send_firs_recv",
                t == null ? void 0 : t.fir,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_send_nacks_recv",
                t == null ? void 0 : t.nack,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_send_plis_recv",
                t == null ? void 0 : t.pli,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_weighted_vqs",
                t == null || (e = t.vqs) == null ? void 0 : e.avg,
              ));
            var r = t == null ? void 0 : t.dec_time_all_streams,
              o = t == null ? void 0 : t.dec_frame;
            return (
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_agg_decode_time_ms",
                r,
              ),
              this.$ZenonLSPeerConnectionSummary$p_23(
                n,
                "video_recv_agg_frames_decoded",
                o,
              ),
              r != null &&
                r > 0 &&
                o != null &&
                o > 0 &&
                this.$ZenonLSPeerConnectionSummary$p_23(
                  n,
                  "video_recv_framerate_decoded",
                  (o * 1e3) / r,
                ),
              n
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_24 = function () {
            var e,
              t =
                (e = this.$ZenonLSPeerConnectionSummary$p_1.video.receiver) ==
                null
                  ? void 0
                  : e.ss_recv,
              n = {};
            return (
              this.$ZenonLSPeerConnectionSummary$p_25(
                n,
                "video_recv_duration_ss",
                t == null ? void 0 : t.ss_recv_dur,
              ),
              n
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_25 = function (t, n, r) {
            r != null &&
              (t[n] = o("ZenonCallFalcoEventUtils").truncateNumber(r));
          }),
          (a.$ZenonLSPeerConnectionSummary$p_26 = function () {
            var e,
              t,
              n,
              r =
                (e = this.$ZenonLSPeerConnectionSummary$p_1.receiver_stalls) ==
                  null || (e = e.video_recv_stalls) == null
                  ? void 0
                  : e.recv_no_bytes_stall,
              o =
                (t = this.$ZenonLSPeerConnectionSummary$p_1.receiver_stalls) ==
                  null || (t = t.video_recv_stalls) == null
                  ? void 0
                  : t.recv_decode_stall,
              a =
                (n = this.$ZenonLSPeerConnectionSummary$p_1.receiver_stalls) ==
                  null || (n = n.video_recv_stalls) == null
                  ? void 0
                  : n.recv_render_stall,
              i = {};
            if (r) {
              var l = r.is_stall,
                s = r.sdur,
                u = r.nstall;
              (l != null && (i.video_recv_byte_received_is_stalled = String(l)),
                s != null &&
                  (i.video_recv_byte_received_total_stall_duration_ms =
                    String(s)),
                u != null &&
                  (i.video_recv_byte_received_total_stalls = String(u)));
            }
            if (o) {
              var c = o.is_stall,
                d = o.sdur,
                m = o.nstall;
              (c != null && (i.video_recv_decoder_is_stalled = String(c)),
                d != null &&
                  (i.video_recv_decoder_total_stall_duration_ms = String(d)),
                m != null && (i.video_recv_decoder_total_stalls = String(m)));
            }
            if (a) {
              var p = a.is_stall,
                _ = a.sdur,
                f = a.nstall;
              (p != null && (i.video_render_is_stalled = String(p)),
                _ != null &&
                  (i.video_render_total_stall_duration_ms = String(_)),
                f != null && (i.video_render_total_stalls = String(f)));
            }
            return i;
          }),
          (a.$ZenonLSPeerConnectionSummary$p_27 = function () {
            var e,
              t =
                (e = this.$ZenonLSPeerConnectionSummary$p_1.receiver_stalls) ==
                  null || (e = e.screen_recv_stalls) == null
                  ? void 0
                  : e.recv_decode_stall,
              n = {};
            if (t) {
              var r = t.is_stall,
                o = t.sdur,
                a = t.nstall;
              (r != null &&
                (n.screen_share_recv_decoder_is_stalled = String(r)),
                o != null &&
                  (n.screen_share_recv_decoder_total_stall_duration_ms =
                    String(o)),
                a != null &&
                  (n.screen_share_recv_decoder_total_stalls = String(a)));
            }
            return n;
          }),
          (a.$ZenonLSPeerConnectionSummary$p_23 = function (t, n, r) {
            r != null &&
              (t[n] = o("ZenonCallFalcoEventUtils").truncateNumber(r));
          }),
          (a.$ZenonLSPeerConnectionSummary$p_28 = function () {
            var e,
              t,
              n,
              r =
                this.$ZenonLSPeerConnectionSummary$p_1.DebugAudioMetrics
                  .NetworkReceive.jb_nm,
              o = r == null || (e = r.neteq) == null ? void 0 : e.meanWait,
              a =
                r == null || (t = r.speech_expand_rate) == null
                  ? void 0
                  : t.avg,
              i =
                r == null || (n = r.speech_expand_rate) == null ? void 0 : n.M,
              l = {};
            return (
              o != null && (l.audio_recv_neteq_mean_wait_ms = String(o)),
              a != null &&
                (l.audio_recv_neteq_speech_expand_rate_avg = String(a)),
              i != null &&
                (l.audio_recv_neteq_speech_expand_rate_max = String(i)),
              l
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_29 = function () {
            var e = this.$ZenonLSPeerConnectionSummary$p_1.CoreAudioMetrics,
              t = e.audio_device,
              n = e.isstall,
              r = e.sdur,
              o = e.astall,
              a = {};
            return (
              t != null && (a.audio_device = String(t)),
              n != null && (a.audio_device_is_stalled = String(n)),
              r != null && (a.audio_device_stall_duration = String(r)),
              o != null && (a.audio_device_total_stall = String(o)),
              a
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_30 = function () {
            var e,
              t,
              n,
              r,
              a,
              i,
              l = {};
            if (
              ((e = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                ? void 0
                : e.ecv_neteq_wait_time_ms) != null
            ) {
              var s;
              l.ecv_neteq_wait_time_ms = o(
                "ZenonCallFalcoEventUtils",
              ).truncateNumber(
                Number(
                  (s = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                    ? void 0
                    : s.ecv_neteq_wait_time_ms,
                ),
              );
            }
            if (
              ((t = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                ? void 0
                : t.ecv_rtt_ms) != null
            ) {
              var u;
              l.ecv_rtt_ms = o("ZenonCallFalcoEventUtils").truncateNumber(
                Number(
                  (u = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                    ? void 0
                    : u.ecv_rtt_ms,
                ),
              );
            }
            if (
              ((n = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                ? void 0
                : n.ecv_plccng_v2) != null
            ) {
              var c;
              l.ecv_plccng_v2 = o("ZenonCallFalcoEventUtils").truncateNumber(
                Number(
                  (c = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                    ? void 0
                    : c.ecv_plccng_v2,
                ),
              );
            }
            if (
              ((r = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                ? void 0
                : r.ecv_video_freeze_duration_above_500_ms_v2) != null
            ) {
              var d;
              l.ecv_video_freeze_duration_above_500_ms_v2 = o(
                "ZenonCallFalcoEventUtils",
              ).truncateNumber(
                Number(
                  (d = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                    ? void 0
                    : d.ecv_video_freeze_duration_above_500_ms_v2,
                ),
              );
            }
            if (
              ((a = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                ? void 0
                : a.ecv_av_sync_above_1000_ms) != null
            ) {
              var m;
              l.ecv_av_sync_above_1000_ms = o(
                "ZenonCallFalcoEventUtils",
              ).truncateNumber(
                Number(
                  (m = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                    ? void 0
                    : m.ecv_av_sync_above_1000_ms,
                ),
              );
            }
            if (
              ((i = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                ? void 0
                : i.ecv_decoded_bitrate_duration_sum) != null
            ) {
              var p;
              l.ecv_decoded_bitrate_duration_sum = o(
                "ZenonCallFalcoEventUtils",
              ).truncateNumber(
                Number(
                  (p = this.$ZenonLSPeerConnectionSummary$p_1.ecv) == null
                    ? void 0
                    : p.ecv_decoded_bitrate_duration_sum,
                ),
              );
            }
            return l;
          }),
          (a.$ZenonLSPeerConnectionSummary$p_31 = function () {
            var e =
                this.$ZenonLSPeerConnectionSummary$p_1.CoreVideoMetrics.video
                  .capture_stall,
              t = e.is_stall,
              n = e.last_sdur,
              r = e.sdur,
              o = e.nstall,
              a =
                this.$ZenonLSPeerConnectionSummary$p_1.CoreVideoMetrics.video
                  .encode_stall,
              i = a.is_stall,
              l = a.last_sdur,
              s = a.sdur,
              u = a.nstall,
              c =
                this.$ZenonLSPeerConnectionSummary$p_1.CoreVideoMetrics.video
                  .sent_stall,
              d = c.is_stall,
              m = c.last_sdur,
              p = c.sdur,
              _ = c.nstall,
              f = {};
            return (
              t != null && (f.video_device_capture_is_stalled = String(t)),
              n != null &&
                (f.video_device_capture_last_stall_duration_ms = String(n)),
              r != null &&
                (f.video_device_capture_total_stall_duration_ms = String(r)),
              o != null && (f.video_device_capture_total_stalls = String(o)),
              i != null && (f.video_encode_is_stalled = String(i)),
              l != null && (f.video_encode_last_stall_duration_ms = String(l)),
              s != null && (f.video_encode_total_stall_duration_ms = String(s)),
              u != null && (f.video_encode_total_stalls = String(u)),
              d != null && (f.video_send_is_stalled = String(d)),
              m != null && (f.video_send_last_stall_duration_ms = String(m)),
              p != null && (f.video_send_total_stall_duration_ms = String(p)),
              _ != null && (f.video_send_total_stalls = String(_)),
              f
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_32 = function () {
            var e,
              t,
              n,
              r,
              a,
              i,
              l,
              s,
              u = this.$ZenonLSPeerConnectionSummary$p_1,
              c = u.receiver,
              d = u.receiver_pct,
              m = null;
            c.codec != null && (m = String(Object.values(c.codec).pop()));
            var p = {
              gen0_ice_received_host: o(
                "ZenonCallFalcoEventUtils",
              ).nonNullIntNumber(this.$ZenonLSPeerConnectionSummary$p_3.host),
              gen0_ice_received_relay: o(
                "ZenonCallFalcoEventUtils",
              ).nonNullIntNumber(this.$ZenonLSPeerConnectionSummary$p_3.relay),
              gen0_ice_received_srflx: o(
                "ZenonCallFalcoEventUtils",
              ).nonNullIntNumber(this.$ZenonLSPeerConnectionSummary$p_3.srflx),
            };
            return (
              m != null && (p.audio_recv_codec = String(m)),
              this.$ZenonLSPeerConnectionSummary$p_33(
                p,
                "audio_ctp_latency_avg_us",
                (e = d.audio.jbd) == null ? void 0 : e.avg,
                (t = d.audio.rtt) == null ? void 0 : t.avg,
              ),
              this.$ZenonLSPeerConnectionSummary$p_33(
                p,
                "audio_ctp_latency_p5_us",
                (n = d.audio.jbd) == null ? void 0 : n.p5,
                (r = d.audio.rtt) == null ? void 0 : r.p5,
              ),
              this.$ZenonLSPeerConnectionSummary$p_33(
                p,
                "audio_ctp_latency_p50_us",
                (a = d.audio.jbd) == null ? void 0 : a.p50,
                (i = d.audio.rtt) == null ? void 0 : i.p50,
              ),
              this.$ZenonLSPeerConnectionSummary$p_33(
                p,
                "audio_ctp_latency_p95_us",
                (l = d.audio.jbd) == null ? void 0 : l.p95,
                (s = d.audio.rtt) == null ? void 0 : s.p95,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_bytes_recv",
                c.bytes,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_concealed_samples",
                c.sp_c,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_fec_packets_discarded",
                c.fecpd,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_fec_packets_received",
                c.fecpr,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_jitter",
                c.jitter,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_jitter_buffer_flushes",
                c.dec_pack_flush,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_level_count",
                c.taulc,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_jitter_buffer_emitted_count",
                c.jbec,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_jitter_buffer_delay",
                c.jbd,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_level_sum",
                c.rx_sum_lvl,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_total_samples_duration",
                c.sp_dur,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_total_samples_received",
                c.sp_r,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_neteq_accelerate",
                c.dec_ar,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_neteq_normal",
                c.dec_normal,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_neteq_operations",
                c.neteq_calls,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_neteq_plc",
                c.dec_plc,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_neteq_plccng",
                c.dec_plc_cng,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_neteq_preemptive_expand",
                c.dec_per,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_packets_lost",
                c.plost,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_packets_recv",
                c.precv,
              ),
              this.$ZenonLSPeerConnectionSummary$p_34(
                p,
                "audio_recv_silent_concealed_samples",
                c.sp_sc,
              ),
              p
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_35 = function () {
            var e,
              t = {},
              n =
                (e = this.$ZenonLSPeerConnectionSummary$p_1.video.sender) ==
                null
                  ? void 0
                  : e.ss;
            if (
              (n == null ? void 0 : n.dur) != null &&
              (n == null ? void 0 : n.dur) > 0
            ) {
              var r =
                  this.$ZenonLSPeerConnectionSummary$p_1.CoreVideoMetrics.screen
                    .capture_stall,
                o = r.is_stall,
                a = r.sdur,
                i = r.nstall,
                l =
                  this.$ZenonLSPeerConnectionSummary$p_1.CoreVideoMetrics.screen
                    .encode_stall,
                s = l.is_stall,
                u = l.sdur,
                c = l.nstall,
                d =
                  this.$ZenonLSPeerConnectionSummary$p_1.CoreVideoMetrics.screen
                    .sent_stall,
                m = d.is_stall,
                p = d.sdur,
                _ = d.nstall;
              (o != null && (t.screen_share_capture_is_stalled = String(o)),
                a != null &&
                  (t.screen_share_capture_total_stall_duration_ms = String(a)),
                i != null && (t.screen_share_capture_total_stalls = String(i)),
                s != null && (t.screen_share_encode_is_stalled = String(s)),
                u != null &&
                  (t.screen_share_encode_total_stall_duration_ms = String(u)),
                c != null && (t.screen_share_encode_total_stalls = String(c)),
                m != null && (t.screen_share_send_is_stalled = String(m)),
                p != null &&
                  (t.screen_share_send_total_stall_duration_ms = String(p)),
                _ != null && (t.screen_share_send_total_stalls = String(_)));
            }
            return t;
          }),
          (a.$ZenonLSPeerConnectionSummary$p_34 = function (t, n, r) {
            r != null &&
              (t[n] = o("ZenonCallFalcoEventUtils").truncateNumber(r));
          }),
          (a.$ZenonLSPeerConnectionSummary$p_36 = function () {
            var e,
              t,
              n,
              r,
              o = this.$ZenonLSPeerConnectionSummary$p_1.extraInfo,
              a = o.localIceCandidate,
              i = o.remoteIceCandidate;
            return {
              relay_protocol: a == null ? void 0 : a.relayProtocol,
              transport_conn_type:
                "l:" +
                ((e = a == null ? void 0 : a.candidateType) != null ? e : "") +
                "-" +
                ((t = a == null ? void 0 : a.protocol) != null ? t : "") +
                ";r:" +
                ((n = i == null ? void 0 : i.candidateType) != null ? n : "") +
                "-" +
                ((r = i == null ? void 0 : i.protocol) != null ? r : ""),
            };
          }),
          (a.$ZenonLSPeerConnectionSummary$p_37 = function () {
            var e = this.$ZenonLSPeerConnectionSummary$p_9,
              t = {},
              n = 0,
              a = !1,
              i = 0,
              l = 0;
            if (
              (e.forEach(function (e, t) {
                a !== e &&
                  (e ? n > 0 && (l++, (i += t - n), (n = 0)) : (n = t),
                  (a = e));
              }),
              n > 0)
            ) {
              var s = this.$ZenonLSPeerConnectionSummary$p_5;
              s > -1 && s > n && (l++, (i += s - n));
            }
            if (
              ((t.transport_num_gaps = o(
                "ZenonCallFalcoEventUtils",
              ).nonNullIntNumber(l)),
              (t.transport_total_gap_duration_ms = o(
                "ZenonCallFalcoEventUtils",
              ).nonNullIntNumber(i)),
              this.$ZenonLSPeerConnectionSummary$p_8 != null)
            ) {
              var u = this.$ZenonLSPeerConnectionSummary$p_8,
                c = r("gkx")("15639")
                  ? u && this.$ZenonLSPeerConnectionSummary$p_11
                  : u;
              t.transport_connected = c ? "1" : "0";
            }
            return t;
          }),
          (a.$ZenonLSPeerConnectionSummary$p_38 = function () {
            var e,
              t = {};
            return (
              (t.audio_send_echo_confidence =
                (e = this.$ZenonLSPeerConnectionSummary$p_1.audio) == null ||
                (e = e.echo_confidence) == null
                  ? void 0
                  : e.audio_send_echo_confidence),
              t
            );
          }),
          (a.onCallEnded = function () {
            ((this.$ZenonLSPeerConnectionSummary$p_5 =
              this.$ZenonLSPeerConnectionSummary$p_39()),
              this.$ZenonLSPeerConnectionSummary$p_8 == null &&
                (this.$ZenonLSPeerConnectionSummary$p_8 =
                  this.$ZenonLSPeerConnectionSummary$p_7));
          }),
          (a.$ZenonLSPeerConnectionSummary$p_33 = function (t, n, r, a) {
            var e = 0;
            (r != null && (e += r),
              a != null && (e += a / 2),
              e > 0 &&
                (t[n] = o("ZenonCallFalcoEventUtils").truncateNumber(e)));
          }),
          (a.getPeerConnectionSummary = function () {
            var e = this.getCallInfo(),
              t = e.deviceID,
              n = e.localCallID,
              r = e.peerID,
              a = e.serverInfoData,
              i = e.signalingID;
            return babelHelpers.extends(
              {},
              this.$ZenonLSPeerConnectionSummary$p_12(),
              this.$ZenonLSPeerConnectionSummary$p_29(),
              this.$ZenonLSPeerConnectionSummary$p_13(),
              this.$ZenonLSPeerConnectionSummary$p_32(),
              this.$ZenonLSPeerConnectionSummary$p_15(),
              this.$ZenonLSPeerConnectionSummary$p_17(),
              this.$ZenonLSPeerConnectionSummary$p_19(),
              this.$ZenonLSPeerConnectionSummary$p_20(),
              this.$ZenonLSPeerConnectionSummary$p_22(),
              this.$ZenonLSPeerConnectionSummary$p_24(),
              this.$ZenonLSPeerConnectionSummary$p_28(),
              this.$ZenonLSPeerConnectionSummary$p_37(),
              this.$ZenonLSPeerConnectionSummary$p_30(),
              this.$ZenonLSPeerConnectionSummary$p_31(),
              this.$ZenonLSPeerConnectionSummary$p_35(),
              this.$ZenonLSPeerConnectionSummary$p_26(),
              this.$ZenonLSPeerConnectionSummary$p_27(),
              this.$ZenonLSPeerConnectionSummary$p_36(),
              this.$ZenonLSPeerConnectionSummary$p_38(),
              a != null && { shared_call_id: a },
              {
                connection_logging_id: i,
                local_call_id: n,
                media_path: this.$ZenonLSPeerConnectionSummary$p_10,
                peer_id: o("ZenonPeerID").convertPeerIDForLogging(r),
                protocol: "multiway",
                steady_time_ms: o(
                  "ZenonCallFalcoEventUtils",
                ).performanceNowParsed(),
                system_time_ms: String(Date.now()),
                web_device_id: t,
              },
            );
          }),
          (a.$ZenonLSPeerConnectionSummary$p_39 = function () {
            var e =
              (s || (s = r("performanceNow")))() -
              this.$ZenonLSPeerConnectionSummary$p_6;
            return Math.floor(this.$ZenonLSPeerConnectionSummary$p_4 + e);
          }),
          (a.updateIceInfo = function (t, n) {
            var e =
                n ===
                o("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Send
                  ? this.$ZenonLSPeerConnectionSummary$p_2
                  : this.$ZenonLSPeerConnectionSummary$p_3,
              r = o("ZenonIceStatsParser").extractIceInfo(t);
            r.forEach(function (t) {
              var n = t.gen,
                r = t.type;
              n === 0 && (e[r] == null ? (e[r] = 1) : e[r]++);
            });
          }),
          (a.onPCStateChange = function (t) {
            this.$ZenonLSPeerConnectionSummary$p_7 !== t &&
              ((this.$ZenonLSPeerConnectionSummary$p_7 = t),
              this.$ZenonLSPeerConnectionSummary$p_9.set(
                this.$ZenonLSPeerConnectionSummary$p_39(),
                t,
              ));
          }),
          (a.onRemoteConsentReceived = function () {
            this.$ZenonLSPeerConnectionSummary$p_11 = !0;
          }),
          (a.$ZenonLSPeerConnectionSummary$p_40 = function (t) {
            switch (t) {
              case o("ZenonMWMessageTypes").ZenonMWMediaPath.SFU:
                return "sfu";
              case o("ZenonMWMessageTypes").ZenonMWMediaPath.P2P:
                return "p2p";
              case o("ZenonMWMessageTypes").ZenonMWMediaPath.UNKNOWN:
              default:
                return "unknown";
            }
          }),
          (a.setMediaPath = function (t) {
            this.$ZenonLSPeerConnectionSummary$p_10 =
              this.$ZenonLSPeerConnectionSummary$p_40(t);
          }),
          (a.setMediaStats = function (t) {
            this.$ZenonLSPeerConnectionSummary$p_1 = t;
          }),
          (a.save = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              r = e.signalingID;
            t.storePeerConnectionSummary(n, r, this);
          }),
          (a.delete = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              r = e.signalingID;
            t.removeLocalStorageObjects([{ peerID: n, signalingID: r }]);
          }),
          (a.toJsonString = function () {
            var e = this.getCallInfo(),
              t = e.signalingID,
              n = {
                accumulatedCallTime: this.$ZenonLSPeerConnectionSummary$p_39(),
                callInfo: this.getCallInfo(),
                connectionLoggingId: t,
                endIsConnected: this.$ZenonLSPeerConnectionSummary$p_8,
                gen0IceReceivedCount: this.$ZenonLSPeerConnectionSummary$p_3,
                gen0IceSentCount: this.$ZenonLSPeerConnectionSummary$p_2,
                mediaPath: this.$ZenonLSPeerConnectionSummary$p_10,
                mediaStats: this.$ZenonLSPeerConnectionSummary$p_1,
                pcIsConnected: this.$ZenonLSPeerConnectionSummary$p_7,
                remoteConsentReceived: this.$ZenonLSPeerConnectionSummary$p_11,
              };
            return JSON.stringify(n);
          }),
          (n.fromJsonString = function (r) {
            var t, o, a;
            try {
              a = JSON.parse(r);
            } catch (e) {
              return null;
            }
            var i = a.callInfo,
              l = i.deviceID,
              s = babelHelpers.objectWithoutPropertiesLoose(i, e),
              u = new n(s);
            return (
              (u.$ZenonLSPeerConnectionSummary$p_10 = a.mediaPath),
              (u.$ZenonLSPeerConnectionSummary$p_1 = a.mediaStats),
              (u.$ZenonLSPeerConnectionSummary$p_3 = a.gen0IceReceivedCount),
              (u.$ZenonLSPeerConnectionSummary$p_2 = a.gen0IceSentCount),
              (u.$ZenonLSPeerConnectionSummary$p_7 =
                (t = a.pcIsConnected) != null ? t : null),
              (u.$ZenonLSPeerConnectionSummary$p_8 = a.endIsConnected),
              (u.$ZenonLSPeerConnectionSummary$p_11 =
                (o = a.remoteConsentReceived) != null ? o : !1),
              a.accumulatedCallTime != null &&
                (u.$ZenonLSPeerConnectionSummary$p_4 = a.accumulatedCallTime),
              u
            );
          }),
          n
        );
      })(r("ZenonCallInfoManager"));
    l.default = u;
  },
  98,
);
