__d(
  "WAWebVoipActivityTracker",
  ["$InternalEnum", "WALogger", "WAWebVoipSessionTracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = "call-attempt",
      C = n("$InternalEnum")({
        START_OUTGOING_VIDEO_CALL: "start_outgoing_video_call",
        START_OUTGOING_AUDIO_CALL: "start_outgoing_audio_call",
        START_OUTGOING_VIDEO_GROUP_CALL: "start_outgoing_video_group_call",
        START_OUTGOING_AUDIO_GROUP_CALL: "start_outgoing_audio_group_call",
        CALL_FROM_CHAT_HEADER: "call_from_chat_header",
        CALL_FROM_ICCE_BUBBLE: "call_from_icce_bubble",
        CALL_FROM_CALL_LOG: "call_from_call_log",
        CALL_FROM_CONTACT_INFO: "call_from_contact_info",
        CALL_FROM_GROUP_DROPDOWN: "call_from_group_dropdown",
        RECEIVED_INCOMING_VIDEO_CALL: "received_incoming_video_call",
        RECEIVED_INCOMING_AUDIO_CALL: "received_incoming_audio_call",
        RECEIVED_INCOMING_VIDEO_GROUP_CALL:
          "received_incoming_video_group_call",
        RECEIVED_INCOMING_AUDIO_GROUP_CALL:
          "received_incoming_audio_group_call",
        ACCEPT_INCOMING_CALL: "accept_incoming_call",
        REJECT_INCOMING_CALL: "reject_incoming_call",
        MUTE_AUDIO_BUTTON_CLICK: "mute_audio_button_click",
        MUTE_VIDEO_BUTTON_CLICK: "mute_video_button_click",
        SCREEN_SHARE_BUTTON_CLICK: "screen_share_button_click",
        REACTIONS_BUTTON_CLICK: "reactions_button_click",
        RAISE_HAND_BUTTON_CLICK: "raise_hand_button_click",
        UPDATING_CALL_LOG_ENTRY: "updating_call_log_entry",
        UPDATING_ICCE_BUBBLE: "updating_icce_bubble",
        CALL_STATE_CHANGED: "call_state_changed",
        GET_CALL_INFO: "get_call_info",
        INCOMING_CALL_MODEL_CREATING: "incoming_call_model_creating",
        INCOMING_CALL_MSG_GENERATING: "incoming_call_msg_generating",
        INCOMING_CALL_MSG_READY: "incoming_call_msg_ready",
      }),
      b = n("$InternalEnum")({
        VOIP_WINDOW_LAUNCHED: "voip_window_launched",
        VOIP_WINDOW_RESIZE: "voip_window_resize",
        VOIP_WINDOW_DRAG: "voip_window_drag",
        VOIP_WINDOW_CLOSE_ATTEMPT: "voip_window_close_attempt",
        VOIP_WINDOW_MOVE_TO_POPOUT: "voip_window_move_to_popout",
        VOIP_WINDOW_MOVE_FROM_POPOUT: "voip_window_move_from_popout",
        VOIP_WINDOW_MOVE_TO_DOC_PIP: "voip_window_move_to_doc_pip",
        VOIP_WINDOW_MOVE_FROM_DOC_PIP: "voip_window_move_from_doc_pip",
        TAB_VISIBILITY_HIDDEN: "tab_visibility_hidden",
        TAB_VISIBILITY_VISIBLE: "tab_visibility_visible",
        TAB_FULLSCREEN_ENTER: "tab_fullscreen_enter",
        TAB_FULLSCREEN_EXIT: "tab_fullscreen_exit",
        USER_MUTE_CAMERA: "user_mute_camera",
        USER_UNMUTE_CAMERA: "user_unmute_camera",
        USER_MUTE_MIC: "user_mute_mic",
        USER_UNMUTE_MIC: "user_unmute_mic",
        USER_START_SCREEN_SHARE: "user_start_screen_share",
        USER_STOP_SCREEN_SHARE: "user_stop_screen_share",
        CONTROL_PANEL_END_CALL_CLICK: "control_panel_end_call_click",
        CONTROL_PANEL_ACCEPT_CALL_CLICK: "control_panel_accept_call_click",
        CONTROL_PANEL_REJECT_CALL_CLICK: "control_panel_reject_call_click",
        CONTROL_PANEL_RAISE_HAND_CLICK: "control_panel_raise_hand_click",
        CONTROL_PANEL_REACTIONS_CLICK: "control_panel_reactions_click",
        CONTROL_PANEL_MORE_OPTIONS_CLICK: "control_panel_more_options_click",
        CONTROL_PANEL_PARTICIPANT_DRAWER_TOGGLE:
          "control_panel_participant_drawer_toggle",
        CONTROL_PANEL_LAYOUT_MODE_TOGGLE: "control_panel_layout_mode_toggle",
        CONTROL_PANEL_SEND_MESSAGE_CLICK: "control_panel_send_message_click",
        CONTROL_PANEL_ADD_PEOPLE_CLICK: "control_panel_add_people_click",
        USER_SWITCH_CAMERA_DEVICE: "user_switch_camera_device",
        USER_SWITCH_MIC_DEVICE: "user_switch_mic_device",
        USER_SWITCH_SPEAKER_DEVICE: "user_switch_speaker_device",
        USER_OPEN_CAMERA_DROPDOWN: "user_open_camera_dropdown",
        USER_OPEN_MIC_DROPDOWN: "user_open_mic_dropdown",
        USER_INITIATE_OUTGOING_CALL: "user_initiate_outgoing_call",
        USER_JOIN_ONGOING_CALL: "user_join_ongoing_call",
        CALL_RECEIVED_INCOMING: "call_received_incoming",
        ICCE_BUBBLE_CLICK_1ON1: "icce_bubble_click_1on1",
        ICCE_BUBBLE_CLICK_JOIN_ONGOING: "icce_bubble_click_join_ongoing",
        ICCE_BUBBLE_GROUP_DROPDOWN_OPEN: "icce_bubble_group_dropdown_open",
        ICCE_WRITE_CALL_LOG: "icce_write_call_log",
        ICCE_WRITE_CALL_LOG_QUEUED: "icce_write_call_log_queued",
        ICCE_WRITE_CALL_LOG_COMPLETE: "icce_write_call_log_complete",
        ICCE_WRITE_CALL_LOG_FAILED: "icce_write_call_log_failed",
        CALL_STATE_UI_TRANSITION: "call_state_ui_transition",
        CALL_ENDED_SCREEN_SHOWN: "call_ended_screen_shown",
        POST_CALL_SURVEY_SHOWN: "post_call_survey_shown",
        POST_CALL_SURVEY_DISMISSED: "post_call_survey_dismissed",
        CALL_LINK_PREVIEW_SHOWN: "call_link_preview_shown",
        CALL_LINK_LOBBY_SHOWN: "call_link_lobby_shown",
        VIDEO_GRID_LAYOUT_CHANGED: "video_grid_layout_changed",
        VIDEO_GRID_PARTICIPANT_ADDED: "video_grid_participant_added",
        VIDEO_GRID_PARTICIPANT_REMOVED: "video_grid_participant_removed",
        PERMISSION_REQUEST_MIC_START: "permission_request_mic_start",
        PERMISSION_REQUEST_MIC_END: "permission_request_mic_end",
        PERMISSION_REQUEST_CAMERA_AND_MIC_START:
          "permission_request_camera_and_mic_start",
        PERMISSION_REQUEST_CAMERA_AND_MIC_END:
          "permission_request_camera_and_mic_end",
        VOIP_WINDOW_MOUNTING: "voip_window_mounting",
        VOIP_UI_BUNDLE_LOADING: "voip_ui_bundle_loading",
        VOIP_UI_BUNDLE_LOADED: "voip_ui_bundle_loaded",
        VOIP_UI_MOUNTING: "voip_ui_mounting",
        VOIP_UI_MOUNTED: "voip_ui_mounted",
        VOIP_UI_EFFECTS_RUNNING: "voip_ui_effects_running",
        VOIP_UI_READY: "voip_ui_ready",
      }),
      v = null,
      S = null,
      R = null,
      L = null,
      E = !1,
      k = null,
      I = null,
      T = null,
      D = null,
      x = null,
      $ = null,
      P = !1,
      N = !1;
    function M() {
      E ||
        ((v = null),
        (S = null),
        (R = null),
        (L = null),
        (k = Date.now()),
        (I = null),
        (E = !0),
        o("WAWebVoipSessionTracker").openVoipSession(y),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:activityTracker] started",
            ])),
        ));
    }
    function w(e, t) {
      if (E) {
        var n = e,
          r = t != null ? n + ":" + t : n;
        ((v = r),
          (S = Date.now()),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:activityTracker] activity=",
                "",
              ])),
            v,
          ));
      }
    }
    function A(e) {
      w(C.CALL_STATE_CHANGED, e);
    }
    function F() {
      if (E) {
        var e = k;
        if (I == null && e != null) {
          ((I = Date.now()), (R = v), (L = S));
          var t = Math.floor((I - e) / 1e3);
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:activityTracker] 1st ANR ",
                "s frozen=",
                "",
              ])),
            t,
            R != null ? R : "none",
          ),
            q());
        }
      }
    }
    function O() {
      if (!E) return null;
      if (I == null)
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:activityTracker] consumed, no ANR occurred",
              ])),
          ),
          B(),
          null
        );
      var e = R,
        t = null,
        n = null;
      return (
        I != null && k != null && (t = Math.floor((I - k) / 1e3)),
        L != null && k != null && (n = Math.floor((L - k) / 1e3)),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:activityTracker] consumed act=",
              " anrT=",
              "s actT=",
              "s",
            ])),
          e != null ? e : "none",
          t != null ? t : "none",
          n != null ? n : "none",
        ),
        B(),
        {
          lastVoipActivity: e,
          lastVoipActivityTimestampSec: n,
          timeFirstAnrSinceCallStartSec: t,
        }
      );
    }
    function B() {
      var e = E;
      ((v = null),
        (S = null),
        (R = null),
        (L = null),
        (I = null),
        (E = !1),
        e && o("WAWebVoipSessionTracker").closeVoipSession(y),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:activityTracker] cleared",
            ])),
        ));
    }
    function W() {
      N ||
        ((T = null),
        (D = null),
        (x = null),
        ($ = null),
        (P = !1),
        (N = !0),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:uiActivityTracker] started",
            ])),
        ));
    }
    function q() {
      N &&
        (P ||
          ((P = !0),
          (x = T),
          ($ = D),
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:uiActivityTracker] frozen on first ANR: uiActivity=",
                "",
              ])),
            x != null ? x : "none",
          )));
    }
    function U(e, t) {
      if (N) {
        var n = e,
          r = t != null ? n + ":" + t : n;
        ((T = r),
          (D = Date.now()),
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:uiActivityTracker] uiActivity=",
                "",
              ])),
            T,
          ));
      }
    }
    function V() {
      if (!N) return null;
      var e = x,
        t = null;
      return (
        $ != null && k != null && (t = Math.floor(($ - k) / 1e3)),
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:uiActivityTracker] consumed act=",
              " ts=",
              "s",
            ])),
          e != null ? e : "none",
          t != null ? t : "none",
        ),
        G(),
        { lastVoipUiActivity: e, lastVoipUiActivityTimestampSec: t }
      );
    }
    function H() {
      if (!E && !N) return null;
      var e = k,
        t = function (n) {
          return n != null && e != null ? Math.floor((n - e) / 1e3) : null;
        },
        n = R != null ? R : v,
        r = L != null ? L : S,
        o = x != null ? x : T,
        a = $ != null ? $ : D;
      return {
        lastVoipActivity: n,
        lastVoipActivityTimestampSec: t(r),
        lastVoipUiActivity: o,
        lastVoipUiActivityTimestampSec: t(a),
      };
    }
    function G() {
      ((T = null),
        (D = null),
        (x = null),
        ($ = null),
        (P = !1),
        (N = !1),
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:uiActivityTracker] cleared",
            ])),
        ));
    }
    function z() {
      (B(), G(), (k = null));
    }
    ((l.VoipActivity = C),
      (l.VoipUiActivity = b),
      (l.startActivityTracking = M),
      (l.trackActivity = w),
      (l.trackCallStateChange = A),
      (l.recordFirstAnrTimestamp = F),
      (l.consumeActivityData = O),
      (l.clearActivityTracking = B),
      (l.startUiActivityTracking = W),
      (l.trackUiActivity = U),
      (l.consumeUiActivityData = V),
      (l.peekVoipActivitySnapshot = H),
      (l.clearUiActivityTracking = G),
      (l.clearAllActivityTracking = z));
  },
  98,
);
