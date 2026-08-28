__d(
  "MobiusProductConfigSerializers",
  ["MobiusProductConfigTypes", "RoutineTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        routine: o("RoutineTypes").RoutineType.cast(0),
        fromPhoneNumber: "",
      };
    }
    function u() {
      return {
        jobId: "",
        fromPhoneNumber: "",
        routine: o("RoutineTypes").RoutineType.cast(0),
      };
    }
    function c() {
      return {};
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("MaisaVoiceStartConfig"),
        n.writeFieldBegin({
          fname: "routine",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.routine != null)
      ) {
        var a;
        n.writeI32((a = t.routine) != null ? a : 0);
      } else {
        var i = o("RoutineTypes").RoutineType.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "fromPhoneNumber",
          ftype: e.STRING,
          fid: 2,
        }),
        t.fromPhoneNumber != null)
      )
        n.writeString(t.fromPhoneNumber);
      else {
        var l = "";
        n.writeString(l);
      }
      if (
        (n.writeFieldEnd(),
        t.asrModel != null &&
          (n.writeFieldBegin({
            fname: "asrModel",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.asrModel),
          n.writeFieldEnd()),
        t.audioPersona != null &&
          (n.writeFieldBegin({
            fname: "audioPersona",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.audioPersona),
          n.writeFieldEnd()),
        t.language != null &&
          (n.writeFieldBegin({
            fname: "language",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.language),
          n.writeFieldEnd()),
        t.ttsProvider != null)
      ) {
        var s;
        (n.writeFieldBegin({
          fname: "ttsProvider",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 6,
        }),
          n.writeI32((s = t.ttsProvider) != null ? s : 0),
          n.writeFieldEnd());
      }
      (t.issueDetails != null &&
        (n.writeFieldBegin({
          fname: "issueDetails",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 7,
        }),
        n.writeString(t.issueDetails),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function m(t, n) {
      if (
        (n.writeStructBegin("ASAAgentStartConfig"),
        n.writeFieldBegin({
          fname: "jobId",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.jobId != null)
      )
        n.writeString(t.jobId);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "fromPhoneNumber",
          ftype: e.STRING,
          fid: 2,
        }),
        t.fromPhoneNumber != null)
      )
        n.writeString(t.fromPhoneNumber);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "routine", ftype: e.I32, fid: 3 }),
        t.routine != null)
      ) {
        var l;
        n.writeI32((l = t.routine) != null ? l : 0);
      } else {
        var s = o("RoutineTypes").RoutineType.cast(0);
        n.writeI32(s != null ? s : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("MobiusProductConfig"),
        t.asaAgentStartConfig != null)
      ) {
        (n.writeFieldBegin({
          fname: "asaAgentStartConfig",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
          m(t.asaAgentStartConfig, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.maisaVoiceStartConfig != null) {
        (n.writeFieldBegin({
          fname: "maisaVoiceStartConfig",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
          d(t.maisaVoiceStartConfig, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function _(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.routine = o("RoutineTypes").RoutineType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.fromPhoneNumber = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.asrModel = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.audioPersona = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.language = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.ttsProvider = o("MobiusProductConfigTypes").TtsProvider.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.issueDetails = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.routine === void 0 &&
          (n.routine = o("RoutineTypes").RoutineType.cast(0)),
        n.fromPhoneNumber === void 0 && (n.fromPhoneNumber = ""),
        n
      );
    }
    function f(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.jobId = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.fromPhoneNumber = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.routine = o("RoutineTypes").RoutineType.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.jobId === void 0 && (n.jobId = ""),
        n.fromPhoneNumber === void 0 && (n.fromPhoneNumber = ""),
        n.routine === void 0 &&
          (n.routine = o("RoutineTypes").RoutineType.cast(0)),
        n
      );
    }
    function g(t) {
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
                ((o.asaAgentStartConfig = f(t)), (n = "asaAgentStartConfig"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: MobiusProductConfig; current field: asaAgentStartConfig, previous deserialized field: " +
                    n,
                );
            else t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((o.maisaVoiceStartConfig = _(t)),
                  (n = "maisaVoiceStartConfig"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: MobiusProductConfig; current field: maisaVoiceStartConfig, previous deserialized field: " +
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
    ((l.MaisaVoiceStartConfig$DefaultConstructor = s),
      (l.ASAAgentStartConfig$DefaultConstructor = u),
      (l.MobiusProductConfig$DefaultConstructor = c),
      (l.serializeMaisaVoiceStartConfig = d),
      (l.serializeASAAgentStartConfig = m),
      (l.serializeMobiusProductConfig = p),
      (l.deserializeMaisaVoiceStartConfig = _),
      (l.deserializeASAAgentStartConfig = f),
      (l.deserializeMobiusProductConfig = g));
  },
  98,
);
