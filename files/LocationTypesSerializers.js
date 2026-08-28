__d(
  "LocationTypesSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u(t, n) {
      (n.writeStructBegin("GenAILocationOverrides"),
        t.locale != null &&
          (n.writeFieldBegin({
            fname: "locale",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.locale),
          n.writeFieldEnd()),
        t.timezone != null &&
          (n.writeFieldBegin({
            fname: "timezone",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.timezone),
          n.writeFieldEnd()),
        t.latitude != null &&
          (n.writeFieldBegin({
            fname: "latitude",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.latitude),
          n.writeFieldEnd()),
        t.longitude != null &&
          (n.writeFieldBegin({
            fname: "longitude",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.longitude),
          n.writeFieldEnd()),
        t.serialized_address != null &&
          (n.writeFieldBegin({
            fname: "serialized_address",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.serialized_address),
          n.writeFieldEnd()),
        t.city_name != null &&
          (n.writeFieldBegin({
            fname: "city_name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.city_name),
          n.writeFieldEnd()),
        t.country_name != null &&
          (n.writeFieldBegin({
            fname: "country_name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.country_name),
          n.writeFieldEnd()),
        t.region_name != null &&
          (n.writeFieldBegin({
            fname: "region_name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.region_name),
          n.writeFieldEnd()),
        t.user_country != null &&
          (n.writeFieldBegin({
            fname: "user_country",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.user_country),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function c(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.locale = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.timezone = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.latitude = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.longitude = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.serialized_address = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.city_name = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.country_name = t.readString())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.region_name = t.readString())
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.user_country = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    ((l.GenAILocationOverrides$DefaultConstructor = s),
      (l.serializeGenAILocationOverrides = u),
      (l.deserializeGenAILocationOverrides = c));
  },
  98,
);
