__d(
  "IntenticonsStateIntenticonsStateSerializers",
  ["IntenticonsStateIntenticonsStateTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { rotation: 0, scale: 1, x: 0, y: 0 };
    }
    function u() {
      return { user_id: "" };
    }
    function c() {
      return {};
    }
    function d() {
      return { callIntenticons: {} };
    }
    function m(t, n) {
      if (
        (n.writeStructBegin("Context"),
        n.writeFieldBegin({
          fname: "rotation",
          ftype: (e || (e = r("ThriftTypes"))).DOUBLE,
          fid: 1,
        }),
        t.rotation != null)
      )
        n.writeDouble(t.rotation);
      else {
        var o = 0;
        n.writeDouble(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "scale", ftype: e.DOUBLE, fid: 2 }),
        t.scale != null)
      )
        n.writeDouble(t.scale);
      else {
        var a = 1;
        n.writeDouble(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "x", ftype: e.DOUBLE, fid: 3 }),
        t.x != null)
      )
        n.writeDouble(t.x);
      else {
        var i = 0;
        n.writeDouble(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "y", ftype: e.DOUBLE, fid: 4 }),
        t.y != null)
      )
        n.writeDouble(t.y);
      else {
        var l = 0;
        n.writeDouble(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("IntenticonItem"),
        n.writeFieldBegin({
          fname: "user_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.user_id != null)
      )
        n.writeString(t.user_id);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        t.sticker_url != null &&
          (n.writeFieldBegin({
            fname: "sticker_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.sticker_url),
          n.writeFieldEnd()),
        t.animated_sticker_url != null &&
          (n.writeFieldBegin({
            fname: "animated_sticker_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.animated_sticker_url),
          n.writeFieldEnd()),
        t.sticker_mime_type != null &&
          (n.writeFieldBegin({
            fname: "sticker_mime_type",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.sticker_mime_type),
          n.writeFieldEnd()),
        t.animated_sticker_mime_type != null &&
          (n.writeFieldBegin({
            fname: "animated_sticker_mime_type",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.animated_sticker_mime_type),
          n.writeFieldEnd()),
        t.text != null &&
          (n.writeFieldBegin({
            fname: "text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.text),
          n.writeFieldEnd()),
        t.intenticon_id != null &&
          (n.writeFieldBegin({
            fname: "intenticon_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.intenticon_id),
          n.writeFieldEnd()),
        t.context != null &&
          (n.writeFieldBegin({
            fname: "context",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 8,
          }),
          m(t.context, n),
          n.writeFieldEnd()),
        t.operation != null)
      ) {
        var a;
        (n.writeFieldBegin({
          fname: "operation",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 9,
        }),
          n.writeI32((a = t.operation) != null ? a : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function _(t, n) {
      (n.writeStructBegin("IntenticonParticipantInputState"),
        t.intenticonItem != null &&
          (n.writeFieldBegin({
            fname: "intenticonItem",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          p(t.intenticonItem, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("IntenticonParticipantOutputState"),
        n.writeFieldBegin({
          fname: "callIntenticons",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.callIntenticons != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.callIntenticons).length,
        });
        for (var o of Object.entries(t.callIntenticons)) {
          var a = o[0],
            i = o[1];
          (n.writeString(a), p(i, n));
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
          (n.writeString(u), p(c, n));
        }
        n.writeMapEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
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
            a === (e || (e = r("ThriftTypes"))).DOUBLE
              ? (n.rotation = t.readDouble())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).DOUBLE
              ? (n.scale = t.readDouble())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).DOUBLE
              ? (n.x = t.readDouble())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).DOUBLE
              ? (n.y = t.readDouble())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.rotation === void 0 && (n.rotation = 0),
        n.scale === void 0 && (n.scale = 1),
        n.x === void 0 && (n.x = 0),
        n.y === void 0 && (n.y = 0),
        n
      );
    }
    function h(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.user_id = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sticker_url = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.animated_sticker_url = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.sticker_mime_type = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.animated_sticker_mime_type = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.text = t.readString())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.intenticon_id = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.context = g(t))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.operation = o(
                  "IntenticonsStateIntenticonsStateTypes",
                ).Operation.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.user_id === void 0 && (n.user_id = ""), n);
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.intenticonItem = h(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
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
            if (a === (e || (e = r("ThriftTypes"))).MAP) {
              n.callIntenticons = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = h(t);
                n.callIntenticons[u] = c;
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
        n.callIntenticons === void 0 && (n.callIntenticons = {}),
        n
      );
    }
    ((l.Context$DefaultConstructor = s),
      (l.IntenticonItem$DefaultConstructor = u),
      (l.IntenticonParticipantInputState$DefaultConstructor = c),
      (l.IntenticonParticipantOutputState$DefaultConstructor = d),
      (l.serializeContext = m),
      (l.serializeIntenticonItem = p),
      (l.serializeIntenticonParticipantInputState = _),
      (l.serializeIntenticonParticipantOutputState = f),
      (l.deserializeContext = g),
      (l.deserializeIntenticonItem = h),
      (l.deserializeIntenticonParticipantInputState = y),
      (l.deserializeIntenticonParticipantOutputState = C));
  },
  98,
);
