__d(
  "WAWebHatchMetadataOperationDecoder",
  ["WALongInt", "WAWebHatchDecodeError", "WAWebHatchJsonReaders", "cr:7454"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ideas.execute.record";
    function s() {
      throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
        o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_VERSION,
      );
    }
    function u(t, r, a, i) {
      var l;
      try {
        l = JSON.parse(new TextDecoder("utf-8").decode(t));
      } catch (e) {
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.PARSE_FAILURE,
        );
      }
      if (!o("WAWebHatchJsonReaders").isObject(l))
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.PARSE_FAILURE,
        );
      var u = o("WAWebHatchJsonReaders").readField(l, "payload");
      if (
        o("WAWebHatchJsonReaders").isObject(u) &&
        o("WAWebHatchJsonReaders").readField(u, "method") === e
      )
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.IGNORED_IDEAS_RECORD,
        );
      var d = (function (e) {
        return e === 1 ? c(l, r, a) : s();
      })(o("WAWebHatchJsonReaders").readNumber(l, "version"));
      return (
        d != null &&
          (n("cr:7454") == null || n("cr:7454").recordInbound(d, t, i)),
        d
      );
    }
    function c(e, t, n) {
      var r = o("WAWebHatchJsonReaders").readField(e, "type");
      if (r === "req") return d(e, n);
      if (r === "res") return _(e, n);
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
        m = o("WAWebHatchJsonReaders").readNumber(a, "seq"),
        p = "SET";
      return {
        type: "event",
        requestId: n,
        event: {
          seq: m,
          timestamp: c,
          index: i,
          opKey: i,
          operation: p,
          payload: l,
          sessionId: s,
        },
      };
    }
    function d(e, t) {
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
          var p = o("WAWebHatchJsonReaders").readString(u, "always_scope");
          return {
            type: "req",
            requestId: t,
            request: babelHelpers.extends(
              { method: "hitl.approval.decide", approvalId: c, decision: d },
              p != null && p !== "" ? { alwaysScope: p } : null,
            ),
          };
        }
        if (r === "hitl.payment.select") {
          var _ = o("WAWebHatchJsonReaders").readField(n, "params"),
            f = o("WAWebHatchJsonReaders").readString(_, "approval_id"),
            g = o("WAWebHatchJsonReaders").readString(_, "payment_id");
          if (f == null || f === "" || g == null || g === "")
            throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
              o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
            );
          return {
            type: "req",
            requestId: t,
            request: {
              method: "hitl.payment.select",
              approvalId: f,
              paymentId: g,
            },
          };
        }
        if (r === "ideas.execute")
          return {
            type: "req",
            requestId: t,
            request: m(o("WAWebHatchJsonReaders").readField(n, "params")),
          };
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
        );
      }
    }
    function m(e) {
      var t = o("WAWebHatchJsonReaders").readString(e, "ideaCardId");
      if (t == null || t === "")
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
        );
      var n = o("WAWebHatchJsonReaders").readString(e, "locale"),
        r = n != null ? { locale: n } : null;
      e: {
        var a = o("WAWebHatchJsonReaders").readString(e, "mode");
        if (a === "full")
          return babelHelpers.extends(
            { method: "ideas.execute", ideaCardId: t, mode: "full" },
            r,
          );
        if (a === "selectedItems")
          return babelHelpers.extends(
            {
              method: "ideas.execute",
              ideaCardId: t,
              mode: "selectedItems",
              itemIds: p(o("WAWebHatchJsonReaders").readField(e, "itemIds")),
            },
            r,
          );
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
        );
      }
    }
    function p(e) {
      if (!Array.isArray(e) || e.length === 0)
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
        );
      return e.map(function (e) {
        if (typeof e != "string" || e === "")
          throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
            o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_PAYLOAD,
          );
        return e;
      });
    }
    function _(e, t) {
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
        if (a === "error") {
          var i = o("WAWebHatchJsonReaders").readField(n, "body");
          return {
            type: "res",
            requestId: t,
            response: {
              status: "error",
              method: r,
              errorCode: o("WAWebHatchJsonReaders").readString(i, "error_code"),
              errorMessage: o("WAWebHatchJsonReaders").readString(
                i,
                "error_message",
              ),
            },
          };
        }
        throw new (o("WAWebHatchDecodeError").HatchDecodeError)(
          o("WAWebHatchDecodeError").HatchDecodeReason.INVALID_STATUS,
        );
      }
    }
    l.decodeHatchMetadataOperation = u;
  },
  98,
);
