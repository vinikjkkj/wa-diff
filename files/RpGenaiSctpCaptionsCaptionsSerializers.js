__d(
  "RpGenaiSctpCaptionsCaptionsSerializers",
  ["RpGenaiSctpCaptionsCaptionsTypes", "ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        role: o("RpGenaiSctpCaptionsCaptionsTypes").SpeakerAttributionRole.cast(
          0,
        ),
      };
    }
    function u() {
      return { text: "", language: "" };
    }
    function c() {
      return { attribution: s(), caption: u() };
    }
    function d(t, n) {
      if (
        (n.writeStructBegin("SpeakerAttribution"),
        n.writeFieldBegin({
          fname: "role",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.role != null)
      ) {
        var a;
        n.writeI32((a = t.role) != null ? a : 0);
      } else {
        var i = o(
          "RpGenaiSctpCaptionsCaptionsTypes",
        ).SpeakerAttributionRole.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function m(t, n) {
      if (
        (n.writeStructBegin("CaptionPayload"),
        n.writeFieldBegin({
          fname: "text",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.text != null)
      )
        n.writeString(t.text);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "language", ftype: e.STRING, fid: 2 }),
        t.language != null)
      )
        n.writeString(t.language);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("Caption"),
        n.writeFieldBegin({
          fname: "attribution",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.attribution != null)
      )
        d(t.attribution, n);
      else {
        var o = s();
        d(o, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "caption", ftype: e.STRUCT, fid: 2 }),
        t.caption != null)
      )
        m(t.caption, n);
      else {
        var a = u();
        m(a, n);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
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
              ? (n.role = o(
                  "RpGenaiSctpCaptionsCaptionsTypes",
                ).SpeakerAttributionRole.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.role === void 0 &&
          (n.role = o(
            "RpGenaiSctpCaptionsCaptionsTypes",
          ).SpeakerAttributionRole.cast(0)),
        n
      );
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.text = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.language = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.text === void 0 && (n.text = ""),
        n.language === void 0 && (n.language = ""),
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.attribution = _(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.caption = f(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.attribution === void 0 && (n.attribution = s()),
        n.caption === void 0 && (n.caption = u()),
        n
      );
    }
    ((l.SpeakerAttribution$DefaultConstructor = s),
      (l.CaptionPayload$DefaultConstructor = u),
      (l.Caption$DefaultConstructor = c),
      (l.serializeSpeakerAttribution = d),
      (l.serializeCaptionPayload = m),
      (l.serializeCaption = p),
      (l.deserializeSpeakerAttribution = _),
      (l.deserializeCaptionPayload = f),
      (l.deserializeCaption = g));
  },
  98,
);
