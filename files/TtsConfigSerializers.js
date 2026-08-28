__d(
  "TtsConfigSerializers",
  ["ThriftTypes", "TtsConfigTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        textProcessingType: o("TtsConfigTypes").TextProcessingType.cast(0),
      };
    }
    function u() {
      return { voiceName: "", thirdPartyTtsConfig: S() };
    }
    function c() {
      return {
        clientId: o("TtsConfigTypes").TtsClientId.cast(0),
        thirdPartyttsVoiceConfigs: [],
      };
    }
    function d() {
      return {
        speed: 1,
        stability: 0.5,
        useSpeakerBoost: !1,
        similarityBoost: 0.800000011920929,
      };
    }
    function m() {
      return { id: "", version: "" };
    }
    function p() {
      return {
        apiKey: "",
        voiceId: "",
        model: "",
        voiceSettings: d(),
        apiKeyChain: "",
        apiKeyChainGroup: "",
        textProcessingStrategy: s(),
        pronunciationDictionarySettings: [],
      };
    }
    function _() {
      return {
        apiKey: "",
        region: "",
        voiceId: "",
        apiKeyChains: {},
        apiKeyChainGroup: "",
        textProcessingStrategy: s(),
      };
    }
    function f() {
      return {
        endpoint: "",
        language: "",
        speakerId: "",
        textProcessingStrategy: s(),
      };
    }
    function g() {
      return {
        voiceId: "",
        language: "",
        credentialsKeyChain: "",
        inactivityTimeoutMs: 3e4,
      };
    }
    function h() {
      return {
        voiceId: "",
        language: "",
        model: "",
        apiKeyChain: "",
        inactivityTimeoutMs: 3e4,
        textProcessingStrategy: s(),
      };
    }
    function y() {
      return {
        voiceId: "",
        sentimentType: o("TtsConfigTypes").SentimentType.cast(0),
        sentimentIntensity: o("TtsConfigTypes").SentimentIntensity.cast(0),
      };
    }
    function C() {
      return { translationMap: {} };
    }
    function b() {
      return { isEnabled: !1 };
    }
    function v() {
      return {};
    }
    function S() {
      return {};
    }
    function R(t, n) {
      if (
        (n.writeStructBegin("TextProcessingStrategy"),
        n.writeFieldBegin({
          fname: "textProcessingType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.textProcessingType != null)
      ) {
        var a;
        n.writeI32((a = t.textProcessingType) != null ? a : 0);
      } else {
        var i = o("TtsConfigTypes").TextProcessingType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.delimiter != null &&
          (n.writeFieldBegin({
            fname: "delimiter",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.delimiter),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function L(t, n) {
      if (
        (n.writeStructBegin("ThirdPartyTtsVoiceConfig"),
        n.writeFieldBegin({
          fname: "voiceName",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.voiceName != null)
      )
        n.writeString(t.voiceName);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "thirdPartyTtsConfig",
          ftype: e.STRUCT,
          fid: 2,
        }),
        t.thirdPartyTtsConfig != null)
      )
        F(t.thirdPartyTtsConfig, n);
      else {
        var a = S();
        F(a, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function E(t, n) {
      if (
        (n.writeStructBegin("ClientTtsVoiceConfig"),
        n.writeFieldBegin({
          fname: "clientId",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.clientId != null)
      ) {
        var a;
        n.writeI32((a = t.clientId) != null ? a : 0);
      } else {
        var i = o("TtsConfigTypes").TtsClientId.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "thirdPartyttsVoiceConfigs",
          ftype: e.LIST,
          fid: 2,
        }),
        t.thirdPartyttsVoiceConfigs != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.thirdPartyttsVoiceConfigs.length,
        });
        for (var l of t.thirdPartyttsVoiceConfigs) L(l, n);
        n.writeListEnd();
      } else {
        var s = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: s.length,
        });
        for (var u of s) L(u, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function k(t, n) {
      if (
        (n.writeStructBegin("ElevenLabsVoiceSettings"),
        n.writeFieldBegin({
          fname: "speed",
          ftype: (e || (e = r("ThriftTypes"))).FLOAT,
          fid: 1,
        }),
        t.speed != null)
      )
        n.writeFloat(t.speed);
      else {
        var o = 1;
        n.writeFloat(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "stability", ftype: e.FLOAT, fid: 2 }),
        t.stability != null)
      )
        n.writeFloat(t.stability);
      else {
        var a = 0.5;
        n.writeFloat(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "useSpeakerBoost", ftype: e.BOOL, fid: 3 }),
        t.useSpeakerBoost != null)
      )
        n.writeBool(t.useSpeakerBoost);
      else {
        var i = !1;
        n.writeBool(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "similarityBoost", ftype: e.FLOAT, fid: 4 }),
        t.similarityBoost != null)
      )
        n.writeFloat(t.similarityBoost);
      else {
        var l = 0.800000011920929;
        n.writeFloat(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function I(t, n) {
      if (
        (n.writeStructBegin("ElevenLabsPronunciationDictionarySettings"),
        n.writeFieldBegin({
          fname: "id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.id != null)
      )
        n.writeString(t.id);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "version", ftype: e.STRING, fid: 2 }),
        t.version != null)
      )
        n.writeString(t.version);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function T(t, n) {
      if (
        (n.writeStructBegin("ElevenLabsTtsConfig"),
        n.writeFieldBegin({
          fname: "apiKey",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.apiKey != null)
      )
        n.writeString(t.apiKey);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "voiceId", ftype: e.STRING, fid: 2 }),
        t.voiceId != null)
      )
        n.writeString(t.voiceId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "model", ftype: e.STRING, fid: 3 }),
        t.model != null)
      )
        n.writeString(t.model);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "voiceSettings", ftype: e.STRUCT, fid: 4 }),
        t.voiceSettings != null)
      )
        k(t.voiceSettings, n);
      else {
        var l = d();
        k(l, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "apiKeyChain", ftype: e.STRING, fid: 5 }),
        t.apiKeyChain != null)
      )
        n.writeString(t.apiKeyChain);
      else {
        var u = "";
        n.writeString(u);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "apiKeyChainGroup",
          ftype: e.STRING,
          fid: 6,
        }),
        t.apiKeyChainGroup != null)
      )
        n.writeString(t.apiKeyChainGroup);
      else {
        var c = "";
        n.writeString(c);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "textProcessingStrategy",
          ftype: e.STRUCT,
          fid: 7,
        }),
        t.textProcessingStrategy != null)
      )
        R(t.textProcessingStrategy, n);
      else {
        var m = s();
        R(m, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "pronunciationDictionarySettings",
          ftype: e.LIST,
          fid: 8,
        }),
        t.pronunciationDictionarySettings != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.pronunciationDictionarySettings.length,
        });
        for (var p of t.pronunciationDictionarySettings) I(p, n);
        n.writeListEnd();
      } else {
        var _ = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: _.length,
        });
        for (var f of _) I(f, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(),
        t.languageCode != null &&
          (n.writeFieldBegin({
            fname: "languageCode",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.languageCode),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function D(t, n) {
      if (
        (n.writeStructBegin("AzureTtsConfig"),
        n.writeFieldBegin({
          fname: "apiKey",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.apiKey != null)
      )
        n.writeString(t.apiKey);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "region", ftype: e.STRING, fid: 2 }),
        t.region != null)
      )
        n.writeString(t.region);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "voiceId", ftype: e.STRING, fid: 3 }),
        t.voiceId != null)
      )
        n.writeString(t.voiceId);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "apiKeyChains", ftype: e.MAP, fid: 4 }),
        t.apiKeyChains != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRING,
          size: Object.keys(t.apiKeyChains).length,
        });
        for (var l of Object.entries(t.apiKeyChains)) {
          var u = l[0],
            c = l[1];
          (n.writeString(u), n.writeString(c));
        }
        n.writeMapEnd();
      } else {
        var d = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRING,
          size: Object.keys(d).length,
        });
        for (var m of Object.entries(d)) {
          var p = m[0],
            _ = m[1];
          (n.writeString(p), n.writeString(_));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "apiKeyChainGroup",
          ftype: e.STRING,
          fid: 5,
        }),
        t.apiKeyChainGroup != null)
      )
        n.writeString(t.apiKeyChainGroup);
      else {
        var f = "";
        n.writeString(f);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "textProcessingStrategy",
          ftype: e.STRUCT,
          fid: 6,
        }),
        t.textProcessingStrategy != null)
      )
        R(t.textProcessingStrategy, n);
      else {
        var g = s();
        R(g, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function x(t, n) {
      if (
        (n.writeStructBegin("KotobaTtsConfig"),
        n.writeFieldBegin({
          fname: "endpoint",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.endpoint != null)
      )
        n.writeString(t.endpoint);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "language", ftype: e.STRING, fid: 2 }),
        t.language != null)
      )
        n.writeString(t.language);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "speakerId", ftype: e.STRING, fid: 3 }),
        t.speakerId != null)
      )
        n.writeString(t.speakerId);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "textProcessingStrategy",
          ftype: e.STRUCT,
          fid: 4,
        }),
        t.textProcessingStrategy != null)
      )
        R(t.textProcessingStrategy, n);
      else {
        var l = s();
        R(l, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function $(t, n) {
      if (
        (n.writeStructBegin("GcpChirpTtsConfig"),
        n.writeFieldBegin({
          fname: "voiceId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.voiceId != null)
      )
        n.writeString(t.voiceId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "language", ftype: e.STRING, fid: 2 }),
        t.language != null)
      )
        n.writeString(t.language);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "credentialsKeyChain",
          ftype: e.STRING,
          fid: 3,
        }),
        t.credentialsKeyChain != null)
      )
        n.writeString(t.credentialsKeyChain);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        t.credentialsKeyChainGroup != null &&
          (n.writeFieldBegin({
            fname: "credentialsKeyChainGroup",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.credentialsKeyChainGroup),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "inactivityTimeoutMs",
          ftype: e.I32,
          fid: 5,
        }),
        t.inactivityTimeoutMs != null)
      )
        n.writeI32(t.inactivityTimeoutMs);
      else {
        var l = 3e4;
        n.writeI32(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function P(t, n) {
      if (
        (n.writeStructBegin("GeminiTtsConfig"),
        n.writeFieldBegin({
          fname: "voiceId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.voiceId != null)
      )
        n.writeString(t.voiceId);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "language", ftype: e.STRING, fid: 2 }),
        t.language != null)
      )
        n.writeString(t.language);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "model", ftype: e.STRING, fid: 3 }),
        t.model != null)
      )
        n.writeString(t.model);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "apiKeyChain", ftype: e.STRING, fid: 4 }),
        t.apiKeyChain != null)
      )
        n.writeString(t.apiKeyChain);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        t.apiKeyChainGroup != null &&
          (n.writeFieldBegin({
            fname: "apiKeyChainGroup",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.apiKeyChainGroup),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "inactivityTimeoutMs",
          ftype: e.I32,
          fid: 6,
        }),
        t.inactivityTimeoutMs != null)
      )
        n.writeI32(t.inactivityTimeoutMs);
      else {
        var u = 3e4;
        n.writeI32(u);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "textProcessingStrategy",
          ftype: e.STRUCT,
          fid: 7,
        }),
        t.textProcessingStrategy != null)
      )
        R(t.textProcessingStrategy, n);
      else {
        var c = s();
        R(c, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function N(t, n) {
      if (
        (n.writeStructBegin("NgttsConfig"),
        n.writeFieldBegin({
          fname: "voiceId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.voiceId != null)
      )
        n.writeString(t.voiceId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        t.name != null &&
          (n.writeFieldBegin({
            fname: "name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.name),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "sentimentType", ftype: e.I32, fid: 3 }),
        t.sentimentType != null)
      ) {
        var i;
        n.writeI32((i = t.sentimentType) != null ? i : 0);
      } else {
        var l = o("TtsConfigTypes").SentimentType.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "sentimentIntensity",
          ftype: e.I32,
          fid: 4,
        }),
        t.sentimentIntensity != null)
      ) {
        var s;
        n.writeI32((s = t.sentimentIntensity) != null ? s : 0);
      } else {
        var u = o("TtsConfigTypes").SentimentIntensity.cast(0);
        n.writeI32(u != null ? u : 0);
      }
      if ((n.writeFieldEnd(), t.emotion != null)) {
        var c;
        (n.writeFieldBegin({
          fname: "emotion",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 5,
        }),
          n.writeI32((c = t.emotion) != null ? c : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function M(t, n) {
      if (
        (n.writeStructBegin("audioGenToNgttsTranslationMap"),
        n.writeFieldBegin({
          fname: "translationMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.translationMap != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.translationMap).length,
        });
        for (var o of Object.entries(t.translationMap)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), N(i, n));
        }
        n.writeMapEnd();
      } else {
        var l = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(l).length,
        });
        for (var s of Object.entries(l)) {
          var u = s[0],
            c = s[1];
          (n.writeString(u), N(c, n));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function w(t, n) {
      if (
        (n.writeStructBegin("TokenReplacementConfig"),
        n.writeFieldBegin({
          fname: "isEnabled",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.isEnabled != null)
      )
        n.writeBool(t.isEnabled);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if ((n.writeFieldEnd(), t.tokenReplacementMap != null)) {
        (n.writeFieldBegin({
          fname: "tokenReplacementMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 2,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRING,
            size: Object.keys(t.tokenReplacementMap).length,
          }));
        for (var a of Object.entries(t.tokenReplacementMap)) {
          var i = a[0],
            l = a[1];
          (n.writeString(i), n.writeString(l));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function A(t, n) {
      if ((n.writeStructBegin("TtsConfig"), t.elevenLabsTtsConfig != null)) {
        (n.writeFieldBegin({
          fname: "elevenLabsTtsConfig",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
          T(t.elevenLabsTtsConfig, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.azureTtsConfig != null) {
        (n.writeFieldBegin({
          fname: "azureTtsConfig",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
          D(t.azureTtsConfig, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.ngttsConfig != null) {
        (n.writeFieldBegin({
          fname: "ngttsConfig",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 3,
        }),
          N(t.ngttsConfig, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function F(t, n) {
      if (
        (n.writeStructBegin("ThirdPartyTtsConfig"),
        t.elevenLabsTtsConfig != null)
      ) {
        (n.writeFieldBegin({
          fname: "elevenLabsTtsConfig",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
          T(t.elevenLabsTtsConfig, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.azureTtsConfig != null) {
        (n.writeFieldBegin({
          fname: "azureTtsConfig",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
          D(t.azureTtsConfig, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.kotobaTtsConfig != null) {
        (n.writeFieldBegin({
          fname: "kotobaTtsConfig",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 3,
        }),
          x(t.kotobaTtsConfig, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.gcpChirpTtsConfig != null) {
        (n.writeFieldBegin({
          fname: "gcpChirpTtsConfig",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 4,
        }),
          $(t.gcpChirpTtsConfig, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.geminiTtsConfig != null) {
        (n.writeFieldBegin({
          fname: "geminiTtsConfig",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 5,
        }),
          P(t.geminiTtsConfig, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function O(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.textProcessingType = o(
                  "TtsConfigTypes",
                ).TextProcessingType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.delimiter = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.textProcessingType === void 0 &&
          (n.textProcessingType =
            o("TtsConfigTypes").TextProcessingType.cast(0)),
        n
      );
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
              ? (n.voiceName = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.thirdPartyTtsConfig = J(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.voiceName === void 0 && (n.voiceName = ""),
        n.thirdPartyTtsConfig === void 0 && (n.thirdPartyTtsConfig = S()),
        n
      );
    }
    function W(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.clientId = o("TtsConfigTypes").TtsClientId.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.thirdPartyttsVoiceConfigs = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = B(t);
                n.thirdPartyttsVoiceConfigs.push(c);
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
        n.clientId === void 0 &&
          (n.clientId = o("TtsConfigTypes").TtsClientId.cast(0)),
        n.thirdPartyttsVoiceConfigs === void 0 &&
          (n.thirdPartyttsVoiceConfigs = []),
        n
      );
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
            a === (e || (e = r("ThriftTypes"))).FLOAT
              ? (n.speed = t.readFloat())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).FLOAT
              ? (n.stability = t.readFloat())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.useSpeakerBoost = t.readBool())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).FLOAT
              ? (n.similarityBoost = t.readFloat())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.speed === void 0 && (n.speed = 1),
        n.stability === void 0 && (n.stability = 0.5),
        n.useSpeakerBoost === void 0 && (n.useSpeakerBoost = !1),
        n.similarityBoost === void 0 && (n.similarityBoost = 0.800000011920929),
        n
      );
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
              ? (n.id = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.version = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.id === void 0 && (n.id = ""),
        n.version === void 0 && (n.version = ""),
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.apiKey = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.voiceId = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.model = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.voiceSettings = q(t))
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.apiKeyChain = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.apiKeyChainGroup = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.textProcessingStrategy = O(t))
              : t.skip(a);
            break;
          case 8:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.pronunciationDictionarySettings = [];
              for (var l = t.readListBegin(), u = 0; u < l.size; u++) {
                var c = U(t);
                n.pronunciationDictionarySettings.push(c);
              }
            } else t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.languageCode = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.apiKey === void 0 && (n.apiKey = ""),
        n.voiceId === void 0 && (n.voiceId = ""),
        n.model === void 0 && (n.model = ""),
        n.voiceSettings === void 0 && (n.voiceSettings = d()),
        n.apiKeyChain === void 0 && (n.apiKeyChain = ""),
        n.apiKeyChainGroup === void 0 && (n.apiKeyChainGroup = ""),
        n.textProcessingStrategy === void 0 && (n.textProcessingStrategy = s()),
        n.pronunciationDictionarySettings === void 0 &&
          (n.pronunciationDictionarySettings = []),
        n
      );
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
              ? (n.apiKey = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.region = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.voiceId = t.readString())
              : t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.apiKeyChains = {};
              for (var l = t.readMapBegin(), u = 0; u < l.size; u++) {
                var c = t.readString(),
                  d = t.readString();
                n.apiKeyChains[c] = d;
              }
            } else t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.apiKeyChainGroup = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.textProcessingStrategy = O(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.apiKey === void 0 && (n.apiKey = ""),
        n.region === void 0 && (n.region = ""),
        n.voiceId === void 0 && (n.voiceId = ""),
        n.apiKeyChains === void 0 && (n.apiKeyChains = {}),
        n.apiKeyChainGroup === void 0 && (n.apiKeyChainGroup = ""),
        n.textProcessingStrategy === void 0 && (n.textProcessingStrategy = s()),
        n
      );
    }
    function G(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.endpoint = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.language = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.speakerId = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.textProcessingStrategy = O(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.endpoint === void 0 && (n.endpoint = ""),
        n.language === void 0 && (n.language = ""),
        n.speakerId === void 0 && (n.speakerId = ""),
        n.textProcessingStrategy === void 0 && (n.textProcessingStrategy = s()),
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
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.voiceId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.language = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.credentialsKeyChain = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.credentialsKeyChainGroup = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.inactivityTimeoutMs = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.voiceId === void 0 && (n.voiceId = ""),
        n.language === void 0 && (n.language = ""),
        n.credentialsKeyChain === void 0 && (n.credentialsKeyChain = ""),
        n.inactivityTimeoutMs === void 0 && (n.inactivityTimeoutMs = 3e4),
        n
      );
    }
    function j(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.voiceId = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.language = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.model = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.apiKeyChain = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.apiKeyChainGroup = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.inactivityTimeoutMs = t.readI32())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.textProcessingStrategy = O(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.voiceId === void 0 && (n.voiceId = ""),
        n.language === void 0 && (n.language = ""),
        n.model === void 0 && (n.model = ""),
        n.apiKeyChain === void 0 && (n.apiKeyChain = ""),
        n.inactivityTimeoutMs === void 0 && (n.inactivityTimeoutMs = 3e4),
        n.textProcessingStrategy === void 0 && (n.textProcessingStrategy = s()),
        n
      );
    }
    function K(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.voiceId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.name = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.sentimentType = o("TtsConfigTypes").SentimentType.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.sentimentIntensity = o(
                  "TtsConfigTypes",
                ).SentimentIntensity.cast(t.readI32()))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.emotion = o("TtsConfigTypes").Emotion.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.voiceId === void 0 && (n.voiceId = ""),
        n.sentimentType === void 0 &&
          (n.sentimentType = o("TtsConfigTypes").SentimentType.cast(0)),
        n.sentimentIntensity === void 0 &&
          (n.sentimentIntensity =
            o("TtsConfigTypes").SentimentIntensity.cast(0)),
        n
      );
    }
    function Q(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.translationMap = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = K(t);
                n.translationMap[u] = c;
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
        n.translationMap === void 0 && (n.translationMap = {}),
        n
      );
    }
    function X(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isEnabled = t.readBool())
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.tokenReplacementMap = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = t.readString();
                n.tokenReplacementMap[u] = c;
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
        n.isEnabled === void 0 && (n.isEnabled = !1),
        n
      );
    }
    function Y(t) {
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
              if (n == null)
                ((o.elevenLabsTtsConfig = V(t)), (n = "elevenLabsTtsConfig"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: TtsConfig; current field: elevenLabsTtsConfig, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.azureTtsConfig = H(t)), (n = "azureTtsConfig"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: TtsConfig; current field: azureTtsConfig, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((o.ngttsConfig = K(t)), (n = "ngttsConfig"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: TtsConfig; current field: ngttsConfig, previous deserialized field: " +
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
    function J(t) {
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
              if (n == null)
                ((o.elevenLabsTtsConfig = V(t)), (n = "elevenLabsTtsConfig"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: ThirdPartyTtsConfig; current field: elevenLabsTtsConfig, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.azureTtsConfig = H(t)), (n = "azureTtsConfig"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: ThirdPartyTtsConfig; current field: azureTtsConfig, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 3:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.kotobaTtsConfig = G(t)), (n = "kotobaTtsConfig"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: ThirdPartyTtsConfig; current field: kotobaTtsConfig, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 4:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.gcpChirpTtsConfig = z(t)), (n = "gcpChirpTtsConfig"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: ThirdPartyTtsConfig; current field: gcpChirpTtsConfig, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 5:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.geminiTtsConfig = j(t)), (n = "geminiTtsConfig"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: ThirdPartyTtsConfig; current field: geminiTtsConfig, previous deserialized field: " +
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
    ((l.TextProcessingStrategy$DefaultConstructor = s),
      (l.ThirdPartyTtsVoiceConfig$DefaultConstructor = u),
      (l.ClientTtsVoiceConfig$DefaultConstructor = c),
      (l.ElevenLabsVoiceSettings$DefaultConstructor = d),
      (l.ElevenLabsPronunciationDictionarySettings$DefaultConstructor = m),
      (l.ElevenLabsTtsConfig$DefaultConstructor = p),
      (l.AzureTtsConfig$DefaultConstructor = _),
      (l.KotobaTtsConfig$DefaultConstructor = f),
      (l.GcpChirpTtsConfig$DefaultConstructor = g),
      (l.GeminiTtsConfig$DefaultConstructor = h),
      (l.NgttsConfig$DefaultConstructor = y),
      (l.audioGenToNgttsTranslationMap$DefaultConstructor = C),
      (l.TokenReplacementConfig$DefaultConstructor = b),
      (l.TtsConfig$DefaultConstructor = v),
      (l.ThirdPartyTtsConfig$DefaultConstructor = S),
      (l.serializeTextProcessingStrategy = R),
      (l.serializeThirdPartyTtsVoiceConfig = L),
      (l.serializeClientTtsVoiceConfig = E),
      (l.serializeElevenLabsVoiceSettings = k),
      (l.serializeElevenLabsPronunciationDictionarySettings = I),
      (l.serializeElevenLabsTtsConfig = T),
      (l.serializeAzureTtsConfig = D),
      (l.serializeKotobaTtsConfig = x),
      (l.serializeGcpChirpTtsConfig = $),
      (l.serializeGeminiTtsConfig = P),
      (l.serializeNgttsConfig = N),
      (l.serializeAudioGenToNgttsTranslationMap = M),
      (l.serializeTokenReplacementConfig = w),
      (l.serializeTtsConfig = A),
      (l.serializeThirdPartyTtsConfig = F),
      (l.deserializeTextProcessingStrategy = O),
      (l.deserializeThirdPartyTtsVoiceConfig = B),
      (l.deserializeClientTtsVoiceConfig = W),
      (l.deserializeElevenLabsVoiceSettings = q),
      (l.deserializeElevenLabsPronunciationDictionarySettings = U),
      (l.deserializeElevenLabsTtsConfig = V),
      (l.deserializeAzureTtsConfig = H),
      (l.deserializeKotobaTtsConfig = G),
      (l.deserializeGcpChirpTtsConfig = z),
      (l.deserializeGeminiTtsConfig = j),
      (l.deserializeNgttsConfig = K),
      (l.deserializeAudioGenToNgttsTranslationMap = Q),
      (l.deserializeTokenReplacementConfig = X),
      (l.deserializeTtsConfig = Y),
      (l.deserializeThirdPartyTtsConfig = J));
  },
  98,
);
