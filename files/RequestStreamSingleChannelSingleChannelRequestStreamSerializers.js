__d(
  "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
  [
    "RequestStreamCommonRequestStreamCommonSerializers",
    "RequestStreamCommonRequestStreamCommonTypes",
    "RequestStreamSingleChannelSingleChannelRequestStreamTypes",
    "ThriftTypes",
    "jsbi",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return { body: Uint8Array.of() };
    }
    function c() {
      return { amendment: Uint8Array.of() };
    }
    function d() {
      return {
        ack: o(
          "RequestStreamSingleChannelSingleChannelRequestStreamTypes",
        ).Ack.cast(0),
      };
    }
    function m() {
      return { delta: [] };
    }
    function p() {
      return {};
    }
    function _(t, n) {
      (n.writeStructBegin("RequestStreamHeaders"),
        t.headers != null &&
          (n.writeFieldBegin({
            fname: "headers",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeBinary(t.headers),
          n.writeFieldEnd()),
        t.instrumentation_data != null &&
          (n.writeFieldBegin({
            fname: "instrumentation_data",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeBinary(t.instrumentation_data),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function f(t, n) {
      if (
        (n.writeStructBegin("RequestStreamBody"),
        n.writeFieldBegin({
          fname: "body",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.body != null)
      )
        n.writeBinary(t.body);
      else {
        var o = Uint8Array.of();
        n.writeBinary(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function g(t, n) {
      if (
        (n.writeStructBegin("AmendStream"),
        t.amendment_id != null &&
          (n.writeFieldBegin({
            fname: "amendment_id",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(r("jsbi").BigInt(t.amendment_id)),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "amendment",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
        t.amendment != null)
      )
        n.writeBinary(t.amendment);
      else {
        var o = Uint8Array.of();
        n.writeBinary(o);
      }
      (n.writeFieldEnd(),
        t.instrumentation_data != null &&
          (n.writeFieldBegin({
            fname: "instrumentation_data",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeBinary(t.instrumentation_data),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function h(t, n) {
      if (
        (n.writeStructBegin("StreamResponseAck"),
        t.response_id != null &&
          (n.writeFieldBegin({
            fname: "response_id",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(r("jsbi").BigInt(t.response_id)),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "ack",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
        t.ack != null)
      ) {
        var a;
        n.writeI32((a = t.ack) != null ? a : 0);
      } else {
        var i = o(
          "RequestStreamSingleChannelSingleChannelRequestStreamTypes",
        ).Ack.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.query_result != null &&
          (n.writeFieldBegin({
            fname: "query_result",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeBinary(t.query_result),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function y(t, n) {
      if (
        (n.writeStructBegin("StreamResponse"),
        t.response_id != null &&
          (n.writeFieldBegin({
            fname: "response_id",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(r("jsbi").BigInt(t.response_id)),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "delta",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
        t.delta != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.delta.length,
        });
        for (var a of t.delta)
          o(
            "RequestStreamCommonRequestStreamCommonSerializers",
          ).serializeStreamResponseDelta(a, n);
        n.writeListEnd();
      } else {
        var i = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: i.length,
        });
        for (var l of i)
          o(
            "RequestStreamCommonRequestStreamCommonSerializers",
          ).serializeStreamResponseDelta(l, n);
        n.writeListEnd();
      }
      if ((n.writeFieldEnd(), t.ack_level != null)) {
        var s;
        (n.writeFieldBegin({
          fname: "ack_level",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 3,
        }),
          n.writeI32((s = t.ack_level) != null ? s : 0),
          n.writeFieldEnd());
      }
      (t.query_request != null &&
        (n.writeFieldBegin({
          fname: "query_request",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 4,
        }),
        n.writeBinary(t.query_request),
        n.writeFieldEnd()),
        t.instrumentation_data != null &&
          (n.writeFieldBegin({
            fname: "instrumentation_data",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeBinary(t.instrumentation_data),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function C(t, n) {
      if ((n.writeStructBegin("Payload"), t.request_headers != null)) {
        (n.writeFieldBegin({
          fname: "request_headers",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
          _(t.request_headers, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.request_body != null) {
        (n.writeFieldBegin({
          fname: "request_body",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
          f(t.request_body, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.amend != null) {
        (n.writeFieldBegin({
          fname: "amend",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 3,
        }),
          g(t.amend, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.ack != null) {
        (n.writeFieldBegin({
          fname: "ack",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 4,
        }),
          h(t.ack, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.response != null) {
        (n.writeFieldBegin({
          fname: "response",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 5,
        }),
          y(t.response, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.ping != null) {
        (n.writeFieldBegin({
          fname: "ping",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 6,
        }),
          o("RequestStreamCommonRequestStreamCommonSerializers").serializePing(
            t.ping,
            n,
          ),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.pong != null) {
        (n.writeFieldBegin({
          fname: "pong",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 7,
        }),
          o("RequestStreamCommonRequestStreamCommonSerializers").serializePong(
            t.pong,
            n,
          ),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function b(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.headers = t.readBinary())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.instrumentation_data = t.readBinary())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function v(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.body = t.readBinary())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.body === void 0 && (n.body = Uint8Array.of()),
        n
      );
    }
    function S(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.amendment_id = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.amendment = t.readBinary())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.instrumentation_data = t.readBinary())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.amendment === void 0 && (n.amendment = Uint8Array.of()),
        n
      );
    }
    function R(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.response_id = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.ack = o(
                  "RequestStreamSingleChannelSingleChannelRequestStreamTypes",
                ).Ack.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.query_result = t.readBinary())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.ack === void 0 &&
          (n.ack = o(
            "RequestStreamSingleChannelSingleChannelRequestStreamTypes",
          ).Ack.cast(0)),
        n
      );
    }
    function L(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.response_id = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.delta = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = o(
                  "RequestStreamCommonRequestStreamCommonSerializers",
                ).deserializeStreamResponseDelta(t);
                n.delta.push(c);
              }
            } else t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.ack_level = o(
                  "RequestStreamCommonRequestStreamCommonTypes",
                ).AckLevel.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.query_request = t.readBinary())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.instrumentation_data = t.readBinary())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.delta === void 0 && (n.delta = []), n);
    }
    function E(t) {
      var n,
        a = {};
      for (t.readStructBegin(); ; ) {
        var i = t.readFieldBegin(),
          l = i.ftype,
          s = i.fid;
        if (l === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (s) {
          case 1:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((a.request_headers = b(t)), (n = "request_headers"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: request_headers, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          case 2:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((a.request_body = v(t)), (n = "request_body"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: request_body, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          case 3:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((a.amend = S(t)), (n = "amend"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: amend, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          case 4:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((a.ack = R(t)), (n = "ack"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: ack, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          case 5:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((a.response = L(t)), (n = "response"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: response, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          case 6:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((a.ping = o(
                  "RequestStreamCommonRequestStreamCommonSerializers",
                ).deserializePing(t)),
                  (n = "ping"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: ping, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          case 7:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null)
                ((a.pong = o(
                  "RequestStreamCommonRequestStreamCommonSerializers",
                ).deserializePong(t)),
                  (n = "pong"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: Payload; current field: pong, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          default:
            t.skip(l);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), a);
    }
    ((l.RequestStreamHeaders$DefaultConstructor = s),
      (l.RequestStreamBody$DefaultConstructor = u),
      (l.AmendStream$DefaultConstructor = c),
      (l.StreamResponseAck$DefaultConstructor = d),
      (l.StreamResponse$DefaultConstructor = m),
      (l.Payload$DefaultConstructor = p),
      (l.serializeRequestStreamHeaders = _),
      (l.serializeRequestStreamBody = f),
      (l.serializeAmendStream = g),
      (l.serializeStreamResponseAck = h),
      (l.serializeStreamResponse = y),
      (l.serializePayload = C),
      (l.deserializeRequestStreamHeaders = b),
      (l.deserializeRequestStreamBody = v),
      (l.deserializeAmendStream = S),
      (l.deserializeStreamResponseAck = R),
      (l.deserializeStreamResponse = L),
      (l.deserializePayload = E));
  },
  98,
);
