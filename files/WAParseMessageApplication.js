__d(
  "WAParseMessageApplication",
  ["decodeProtobuf"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        a = e.payload;
      if (a == null)
        return {
          version: "v3",
          type: "error",
          error: "The messageApplication has no payload",
        };
      if (o("decodeProtobuf").getUnknownFields(e.payload) != null)
        return {
          version: "v3",
          type: "error",
          error: "There are unknown fields in the message application payload",
        };
      var i = a.subProtocol;
      if (i == null)
        return {
          version: "v3",
          type: "error",
          error: "The messageApplication payload has no subProtocol",
        };
      if (o("decodeProtobuf").getUnknownFields(i) != null)
        return {
          version: "v3",
          type: "error",
          error: "messageApplication subProtocol has unknown fields",
          futureProof: i.futureProof,
        };
      var l = [],
        s =
          (t = e.payload) == null || (t = t.subProtocol) == null
            ? void 0
            : t.consumerMessage,
        u =
          (n = e.payload) == null || (n = n.subProtocol) == null
            ? void 0
            : n.armadillo,
        c =
          (r = e.payload) == null || (r = r.subProtocol) == null
            ? void 0
            : r.multiDevice;
      if (s != null) {
        if (s.payload == null)
          return {
            version: "v3",
            type: "error",
            error: "subprotocol of type consumerMessage has no payload",
          };
        l.push({
          payload: new Uint8Array(s.payload),
          type: "success",
          subprotocolType: "consumerMessage",
        });
      }
      if (u != null) {
        if (u.payload == null)
          return {
            version: "v3",
            type: "error",
            error: "subprotocol of type armadillo has no payload",
          };
        l.push({
          payload: new Uint8Array(u.payload),
          type: "success",
          subprotocolType: "armadillo",
        });
      }
      if (c != null) {
        if (c.payload == null)
          return {
            version: "v3",
            type: "error",
            error: "subprotocol of type multiDevice has no payload",
          };
        l.push({
          payload: new Uint8Array(c.payload),
          type: "success",
          subprotocolType: "multiDevice",
        });
      }
      return l.length !== 1
        ? {
            version: "v3",
            type: "error",
            error: "Wrong number of subprotocols: " + l.length,
          }
        : l[0];
    }
    l.parseMessageApplication = e;
  },
  98,
);
