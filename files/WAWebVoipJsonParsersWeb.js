__d(
  "WAWebVoipJsonParsersWeb",
  [
    "WACamelCase",
    "WALogger",
    "WATimeUtils",
    "WAWebUserPrefsMeUser",
    "WAWebVoipJsonParserNative",
    "WAWebVoipJsonParserPayloads",
    "WAWebVoipWaCallEnums",
    "WAWebWamCodegenUtils",
    "WAWebWidFactory",
    "compactMap",
    "err",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 0,
      d = {
        parseCallStateChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid call ending data");
          var n = d.parseCallInfo(JSON.stringify(e.call_info));
          return { CallState: n.callState, call_info: n };
        },
        parseUpdateJoinableCallLogData: function (t) {
          var e,
            n,
            a = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (a == null)
            throw r("err")("Invalid update joinable call log data");
          var i = a.call_summary;
          return {
            CallId: a.call_id,
            CallCreatorDeviceJid: _(a.call_creator_device_jid),
            Type: a.type,
            InitialPeerJid: _(a.initial_peer_jid),
            GroupJid: _(a.group_jid),
            IsCaller: a.is_caller,
            VideoEnabled: a.video_enabled,
            IsFromOffer: a.is_from_offer,
            CallLinkToken: a.link_token,
            ScheduledId: a.scheduled_id,
            IsLightweight: a.is_lightweight,
            NumParticipants: a.num_participants,
            CallParticipantInfos: a.participant_infos.map(function (e) {
              return { jid: p(e.jid), result: e.state };
            }),
            CallSummary:
              i != null
                ? {
                    CallCreatorJid: _(i.call_creator_jid),
                    CallId: i.call_id,
                    IsVideo: i.is_video_call,
                    CallDuration: i.call_duration,
                    UsersCount: i.users_count,
                    Users: i.users.map(function (e) {
                      return {
                        Jid: _(e.jid),
                        PhoneJid: _(e.phone_jid),
                        State: e.state,
                      };
                    }),
                  }
                : null,
            Result: a.call_log_result,
            LinkCreatorJid: _(a.link_creator_jid),
            SelfOtherDeviceConnected:
              (e = a.self_other_device_connected) != null ? e : !1,
            OfferEpochTime: (n = a.offer_epoch_time_ms) != null ? n : 0,
          };
        },
        parseRejectedDecryptionFailureData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid call ending data");
          return babelHelpers.extends({}, e, {
            PeerDeviceJid: p(e.PeerDeviceJid),
          });
        },
        parseSyncDeviceData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null || e.sync_devices == null)
            throw r("err")("Invalid sync device data");
          if (!Array.isArray(e.sync_devices))
            throw r("err")("Invalid sync device data: expected array");
          return e.sync_devices.map(function (e) {
            return { PHash: e.phash, UserJid: p(e.user_jid) };
          });
        },
        parseCallEndingData: function (t) {
          var e,
            n,
            a = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (a == null) throw r("err")("Invalid call ending data");
          return {
            peerJid: p(a.peer_jid),
            fromMe: a.from_me,
            groupJid: _(a.group_jid),
            callId: a.call_id,
            callLinkToken: a.call_link_token,
            isCallLink: a.is_call_link,
            scheduledId: a.scheduled_id,
            startTime: o("WATimeUtils").castToUnixTime(a.start_time),
            connectTime:
              a.connect_time != null ? Math.floor(a.connect_time / 1e3) : null,
            endTime: o("WATimeUtils").castToUnixTime(a.end_time),
            result: a.result,
            videoCall: a.video_call,
            participantEntries: a.participant_entries.map(function (e) {
              return { jid: p(e.jid), result: e.result };
            }),
            callCreatorJid: _(a.call_creator_jid),
            initialPeerJid: _(a.initial_peer_jid),
            timeSeriesPath: a.time_series_path,
            userRatingInterval: (e = a.user_rating_interval) != null ? e : -1,
            terminatedByDeviceSwitch:
              (n = a.terminated_by_device_switch) != null ? n : !1,
            bytesSent: a.bytes_sent,
            bytesReceived: a.bytes_received,
          };
        },
        parseCallMissedData: function (t) {
          var e,
            n,
            a,
            i,
            l,
            s,
            u = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (u == null) throw r("err")("Invalid call missed data");
          var c =
            (e = u.group_info) != null && e.participants
              ? u.group_info.participants.map(function (e) {
                  return { jid: p(e.user_jid), result: e.state };
                })
              : (n =
                    (a = u.call_participant_infos) == null
                      ? void 0
                      : a.map(function (e) {
                          return { jid: p(e.jid), result: e.state };
                        })) != null
                ? n
                : [];
          return {
            CallId: u.call_id,
            PeerUserJid: _(u.peer_user_jid),
            GroupJid: _(u.group_jid),
            IsVideoCall: u.is_video_call,
            GroupInfo: u.group_info
              ? {
                  Participants:
                    (i = u.group_info.participants) == null
                      ? void 0
                      : i.map(function (e) {
                          return { UserJid: p(e.user_jid), State: e.state };
                        }),
                }
              : null,
            CallParticipantInfos: c,
            TimeElapsedSinceCallOffer:
              (l = u.time_elapsed_since_call_offer) != null ? l : 0,
            SilenceReason: (s = u.silence_reason) != null ? s : 0,
            CallTermReason: u.call_term_reason,
            ShouldUploadFieldStats: u.should_upload_field_stats,
            MissedCallFieldStats: u.missed_call_field_stats,
          };
        },
        parseUpdate1to1CallLogData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid update 1to1 call log data");
          return {
            CallId: e.call_id,
            Result: e.result,
            PeerJid: p(e.peer_jid),
          };
        },
        parseGroupInfoChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid group info changed data");
          var n = null;
          return (
            e.participants != null &&
              (n = e.participants.map(function (e) {
                var t,
                  n,
                  r,
                  o =
                    (t = (n = e.push_name) != null ? n : e.guest_name) != null
                      ? t
                      : null;
                return {
                  participant: p(e.jid),
                  outcome: e.state,
                  videoState: e.video_state,
                  isMuted: e.is_muted,
                  pushName: o,
                  accountKind: (r = e.account_kind) != null ? r : null,
                  guestName: o,
                };
              })),
            { CallId: e.call_id, CallParticipants: n }
          );
        },
        parseSpeakerStatusChangedData: function (t) {
          var e,
            n,
            a = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (a == null) throw r("err")("Invalid speaker status changed data");
          return {
            CallId: a.call_id,
            Participants:
              (e =
                (n = a.participants) == null
                  ? void 0
                  : n.map(function (e) {
                      return { Jid: p(e.jid), AudioLevel: e.audio_level };
                    })) != null
                ? e
                : [],
          };
        },
        parseRelayListUpdateData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid relay list update data");
          return {
            event_type: e.event_type,
            num_relays: e.num_relays,
            relays: e.relays,
            relay_key: e.relay_key,
            relay_tokens: e.relay_tokens,
            auth_tokens: e.auth_tokens,
            enable_edgeray_dtls_active_mode: e.enable_edgeray_dtls_active_mode,
            enable_web_relay_connection_stagger:
              e.enable_web_relay_connection_stagger,
          };
        },
        parseFieldstatsData: function (n) {
          var t = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(n);
          if (t == null) throw r("err")("Invalid field stats data");
          if (t.call_ended_stats != null) {
            var a = Object.entries(t.call_ended_stats),
              i = Object.fromEntries(
                r("compactMap")(a, function (t) {
                  var n = t[0],
                    a = t[1],
                    i =
                      n === "abtest_bucket"
                        ? "callTestBucket"
                        : r("WACamelCase")(n, {
                            treatNumbersAsWordBoundaries: !1,
                          });
                  if (i == null) return null;
                  try {
                    var l = o("WAWebWamCodegenUtils").metrics.getEvent(
                      "Call",
                      i,
                    );
                    return l.type === "boolean" ? [i, !!a] : [i, a];
                  } catch (t) {
                    return (
                      o("WALogger").ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: fieldstats ready: metric undefined for ",
                            "",
                          ])),
                        i,
                      ),
                      null
                    );
                  }
                }),
              );
            return {
              eventType: o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType
                .Call,
              stats: i,
              uploadInRealtime: t.upload_in_realtime,
              isLastFieldStatsReport: t.is_last_field_stats_report,
            };
          }
          if (t.joinable_call_stats != null) {
            var l = Object.entries(t.joinable_call_stats),
              u = Object.fromEntries(
                r("compactMap")(l, function (e) {
                  var t = e[0],
                    n = e[1],
                    a = r("WACamelCase")(t, {
                      treatNumbersAsWordBoundaries: !1,
                    });
                  try {
                    var i = o("WAWebWamCodegenUtils").metrics.getEvent(
                      "JoinableCall",
                      a,
                    );
                    return i.type === "boolean" ? [a, !!n] : [a, n];
                  } catch (e) {
                    return (
                      o("WALogger").WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: fieldstats ready: metric undefined for ",
                            "",
                          ])),
                        a,
                      ),
                      null
                    );
                  }
                }),
              );
            return {
              eventType: o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType
                .JoinableCall,
              stats: u,
              uploadInRealtime: t.upload_in_realtime,
              isLastFieldStatsReport: t.is_last_field_stats_report,
            };
          }
          throw r("err")("Invalid field stats data: no stats object found");
        },
        parseVideoStateChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid video state changed data");
          var n = e.is_self;
          if (n == null && e.jid != null) {
            var a = _(e.jid);
            n = a ? o("WAWebUserPrefsMeUser").isMeAccount(a) : void 0;
          }
          return {
            videoState: e.video_state,
            isSelf: n,
            userJid: e.jid ? _(e.jid) : null,
            callMediaStateChanged: e.call_media_state_changed,
          };
        },
        parsePeerVideoPermissionChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null)
            throw r("err")("Invalid peer video permission changed data");
          return {
            isBannerVisible: e.is_banner_visible,
            jid: r("nullthrows")(_(e.jid)),
            videoState: e.video_state,
          };
        },
        parseCallRejectReceivedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid call reject received data");
          return {
            callId: e.call_id,
            peerUserJid: p(e.peer_user_jid),
            reason: e.reason,
          };
        },
        parseCallFatalData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid call fatal data");
          return { reasonCode: e.reason_code };
        },
        parseRelayBindsFailedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid relay binds failed data");
          return { selfBadAsn: e.self_bad_asn };
        },
        parseAudioDriverRestartData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid audio driver restart data");
          return {
            reason: e.reason,
            audioRestartCount: e.audio_restart_count,
            audioRestartBeforeFallbackCount:
              e.audio_restart_before_fallback_count,
            isDueToSilenceDetected: e.is_due_to_silence_detected,
          };
        },
        parseCallInfo: function (t) {
          var e,
            n,
            a,
            i,
            l,
            s = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (s == null) throw r("err")("Invalid call info data");
          return {
            callState: s.call_state,
            callId: s.call_id,
            globalCallId: s.global_call_id,
            relayCallUuid: s.relay_call_uuid,
            selfParticipantUuid: s.self_participant_uuid,
            peerJid: _(s.peer_jid),
            initialPeerJid: _(s.initial_peer_jid),
            creatorJid: _(s.creator_jid),
            creatorDeviceJid: _(s.creator_device_jid),
            isCaller: s.is_caller,
            callDuration: s.call_duration,
            callActiveDuration: s.call_active_duration,
            audioDuration: s.audio_duration,
            videoDuration: s.video_duration,
            callEnding: s.call_ending,
            callEndedByMe: s.call_ended_by_me,
            callResult: o(
              "WAWebVoipWaCallEnums",
            ).getCallLogResultFromWamCallResult(s.call_result),
            callSetupErrorType: s.call_setup_error_type,
            bytesSent: s.bytes_sent,
            bytesReceived: s.bytes_received,
            videoEnabledAtCallStart: s.video_enabled_at_call_start,
            videoEnabled: s.video_enabled,
            videoCaptureStarted: s.video_capture_started,
            videoPreviewStarted: s.video_preview_started,
            avAutoAcceptEnabled: s.av_auto_accept_enabled,
            avDowngradeEnabled: s.av_downgrade_enabled,
            groupAvUpgradable: s.group_av_upgradable,
            selfCameraFrontFacing: s.self_camera_front_facing,
            aecMode: s.aec_mode,
            isGroupCall: s.is_group_call,
            isUpgradedGroupCallBeforeConnected:
              s.is_upgraded_group_call_before_connected,
            enableGroupCall: s.enable_group_call,
            isGroupCallCreatedOnServer: s.is_group_call_created_on_server,
            isJoinableGroupCall: s.is_joinable_group_call,
            initialGroupTransactionId: s.initial_group_transaction_id,
            connectedLimit: s.connected_limit,
            participantCount: s.participant_count,
            participants: s.participants.map(f),
            canInviteNewParticipant: s.can_invite_new_participant,
            canSwitchAudioVideo: s.can_switch_audio_video,
            rotateVideo: s.rotate_video,
            callWaitingInfo: {
              hasWaitingCall: s.call_waiting_info.type !== 0,
              waitingCallId: s.call_waiting_info.call_id || null,
              waitingPeerJid: _(
                (e = s.call_waiting_info.peer_jids) == null ? void 0 : e[0],
              ),
              waitingGroupJid: _(s.call_waiting_info.group_jid),
              waitingIsVideo: s.call_waiting_info.video_enabled,
            },
            groupJid: _(s.group_jid),
            linkToken: (n = s.link_token) != null ? n : "",
            scheduledId: s.scheduled_id,
            isLightweight: s.is_lightweight,
            isPhashBased: s.is_phash_based,
            phash: s.phash,
            canRingAll: s.can_ring_all,
            offerEpochTimeMs: s.offer_epoch_time_ms,
            isBcall: s.is_bcall,
            isBcallBroadcaster: s.is_bcall_broadcaster,
            isBotCall: s.is_bot_call,
            isBotGroupCall: s.is_bot_group_call,
            isNotE2ee: s.is_not_e2ee,
            vcExtendable: s.vc_extendable,
            isDualStreamSsEnabled: s.is_dual_stream_ss_enabled,
            isWaitingRoomEnabled: s.is_waiting_room_enabled,
            isWaitingRoomAdmin: s.is_waiting_room_admin,
            waitingRoomFilter: (a = s.waiting_room_filter) != null ? a : null,
            isInWaitingRoom: s.is_in_waiting_room,
            waitingRoomUsersCount:
              (i = s.waiting_room_users_count) != null ? i : 0,
            waitingRoomUsers: ((l = s.waiting_room_users) != null ? l : []).map(
              function (e) {
                return p(e.jid);
              },
            ),
          };
        },
        parseReactionStateChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid reaction state changed data");
          return {
            jid: p(e.jid),
            callReaction: e.call_reaction,
            reactionState: e.reaction_state,
          };
        },
        parseScreenShareStateChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null)
            throw r("err")("Invalid screen share state changed data");
          return {
            state: e.state,
            reason: e.reason,
            sharer_version: e.sharer_version,
            sharer_jid: p(e.screen_sharer_jid),
          };
        },
        parseRxTrafficStateForPeerChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null)
            throw r("err")("Invalid rx traffic state for peer changed data");
          return {
            jid: p(e.jid),
            isStateOn: e.is_state_on,
            reconnectingOption: e.reconnecting_option,
          };
        },
        parseNetHealthStatusChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null)
            throw r("err")("Invalid net health status changed data");
          return {
            currentState: e.current_state,
            previousState: e.previous_state,
            shouldSoundAlert: e.should_sound_alert,
            shouldSendPoorBanner: e.should_send_poor_banner,
            shouldSendNoNetworkBanner: e.should_send_no_network_banner,
            enableSubMessage: e.enable_sub_message,
            maxBannerDuration: e.max_banner_duration,
          };
        },
        parseCallLinkStateChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid call link state changed data");
          return {
            callLinkState: e.call_link_state,
            oldCallLinkState: e.old_call_link_state,
            creatorJid: _(e.creator_jid),
            isEventLink: e.is_event_link,
            linkToken: e.link_token,
            videoEnabled: e.video_enabled,
            videoMuted: e.video_muted,
            self: f(e.self),
          };
        },
        parseRaiseHandStateChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null)
            throw r("err")("Invalid raise hand state changed data");
          return { jid: p(e.jid), isHandRaised: e.is_hand_raised };
        },
        parseCallOfferNackedData: function (t) {
          var e,
            n,
            a = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (
            a == null ||
            a.errors == null ||
            (a.nack_code != null && typeof a.nack_code != "number") ||
            (a.is_fatal_nack != null && typeof a.is_fatal_nack != "boolean")
          )
            throw r("err")("Invalid call offer nacked data");
          return {
            errors: a.errors.map(function (e) {
              return { errorCode: e.error_code, errorJid: _(e.error_jid) };
            }),
            nackCode: (e = a.nack_code) != null ? e : c,
            isFatalNack: (n = a.is_fatal_nack) != null ? n : !1,
          };
        },
        parseCallLinkNackedData: function (t) {
          var e,
            n = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          return {
            nackCode: (e = n == null ? void 0 : n.nack_code) != null ? e : 0,
          };
        },
        parseUserRemovedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid user removed data");
          return {
            removeeJid: o("WAWebWidFactory").createWid(e.removee_jid.raw_jid),
            removerJid:
              e.remover_jid != null
                ? o("WAWebWidFactory").createWid(e.remover_jid.raw_jid)
                : null,
          };
        },
        parseEncodeTargetFpsChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null)
            throw r("err")("Invalid encode target FPS changed data");
          return { targetFps: e.target_fps };
        },
        parseEncodeParamsChangedData: function (t) {
          var e,
            n,
            a = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (a == null) throw r("err")("Invalid encode params changed data");
          return {
            streamId: (e = a.stream_id) != null ? e : 0,
            targetFps: a.target_fps,
            targetBitrateBps: a.target_bitrate_bps,
            targetWidth: a.target_width,
            targetHeight: a.target_height,
            requestKeyframe: a.request_keyframe,
            isScreenShare: (n = a.is_screen_share) != null ? n : !1,
          };
        },
        parseP2PTransportUpdateData: function (t) {
          var e,
            n = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (n == null) throw r("err")("Invalid P2P transport update data");
          return {
            ice_ufrag: n.ice_ufrag,
            ice_pwd: n.ice_pwd,
            cert_algorithm: n.cert_algorithm,
            cert_fingerprint: n.cert_fingerprint,
            candidates: ((e = n.candidates) != null ? e : []).map(function (e) {
              return { ip: e.ip, port: e.port, priority: e.priority };
            }),
          };
        },
        parseGroupCallReminderData: function (t) {
          var e,
            n,
            a,
            i,
            l = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (l == null) throw r("err")("Invalid group call reminder data");
          return {
            reminderType: l.reminder_type,
            callId: l.call_id,
            callCreatorDeviceJid: _(l.call_creator_device_jid),
            isVideoCall: l.is_video_call,
            linkToken: (e = l.link_token) != null ? e : null,
            participants: ((n = l.participants) != null ? n : []).map(
              function (e) {
                return { jid: p(e.jid), state: e.state };
              },
            ),
            waitingRoomUsers: ((a = l.waiting_room_users) != null ? a : []).map(
              function (e) {
                return p(e.jid);
              },
            ),
            waitingRoomUsersCount:
              (i = l.waiting_room_users_count) != null ? i : 0,
          };
        },
        parseVoiceChatWaveReceivedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null)
            throw r("err")("Invalid voice chat wave received data");
          return {
            callId: e.call_id,
            senderWid: _(e.peer_user_jid),
            groupJid: _(e.group_jid),
            silenceReason: e.silence_reason,
            isFirstWave: e.is_first_wave,
          };
        },
      },
      m = d;
    function p(e) {
      return r("nullthrows")(_(e), "createVoipJid: received unexpected null");
    }
    function _(e) {
      if (!e || r("isStringNullOrEmpty")(e.raw_jid)) return null;
      try {
        return o("WAWebWidFactory").createWid(e.raw_jid);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "createVoipJid: failed to create wid from raw jid",
                ])),
            )
            .sendLogs("create-voip-jid-failed"),
          null
        );
      }
    }
    function f(e) {
      var t,
        n,
        r,
        o =
          (t = (n = e.push_name) != null ? n : e.guest_name) != null ? t : null;
      return {
        jid: p(e.jid),
        state: e.state,
        orderId: e.order_id,
        isSelf: e.is_self,
        isMuted: e.is_muted,
        muteRequested: e.mute_requested,
        isInterrupted: e.is_interrupted,
        arePeersInterrupted: e.are_peers_interrupted,
        isBackgrounded: e.is_backgrounded,
        videoRenderStarted: e.video_render_started,
        videoDecodeStarted: e.video_decode_started,
        videoDecodePaused: e.video_decode_paused,
        videoCodecPaused: e.video_codec_paused,
        videoState: e.video_state,
        videoRenderingState: e.video_rendering_state,
        videoWidth: e.video_width,
        videoHeight: e.video_height,
        videoOrientation: e.video_orientation,
        deviceOrientation: e.device_orientation,
        devicePlatform: e.device_platform,
        isAudioVideoSwitchEnabled: e.is_audio_video_switch_enabled,
        isAudioVideoSwitchSupported: e.is_audio_video_switch_supported,
        callGridRank: e.call_grid_rank,
        speakerRank: e.speaker_rank,
        isInvitedBySelf: e.is_invited_by_self,
        isCallOfferCancelled: e.is_call_offer_cancelled,
        isRerungBySelf: e.is_rerung_by_self,
        rxConnecting: e.rx_connecting,
        rxTimedout: e.rx_timedout,
        rxAudioPacketCount: e.rx_audio_packet_count,
        speakerStatus: e.speaker_status,
        isMuteable: e.is_muteable,
        isRxSubscribed: e.is_rx_subscribed,
        isOnScreen: e.is_on_screen,
        isScreenShared: e.is_screen_shared,
        updateScreenSharePending: e.update_screen_share_pending,
        sharerVersion: e.sharer_version,
        callLinkIsRemovable: e.call_link_is_removable,
        removeRequested: e.remove_requested,
        networkHealthStatus: e.network_health_status,
        isDominantSpeaker: e.is_dominant_speaker,
        callReaction: e.call_reaction,
        isHandRaised: e.is_hand_raised,
        isPinnedInViewBySelf: e.is_pinned_in_view_by_self,
        audioLevel: e.audio_level,
        pushName: o,
        accountKind: (r = e.account_kind) != null ? r : null,
        guestName: o,
        userType: e.type,
      };
    }
    l.default = m;
  },
  98,
);
