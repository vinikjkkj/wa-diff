__d(
  "NumberOfPeopleStateNumberOfPeopleStateSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { number_of_people: 0 };
    }
    function u() {
      return { participant_id_to_number_of_people: {} };
    }
    function c(t, n) {
      if (
        (n.writeStructBegin("NumberOfPeopleInputState"),
        n.writeFieldBegin({
          fname: "number_of_people",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.number_of_people != null)
      )
        n.writeI32(t.number_of_people);
      else {
        var o = 0;
        n.writeI32(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("NumberOfPeopleOutputState"),
        n.writeFieldBegin({
          fname: "participant_id_to_number_of_people",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.participant_id_to_number_of_people != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.I32,
          size: Object.keys(t.participant_id_to_number_of_people).length,
        });
        for (var o of Object.entries(t.participant_id_to_number_of_people)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), n.writeI32(i));
        }
        n.writeMapEnd();
      } else {
        var l = {};
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.I32,
          size: Object.keys(l).length,
        });
        for (var s of Object.entries(l)) {
          var u = s[0],
            c = s[1];
          (n.writeString(u), n.writeI32(c));
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
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.number_of_people = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.number_of_people === void 0 && (n.number_of_people = 0),
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
              n.participant_id_to_number_of_people = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = t.readI32();
                n.participant_id_to_number_of_people[u] = c;
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
        n.participant_id_to_number_of_people === void 0 &&
          (n.participant_id_to_number_of_people = {}),
        n
      );
    }
    ((l.NumberOfPeopleInputState$DefaultConstructor = s),
      (l.NumberOfPeopleOutputState$DefaultConstructor = u),
      (l.serializeNumberOfPeopleInputState = c),
      (l.serializeNumberOfPeopleOutputState = d),
      (l.deserializeNumberOfPeopleInputState = m),
      (l.deserializeNumberOfPeopleOutputState = p));
  },
  98,
);
