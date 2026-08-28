__d(
  "ClientNotificationTypesSerializers",
  ["ThriftTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u(t, n) {
      if (
        (n.writeStructBegin("MediaUploadComplete"),
        t.failed_to_fetch_media_ids != null)
      ) {
        (n.writeFieldBegin({
          fname: "failed_to_fetch_media_ids",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.failed_to_fetch_media_ids.length,
          }));
        for (var o of t.failed_to_fetch_media_ids) n.writeString(o);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
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
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.failed_to_fetch_media_ids = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.failed_to_fetch_media_ids.push(u);
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
    ((l.MediaUploadComplete$DefaultConstructor = s),
      (l.serializeMediaUploadComplete = u),
      (l.deserializeMediaUploadComplete = c));
  },
  98,
);
