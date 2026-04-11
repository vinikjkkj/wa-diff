__d(
  "WAWebVoipJsonParsersWeb",
  [
    "WACamelCase",
    "WALogger",
    "WATimeUtils",
    "WAWebUserPrefsMeUser",
    "WAWebVoipJsonParserNative",
    "WAWebVoipJsonParserPayloads",
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
      c = {
        parseCallStateChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid call ending data");
          var n = c.parseCallInfo(JSON.stringify(e.call_info));
          return { CallState: n.callState, call_info: n };
        },
        parseUpdateJoinableCallLogData: function (t) {
          var e,
            n = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (n == null)
            throw r("err")("Invalid update joinable call log data");
          var a = n.call_summary;
          return {
            CallId: n.call_id,
            CallCreatorDeviceJid: p(n.call_creator_device_jid),
            Type: n.type,
            InitialPeerJid: p(n.initial_peer_jid),
            GroupJid: p(n.group_jid),
            IsCaller: n.is_caller,
            VideoEnabled: n.video_enabled,
            IsFromOffer: n.is_from_offer,
            CallLinkToken: n.link_token,
            ScheduledId: n.scheduled_id,
            IsLightweight: n.is_lightweight,
            NumParticipants: n.num_participants,
            CallParticipantInfos: n.participant_infos.map(function (e) {
              return { jid: m(e.jid), result: e.state };
            }),
            CallSummary:
              a != null
                ? {
                    CallCreatorJid: p(a.call_creator_jid),
                    CallId: a.call_id,
                    IsVideo: a.is_video_call,
                    CallDuration: a.call_duration,
                    UsersCount: a.users_count,
                    Users: a.users.map(function (e) {
                      return {
                        Jid: p(e.jid),
                        PhoneJid: p(e.phone_jid),
                        State: e.state,
                      };
                    }),
                  }
                : null,
            Result: n.call_log_result,
            LinkCreatorJid: p(n.link_creator_jid),
            SelfOtherDeviceConnected:
              (e = n.self_other_device_connected) != null ? e : !1,
          };
        },
        parseRejectedDecryptionFailureData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid call ending data");
          return babelHelpers.extends({}, e, {
            PeerDeviceJid: m(e.PeerDeviceJid),
          });
        },
        parseSyncDeviceData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null || e.sync_devices == null)
            throw r("err")("Invalid sync device data");
          if (!Array.isArray(e.sync_devices))
            throw r("err")("Invalid sync device data: expected array");
          return e.sync_devices.map(function (e) {
            return {
              PHash: e.phash,
              UserRawJid: o("WAWebWidFactory").createWid(e.user_raw_jid),
            };
          });
        },
        parseCallEndingData: function (t) {
          var e,
            n,
            a = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (a == null) throw r("err")("Invalid call ending data");
          return {
            peerJid: m(a.peer_jid),
            fromMe: a.from_me,
            groupJid: p(a.group_jid),
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
              return { jid: m(e.jid), result: e.result };
            }),
            callCreatorJid: p(a.call_creator_jid),
            initialPeerJid: p(a.initial_peer_jid),
            timeSeriesPath: a.time_series_path,
            userRatingInterval: (e = a.user_rating_interval) != null ? e : -1,
            terminatedByDeviceSwitch:
              (n = a.terminated_by_device_switch) != null ? n : !1,
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
                  return { jid: m(e.user_jid), result: e.state };
                })
              : (n =
                    (a = u.call_participant_infos) == null
                      ? void 0
                      : a.map(function (e) {
                          return { jid: m(e.jid), result: e.state };
                        })) != null
                ? n
                : [];
          return {
            CallId: u.call_id,
            PeerUserJid: p(u.peer_user_jid),
            GroupJid: p(u.group_jid),
            IsVideoCall: u.is_video_call,
            GroupInfo: u.group_info
              ? {
                  Participants:
                    (i = u.group_info.participants) == null
                      ? void 0
                      : i.map(function (e) {
                          return { UserJid: m(e.user_jid), State: e.state };
                        }),
                }
              : null,
            CallParticipantInfos: c,
            TimeElapsedSinceCallOffer:
              (l = u.time_elapsed_since_call_offer) != null ? l : 0,
            SilenceReason: (s = u.silence_reason) != null ? s : 0,
          };
        },
        parseUpdate1to1CallLogData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid update 1to1 call log data");
          return {
            CallId: e.call_id,
            Result: e.result,
            PeerJid: m(e.peer_jid),
          };
        },
        parseGroupInfoChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid group info changed data");
          var n = null;
          return (
            e.participants != null &&
              (n = e.participants.map(function (e) {
                var t;
                return {
                  participant: m(e.jid),
                  outcome: e.state,
                  videoState: e.video_state,
                  isMuted: e.is_muted,
                  guestName: (t = e.guest_name) != null ? t : null,
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
                      return { Jid: m(e.jid), AudioLevel: e.audio_level };
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
                        : n === "peer_raw_jid"
                          ? null
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
            };
          }
          throw r("err")("Invalid field stats data: no stats object found");
        },
        parseVideoStateChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid video state changed data");
          var n = e.is_self;
          if (n == null && e.jid != null) {
            var a = p(e.jid);
            n = a ? o("WAWebUserPrefsMeUser").isMeAccount(a) : void 0;
          }
          return {
            videoState: e.video_state,
            isSelf: n,
            userJid: e.jid ? p(e.jid) : null,
            callMediaStateChanged: e.call_media_state_changed,
          };
        },
        parsePeerVideoPermissionChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null)
            throw r("err")("Invalid peer video permission changed data");
          return {
            isBannerVisible: e.is_banner_visible,
            jid: r("nullthrows")(p(e.jid)),
            videoState: e.video_state,
          };
        },
        parseCallRejectReceivedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid call reject received data");
          return {
            callId: e.call_id,
            peerUserJid: m(e.peer_user_jid),
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
            l = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (l == null) throw r("err")("Invalid call info data");
          return {
            callState: l.call_state,
            callId: l.call_id,
            globalCallId: l.global_call_id,
            relayCallUuid: l.relay_call_uuid,
            selfParticipantUuid: l.self_participant_uuid,
            peerJid: p(l.peer_jid),
            initialPeerJid: p(l.initial_peer_jid),
            creatorJid: p(l.creator_jid),
            creatorDeviceJid: p(l.creator_device_jid),
            isCaller: l.is_caller,
            callDuration: l.call_duration,
            callActiveDuration: l.call_active_duration,
            audioDuration: l.audio_duration,
            videoDuration: l.video_duration,
            callEnding: l.call_ending,
            callEndedByMe: l.call_ended_by_me,
            callResult: l.call_result,
            callSetupErrorType: l.call_setup_error_type,
            bytesSent: l.bytes_sent,
            bytesReceived: l.bytes_received,
            videoEnabledAtCallStart: l.video_enabled_at_call_start,
            videoEnabled: l.video_enabled,
            videoCaptureStarted: l.video_capture_started,
            videoPreviewStarted: l.video_preview_started,
            avAutoAcceptEnabled: l.av_auto_accept_enabled,
            avDowngradeEnabled: l.av_downgrade_enabled,
            groupAvUpgradable: l.group_av_upgradable,
            selfCameraFrontFacing: l.self_camera_front_facing,
            aecMode: l.aec_mode,
            isGroupCall: l.is_group_call,
            isUpgradedGroupCallBeforeConnected:
              l.is_upgraded_group_call_before_connected,
            enableGroupCall: l.enable_group_call,
            isGroupCallCreatedOnServer: l.is_group_call_created_on_server,
            isJoinableGroupCall: l.is_joinable_group_call,
            initialGroupTransactionId: l.initial_group_transaction_id,
            connectedLimit: l.connected_limit,
            participantCount: l.participant_count,
            participants: l.participants.map(_),
            canInviteNewParticipant: l.can_invite_new_participant,
            canSwitchAudioVideo: l.can_switch_audio_video,
            rotateVideo: l.rotate_video,
            callWaitingInfo: {
              hasWaitingCall: l.call_waiting_info.type !== 0,
              waitingCallId: l.call_waiting_info.call_id || null,
              waitingPeerJid:
                (e = l.call_waiting_info.peer_raw_jids) != null && e[0]
                  ? p({ raw_jid: l.call_waiting_info.peer_raw_jids[0] })
                  : null,
              waitingGroupJid: p(l.call_waiting_info.group_jid),
              waitingIsVideo: l.call_waiting_info.video_enabled,
            },
            groupJid: p(l.group_jid),
            linkToken: (n = l.link_token) != null ? n : "",
            scheduledId: l.scheduled_id,
            isLightweight: l.is_lightweight,
            isPhashBased: l.is_phash_based,
            phash: l.phash,
            canRingAll: l.can_ring_all,
            offerEpochTimeMs: l.offer_epoch_time_ms,
            isBcall: l.is_bcall,
            isBcallBroadcaster: l.is_bcall_broadcaster,
            isBotCall: l.is_bot_call,
            isBotGroupCall: l.is_bot_group_call,
            isNotE2ee: l.is_not_e2ee,
            vcExtendable: l.vc_extendable,
            isWaitingRoomEnabled: l.is_waiting_room_enabled,
            isWaitingRoomAdmin: l.is_waiting_room_admin,
            isInWaitingRoom: l.is_in_waiting_room,
            waitingRoomUsersCount:
              (a = l.waiting_room_users_count) != null ? a : 0,
            waitingRoomUsers: ((i = l.waiting_room_users) != null ? i : []).map(
              function (e) {
                return m(e.jid);
              },
            ),
          };
        },
        parseReactionStateChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null) throw r("err")("Invalid reaction state changed data");
          return {
            jid: m(e.jid),
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
            sharer_jid: m(e.screen_sharer_jid),
          };
        },
        parseRxTrafficStateForPeerChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null)
            throw r("err")("Invalid rx traffic state for peer changed data");
          return {
            jid: m(e.jid),
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
            creatorJid: p(e.creator_jid),
            isEventLink: e.is_event_link,
            linkToken: e.link_token,
            videoEnabled: e.video_enabled,
            isLidCall: e.is_lid_call,
            self: _(e.self),
          };
        },
        parseRaiseHandStateChangedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null)
            throw r("err")("Invalid raise hand state changed data");
          return { jid: m(e.jid), isHandRaised: e.is_hand_raised };
        },
        parseCallOfferNackedData: function (t) {
          var e = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (e == null || e.errors == null)
            throw r("err")("Invalid call offer nacked data");
          var n =
            e.errors.length > 0 &&
            e.errors.every(function (e) {
              return e.error_code !== 207 && e.error_code !== 0;
            });
          return {
            errors: e.errors.map(function (e) {
              return { errorCode: e.error_code, errorJid: p(e.error_jid) };
            }),
            isCompleteNack: n,
          };
        },
        parseCallLinkNackedData: function (t) {
          var e,
            n = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          return {
            nackCode: (e = n == null ? void 0 : n.nack_code) != null ? e : 0,
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
            n = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
          if (n == null) throw r("err")("Invalid encode params changed data");
          return {
            streamId: (e = n.stream_id) != null ? e : 0,
            targetFps: n.target_fps,
            targetBitrateBps: n.target_bitrate_bps,
            targetWidth: n.target_width,
            targetHeight: n.target_height,
            requestKeyframe: n.request_keyframe,
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
            callCreatorDeviceJid: p(l.call_creator_device_jid),
            isVideoCall: l.is_video_call,
            linkToken: (e = l.link_token) != null ? e : null,
            participants: ((n = l.participants) != null ? n : []).map(
              function (e) {
                return { jid: m(e.jid), state: e.state };
              },
            ),
            waitingRoomUsers: ((a = l.waiting_room_users) != null ? a : []).map(
              function (e) {
                return m(e.jid);
              },
            ),
            waitingRoomUsersCount:
              (i = l.waiting_room_users_count) != null ? i : 0,
          };
        },
      },
      d = c;
    function m(e) {
      return r("nullthrows")(p(e), "createVoipJid: received unexpected null");
    }
    function p(e) {
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
    function _(e) {
      var t;
      return {
        jid: m(e.jid),
        phoneUserJid: p(e.phone_user_jid),
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
        guestName: (t = e.guest_name) != null ? t : null,
      };
    }
    l.default = d;
  },
  98,
);
