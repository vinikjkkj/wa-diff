__d(
  "XrAiAgentsMediaGenModuleSerializers",
  ["ThriftTypes", "XrAiAgentsMediaGenModuleTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { supportedFlows: new Set(), preloadFlows: new Set() };
    }
    function u() {
      return {
        enableCppVideoGen: !1,
        personaConfigMap: {},
        defaultVideoGenConfig: c(),
        manifoldBucket: "behavioural-computing-models",
        manifoldPath: "tree/imitator_candidates_streaming_v3",
        maxWarmUpModels: 3,
        allowedWarmUpModels: new Set(),
        oneShotWarmUpPersonaConfig: d(),
        videoGenSetup: s(),
      };
    }
    function c() {
      return {};
    }
    function d() {
      return {
        persona: "",
        imitatorManifoldBucket: "",
        imitatorManifoldPath: "",
        mimicManifoldBucket: "",
        mimicManifoldPath: "",
      };
    }
    function m() {
      return { personaId: "" };
    }
    function p() {
      return { personas: [] };
    }
    function _() {
      return {
        eventType: o("XrAiAgentsMediaGenModuleTypes").GenMediaEventType.cast(0),
      };
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("VideoGenSetup"),
        n.writeFieldBegin({
          fname: "supportedFlows",
          ftype: (e || (e = r("ThriftTypes"))).SET,
          fid: 1,
        }),
        t.supportedFlows != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.supportedFlows.size,
        });
        for (var o of t.supportedFlows) n.writeString(o);
        n.writeSetEnd();
      } else {
        var a = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: a.size,
        });
        for (var i of a) n.writeString(i);
        n.writeSetEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "preloadFlows", ftype: e.SET, fid: 2 }),
        t.preloadFlows != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.preloadFlows.size,
        });
        for (var l of t.preloadFlows) n.writeString(l);
        n.writeSetEnd();
      } else {
        var s = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: s.size,
        });
        for (var u of s) n.writeString(u);
        n.writeSetEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function g(t, n) {
      if (
        (n.writeStructBegin("XrAiAgentsMediaGenModuleCreateConfig"),
        n.writeFieldBegin({
          fname: "enableCppVideoGen",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.enableCppVideoGen != null)
      )
        n.writeBool(t.enableCppVideoGen);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "personaConfigMap", ftype: e.MAP, fid: 4 }),
        t.personaConfigMap != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.personaConfigMap).length,
        });
        for (var a of Object.entries(t.personaConfigMap)) {
          var i = a[0],
            l = a[1];
          (n.writeString(i), h(l, n));
        }
        n.writeMapEnd();
      } else {
        var u = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(u).length,
        });
        for (var m of Object.entries(u)) {
          var p = m[0],
            _ = m[1];
          (n.writeString(p), h(_, n));
        }
        n.writeMapEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "defaultVideoGenConfig",
          ftype: e.STRUCT,
          fid: 5,
        }),
        t.defaultVideoGenConfig != null)
      )
        h(t.defaultVideoGenConfig, n);
      else {
        var g = c();
        h(g, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "manifoldBucket", ftype: e.STRING, fid: 6 }),
        t.manifoldBucket != null)
      )
        n.writeString(t.manifoldBucket);
      else {
        var C = "behavioural-computing-models";
        n.writeString(C);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "manifoldPath", ftype: e.STRING, fid: 7 }),
        t.manifoldPath != null)
      )
        n.writeString(t.manifoldPath);
      else {
        var b = "tree/imitator_candidates_streaming_v3";
        n.writeString(b);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "maxWarmUpModels", ftype: e.I32, fid: 8 }),
        t.maxWarmUpModels != null)
      )
        n.writeI32(t.maxWarmUpModels);
      else {
        var v = 3;
        n.writeI32(v);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "allowedWarmUpModels",
          ftype: e.SET,
          fid: 9,
        }),
        t.allowedWarmUpModels != null)
      ) {
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: t.allowedWarmUpModels.size,
        });
        for (var S of t.allowedWarmUpModels) n.writeString(S);
        n.writeSetEnd();
      } else {
        var R = new Set();
        n.writeSetBegin({
          etype: (e || (e = r("ThriftTypes"))).STRING,
          size: R.size,
        });
        for (var L of R) n.writeString(L);
        n.writeSetEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "oneShotWarmUpPersonaConfig",
          ftype: e.STRUCT,
          fid: 10,
        }),
        t.oneShotWarmUpPersonaConfig != null)
      )
        y(t.oneShotWarmUpPersonaConfig, n);
      else {
        var E = d();
        y(E, n);
      }
      if (
        (n.writeFieldEnd(),
        t.hpImitatorManifoldPath != null &&
          (n.writeFieldBegin({
            fname: "hpImitatorManifoldPath",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 11,
          }),
          n.writeString(t.hpImitatorManifoldPath),
          n.writeFieldEnd()),
        t.hpMimicManifoldPath != null &&
          (n.writeFieldBegin({
            fname: "hpMimicManifoldPath",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 12,
          }),
          n.writeString(t.hpMimicManifoldPath),
          n.writeFieldEnd()),
        t.hpMimicToGeneratorVersionOverrideMap != null)
      ) {
        (n.writeFieldBegin({
          fname: "hpMimicToGeneratorVersionOverrideMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 13,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRING,
            size: Object.keys(t.hpMimicToGeneratorVersionOverrideMap).length,
          }));
        for (var k of Object.entries(t.hpMimicToGeneratorVersionOverrideMap)) {
          var I = k[0],
            T = k[1];
          (n.writeString(I), n.writeString(T));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (t.hpMimicWithEmotionCondToGeneratorVersionOverrideMap != null) {
        (n.writeFieldBegin({
          fname: "hpMimicWithEmotionCondToGeneratorVersionOverrideMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 14,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRING,
            size: Object.keys(
              t.hpMimicWithEmotionCondToGeneratorVersionOverrideMap,
            ).length,
          }));
        for (var D of Object.entries(
          t.hpMimicWithEmotionCondToGeneratorVersionOverrideMap,
        )) {
          var x = D[0],
            $ = D[1];
          (n.writeString(x), n.writeString($));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (t.warmUpPersonasToModelsDataConfigMap != null) {
        (n.writeFieldBegin({
          fname: "warmUpPersonasToModelsDataConfigMap",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 15,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRING,
            size: Object.keys(t.warmUpPersonasToModelsDataConfigMap).length,
          }));
        for (var P of Object.entries(t.warmUpPersonasToModelsDataConfigMap)) {
          var N = P[0],
            M = P[1];
          (n.writeString(N), n.writeString(M));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({
          fname: "videoGenSetup",
          ftype: e.STRUCT,
          fid: 16,
        }),
        t.videoGenSetup != null)
      )
        f(t.videoGenSetup, n);
      else {
        var w = s();
        f(w, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function h(t, n) {
      (n.writeStructBegin("VideoGenConfig"),
        t.settingsEntId != null &&
          (n.writeFieldBegin({
            fname: "settingsEntId",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.settingsEntId)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function y(t, n) {
      if (
        (n.writeStructBegin("OneShotWarmUpPersonaConfig"),
        n.writeFieldBegin({
          fname: "persona",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.persona != null)
      )
        n.writeString(t.persona);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "imitatorManifoldBucket",
          ftype: e.STRING,
          fid: 2,
        }),
        t.imitatorManifoldBucket != null)
      )
        n.writeString(t.imitatorManifoldBucket);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "imitatorManifoldPath",
          ftype: e.STRING,
          fid: 3,
        }),
        t.imitatorManifoldPath != null)
      )
        n.writeString(t.imitatorManifoldPath);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "mimicManifoldBucket",
          ftype: e.STRING,
          fid: 4,
        }),
        t.mimicManifoldBucket != null)
      )
        n.writeString(t.mimicManifoldBucket);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "mimicManifoldPath",
          ftype: e.STRING,
          fid: 5,
        }),
        t.mimicManifoldPath != null)
      )
        n.writeString(t.mimicManifoldPath);
      else {
        var s = "";
        n.writeString(s);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function C(t, n) {
      if (
        (n.writeStructBegin("PrewarmPersonaConfig"),
        n.writeFieldBegin({
          fname: "personaId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.personaId != null)
      )
        n.writeString(t.personaId);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function b(t, n) {
      if (
        (n.writeStructBegin("PrewarmMediaGenConfig"),
        n.writeFieldBegin({
          fname: "personas",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.personas != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.personas.length,
        });
        for (var o of t.personas) C(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) C(i, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function v(t, n) {
      if (
        (n.writeStructBegin("GenMediaEvent"),
        n.writeFieldBegin({
          fname: "eventType",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.eventType != null)
      ) {
        var a;
        n.writeI32((a = t.eventType) != null ? a : 0);
      } else {
        var i = o("XrAiAgentsMediaGenModuleTypes").GenMediaEventType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function S(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.supportedFlows = new Set();
              for (var l = t.readSetBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.supportedFlows.add(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.preloadFlows = new Set();
              for (var c = t.readSetBegin(), d = 0; d < c.size; d++) {
                var m = t.readString();
                n.preloadFlows.add(m);
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
        n.supportedFlows === void 0 && (n.supportedFlows = new Set()),
        n.preloadFlows === void 0 && (n.preloadFlows = new Set()),
        n
      );
    }
    function R(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableCppVideoGen = t.readBool())
              : t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.personaConfigMap = {};
              for (var l = t.readMapBegin(), u = 0; u < l.size; u++) {
                var m = t.readString(),
                  p = L(t);
                n.personaConfigMap[m] = p;
              }
            } else t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.defaultVideoGenConfig = L(t))
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.manifoldBucket = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.manifoldPath = t.readString())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.maxWarmUpModels = t.readI32())
              : t.skip(a);
            break;
          case 9:
            if (a === (e || (e = r("ThriftTypes"))).SET) {
              n.allowedWarmUpModels = new Set();
              for (var _ = t.readSetBegin(), f = 0; f < _.size; f++) {
                var g = t.readString();
                n.allowedWarmUpModels.add(g);
              }
            } else t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.oneShotWarmUpPersonaConfig = E(t))
              : t.skip(a);
            break;
          case 11:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.hpImitatorManifoldPath = t.readString())
              : t.skip(a);
            break;
          case 12:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.hpMimicManifoldPath = t.readString())
              : t.skip(a);
            break;
          case 13:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.hpMimicToGeneratorVersionOverrideMap = {};
              for (var h = t.readMapBegin(), y = 0; y < h.size; y++) {
                var C = t.readString(),
                  b = t.readString();
                n.hpMimicToGeneratorVersionOverrideMap[C] = b;
              }
            } else t.skip(a);
            break;
          case 14:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.hpMimicWithEmotionCondToGeneratorVersionOverrideMap = {};
              for (var v = t.readMapBegin(), R = 0; R < v.size; R++) {
                var k = t.readString(),
                  I = t.readString();
                n.hpMimicWithEmotionCondToGeneratorVersionOverrideMap[k] = I;
              }
            } else t.skip(a);
            break;
          case 15:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.warmUpPersonasToModelsDataConfigMap = {};
              for (var T = t.readMapBegin(), D = 0; D < T.size; D++) {
                var x = t.readString(),
                  $ = t.readString();
                n.warmUpPersonasToModelsDataConfigMap[x] = $;
              }
            } else t.skip(a);
            break;
          case 16:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.videoGenSetup = S(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.enableCppVideoGen === void 0 && (n.enableCppVideoGen = !1),
        n.personaConfigMap === void 0 && (n.personaConfigMap = {}),
        n.defaultVideoGenConfig === void 0 && (n.defaultVideoGenConfig = c()),
        n.manifoldBucket === void 0 &&
          (n.manifoldBucket = "behavioural-computing-models"),
        n.manifoldPath === void 0 &&
          (n.manifoldPath = "tree/imitator_candidates_streaming_v3"),
        n.maxWarmUpModels === void 0 && (n.maxWarmUpModels = 3),
        n.allowedWarmUpModels === void 0 && (n.allowedWarmUpModels = new Set()),
        n.oneShotWarmUpPersonaConfig === void 0 &&
          (n.oneShotWarmUpPersonaConfig = d()),
        n.videoGenSetup === void 0 && (n.videoGenSetup = s()),
        n
      );
    }
    function L(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.settingsEntId = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
              ? (n.persona = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.imitatorManifoldBucket = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.imitatorManifoldPath = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.mimicManifoldBucket = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.mimicManifoldPath = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.persona === void 0 && (n.persona = ""),
        n.imitatorManifoldBucket === void 0 && (n.imitatorManifoldBucket = ""),
        n.imitatorManifoldPath === void 0 && (n.imitatorManifoldPath = ""),
        n.mimicManifoldBucket === void 0 && (n.mimicManifoldBucket = ""),
        n.mimicManifoldPath === void 0 && (n.mimicManifoldPath = ""),
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
              ? (n.personaId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.personaId === void 0 && (n.personaId = ""),
        n
      );
    }
    function I(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.personas = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = k(t);
                n.personas.push(u);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.personas === void 0 && (n.personas = []), n);
    }
    function T(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.eventType = o(
                  "XrAiAgentsMediaGenModuleTypes",
                ).GenMediaEventType.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.eventType === void 0 &&
          (n.eventType = o(
            "XrAiAgentsMediaGenModuleTypes",
          ).GenMediaEventType.cast(0)),
        n
      );
    }
    ((l.VideoGenSetup$DefaultConstructor = s),
      (l.XrAiAgentsMediaGenModuleCreateConfig$DefaultConstructor = u),
      (l.VideoGenConfig$DefaultConstructor = c),
      (l.OneShotWarmUpPersonaConfig$DefaultConstructor = d),
      (l.PrewarmPersonaConfig$DefaultConstructor = m),
      (l.PrewarmMediaGenConfig$DefaultConstructor = p),
      (l.GenMediaEvent$DefaultConstructor = _),
      (l.serializeVideoGenSetup = f),
      (l.serializeXrAiAgentsMediaGenModuleCreateConfig = g),
      (l.serializeVideoGenConfig = h),
      (l.serializeOneShotWarmUpPersonaConfig = y),
      (l.serializePrewarmPersonaConfig = C),
      (l.serializePrewarmMediaGenConfig = b),
      (l.serializeGenMediaEvent = v),
      (l.deserializeVideoGenSetup = S),
      (l.deserializeXrAiAgentsMediaGenModuleCreateConfig = R),
      (l.deserializeVideoGenConfig = L),
      (l.deserializeOneShotWarmUpPersonaConfig = E),
      (l.deserializePrewarmPersonaConfig = k),
      (l.deserializePrewarmMediaGenConfig = I),
      (l.deserializeGenMediaEvent = T));
  },
  98,
);
