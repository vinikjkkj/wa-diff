__d(
  "AdminInitiatedCastingStateSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return { adminInitiatedCastingParticipant: s() };
    }
    function c() {
      return { adminInitiatedCastingParticipants: {} };
    }
    function d(t, n) {
      (n.writeStructBegin("AdminInitiatedCastingParticipant"),
        t.deviceSerial != null &&
          (n.writeFieldBegin({
            fname: "deviceSerial",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.deviceSerial),
          n.writeFieldEnd()),
        t.deviceId != null &&
          (n.writeFieldBegin({
            fname: "deviceId",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.deviceId),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function m(t, n) {
      if (
        (n.writeStructBegin("AdminInitiatedCastingParticipantInputState"),
        t.participant_DEPRECATED != null &&
          (n.writeFieldBegin({
            fname: "participant_DEPRECATED",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          d(t.participant_DEPRECATED, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "adminInitiatedCastingParticipant",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
        t.adminInitiatedCastingParticipant != null)
      )
        d(t.adminInitiatedCastingParticipant, n);
      else {
        var o = s();
        d(o, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("AdminInitiatedCastingParticipantOutputState"),
        t.participants_DEPRECATED != null)
      ) {
        (n.writeFieldBegin({
          fname: "participants_DEPRECATED",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
          n.writeMapBegin({
            ktype: e.STRING,
            vtype: e.STRUCT,
            size: Object.keys(t.participants_DEPRECATED).length,
          }));
        for (var o of Object.entries(t.participants_DEPRECATED)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), d(i, n));
        }
        (n.writeMapEnd(), n.writeFieldEnd());
      }
      if (
        (n.writeFieldBegin({
          fname: "adminInitiatedCastingParticipants",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 2,
        }),
        t.adminInitiatedCastingParticipants != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.adminInitiatedCastingParticipants).length,
        });
        for (var l of Object.entries(t.adminInitiatedCastingParticipants)) {
          var s = l[0],
            u = l[1];
          (n.writeString(s), d(u, n));
        }
        n.writeMapEnd();
      } else {
        var c = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(c).length,
        });
        for (var m of Object.entries(c)) {
          var p = m[0],
            _ = m[1];
          (n.writeString(p), d(_, n));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function _(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.deviceSerial = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.deviceId = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function f(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.participant_DEPRECATED = _(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.adminInitiatedCastingParticipant = _(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.adminInitiatedCastingParticipant === void 0 &&
          (n.adminInitiatedCastingParticipant = s()),
        n
      );
    }
    function g(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.participants_DEPRECATED = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = _(t);
                n.participants_DEPRECATED[u] = c;
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.adminInitiatedCastingParticipants = {};
              for (var d = t.readMapBegin(), m = 0; m < d.size; m++) {
                var p = t.readString(),
                  f = _(t);
                n.adminInitiatedCastingParticipants[p] = f;
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
        n.adminInitiatedCastingParticipants === void 0 &&
          (n.adminInitiatedCastingParticipants = {}),
        n
      );
    }
    ((l.AdminInitiatedCastingParticipant$DefaultConstructor = s),
      (l.AdminInitiatedCastingParticipantInputState$DefaultConstructor = u),
      (l.AdminInitiatedCastingParticipantOutputState$DefaultConstructor = c),
      (l.serializeAdminInitiatedCastingParticipant = d),
      (l.serializeAdminInitiatedCastingParticipantInputState = m),
      (l.serializeAdminInitiatedCastingParticipantOutputState = p),
      (l.deserializeAdminInitiatedCastingParticipant = _),
      (l.deserializeAdminInitiatedCastingParticipantInputState = f),
      (l.deserializeAdminInitiatedCastingParticipantOutputState = g));
  },
  98,
);
