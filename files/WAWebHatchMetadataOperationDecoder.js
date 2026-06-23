__d(
  "WAWebHatchMetadataOperationDecoder",
  ["WALongInt", "WAWebHatchDecodeError", "WAWebHatchJsonReaders", "cr:7454"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
        o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_VERSION,
      );
    }
    function s(t, r, a) {
      var i;
      try {
        i = JSON.parse(new TextDecoder("utf-8").decode(t));
      } catch (e) {
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.PARSE_FAILURE,
        );
      }
      if (!o("WAWebHatchJsonReaders").isObject(i))
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.PARSE_FAILURE,
        );
      var l = (function (t) {
        return t === 1 ? u(i, r, a) : e();
      })(o("WAWebHatchJsonReaders").readNumber(i, "version"));
      return (
        l != null && (n("cr:7454") == null || n("cr:7454").recordInbound(l, t)),
        l
      );
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
        p = o("WAWebHatchJsonReaders").readNumber(a, "seq"),
        _ = "SET";
      return {
        type: "event",
        requestId: n,
        event: {
          seq: p,
          timestamp: m,
          index: i,
          opKey: i,
          operation: _,
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
        if (r === "channel.bootstrap") {
          var a = o("WAWebHatchJsonReaders").readField(n, "params"),
            i = o("WAWebHatchJsonReaders").readField(a, "sections"),
            l = [];
          if (Array.isArray(i))
            for (var s of i)
              (s === "agent.status" ||
                s === "identity.updated" ||
                s === "hitl.snapshot") &&
                l.push(s);
          return {
            type: "req",
            requestId: t,
            request:
              l.length > 0
                ? { method: "channel.bootstrap", sections: l }
                : { method: "channel.bootstrap" },
          };
        }
        if (r === "hitl.approval.decide") {
          var u = o("WAWebHatchJsonReaders").readField(n, "params"),
            c = o("WAWebHatchJsonReaders").readString(u, "approval_id"),
            d = o("WAWebHatchJsonReaders").readString(u, "decision");
          if (c == null || c === "" || d == null || d === "")
            throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
              o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
            );
          return {
            type: "req",
            requestId: t,
            request: {
              method: "hitl.approval.decide",
              approvalId: c,
              decision: d,
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
