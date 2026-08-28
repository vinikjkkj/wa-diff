__d(
  "ConversationBotConversationBotStateSerializers",
  [
    "AudiogenStructsSerializers",
    "ConversationBotConversationBotStateTypes",
    "ConversationBotGatekeepersSerializers",
    "ConversationBotTypesConversationBotTypesSerializers",
    "DuplexBotModuleSerializers",
    "DuplexBotSharedTypesSerializers",
    "EndpointRulesStructsSerializers",
    "GenaiCoreTypes",
    "ThriftTypes",
  ],
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
      return {
        useCase: o("GenaiCoreTypes").UseCase.cast(0),
        calleeId: "",
        entrypoint: "",
      };
    }
    function m() {
      return {};
    }
    function p() {
      return {
        smcTier: "",
        capabilitySessionId: "",
        endpointRules: {},
        gkEnableMap: o(
          "ConversationBotGatekeepersSerializers",
        ).ConversationBotGatekeepers$DefaultConstructor(),
      };
    }
    function _() {
      return { enabled: !1 };
    }
    function f() {
      return { enabled: !1, dataChannelNodeId: "0" };
    }
    function g(t, n) {
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
    function h(t, n) {
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
    function y(t, n) {
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
    function C(t, n) {
      if (
        (n.writeStructBegin("ParticipantInputState"),
        t.clientIp != null &&
          (n.writeFieldBegin({
            fname: "clientIp",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.clientIp),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "useCase",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
        t.useCase != null)
      ) {
        var a;
        n.writeI32((a = t.useCase) != null ? a : 0);
      } else {
        var i = o("GenaiCoreTypes").UseCase.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "calleeId", ftype: e.STRING, fid: 3 }),
        t.calleeId != null)
      )
        n.writeString(t.calleeId);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "entrypoint", ftype: e.STRING, fid: 4 }),
        t.entrypoint != null)
      )
        n.writeString(t.entrypoint);
      else {
        var s = "";
        n.writeString(s);
      }
      if (
        (n.writeFieldEnd(),
        t.metaAiEphemeralThreadId != null &&
          (n.writeFieldBegin({
            fname: "metaAiEphemeralThreadId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.metaAiEphemeralThreadId),
          n.writeFieldEnd()),
        t.llmModelName != null &&
          (n.writeFieldBegin({
            fname: "llmModelName",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.llmModelName),
          n.writeFieldEnd()),
        t.promptSessionId != null &&
          (n.writeFieldBegin({
            fname: "promptSessionId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.promptSessionId),
          n.writeFieldEnd()),
        t.entrypointRawValue != null &&
          (n.writeFieldBegin({
            fname: "entrypointRawValue",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.entrypointRawValue),
          n.writeFieldEnd()),
        t.adId != null &&
          (n.writeFieldBegin({
            fname: "adId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.adId),
          n.writeFieldEnd()),
        t.safetyLlmModelName != null &&
          (n.writeFieldBegin({
            fname: "safetyLlmModelName",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.safetyLlmModelName),
          n.writeFieldEnd()),
        t.proactiveVoicePrompt != null &&
          (n.writeFieldBegin({
            fname: "proactiveVoicePrompt",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 11,
          }),
          o(
            "ConversationBotTypesConversationBotTypesSerializers",
          ).serializeProactiveVoicePrompt(t.proactiveVoicePrompt, n),
          n.writeFieldEnd()),
        t.callTrigger != null &&
          (n.writeFieldBegin({
            fname: "callTrigger",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 12,
          }),
          n.writeString(t.callTrigger),
          n.writeFieldEnd()),
        t.systemPrompt != null &&
          (n.writeFieldBegin({
            fname: "systemPrompt",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 13,
          }),
          n.writeString(t.systemPrompt),
          n.writeFieldEnd()),
        t.conversationStarterPrompt != null &&
          (n.writeFieldBegin({
            fname: "conversationStarterPrompt",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 14,
          }),
          o(
            "ConversationBotTypesConversationBotTypesSerializers",
          ).serializeConversationStarterPrompt(t.conversationStarterPrompt, n),
          n.writeFieldEnd()),
        t.conversationHistory != null &&
          (n.writeFieldBegin({
            fname: "conversationHistory",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 15,
          }),
          n.writeString(t.conversationHistory),
          n.writeFieldEnd()),
        t.modelOverrides != null &&
          (n.writeFieldBegin({
            fname: "modelOverrides",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 16,
          }),
          o(
            "ConversationBotTypesConversationBotTypesSerializers",
          ).serializeModelOverrides(t.modelOverrides, n),
          n.writeFieldEnd()),
        t.preferredModel != null)
      ) {
        var u;
        (n.writeFieldBegin({
          fname: "preferredModel",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 17,
        }),
          n.writeI32((u = t.preferredModel) != null ? u : 0),
          n.writeFieldEnd());
      }
      if (
        (t.adContext != null &&
          (n.writeFieldBegin({
            fname: "adContext",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 18,
          }),
          o(
            "ConversationBotTypesConversationBotTypesSerializers",
          ).serializeAdContext(t.adContext, n),
          n.writeFieldEnd()),
        t.sessionId != null &&
          (n.writeFieldBegin({
            fname: "sessionId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 19,
          }),
          n.writeString(t.sessionId),
          n.writeFieldEnd()),
        t.mobiusParams != null &&
          (n.writeFieldBegin({
            fname: "mobiusParams",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 20,
          }),
          o(
            "ConversationBotTypesConversationBotTypesSerializers",
          ).serializeMobiusParams(t.mobiusParams, n),
          n.writeFieldEnd()),
        t.videoEmbodimentEnabled != null &&
          (n.writeFieldBegin({
            fname: "videoEmbodimentEnabled",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 21,
          }),
          n.writeBool(t.videoEmbodimentEnabled),
          n.writeFieldEnd()),
        t.psiQueryEnabled != null &&
          (n.writeFieldBegin({
            fname: "psiQueryEnabled",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 23,
          }),
          n.writeString(t.psiQueryEnabled),
          n.writeFieldEnd()),
        t.psiPerQueryOptInEnabled != null &&
          (n.writeFieldBegin({
            fname: "psiPerQueryOptInEnabled",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 24,
          }),
          n.writeBool(t.psiPerQueryOptInEnabled),
          n.writeFieldEnd()),
        t.graphqlQueryContext != null &&
          (n.writeFieldBegin({
            fname: "graphqlQueryContext",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 25,
          }),
          o("DuplexBotSharedTypesSerializers").serializeGraphQLQueryContext(
            t.graphqlQueryContext,
            n,
          ),
          n.writeFieldEnd()),
        t.genAiTier != null &&
          (n.writeFieldBegin({
            fname: "genAiTier",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 26,
          }),
          n.writeString(t.genAiTier),
          n.writeFieldEnd()),
        t.waveformsSession != null &&
          (n.writeFieldBegin({
            fname: "waveformsSession",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 28,
          }),
          o("DuplexBotSharedTypesSerializers").serializeWaveformsSession(
            t.waveformsSession,
            n,
          ),
          n.writeFieldEnd()),
        t.datingParams != null &&
          (n.writeFieldBegin({
            fname: "datingParams",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 29,
          }),
          o(
            "ConversationBotTypesConversationBotTypesSerializers",
          ).serializeDatingParams(t.datingParams, n),
          n.writeFieldEnd()),
        t.selectedEmbodimentParams != null &&
          (n.writeFieldBegin({
            fname: "selectedEmbodimentParams",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 30,
          }),
          o(
            "ConversationBotTypesConversationBotTypesSerializers",
          ).serializeSelectedEmbodimentParams(t.selectedEmbodimentParams, n),
          n.writeFieldEnd()),
        t.videoContext != null &&
          (n.writeFieldBegin({
            fname: "videoContext",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 31,
          }),
          o(
            "ConversationBotTypesConversationBotTypesSerializers",
          ).serializeVideoContext(t.videoContext, n),
          n.writeFieldEnd()),
        t.sessionCount != null)
      ) {
        (n.writeFieldBegin({
          fname: "sessionCount",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 32,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRING,
            size: Object.keys(t.sessionCount).length,
          }));
        for (var c of Object.entries(t.sessionCount)) {
          var d = c[0],
            m = c[1];
          (n.writeString(d), n.writeString(m));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (t.agentKitContext != null &&
        (n.writeFieldBegin({
          fname: "agentKitContext",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 33,
        }),
        o(
          "ConversationBotTypesConversationBotTypesSerializers",
        ).serializeAgentKitContext(t.agentKitContext, n),
        n.writeFieldEnd()),
        t.callAdsContext != null &&
          (n.writeFieldBegin({
            fname: "callAdsContext",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 34,
          }),
          o(
            "ConversationBotTypesConversationBotTypesSerializers",
          ).serializeCallAdsContext(t.callAdsContext, n),
          n.writeFieldEnd()),
        t.shouldCreateUserThread != null &&
          (n.writeFieldBegin({
            fname: "shouldCreateUserThread",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 35,
          }),
          n.writeBool(t.shouldCreateUserThread),
          n.writeFieldEnd()),
        t.enableGenaiUnifiedResponse != null &&
          (n.writeFieldBegin({
            fname: "enableGenaiUnifiedResponse",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 36,
          }),
          n.writeBool(t.enableGenaiUnifiedResponse),
          n.writeFieldEnd()),
        t.appLoadSessionConfig != null &&
          (n.writeFieldBegin({
            fname: "appLoadSessionConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 37,
          }),
          n.writeString(t.appLoadSessionConfig),
          n.writeFieldEnd()),
        t.gpsLocation != null &&
          (n.writeFieldBegin({
            fname: "gpsLocation",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 38,
          }),
          o("DuplexBotSharedTypesSerializers").serializeGpsLocation(
            t.gpsLocation,
            n,
          ),
          n.writeFieldEnd()),
        t.personaId != null &&
          (n.writeFieldBegin({
            fname: "personaId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 39,
          }),
          n.writeString(t.personaId),
          n.writeFieldEnd()),
        t.aiCallingSessionParams != null &&
          (n.writeFieldBegin({
            fname: "aiCallingSessionParams",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 40,
          }),
          n.writeBinary(t.aiCallingSessionParams),
          n.writeFieldEnd()),
        t.language != null &&
          (n.writeFieldBegin({
            fname: "language",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 41,
          }),
          n.writeString(t.language),
          n.writeFieldEnd()),
        t.vowelCanvasClientManifest != null &&
          (n.writeFieldBegin({
            fname: "vowelCanvasClientManifest",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 42,
          }),
          n.writeString(t.vowelCanvasClientManifest),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function b(e, t) {
      (t.writeStructBegin("ParticipantOutputState"),
        t.writeFieldStop(),
        t.writeStructEnd());
    }
    function v(t, n) {
      if (
        (n.writeStructBegin("ConferenceOutputState"),
        n.writeFieldBegin({
          fname: "smcTier",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.smcTier != null)
      )
        n.writeString(t.smcTier);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "capabilitySessionId",
          ftype: e.STRING,
          fid: 2,
        }),
        t.capabilitySessionId != null)
      )
        n.writeString(t.capabilitySessionId);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "endpointRules", ftype: e.MAP, fid: 3 }),
        t.endpointRules != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.LIST,
          size: Object.keys(t.endpointRules).length,
        });
        for (var l of Object.entries(t.endpointRules)) {
          var s = l[0],
            u = l[1];
          (n.writeI32(Number(s)),
            n.writeListBegin({
              etype: (e || (e = r("ThriftTypes"))).STRUCT,
              size: u.length,
            }));
          for (var c of u)
            o("EndpointRulesStructsSerializers").serializeEndpointRule(c, n);
          n.writeListEnd();
        }
        n.writeMapEnd();
      } else {
        var d = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.LIST,
          size: Object.keys(d).length,
        });
        for (var m of Object.entries(d)) {
          var p = m[0],
            _ = m[1];
          (n.writeI32(Number(p)),
            n.writeListBegin({
              etype: (e || (e = r("ThriftTypes"))).STRUCT,
              size: _.length,
            }));
          for (var f of _)
            o("EndpointRulesStructsSerializers").serializeEndpointRule(f, n);
          n.writeListEnd();
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        t.cryptoAuthToken != null &&
          (n.writeFieldBegin({
            fname: "cryptoAuthToken",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.cryptoAuthToken),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "gkEnableMap", ftype: e.STRUCT, fid: 5 }),
        t.gkEnableMap != null)
      )
        o(
          "ConversationBotGatekeepersSerializers",
        ).serializeConversationBotGatekeepers(t.gkEnableMap, n);
      else {
        var g = o(
          "ConversationBotGatekeepersSerializers",
        ).ConversationBotGatekeepers$DefaultConstructor();
        o(
          "ConversationBotGatekeepersSerializers",
        ).serializeConversationBotGatekeepers(g, n);
      }
      if (
        (n.writeFieldEnd(),
        t.audioPersona != null &&
          (n.writeFieldBegin({
            fname: "audioPersona",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.audioPersona),
          n.writeFieldEnd()),
        t.llmPersona != null &&
          (n.writeFieldBegin({
            fname: "llmPersona",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.llmPersona),
          n.writeFieldEnd()),
        t.audioGenVoice != null &&
          (n.writeFieldBegin({
            fname: "audioGenVoice",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 9,
          }),
          o("AudiogenStructsSerializers").serializeAudioGenVoice(
            t.audioGenVoice,
            n,
          ),
          n.writeFieldEnd()),
        t.disableVideoTrack != null &&
          (n.writeFieldBegin({
            fname: "disableVideoTrack",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 10,
          }),
          n.writeBool(t.disableVideoTrack),
          n.writeFieldEnd()),
        t.duplexBotModuleStartConfig != null &&
          (n.writeFieldBegin({
            fname: "duplexBotModuleStartConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 11,
          }),
          o("DuplexBotModuleSerializers").serializeDuplexBotModuleStartConfig(
            t.duplexBotModuleStartConfig,
            n,
          ),
          n.writeFieldEnd()),
        t.bots != null)
      ) {
        (n.writeFieldBegin({
          fname: "bots",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 13,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.bots.length }));
        for (var h of t.bots)
          o("DuplexBotModuleSerializers").serializeMobiusBotConfig(h, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function S(t, n) {
      if (
        (n.writeStructBegin("ConversationBotParticipantInputState"),
        n.writeFieldBegin({
          fname: "enabled",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.enabled != null)
      )
        n.writeBool(t.enabled);
      else {
        var o = !1;
        n.writeBool(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function R(t, n) {
      if (
        (n.writeStructBegin("ConversationBotParticipantOutputState"),
        n.writeFieldBegin({
          fname: "enabled",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.enabled != null)
      )
        n.writeBool(t.enabled);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "dataChannelNodeId", ftype: e.I64, fid: 2 }),
        t.dataChannelNodeId != null)
      )
        n.writeI64(BigInt(t.dataChannelNodeId));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function L(t) {
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
    function E(t) {
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
    function k(t) {
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
    function I(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.clientIp = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.useCase = o("GenaiCoreTypes").UseCase.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.calleeId = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.entrypoint = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.metaAiEphemeralThreadId = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.llmModelName = t.readString())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.promptSessionId = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.entrypointRawValue = t.readString())
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.adId = t.readString())
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.safetyLlmModelName = t.readString())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.proactiveVoicePrompt = o(
                  "ConversationBotTypesConversationBotTypesSerializers",
                ).deserializeProactiveVoicePrompt(t))
              : t.skip(i);
            break;
          case 12:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.callTrigger = t.readString())
              : t.skip(i);
            break;
          case 13:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.systemPrompt = t.readString())
              : t.skip(i);
            break;
          case 14:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.conversationStarterPrompt = o(
                  "ConversationBotTypesConversationBotTypesSerializers",
                ).deserializeConversationStarterPrompt(t))
              : t.skip(i);
            break;
          case 15:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conversationHistory = t.readString())
              : t.skip(i);
            break;
          case 16:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.modelOverrides = o(
                  "ConversationBotTypesConversationBotTypesSerializers",
                ).deserializeModelOverrides(t))
              : t.skip(i);
            break;
          case 17:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.preferredModel = o(
                  "ConversationBotConversationBotStateTypes",
                ).PreferredModel.cast(t.readI32()))
              : t.skip(i);
            break;
          case 18:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.adContext = o(
                  "ConversationBotTypesConversationBotTypesSerializers",
                ).deserializeAdContext(t))
              : t.skip(i);
            break;
          case 19:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sessionId = t.readString())
              : t.skip(i);
            break;
          case 20:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mobiusParams = o(
                  "ConversationBotTypesConversationBotTypesSerializers",
                ).deserializeMobiusParams(t))
              : t.skip(i);
            break;
          case 21:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.videoEmbodimentEnabled = t.readBool())
              : t.skip(i);
            break;
          case 23:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.psiQueryEnabled = t.readString())
              : t.skip(i);
            break;
          case 24:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.psiPerQueryOptInEnabled = t.readBool())
              : t.skip(i);
            break;
          case 25:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.graphqlQueryContext = o(
                  "DuplexBotSharedTypesSerializers",
                ).deserializeGraphQLQueryContext(t))
              : t.skip(i);
            break;
          case 26:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.genAiTier = t.readString())
              : t.skip(i);
            break;
          case 28:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.waveformsSession = o(
                  "DuplexBotSharedTypesSerializers",
                ).deserializeWaveformsSession(t))
              : t.skip(i);
            break;
          case 29:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.datingParams = o(
                  "ConversationBotTypesConversationBotTypesSerializers",
                ).deserializeDatingParams(t))
              : t.skip(i);
            break;
          case 30:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.selectedEmbodimentParams = o(
                  "ConversationBotTypesConversationBotTypesSerializers",
                ).deserializeSelectedEmbodimentParams(t))
              : t.skip(i);
            break;
          case 31:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.videoContext = o(
                  "ConversationBotTypesConversationBotTypesSerializers",
                ).deserializeVideoContext(t))
              : t.skip(i);
            break;
          case 32:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.sessionCount = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readString(),
                  d = t.readString();
                n.sessionCount[c] = d;
              }
            } else t.skip(i);
            break;
          case 33:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.agentKitContext = o(
                  "ConversationBotTypesConversationBotTypesSerializers",
                ).deserializeAgentKitContext(t))
              : t.skip(i);
            break;
          case 34:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.callAdsContext = o(
                  "ConversationBotTypesConversationBotTypesSerializers",
                ).deserializeCallAdsContext(t))
              : t.skip(i);
            break;
          case 35:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.shouldCreateUserThread = t.readBool())
              : t.skip(i);
            break;
          case 36:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableGenaiUnifiedResponse = t.readBool())
              : t.skip(i);
            break;
          case 37:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.appLoadSessionConfig = t.readString())
              : t.skip(i);
            break;
          case 38:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.gpsLocation = o(
                  "DuplexBotSharedTypesSerializers",
                ).deserializeGpsLocation(t))
              : t.skip(i);
            break;
          case 39:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.personaId = t.readString())
              : t.skip(i);
            break;
          case 40:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.aiCallingSessionParams = t.readBinary())
              : t.skip(i);
            break;
          case 41:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.language = t.readString())
              : t.skip(i);
            break;
          case 42:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.vowelCanvasClientManifest = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.useCase === void 0 &&
          (n.useCase = o("GenaiCoreTypes").UseCase.cast(0)),
        n.calleeId === void 0 && (n.calleeId = ""),
        n.entrypoint === void 0 && (n.entrypoint = ""),
        n
      );
    }
    function T(t) {
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
    function D(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.smcTier = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.capabilitySessionId = t.readString())
              : t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.endpointRules = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                for (
                  var c = t.readI32(), d = [], m = t.readListBegin(), p = 0;
                  p < m.size;
                  p++
                ) {
                  var _ = o(
                    "EndpointRulesStructsSerializers",
                  ).deserializeEndpointRule(t);
                  d.push(_);
                }
                n.endpointRules[c] = d;
              }
            } else t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cryptoAuthToken = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.gkEnableMap = o(
                  "ConversationBotGatekeepersSerializers",
                ).deserializeConversationBotGatekeepers(t))
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.audioPersona = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.llmPersona = t.readString())
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.audioGenVoice = o(
                  "AudiogenStructsSerializers",
                ).deserializeAudioGenVoice(t))
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.disableVideoTrack = t.readBool())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.duplexBotModuleStartConfig = o(
                  "DuplexBotModuleSerializers",
                ).deserializeDuplexBotModuleStartConfig(t))
              : t.skip(i);
            break;
          case 13:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.bots = [];
              for (var f = t.readListBegin(), g = 0; g < f.size; g++) {
                var h = o(
                  "DuplexBotModuleSerializers",
                ).deserializeMobiusBotConfig(t);
                n.bots.push(h);
              }
            } else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.smcTier === void 0 && (n.smcTier = ""),
        n.capabilitySessionId === void 0 && (n.capabilitySessionId = ""),
        n.endpointRules === void 0 && (n.endpointRules = {}),
        n.gkEnableMap === void 0 &&
          (n.gkEnableMap = o(
            "ConversationBotGatekeepersSerializers",
          ).ConversationBotGatekeepers$DefaultConstructor()),
        n
      );
    }
    function x(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enabled = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.enabled === void 0 && (n.enabled = !1), n);
    }
    function $(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enabled = t.readBool())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.dataChannelNodeId = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.enabled === void 0 && (n.enabled = !1),
        n.dataChannelNodeId === void 0 && (n.dataChannelNodeId = "0"),
        n
      );
    }
    ((l.DatingParams$DefaultConstructor = s),
      (l.SelectedEmbodimentParams$DefaultConstructor = u),
      (l.VideoContext$DefaultConstructor = c),
      (l.ParticipantInputState$DefaultConstructor = d),
      (l.ParticipantOutputState$DefaultConstructor = m),
      (l.ConferenceOutputState$DefaultConstructor = p),
      (l.ConversationBotParticipantInputState$DefaultConstructor = _),
      (l.ConversationBotParticipantOutputState$DefaultConstructor = f),
      (l.serializeDatingParams = g),
      (l.serializeSelectedEmbodimentParams = h),
      (l.serializeVideoContext = y),
      (l.serializeParticipantInputState = C),
      (l.serializeParticipantOutputState = b),
      (l.serializeConferenceOutputState = v),
      (l.serializeConversationBotParticipantInputState = S),
      (l.serializeConversationBotParticipantOutputState = R),
      (l.deserializeDatingParams = L),
      (l.deserializeSelectedEmbodimentParams = E),
      (l.deserializeVideoContext = k),
      (l.deserializeParticipantInputState = I),
      (l.deserializeParticipantOutputState = T),
      (l.deserializeConferenceOutputState = D),
      (l.deserializeConversationBotParticipantInputState = x),
      (l.deserializeConversationBotParticipantOutputState = $));
  },
  98,
);
