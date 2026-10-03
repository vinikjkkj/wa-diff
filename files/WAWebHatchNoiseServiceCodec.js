__d(
  "WAWebHatchNoiseServiceCodec",
  [
    "$InternalEnum",
    "WAWebHatchNoiseApplicationCodec",
    "WAWebHatchNoiseProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ DAEMON: 0, SENTINEL: 1, VAULT: 2, AUTHD: 3 });
    function s(e) {
      var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoWriter)();
      t.writeVarint(1, e.streamId);
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "request" &&
          "value" in n
        ) {
          var r = n.value;
          t.writeBytes(
            2,
            o("WAWebHatchNoiseApplicationCodec").encodeApplicationRequest(r),
            !0,
          );
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "response" &&
          "value" in n
        ) {
          var a = n.value;
          t.writeBytes(
            3,
            o("WAWebHatchNoiseApplicationCodec").encodeApplicationResponse(a),
            !0,
          );
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "bodyChunk" &&
          "value" in n
        ) {
          var i = n.value;
          t.writeBytes(
            4,
            o("WAWebHatchNoiseApplicationCodec").encodeBodyChunk(i),
            !0,
          );
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "reset" &&
          "value" in n
        ) {
          var l = n.value;
          t.writeBytes(
            5,
            o("WAWebHatchNoiseApplicationCodec").encodeReset(l),
            !0,
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
      return t.finish();
    }
    function u(e) {
      for (
        var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoReader)(
            e,
          ),
          n = 0,
          a = null,
          i = t.nextField();
        i != null;
        i = t.nextField()
      )
        e: {
          if (i.number === 1) {
            n = t.readVarint(i.wireType);
            break e;
          }
          if (i.number === 2) {
            a = {
              kind: "request",
              value: o(
                "WAWebHatchNoiseApplicationCodec",
              ).decodeApplicationRequest(t.readBytes(i.wireType)),
            };
            break e;
          }
          if (i.number === 3) {
            a = {
              kind: "response",
              value: o(
                "WAWebHatchNoiseApplicationCodec",
              ).decodeApplicationResponse(t.readBytes(i.wireType)),
            };
            break e;
          }
          if (i.number === 4) {
            a = {
              kind: "bodyChunk",
              value: o("WAWebHatchNoiseApplicationCodec").decodeBodyChunk(
                t.readBytes(i.wireType),
              ),
            };
            break e;
          }
          if (i.number === 5) {
            a = {
              kind: "reset",
              value: o("WAWebHatchNoiseApplicationCodec").decodeReset(
                t.readBytes(i.wireType),
              ),
            };
            break e;
          }
          {
            t.skip(i.wireType);
            break e;
          }
        }
      if (a == null)
        throw r("err")("WAWebHatchNoiseServiceCodec: missing frame kind");
      return babelHelpers.extends({}, a, { streamId: n });
    }
    function c(e, t) {
      var n = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoWriter)();
      return (n.writeVarint(1, e), n.writeBytes(2, t), n.finish());
    }
    function d(t) {
      for (
        var n = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoReader)(
            t,
          ),
          a = e.DAEMON,
          i = new Uint8Array(0),
          l = n.nextField();
        l != null;
        l = n.nextField()
      )
        e: {
          if (l.number === 1) {
            var s = n.readVarint(l.wireType);
            t: {
              if (s === 0) {
                a = e.DAEMON;
                break t;
              }
              if (s === 1) {
                a = e.SENTINEL;
                break t;
              }
              if (s === 2) {
                a = e.VAULT;
                break t;
              }
              if (s === 3) {
                a = e.AUTHD;
                break t;
              }
              throw r("err")("WAWebHatchNoiseServiceCodec: unknown service");
            }
            break e;
          }
          if (l.number === 2) {
            i = n.readBytes(l.wireType);
            break e;
          }
          {
            n.skip(l.wireType);
            break e;
          }
        }
      return { payload: i, service: a };
    }
    function m(e) {
      var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoWriter)();
      return (t.writeBytes(1, e), t.finish());
    }
    function p(e) {
      for (
        var t = new (o("WAWebHatchNoiseProtobuf").WAWebHatchNoiseProtoReader)(
            e,
          ),
          n = new Uint8Array(0),
          r = t.nextField();
        r != null;
        r = t.nextField()
      )
        e: {
          if (r.number === 1) {
            n = t.readBytes(r.wireType);
            break e;
          }
          {
            t.skip(r.wireType);
            break e;
          }
        }
      return n;
    }
    ((l.WAWebHatchNoiseService = e),
      (l.encodeServiceFrame = s),
      (l.decodeServiceFrame = u),
      (l.encodeServiceRequest = c),
      (l.decodeServiceRequest = d),
      (l.encodeServiceResponse = m),
      (l.decodeServiceResponse = p));
  },
  98,
);
