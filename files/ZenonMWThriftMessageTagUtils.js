__d(
  "ZenonMWThriftMessageTagUtils",
  ["MultiwayCommonTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case o("MultiwayCommonTypes").MessageTag.PRANSWER:
          return 1001;
        case o("MultiwayCommonTypes").MessageTag.INITIAL_ANSWER_TO_P2P_CALLER:
          return 1002;
        case o("MultiwayCommonTypes").MessageTag.DEESCALATE_OFFER_TO_P2P_CALLEE:
          return 1003;
        case o("MultiwayCommonTypes").MessageTag
          .DEESCALATE_ANSWER_TO_P2P_CALLER:
          return 1004;
        case o("MultiwayCommonTypes").MessageTag
          .REQUEST_DEESCALATE_TO_P2P_CALLER:
          return 1005;
        case o("MultiwayCommonTypes").MessageTag.REQUEST_ESCALATE:
          return 1006;
        case o("MultiwayCommonTypes").MessageTag
          .REQUEST_CLIENT_FULL_RENEGOTIATION_TO_ADMIT_FROM_WAITINGROOM:
          return 1007;
        case o("MultiwayCommonTypes").MessageTag
          .REQUEST_CLIENT_FULL_RENEGOTIATION_AGAINST_MWS:
          return 1008;
        case o("MultiwayCommonTypes").MessageTag.PARTICIPANT_ADDED:
          return 1009;
        case o("MultiwayCommonTypes").MessageTag.PARTICIPANT_REMOVED:
          return 1010;
        case o("MultiwayCommonTypes").MessageTag
          .FIRST_REMOTE_ALERTED_FOR_INITIATOR:
          return 2001;
        case o("MultiwayCommonTypes").MessageTag
          .FIRST_REMOTE_ANSWERED_FOR_INITIATOR:
          return 2002;
        case o("MultiwayCommonTypes").MessageTag
          .CONTAIN_PENDING_APPROVAL_PARTICIPANTS:
          return 2003;
        case o("MultiwayCommonTypes").MessageTag.KEEP_ALIVE_PING:
          return 3001;
        case o("MultiwayCommonTypes").MessageTag.IS_INITIATOR:
          return 4001;
        case o("MultiwayCommonTypes").MessageTag.PREGEN_SDP:
          return 4002;
      }
    }
    function s(e) {
      switch (e) {
        case 1001:
          return o("MultiwayCommonTypes").MessageTag.PRANSWER;
        case 1002:
          return o("MultiwayCommonTypes").MessageTag
            .INITIAL_ANSWER_TO_P2P_CALLER;
        case 1003:
          return o("MultiwayCommonTypes").MessageTag
            .DEESCALATE_OFFER_TO_P2P_CALLEE;
        case 1004:
          return o("MultiwayCommonTypes").MessageTag
            .DEESCALATE_ANSWER_TO_P2P_CALLER;
        case 1005:
          return o("MultiwayCommonTypes").MessageTag
            .REQUEST_DEESCALATE_TO_P2P_CALLER;
        case 1006:
          return o("MultiwayCommonTypes").MessageTag.REQUEST_ESCALATE;
        case 1007:
          return o("MultiwayCommonTypes").MessageTag
            .REQUEST_CLIENT_FULL_RENEGOTIATION_TO_ADMIT_FROM_WAITINGROOM;
        case 1008:
          return o("MultiwayCommonTypes").MessageTag
            .REQUEST_CLIENT_FULL_RENEGOTIATION_AGAINST_MWS;
        case 1009:
          return o("MultiwayCommonTypes").MessageTag.PARTICIPANT_ADDED;
        case 1010:
          return o("MultiwayCommonTypes").MessageTag.PARTICIPANT_REMOVED;
        case 2001:
          return o("MultiwayCommonTypes").MessageTag
            .FIRST_REMOTE_ALERTED_FOR_INITIATOR;
        case 2002:
          return o("MultiwayCommonTypes").MessageTag
            .FIRST_REMOTE_ANSWERED_FOR_INITIATOR;
        case 2003:
          return o("MultiwayCommonTypes").MessageTag
            .CONTAIN_PENDING_APPROVAL_PARTICIPANTS;
        case 3001:
          return o("MultiwayCommonTypes").MessageTag.KEEP_ALIVE_PING;
        case 4001:
          return o("MultiwayCommonTypes").MessageTag.IS_INITIATOR;
        case 4002:
          return o("MultiwayCommonTypes").MessageTag.PREGEN_SDP;
      }
    }
    function u(t) {
      var n = [];
      return (
        t == null ||
          t.forEach(function (t) {
            t && n.push(e(t));
          }),
        n
      );
    }
    ((l.toThriftMessageTag = s), (l.fromThriftMessageTags = u));
  },
  98,
);
