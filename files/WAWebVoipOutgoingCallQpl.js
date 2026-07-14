__d(
  "WAWebVoipOutgoingCallQpl",
  ["$InternalEnum", "WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(891433916, "3403"),
      s = 12e4,
      u = n("$InternalEnum")({
        VOIP_READY_START: "voip_ready_start",
        VOIP_READY_END: "voip_ready_end",
        SOCKET_HEALTH_CHECK_START: "socket_health_check_start",
        SOCKET_HEALTH_CHECK_END: "socket_health_check_end",
        DEVICE_PERMISSIONS_START: "device_permissions_start",
        DEVICE_PERMISSIONS_END: "device_permissions_end",
        LID_RESOLUTION_SYNC_START: "lid_resolution_sync_start",
        LID_RESOLUTION_SYNC_END: "lid_resolution_sync_end",
        SYNC_DEVICE_LIST_START: "sync_device_list_start",
        SYNC_DEVICE_LIST_END: "sync_device_list_end",
        COEX_FIRST_TIME_MODAL_START: "coex_first_time_modal_start",
        COEX_FIRST_TIME_MODAL_END: "coex_first_time_modal_end",
        SETUP_START: "setup_start",
        SETUP_END: "setup_end",
        SETUP_STACK_INTERFACE_START: "setup_stack_interface_start",
        SETUP_STACK_INTERFACE_END: "setup_stack_interface_end",
        SETUP_FANOUT_LIST_START: "setup_fanout_list_start",
        SETUP_FANOUT_LIST_END: "setup_fanout_list_end",
        SETUP_GET_TC_TOKEN_START: "setup_get_tc_token_start",
        SETUP_GET_TC_TOKEN_END: "setup_get_tc_token_end",
        SETUP_SEND_TC_TOKEN_START: "setup_send_tc_token_start",
        SETUP_SEND_TC_TOKEN_END: "setup_send_tc_token_end",
        SETUP_UI_BUNDLE_PRELOAD_START: "setup_ui_bundle_preload_start",
        SETUP_UI_BUNDLE_PRELOAD_END: "setup_ui_bundle_preload_end",
        SETUP_VIDEO_BUNDLE_PRELOAD_START: "setup_video_bundle_preload_start",
        SETUP_VIDEO_BUNDLE_PRELOAD_END: "setup_video_bundle_preload_end",
        START_CALL_START: "start_call_start",
        START_CALL_END: "start_call_end",
      });
    function c(t) {
      return o("WAWebQplFlow").startQplFlow(e, {
        timeoutInMs: s,
        annotations: t,
      });
    }
    function d(e, t) {
      e.addPoint(t);
    }
    function m(e, t) {
      e.addAnnotations(t);
    }
    function p(e) {
      e.endSuccess();
    }
    function _(e, t) {
      e.endCancel(void 0, { string: { cancel_reason: t } });
    }
    function f(e, t) {
      e.endFail(t);
    }
    ((l.VoipOutgoingCallQplPoint = u),
      (l.startVoipOutgoingCallQpl = c),
      (l.voipOutgoingCallQplAddPoint = d),
      (l.voipOutgoingCallQplAddAnnotations = m),
      (l.endVoipOutgoingCallQplSuccess = p),
      (l.endVoipOutgoingCallQplCancel = _),
      (l.endVoipOutgoingCallQplFail = f));
  },
  98,
);
