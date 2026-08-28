__d(
  "MediaInformationStateMediaInformationStateSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return { width: 0, height: 0 };
    }
    function u() {
      return { mosaic_grid_capable: !1 };
    }
    function c() {
      return {};
    }
    function d() {
      return { participant_media_infos: {} };
    }
    function m(t, n) {
      if (
        (n.writeStructBegin("VideoSize"),
        n.writeFieldBegin({
          fname: "width",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.width != null)
      )
        n.writeI32(t.width);
      else {
        var o = 0;
        n.writeI32(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "height", ftype: e.I32, fid: 2 }),
        t.height != null)
      )
        n.writeI32(t.height);
      else {
        var a = 0;
        n.writeI32(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function p(t, n) {
      if (
        (n.writeStructBegin("ParticipantMediaInfo"),
        n.writeFieldBegin({
          fname: "mosaic_grid_capable",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 1,
        }),
        t.mosaic_grid_capable != null)
      )
        n.writeBool(t.mosaic_grid_capable);
      else {
        var o = !1;
        n.writeBool(o);
      }
      (n.writeFieldEnd(),
        t.video_size != null &&
          (n.writeFieldBegin({
            fname: "video_size",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          m(t.video_size, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function _(t, n) {
      (n.writeStructBegin("MediaInformationInputState"),
        t.participant_media_info != null &&
          (n.writeFieldBegin({
            fname: "participant_media_info",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          p(t.participant_media_info, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("MediaInformationOutputState"),
        n.writeFieldBegin({
          fname: "participant_media_infos",
          ftype: (e || (e = r("ThriftTypes"))).MAP,
          fid: 1,
        }),
        t.participant_media_infos != null)
      ) {
        n.writeMapBegin({
          ktype: (e || (e = r("ThriftTypes"))).STRING,
          vtype: e.STRUCT,
          size: Object.keys(t.participant_media_infos).length,
        });
        for (var o of Object.entries(t.participant_media_infos)) {
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
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.width = t.readI32())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.height = t.readI32())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.width === void 0 && (n.width = 0),
        n.height === void 0 && (n.height = 0),
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
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.mosaic_grid_capable = t.readBool())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.video_size = g(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.mosaic_grid_capable === void 0 && (n.mosaic_grid_capable = !1),
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
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.participant_media_info = h(t))
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
              n.participant_media_infos = {};
              for (var l = t.readMapBegin(), s = 0; s < l.size; s++) {
                var u = t.readString(),
                  c = h(t);
                n.participant_media_infos[u] = c;
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
        n.participant_media_infos === void 0 &&
          (n.participant_media_infos = {}),
        n
      );
    }
    ((l.VideoSize$DefaultConstructor = s),
      (l.ParticipantMediaInfo$DefaultConstructor = u),
      (l.MediaInformationInputState$DefaultConstructor = c),
      (l.MediaInformationOutputState$DefaultConstructor = d),
      (l.serializeVideoSize = m),
      (l.serializeParticipantMediaInfo = p),
      (l.serializeMediaInformationInputState = _),
      (l.serializeMediaInformationOutputState = f),
      (l.deserializeVideoSize = g),
      (l.deserializeParticipantMediaInfo = h),
      (l.deserializeMediaInformationInputState = y),
      (l.deserializeMediaInformationOutputState = C));
  },
  98,
);
