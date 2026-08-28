__d(
  "ConversationBotTypesConversationBotTypesSerializers",
  ["ConversationBotTypesConversationBotTypesTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { promptType: "" };
    }
    function u() {
      return { selectedEmbodimentSettingsID: "" };
    }
    function c() {
      return {};
    }
    function d() {
      return {};
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
      return { adId: "" };
    }
    function g() {
      return { businessPhoneNumber: "" };
    }
    function h() {
      return { leadId: "0" };
    }
    function y() {
      return { metagenKey: "", workflowType: "" };
    }
    function C() {
      return {
        callActionId: "",
        dialAttemptId: "",
        sourceMediaExpertCallId: "",
        sourceCallCompletedAtMs: "0",
        expectedUseCase: o(
          "ConversationBotTypesConversationBotTypesTypes",
        ).PostCallSurveyPartnershipExpectedUseCase.cast(0),
      };
    }
    function b() {
      return {};
    }
    function v(t, n) {
      if (
        (n.writeStructBegin("DatingParams"),
        n.writeFieldBegin({
          fname: "promptType",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.promptType != null)
      )
        n.writeString(t.promptType);
      else {
        var o = "";
        n.writeString(o);
      }
      if ((n.writeFieldEnd(), t.promptInput != null)) {
        (n.writeFieldBegin({
          fname: "promptInput",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 2,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRING,
            size: Object.keys(t.promptInput).length,
          }));
        for (var a of Object.entries(t.promptInput)) {
          var i = a[0],
            l = a[1];
          (n.writeString(i), n.writeString(l));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function S(t, n) {
      if (
        (n.writeStructBegin("SelectedEmbodimentParams"),
        n.writeFieldBegin({
          fname: "selectedEmbodimentSettingsID",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.selectedEmbodimentSettingsID != null)
      )
        n.writeString(t.selectedEmbodimentSettingsID);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function R(t, n) {
      (n.writeStructBegin("VideoContext"),
        t.videoPrompt != null &&
          (n.writeFieldBegin({
            fname: "videoPrompt",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.videoPrompt),
          n.writeFieldEnd()),
        t.mediaSetId != null &&
          (n.writeFieldBegin({
            fname: "mediaSetId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.mediaSetId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function L(t, n) {
      (n.writeStructBegin("MobiusParams"),
        t.threadId != null &&
          (n.writeFieldBegin({
            fname: "threadId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.threadId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function E(t, n) {
      (n.writeStructBegin("ProactiveVoicePrompt"),
        t.fbPostId != null &&
          (n.writeFieldBegin({
            fname: "fbPostId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.fbPostId),
          n.writeFieldEnd()),
        t.prompt != null &&
          (n.writeFieldBegin({
            fname: "prompt",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.prompt),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function k(t, n) {
      (n.writeStructBegin("ConversationStarterPrompt"),
        t.text != null &&
          (n.writeFieldBegin({
            fname: "text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.text),
          n.writeFieldEnd()),
        t.promptId != null &&
          (n.writeFieldBegin({
            fname: "promptId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.promptId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function I(t, n) {
      (n.writeStructBegin("ModelOverrides"),
        t.modelTier != null &&
          (n.writeFieldBegin({
            fname: "modelTier",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.modelTier),
          n.writeFieldEnd()),
        t.topP != null &&
          (n.writeFieldBegin({
            fname: "topP",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.topP),
          n.writeFieldEnd()),
        t.topK != null &&
          (n.writeFieldBegin({
            fname: "topK",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.topK),
          n.writeFieldEnd()),
        t.temperature != null &&
          (n.writeFieldBegin({
            fname: "temperature",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.temperature),
          n.writeFieldEnd()),
        t.inferenceApi != null &&
          (n.writeFieldBegin({
            fname: "inferenceApi",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.inferenceApi),
          n.writeFieldEnd()),
        t.systemPrompt != null &&
          (n.writeFieldBegin({
            fname: "systemPrompt",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.systemPrompt),
          n.writeFieldEnd()),
        t.safetyLlmEnabled != null &&
          (n.writeFieldBegin({
            fname: "safetyLlmEnabled",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 7,
          }),
          n.writeBool(t.safetyLlmEnabled),
          n.writeFieldEnd()),
        t.streamingLlmHostOverride != null &&
          (n.writeFieldBegin({
            fname: "streamingLlmHostOverride",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.streamingLlmHostOverride),
          n.writeFieldEnd()),
        t.streamingLlmPortOverride != null &&
          (n.writeFieldBegin({
            fname: "streamingLlmPortOverride",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.streamingLlmPortOverride),
          n.writeFieldEnd()),
        t.historyOverride != null &&
          (n.writeFieldBegin({
            fname: "historyOverride",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.historyOverride),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function T(t, n) {
      if (
        (n.writeStructBegin("AdContext"),
        n.writeFieldBegin({
          fname: "adId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.adId != null)
      )
        n.writeString(t.adId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        t.conversationStarterPrompt != null &&
          (n.writeFieldBegin({
            fname: "conversationStarterPrompt",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.conversationStarterPrompt),
          n.writeFieldEnd()),
        t.conversationStarterResponse != null &&
          (n.writeFieldBegin({
            fname: "conversationStarterResponse",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.conversationStarterResponse),
          n.writeFieldEnd()),
        t.productIds != null)
      ) {
        (n.writeFieldBegin({
          fname: "productIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 4,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.productIds.length }));
        for (var a of t.productIds) n.writeString(a);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.pillProductIds != null) {
        (n.writeFieldBegin({
          fname: "pillProductIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 5,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.pillProductIds.length }));
        for (var i of t.pillProductIds) n.writeString(i);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function D(t, n) {
      if (
        (n.writeStructBegin("CallAdsContext"),
        n.writeFieldBegin({
          fname: "businessPhoneNumber",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.businessPhoneNumber != null)
      )
        n.writeString(t.businessPhoneNumber);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(),
        t.userPhoneNumber != null &&
          (n.writeFieldBegin({
            fname: "userPhoneNumber",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.userPhoneNumber),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function x(t, n) {
      if (
        (n.writeStructBegin("LeadAdsContext"),
        n.writeFieldBegin({
          fname: "leadId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.leadId != null)
      )
        n.writeI64(BigInt(t.leadId));
      else {
        var o = "0";
        n.writeI64(BigInt(o));
      }
      (n.writeFieldEnd(),
        t.businessPhoneNumber != null &&
          (n.writeFieldBegin({
            fname: "businessPhoneNumber",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.businessPhoneNumber),
          n.writeFieldEnd()),
        t.businessId != null &&
          (n.writeFieldBegin({
            fname: "businessId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.businessId),
          n.writeFieldEnd()),
        t.userPhoneNumber != null &&
          (n.writeFieldBegin({
            fname: "userPhoneNumber",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.userPhoneNumber),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function $(t, n) {
      if (
        (n.writeStructBegin("AgentKitContext"),
        n.writeFieldBegin({
          fname: "metagenKey",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.metagenKey != null)
      )
        n.writeString(t.metagenKey);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "workflowType", ftype: e.STRING, fid: 2 }),
        t.workflowType != null)
      )
        n.writeString(t.workflowType);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(),
        t.dslName != null &&
          (n.writeFieldBegin({
            fname: "dslName",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.dslName),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function P(t, n) {
      if (
        (n.writeStructBegin("PostCallSurveyPartnershipContext"),
        n.writeFieldBegin({
          fname: "callActionId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.callActionId != null)
      )
        n.writeString(t.callActionId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "dialAttemptId", ftype: e.STRING, fid: 2 }),
        t.dialAttemptId != null)
      )
        n.writeString(t.dialAttemptId);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "sourceMediaExpertCallId",
          ftype: e.STRING,
          fid: 3,
        }),
        t.sourceMediaExpertCallId != null)
      )
        n.writeString(t.sourceMediaExpertCallId);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "sourceCallCompletedAtMs",
          ftype: e.I64,
          fid: 4,
        }),
        t.sourceCallCompletedAtMs != null)
      )
        n.writeI64(BigInt(t.sourceCallCompletedAtMs));
      else {
        var s = "0";
        n.writeI64(BigInt(s));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "expectedUseCase", ftype: e.I32, fid: 5 }),
        t.expectedUseCase != null)
      ) {
        var u;
        n.writeI32((u = t.expectedUseCase) != null ? u : 0);
      } else {
        var c = o(
          "ConversationBotTypesConversationBotTypesTypes",
        ).PostCallSurveyPartnershipExpectedUseCase.cast(0);
        n.writeI32(c != null ? c : 0);
      }
      (n.writeFieldEnd(),
        t.participantDisplayName != null &&
          (n.writeFieldBegin({
            fname: "participantDisplayName",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.participantDisplayName),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function N(t, n) {
      (n.writeStructBegin("TalkerThinkerContext"),
        t.ttUseCase != null &&
          (n.writeFieldBegin({
            fname: "ttUseCase",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.ttUseCase),
          n.writeFieldEnd()),
        t.userDcat != null &&
          (n.writeFieldBegin({
            fname: "userDcat",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.userDcat),
          n.writeFieldEnd()),
        t.postCallSurveyPartnershipContext != null &&
          (n.writeFieldBegin({
            fname: "postCallSurveyPartnershipContext",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          P(t.postCallSurveyPartnershipContext, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function M(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.promptType = t.readString())
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.promptInput = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = t.readString();
                n.promptInput[u] = c;
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.promptType === void 0 && (n.promptType = ""),
        n
      );
    }
    function w(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.selectedEmbodimentSettingsID = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.selectedEmbodimentSettingsID === void 0 &&
          (n.selectedEmbodimentSettingsID = ""),
        n
      );
    }
    function A(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.videoPrompt = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.mediaSetId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function F(t) {
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
      return (t.readStructEnd(), n);
    }
    function O(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.fbPostId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.prompt = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function B(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.text = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.promptId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function W(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.modelTier = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.topP = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.topK = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.temperature = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.inferenceApi = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.systemPrompt = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.safetyLlmEnabled = t.readBool())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.streamingLlmHostOverride = t.readString())
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.streamingLlmPortOverride = t.readString())
              : t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.historyOverride = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function q(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.adId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conversationStarterPrompt = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conversationStarterResponse = t.readString())
              : t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.productIds = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.productIds.push(u);
              }
            } else t.skip(a);
            break;
          case 5:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.pillProductIds = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = t.readString();
                n.pillProductIds.push(m);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.adId === void 0 && (n.adId = ""), n);
    }
    function U(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.businessPhoneNumber = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userPhoneNumber = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.businessPhoneNumber === void 0 && (n.businessPhoneNumber = ""),
        n
      );
    }
    function V(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.leadId = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.businessPhoneNumber = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.businessId = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userPhoneNumber = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.leadId === void 0 && (n.leadId = "0"), n);
    }
    function H(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.metagenKey = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.workflowType = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.dslName = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.metagenKey === void 0 && (n.metagenKey = ""),
        n.workflowType === void 0 && (n.workflowType = ""),
        n
      );
    }
    function G(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.callActionId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.dialAttemptId = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sourceMediaExpertCallId = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.sourceCallCompletedAtMs = t.readI64().toString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.expectedUseCase = o(
                  "ConversationBotTypesConversationBotTypesTypes",
                ).PostCallSurveyPartnershipExpectedUseCase.cast(t.readI32()))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.participantDisplayName = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.callActionId === void 0 && (n.callActionId = ""),
        n.dialAttemptId === void 0 && (n.dialAttemptId = ""),
        n.sourceMediaExpertCallId === void 0 &&
          (n.sourceMediaExpertCallId = ""),
        n.sourceCallCompletedAtMs === void 0 &&
          (n.sourceCallCompletedAtMs = "0"),
        n.expectedUseCase === void 0 &&
          (n.expectedUseCase = o(
            "ConversationBotTypesConversationBotTypesTypes",
          ).PostCallSurveyPartnershipExpectedUseCase.cast(0)),
        n
      );
    }
    function z(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.ttUseCase = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userDcat = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.postCallSurveyPartnershipContext = G(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    ((l.DatingParams$DefaultConstructor = s),
      (l.SelectedEmbodimentParams$DefaultConstructor = u),
      (l.VideoContext$DefaultConstructor = c),
      (l.MobiusParams$DefaultConstructor = d),
      (l.ProactiveVoicePrompt$DefaultConstructor = m),
      (l.ConversationStarterPrompt$DefaultConstructor = p),
      (l.ModelOverrides$DefaultConstructor = _),
      (l.AdContext$DefaultConstructor = f),
      (l.CallAdsContext$DefaultConstructor = g),
      (l.LeadAdsContext$DefaultConstructor = h),
      (l.AgentKitContext$DefaultConstructor = y),
      (l.PostCallSurveyPartnershipContext$DefaultConstructor = C),
      (l.TalkerThinkerContext$DefaultConstructor = b),
      (l.serializeDatingParams = v),
      (l.serializeSelectedEmbodimentParams = S),
      (l.serializeVideoContext = R),
      (l.serializeMobiusParams = L),
      (l.serializeProactiveVoicePrompt = E),
      (l.serializeConversationStarterPrompt = k),
      (l.serializeModelOverrides = I),
      (l.serializeAdContext = T),
      (l.serializeCallAdsContext = D),
      (l.serializeLeadAdsContext = x),
      (l.serializeAgentKitContext = $),
      (l.serializePostCallSurveyPartnershipContext = P),
      (l.serializeTalkerThinkerContext = N),
      (l.deserializeDatingParams = M),
      (l.deserializeSelectedEmbodimentParams = w),
      (l.deserializeVideoContext = A),
      (l.deserializeMobiusParams = F),
      (l.deserializeProactiveVoicePrompt = O),
      (l.deserializeConversationStarterPrompt = B),
      (l.deserializeModelOverrides = W),
      (l.deserializeAdContext = q),
      (l.deserializeCallAdsContext = U),
      (l.deserializeLeadAdsContext = V),
      (l.deserializeAgentKitContext = H),
      (l.deserializePostCallSurveyPartnershipContext = G),
      (l.deserializeTalkerThinkerContext = z));
  },
  98,
);
