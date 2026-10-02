__d(
  "WAStanzaRootTag",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "notification",
      l = "receipt",
      s = "message",
      u = "call",
      c = "chatstate",
      d = "presence",
      m = "appdata",
      p = "failure",
      _ = "stream:error",
      f = "ib",
      g = "iq",
      h = "error",
      y = "success",
      C = "xmlstreamend",
      b = {
        NOTIFICATION: e,
        RECEIPT: l,
        MESSAGE: s,
        CHATSTATE: c,
        PRESENCE: d,
        APPDATA: m,
        CALL: u,
        IQ: g,
        IB: f,
        STREAM_ERROR: _,
        FAILURE: p,
        SUCCESS: y,
        ERROR: h,
        XML_STREAM_END: C,
      };
    i.STANZA_ROOT_TAG = b;
  },
  66,
);
