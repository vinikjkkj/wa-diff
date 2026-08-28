__d(
  "ZenonMWThriftResponseStatusCodeUtils",
  ["MultiwayCommonTypes", "ZenonMWMessageTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case o("MultiwayCommonTypes").RtcResponseStatusCode.OK:
          return o("ZenonMWMessageTypes").ZenonMWResponseStatusCode.OK;
        case o("MultiwayCommonTypes").RtcResponseStatusCode.BAD_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseStatusCode.BAD_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseStatusCode.UNAUTHORIZED:
          return o("ZenonMWMessageTypes").ZenonMWResponseStatusCode
            .UNAUTHORIZED;
        case o("MultiwayCommonTypes").RtcResponseStatusCode.NOT_FOUND:
          return o("ZenonMWMessageTypes").ZenonMWResponseStatusCode.NOT_FOUND;
        case o("MultiwayCommonTypes").RtcResponseStatusCode.METHOD_NOT_ALLOWED:
          return o("ZenonMWMessageTypes").ZenonMWResponseStatusCode
            .METHOD_NOT_ALLOWED;
        case o("MultiwayCommonTypes").RtcResponseStatusCode.CONFLICT:
          return o("ZenonMWMessageTypes").ZenonMWResponseStatusCode.CONFLICT;
        case o("MultiwayCommonTypes").RtcResponseStatusCode
          .CONDITIONAL_REQUEST_FAILED:
          return o("ZenonMWMessageTypes").ZenonMWResponseStatusCode
            .CONDITIONAL_REQUEST_FAILED;
        case o("MultiwayCommonTypes").RtcResponseStatusCode
          .SERVER_INTERNAL_ERROR:
          return o("ZenonMWMessageTypes").ZenonMWResponseStatusCode
            .SERVER_INTERNAL_ERROR;
        case o("MultiwayCommonTypes").RtcResponseStatusCode.SERVICE_UNAVAILABLE:
          return o("ZenonMWMessageTypes").ZenonMWResponseStatusCode
            .SERVICE_UNAVAILABLE;
      }
    }
    function s(e) {
      switch (e) {
        case o("MultiwayCommonTypes").RtcResponseSubCode.UNKNOWN:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode.UNKNOWN;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .EXCEEDED_MAX_ALLOWED_PARTICIPANTS:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .EXCEEDED_MAX_ALLOWED_PARTICIPANTS;
        case o("MultiwayCommonTypes").RtcResponseSubCode.MEMBERSHIP_CHECK_FAIL:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MEMBERSHIP_CHECK_FAIL;
        case o("MultiwayCommonTypes").RtcResponseSubCode.CONFERENCE_THROTTLED:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONFERENCE_THROTTLED;
        case o("MultiwayCommonTypes").RtcResponseSubCode.ENDPOINT_THROTTLED:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .ENDPOINT_THROTTLED;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MWS_MESSAGE_SENT_TO_INCORRECT_REGION:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MWS_MESSAGE_SENT_TO_INCORRECT_REGION;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .UNSUPPORTED_REQUEST_TYPE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .UNSUPPORTED_REQUEST_TYPE;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CLIENT_REQUEST_UNACCEPTABLE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CLIENT_REQUEST_UNACCEPTABLE;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CLIENT_RESPONSE_UNACCEPTABLE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CLIENT_RESPONSE_UNACCEPTABLE;
        case o("MultiwayCommonTypes").RtcResponseSubCode.INVALID_SDP:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode.INVALID_SDP;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .INVALID_CONFERENCE_NAME:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INVALID_CONFERENCE_NAME;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .SERVER_INFO_CONFERENCE_NAME_MISMATCH:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .SERVER_INFO_CONFERENCE_NAME_MISMATCH;
        case o("MultiwayCommonTypes").RtcResponseSubCode.INVALID_USER_ID:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INVALID_USER_ID;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .INCORRECT_VERSION_RANGE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INCORRECT_VERSION_RANGE;
        case o("MultiwayCommonTypes").RtcResponseSubCode.SENDER_ID_MISMATCH:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .SENDER_ID_MISMATCH;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .RECIPIENT_NOT_SPECIFIED:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .RECIPIENT_NOT_SPECIFIED;
        case o("MultiwayCommonTypes").RtcResponseSubCode.FIELD_NOT_ALLOWED:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .FIELD_NOT_ALLOWED;
        case o("MultiwayCommonTypes").RtcResponseSubCode.USERS_NOT_SPECIFIED:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .USERS_NOT_SPECIFIED;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .REQUEST_UNACCEPTABLE_FOR_ENDPOINT_STATE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .REQUEST_UNACCEPTABLE_FOR_ENDPOINT_STATE;
        case o("MultiwayCommonTypes").RtcResponseSubCode.INVALID_CALL_ID:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INVALID_CALL_ID;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .SESSION_DESCRIPTION_ID_MISMATCH:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .SESSION_DESCRIPTION_ID_MISMATCH;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .EMPTY_CLIENT_MEDIA_UPDATES:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .EMPTY_CLIENT_MEDIA_UPDATES;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .INVALID_SERVER_INFO_DATA:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INVALID_SERVER_INFO_DATA;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .INCORRECT_STATE_VERSION:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INCORRECT_STATE_VERSION;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISMATCHED_STATE_FOR_VERSION:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISMATCHED_STATE_FOR_VERSION;
        case o("MultiwayCommonTypes").RtcResponseSubCode.INVALID_STATE_VERSION:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INVALID_STATE_VERSION;
        case o("MultiwayCommonTypes").RtcResponseSubCode.NO_RESOLVER_FOUND:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .NO_RESOLVER_FOUND;
        case o("MultiwayCommonTypes").RtcResponseSubCode.MISSING_APPROVERLIST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_APPROVERLIST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .FULL_SDP_REQUIRED_IN_APPROVED_STATE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .FULL_SDP_REQUIRED_IN_APPROVED_STATE;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .INVALID_ENDPOINT_CONFIG:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INVALID_ENDPOINT_CONFIG;
        case o("MultiwayCommonTypes").RtcResponseSubCode.INVALID_E2EE_STATE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INVALID_E2EE_STATE;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .INVALID_CONFERENCE_STATE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INVALID_CONFERENCE_STATE;
        case o("MultiwayCommonTypes").RtcResponseSubCode.JOIN_REQUEST_DENIED:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .JOIN_REQUEST_DENIED;
        case o("MultiwayCommonTypes").RtcResponseSubCode.MISSING_BODY_ENDPOINT:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_ENDPOINT;
        case o("MultiwayCommonTypes").RtcResponseSubCode.MISSING_BODY_HEADER:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_HEADER;
        case o("MultiwayCommonTypes").RtcResponseSubCode.MISSING_BODY_BODY:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_BODY;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_REMOVE_PARTICIPANTS_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_REMOVE_PARTICIPANTS_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_DATA_MESSAGE_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_DATA_MESSAGE_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_CLIENT_MEDIA_UPDATE_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_CLIENT_MEDIA_UPDATE_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_ADD_PARTICIPANTS_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_ADD_PARTICIPANTS_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_SUBSCRIPTION_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_SUBSCRIPTION_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_JOIN_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_JOIN_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_HANGUP_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_HANGUP_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_ICE_CANDIDATE_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_ICE_CANDIDATE_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_UPDATE_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_UPDATE_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_CLIENT_EVENT_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_CLIENT_EVENT_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_CONNECT_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_CONNECT_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_UNSUBSCRIBE_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_UNSUBSCRIBE_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_APPROVAL_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_APPROVAL_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_ENDPOINT_USER_ID:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_ENDPOINT_USER_ID;
        case o("MultiwayCommonTypes").RtcResponseSubCode.EMPTY_ENDPOINT_USER_ID:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .EMPTY_ENDPOINT_USER_ID;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_BODY_TRANSFER_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_TRANSFER_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode.MISSING_BODY_GENERIC:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_BODY_GENERIC;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .REQUESTOR_NOT_MEMBER_CONFERENCE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .REQUESTOR_NOT_MEMBER_CONFERENCE;
        case o("MultiwayCommonTypes").RtcResponseSubCode.GUEST_DISCONNECTED:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .GUEST_DISCONNECTED;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .PARTICIPANT_IN_PENDING_APPROVAL_STATE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .PARTICIPANT_IN_PENDING_APPROVAL_STATE;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .INVALID_MULTIWAY_PARAMS:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INVALID_MULTIWAY_PARAMS;
        case o("MultiwayCommonTypes").RtcResponseSubCode.MEDIA_ENDPOINT_GONE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MEDIA_ENDPOINT_GONE;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MEDIA_ENDPOINT_ALREADY_EXISTS:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MEDIA_ENDPOINT_ALREADY_EXISTS;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .NON_PRIMARY_MULTIWAY_SERVER:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .NON_PRIMARY_MULTIWAY_SERVER;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CLIENT_MEDIA_UPDATE_WITHOUT_REMOTE_SDP_INFO:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CLIENT_MEDIA_UPDATE_WITHOUT_REMOTE_SDP_INFO;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_ICE_CANDIDATE_PAYLOAD:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_ICE_CANDIDATE_PAYLOAD;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CONNECT_UNSUPPORTED_DURING_P2P_TO_SFU_ESCALATION:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONNECT_UNSUPPORTED_DURING_P2P_TO_SFU_ESCALATION;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CONNECT_UNSUPPORTED_FOR_JOINED_ENDPOINTS:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONNECT_UNSUPPORTED_FOR_JOINED_ENDPOINTS;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .RESOLVE_STATE_API_ERROR:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .RESOLVE_STATE_API_ERROR;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .EXTERNAL_RESOLUTION_ERROR:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .EXTERNAL_RESOLUTION_ERROR;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .INTERNAL_RESOLUTION_ERROR:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INTERNAL_RESOLUTION_ERROR;
        case o("MultiwayCommonTypes").RtcResponseSubCode.RESOLUTION_DISABLED:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .RESOLUTION_DISABLED;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MEDIA_SERVER_STATE_SYNC_DESERIALIZATION_ERROR:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MEDIA_SERVER_STATE_SYNC_DESERIALIZATION_ERROR;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CONNECT_UNSUPPORTED_FOR_PRECONNECTED_USERS:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONNECT_UNSUPPORTED_FOR_PRECONNECTED_USERS;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .OTHER_USER_ANSWERED_THE_CALL:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .OTHER_USER_ANSWERED_THE_CALL;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MEDIA_SERVER_DESERIALIZATION_ERROR:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MEDIA_SERVER_DESERIALIZATION_ERROR;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .REMOTE_SDP_TRACKID_MISMATCH:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .REMOTE_SDP_TRACKID_MISMATCH;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .SIGNALING_MESSAGE_TO_CLIENT_DROPPED:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .SIGNALING_MESSAGE_TO_CLIENT_DROPPED;
        case o("MultiwayCommonTypes").RtcResponseSubCode.CONFERENCE_NOT_FOUND:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONFERENCE_NOT_FOUND;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CONFERENCE_IS_TERMINATING:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONFERENCE_IS_TERMINATING;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CONFERENCE_IS_TERMINATED:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONFERENCE_IS_TERMINATED;
        case o("MultiwayCommonTypes").RtcResponseSubCode.CONFERENCE_NAME_EMPTY:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONFERENCE_NAME_EMPTY;
        case o("MultiwayCommonTypes").RtcResponseSubCode.NONCE_EMPTY:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode.NONCE_EMPTY;
        case o("MultiwayCommonTypes").RtcResponseSubCode.NONCE_MISMATCH:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode.NONCE_MISMATCH;
        case o("MultiwayCommonTypes").RtcResponseSubCode.CONFERENCE_HAS_GONE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONFERENCE_HAS_GONE;
        case o("MultiwayCommonTypes").RtcResponseSubCode.PARTICIPANT_HAS_GONE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .PARTICIPANT_HAS_GONE;
        case o("MultiwayCommonTypes").RtcResponseSubCode.MEDIA_SERVER_NOT_FOUND:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MEDIA_SERVER_NOT_FOUND;
        case o("MultiwayCommonTypes").RtcResponseSubCode.CLIENT_TERMINATED:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CLIENT_TERMINATED;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MEDIA_CODECS_UNSUPPORTED_BY_CONFERENCE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MEDIA_CODECS_UNSUPPORTED_BY_CONFERENCE;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .REJECTING_CMU_WHEN_SMU_PENDING:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .REJECTING_CMU_WHEN_SMU_PENDING;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .PARTICIPANT_NOT_SUBSCRIBED_TO_TOPIC:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .PARTICIPANT_NOT_SUBSCRIBED_TO_TOPIC;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .PARTICIPANT_ALREADY_IN_WAITING_ROOM:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .PARTICIPANT_ALREADY_IN_WAITING_ROOM;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .PARTICIPANT_NOT_IN_PENDING_APPROVAL:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .PARTICIPANT_NOT_IN_PENDING_APPROVAL;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .USER_NOT_APPROVER_FOR_TARGET_USER:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .USER_NOT_APPROVER_FOR_TARGET_USER;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .UNSUPPORTED_CAPABILITIES:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .UNSUPPORTED_CAPABILITIES;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .PRODUCT_SERVER_DEFINED_END_REASON:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .PRODUCT_SERVER_DEFINED_END_REASON;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .WWW_KILLSWITCHED_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .WWW_KILLSWITCHED_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode.CONFLICTING_MEDIA_PATH:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONFLICTING_MEDIA_PATH;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CONFLICTING_MEDIA_STATUS:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONFLICTING_MEDIA_STATUS;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CONFLICTING_SESSION_DESCRIPTION:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONFLICTING_SESSION_DESCRIPTION;
        case o("MultiwayCommonTypes").RtcResponseSubCode.EMPTY_USER_IDS:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode.EMPTY_USER_IDS;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .MISSING_SDP_CONNECT_REQUEST:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .MISSING_SDP_CONNECT_REQUEST;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CALLER_HAS_APPEALABLE_CALLING_RESTRICTION:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CALLER_HAS_APPEALABLE_CALLING_RESTRICTION;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .P2P_CONNECT_UNSUPPORTED_AFTER_SFU_ESCALATION:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .P2P_CONNECT_UNSUPPORTED_AFTER_SFU_ESCALATION;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CONNECT_EXCEEDED_MAX_ALLOWED_ENDPOINTS_PER_CONFERENCE:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONNECT_EXCEEDED_MAX_ALLOWED_ENDPOINTS_PER_CONFERENCE;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CONNECT_EXCEEDED_MAX_ALLOWED_ENDPOINTS_PER_USER:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONNECT_EXCEEDED_MAX_ALLOWED_ENDPOINTS_PER_USER;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .TOO_MANY_MEDIA_TRACKS_IN_SDP:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .TOO_MANY_MEDIA_TRACKS_IN_SDP;
        case o("MultiwayCommonTypes").RtcResponseSubCode.OK:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode.OK;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .ENDPOINT_INFO_RESULT_MISSING:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .ENDPOINT_INFO_RESULT_MISSING;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .INVITE_USERS_RESULT_MISSING:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .INVITE_USERS_RESULT_MISSING;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .JOIN_SESSION_RESULT_MISSING:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .JOIN_SESSION_RESULT_MISSING;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .LOGGING_POLICY_RESULT_MISSING:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .LOGGING_POLICY_RESULT_MISSING;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .STATE_SYNC_RESULT_MISSING:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .STATE_SYNC_RESULT_MISSING;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .CONFERENCE_NAME_MISMATCH:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CONFERENCE_NAME_MISMATCH;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .SESSION_CONFIGURATION_RESULT_MISSING:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .SESSION_CONFIGURATION_RESULT_MISSING;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .REMOVE_USERS_RESULT_MISSING:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .REMOVE_USERS_RESULT_MISSING;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .UNEXPECTED_TRANSPORT_PARAMS_CONFERENCE_NAME:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .UNEXPECTED_TRANSPORT_PARAMS_CONFERENCE_NAME;
        case o("MultiwayCommonTypes").RtcResponseSubCode
          .IDENTITY_MAPPING_NOT_FOUND:
          return o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .IDENTITY_MAPPING_NOT_FOUND;
      }
    }
    ((l.getResponseStatusCodeFromThrift = e),
      (l.getResponseSubCodeFromThrift = s));
  },
  98,
);
