__d(
  "ZenonDismissReason",
  ["$InternalEnum", "FBLogger", "ZenonIncomingRingSDKTypes", "ZenonMediaError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      IgnoreCall: 0,
      HangupCall: 1,
      InAnotherCall: 2,
      AcceptAfterHangUp: 3,
      NoAnswerTimeout: 4,
      IncomingTimeout: 5,
      OtherInstanceHandled: 6,
      SignalingMessageFailed: 7,
      ConnectionDropped: 8,
      ClientInterrupted: 9,
      WebRTCError: 10,
      ClientError: 11,
      NoPermission: 12,
      OtherNotCapable: 13,
      NoUIShown: 14,
      VersionUnsupported: 15,
      CallerNotVisible: 16,
      CarrierBlocked: 17,
      OtherCarrierBlocked: 18,
      ClientEncryptionError: 19,
      MicrophonePermissionDenied: 20,
      CameraPermissionDenied: 21,
      SessionMigrated: 22,
      RingMuted: 23,
      JoinApprovalDenied: 24,
      RejectedByCallee: 25,
      CallEndedByProduct: 26,
      CallEnded: 27,
      AnsweredOnAnotherDevice: 28,
      RejectedOnAnotherDevice: 29,
      CallCollision: 30,
      MaxAllowedParticipantsReached: 31,
      UnexpectedEndOfCall: 32,
      TxAckTimeout: 33,
      EndToEndEncryptionInvariantViolated: 34,
      ProductServerDefinedEndReason: 35,
      RemovedByParticipant: 39,
      AnsweredByOtherUser: 40,
      CallerHasAppealableCallingRestriction: 41,
    });
    function s(t) {
      switch (t) {
        case "BreakoutSessionSwitchRoom":
          return e.HangupCall;
        case "CallEndAcceptAfterHangUp":
          return e.AcceptAfterHangUp;
        case "CallerNotVisible":
          return e.CallerNotVisible;
        case "CarrierBlocked":
          return e.CarrierBlocked;
        case "ClientEncryptionError":
          return e.ClientEncryptionError;
        case "ClientError":
          return e.ClientError;
        case "ClientInterrupted":
          return e.ClientInterrupted;
        case "ConnectionDropped":
          return e.ConnectionDropped;
        case "HangupCall":
          return e.HangupCall;
        case "IgnoreCall":
          return e.IgnoreCall;
        case "InAnotherCall":
          return e.InAnotherCall;
        case "EndToEndEncryptionInvariantViolated":
          return e.EndToEndEncryptionInvariantViolated;
        case "InactiveTimeout":
          return e.CallEnded;
        case "IncomingTimeout":
          return e.IncomingTimeout;
        case "MaxAllowedParticipantsReached":
          return e.MaxAllowedParticipantsReached;
        case "NoAnswerTimeout":
          return e.NoAnswerTimeout;
        case "NoPermission":
          return e.NoPermission;
        case "NoUIShown":
          return e.NoUIShown;
        case "OtherCarrierBlocked":
          return e.OtherCarrierBlocked;
        case "OtherInstanceHandled":
          return e.OtherInstanceHandled;
        case "OtherNotCapable":
          return e.OtherNotCapable;
        case "SignalingMessageFailed":
          return e.SignalingMessageFailed;
        case "UnexpectedEndOfCall":
          return e.UnexpectedEndOfCall;
        case "Unknown":
          return e.CallEnded;
        case "VersionUnsupported":
          return e.VersionUnsupported;
        case "WebRTCError":
          return e.WebRTCError;
        case "MicrophonePermissionDenied":
          return e.MicrophonePermissionDenied;
        case "CameraPermissionDenied":
          return e.CameraPermissionDenied;
        case "SessionMigrated":
          return e.SessionMigrated;
        case "RingMuted":
          return e.RingMuted;
        case "TxAckTimeout":
          return e.TxAckTimeout;
        case "ProductServerDefinedEndReason":
          return e.ProductServerDefinedEndReason;
        case "RemovedByParticipant":
          return e.RemovedByParticipant;
        case "CallerHasAppealableCallingRestriction":
          return e.CallerHasAppealableCallingRestriction;
      }
    }
    function u(t) {
      switch (t) {
        case e.CallEnded:
        case e.CallEndedByProduct:
        case e.HangupCall:
          return "HangupCall";
        case e.IgnoreCall:
        case e.JoinApprovalDenied:
        case e.RejectedByCallee:
          return "IgnoreCall";
        case e.InAnotherCall:
          return "InAnotherCall";
        case e.AcceptAfterHangUp:
          return "CallEndAcceptAfterHangUp";
        case e.NoAnswerTimeout:
          return "NoAnswerTimeout";
        case e.IncomingTimeout:
          return "IncomingTimeout";
        case e.AnsweredOnAnotherDevice:
        case e.CallCollision:
        case e.RejectedOnAnotherDevice:
        case e.OtherInstanceHandled:
        case e.AnsweredByOtherUser:
          return "OtherInstanceHandled";
        case e.SignalingMessageFailed:
          return "SignalingMessageFailed";
        case e.ConnectionDropped:
          return "ConnectionDropped";
        case e.ClientInterrupted:
          return "ClientInterrupted";
        case e.WebRTCError:
          return "WebRTCError";
        case e.ClientError:
          return "ClientError";
        case e.NoPermission:
          return "NoPermission";
        case e.OtherNotCapable:
          return "OtherNotCapable";
        case e.NoUIShown:
          return "NoUIShown";
        case e.VersionUnsupported:
          return "VersionUnsupported";
        case e.CallerNotVisible:
          return "CallerNotVisible";
        case e.CarrierBlocked:
          return "CarrierBlocked";
        case e.OtherCarrierBlocked:
          return "OtherCarrierBlocked";
        case e.ClientEncryptionError:
          return "ClientEncryptionError";
        case e.UnexpectedEndOfCall:
          return "UnexpectedEndOfCall";
        case e.MaxAllowedParticipantsReached:
          return "MaxAllowedParticipantsReached";
        case e.MicrophonePermissionDenied:
          return "MicrophonePermissionDenied";
        case e.CameraPermissionDenied:
          return "CameraPermissionDenied";
        case e.SessionMigrated:
          return "SessionMigrated";
        case e.RingMuted:
          return "RingMuted";
        case e.TxAckTimeout:
          return "TxAckTimeout";
        case e.EndToEndEncryptionInvariantViolated:
          return "EndToEndEncryptionInvariantViolated";
        case e.ProductServerDefinedEndReason:
          return "ProductServerDefinedEndReason";
        case e.RemovedByParticipant:
          return "RemovedByParticipant";
        case e.CallerHasAppealableCallingRestriction:
          return "CallerHasAppealableCallingRestriction";
      }
      return (
        r("FBLogger")("rtc_www").mustfix("Unknown dismiss reason: %s", t),
        "Unknown"
      );
    }
    function c(t) {
      switch (t) {
        case e.OtherInstanceHandled:
        case e.AnsweredOnAnotherDevice:
        case e.AnsweredByOtherUser:
        case e.RejectedOnAnotherDevice:
          return o("ZenonIncomingRingSDKTypes").ZenonCancelReason.OtherDismiss;
        default:
          return o("ZenonIncomingRingSDKTypes").ZenonCancelReason.Hangup;
      }
    }
    function d(t) {
      switch (t) {
        case o("ZenonMediaError").ZenonMediaError.IceDisconnected:
          return e.ConnectionDropped;
        case o("ZenonMediaError").ZenonMediaError.ConnectionClosed:
          return e.HangupCall;
        case o("ZenonMediaError").ZenonMediaError.IceFailure:
        case o("ZenonMediaError").ZenonMediaError.SetLocalSdpFailed:
        case o("ZenonMediaError").ZenonMediaError.SetRemoteSdpFailed:
        case o("ZenonMediaError").ZenonMediaError.RollbackSdpFailed:
          return e.WebRTCError;
        case o("ZenonMediaError").ZenonMediaError.UnknownError:
          return e.UnexpectedEndOfCall;
      }
    }
    ((l.ZenonDismissReason = e),
      (l.endCallToDismissReason = s),
      (l.dismissToEndCallReason = u),
      (l.dismissReasonToCancelReason = c),
      (l.mediaErrorToDismissReason = d));
  },
  98,
);
