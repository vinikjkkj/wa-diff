__d(
  "DuplexBotModuleSerializers",
  [
    "AudiogenStructsSerializers",
    "DuplexBotModuleTypes",
    "DuplexBotSharedTypesSerializers",
    "GenaiCoreTypes",
    "MobiusProductConfigSerializers",
    "ThriftTypes",
    "TtsConfigSerializers",
    "XrAiAgentsMediaGenModuleSerializers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        universeName: "",
        exposureType: o("DuplexBotModuleTypes").ExposureType.cast(0),
      };
    }
    function u() {
      return { gks: {}, defaultValue: !1 };
    }
    function c() {
      return { qes: {} };
    }
    function d() {
      return { tier: "", host: "", port: 0 };
    }
    function m() {
      return { agentId: "0", personaId: "0", corpusId: "0" };
    }
    function p() {
      return {};
    }
    function _() {
      return { threadId: "" };
    }
    function f() {
      return { botId: "", enableVideo: !1 };
    }
    function g() {
      return {
        llmPersona: "",
        botId: "0",
        UgcExperienceType: o("DuplexBotModuleTypes").UgcExperience.cast(0),
      };
    }
    function h() {
      return { videoModelName: "", modelDatasConfig: "", modelStage: "" };
    }
    function y() {
      return {};
    }
    function C() {
      return { agentSettingsId: "", sipCallId: "", callerPhoneNumber: "" };
    }
    function b() {
      return {
        fanId: "0",
        creatorId: "0",
        audioPersona: "meta_ai_s11",
        enableSpeculativeRequests: !0,
        metaGenSmc: "",
        fieldTrial: Object.fromEntries([
          [
            "random_greetings",
            "Hi, how can I help you?;Hi! What\u2019s your name?;Hi! What\u2019s on your mind?",
          ],
        ]),
        asrLanguage: "en",
        asrModel: "live_meta_ai_rp",
        enableAsrHallucinationFilter: !0,
        audioGenVoice: o(
          "AudiogenStructsSerializers",
        ).AudioGenVoice$DefaultConstructor(),
        genaiUseCase: o("GenaiCoreTypes").UseCase.cast(0),
        secrets: {},
      };
    }
    function v() {
      return { userId: "", appId: "" };
    }
    function S() {
      return {
        mgpOmnibotChatTier: "",
        omniAICustomerConversationFbid: "0",
        agentConfigPath: "",
        conversationToken: "",
        adId: "",
        adsContent: "",
        history: [],
        agentConfigFbid: "0",
        userId: "",
        showNoticeOnHandoffAttempt: !1,
        additionalFieldTrial: {},
        additionalFlags: {},
      };
    }
    function R() {
      return { adId: "", pageId: "0" };
    }
    function L() {
      return {
        role: o("DuplexBotModuleTypes").MessageRole.cast(0),
        content: "",
      };
    }
    function E() {
      return {
        startOfCallSilenceTolerationMs: "2000",
        timeBetweenPromptsMs: "1000",
        timeBetweenSetsOfPromptsMs: "15000",
        promptsPerSet: 5,
        promptsSentToClientAtATime: 1,
      };
    }
    function k() {
      return {};
    }
    function I() {
      return {};
    }
    function T() {
      return { userLid: "0" };
    }
    function D() {
      return {};
    }
    function x() {
      return { keyChainGroupName: "", keyChainSecretKeyName: "" };
    }
    function $() {
      return {
        retrievePlmWords: !1,
        enableAudioBufferingWhileLoadingPlmWords: !1,
        audioBufferingPlmWaitTimeMs: 0,
      };
    }
    function P() {
      return { asrPlmWordsSettingsUseCaseMap: {} };
    }
    function N(t, n) {
      if (
        (n.writeStructBegin("QEFetchConfig"),
        n.writeFieldBegin({
          fname: "universeName",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.universeName != null)
      )
        n.writeString(t.universeName);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "exposureType", ftype: e.I32, fid: 2 }),
        t.exposureType != null)
      ) {
        var i;
        n.writeI32((i = t.exposureType) != null ? i : 0);
      } else {
        var l = o("DuplexBotModuleTypes").ExposureType.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function M(t, n) {
      if (
        (n.writeStructBegin("GkConfig"),
        n.writeFieldBegin({
          fname: "gks",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.gks != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRING,
          size: Object.keys(t.gks).length,
        });
        for (var o of Object.entries(t.gks)) {
          var a,
            i = o[0],
            l = o[1];
          (n.writeI32((a = Number(i)) != null ? a : 0), n.writeString(l));
        }
        n.writeMapEnd();
      } else {
        var s = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRING,
          size: Object.keys(s).length,
        });
        for (var u of Object.entries(s)) {
          var c,
            d = u[0],
            m = u[1];
          (n.writeI32((c = Number(d)) != null ? c : 0), n.writeString(m));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "defaultValue", ftype: e.BOOL, fid: 2 }),
        t.defaultValue != null)
      )
        n.writeBool(t.defaultValue);
      else {
        var p = !1;
        n.writeBool(p);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function w(t, n) {
      if (
        (n.writeStructBegin("QeConfig"),
        n.writeFieldBegin({
          fname: "qes",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.qes != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(t.qes).length,
        });
        for (var o of Object.entries(t.qes)) {
          var a,
            i = o[0],
            l = o[1];
          (n.writeI32((a = Number(i)) != null ? a : 0), N(l, n));
        }
        n.writeMapEnd();
      } else {
        var s = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(s).length,
        });
        for (var u of Object.entries(s)) {
          var c,
            d = u[0],
            m = u[1];
          (n.writeI32((c = Number(d)) != null ? c : 0), N(m, n));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function A(t, n) {
      if (
        (n.writeStructBegin("IgCreatorAiEmbeddingHostInfo"),
        n.writeFieldBegin({
          fname: "tier",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.tier != null)
      )
        n.writeString(t.tier);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "host", ftype: e.STRING, fid: 2 }),
        t.host != null)
      )
        n.writeString(t.host);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "port", ftype: e.I32, fid: 3 }),
        t.port != null)
      )
        n.writeI32(t.port);
      else {
        var i = 0;
        n.writeI32(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function F(t, n) {
      if (
        (n.writeStructBegin("IgCreatorAiPromptContext"),
        n.writeFieldBegin({
          fname: "agentId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.agentId != null)
      )
        n.writeI64(BigInt(t.agentId));
      else {
        var o = "0";
        n.writeI64(BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "personaId", ftype: e.I64, fid: 2 }),
        t.personaId != null)
      )
        n.writeI64(BigInt(t.personaId));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "corpusId", ftype: e.I64, fid: 3 }),
        t.corpusId != null)
      )
        n.writeI64(BigInt(t.corpusId));
      else {
        var i = "0";
        n.writeI64(BigInt(i));
      }
      if (
        (n.writeFieldEnd(),
        t.operatorCache != null &&
          (n.writeFieldBegin({
            fname: "operatorCache",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.operatorCache),
          n.writeFieldEnd()),
        t.embeddingTier != null &&
          (n.writeFieldBegin({
            fname: "embeddingTier",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.embeddingTier),
          n.writeFieldEnd()),
        t.embeddingHostSelection != null)
      ) {
        (n.writeFieldBegin({
          fname: "embeddingHostSelection",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 6,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.embeddingHostSelection.length,
          }));
        for (var l of t.embeddingHostSelection) A(l, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function O(t, n) {
      if (
        (n.writeStructBegin("DuplexBotModuleCreateConfig"),
        t.logPath != null &&
          (n.writeFieldBegin({
            fname: "logPath",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.logPath),
          n.writeFieldEnd()),
        t.mediaGen != null &&
          (n.writeFieldBegin({
            fname: "mediaGen",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 6,
          }),
          o(
            "XrAiAgentsMediaGenModuleSerializers",
          ).serializeXrAiAgentsMediaGenModuleCreateConfig(t.mediaGen, n),
          n.writeFieldEnd()),
        t.useExternalExecutor != null &&
          (n.writeFieldBegin({
            fname: "useExternalExecutor",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 7,
          }),
          n.writeBool(t.useExternalExecutor),
          n.writeFieldEnd()),
        t.prewarmMediaProc != null &&
          (n.writeFieldBegin({
            fname: "prewarmMediaProc",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 8,
          }),
          n.writeBool(t.prewarmMediaProc),
          n.writeFieldEnd()),
        t.processCtpAudioFrameMetadata != null &&
          (n.writeFieldBegin({
            fname: "processCtpAudioFrameMetadata",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 9,
          }),
          n.writeBool(t.processCtpAudioFrameMetadata),
          n.writeFieldEnd()),
        t.botPersonaConfigs != null)
      ) {
        (n.writeFieldBegin({
          fname: "botPersonaConfigs",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 10,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRUCT,
            size: Object.keys(t.botPersonaConfigs).length,
          }));
        for (var a of Object.entries(t.botPersonaConfigs)) {
          var i = a[0],
            l = a[1];
          (n.writeString(i), V(l, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function B(t, n) {
      if (
        (n.writeStructBegin("MobiusConfig"),
        n.writeFieldBegin({
          fname: "threadId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.threadId != null)
      )
        n.writeString(t.threadId);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(),
        t.metachainApplicationName != null &&
          (n.writeFieldBegin({
            fname: "metachainApplicationName",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.metachainApplicationName)),
          n.writeFieldEnd()),
        t.personaId != null &&
          (n.writeFieldBegin({
            fname: "personaId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 3,
          }),
          n.writeI64(BigInt(t.personaId)),
          n.writeFieldEnd()),
        t.productConfig != null &&
          (n.writeFieldBegin({
            fname: "productConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          o("MobiusProductConfigSerializers").serializeMobiusProductConfig(
            t.productConfig,
            n,
          ),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function W(t, n) {
      if (
        (n.writeStructBegin("MobiusBotConfig"),
        n.writeFieldBegin({
          fname: "botId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.botId != null)
      )
        n.writeString(t.botId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "enableVideo", ftype: e.BOOL, fid: 2 }),
        t.enableVideo != null)
      )
        n.writeBool(t.enableVideo);
      else {
        var a = !1;
        n.writeBool(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function q(t, n) {
      if (
        (n.writeStructBegin("UGCConfig"),
        n.writeFieldBegin({
          fname: "llmPersona",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.llmPersona != null)
      )
        n.writeString(t.llmPersona);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "botId", ftype: e.I64, fid: 2 }),
        t.botId != null)
      )
        n.writeI64(BigInt(t.botId));
      else {
        var i = "0";
        n.writeI64(BigInt(i));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "UgcExperienceType", ftype: e.I32, fid: 3 }),
        t.UgcExperienceType != null)
      ) {
        var l;
        n.writeI32((l = t.UgcExperienceType) != null ? l : 0);
      } else {
        var s = o("DuplexBotModuleTypes").UgcExperience.cast(0);
        n.writeI32(s != null ? s : 0);
      }
      (n.writeFieldEnd(),
        t.welcomeMessage != null &&
          (n.writeFieldBegin({
            fname: "welcomeMessage",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.welcomeMessage),
          n.writeFieldEnd()),
        t.mobiusConfig != null &&
          (n.writeFieldBegin({
            fname: "mobiusConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          B(t.mobiusConfig, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function U(t, n) {
      if (
        (n.writeStructBegin("PersonaEmbodimentConfig"),
        n.writeFieldBegin({
          fname: "videoModelName",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.videoModelName != null)
      )
        n.writeString(t.videoModelName);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "modelDatasConfig",
          ftype: e.STRING,
          fid: 2,
        }),
        t.modelDatasConfig != null)
      )
        n.writeString(t.modelDatasConfig);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "modelStage", ftype: e.STRING, fid: 3 }),
        t.modelStage != null)
      )
        n.writeString(t.modelStage);
      else {
        var i = "";
        n.writeString(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function V(t, n) {
      (n.writeStructBegin("BotPersonaConfig"),
        t.voice_info != null &&
          (n.writeFieldBegin({
            fname: "voice_info",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          o("AudiogenStructsSerializers").serializePersonaVoiceInfo(
            t.voice_info,
            n,
          ),
          n.writeFieldEnd()),
        t.embodiment_config != null &&
          (n.writeFieldBegin({
            fname: "embodiment_config",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          U(t.embodiment_config, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function H(t, n) {
      if (
        (n.writeStructBegin("CallForwardingAgentInitParams"),
        n.writeFieldBegin({
          fname: "agentSettingsId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.agentSettingsId != null)
      )
        n.writeString(t.agentSettingsId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "sipCallId", ftype: e.STRING, fid: 2 }),
        t.sipCallId != null)
      )
        n.writeString(t.sipCallId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "callerPhoneNumber",
          ftype: e.STRING,
          fid: 3,
        }),
        t.callerPhoneNumber != null)
      )
        n.writeString(t.callerPhoneNumber);
      else {
        var i = "";
        n.writeString(i);
      }
      (n.writeFieldEnd(),
        t.userFbid != null &&
          (n.writeFieldBegin({
            fname: "userFbid",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 4,
          }),
          n.writeI64(BigInt(t.userFbid)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function G(t, n) {
      if (
        (n.writeStructBegin("DuplexBotModuleStartConfig"),
        n.writeFieldBegin({
          fname: "fanId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.fanId != null)
      )
        n.writeI64(BigInt(t.fanId));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "creatorId", ftype: e.I64, fid: 2 }),
        t.creatorId != null)
      )
        n.writeI64(BigInt(t.creatorId));
      else {
        var i = "0";
        n.writeI64(BigInt(i));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "audioPersona", ftype: e.STRING, fid: 3 }),
        t.audioPersona != null)
      )
        n.writeString(t.audioPersona);
      else {
        var l = "meta_ai_s11";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "enableSpeculativeRequests",
          ftype: e.BOOL,
          fid: 4,
        }),
        t.enableSpeculativeRequests != null)
      )
        n.writeBool(t.enableSpeculativeRequests);
      else {
        var s = !0;
        n.writeBool(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "metaGenSmc", ftype: e.STRING, fid: 5 }),
        t.metaGenSmc != null)
      )
        n.writeString(t.metaGenSmc);
      else {
        var u = "";
        n.writeString(u);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "fieldTrial", ftype: e.MAP, fid: 6 }),
        t.fieldTrial != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRING,
          size: Object.keys(t.fieldTrial).length,
        });
        for (var c of Object.entries(t.fieldTrial)) {
          var d = c[0],
            m = c[1];
          (n.writeString(d), n.writeString(m));
        }
        n.writeMapEnd();
      } else {
        var p = Object.fromEntries([
          [
            "random_greetings",
            "Hi, how can I help you?;Hi! What\u2019s your name?;Hi! What\u2019s on your mind?",
          ],
        ]);
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRING,
          size: Object.keys(p).length,
        });
        for (var _ of Object.entries(p)) {
          var f = _[0],
            g = _[1];
          (n.writeString(f), n.writeString(g));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "asrLanguage", ftype: e.STRING, fid: 7 }),
        t.asrLanguage != null)
      )
        n.writeString(t.asrLanguage);
      else {
        var h = "en";
        n.writeString(h);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "asrModel", ftype: e.STRING, fid: 8 }),
        t.asrModel != null)
      )
        n.writeString(t.asrModel);
      else {
        var y = "live_meta_ai_rp";
        n.writeString(y);
      }
      if ((n.writeFieldEnd(), t.asrPlmWords != null)) {
        (n.writeFieldBegin({
          fname: "asrPlmWords",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 9,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.asrPlmWords.length }));
        for (var C of t.asrPlmWords) n.writeString(C);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({
          fname: "enableAsrHallucinationFilter",
          ftype: e.BOOL,
          fid: 10,
        }),
        t.enableAsrHallucinationFilter != null)
      )
        n.writeBool(t.enableAsrHallucinationFilter);
      else {
        var b = !0;
        n.writeBool(b);
      }
      if ((n.writeFieldEnd(), t.callbackTags != null)) {
        (n.writeFieldBegin({
          fname: "callbackTags",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 11,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRING,
            size: Object.keys(t.callbackTags).length,
          }));
        for (var v of Object.entries(t.callbackTags)) {
          var S = v[0],
            R = v[1];
          (n.writeString(S), n.writeString(R));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (t.flags != null) {
        (n.writeFieldBegin({
          fname: "flags",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 12,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.BOOL,
            size: Object.keys(t.flags).length,
          }));
        for (var L of Object.entries(t.flags)) {
          var E = L[0],
            k = L[1];
          (n.writeString(E), n.writeBool(k));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (
        (t.customizedGreeting != null &&
          (n.writeFieldBegin({
            fname: "customizedGreeting",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 13,
          }),
          n.writeString(t.customizedGreeting),
          n.writeFieldEnd()),
        t.metaGenApiKey != null &&
          (n.writeFieldBegin({
            fname: "metaGenApiKey",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 14,
          }),
          n.writeString(t.metaGenApiKey),
          n.writeFieldEnd()),
        t.tags != null)
      ) {
        (n.writeFieldBegin({
          fname: "tags",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 15,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRING,
            size: Object.keys(t.tags).length,
          }));
        for (var I of Object.entries(t.tags)) {
          var T = I[0],
            D = I[1];
          (n.writeString(T), n.writeString(D));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (
        (t.userId != null &&
          (n.writeFieldBegin({
            fname: "userId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 16,
          }),
          n.writeI64(BigInt(t.userId)),
          n.writeFieldEnd()),
        t.cryptoAuthToken != null &&
          (n.writeFieldBegin({
            fname: "cryptoAuthToken",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 18,
          }),
          n.writeString(t.cryptoAuthToken),
          n.writeFieldEnd()),
        t.appId != null &&
          (n.writeFieldBegin({
            fname: "appId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 19,
          }),
          n.writeString(t.appId),
          n.writeFieldEnd()),
        t.messagePublisherConfig != null &&
          (n.writeFieldBegin({
            fname: "messagePublisherConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 20,
          }),
          z(t.messagePublisherConfig, n),
          n.writeFieldEnd()),
        t.igCreatorAiPromptContext != null &&
          (n.writeFieldBegin({
            fname: "igCreatorAiPromptContext",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 21,
          }),
          F(t.igCreatorAiPromptContext, n),
          n.writeFieldEnd()),
        t.agentBotStartConfig != null &&
          (n.writeFieldBegin({
            fname: "agentBotStartConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 22,
          }),
          j(t.agentBotStartConfig, n),
          n.writeFieldEnd()),
        t.llmServiceType != null)
      ) {
        var x;
        (n.writeFieldBegin({
          fname: "llmServiceType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 23,
        }),
          n.writeI32((x = t.llmServiceType) != null ? x : 0),
          n.writeFieldEnd());
      }
      if (
        (t.clientIpAddress != null &&
          (n.writeFieldBegin({
            fname: "clientIpAddress",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 24,
          }),
          n.writeString(t.clientIpAddress),
          n.writeFieldEnd()),
        t.ugcConfig != null &&
          (n.writeFieldBegin({
            fname: "ugcConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 25,
          }),
          q(t.ugcConfig, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "audioGenVoice", ftype: e.STRUCT, fid: 26 }),
        t.audioGenVoice != null)
      )
        o("AudiogenStructsSerializers").serializeAudioGenVoice(
          t.audioGenVoice,
          n,
        );
      else {
        var $ = o(
          "AudiogenStructsSerializers",
        ).AudioGenVoice$DefaultConstructor();
        o("AudiogenStructsSerializers").serializeAudioGenVoice($, n);
      }
      if (
        (n.writeFieldEnd(),
        t.voiceHintsConfig != null &&
          (n.writeFieldBegin({
            fname: "voiceHintsConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 27,
          }),
          X(t.voiceHintsConfig, n),
          n.writeFieldEnd()),
        t.entrypoint != null &&
          (n.writeFieldBegin({
            fname: "entrypoint",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 28,
          }),
          n.writeString(t.entrypoint),
          n.writeFieldEnd()),
        t.ttsPlaybackSpeed != null &&
          (n.writeFieldBegin({
            fname: "ttsPlaybackSpeed",
            ftype: (e || (e = r("ThriftTypes"))).FLOAT,
            fid: 29,
          }),
          n.writeFloat(t.ttsPlaybackSpeed),
          n.writeFieldEnd()),
        t.appVersion != null &&
          (n.writeFieldBegin({
            fname: "appVersion",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 30,
          }),
          n.writeString(t.appVersion),
          n.writeFieldEnd()),
        t.destinationId != null &&
          (n.writeFieldBegin({
            fname: "destinationId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 31,
          }),
          n.writeString(t.destinationId),
          n.writeFieldEnd()),
        t.conversationStarterPrompt != null &&
          (n.writeFieldBegin({
            fname: "conversationStarterPrompt",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 32,
          }),
          Y(t.conversationStarterPrompt, n),
          n.writeFieldEnd()),
        t.callTrigger != null &&
          (n.writeFieldBegin({
            fname: "callTrigger",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 33,
          }),
          n.writeString(t.callTrigger),
          n.writeFieldEnd()),
        t.asaAgentStartConfig != null &&
          (n.writeFieldBegin({
            fname: "asaAgentStartConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 34,
          }),
          o("MobiusProductConfigSerializers").serializeASAAgentStartConfig(
            t.asaAgentStartConfig,
            n,
          ),
          n.writeFieldEnd()),
        t.waUserLid != null &&
          (n.writeFieldBegin({
            fname: "waUserLid",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 35,
          }),
          n.writeI64(BigInt(t.waUserLid)),
          n.writeFieldEnd()),
        t.dataChannelNodeId != null &&
          (n.writeFieldBegin({
            fname: "dataChannelNodeId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 36,
          }),
          n.writeI64(BigInt(t.dataChannelNodeId)),
          n.writeFieldEnd()),
        t.mobiusConfig != null &&
          (n.writeFieldBegin({
            fname: "mobiusConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 37,
          }),
          B(t.mobiusConfig, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "genaiUseCase", ftype: e.I32, fid: 38 }),
        t.genaiUseCase != null)
      ) {
        var P;
        n.writeI32((P = t.genaiUseCase) != null ? P : 0);
      } else {
        var N = o("GenaiCoreTypes").UseCase.cast(0);
        n.writeI32(N != null ? N : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.sessionId != null &&
          (n.writeFieldBegin({
            fname: "sessionId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 39,
          }),
          n.writeString(t.sessionId),
          n.writeFieldEnd()),
        t.ttsConfig != null &&
          (n.writeFieldBegin({
            fname: "ttsConfig",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 40,
          }),
          o("TtsConfigSerializers").serializeTtsConfig(t.ttsConfig, n),
          n.writeFieldEnd()),
        t.botPersonaConfigs != null)
      ) {
        (n.writeFieldBegin({
          fname: "botPersonaConfigs",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 41,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRUCT,
            size: Object.keys(t.botPersonaConfigs).length,
          }));
        for (var A of Object.entries(t.botPersonaConfigs)) {
          var O = A[0],
            W = A[1];
          (n.writeString(O), V(W, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (
        (t.graphqlQueryContext != null &&
          (n.writeFieldBegin({
            fname: "graphqlQueryContext",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 42,
          }),
          o("DuplexBotSharedTypesSerializers").serializeGraphQLQueryContext(
            t.graphqlQueryContext,
            n,
          ),
          n.writeFieldEnd()),
        t.waveformsSession != null &&
          (n.writeFieldBegin({
            fname: "waveformsSession",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 43,
          }),
          o("DuplexBotSharedTypesSerializers").serializeWaveformsSession(
            t.waveformsSession,
            n,
          ),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "secrets", ftype: e.MAP, fid: 44 }),
        t.secrets != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.secrets).length,
        });
        for (var U of Object.entries(t.secrets)) {
          var G = U[0],
            K = U[1];
          (n.writeString(G), te(K, n));
        }
        n.writeMapEnd();
      } else {
        var Q = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(Q).length,
        });
        for (var J of Object.entries(Q)) {
          var Z = J[0],
            ee = J[1];
          (n.writeString(Z), te(ee, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        t.asrPlmWordsSettings != null &&
          (n.writeFieldBegin({
            fname: "asrPlmWordsSettings",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 45,
          }),
          ne(t.asrPlmWordsSettings, n),
          n.writeFieldEnd()),
        t.gk_flags != null)
      ) {
        (n.writeFieldBegin({
          fname: "gk_flags",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 46,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRUCT,
            size: Object.keys(t.gk_flags).length,
          }));
        for (var re of Object.entries(t.gk_flags)) {
          var oe = re[0],
            ae = re[1];
          (n.writeString(oe), M(ae, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (t.qe_fields != null) {
        (n.writeFieldBegin({
          fname: "qe_fields",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 47,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRUCT,
            size: Object.keys(t.qe_fields).length,
          }));
        for (var ie of Object.entries(t.qe_fields)) {
          var le = ie[0],
            se = ie[1];
          (n.writeString(le), w(se, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (t.wakeWordPatterns != null) {
        (n.writeFieldBegin({
          fname: "wakeWordPatterns",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 48,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.wakeWordPatterns.length,
          }));
        for (var ue of t.wakeWordPatterns) n.writeString(ue);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.appLoadSessionConfigResponse != null &&
        (n.writeFieldBegin({
          fname: "appLoadSessionConfigResponse",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 49,
        }),
        n.writeString(t.appLoadSessionConfigResponse),
        n.writeFieldEnd()),
        t.gpsLocation != null &&
          (n.writeFieldBegin({
            fname: "gpsLocation",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 50,
          }),
          o("DuplexBotSharedTypesSerializers").serializeGpsLocation(
            t.gpsLocation,
            n,
          ),
          n.writeFieldEnd()),
        t.waUserLidCrc32c != null &&
          (n.writeFieldBegin({
            fname: "waUserLidCrc32c",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 51,
          }),
          n.writeI32(t.waUserLidCrc32c),
          n.writeFieldEnd()),
        t.callForwardingAgentInitParams != null &&
          (n.writeFieldBegin({
            fname: "callForwardingAgentInitParams",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 52,
          }),
          H(t.callForwardingAgentInitParams, n),
          n.writeFieldEnd()),
        t.genAiFbid != null &&
          (n.writeFieldBegin({
            fname: "genAiFbid",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 53,
          }),
          n.writeI64(BigInt(t.genAiFbid)),
          n.writeFieldEnd()),
        t.aiCallingSessionParams != null &&
          (n.writeFieldBegin({
            fname: "aiCallingSessionParams",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 54,
          }),
          n.writeBinary(t.aiCallingSessionParams),
          n.writeFieldEnd()),
        t.appAuthToken != null &&
          (n.writeFieldBegin({
            fname: "appAuthToken",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 55,
          }),
          n.writeString(t.appAuthToken),
          n.writeFieldEnd()),
        t.userDcat != null &&
          (n.writeFieldBegin({
            fname: "userDcat",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 56,
          }),
          n.writeString(t.userDcat),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function z(t, n) {
      if (
        (n.writeStructBegin("MessagePublisherConfig"),
        n.writeFieldBegin({
          fname: "userId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.userId != null)
      )
        n.writeString(t.userId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "appId", ftype: e.STRING, fid: 2 }),
        t.appId != null)
      )
        n.writeString(t.appId);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(),
        t.rpCryptoAuthToken != null &&
          (n.writeFieldBegin({
            fname: "rpCryptoAuthToken",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.rpCryptoAuthToken),
          n.writeFieldEnd()),
        t.waThreadId != null &&
          (n.writeFieldBegin({
            fname: "waThreadId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.waThreadId),
          n.writeFieldEnd()),
        t.threadId != null &&
          (n.writeFieldBegin({
            fname: "threadId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.threadId),
          n.writeFieldEnd()),
        t.callId != null &&
          (n.writeFieldBegin({
            fname: "callId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.callId),
          n.writeFieldEnd()),
        t.appVersion != null &&
          (n.writeFieldBegin({
            fname: "appVersion",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.appVersion),
          n.writeFieldEnd()),
        t.waUserContext != null &&
          (n.writeFieldBegin({
            fname: "waUserContext",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 9,
          }),
          Z(t.waUserContext, n),
          n.writeFieldEnd()),
        t.userAgent != null &&
          (n.writeFieldBegin({
            fname: "userAgent",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.userAgent),
          n.writeFieldEnd()),
        t.product_context != null &&
          (n.writeFieldBegin({
            fname: "product_context",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 11,
          }),
          n.writeString(t.product_context),
          n.writeFieldEnd()),
        t.shouldCreateUserThread != null &&
          (n.writeFieldBegin({
            fname: "shouldCreateUserThread",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 12,
          }),
          n.writeBool(t.shouldCreateUserThread),
          n.writeFieldEnd()),
        t.botId != null &&
          (n.writeFieldBegin({
            fname: "botId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 13,
          }),
          n.writeI64(BigInt(t.botId)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function j(t, n) {
      if (
        (n.writeStructBegin("AgentBotStartConfig"),
        n.writeFieldBegin({
          fname: "mgpOmnibotChatTier",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.mgpOmnibotChatTier != null)
      )
        n.writeString(t.mgpOmnibotChatTier);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "omniAICustomerConversationFbid",
          ftype: e.I64,
          fid: 2,
        }),
        t.omniAICustomerConversationFbid != null)
      )
        n.writeI64(BigInt(t.omniAICustomerConversationFbid));
      else {
        var a = "0";
        n.writeI64(BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "agentConfigPath",
          ftype: e.STRING,
          fid: 5,
        }),
        t.agentConfigPath != null)
      )
        n.writeString(t.agentConfigPath);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "conversationToken",
          ftype: e.STRING,
          fid: 6,
        }),
        t.conversationToken != null)
      )
        n.writeString(t.conversationToken);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "adId", ftype: e.STRING, fid: 7 }),
        t.adId != null)
      )
        n.writeString(t.adId);
      else {
        var s = "";
        n.writeString(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "adsContent", ftype: e.STRING, fid: 8 }),
        t.adsContent != null)
      )
        n.writeString(t.adsContent);
      else {
        var u = "";
        n.writeString(u);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "history", ftype: e.LIST, fid: 9 }),
        t.history != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.history.length,
        });
        for (var c of t.history) Q(c, n);
        n.writeListEnd();
      } else {
        var d = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: d.length,
        });
        for (var m of d) Q(m, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "agentConfigFbid", ftype: e.I64, fid: 10 }),
        t.agentConfigFbid != null)
      )
        n.writeI64(BigInt(t.agentConfigFbid));
      else {
        var p = "0";
        n.writeI64(BigInt(p));
      }
      if (
        (n.writeFieldEnd(),
        t.agentBotAdContext != null &&
          (n.writeFieldBegin({
            fname: "agentBotAdContext",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 11,
          }),
          K(t.agentBotAdContext, n),
          n.writeFieldEnd()),
        t.agentStartRequest != null &&
          (n.writeFieldBegin({
            fname: "agentStartRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 12,
          }),
          n.writeString(t.agentStartRequest),
          n.writeFieldEnd()),
        t.agentRequest != null &&
          (n.writeFieldBegin({
            fname: "agentRequest",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 13,
          }),
          n.writeString(t.agentRequest),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "userId", ftype: e.STRING, fid: 14 }),
        t.userId != null)
      )
        n.writeString(t.userId);
      else {
        var _ = "";
        n.writeString(_);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "showNoticeOnHandoffAttempt",
          ftype: e.BOOL,
          fid: 15,
        }),
        t.showNoticeOnHandoffAttempt != null)
      )
        n.writeBool(t.showNoticeOnHandoffAttempt);
      else {
        var f = !1;
        n.writeBool(f);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "additionalFieldTrial",
          ftype: e.MAP,
          fid: 16,
        }),
        t.additionalFieldTrial != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRING,
          size: Object.keys(t.additionalFieldTrial).length,
        });
        for (var g of Object.entries(t.additionalFieldTrial)) {
          var h = g[0],
            y = g[1];
          (n.writeString(h), n.writeString(y));
        }
        n.writeMapEnd();
      } else {
        var C = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRING,
          size: Object.keys(C).length,
        });
        for (var b of Object.entries(C)) {
          var v = b[0],
            S = b[1];
          (n.writeString(v), n.writeString(S));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "additionalFlags", ftype: e.MAP, fid: 18 }),
        t.additionalFlags != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.BOOL,
          size: Object.keys(t.additionalFlags).length,
        });
        for (var R of Object.entries(t.additionalFlags)) {
          var L = R[0],
            E = R[1];
          (n.writeString(L), n.writeBool(E));
        }
        n.writeMapEnd();
      } else {
        var k = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.BOOL,
          size: Object.keys(k).length,
        });
        for (var I of Object.entries(k)) {
          var T = I[0],
            D = I[1];
          (n.writeString(T), n.writeBool(D));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(),
        t.enableNoSpeechTimeout != null &&
          (n.writeFieldBegin({
            fname: "enableNoSpeechTimeout",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 19,
          }),
          n.writeBool(t.enableNoSpeechTimeout),
          n.writeFieldEnd()),
        t.noSpeechTimeoutSeconds != null &&
          (n.writeFieldBegin({
            fname: "noSpeechTimeoutSeconds",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 20,
          }),
          n.writeI32(t.noSpeechTimeoutSeconds),
          n.writeFieldEnd()),
        t.noSpeechTimeoutMessage != null &&
          (n.writeFieldBegin({
            fname: "noSpeechTimeoutMessage",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 21,
          }),
          n.writeString(t.noSpeechTimeoutMessage),
          n.writeFieldEnd()),
        t.noSpeechTimeoutMs != null &&
          (n.writeFieldBegin({
            fname: "noSpeechTimeoutMs",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 24,
          }),
          n.writeI32(t.noSpeechTimeoutMs),
          n.writeFieldEnd()),
        t.omnibotChatClientId != null &&
          (n.writeFieldBegin({
            fname: "omnibotChatClientId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 22,
          }),
          n.writeString(t.omnibotChatClientId),
          n.writeFieldEnd()),
        t.callForwardingAgentInitParams != null &&
          (n.writeFieldBegin({
            fname: "callForwardingAgentInitParams",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 23,
          }),
          H(t.callForwardingAgentInitParams, n),
          n.writeFieldEnd()),
        t.language != null &&
          (n.writeFieldBegin({
            fname: "language",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 25,
          }),
          n.writeString(t.language),
          n.writeFieldEnd()),
        t.asrModel != null &&
          (n.writeFieldBegin({
            fname: "asrModel",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 26,
          }),
          n.writeString(t.asrModel),
          n.writeFieldEnd()),
        t.voiceAgentSystemPrompt != null &&
          (n.writeFieldBegin({
            fname: "voiceAgentSystemPrompt",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 27,
          }),
          n.writeString(t.voiceAgentSystemPrompt),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function K(t, n) {
      if (
        (n.writeStructBegin("AgentBotAdContext"),
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
        t.adContent != null &&
          (n.writeFieldBegin({
            fname: "adContent",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.adContent),
          n.writeFieldEnd()),
        t.productIds != null)
      ) {
        (n.writeFieldBegin({
          fname: "productIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 3,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.productIds.length }));
        for (var a of t.productIds) n.writeString(a);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.history != null) {
        (n.writeFieldBegin({
          fname: "history",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 4,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.history.length }));
        for (var i of t.history) Q(i, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({ fname: "pageId", ftype: e.I64, fid: 5 }),
        t.pageId != null)
      )
        n.writeI64(BigInt(t.pageId));
      else {
        var l = "0";
        n.writeI64(BigInt(l));
      }
      if ((n.writeFieldEnd(), t.pillProductIds != null)) {
        (n.writeFieldBegin({
          fname: "pillProductIds",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 6,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.pillProductIds.length }));
        for (var s of t.pillProductIds) n.writeString(s);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.adCampaignGroupId != null &&
        (n.writeFieldBegin({
          fname: "adCampaignGroupId",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 7,
        }),
        n.writeI64(BigInt(t.adCampaignGroupId)),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Q(t, n) {
      if (
        (n.writeStructBegin("HistoricMessage"),
        n.writeFieldBegin({
          fname: "role",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.role != null)
      ) {
        var a;
        n.writeI32((a = t.role) != null ? a : 0);
      } else {
        var i = o("DuplexBotModuleTypes").MessageRole.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content", ftype: e.STRING, fid: 2 }),
        t.content != null)
      )
        n.writeString(t.content);
      else {
        var l = "";
        n.writeString(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function X(t, n) {
      if (
        (n.writeStructBegin("VoiceHintsConfig"),
        n.writeFieldBegin({
          fname: "startOfCallSilenceTolerationMs",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.startOfCallSilenceTolerationMs != null)
      )
        n.writeI64(BigInt(t.startOfCallSilenceTolerationMs));
      else {
        var o = "2000";
        n.writeI64(BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "timeBetweenPromptsMs",
          ftype: e.I64,
          fid: 2,
        }),
        t.timeBetweenPromptsMs != null)
      )
        n.writeI64(BigInt(t.timeBetweenPromptsMs));
      else {
        var a = "1000";
        n.writeI64(BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "timeBetweenSetsOfPromptsMs",
          ftype: e.I64,
          fid: 3,
        }),
        t.timeBetweenSetsOfPromptsMs != null)
      )
        n.writeI64(BigInt(t.timeBetweenSetsOfPromptsMs));
      else {
        var i = "15000";
        n.writeI64(BigInt(i));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "promptsPerSet", ftype: e.I32, fid: 4 }),
        t.promptsPerSet != null)
      )
        n.writeI32(t.promptsPerSet);
      else {
        var l = 5;
        n.writeI32(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "promptsSentToClientAtATime",
          ftype: e.I32,
          fid: 5,
        }),
        t.promptsSentToClientAtATime != null)
      )
        n.writeI32(t.promptsSentToClientAtATime);
      else {
        var s = 1;
        n.writeI32(s);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Y(t, n) {
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
    function J(t, n) {
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
    function Z(t, n) {
      if (
        (n.writeStructBegin("WhatsAppUserContext"),
        n.writeFieldBegin({
          fname: "userLid",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.userLid != null)
      )
        n.writeI64(BigInt(t.userLid));
      else {
        var o = "0";
        n.writeI64(BigInt(o));
      }
      (n.writeFieldEnd(),
        t.acAuthToken != null &&
          (n.writeFieldBegin({
            fname: "acAuthToken",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.acAuthToken),
          n.writeFieldEnd()),
        t.botCapability != null &&
          (n.writeFieldBegin({
            fname: "botCapability",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          J(t.botCapability, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ee(t, n) {
      (n.writeStructBegin("DuplexBotEmbodimentUpdatePayload"),
        t.embodiment_config != null &&
          (n.writeFieldBegin({
            fname: "embodiment_config",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          U(t.embodiment_config, n),
          n.writeFieldEnd()),
        t.background_music_uri != null &&
          (n.writeFieldBegin({
            fname: "background_music_uri",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.background_music_uri),
          n.writeFieldEnd()),
        t.voice_id != null &&
          (n.writeFieldBegin({
            fname: "voice_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.voice_id),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function te(t, n) {
      if (
        (n.writeStructBegin("Secret"),
        n.writeFieldBegin({
          fname: "keyChainGroupName",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.keyChainGroupName != null)
      )
        n.writeString(t.keyChainGroupName);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "keyChainSecretKeyName",
          ftype: e.STRING,
          fid: 2,
        }),
        t.keyChainSecretKeyName != null)
      )
        n.writeString(t.keyChainSecretKeyName);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function ne(t, n) {
      if (
        (n.writeStructBegin("AsrPlmWordsSettings"),
        n.writeFieldBegin({
          fname: "retrievePlmWords",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.retrievePlmWords != null)
      )
        n.writeBool(t.retrievePlmWords);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "enableAudioBufferingWhileLoadingPlmWords",
          ftype: e.BOOL,
          fid: 2,
        }),
        t.enableAudioBufferingWhileLoadingPlmWords != null)
      )
        n.writeBool(t.enableAudioBufferingWhileLoadingPlmWords);
      else {
        var a = !1;
        n.writeBool(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "audioBufferingPlmWaitTimeMs",
          ftype: e.I32,
          fid: 3,
        }),
        t.audioBufferingPlmWaitTimeMs != null)
      )
        n.writeI32(t.audioBufferingPlmWaitTimeMs);
      else {
        var i = 0;
        n.writeI32(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function re(t, n) {
      if (
        (n.writeStructBegin("AsrPlmWordsSettingsUseCaseMap"),
        n.writeFieldBegin({
          fname: "asrPlmWordsSettingsUseCaseMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.asrPlmWordsSettingsUseCaseMap != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(t.asrPlmWordsSettingsUseCaseMap).length,
        });
        for (var o of Object.entries(t.asrPlmWordsSettingsUseCaseMap)) {
          var a,
            i = o[0],
            l = o[1];
          (n.writeI32((a = Number(i)) != null ? a : 0), ne(l, n));
        }
        n.writeMapEnd();
      } else {
        var s = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).I32,
          vtype: e.STRUCT,
          size: Object.keys(s).length,
        });
        for (var u of Object.entries(s)) {
          var c,
            d = u[0],
            m = u[1];
          (n.writeI32((c = Number(d)) != null ? c : 0), ne(m, n));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function oe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.universeName = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.exposureType = o("DuplexBotModuleTypes").ExposureType.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.universeName === void 0 && (n.universeName = ""),
        n.exposureType === void 0 &&
          (n.exposureType = o("DuplexBotModuleTypes").ExposureType.cast(0)),
        n
      );
    }
    function ae(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.gks = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = o("DuplexBotModuleTypes").ExperimentUniverse.cast(
                    t.readI32(),
                  ),
                  d = t.readString();
                c != null && (n.gks[c] = d);
              }
            } else t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.defaultValue = t.readBool())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.gks === void 0 && (n.gks = {}),
        n.defaultValue === void 0 && (n.defaultValue = !1),
        n
      );
    }
    function ie(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.qes = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = o("DuplexBotModuleTypes").ExperimentUniverse.cast(
                    t.readI32(),
                  ),
                  d = oe(t);
                c != null && (n.qes[c] = d);
              }
            } else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.qes === void 0 && (n.qes = {}), n);
    }
    function le(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.tier = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.host = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.port = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.tier === void 0 && (n.tier = ""),
        n.host === void 0 && (n.host = ""),
        n.port === void 0 && (n.port = 0),
        n
      );
    }
    function se(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.agentId = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.personaId = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.corpusId = t.readI64().toString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.operatorCache = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.embeddingTier = t.readString())
              : t.skip(a);
            break;
          case 6:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.embeddingHostSelection = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = le(t);
                n.embeddingHostSelection.push(u);
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
        n.agentId === void 0 && (n.agentId = "0"),
        n.personaId === void 0 && (n.personaId = "0"),
        n.corpusId === void 0 && (n.corpusId = "0"),
        n
      );
    }
    function ue(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.logPath = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mediaGen = o(
                  "XrAiAgentsMediaGenModuleSerializers",
                ).deserializeXrAiAgentsMediaGenModuleCreateConfig(t))
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.useExternalExecutor = t.readBool())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.prewarmMediaProc = t.readBool())
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.processCtpAudioFrameMetadata = t.readBool())
              : t.skip(i);
            break;
          case 10:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.botPersonaConfigs = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readString(),
                  d = _e(t);
                n.botPersonaConfigs[c] = d;
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
    function ce(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.threadId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.metachainApplicationName = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.personaId = t.readI64().toString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.productConfig = o(
                  "MobiusProductConfigSerializers",
                ).deserializeMobiusProductConfig(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.threadId === void 0 && (n.threadId = ""), n);
    }
    function de(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.botId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableVideo = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.botId === void 0 && (n.botId = ""),
        n.enableVideo === void 0 && (n.enableVideo = !1),
        n
      );
    }
    function me(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.llmPersona = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.botId = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.UgcExperienceType = o(
                  "DuplexBotModuleTypes",
                ).UgcExperience.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.welcomeMessage = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mobiusConfig = ce(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.llmPersona === void 0 && (n.llmPersona = ""),
        n.botId === void 0 && (n.botId = "0"),
        n.UgcExperienceType === void 0 &&
          (n.UgcExperienceType = o("DuplexBotModuleTypes").UgcExperience.cast(
            0,
          )),
        n
      );
    }
    function pe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.videoModelName = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.modelDatasConfig = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.modelStage = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.videoModelName === void 0 && (n.videoModelName = ""),
        n.modelDatasConfig === void 0 && (n.modelDatasConfig = ""),
        n.modelStage === void 0 && (n.modelStage = ""),
        n
      );
    }
    function _e(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.voice_info = o(
                  "AudiogenStructsSerializers",
                ).deserializePersonaVoiceInfo(t))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.embodiment_config = pe(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function fe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.agentSettingsId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sipCallId = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.callerPhoneNumber = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userFbid = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.agentSettingsId === void 0 && (n.agentSettingsId = ""),
        n.sipCallId === void 0 && (n.sipCallId = ""),
        n.callerPhoneNumber === void 0 && (n.callerPhoneNumber = ""),
        n
      );
    }
    function ge(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.fanId = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.creatorId = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.audioPersona = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableSpeculativeRequests = t.readBool())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.metaGenSmc = t.readString())
              : t.skip(i);
            break;
          case 6:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.fieldTrial = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = t.readString(),
                  d = t.readString();
                n.fieldTrial[c] = d;
              }
            } else t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.asrLanguage = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.asrModel = t.readString())
              : t.skip(i);
            break;
          case 9:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.asrPlmWords = [];
              for (var m = t.readListBegin(), p = 0; p < m.size; p++) {
                var _ = t.readString();
                n.asrPlmWords.push(_);
              }
            } else t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableAsrHallucinationFilter = t.readBool())
              : t.skip(i);
            break;
          case 11:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.callbackTags = {};
              for (var f = t.readMapBegin(), g = 0; g < f.size; g++) {
                var h = t.readString(),
                  y = t.readString();
                n.callbackTags[h] = y;
              }
            } else t.skip(i);
            break;
          case 12:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.flags = {};
              for (var C = t.readMapBegin(), b = 0; b < C.size; b++) {
                var v = t.readString(),
                  S = t.readBool();
                n.flags[v] = S;
              }
            } else t.skip(i);
            break;
          case 13:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.customizedGreeting = t.readString())
              : t.skip(i);
            break;
          case 14:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.metaGenApiKey = t.readString())
              : t.skip(i);
            break;
          case 15:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.tags = {};
              for (var R = t.readMapBegin(), L = 0; L < R.size; L++) {
                var E = t.readString(),
                  k = t.readString();
                n.tags[E] = k;
              }
            } else t.skip(i);
            break;
          case 16:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.userId = t.readI64().toString())
              : t.skip(i);
            break;
          case 18:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cryptoAuthToken = t.readString())
              : t.skip(i);
            break;
          case 19:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.appId = t.readString())
              : t.skip(i);
            break;
          case 20:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.messagePublisherConfig = he(t))
              : t.skip(i);
            break;
          case 21:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.igCreatorAiPromptContext = se(t))
              : t.skip(i);
            break;
          case 22:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.agentBotStartConfig = ye(t))
              : t.skip(i);
            break;
          case 23:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.llmServiceType = o("DuplexBotModuleTypes").LlmService.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 24:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.clientIpAddress = t.readString())
              : t.skip(i);
            break;
          case 25:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.ugcConfig = me(t))
              : t.skip(i);
            break;
          case 26:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.audioGenVoice = o(
                  "AudiogenStructsSerializers",
                ).deserializeAudioGenVoice(t))
              : t.skip(i);
            break;
          case 27:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.voiceHintsConfig = ve(t))
              : t.skip(i);
            break;
          case 28:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.entrypoint = t.readString())
              : t.skip(i);
            break;
          case 29:
            i === (e || (e = r("ThriftTypes"))).FLOAT
              ? (n.ttsPlaybackSpeed = t.readFloat())
              : t.skip(i);
            break;
          case 30:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.appVersion = t.readString())
              : t.skip(i);
            break;
          case 31:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.destinationId = t.readString())
              : t.skip(i);
            break;
          case 32:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.conversationStarterPrompt = Se(t))
              : t.skip(i);
            break;
          case 33:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.callTrigger = t.readString())
              : t.skip(i);
            break;
          case 34:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.asaAgentStartConfig = o(
                  "MobiusProductConfigSerializers",
                ).deserializeASAAgentStartConfig(t))
              : t.skip(i);
            break;
          case 35:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.waUserLid = t.readI64().toString())
              : t.skip(i);
            break;
          case 36:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.dataChannelNodeId = t.readI64().toString())
              : t.skip(i);
            break;
          case 37:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.mobiusConfig = ce(t))
              : t.skip(i);
            break;
          case 38:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.genaiUseCase = o("GenaiCoreTypes").UseCase.cast(t.readI32()))
              : t.skip(i);
            break;
          case 39:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sessionId = t.readString())
              : t.skip(i);
            break;
          case 40:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.ttsConfig = o("TtsConfigSerializers").deserializeTtsConfig(
                  t,
                ))
              : t.skip(i);
            break;
          case 41:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.botPersonaConfigs = {};
              for (var I = t.readMapBegin(), T = 0; T < I.size; T++) {
                var D = t.readString(),
                  x = _e(t);
                n.botPersonaConfigs[D] = x;
              }
            } else t.skip(i);
            break;
          case 42:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.graphqlQueryContext = o(
                  "DuplexBotSharedTypesSerializers",
                ).deserializeGraphQLQueryContext(t))
              : t.skip(i);
            break;
          case 43:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.waveformsSession = o(
                  "DuplexBotSharedTypesSerializers",
                ).deserializeWaveformsSession(t))
              : t.skip(i);
            break;
          case 44:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.secrets = {};
              for (var $ = t.readMapBegin(), P = 0; P < $.size; P++) {
                var N = t.readString(),
                  M = ke(t);
                n.secrets[N] = M;
              }
            } else t.skip(i);
            break;
          case 45:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.asrPlmWordsSettings = Ie(t))
              : t.skip(i);
            break;
          case 46:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.gk_flags = {};
              for (var w = t.readMapBegin(), A = 0; A < w.size; A++) {
                var F = t.readString(),
                  O = ae(t);
                n.gk_flags[F] = O;
              }
            } else t.skip(i);
            break;
          case 47:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.qe_fields = {};
              for (var B = t.readMapBegin(), W = 0; W < B.size; W++) {
                var q = t.readString(),
                  U = ie(t);
                n.qe_fields[q] = U;
              }
            } else t.skip(i);
            break;
          case 48:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.wakeWordPatterns = [];
              for (var V = t.readListBegin(), H = 0; H < V.size; H++) {
                var G = t.readString();
                n.wakeWordPatterns.push(G);
              }
            } else t.skip(i);
            break;
          case 49:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.appLoadSessionConfigResponse = t.readString())
              : t.skip(i);
            break;
          case 50:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.gpsLocation = o(
                  "DuplexBotSharedTypesSerializers",
                ).deserializeGpsLocation(t))
              : t.skip(i);
            break;
          case 51:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.waUserLidCrc32c = t.readI32())
              : t.skip(i);
            break;
          case 52:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.callForwardingAgentInitParams = fe(t))
              : t.skip(i);
            break;
          case 53:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.genAiFbid = t.readI64().toString())
              : t.skip(i);
            break;
          case 54:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.aiCallingSessionParams = t.readBinary())
              : t.skip(i);
            break;
          case 55:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.appAuthToken = t.readString())
              : t.skip(i);
            break;
          case 56:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userDcat = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.fanId === void 0 && (n.fanId = "0"),
        n.creatorId === void 0 && (n.creatorId = "0"),
        n.audioPersona === void 0 && (n.audioPersona = "meta_ai_s11"),
        n.enableSpeculativeRequests === void 0 &&
          (n.enableSpeculativeRequests = !0),
        n.metaGenSmc === void 0 && (n.metaGenSmc = ""),
        n.fieldTrial === void 0 &&
          (n.fieldTrial = Object.fromEntries([
            [
              "random_greetings",
              "Hi, how can I help you?;Hi! What\u2019s your name?;Hi! What\u2019s on your mind?",
            ],
          ])),
        n.asrLanguage === void 0 && (n.asrLanguage = "en"),
        n.asrModel === void 0 && (n.asrModel = "live_meta_ai_rp"),
        n.enableAsrHallucinationFilter === void 0 &&
          (n.enableAsrHallucinationFilter = !0),
        n.audioGenVoice === void 0 &&
          (n.audioGenVoice = o(
            "AudiogenStructsSerializers",
          ).AudioGenVoice$DefaultConstructor()),
        n.genaiUseCase === void 0 &&
          (n.genaiUseCase = o("GenaiCoreTypes").UseCase.cast(0)),
        n.secrets === void 0 && (n.secrets = {}),
        n
      );
    }
    function he(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.appId = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.rpCryptoAuthToken = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.waThreadId = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.threadId = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.callId = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.appVersion = t.readString())
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.waUserContext = Le(t))
              : t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userAgent = t.readString())
              : t.skip(a);
            break;
          case 11:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.product_context = t.readString())
              : t.skip(a);
            break;
          case 12:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.shouldCreateUserThread = t.readBool())
              : t.skip(a);
            break;
          case 13:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.botId = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.userId === void 0 && (n.userId = ""),
        n.appId === void 0 && (n.appId = ""),
        n
      );
    }
    function ye(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.mgpOmnibotChatTier = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.omniAICustomerConversationFbid = t.readI64().toString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.agentConfigPath = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.conversationToken = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.adId = t.readString())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.adsContent = t.readString())
              : t.skip(a);
            break;
          case 9:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.history = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = be(t);
                n.history.push(u);
              }
            } else t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.agentConfigFbid = t.readI64().toString())
              : t.skip(a);
            break;
          case 11:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.agentBotAdContext = Ce(t))
              : t.skip(a);
            break;
          case 12:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.agentStartRequest = t.readString())
              : t.skip(a);
            break;
          case 13:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.agentRequest = t.readString())
              : t.skip(a);
            break;
          case 14:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.userId = t.readString())
              : t.skip(a);
            break;
          case 15:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.showNoticeOnHandoffAttempt = t.readBool())
              : t.skip(a);
            break;
          case 16:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.additionalFieldTrial = {};
              for (var c = t.readMapBegin(), d = 0; d < c.size; d++) {
                var m = t.readString(),
                  p = t.readString();
                n.additionalFieldTrial[m] = p;
              }
            } else t.skip(a);
            break;
          case 18:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.additionalFlags = {};
              for (var _ = t.readMapBegin(), f = 0; f < _.size; f++) {
                var g = t.readString(),
                  h = t.readBool();
                n.additionalFlags[g] = h;
              }
            } else t.skip(a);
            break;
          case 19:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableNoSpeechTimeout = t.readBool())
              : t.skip(a);
            break;
          case 20:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.noSpeechTimeoutSeconds = t.readI32())
              : t.skip(a);
            break;
          case 21:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.noSpeechTimeoutMessage = t.readString())
              : t.skip(a);
            break;
          case 24:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.noSpeechTimeoutMs = t.readI32())
              : t.skip(a);
            break;
          case 22:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.omnibotChatClientId = t.readString())
              : t.skip(a);
            break;
          case 23:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.callForwardingAgentInitParams = fe(t))
              : t.skip(a);
            break;
          case 25:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.language = t.readString())
              : t.skip(a);
            break;
          case 26:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.asrModel = t.readString())
              : t.skip(a);
            break;
          case 27:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.voiceAgentSystemPrompt = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.mgpOmnibotChatTier === void 0 && (n.mgpOmnibotChatTier = ""),
        n.omniAICustomerConversationFbid === void 0 &&
          (n.omniAICustomerConversationFbid = "0"),
        n.agentConfigPath === void 0 && (n.agentConfigPath = ""),
        n.conversationToken === void 0 && (n.conversationToken = ""),
        n.adId === void 0 && (n.adId = ""),
        n.adsContent === void 0 && (n.adsContent = ""),
        n.history === void 0 && (n.history = []),
        n.agentConfigFbid === void 0 && (n.agentConfigFbid = "0"),
        n.userId === void 0 && (n.userId = ""),
        n.showNoticeOnHandoffAttempt === void 0 &&
          (n.showNoticeOnHandoffAttempt = !1),
        n.additionalFieldTrial === void 0 && (n.additionalFieldTrial = {}),
        n.additionalFlags === void 0 && (n.additionalFlags = {}),
        n
      );
    }
    function Ce(t) {
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
              ? (n.adContent = t.readString())
              : t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.productIds = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.productIds.push(u);
              }
            } else t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.history = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = be(t);
                n.history.push(m);
              }
            } else t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.pageId = t.readI64().toString())
              : t.skip(a);
            break;
          case 6:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.pillProductIds = [];
              for (var p = t.readListBegin(), _ = 0; _ < p.size; _++) {
                var f = t.readString();
                n.pillProductIds.push(f);
              }
            } else t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.adCampaignGroupId = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.adId === void 0 && (n.adId = ""),
        n.pageId === void 0 && (n.pageId = "0"),
        n
      );
    }
    function be(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.role = o("DuplexBotModuleTypes").MessageRole.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.role === void 0 &&
          (n.role = o("DuplexBotModuleTypes").MessageRole.cast(0)),
        n.content === void 0 && (n.content = ""),
        n
      );
    }
    function ve(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.startOfCallSilenceTolerationMs = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.timeBetweenPromptsMs = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.timeBetweenSetsOfPromptsMs = t.readI64().toString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.promptsPerSet = t.readI32())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.promptsSentToClientAtATime = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.startOfCallSilenceTolerationMs === void 0 &&
          (n.startOfCallSilenceTolerationMs = "2000"),
        n.timeBetweenPromptsMs === void 0 && (n.timeBetweenPromptsMs = "1000"),
        n.timeBetweenSetsOfPromptsMs === void 0 &&
          (n.timeBetweenSetsOfPromptsMs = "15000"),
        n.promptsPerSet === void 0 && (n.promptsPerSet = 5),
        n.promptsSentToClientAtATime === void 0 &&
          (n.promptsSentToClientAtATime = 1),
        n
      );
    }
    function Se(t) {
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
    function Re(t) {
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
    function Le(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.userLid = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.acAuthToken = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.botCapability = Re(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.userLid === void 0 && (n.userLid = "0"), n);
    }
    function Ee(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.embodiment_config = pe(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.background_music_uri = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.voice_id = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ke(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.keyChainGroupName = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.keyChainSecretKeyName = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.keyChainGroupName === void 0 && (n.keyChainGroupName = ""),
        n.keyChainSecretKeyName === void 0 && (n.keyChainSecretKeyName = ""),
        n
      );
    }
    function Ie(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.retrievePlmWords = t.readBool())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableAudioBufferingWhileLoadingPlmWords = t.readBool())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.audioBufferingPlmWaitTimeMs = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.retrievePlmWords === void 0 && (n.retrievePlmWords = !1),
        n.enableAudioBufferingWhileLoadingPlmWords === void 0 &&
          (n.enableAudioBufferingWhileLoadingPlmWords = !1),
        n.audioBufferingPlmWaitTimeMs === void 0 &&
          (n.audioBufferingPlmWaitTimeMs = 0),
        n
      );
    }
    function Te(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            if (i === (e || (e = r("ThriftTypes"))).MAP) {
              n.asrPlmWordsSettingsUseCaseMap = {};
              for (var s = t.readMapBegin(), u = 0; u < s.size; u++) {
                var c = o("GenaiCoreTypes").UseCase.cast(t.readI32()),
                  d = Ie(t);
                c != null && (n.asrPlmWordsSettingsUseCaseMap[c] = d);
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
        n.asrPlmWordsSettingsUseCaseMap === void 0 &&
          (n.asrPlmWordsSettingsUseCaseMap = {}),
        n
      );
    }
    ((l.QEFetchConfig$DefaultConstructor = s),
      (l.GkConfig$DefaultConstructor = u),
      (l.QeConfig$DefaultConstructor = c),
      (l.IgCreatorAiEmbeddingHostInfo$DefaultConstructor = d),
      (l.IgCreatorAiPromptContext$DefaultConstructor = m),
      (l.DuplexBotModuleCreateConfig$DefaultConstructor = p),
      (l.MobiusConfig$DefaultConstructor = _),
      (l.MobiusBotConfig$DefaultConstructor = f),
      (l.UGCConfig$DefaultConstructor = g),
      (l.PersonaEmbodimentConfig$DefaultConstructor = h),
      (l.BotPersonaConfig$DefaultConstructor = y),
      (l.CallForwardingAgentInitParams$DefaultConstructor = C),
      (l.DuplexBotModuleStartConfig$DefaultConstructor = b),
      (l.MessagePublisherConfig$DefaultConstructor = v),
      (l.AgentBotStartConfig$DefaultConstructor = S),
      (l.AgentBotAdContext$DefaultConstructor = R),
      (l.HistoricMessage$DefaultConstructor = L),
      (l.VoiceHintsConfig$DefaultConstructor = E),
      (l.ConversationStarterPrompt$DefaultConstructor = k),
      (l.BotCapability$DefaultConstructor = I),
      (l.WhatsAppUserContext$DefaultConstructor = T),
      (l.DuplexBotEmbodimentUpdatePayload$DefaultConstructor = D),
      (l.Secret$DefaultConstructor = x),
      (l.AsrPlmWordsSettings$DefaultConstructor = $),
      (l.AsrPlmWordsSettingsUseCaseMap$DefaultConstructor = P),
      (l.serializeQEFetchConfig = N),
      (l.serializeGkConfig = M),
      (l.serializeQeConfig = w),
      (l.serializeIgCreatorAiEmbeddingHostInfo = A),
      (l.serializeIgCreatorAiPromptContext = F),
      (l.serializeDuplexBotModuleCreateConfig = O),
      (l.serializeMobiusConfig = B),
      (l.serializeMobiusBotConfig = W),
      (l.serializeUGCConfig = q),
      (l.serializePersonaEmbodimentConfig = U),
      (l.serializeBotPersonaConfig = V),
      (l.serializeCallForwardingAgentInitParams = H),
      (l.serializeDuplexBotModuleStartConfig = G),
      (l.serializeMessagePublisherConfig = z),
      (l.serializeAgentBotStartConfig = j),
      (l.serializeAgentBotAdContext = K),
      (l.serializeHistoricMessage = Q),
      (l.serializeVoiceHintsConfig = X),
      (l.serializeConversationStarterPrompt = Y),
      (l.serializeBotCapability = J),
      (l.serializeWhatsAppUserContext = Z),
      (l.serializeDuplexBotEmbodimentUpdatePayload = ee),
      (l.serializeSecret = te),
      (l.serializeAsrPlmWordsSettings = ne),
      (l.serializeAsrPlmWordsSettingsUseCaseMap = re),
      (l.deserializeQEFetchConfig = oe),
      (l.deserializeGkConfig = ae),
      (l.deserializeQeConfig = ie),
      (l.deserializeIgCreatorAiEmbeddingHostInfo = le),
      (l.deserializeIgCreatorAiPromptContext = se),
      (l.deserializeDuplexBotModuleCreateConfig = ue),
      (l.deserializeMobiusConfig = ce),
      (l.deserializeMobiusBotConfig = de),
      (l.deserializeUGCConfig = me),
      (l.deserializePersonaEmbodimentConfig = pe),
      (l.deserializeBotPersonaConfig = _e),
      (l.deserializeCallForwardingAgentInitParams = fe),
      (l.deserializeDuplexBotModuleStartConfig = ge),
      (l.deserializeMessagePublisherConfig = he),
      (l.deserializeAgentBotStartConfig = ye),
      (l.deserializeAgentBotAdContext = Ce),
      (l.deserializeHistoricMessage = be),
      (l.deserializeVoiceHintsConfig = ve),
      (l.deserializeConversationStarterPrompt = Se),
      (l.deserializeBotCapability = Re),
      (l.deserializeWhatsAppUserContext = Le),
      (l.deserializeDuplexBotEmbodimentUpdatePayload = Ee),
      (l.deserializeSecret = ke),
      (l.deserializeAsrPlmWordsSettings = Ie),
      (l.deserializeAsrPlmWordsSettingsUseCaseMap = Te));
  },
  98,
);
