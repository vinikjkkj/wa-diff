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
      if (r === "req") return c(e, n);
      if (r === "res") return d(e, n);
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
        m = u != null ? u : o("WALongInt").maybeNumberOrThrowIfTooLarge(t),
        p = "SET";
      return {
        type: "event",
        requestId: n,
        event: {
          timestamp: m,
          index: i,
          opKey: i,
          operation: p,
          payload: l,
          sessionId: s,
        },
      };
    }
    function c(e, t) {
      if (t == null)
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
        );
      var n = o("WAWebHatchJsonReaders").readField(e, "payload");
      e: {
        var r = o("WAWebHatchJsonReaders").readString(n, "method");
        if (r === "init/fetch")
          return {
            type: "req",
            requestId: t,
            request: { method: "init/fetch" },
          };
        if (r === "hitl.approval.decide") {
          var a = o("WAWebHatchJsonReaders").readField(n, "params"),
            i = o("WAWebHatchJsonReaders").readString(a, "approval_id"),
            l = o("WAWebHatchJsonReaders").readString(a, "decision");
          if (i == null || i === "" || l == null || l === "")
            throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
              o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
            );
          return {
            type: "req",
            requestId: t,
            request: {
              method: "hitl.approval.decide",
              approvalId: i,
              decision: l,
            },
          };
        }
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
        );
      }
    }
    function d(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, "payload"),
        r = o("WAWebHatchJsonReaders").readString(n, "method");
      if (r == null || r.length === 0)
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
        );
      e: {
        var a = o("WAWebHatchJsonReaders").readString(e, "status");
        if (a === "ok")
          return {
            type: "res",
            requestId: t,
            response: {
              status: "ok",
              method: r,
              body: o("WAWebHatchJsonReaders").readField(n, "body"),
            },
          };
        if (a === "error")
          return {
            type: "res",
            requestId: t,
            response: {
              status: "error",
              method: r,
              errorCode: o("WAWebHatchJsonReaders").readString(n, "error_code"),
              errorMessage: o("WAWebHatchJsonReaders").readString(
                n,
                "error_message",
              ),
            },
          };
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_STATUS,
        );
      }
    }
    l.decodeHatchMetadataOperation = s;
  },
  98,
);
