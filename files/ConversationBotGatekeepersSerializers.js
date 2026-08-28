__d(
  "ConversationBotGatekeepersSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        enableFerrarisNs: !1,
        isSimulationUser: !1,
        enableDebugAudioCapture: !1,
        useVoiceClarityDetector: !1,
        enableListeningLlmInterjection: !1,
        enableVerboseResponse: !1,
        runVcdOnMixedAudio: !1,
        enableCaptionTimestamps: !1,
        useVoiceDiarization: !1,
        useAudioGating: !1,
        enableFerrarisNsV1: !1,
        useEchoMitigation: !1,
        useEchoSuppressor: !1,
        usePssTuningV1: !1,
        usePssTuningBg: !1,
        useFerrarisNsAE: !1,
      };
    }
    function u(t, n) {
      if (
        (n.writeStructBegin("ConversationBotGatekeepers"),
        n.writeFieldBegin({
          fname: "enableFerrarisNs",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 3,
        }),
        t.enableFerrarisNs != null)
      )
        n.writeBool(t.enableFerrarisNs);
      else {
        var o = !1;
        n.writeBool(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "isSimulationUser", ftype: e.BOOL, fid: 8 }),
        t.isSimulationUser != null)
      )
        n.writeBool(t.isSimulationUser);
      else {
        var a = !1;
        n.writeBool(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "enableDebugAudioCapture",
          ftype: e.BOOL,
          fid: 9,
        }),
        t.enableDebugAudioCapture != null)
      )
        n.writeBool(t.enableDebugAudioCapture);
      else {
        var i = !1;
        n.writeBool(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "useVoiceClarityDetector",
          ftype: e.BOOL,
          fid: 10,
        }),
        t.useVoiceClarityDetector != null)
      )
        n.writeBool(t.useVoiceClarityDetector);
      else {
        var l = !1;
        n.writeBool(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "enableListeningLlmInterjection",
          ftype: e.BOOL,
          fid: 11,
        }),
        t.enableListeningLlmInterjection != null)
      )
        n.writeBool(t.enableListeningLlmInterjection);
      else {
        var s = !1;
        n.writeBool(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "enableVerboseResponse",
          ftype: e.BOOL,
          fid: 14,
        }),
        t.enableVerboseResponse != null)
      )
        n.writeBool(t.enableVerboseResponse);
      else {
        var u = !1;
        n.writeBool(u);
      }
      if ((n.writeFieldEnd(), t.flags != null)) {
        (n.writeFieldBegin({
          fname: "flags",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 16,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.BOOL,
            size: Object.keys(t.flags).length,
          }));
        for (var c of Object.entries(t.flags)) {
          var d = c[0],
            m = c[1];
          (n.writeString(d), n.writeBool(m));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (t.intParams != null) {
        (n.writeFieldBegin({
          fname: "intParams",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 17,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.I64,
            size: Object.keys(t.intParams).length,
          }));
        for (var p of Object.entries(t.intParams)) {
          var _ = p[0],
            f = p[1];
          (n.writeString(_), n.writeI64(BigInt(f)));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (t.stringParams != null) {
        (n.writeFieldBegin({
          fname: "stringParams",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 18,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRING,
            size: Object.keys(t.stringParams).length,
          }));
        for (var g of Object.entries(t.stringParams)) {
          var h = g[0],
            y = g[1];
          (n.writeString(h), n.writeString(y));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({
          fname: "runVcdOnMixedAudio",
          ftype: e.BOOL,
          fid: 20,
        }),
        t.runVcdOnMixedAudio != null)
      )
        n.writeBool(t.runVcdOnMixedAudio);
      else {
        var C = !1;
        n.writeBool(C);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "enableCaptionTimestamps",
          ftype: e.BOOL,
          fid: 21,
        }),
        t.enableCaptionTimestamps != null)
      )
        n.writeBool(t.enableCaptionTimestamps);
      else {
        var b = !1;
        n.writeBool(b);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "useVoiceDiarization",
          ftype: e.BOOL,
          fid: 22,
        }),
        t.useVoiceDiarization != null)
      )
        n.writeBool(t.useVoiceDiarization);
      else {
        var v = !1;
        n.writeBool(v);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "useAudioGating", ftype: e.BOOL, fid: 23 }),
        t.useAudioGating != null)
      )
        n.writeBool(t.useAudioGating);
      else {
        var S = !1;
        n.writeBool(S);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "enableFerrarisNsV1",
          ftype: e.BOOL,
          fid: 25,
        }),
        t.enableFerrarisNsV1 != null)
      )
        n.writeBool(t.enableFerrarisNsV1);
      else {
        var R = !1;
        n.writeBool(R);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "useEchoMitigation",
          ftype: e.BOOL,
          fid: 26,
        }),
        t.useEchoMitigation != null)
      )
        n.writeBool(t.useEchoMitigation);
      else {
        var L = !1;
        n.writeBool(L);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "useEchoSuppressor",
          ftype: e.BOOL,
          fid: 28,
        }),
        t.useEchoSuppressor != null)
      )
        n.writeBool(t.useEchoSuppressor);
      else {
        var E = !1;
        n.writeBool(E);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "usePssTuningV1", ftype: e.BOOL, fid: 32 }),
        t.usePssTuningV1 != null)
      )
        n.writeBool(t.usePssTuningV1);
      else {
        var k = !1;
        n.writeBool(k);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "usePssTuningBg", ftype: e.BOOL, fid: 33 }),
        t.usePssTuningBg != null)
      )
        n.writeBool(t.usePssTuningBg);
      else {
        var I = !1;
        n.writeBool(I);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "useFerrarisNsAE", ftype: e.BOOL, fid: 34 }),
        t.useFerrarisNsAE != null)
      )
        n.writeBool(t.useFerrarisNsAE);
      else {
        var T = !1;
        n.writeBool(T);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function c(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableFerrarisNs = t.readBool())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.isSimulationUser = t.readBool())
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableDebugAudioCapture = t.readBool())
              : t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.useVoiceClarityDetector = t.readBool())
              : t.skip(a);
            break;
          case 11:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableListeningLlmInterjection = t.readBool())
              : t.skip(a);
            break;
          case 14:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableVerboseResponse = t.readBool())
              : t.skip(a);
            break;
          case 16:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.flags = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = t.readBool();
                n.flags[u] = c;
              }
            } else t.skip(a);
            break;
          case 17:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.intParams = {};
              for (var d = t.readMapBegin(), m = 0; m < d.size; m++) {
                var p = t.readString(),
                  _ = t.readI64().toString();
                n.intParams[p] = _;
              }
            } else t.skip(a);
            break;
          case 18:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.stringParams = {};
              for (var f = t.readMapBegin(), g = 0; g < f.size; g++) {
                var h = t.readString(),
                  y = t.readString();
                n.stringParams[h] = y;
              }
            } else t.skip(a);
            break;
          case 20:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.runVcdOnMixedAudio = t.readBool())
              : t.skip(a);
            break;
          case 21:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableCaptionTimestamps = t.readBool())
              : t.skip(a);
            break;
          case 22:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.useVoiceDiarization = t.readBool())
              : t.skip(a);
            break;
          case 23:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.useAudioGating = t.readBool())
              : t.skip(a);
            break;
          case 25:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.enableFerrarisNsV1 = t.readBool())
              : t.skip(a);
            break;
          case 26:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.useEchoMitigation = t.readBool())
              : t.skip(a);
            break;
          case 28:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.useEchoSuppressor = t.readBool())
              : t.skip(a);
            break;
          case 32:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.usePssTuningV1 = t.readBool())
              : t.skip(a);
            break;
          case 33:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.usePssTuningBg = t.readBool())
              : t.skip(a);
            break;
          case 34:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.useFerrarisNsAE = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.enableFerrarisNs === void 0 && (n.enableFerrarisNs = !1),
        n.isSimulationUser === void 0 && (n.isSimulationUser = !1),
        n.enableDebugAudioCapture === void 0 &&
          (n.enableDebugAudioCapture = !1),
        n.useVoiceClarityDetector === void 0 &&
          (n.useVoiceClarityDetector = !1),
        n.enableListeningLlmInterjection === void 0 &&
          (n.enableListeningLlmInterjection = !1),
        n.enableVerboseResponse === void 0 && (n.enableVerboseResponse = !1),
        n.runVcdOnMixedAudio === void 0 && (n.runVcdOnMixedAudio = !1),
        n.enableCaptionTimestamps === void 0 &&
          (n.enableCaptionTimestamps = !1),
        n.useVoiceDiarization === void 0 && (n.useVoiceDiarization = !1),
        n.useAudioGating === void 0 && (n.useAudioGating = !1),
        n.enableFerrarisNsV1 === void 0 && (n.enableFerrarisNsV1 = !1),
        n.useEchoMitigation === void 0 && (n.useEchoMitigation = !1),
        n.useEchoSuppressor === void 0 && (n.useEchoSuppressor = !1),
        n.usePssTuningV1 === void 0 && (n.usePssTuningV1 = !1),
        n.usePssTuningBg === void 0 && (n.usePssTuningBg = !1),
        n.useFerrarisNsAE === void 0 && (n.useFerrarisNsAE = !1),
        n
      );
    }
    ((l.ConversationBotGatekeepers$DefaultConstructor = s),
      (l.serializeConversationBotGatekeepers = u),
      (l.deserializeConversationBotGatekeepers = c));
  },
  98,
);
