__d(
  "ZenonMWThriftMessageMap",
  ["MultiwayCommonTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return "UNKNOWN";
      switch (e) {
        case o("MultiwayCommonTypes").MessageType.JOIN:
          return "JOIN";
        case o("MultiwayCommonTypes").MessageType.SERVER_MEDIA_UPDATE:
          return "SERVER_MEDIA_UPDATE";
        case o("MultiwayCommonTypes").MessageType.ICE_CANDIDATE:
          return "ICE_CANDIDATE";
        case o("MultiwayCommonTypes").MessageType.HANGUP:
          return "HANGUP";
        case o("MultiwayCommonTypes").MessageType.RING:
          return "RING";
        case o("MultiwayCommonTypes").MessageType.DISMISS:
          return "DISMISS";
        case o("MultiwayCommonTypes").MessageType.CONFERENCE_STATE:
          return "CONFERENCE_STATE";
        case o("MultiwayCommonTypes").MessageType.ADD_PARTICIPANTS:
          return "ADD_PARTICIPANTS";
        case o("MultiwayCommonTypes").MessageType.SUBSCRIPTION:
          return "SUBSCRIPTION";
        case o("MultiwayCommonTypes").MessageType.CLIENT_MEDIA_UPDATE:
          return "CLIENT_MEDIA_UPDATE";
        case o("MultiwayCommonTypes").MessageType.DATA_MESSAGE:
          return "DATA_MESSAGE";
        case o("MultiwayCommonTypes").MessageType.REMOVE_PARTICIPANTS:
          return "REMOVE_PARTICIPANTS";
        case o("MultiwayCommonTypes").MessageType.PING:
          return "PING";
        case o("MultiwayCommonTypes").MessageType.NOTIFY:
          return "NOTIFY";
        case o("MultiwayCommonTypes").MessageType.CONNECT:
          return "CONNECT";
        case o("MultiwayCommonTypes").MessageType.CLIENT_EVENT:
          return "CLIENT_EVENT";
        case o("MultiwayCommonTypes").MessageType.UNSUBSCRIBE:
          return "UNSUBSCRIBE";
        case o("MultiwayCommonTypes").MessageType.UPDATE:
          return "UPDATE";
        case o("MultiwayCommonTypes").MessageType.APPROVAL:
          return "APPROVAL";
        case o("MultiwayCommonTypes").MessageType.WAKEUP:
          return "WAKEUP";
        default:
          return "UNKNOWN";
      }
    }
    function s(e) {
      switch (e.toLowerCase()) {
        case "join":
          return o("MultiwayCommonTypes").MessageType.JOIN;
        case "server_media_update":
          return o("MultiwayCommonTypes").MessageType.SERVER_MEDIA_UPDATE;
        case "ice_candidate":
          return o("MultiwayCommonTypes").MessageType.ICE_CANDIDATE;
        case "hangup":
          return o("MultiwayCommonTypes").MessageType.HANGUP;
        case "ring":
          return o("MultiwayCommonTypes").MessageType.RING;
        case "dismiss":
          return o("MultiwayCommonTypes").MessageType.DISMISS;
        case "conference_state":
          return o("MultiwayCommonTypes").MessageType.CONFERENCE_STATE;
        case "add_participants":
          return o("MultiwayCommonTypes").MessageType.ADD_PARTICIPANTS;
        case "subscription":
          return o("MultiwayCommonTypes").MessageType.SUBSCRIPTION;
        case "client_media_update":
          return o("MultiwayCommonTypes").MessageType.CLIENT_MEDIA_UPDATE;
        case "data_message":
          return o("MultiwayCommonTypes").MessageType.DATA_MESSAGE;
        case "remove_participants":
          return o("MultiwayCommonTypes").MessageType.REMOVE_PARTICIPANTS;
        case "ping":
          return o("MultiwayCommonTypes").MessageType.PING;
        case "notify":
          return o("MultiwayCommonTypes").MessageType.NOTIFY;
        case "connect":
          return o("MultiwayCommonTypes").MessageType.CONNECT;
        case "client_event":
          return o("MultiwayCommonTypes").MessageType.CLIENT_EVENT;
        case "unsubscribe":
          return o("MultiwayCommonTypes").MessageType.UNSUBSCRIBE;
        case "update":
          return o("MultiwayCommonTypes").MessageType.UPDATE;
        case "approval":
          return o("MultiwayCommonTypes").MessageType.APPROVAL;
        case "wakeup":
          return o("MultiwayCommonTypes").MessageType.WAKEUP;
        default:
          return null;
      }
    }
    ((l.messageTypeToString = e), (l.messageTypeFromString = s));
  },
  98,
);
