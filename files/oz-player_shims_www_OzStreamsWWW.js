__d(
  "oz-player/shims/www/OzStreamsWWW",
  ["cr:927622", "cr:927623"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !!n("cr:927622"),
      s = n("cr:927622") ? n("cr:927622").ReadableStream : t.ReadableStream,
      u = n("cr:927623") ? n("cr:927623").WritableStream : t.WritableStream;
    ((l.OzReadableStream = s),
      (l.OzReadableStreamIsPolyfilled = e),
      (l.OzWritableStream = u));
  },
  98,
);
