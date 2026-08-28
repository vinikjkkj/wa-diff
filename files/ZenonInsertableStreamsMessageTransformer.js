__d(
  "ZenonInsertableStreamsMessageTransformer",
  ["ZenonInsertableStreamsMessage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        deserialize: function (t) {
          return new (r("ZenonInsertableStreamsMessage"))(
            t.mediaStreamId,
            t.mediaType,
            t.operation,
            t.readable,
            t.trackId,
            t.writable,
          );
        },
        serialize: function (t, n) {
          var e, r;
          return (
            n.push(t.readable),
            n.push(t.writable),
            {
              mediaStreamId: (e = t.mediaStreamId) != null ? e : void 0,
              mediaType: (r = t.mediaType) != null ? r : void 0,
              operation: t.operation,
              readable: t.readable,
              trackId: t.trackId,
              writable: t.writable,
            }
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
