__d(
  "CanYouSeeMyScreenStateCanYouSeeMyScreenStateSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { knownParticipantStreams: {} };
    }
    function u() {
      return { latestAckedStreams: {} };
    }
    function c(t, n) {
      if (
        (n.writeStructBegin("CanYouSeeMyScreenParticipantInputState"),
        n.writeFieldBegin({
          fname: "knownParticipantStreams",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.knownParticipantStreams != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.SET,
          size: Object.keys(t.knownParticipantStreams).length,
        });
        for (var o of Object.entries(t.knownParticipantStreams)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a),
            n.writeSetBegin({
              etype: (e || (e = r("ThriftTypes"))).STRING,
              size: i.size,
            }));
          for (var l of i) n.writeString(l);
          n.writeSetEnd();
        }
        n.writeMapEnd();
      } else {
        var s = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.SET,
          size: Object.keys(s).length,
        });
        for (var u of Object.entries(s)) {
          var c = u[0],
            d = u[1];
          (n.writeString(c),
            n.writeSetBegin({
              etype: (e || (e = r("ThriftTypes"))).STRING,
              size: d.size,
            }));
          for (var m of d) n.writeString(m);
          n.writeSetEnd();
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("CanYouSeeMyScreenParticipantOutputState"),
        n.writeFieldBegin({
          fname: "latestAckedStreams",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.latestAckedStreams != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.SET,
          size: Object.keys(t.latestAckedStreams).length,
        });
        for (var o of Object.entries(t.latestAckedStreams)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a),
            n.writeSetBegin({
              etype: (e || (e = r("ThriftTypes"))).STRING,
              size: i.size,
            }));
          for (var l of i) n.writeString(l);
          n.writeSetEnd();
        }
        n.writeMapEnd();
      } else {
        var s = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.SET,
          size: Object.keys(s).length,
        });
        for (var u of Object.entries(s)) {
          var c = u[0],
            d = u[1];
          (n.writeString(c),
            n.writeSetBegin({
              etype: (e || (e = r("ThriftTypes"))).STRING,
              size: d.size,
            }));
          for (var m of d) n.writeString(m);
          n.writeSetEnd();
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function m(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.knownParticipantStreams = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                for (
                  var u = t.readString(),
                    c = new Set(),
                    d = t.readSetBegin(),
                    m = 0;
                  m < d.size;
                  m++
                ) {
                  var p = t.readString();
                  c.add(p);
                }
                n.knownParticipantStreams[u] = c;
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
        n.knownParticipantStreams === void 0 &&
          (n.knownParticipantStreams = {}),
        n
      );
    }
    function p(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.latestAckedStreams = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                for (
                  var u = t.readString(),
                    c = new Set(),
                    d = t.readSetBegin(),
                    m = 0;
                  m < d.size;
                  m++
                ) {
                  var p = t.readString();
                  c.add(p);
                }
                n.latestAckedStreams[u] = c;
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
        n.latestAckedStreams === void 0 && (n.latestAckedStreams = {}),
        n
      );
    }
    ((l.CanYouSeeMyScreenParticipantInputState$DefaultConstructor = s),
      (l.CanYouSeeMyScreenParticipantOutputState$DefaultConstructor = u),
      (l.serializeCanYouSeeMyScreenParticipantInputState = c),
      (l.serializeCanYouSeeMyScreenParticipantOutputState = d),
      (l.deserializeCanYouSeeMyScreenParticipantInputState = m),
      (l.deserializeCanYouSeeMyScreenParticipantOutputState = p));
  },
  98,
);
