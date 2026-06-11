__d(
  "WAWebHatchMetadataOperationDecoder",
  ["WALongInt", "WAWebHatchDecodeError", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
        o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_VERSION,
      );
    }
    function s(t, n, r) {
      var a;
      try {
        a = JSON.parse(new TextDecoder("utf-8").decode(t));
      } catch (e) {
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.PARSE_FAILURE,
        );
      }
      if (!o("WAWebHatchJsonReaders").isObject(a))
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.PARSE_FAILURE,
        );
      return (function (t) {
        return t === 1 ? u(a, n, r) : e();
      })(o("WAWebHatchJsonReaders").readNumber(a, "version"));
    }
    function u(e, t, n) {
      var r = o("WAWebHatchJsonReaders").readField(e, "type");
      if (r === "req" || r === "res") return null;
      var a = o("WAWebHatchJsonReaders").readField(e, "payload");
      if (!o("WAWebHatchJsonReaders").isObject(a))
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
        );
      var i = o("WAWebHatchJsonReaders").readString(a, "event");
      if (i == null || i.length === 0)
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_OP_KEY,
        );
      var l = o("WAWebHatchJsonReaders").readField(a, "payload"),
        s = o("WAWebHatchJsonReaders").readString(l, "session_id"),
        u = o("WAWebHatchJsonReaders").readNumber(a, "ts_ms"),
        c = u != null ? u : o("WALongInt").maybeNumberOrThrowIfTooLarge(t),
        d = "SET";
      return {
        type: "event",
        requestId: n,
        event: {
          timestamp: c,
          index: i,
          opKey: i,
          operation: d,
          payload: l,
          sessionId: s,
        },
      };
    }
    l.decodeHatchMetadataOperation = s;
  },
  98,
);
