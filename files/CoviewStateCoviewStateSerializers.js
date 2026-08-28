__d(
  "CoviewStateCoviewStateSerializers",
  ["CoviewStateCoviewStateTypes", "ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        artifact_id: "",
        artifact_type: o("CoviewStateCoviewStateTypes").ArtifactType.cast(0),
        opener_id: "",
      };
    }
    function u() {
      return { open_artifacts: [] };
    }
    function c() {
      return { open_artifacts: [], last_updated_time_ms: "0" };
    }
    function d() {
      return { open_artifacts: [], last_updated_time_ms: "0" };
    }
    function m(t, n) {
      if (
        (n.writeStructBegin("OpenArtifact"),
        n.writeFieldBegin({
          fname: "artifact_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.artifact_id != null)
      )
        n.writeString(t.artifact_id);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "artifact_type", ftype: e.I32, fid: 2 }),
        t.artifact_type != null)
      ) {
        var i;
        n.writeI32((i = t.artifact_type) != null ? i : 0);
      } else {
        var l = o("CoviewStateCoviewStateTypes").ArtifactType.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.page_number != null &&
          (n.writeFieldBegin({
            fname: "page_number",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 3,
          }),
          n.writeI32(t.page_number),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "opener_id", ftype: e.STRING, fid: 4 }),
        t.opener_id != null)
      )
        n.writeString(t.opener_id);
      else {
        var s = "";
        n.writeString(s);
      }
      (n.writeFieldEnd(),
        t.unlock != null &&
          (n.writeFieldBegin({
            fname: "unlock",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 5,
          }),
          n.writeBool(t.unlock),
          n.writeFieldEnd()),
        t.last_actor_id != null &&
          (n.writeFieldBegin({
            fname: "last_actor_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.last_actor_id),
          n.writeFieldEnd()),
        t.session_id != null &&
          (n.writeFieldBegin({
            fname: "session_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.session_id),
          n.writeFieldEnd()),
        t.message_id != null &&
          (n.writeFieldBegin({
            fname: "message_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.message_id),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("CoviewInputState"),
        n.writeFieldBegin({
          fname: "open_artifacts",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.open_artifacts != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.open_artifacts.length,
        });
        for (var o of t.open_artifacts) m(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) m(i, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function _(t, n) {
      if (
        (n.writeStructBegin("CoviewOutputState"),
        n.writeFieldBegin({
          fname: "open_artifacts",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.open_artifacts != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.open_artifacts.length,
        });
        for (var o of t.open_artifacts) m(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) m(i, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "last_updated_time_ms",
          ftype: e.I64,
          fid: 2,
        }),
        t.last_updated_time_ms != null)
      )
        n.writeI64(r("jsbi").BigInt(t.last_updated_time_ms));
      else {
        var l = "0";
        n.writeI64(r("jsbi").BigInt(l));
      }
      (n.writeFieldEnd(),
        t.is_feature_enabled != null &&
          (n.writeFieldBegin({
            fname: "is_feature_enabled",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 3,
          }),
          n.writeBool(t.is_feature_enabled),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("CoviewConferenceOutputState"),
        n.writeFieldBegin({
          fname: "open_artifacts",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
        t.open_artifacts != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.open_artifacts.length,
        });
        for (var o of t.open_artifacts) m(o, n);
        n.writeListEnd();
      } else {
        var a = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: a.length,
        });
        for (var i of a) m(i, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "last_updated_time_ms",
          ftype: e.I64,
          fid: 2,
        }),
        t.last_updated_time_ms != null)
      )
        n.writeI64(r("jsbi").BigInt(t.last_updated_time_ms));
      else {
        var l = "0";
        n.writeI64(r("jsbi").BigInt(l));
      }
      (n.writeFieldEnd(),
        t.is_feature_enabled != null &&
          (n.writeFieldBegin({
            fname: "is_feature_enabled",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 3,
          }),
          n.writeBool(t.is_feature_enabled),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function g(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.artifact_id = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.artifact_type = o(
                  "CoviewStateCoviewStateTypes",
                ).ArtifactType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.page_number = t.readI32())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.opener_id = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.unlock = t.readBool())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.last_actor_id = t.readString())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.session_id = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.message_id = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.artifact_id === void 0 && (n.artifact_id = ""),
        n.artifact_type === void 0 &&
          (n.artifact_type = o("CoviewStateCoviewStateTypes").ArtifactType.cast(
            0,
          )),
        n.opener_id === void 0 && (n.opener_id = ""),
        n
      );
    }
    function h(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.open_artifacts = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = g(t);
                n.open_artifacts.push(u);
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
        n.open_artifacts === void 0 && (n.open_artifacts = []),
        n
      );
    }
    function y(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.open_artifacts = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = g(t);
                n.open_artifacts.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.last_updated_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_feature_enabled = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.open_artifacts === void 0 && (n.open_artifacts = []),
        n.last_updated_time_ms === void 0 && (n.last_updated_time_ms = "0"),
        n
      );
    }
    function C(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.open_artifacts = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = g(t);
                n.open_artifacts.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.last_updated_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_feature_enabled = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.open_artifacts === void 0 && (n.open_artifacts = []),
        n.last_updated_time_ms === void 0 && (n.last_updated_time_ms = "0"),
        n
      );
    }
    ((l.OpenArtifact$DefaultConstructor = s),
      (l.CoviewInputState$DefaultConstructor = u),
      (l.CoviewOutputState$DefaultConstructor = c),
      (l.CoviewConferenceOutputState$DefaultConstructor = d),
      (l.serializeOpenArtifact = m),
      (l.serializeCoviewInputState = p),
      (l.serializeCoviewOutputState = _),
      (l.serializeCoviewConferenceOutputState = f),
      (l.deserializeOpenArtifact = g),
      (l.deserializeCoviewInputState = h),
      (l.deserializeCoviewOutputState = y),
      (l.deserializeCoviewConferenceOutputState = C));
  },
  98,
);
