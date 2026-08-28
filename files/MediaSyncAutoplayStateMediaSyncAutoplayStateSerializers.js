__d(
  "MediaSyncAutoplayStateMediaSyncAutoplayStateSerializers",
  [
    "MediaSyncAutoplayStateMediaSyncAutoplayStateTypes",
    "MediaSyncStateMediaSyncStateSerializers",
    "MediaSyncStateMediaSyncStateTypes",
    "ThriftTypes",
    "jsbi",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { cancel_action_id: "" };
    }
    function u() {
      return {};
    }
    function c() {
      return {};
    }
    function d() {
      return {};
    }
    function m() {
      return {
        action_id: "",
        content_source: o("MediaSyncStateMediaSyncStateTypes").Source.cast(0),
        content_id: "",
        preview_duration_ms: "7000",
      };
    }
    function p() {
      return {
        action_id: "",
        content_source: o("MediaSyncStateMediaSyncStateTypes").Source.cast(0),
        content_id: "",
        content: o(
          "MediaSyncStateMediaSyncStateSerializers",
        ).Content$DefaultConstructor(),
        display_state: o(
          "MediaSyncAutoplayStateMediaSyncAutoplayStateTypes",
        ).DisplayState.cast(0),
        preview_duration_ms: "0",
      };
    }
    function _() {
      return {
        action_id: "",
        content_source: o("MediaSyncStateMediaSyncStateTypes").Source.cast(0),
        content_id: "",
        preview_duration_ms: "7000",
      };
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("ParticipantInputState"),
        n.writeFieldBegin({
          fname: "cancel_action_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.cancel_action_id != null)
      )
        n.writeString(t.cancel_action_id);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(),
        t.autoplay_input != null &&
          (n.writeFieldBegin({
            fname: "autoplay_input",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          C(t.autoplay_input, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function g(t, n) {
      (n.writeStructBegin("ParticipantOutputState"),
        t.autoplay != null &&
          (n.writeFieldBegin({
            fname: "autoplay",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          b(t.autoplay, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("ConferenceInputState"),
        t.autoplay != null &&
          (n.writeFieldBegin({
            fname: "autoplay",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          C(t.autoplay, n),
          n.writeFieldEnd()),
        t.participantOutputs != null)
      ) {
        (n.writeFieldBegin({
          fname: "participantOutputs",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 2,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRUCT,
            size: Object.keys(t.participantOutputs).length,
          }));
        for (var o of Object.entries(t.participantOutputs)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), b(i, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function y(t, n) {
      (n.writeStructBegin("ConferenceOutputState"),
        t.latest_input != null &&
          (n.writeFieldBegin({
            fname: "latest_input",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          C(t.latest_input, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function C(t, n) {
      if (
        (n.writeStructBegin("AutoplayInput"),
        n.writeFieldBegin({
          fname: "action_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.action_id != null)
      )
        n.writeString(t.action_id);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_source", ftype: e.I32, fid: 2 }),
        t.content_source != null)
      ) {
        var i;
        n.writeI32((i = t.content_source) != null ? i : 0);
      } else {
        var l = o("MediaSyncStateMediaSyncStateTypes").Source.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_id", ftype: e.STRING, fid: 3 }),
        t.content_id != null)
      )
        n.writeString(t.content_id);
      else {
        var s = "";
        n.writeString(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "preview_duration_ms",
          ftype: e.I64,
          fid: 4,
        }),
        t.preview_duration_ms != null)
      )
        n.writeI64(r("jsbi").BigInt(t.preview_duration_ms));
      else {
        var u = "7000";
        n.writeI64(r("jsbi").BigInt(u));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function b(t, n) {
      if (
        (n.writeStructBegin("AutoplayOutput"),
        n.writeFieldBegin({
          fname: "action_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.action_id != null)
      )
        n.writeString(t.action_id);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_source", ftype: e.I32, fid: 2 }),
        t.content_source != null)
      ) {
        var i;
        n.writeI32((i = t.content_source) != null ? i : 0);
      } else {
        var l = o("MediaSyncStateMediaSyncStateTypes").Source.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_id", ftype: e.STRING, fid: 3 }),
        t.content_id != null)
      )
        n.writeString(t.content_id);
      else {
        var s = "";
        n.writeString(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content", ftype: e.STRUCT, fid: 4 }),
        t.content != null)
      )
        o("MediaSyncStateMediaSyncStateSerializers").serializeContent(
          t.content,
          n,
        );
      else {
        var u = o(
          "MediaSyncStateMediaSyncStateSerializers",
        ).Content$DefaultConstructor();
        o("MediaSyncStateMediaSyncStateSerializers").serializeContent(u, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "display_state", ftype: e.I32, fid: 5 }),
        t.display_state != null)
      ) {
        var c;
        n.writeI32((c = t.display_state) != null ? c : 0);
      } else {
        var d = o(
          "MediaSyncAutoplayStateMediaSyncAutoplayStateTypes",
        ).DisplayState.cast(0);
        n.writeI32(d != null ? d : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "preview_duration_ms",
          ftype: e.I64,
          fid: 6,
        }),
        t.preview_duration_ms != null)
      )
        n.writeI64(r("jsbi").BigInt(t.preview_duration_ms));
      else {
        var m = "0";
        n.writeI64(r("jsbi").BigInt(m));
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function v(t, n) {
      if (
        (n.writeStructBegin("E2EEAutoplayPayload"),
        n.writeFieldBegin({
          fname: "action_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.action_id != null)
      )
        n.writeString(t.action_id);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_source", ftype: e.I32, fid: 2 }),
        t.content_source != null)
      ) {
        var i;
        n.writeI32((i = t.content_source) != null ? i : 0);
      } else {
        var l = o("MediaSyncStateMediaSyncStateTypes").Source.cast(0);
        n.writeI32(l != null ? l : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_id", ftype: e.STRING, fid: 3 }),
        t.content_id != null)
      )
        n.writeString(t.content_id);
      else {
        var s = "";
        n.writeString(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "preview_duration_ms",
          ftype: e.I64,
          fid: 4,
        }),
        t.preview_duration_ms != null)
      )
        n.writeI64(r("jsbi").BigInt(t.preview_duration_ms));
      else {
        var u = "7000";
        n.writeI64(r("jsbi").BigInt(u));
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cancel_action_id = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.autoplay_input = k(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.cancel_action_id === void 0 && (n.cancel_action_id = ""),
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.autoplay = I(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.autoplay = k(t))
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.participantOutputs = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = I(t);
                n.participantOutputs[u] = c;
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
    function E(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.latest_input = k(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function k(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.action_id = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.content_source = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).Source.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_id = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.preview_duration_ms = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.action_id === void 0 && (n.action_id = ""),
        n.content_source === void 0 &&
          (n.content_source = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).Source.cast(0)),
        n.content_id === void 0 && (n.content_id = ""),
        n.preview_duration_ms === void 0 && (n.preview_duration_ms = "7000"),
        n
      );
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
              ? (n.action_id = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.content_source = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).Source.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_id = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.content = o(
                  "MediaSyncStateMediaSyncStateSerializers",
                ).deserializeContent(t))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.display_state = o(
                  "MediaSyncAutoplayStateMediaSyncAutoplayStateTypes",
                ).DisplayState.cast(t.readI32()))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.preview_duration_ms = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.action_id === void 0 && (n.action_id = ""),
        n.content_source === void 0 &&
          (n.content_source = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).Source.cast(0)),
        n.content_id === void 0 && (n.content_id = ""),
        n.content === void 0 &&
          (n.content = o(
            "MediaSyncStateMediaSyncStateSerializers",
          ).Content$DefaultConstructor()),
        n.display_state === void 0 &&
          (n.display_state = o(
            "MediaSyncAutoplayStateMediaSyncAutoplayStateTypes",
          ).DisplayState.cast(0)),
        n.preview_duration_ms === void 0 && (n.preview_duration_ms = "0"),
        n
      );
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
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.action_id = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.content_source = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).Source.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_id = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.preview_duration_ms = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.action_id === void 0 && (n.action_id = ""),
        n.content_source === void 0 &&
          (n.content_source = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).Source.cast(0)),
        n.content_id === void 0 && (n.content_id = ""),
        n.preview_duration_ms === void 0 && (n.preview_duration_ms = "7000"),
        n
      );
    }
    ((l.ParticipantInputState$DefaultConstructor = s),
      (l.ParticipantOutputState$DefaultConstructor = u),
      (l.ConferenceInputState$DefaultConstructor = c),
      (l.ConferenceOutputState$DefaultConstructor = d),
      (l.AutoplayInput$DefaultConstructor = m),
      (l.AutoplayOutput$DefaultConstructor = p),
      (l.E2EEAutoplayPayload$DefaultConstructor = _),
      (l.serializeParticipantInputState = f),
      (l.serializeParticipantOutputState = g),
      (l.serializeConferenceInputState = h),
      (l.serializeConferenceOutputState = y),
      (l.serializeAutoplayInput = C),
      (l.serializeAutoplayOutput = b),
      (l.serializeE2EEAutoplayPayload = v),
      (l.deserializeParticipantInputState = S),
      (l.deserializeParticipantOutputState = R),
      (l.deserializeConferenceInputState = L),
      (l.deserializeConferenceOutputState = E),
      (l.deserializeAutoplayInput = k),
      (l.deserializeAutoplayOutput = I),
      (l.deserializeE2EEAutoplayPayload = T));
  },
  98,
);
