__d(
  "RpGenaiSctpCaptionsGenAIBotStateSerializers",
  [
    "ActionConfirmationTypesTypes",
    "ClientActionInLoopTypesSerializers",
    "ClientNotificationTypesSerializers",
    "GenaiCoreTypes",
    "LocationTypesSerializers",
    "PsiClientSearchTypesSerializers",
    "PsiClientSearchTypesTypes",
    "RpGenaiSctpCaptionsCaptionsSerializers",
    "RpGenaiSctpCaptionsGenAIBotStateCoreSerializers",
    "RpGenaiSctpCaptionsGenAIBotStateCoreTypes",
    "RpGenaiSctpCaptionsGenAIBotStateTypes",
    "ThriftTypes",
    "ViewModelSerializers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return {};
    }
    function c() {
      return {};
    }
    function d() {
      return { turnUuid: "" };
    }
    function m() {
      return {};
    }
    function p() {
      return {};
    }
    function _() {
      return {};
    }
    function f() {
      return {};
    }
    function g() {
      return {};
    }
    function h() {
      return {};
    }
    function y() {
      return {};
    }
    function C() {
      return {
        state: o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).LiveAiConnectionStateEnum.cast(0),
      };
    }
    function b() {
      return {
        state: o("RpGenaiSctpCaptionsGenAIBotStateCoreTypes").BotStateType.cast(
          0,
        ),
      };
    }
    function v() {
      return { reqId: 0 };
    }
    function S() {
      return { reqId: 0, statusCode: 0 };
    }
    function R() {
      return {};
    }
    function L() {
      return {};
    }
    function E() {
      return {};
    }
    function k() {
      return {};
    }
    function I() {
      return { x: 0, y: 0, tapCaptureNtp: "0" };
    }
    function T() {
      return {};
    }
    function D() {
      return {
        type: o("RpGenaiSctpCaptionsGenAIBotStateTypes").ClientInputType.cast(
          0,
        ),
        method: o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).ClientInputMethod.cast(0),
      };
    }
    function x() {
      return {
        serverToClientAudioCtpLatencyMs: "0",
        roundtripAudioCtpLatencyMs: "0",
      };
    }
    function $() {
      return { ready: !1 };
    }
    function P() {
      return { device: "", appName: "", event: "" };
    }
    function N() {
      return { Uuid: "", useCase: o("GenaiCoreTypes").UseCase.cast(0) };
    }
    function M() {
      return {};
    }
    function w() {
      return {
        contextType: o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).ContextType.cast(0),
        context: "",
      };
    }
    function A() {
      return {};
    }
    function F() {
      return {
        actionType: o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).AgenticActionRequestType.cast(0),
      };
    }
    function O() {
      return {};
    }
    function B() {
      return {};
    }
    function W() {
      return {};
    }
    function q() {
      return {};
    }
    function U() {
      return {
        commandId: "",
        commandType: o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).VoiceCommandType.cast(0),
      };
    }
    function V() {
      return {
        commandId: "",
        commandType: o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).VoiceCommandType.cast(0),
        commandData: q(),
      };
    }
    function H() {
      return {};
    }
    function G() {
      return { threadId: "" };
    }
    function z() {
      return { errorMsg: "" };
    }
    function j() {
      return {
        status: o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).AipRecordingStatus.cast(0),
      };
    }
    function K() {
      return {};
    }
    function Q() {
      return {};
    }
    function X() {
      return {};
    }
    function Y(t, n) {
      (n.writeStructBegin("UserContent"),
        t.caption != null &&
          (n.writeFieldBegin({
            fname: "caption",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          o("RpGenaiSctpCaptionsCaptionsSerializers").serializeCaptionPayload(
            t.caption,
            n,
          ),
          n.writeFieldEnd()),
        t.otid != null &&
          (n.writeFieldBegin({
            fname: "otid",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.otid),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function J(t, n) {
      if (
        (n.writeStructBegin("LLMResponseContents"),
        t.genaiViewModels != null &&
          (n.writeFieldBegin({
            fname: "genaiViewModels",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          o("ViewModelSerializers").serializeGenAIViewModels(
            t.genaiViewModels,
            n,
          ),
          n.writeFieldEnd()),
        t.agent_steps != null)
      ) {
        (n.writeFieldBegin({
          fname: "agent_steps",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.agent_steps.length }));
        for (var a of t.agent_steps)
          o("ClientActionInLoopTypesSerializers").serializeAgentStep(a, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function Z(t, n) {
      if (
        (n.writeStructBegin("BotContent"),
        t.caption != null &&
          (n.writeFieldBegin({
            fname: "caption",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          o("RpGenaiSctpCaptionsCaptionsSerializers").serializeCaptionPayload(
            t.caption,
            n,
          ),
          n.writeFieldEnd()),
        t.llmResp != null &&
          (n.writeFieldBegin({
            fname: "llmResp",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          J(t.llmResp, n),
          n.writeFieldEnd()),
        t.otid != null &&
          (n.writeFieldBegin({
            fname: "otid",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.otid),
          n.writeFieldEnd()),
        t.isProactive != null &&
          (n.writeFieldBegin({
            fname: "isProactive",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 4,
          }),
          n.writeBool(t.isProactive),
          n.writeFieldEnd()),
        t.textPrompts != null &&
          (n.writeFieldBegin({
            fname: "textPrompts",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          o("ViewModelSerializers").serializeGenAITextPromptViewModel(
            t.textPrompts,
            n,
          ),
          n.writeFieldEnd()),
        t.captionTimestamps != null &&
          (n.writeFieldBegin({
            fname: "captionTimestamps",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.captionTimestamps),
          n.writeFieldEnd()),
        t.botResponseId != null &&
          (n.writeFieldBegin({
            fname: "botResponseId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.botResponseId),
          n.writeFieldEnd()),
        t.bizAgentViewModel != null &&
          (n.writeFieldBegin({
            fname: "bizAgentViewModel",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 8,
          }),
          o("ViewModelSerializers").serializeGenAIBizAgentViewModel(
            t.bizAgentViewModel,
            n,
          ),
          n.writeFieldEnd()),
        t.botSpeakerId != null &&
          (n.writeFieldBegin({
            fname: "botSpeakerId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.botSpeakerId),
          n.writeFieldEnd()),
        t.agenticActionRequest != null &&
          (n.writeFieldBegin({
            fname: "agenticActionRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.agenticActionRequest),
          n.writeFieldEnd()),
        t.isLastBotChunk != null &&
          (n.writeFieldBegin({
            fname: "isLastBotChunk",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 11,
          }),
          n.writeBool(t.isLastBotChunk),
          n.writeFieldEnd()),
        t.mediaUploadStatus != null)
      ) {
        var a;
        (n.writeFieldBegin({
          fname: "mediaUploadStatus",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 12,
        }),
          n.writeI32((a = t.mediaUploadStatus) != null ? a : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function ee(t, n) {
      if (
        (n.writeStructBegin("TurnMetaData"),
        n.writeFieldBegin({
          fname: "turnUuid",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.turnUuid != null)
      )
        n.writeString(t.turnUuid);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        t.userSpeechStartTimestamp != null &&
          (n.writeFieldBegin({
            fname: "userSpeechStartTimestamp",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.userSpeechStartTimestamp)),
          n.writeFieldEnd()),
        t.userSpeechEndTimestamp != null &&
          (n.writeFieldBegin({
            fname: "userSpeechEndTimestamp",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 3,
          }),
          n.writeI64(BigInt(t.userSpeechEndTimestamp)),
          n.writeFieldEnd()),
        t.botSpeechStartTimestamp != null &&
          (n.writeFieldBegin({
            fname: "botSpeechStartTimestamp",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 4,
          }),
          n.writeI64(BigInt(t.botSpeechStartTimestamp)),
          n.writeFieldEnd()),
        t.userSpeechStartTimestampNtp != null &&
          (n.writeFieldBegin({
            fname: "userSpeechStartTimestampNtp",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 5,
          }),
          n.writeI64(BigInt(t.userSpeechStartTimestampNtp)),
          n.writeFieldEnd()),
        t.userSpeechEndTimestampNtp != null &&
          (n.writeFieldBegin({
            fname: "userSpeechEndTimestampNtp",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 6,
          }),
          n.writeI64(BigInt(t.userSpeechEndTimestampNtp)),
          n.writeFieldEnd()),
        t.integrityFailure != null &&
          (n.writeFieldBegin({
            fname: "integrityFailure",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.integrityFailure),
          n.writeFieldEnd()),
        t.userInterruptStartTimestampNtp != null &&
          (n.writeFieldBegin({
            fname: "userInterruptStartTimestampNtp",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 8,
          }),
          n.writeI64(BigInt(t.userInterruptStartTimestampNtp)),
          n.writeFieldEnd()),
        t.postIds != null)
      ) {
        (n.writeFieldBegin({
          fname: "postIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 9,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.postIds.length }));
        for (var a of t.postIds) n.writeString(a);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.isRambleModeCreateIntentDetected != null &&
        (n.writeFieldBegin({
          fname: "isRambleModeCreateIntentDetected",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 10,
        }),
        n.writeBool(t.isRambleModeCreateIntentDetected),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function te(t, n) {
      if (
        (n.writeStructBegin("PSIToolRequest"),
        t.turnId != null &&
          (n.writeFieldBegin({
            fname: "turnId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.turnId),
          n.writeFieldEnd()),
        t.requestId != null &&
          (n.writeFieldBegin({
            fname: "requestId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.requestId),
          n.writeFieldEnd()),
        t.psiToolQueryPlan != null &&
          (n.writeFieldBegin({
            fname: "psiToolQueryPlan",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          o("PsiClientSearchTypesSerializers").serializePSIToolQueryPlan(
            t.psiToolQueryPlan,
            n,
          ),
          n.writeFieldEnd()),
        t.nextTurnDestination != null)
      ) {
        var a;
        (n.writeFieldBegin({
          fname: "nextTurnDestination",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 5,
        }),
          n.writeI32((a = t.nextTurnDestination) != null ? a : 0),
          n.writeFieldEnd());
      }
      (t.skipReplayPrompt != null &&
        (n.writeFieldBegin({
          fname: "skipReplayPrompt",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 6,
        }),
        n.writeBool(t.skipReplayPrompt),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ne(t, n) {
      if (
        (n.writeStructBegin("PSIToolResponse"),
        t.turnId != null &&
          (n.writeFieldBegin({
            fname: "turnId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.turnId),
          n.writeFieldEnd()),
        t.requestId != null &&
          (n.writeFieldBegin({
            fname: "requestId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.requestId),
          n.writeFieldEnd()),
        t.psiToolQueryData != null &&
          (n.writeFieldBegin({
            fname: "psiToolQueryData",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          o("PsiClientSearchTypesSerializers").serializePSIToolQueryData(
            t.psiToolQueryData,
            n,
          ),
          n.writeFieldEnd()),
        t.previousTurnDestination != null)
      ) {
        var a;
        (n.writeFieldBegin({
          fname: "previousTurnDestination",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 5,
        }),
          n.writeI32((a = t.previousTurnDestination) != null ? a : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function re(t, n) {
      (n.writeStructBegin("PSIStateMessageMetadata"),
        t.turnId != null &&
          (n.writeFieldBegin({
            fname: "turnId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.turnId),
          n.writeFieldEnd()),
        t.requestId != null &&
          (n.writeFieldBegin({
            fname: "requestId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.requestId),
          n.writeFieldEnd()),
        t.psiChatResponseData != null &&
          (n.writeFieldBegin({
            fname: "psiChatResponseData",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          o(
            "PsiClientSearchTypesSerializers",
          ).serializeAIChatResponsePSIMetadata(t.psiChatResponseData, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function oe(t, n) {
      (n.writeStructBegin("PSIClientInputMetadata"),
        t.turnId != null &&
          (n.writeFieldBegin({
            fname: "turnId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.turnId),
          n.writeFieldEnd()),
        t.requestId != null &&
          (n.writeFieldBegin({
            fname: "requestId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.requestId),
          n.writeFieldEnd()),
        t.psiChatRequestData != null &&
          (n.writeFieldBegin({
            fname: "psiChatRequestData",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          o(
            "PsiClientSearchTypesSerializers",
          ).serializeAIChatRequestPSIMetadata(t.psiChatRequestData, n),
          n.writeFieldEnd()),
        t.psiReplayedMessage != null &&
          (n.writeFieldBegin({
            fname: "psiReplayedMessage",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.psiReplayedMessage),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ae(t, n) {
      (n.writeStructBegin("ReadAloudMetadata"),
        t.conversationId != null &&
          (n.writeFieldBegin({
            fname: "conversationId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.conversationId),
          n.writeFieldEnd()),
        t.messageId != null &&
          (n.writeFieldBegin({
            fname: "messageId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.messageId),
          n.writeFieldEnd()),
        t.pause != null &&
          (n.writeFieldBegin({
            fname: "pause",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 3,
          }),
          n.writeBool(t.pause),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ie(t, n) {
      (n.writeStructBegin("CallTransferInfo"),
        t.transferTarget != null &&
          (n.writeFieldBegin({
            fname: "transferTarget",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.transferTarget),
          n.writeFieldEnd()),
        t.transferReason != null &&
          (n.writeFieldBegin({
            fname: "transferReason",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.transferReason),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function le(t, n) {
      (n.writeStructBegin("SimulationCallData"),
        t.callTransferInfo != null &&
          (n.writeFieldBegin({
            fname: "callTransferInfo",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          ie(t.callTransferInfo, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function se(t, n) {
      if (
        (n.writeStructBegin("LiveAiConnectionState"),
        n.writeFieldBegin({
          fname: "state",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.state != null)
      ) {
        var a;
        n.writeI32((a = t.state) != null ? a : 0);
      } else {
        var i = o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).LiveAiConnectionStateEnum.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function ue(t, n) {
      if (
        (n.writeStructBegin("StateMessage"),
        n.writeFieldBegin({
          fname: "state",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.state != null)
      ) {
        var a;
        n.writeI32((a = t.state) != null ? a : 0);
      } else {
        var i = o(
          "RpGenaiSctpCaptionsGenAIBotStateCoreTypes",
        ).BotStateType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.userContent != null &&
          (n.writeFieldBegin({
            fname: "userContent",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          Y(t.userContent, n),
          n.writeFieldEnd()),
        t.botContent != null &&
          (n.writeFieldBegin({
            fname: "botContent",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          Z(t.botContent, n),
          n.writeFieldEnd()),
        t.padding != null &&
          (n.writeFieldBegin({
            fname: "padding",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.padding),
          n.writeFieldEnd()),
        t.turnMetaData != null &&
          (n.writeFieldBegin({
            fname: "turnMetaData",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          ee(t.turnMetaData, n),
          n.writeFieldEnd()),
        t.psiToolRequest != null &&
          (n.writeFieldBegin({
            fname: "psiToolRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 6,
          }),
          te(t.psiToolRequest, n),
          n.writeFieldEnd()),
        t.modelStage != null &&
          (n.writeFieldBegin({
            fname: "modelStage",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.modelStage),
          n.writeFieldEnd()),
        t.psiMetadata != null &&
          (n.writeFieldBegin({
            fname: "psiMetadata",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 8,
          }),
          re(t.psiMetadata, n),
          n.writeFieldEnd()),
        t.clientInstruction != null &&
          (n.writeFieldBegin({
            fname: "clientInstruction",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 9,
          }),
          o("ClientActionInLoopTypesSerializers").serializeClientInstruction(
            t.clientInstruction,
            n,
          ),
          n.writeFieldEnd()),
        t.envelopedOutput != null &&
          (n.writeFieldBegin({
            fname: "envelopedOutput",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.envelopedOutput),
          n.writeFieldEnd()),
        t.confirmationAction != null)
      ) {
        var l;
        (n.writeFieldBegin({
          fname: "confirmationAction",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 11,
        }),
          n.writeI32((l = t.confirmationAction) != null ? l : 0),
          n.writeFieldEnd());
      }
      if (t.standardizedResponse != null) {
        (n.writeFieldBegin({
          fname: "standardizedResponse",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 12,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.standardizedResponse.length,
          }));
        for (var s of t.standardizedResponse)
          o(
            "RpGenaiSctpCaptionsGenAIBotStateCoreSerializers",
          ).serializeStandardizedResponseItem(s, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.simulationCallData != null &&
        (n.writeFieldBegin({
          fname: "simulationCallData",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 13,
        }),
        le(t.simulationCallData, n),
        n.writeFieldEnd()),
        t.liveAiConnectionState != null &&
          (n.writeFieldBegin({
            fname: "liveAiConnectionState",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 14,
          }),
          se(t.liveAiConnectionState, n),
          n.writeFieldEnd()),
        t.mediaUploadComplete != null &&
          (n.writeFieldBegin({
            fname: "mediaUploadComplete",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 15,
          }),
          o("ClientNotificationTypesSerializers").serializeMediaUploadComplete(
            t.mediaUploadComplete,
            n,
          ),
          n.writeFieldEnd()),
        t.gqlRequestCorrelationId != null &&
          (n.writeFieldBegin({
            fname: "gqlRequestCorrelationId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 16,
          }),
          n.writeString(t.gqlRequestCorrelationId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ce(t, n) {
      if (
        (n.writeStructBegin("UgcBotChangeRequest"),
        n.writeFieldBegin({
          fname: "reqId",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.reqId != null)
      )
        n.writeI32(t.reqId);
      else {
        var o = 0;
        n.writeI32(o);
      }
      (n.writeFieldEnd(),
        t.ugcBotId != null &&
          (n.writeFieldBegin({
            fname: "ugcBotId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.ugcBotId)),
          n.writeFieldEnd()),
        t.personaId != null &&
          (n.writeFieldBegin({
            fname: "personaId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.personaId),
          n.writeFieldEnd()),
        t.threadId != null &&
          (n.writeFieldBegin({
            fname: "threadId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.threadId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function de(t, n) {
      if (
        (n.writeStructBegin("UgcBotChangeResponse"),
        n.writeFieldBegin({
          fname: "reqId",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.reqId != null)
      )
        n.writeI32(t.reqId);
      else {
        var o = 0;
        n.writeI32(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "statusCode", ftype: e.I32, fid: 2 }),
        t.statusCode != null)
      )
        n.writeI32(t.statusCode);
      else {
        var a = 0;
        n.writeI32(a);
      }
      (n.writeFieldEnd(),
        t.error != null &&
          (n.writeFieldBegin({
            fname: "error",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.error),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function me(t, n) {
      if ((n.writeStructBegin("ClientOutputParams"), t.outputType != null)) {
        var o;
        (n.writeFieldBegin({
          fname: "outputType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
          n.writeI32((o = t.outputType) != null ? o : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function pe(t, n) {
      if ((n.writeStructBegin("ClientInputData"), t.attachmentEntIds != null)) {
        (n.writeFieldBegin({
          fname: "attachmentEntIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.attachmentEntIds.length,
          }));
        for (var a of t.attachmentEntIds) n.writeString(a);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (t.psiToolResponse != null &&
          (n.writeFieldBegin({
            fname: "psiToolResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          ne(t.psiToolResponse, n),
          n.writeFieldEnd()),
        t.conversationHistory != null)
      ) {
        (n.writeFieldBegin({
          fname: "conversationHistory",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 3,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.conversationHistory.length,
          }));
        for (var i of t.conversationHistory)
          o("PsiClientSearchTypesSerializers").serializeChatMessage(i, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.previousTurnDestination != null) {
        var l;
        (n.writeFieldBegin({
          fname: "previousTurnDestination",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 4,
        }),
          n.writeI32((l = t.previousTurnDestination) != null ? l : 0),
          n.writeFieldEnd());
      }
      if (
        (t.psiMetadata != null &&
          (n.writeFieldBegin({
            fname: "psiMetadata",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          oe(t.psiMetadata, n),
          n.writeFieldEnd()),
        t.psiReplayedMessage != null &&
          (n.writeFieldBegin({
            fname: "psiReplayedMessage",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.psiReplayedMessage),
          n.writeFieldEnd()),
        t.readAloudMetadata != null &&
          (n.writeFieldBegin({
            fname: "readAloudMetadata",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 7,
          }),
          ae(t.readAloudMetadata, n),
          n.writeFieldEnd()),
        t.clientInstructionResponse != null &&
          (n.writeFieldBegin({
            fname: "clientInstructionResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 8,
          }),
          o(
            "ClientActionInLoopTypesSerializers",
          ).serializeClientInstructionResponse(t.clientInstructionResponse, n),
          n.writeFieldEnd()),
        t.isConfirmationTurn != null &&
          (n.writeFieldBegin({
            fname: "isConfirmationTurn",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 9,
          }),
          n.writeBool(t.isConfirmationTurn),
          n.writeFieldEnd()),
        t.confirmationHistory != null)
      ) {
        (n.writeFieldBegin({
          fname: "confirmationHistory",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 10,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.confirmationHistory.length,
          }));
        for (var s of t.confirmationHistory)
          o("PsiClientSearchTypesSerializers").serializeChatMessage(s, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.media_message_ids != null) {
        (n.writeFieldBegin({
          fname: "media_message_ids",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 11,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.media_message_ids.length,
          }));
        for (var u of t.media_message_ids) n.writeString(u);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (t.mediaUploadError != null &&
          (n.writeFieldBegin({
            fname: "mediaUploadError",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 12,
          }),
          n.writeString(t.mediaUploadError),
          n.writeFieldEnd()),
        t.storage_uri != null)
      ) {
        (n.writeFieldBegin({
          fname: "storage_uri",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 13,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.storage_uri.length }));
        for (var c of t.storage_uri) n.writeString(c);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function _e(t, n) {
      if ((n.writeStructBegin("BotCapability"), t.botCapabilities != null)) {
        (n.writeFieldBegin({
          fname: "botCapabilities",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({ etype: e.I32, size: t.botCapabilities.length }));
        for (var o of t.botCapabilities) n.writeI32(o);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function fe(t, n) {
      (n.writeStructBegin("ClientHandshake"),
        t.accountCenterToken != null &&
          (n.writeFieldBegin({
            fname: "accountCenterToken",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.accountCenterToken),
          n.writeFieldEnd()),
        t.botCapability != null &&
          (n.writeFieldBegin({
            fname: "botCapability",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          _e(t.botCapability, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ge(t, n) {
      if (
        (n.writeStructBegin("ClientInputTap"),
        n.writeFieldBegin({
          fname: "x",
          ftype: (e || (e = r("ThriftTypes"))).DOUBLE,
          fid: 1,
        }),
        t.x != null)
      )
        n.writeDouble(t.x);
      else {
        var o = 0;
        n.writeDouble(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "y", ftype: e.DOUBLE, fid: 2 }),
        t.y != null)
      )
        n.writeDouble(t.y);
      else {
        var a = 0;
        n.writeDouble(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "tapCaptureNtp", ftype: e.I64, fid: 3 }),
        t.tapCaptureNtp != null)
      )
        n.writeI64(BigInt(t.tapCaptureNtp));
      else {
        var i = "0";
        n.writeI64(BigInt(i));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function he(t, n) {
      if (
        (n.writeStructBegin("ClientInputContents"),
        t.text != null &&
          (n.writeFieldBegin({
            fname: "text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.text),
          n.writeFieldEnd()),
        t.data != null &&
          (n.writeFieldBegin({
            fname: "data",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          pe(t.data, n),
          n.writeFieldEnd()),
        t.otid != null &&
          (n.writeFieldBegin({
            fname: "otid",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.otid),
          n.writeFieldEnd()),
        t.event != null)
      ) {
        var a;
        (n.writeFieldBegin({
          fname: "event",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 4,
        }),
          n.writeI32((a = t.event) != null ? a : 0),
          n.writeFieldEnd());
      }
      (t.promptId != null &&
        (n.writeFieldBegin({
          fname: "promptId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 5,
        }),
        n.writeString(t.promptId),
        n.writeFieldEnd()),
        t.handshake != null &&
          (n.writeFieldBegin({
            fname: "handshake",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 6,
          }),
          fe(t.handshake, n),
          n.writeFieldEnd()),
        t.isSystemPromptMode != null &&
          (n.writeFieldBegin({
            fname: "isSystemPromptMode",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 7,
          }),
          n.writeBool(t.isSystemPromptMode),
          n.writeFieldEnd()),
        t.locationOverrides != null &&
          (n.writeFieldBegin({
            fname: "locationOverrides",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 8,
          }),
          o("LocationTypesSerializers").serializeGenAILocationOverrides(
            t.locationOverrides,
            n,
          ),
          n.writeFieldEnd()),
        t.cosmos_client_message != null &&
          (n.writeFieldBegin({
            fname: "cosmos_client_message",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeBinary(t.cosmos_client_message),
          n.writeFieldEnd()),
        t.tap != null &&
          (n.writeFieldBegin({
            fname: "tap",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 10,
          }),
          ge(t.tap, n),
          n.writeFieldEnd()),
        t.ttsSpeed != null &&
          (n.writeFieldBegin({
            fname: "ttsSpeed",
            ftype: (e || (e = r("ThriftTypes"))).DOUBLE,
            fid: 11,
          }),
          n.writeDouble(t.ttsSpeed),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ye(t, n) {
      if (
        (n.writeStructBegin("ClientInputMessage"),
        n.writeFieldBegin({
          fname: "type",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.type != null)
      ) {
        var a;
        n.writeI32((a = t.type) != null ? a : 0);
      } else {
        var i = o("RpGenaiSctpCaptionsGenAIBotStateTypes").ClientInputType.cast(
          0,
        );
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "method", ftype: e.I32, fid: 2 }),
        t.method != null)
      ) {
        var l;
        n.writeI32((l = t.method) != null ? l : 0);
      } else {
        var s = o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).ClientInputMethod.cast(0);
        n.writeI32(s != null ? s : 0);
      }
      (n.writeFieldEnd(),
        t.contents != null &&
          (n.writeFieldBegin({
            fname: "contents",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          he(t.contents, n),
          n.writeFieldEnd()),
        t.outputParams != null &&
          (n.writeFieldBegin({
            fname: "outputParams",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          me(t.outputParams, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ce(t, n) {
      if (
        (n.writeStructBegin("GenAiMediaStats"),
        n.writeFieldBegin({
          fname: "serverToClientAudioCtpLatencyMs",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.serverToClientAudioCtpLatencyMs != null)
      )
        n.writeI64(BigInt(t.serverToClientAudioCtpLatencyMs));
      else {
        var o = "0";
        n.writeI64(BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "roundtripAudioCtpLatencyMs",
          ftype: e.I64,
          fid: 2,
        }),
        t.roundtripAudioCtpLatencyMs != null)
      )
        n.writeI64(BigInt(t.roundtripAudioCtpLatencyMs));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function be(t, n) {
      if (
        (n.writeStructBegin("CreatorBotClientReadyMessage"),
        n.writeFieldBegin({
          fname: "ready",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.ready != null)
      )
        n.writeBool(t.ready);
      else {
        var o = !1;
        n.writeBool(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function ve(t, n) {
      if (
        (n.writeStructBegin("WearableAppEvent"),
        n.writeFieldBegin({
          fname: "device",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.device != null)
      )
        n.writeString(t.device);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "appName", ftype: e.STRING, fid: 2 }),
        t.appName != null)
      )
        n.writeString(t.appName);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "event", ftype: e.STRING, fid: 3 }),
        t.event != null)
      )
        n.writeString(t.event);
      else {
        var i = "";
        n.writeString(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Se(t, n) {
      if (
        (n.writeStructBegin("GenAiConnectState"),
        n.writeFieldBegin({
          fname: "Uuid",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.Uuid != null)
      )
        n.writeString(t.Uuid);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        t.msgSentTimestamp != null &&
          (n.writeFieldBegin({
            fname: "msgSentTimestamp",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.msgSentTimestamp)),
          n.writeFieldEnd()),
        t.msgRecvTimestamp != null &&
          (n.writeFieldBegin({
            fname: "msgRecvTimestamp",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 3,
          }),
          n.writeI64(BigInt(t.msgRecvTimestamp)),
          n.writeFieldEnd()),
        t.selecledtModel != null &&
          (n.writeFieldBegin({
            fname: "selecledtModel",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.selecledtModel),
          n.writeFieldEnd()),
        t.modelTier != null &&
          (n.writeFieldBegin({
            fname: "modelTier",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.modelTier),
          n.writeFieldEnd()),
        t.sessionId != null &&
          (n.writeFieldBegin({
            fname: "sessionId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.sessionId),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "useCase", ftype: e.I32, fid: 7 }),
        t.useCase != null)
      ) {
        var i;
        n.writeI32((i = t.useCase) != null ? i : 0);
      } else {
        var l = o("GenaiCoreTypes").UseCase.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Re(t, n) {
      if ((n.writeStructBegin("UserContextData"), t.contextTokens != null)) {
        (n.writeFieldBegin({
          fname: "contextTokens",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.contextTokens.length }));
        for (var o of t.contextTokens) n.writeString(o);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.speculativeContextTokens != null) {
        (n.writeFieldBegin({
          fname: "speculativeContextTokens",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.speculativeContextTokens.length,
          }));
        for (var a of t.speculativeContextTokens) n.writeString(a);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.contextCommentaryIds != null) {
        (n.writeFieldBegin({
          fname: "contextCommentaryIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 3,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.contextCommentaryIds.length,
          }));
        for (var i of t.contextCommentaryIds) n.writeString(i);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function Le(t, n) {
      if (
        (n.writeStructBegin("UserContext"),
        n.writeFieldBegin({
          fname: "contextType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.contextType != null)
      ) {
        var a;
        n.writeI32((a = t.contextType) != null ? a : 0);
      } else {
        var i = o("RpGenaiSctpCaptionsGenAIBotStateTypes").ContextType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.fbid != null &&
          (n.writeFieldBegin({
            fname: "fbid",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.fbid)),
          n.writeFieldEnd()),
        t.contextId != null &&
          (n.writeFieldBegin({
            fname: "contextId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.contextId),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "context", ftype: e.STRING, fid: 4 }),
        t.context != null)
      )
        n.writeString(t.context);
      else {
        var l = "";
        n.writeString(l);
      }
      (n.writeFieldEnd(),
        t.data != null &&
          (n.writeFieldBegin({
            fname: "data",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          Re(t.data, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ee(t, n) {
      (n.writeStructBegin("AgenticActionContent"),
        t.messageText != null &&
          (n.writeFieldBegin({
            fname: "messageText",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.messageText),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ke(t, n) {
      if (
        (n.writeStructBegin("AgenticActionRequest"),
        n.writeFieldBegin({
          fname: "actionType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
        t.actionType != null)
      ) {
        var a;
        n.writeI32((a = t.actionType) != null ? a : 0);
      } else {
        var i = o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).AgenticActionRequestType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.contactName != null &&
          (n.writeFieldBegin({
            fname: "contactName",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.contactName),
          n.writeFieldEnd()),
        t.content != null &&
          (n.writeFieldBegin({
            fname: "content",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          Ee(t.content, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ie(t, n) {
      (n.writeStructBegin("ShapeOfFeedCommandData"),
        t.feedRankingQuery != null &&
          (n.writeFieldBegin({
            fname: "feedRankingQuery",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.feedRankingQuery),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Te(t, n) {
      (n.writeStructBegin("ThreadSummaryCommandData"),
        t.maxMessagesToSummarize != null &&
          (n.writeFieldBegin({
            fname: "maxMessagesToSummarize",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 1,
          }),
          n.writeI32(t.maxMessagesToSummarize),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function De(t, n) {
      (n.writeStructBegin("SendMessageCommandData"),
        t.receiverName != null &&
          (n.writeFieldBegin({
            fname: "receiverName",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.receiverName),
          n.writeFieldEnd()),
        t.message != null &&
          (n.writeFieldBegin({
            fname: "message",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.message),
          n.writeFieldEnd()),
        t.userConfirmationGranted != null &&
          (n.writeFieldBegin({
            fname: "userConfirmationGranted",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 3,
          }),
          n.writeBool(t.userConfirmationGranted),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function xe(t, n) {
      (n.writeStructBegin("CommandData"),
        t.shapeOfFeedCommandData != null &&
          (n.writeFieldBegin({
            fname: "shapeOfFeedCommandData",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          Ie(t.shapeOfFeedCommandData, n),
          n.writeFieldEnd()),
        t.threadSummaryCommandData != null &&
          (n.writeFieldBegin({
            fname: "threadSummaryCommandData",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          Te(t.threadSummaryCommandData, n),
          n.writeFieldEnd()),
        t.sendMessageCommandData != null &&
          (n.writeFieldBegin({
            fname: "sendMessageCommandData",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          De(t.sendMessageCommandData, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function $e(t, n) {
      if (
        (n.writeStructBegin("VoiceCommandExecutionResult"),
        n.writeFieldBegin({
          fname: "commandId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.commandId != null)
      )
        n.writeString(t.commandId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "commandType", ftype: e.I32, fid: 2 }),
        t.commandType != null)
      ) {
        var i;
        n.writeI32((i = t.commandType) != null ? i : 0);
      } else {
        var l = o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).VoiceCommandType.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Pe(t, n) {
      if (
        (n.writeStructBegin("VoiceCommand"),
        n.writeFieldBegin({
          fname: "commandId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.commandId != null)
      )
        n.writeString(t.commandId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "commandType", ftype: e.I32, fid: 2 }),
        t.commandType != null)
      ) {
        var i;
        n.writeI32((i = t.commandType) != null ? i : 0);
      } else {
        var l = o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).VoiceCommandType.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.error != null &&
          (n.writeFieldBegin({
            fname: "error",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.error),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "commandData", ftype: e.STRUCT, fid: 4 }),
        t.commandData != null)
      )
        xe(t.commandData, n);
      else {
        var s = q();
        xe(s, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Ne(t, n) {
      (n.writeStructBegin("RealtimeAIInternalDebugContent"),
        t.message != null &&
          (n.writeFieldBegin({
            fname: "message",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.message),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Me(t, n) {
      if (
        (n.writeStructBegin("ThreadSuccess"),
        n.writeFieldBegin({
          fname: "threadId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.threadId != null)
      )
        n.writeString(t.threadId);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function we(t, n) {
      if (
        (n.writeStructBegin("ThreadError"),
        n.writeFieldBegin({
          fname: "errorMsg",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.errorMsg != null)
      )
        n.writeString(t.errorMsg);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Ae(t, n) {
      if (
        (n.writeStructBegin("AipRecordingResult"),
        n.writeFieldBegin({
          fname: "status",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.status != null)
      ) {
        var a;
        n.writeI32((a = t.status) != null ? a : 0);
      } else {
        var i = o(
          "RpGenaiSctpCaptionsGenAIBotStateTypes",
        ).AipRecordingStatus.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.currentSection != null &&
          (n.writeFieldBegin({
            fname: "currentSection",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 2,
          }),
          n.writeI32(t.currentSection),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Fe(e, t) {
      (t.writeStructBegin("CosmosSessionCreated"),
        t.writeFieldStop(),
        t.writeStructEnd());
    }
    function Oe(t, n) {
      (n.writeStructBegin("SessionInfo"),
        t.threadCreationResult != null &&
          (n.writeFieldBegin({
            fname: "threadCreationResult",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          Be(t.threadCreationResult, n),
          n.writeFieldEnd()),
        t.mediaUploadComplete != null &&
          (n.writeFieldBegin({
            fname: "mediaUploadComplete",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          o("ClientNotificationTypesSerializers").serializeMediaUploadComplete(
            t.mediaUploadComplete,
            n,
          ),
          n.writeFieldEnd()),
        t.aipRecordingResult != null &&
          (n.writeFieldBegin({
            fname: "aipRecordingResult",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          Ae(t.aipRecordingResult, n),
          n.writeFieldEnd()),
        t.cosmosSessionCreated != null &&
          (n.writeFieldBegin({
            fname: "cosmosSessionCreated",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          Fe(t.cosmosSessionCreated, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Be(t, n) {
      if ((n.writeStructBegin("ThreadCreationResult"), t.success != null)) {
        (n.writeFieldBegin({
          fname: "success",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
          Me(t.success, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.error != null) {
        (n.writeFieldBegin({
          fname: "error",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
          we(t.error, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function We(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.caption = o(
                  "RpGenaiSctpCaptionsCaptionsSerializers",
                ).deserializeCaptionPayload(t))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.otid = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function qe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.genaiViewModels = o(
                  "ViewModelSerializers",
                ).deserializeGenAIViewModels(t))
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.agent_steps = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = o(
                  "ClientActionInLoopTypesSerializers",
                ).deserializeAgentStep(t);
                n.agent_steps.push(c);
              }
            } else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ue(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.caption = o(
                  "RpGenaiSctpCaptionsCaptionsSerializers",
                ).deserializeCaptionPayload(t))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.llmResp = qe(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.otid = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isProactive = t.readBool())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.textPrompts = o(
                  "ViewModelSerializers",
                ).deserializeGenAITextPromptViewModel(t))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.captionTimestamps = t.readString())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.botResponseId = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.bizAgentViewModel = o(
                  "ViewModelSerializers",
                ).deserializeGenAIBizAgentViewModel(t))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.botSpeakerId = t.readString())
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.agenticActionRequest = t.readString())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isLastBotChunk = t.readBool())
              : t.skip(i);
            break;
          case 12:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.mediaUploadStatus = o(
                  "RpGenaiSctpCaptionsGenAIBotStateTypes",
                ).MediaUploadStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ve(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.turnUuid = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userSpeechStartTimestamp = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userSpeechEndTimestamp = t.readI64().toString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.botSpeechStartTimestamp = t.readI64().toString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userSpeechStartTimestampNtp = t.readI64().toString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userSpeechEndTimestampNtp = t.readI64().toString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.integrityFailure = t.readString())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userInterruptStartTimestampNtp = t.readI64().toString())
              : t.skip(a);
            break;
          case 9:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.postIds = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.postIds.push(u);
              }
            } else t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isRambleModeCreateIntentDetected = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.turnUuid === void 0 && (n.turnUuid = ""), n);
    }
    function He(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.turnId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.requestId = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.psiToolQueryPlan = o(
                  "PsiClientSearchTypesSerializers",
                ).deserializePSIToolQueryPlan(t))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.nextTurnDestination = o(
                  "PsiClientSearchTypesTypes",
                ).InfraStackType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.skipReplayPrompt = t.readBool())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ge(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.turnId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.requestId = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.psiToolQueryData = o(
                  "PsiClientSearchTypesSerializers",
                ).deserializePSIToolQueryData(t))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.previousTurnDestination = o(
                  "PsiClientSearchTypesTypes",
                ).InfraStackType.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ze(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.turnId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.requestId = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.psiChatResponseData = o(
                  "PsiClientSearchTypesSerializers",
                ).deserializeAIChatResponsePSIMetadata(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function je(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.turnId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.requestId = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.psiChatRequestData = o(
                  "PsiClientSearchTypesSerializers",
                ).deserializeAIChatRequestPSIMetadata(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.psiReplayedMessage = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ke(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conversationId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.messageId = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.pause = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Qe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.transferTarget = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.transferReason = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Xe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.callTransferInfo = Qe(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ye(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.state = o(
                  "RpGenaiSctpCaptionsGenAIBotStateTypes",
                ).LiveAiConnectionStateEnum.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.state === void 0 &&
          (n.state = o(
            "RpGenaiSctpCaptionsGenAIBotStateTypes",
          ).LiveAiConnectionStateEnum.cast(0)),
        n
      );
    }
    function Je(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.state = o(
                  "RpGenaiSctpCaptionsGenAIBotStateCoreTypes",
                ).BotStateType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.userContent = We(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.botContent = Ue(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.padding = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.turnMetaData = Ve(t))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.psiToolRequest = He(t))
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.modelStage = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.psiMetadata = ze(t))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.clientInstruction = o(
                  "ClientActionInLoopTypesSerializers",
                ).deserializeClientInstruction(t))
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.envelopedOutput = t.readString())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.confirmationAction = o(
                  "ActionConfirmationTypesTypes",
                ).ConfirmationAction.cast(t.readI32()))
              : t.skip(i);
            break;
          case 12:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.standardizedResponse = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = o(
                  "RpGenaiSctpCaptionsGenAIBotStateCoreSerializers",
                ).deserializeStandardizedResponseItem(t);
                n.standardizedResponse.push(c);
              }
            } else t.skip(i);
            break;
          case 13:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.simulationCallData = Xe(t))
              : t.skip(i);
            break;
          case 14:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.liveAiConnectionState = Ye(t))
              : t.skip(i);
            break;
          case 15:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mediaUploadComplete = o(
                  "ClientNotificationTypesSerializers",
                ).deserializeMediaUploadComplete(t))
              : t.skip(i);
            break;
          case 16:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.gqlRequestCorrelationId = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.state === void 0 &&
          (n.state = o(
            "RpGenaiSctpCaptionsGenAIBotStateCoreTypes",
          ).BotStateType.cast(0)),
        n
      );
    }
    function Ze(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.reqId = t.readI32())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.ugcBotId = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.personaId = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.threadId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.reqId === void 0 && (n.reqId = 0), n);
    }
    function et(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.reqId = t.readI32())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.statusCode = t.readI32())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.error = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.reqId === void 0 && (n.reqId = 0),
        n.statusCode === void 0 && (n.statusCode = 0),
        n
      );
    }
    function tt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.outputType = o(
                  "RpGenaiSctpCaptionsGenAIBotStateTypes",
                ).ClientOutputType.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function nt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.attachmentEntIds = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = t.readString();
                n.attachmentEntIds.push(c);
              }
            } else t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.psiToolResponse = Ge(t))
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.conversationHistory = [];
              for (var d = t.readListBegin(), m = 0; m < d.size; m++) {
                var p = o(
                  "PsiClientSearchTypesSerializers",
                ).deserializeChatMessage(t);
                n.conversationHistory.push(p);
              }
            } else t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.previousTurnDestination = o(
                  "PsiClientSearchTypesTypes",
                ).InfraStackType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.psiMetadata = je(t))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.psiReplayedMessage = t.readString())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.readAloudMetadata = Ke(t))
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.clientInstructionResponse = o(
                  "ClientActionInLoopTypesSerializers",
                ).deserializeClientInstructionResponse(t))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isConfirmationTurn = t.readBool())
              : t.skip(i);
            break;
          case 10:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.confirmationHistory = [];
              for (var _ = t.readListBegin(), f = 0; f < _.size; f++) {
                var g = o(
                  "PsiClientSearchTypesSerializers",
                ).deserializeChatMessage(t);
                n.confirmationHistory.push(g);
              }
            } else t.skip(i);
            break;
          case 11:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.media_message_ids = [];
              for (var h = t.readListBegin(), y = 0; y < h.size; y++) {
                var C = t.readString();
                n.media_message_ids.push(C);
              }
            } else t.skip(i);
            break;
          case 12:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.mediaUploadError = t.readString())
              : t.skip(i);
            break;
          case 13:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.storage_uri = [];
              for (var b = t.readListBegin(), v = 0; v < b.size; v++) {
                var S = t.readString();
                n.storage_uri.push(S);
              }
            } else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function rt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.botCapabilities = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readI32();
                n.botCapabilities.push(u);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ot(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.accountCenterToken = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.botCapability = rt(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function at(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).DOUBLE
              ? (n.x = t.readDouble())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).DOUBLE
              ? (n.y = t.readDouble())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.tapCaptureNtp = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.x === void 0 && (n.x = 0),
        n.y === void 0 && (n.y = 0),
        n.tapCaptureNtp === void 0 && (n.tapCaptureNtp = "0"),
        n
      );
    }
    function it(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.text = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.data = nt(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.otid = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.event = o(
                  "RpGenaiSctpCaptionsGenAIBotStateTypes",
                ).ClientInputEvent.cast(t.readI32()))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.promptId = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.handshake = ot(t))
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isSystemPromptMode = t.readBool())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.locationOverrides = o(
                  "LocationTypesSerializers",
                ).deserializeGenAILocationOverrides(t))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cosmos_client_message = t.readBinary())
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.tap = at(t))
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).DOUBLE
              ? (n.ttsSpeed = t.readDouble())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function lt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.type = o(
                  "RpGenaiSctpCaptionsGenAIBotStateTypes",
                ).ClientInputType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.method = o(
                  "RpGenaiSctpCaptionsGenAIBotStateTypes",
                ).ClientInputMethod.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.contents = it(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.outputParams = tt(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.type === void 0 &&
          (n.type = o(
            "RpGenaiSctpCaptionsGenAIBotStateTypes",
          ).ClientInputType.cast(0)),
        n.method === void 0 &&
          (n.method = o(
            "RpGenaiSctpCaptionsGenAIBotStateTypes",
          ).ClientInputMethod.cast(0)),
        n
      );
    }
    function st(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.serverToClientAudioCtpLatencyMs = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.roundtripAudioCtpLatencyMs = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.serverToClientAudioCtpLatencyMs === void 0 &&
          (n.serverToClientAudioCtpLatencyMs = "0"),
        n.roundtripAudioCtpLatencyMs === void 0 &&
          (n.roundtripAudioCtpLatencyMs = "0"),
        n
      );
    }
    function ut(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.ready = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.ready === void 0 && (n.ready = !1), n);
    }
    function ct(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.device = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.appName = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.event = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.device === void 0 && (n.device = ""),
        n.appName === void 0 && (n.appName = ""),
        n.event === void 0 && (n.event = ""),
        n
      );
    }
    function dt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.Uuid = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.msgSentTimestamp = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.msgRecvTimestamp = t.readI64().toString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.selecledtModel = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.modelTier = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sessionId = t.readString())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.useCase = o("GenaiCoreTypes").UseCase.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.Uuid === void 0 && (n.Uuid = ""),
        n.useCase === void 0 &&
          (n.useCase = o("GenaiCoreTypes").UseCase.cast(0)),
        n
      );
    }
    function mt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.contextTokens = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.contextTokens.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.speculativeContextTokens = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = t.readString();
                n.speculativeContextTokens.push(m);
              }
            } else t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.contextCommentaryIds = [];
              for (var p = t.readListBegin(), _ = 0; _ < p.size; _++) {
                var f = t.readString();
                n.contextCommentaryIds.push(f);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function pt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.contextType = o(
                  "RpGenaiSctpCaptionsGenAIBotStateTypes",
                ).ContextType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.fbid = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.contextId = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.context = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.data = mt(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.contextType === void 0 &&
          (n.contextType = o(
            "RpGenaiSctpCaptionsGenAIBotStateTypes",
          ).ContextType.cast(0)),
        n.context === void 0 && (n.context = ""),
        n
      );
    }
    function _t(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.messageText = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ft(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.actionType = o(
                  "RpGenaiSctpCaptionsGenAIBotStateTypes",
                ).AgenticActionRequestType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.contactName = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.content = _t(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.actionType === void 0 &&
          (n.actionType = o(
            "RpGenaiSctpCaptionsGenAIBotStateTypes",
          ).AgenticActionRequestType.cast(0)),
        n
      );
    }
    function gt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.feedRankingQuery = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ht(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.maxMessagesToSummarize = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function yt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.receiverName = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.message = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.userConfirmationGranted = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ct(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.shapeOfFeedCommandData = gt(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.threadSummaryCommandData = ht(t))
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sendMessageCommandData = yt(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function bt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.commandId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.commandType = o(
                  "RpGenaiSctpCaptionsGenAIBotStateTypes",
                ).VoiceCommandType.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.commandId === void 0 && (n.commandId = ""),
        n.commandType === void 0 &&
          (n.commandType = o(
            "RpGenaiSctpCaptionsGenAIBotStateTypes",
          ).VoiceCommandType.cast(0)),
        n
      );
    }
    function vt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.commandId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.commandType = o(
                  "RpGenaiSctpCaptionsGenAIBotStateTypes",
                ).VoiceCommandType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.error = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.commandData = Ct(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.commandId === void 0 && (n.commandId = ""),
        n.commandType === void 0 &&
          (n.commandType = o(
            "RpGenaiSctpCaptionsGenAIBotStateTypes",
          ).VoiceCommandType.cast(0)),
        n.commandData === void 0 && (n.commandData = q()),
        n
      );
    }
    function St(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.message = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Rt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.threadId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.threadId === void 0 && (n.threadId = ""), n);
    }
    function Lt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.errorMsg = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.errorMsg === void 0 && (n.errorMsg = ""), n);
    }
    function Et(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.status = o(
                  "RpGenaiSctpCaptionsGenAIBotStateTypes",
                ).AipRecordingStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.currentSection = t.readI32())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.status === void 0 &&
          (n.status = o(
            "RpGenaiSctpCaptionsGenAIBotStateTypes",
          ).AipRecordingStatus.cast(0)),
        n
      );
    }
    function kt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        (t.skip(a), t.readFieldEnd());
      }
      return (t.readStructEnd(), n);
    }
    function It(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.threadCreationResult = Tt(t))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mediaUploadComplete = o(
                  "ClientNotificationTypesSerializers",
                ).deserializeMediaUploadComplete(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.aipRecordingResult = Et(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.cosmosSessionCreated = kt(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Tt(t) {
      var n,
        o = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.success = Rt(t)), (n = "success"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: ThreadCreationResult; current field: success, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.error = Lt(t)), (n = "error"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: ThreadCreationResult; current field: error, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), o);
    }
    ((l.UserContent$DefaultConstructor = s),
      (l.LLMResponseContents$DefaultConstructor = u),
      (l.BotContent$DefaultConstructor = c),
      (l.TurnMetaData$DefaultConstructor = d),
      (l.PSIToolRequest$DefaultConstructor = m),
      (l.PSIToolResponse$DefaultConstructor = p),
      (l.PSIStateMessageMetadata$DefaultConstructor = _),
      (l.PSIClientInputMetadata$DefaultConstructor = f),
      (l.ReadAloudMetadata$DefaultConstructor = g),
      (l.CallTransferInfo$DefaultConstructor = h),
      (l.SimulationCallData$DefaultConstructor = y),
      (l.LiveAiConnectionState$DefaultConstructor = C),
      (l.StateMessage$DefaultConstructor = b),
      (l.UgcBotChangeRequest$DefaultConstructor = v),
      (l.UgcBotChangeResponse$DefaultConstructor = S),
      (l.ClientOutputParams$DefaultConstructor = R),
      (l.ClientInputData$DefaultConstructor = L),
      (l.BotCapability$DefaultConstructor = E),
      (l.ClientHandshake$DefaultConstructor = k),
      (l.ClientInputTap$DefaultConstructor = I),
      (l.ClientInputContents$DefaultConstructor = T),
      (l.ClientInputMessage$DefaultConstructor = D),
      (l.GenAiMediaStats$DefaultConstructor = x),
      (l.CreatorBotClientReadyMessage$DefaultConstructor = $),
      (l.WearableAppEvent$DefaultConstructor = P),
      (l.GenAiConnectState$DefaultConstructor = N),
      (l.UserContextData$DefaultConstructor = M),
      (l.UserContext$DefaultConstructor = w),
      (l.AgenticActionContent$DefaultConstructor = A),
      (l.AgenticActionRequest$DefaultConstructor = F),
      (l.ShapeOfFeedCommandData$DefaultConstructor = O),
      (l.ThreadSummaryCommandData$DefaultConstructor = B),
      (l.SendMessageCommandData$DefaultConstructor = W),
      (l.CommandData$DefaultConstructor = q),
      (l.VoiceCommandExecutionResult$DefaultConstructor = U),
      (l.VoiceCommand$DefaultConstructor = V),
      (l.RealtimeAIInternalDebugContent$DefaultConstructor = H),
      (l.ThreadSuccess$DefaultConstructor = G),
      (l.ThreadError$DefaultConstructor = z),
      (l.AipRecordingResult$DefaultConstructor = j),
      (l.CosmosSessionCreated$DefaultConstructor = K),
      (l.SessionInfo$DefaultConstructor = Q),
      (l.ThreadCreationResult$DefaultConstructor = X),
      (l.serializeUserContent = Y),
      (l.serializeLLMResponseContents = J),
      (l.serializeBotContent = Z),
      (l.serializeTurnMetaData = ee),
      (l.serializePSIToolRequest = te),
      (l.serializePSIToolResponse = ne),
      (l.serializePSIStateMessageMetadata = re),
      (l.serializePSIClientInputMetadata = oe),
      (l.serializeReadAloudMetadata = ae),
      (l.serializeCallTransferInfo = ie),
      (l.serializeSimulationCallData = le),
      (l.serializeLiveAiConnectionState = se),
      (l.serializeStateMessage = ue),
      (l.serializeUgcBotChangeRequest = ce),
      (l.serializeUgcBotChangeResponse = de),
      (l.serializeClientOutputParams = me),
      (l.serializeClientInputData = pe),
      (l.serializeBotCapability = _e),
      (l.serializeClientHandshake = fe),
      (l.serializeClientInputTap = ge),
      (l.serializeClientInputContents = he),
      (l.serializeClientInputMessage = ye),
      (l.serializeGenAiMediaStats = Ce),
      (l.serializeCreatorBotClientReadyMessage = be),
      (l.serializeWearableAppEvent = ve),
      (l.serializeGenAiConnectState = Se),
      (l.serializeUserContextData = Re),
      (l.serializeUserContext = Le),
      (l.serializeAgenticActionContent = Ee),
      (l.serializeAgenticActionRequest = ke),
      (l.serializeShapeOfFeedCommandData = Ie),
      (l.serializeThreadSummaryCommandData = Te),
      (l.serializeSendMessageCommandData = De),
      (l.serializeCommandData = xe),
      (l.serializeVoiceCommandExecutionResult = $e),
      (l.serializeVoiceCommand = Pe),
      (l.serializeRealtimeAIInternalDebugContent = Ne),
      (l.serializeThreadSuccess = Me),
      (l.serializeThreadError = we),
      (l.serializeAipRecordingResult = Ae),
      (l.serializeCosmosSessionCreated = Fe),
      (l.serializeSessionInfo = Oe),
      (l.serializeThreadCreationResult = Be),
      (l.deserializeUserContent = We),
      (l.deserializeLLMResponseContents = qe),
      (l.deserializeBotContent = Ue),
      (l.deserializeTurnMetaData = Ve),
      (l.deserializePSIToolRequest = He),
      (l.deserializePSIToolResponse = Ge),
      (l.deserializePSIStateMessageMetadata = ze),
      (l.deserializePSIClientInputMetadata = je),
      (l.deserializeReadAloudMetadata = Ke),
      (l.deserializeCallTransferInfo = Qe),
      (l.deserializeSimulationCallData = Xe),
      (l.deserializeLiveAiConnectionState = Ye),
      (l.deserializeStateMessage = Je),
      (l.deserializeUgcBotChangeRequest = Ze),
      (l.deserializeUgcBotChangeResponse = et),
      (l.deserializeClientOutputParams = tt),
      (l.deserializeClientInputData = nt),
      (l.deserializeBotCapability = rt),
      (l.deserializeClientHandshake = ot),
      (l.deserializeClientInputTap = at),
      (l.deserializeClientInputContents = it),
      (l.deserializeClientInputMessage = lt),
      (l.deserializeGenAiMediaStats = st),
      (l.deserializeCreatorBotClientReadyMessage = ut),
      (l.deserializeWearableAppEvent = ct),
      (l.deserializeGenAiConnectState = dt),
      (l.deserializeUserContextData = mt),
      (l.deserializeUserContext = pt),
      (l.deserializeAgenticActionContent = _t),
      (l.deserializeAgenticActionRequest = ft),
      (l.deserializeShapeOfFeedCommandData = gt),
      (l.deserializeThreadSummaryCommandData = ht),
      (l.deserializeSendMessageCommandData = yt),
      (l.deserializeCommandData = Ct),
      (l.deserializeVoiceCommandExecutionResult = bt),
      (l.deserializeVoiceCommand = vt),
      (l.deserializeRealtimeAIInternalDebugContent = St),
      (l.deserializeThreadSuccess = Rt),
      (l.deserializeThreadError = Lt),
      (l.deserializeAipRecordingResult = Et),
      (l.deserializeCosmosSessionCreated = kt),
      (l.deserializeSessionInfo = It),
      (l.deserializeThreadCreationResult = Tt));
  },
  98,
);
