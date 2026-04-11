__d(
  "RequestStreamCommonRequestStreamCommonSerializers",
  ["RequestStreamCommonRequestStreamCommonTypes", "ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return { expected_existing_headers: "", patch_headers_if_match: "" };
    }
    function c() {
      return { bytes: Uint8Array.of() };
    }
    function d() {
      return { message: "" };
    }
    function m() {
      return {
        reason: o(
          "RequestStreamCommonRequestStreamCommonTypes",
        ).TerminationReason.cast(0),
      };
    }
    function p() {
      return {};
    }
    function _() {
      return {
        stream_id: "0",
        last_sequencer: 0,
        amendment_count: 0,
        last_status: o(
          "RequestStreamCommonRequestStreamCommonTypes",
        ).FlowStatus.cast(0),
      };
    }
    function f() {
      return { caller_timestamp_ms: "0" };
    }
    function g() {
      return { original_ping_timestamp_ms: "0" };
    }
    function h() {
      return {};
    }
    function y(t, n) {
      (n.writeStructBegin("ResponseRewriteRequest"),
        t.new_headers != null &&
          (n.writeFieldBegin({
            fname: "new_headers",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.new_headers),
          n.writeFieldEnd()),
        t.new_body != null &&
          (n.writeFieldBegin({
            fname: "new_body",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeBinary(t.new_body),
          n.writeFieldEnd()),
        t.patch_headers != null &&
          (n.writeFieldBegin({
            fname: "patch_headers",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.patch_headers),
          n.writeFieldEnd()),
        t.kill_body != null &&
          (n.writeFieldBegin({
            fname: "kill_body",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 4,
          }),
          n.writeBool(t.kill_body),
          n.writeFieldEnd()),
        t.temporary != null &&
          (n.writeFieldBegin({
            fname: "temporary",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 5,
          }),
          n.writeBool(t.temporary),
          n.writeFieldEnd()),
        t.conditional_patch_headers != null &&
          (n.writeFieldBegin({
            fname: "conditional_patch_headers",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 6,
          }),
          C(t.conditional_patch_headers, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function C(t, n) {
      if (
        (n.writeStructBegin("ResponseRewriteConditionalPatchHeaders"),
        n.writeFieldBegin({
          fname: "expected_existing_headers",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.expected_existing_headers != null)
      )
        n.writeString(t.expected_existing_headers);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "patch_headers_if_match",
          ftype: e.STRING,
          fid: 2,
        }),
        t.patch_headers_if_match != null)
      )
        n.writeString(t.patch_headers_if_match);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(),
        t.patch_headers_otherwise != null &&
          (n.writeFieldBegin({
            fname: "patch_headers_otherwise",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.patch_headers_otherwise),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function b(t, n) {
      if (
        (n.writeStructBegin("ResponseData"),
        n.writeFieldBegin({
          fname: "bytes",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.bytes != null)
      )
        n.writeBinary(t.bytes);
      else {
        var o = Uint8Array.of();
        n.writeBinary(o);
      }
      (n.writeFieldEnd(),
        t.metadata != null &&
          (n.writeFieldBegin({
            fname: "metadata",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.metadata),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function v(t, n) {
      if (
        (n.writeStructBegin("LogMessage"),
        n.writeFieldBegin({
          fname: "message",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.message != null)
      )
        n.writeString(t.message);
      else {
        var o = "";
        n.writeString(o);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function S(t, n) {
      if (
        (n.writeStructBegin("Termination"),
        n.writeFieldBegin({
          fname: "reason",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.reason != null)
      ) {
        var a;
        n.writeI32((a = t.reason) != null ? a : 0);
      } else {
        var i = o(
          "RequestStreamCommonRequestStreamCommonTypes",
        ).TerminationReason.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      (n.writeFieldEnd(),
        t.message != null &&
          (n.writeFieldBegin({
            fname: "message",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.message),
          n.writeFieldEnd()),
        t.retry_delay_ms != null &&
          (n.writeFieldBegin({
            fname: "retry_delay_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 3,
          }),
          n.writeI64(r("jsbi").BigInt(t.retry_delay_ms)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function R(t, n) {
      (n.writeStructBegin("AmendStreamAck"),
        t.amendment_id != null &&
          (n.writeFieldBegin({
            fname: "amendment_id",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(r("jsbi").BigInt(t.amendment_id)),
          n.writeFieldEnd()),
        t.accepted != null &&
          (n.writeFieldBegin({
            fname: "accepted",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 2,
          }),
          n.writeBool(t.accepted),
          n.writeFieldEnd()),
        t.result != null &&
          (n.writeFieldBegin({
            fname: "result",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeBinary(t.result),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function L(t, n) {
      if (
        (n.writeStructBegin("StreamCheck"),
        n.writeFieldBegin({
          fname: "stream_id",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.stream_id != null)
      )
        n.writeI64(r("jsbi").BigInt(t.stream_id));
      else {
        var a = "0";
        n.writeI64(r("jsbi").BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "last_sequencer", ftype: e.I32, fid: 2 }),
        t.last_sequencer != null)
      )
        n.writeI32(t.last_sequencer);
      else {
        var i = 0;
        n.writeI32(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "amendment_count", ftype: e.I32, fid: 4 }),
        t.amendment_count != null)
      )
        n.writeI32(t.amendment_count);
      else {
        var l = 0;
        n.writeI32(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "last_status", ftype: e.I32, fid: 3 }),
        t.last_status != null)
      ) {
        var s;
        n.writeI32((s = t.last_status) != null ? s : 0);
      } else {
        var u = o(
          "RequestStreamCommonRequestStreamCommonTypes",
        ).FlowStatus.cast(0);
        n.writeI32(u != null ? u : 0);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function E(t, n) {
      if (
        (n.writeStructBegin("Ping"),
        n.writeFieldBegin({
          fname: "caller_timestamp_ms",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.caller_timestamp_ms != null)
      )
        n.writeI64(r("jsbi").BigInt(t.caller_timestamp_ms));
      else {
        var o = "0";
        n.writeI64(r("jsbi").BigInt(o));
      }
      if ((n.writeFieldEnd(), t.streams_to_check != null)) {
        (n.writeFieldBegin({
          fname: "streams_to_check",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.streams_to_check.length,
          }));
        for (var a of t.streams_to_check) L(a, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function k(t, n) {
      if (
        (n.writeStructBegin("Pong"),
        n.writeFieldBegin({
          fname: "original_ping_timestamp_ms",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.original_ping_timestamp_ms != null)
      )
        n.writeI64(r("jsbi").BigInt(t.original_ping_timestamp_ms));
      else {
        var o = "0";
        n.writeI64(r("jsbi").BigInt(o));
      }
      if ((n.writeFieldEnd(), t.stream_ids_missing != null)) {
        (n.writeFieldBegin({
          fname: "stream_ids_missing",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({
            etype: e.I64,
            size: t.stream_ids_missing.length,
          }));
        for (var a of t.stream_ids_missing) n.writeI64(r("jsbi").BigInt(a));
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.stream_ids_behind != null) {
        (n.writeFieldBegin({
          fname: "stream_ids_behind",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 3,
        }),
          n.writeListBegin({ etype: e.I64, size: t.stream_ids_behind.length }));
        for (var i of t.stream_ids_behind) n.writeI64(r("jsbi").BigInt(i));
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.stream_ids_with_lost_amendments != null) {
        (n.writeFieldBegin({
          fname: "stream_ids_with_lost_amendments",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 4,
        }),
          n.writeListBegin({
            etype: e.I64,
            size: t.stream_ids_with_lost_amendments.length,
          }));
        for (var l of t.stream_ids_with_lost_amendments)
          n.writeI64(r("jsbi").BigInt(l));
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.stream_ids_with_wrong_status != null) {
        (n.writeFieldBegin({
          fname: "stream_ids_with_wrong_status",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 5,
        }),
          n.writeListBegin({
            etype: e.I64,
            size: t.stream_ids_with_wrong_status.length,
          }));
        for (var s of t.stream_ids_with_wrong_status)
          n.writeI64(r("jsbi").BigInt(s));
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function I(t, n) {
      if ((n.writeStructBegin("StreamResponseDelta"), t.flow_status != null)) {
        var o;
        (n.writeFieldBegin({
          fname: "flow_status",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
          n.writeI32((o = t.flow_status) != null ? o : 0),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.log != null) {
        (n.writeFieldBegin({
          fname: "log",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 2,
        }),
          v(t.log, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.rewrite != null) {
        (n.writeFieldBegin({
          fname: "rewrite",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 3,
        }),
          y(t.rewrite, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.data != null) {
        (n.writeFieldBegin({
          fname: "data",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 4,
        }),
          b(t.data, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.termination != null) {
        (n.writeFieldBegin({
          fname: "termination",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 5,
        }),
          S(t.termination, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      if (t.amend_ack != null) {
        (n.writeFieldBegin({
          fname: "amend_ack",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 6,
        }),
          R(t.amend_ack, n),
          n.writeFieldEnd(),
          n.writeFieldStop(),
          n.writeStructEnd());
        return;
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function T(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.new_headers = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.new_body = t.readBinary())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.patch_headers = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.kill_body = t.readBool())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.temporary = t.readBool())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.conditional_patch_headers = D(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function D(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.expected_existing_headers = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.patch_headers_if_match = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.patch_headers_otherwise = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.expected_existing_headers === void 0 &&
          (n.expected_existing_headers = ""),
        n.patch_headers_if_match === void 0 && (n.patch_headers_if_match = ""),
        n
      );
    }
    function x(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.bytes = t.readBinary())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.metadata = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.bytes === void 0 && (n.bytes = Uint8Array.of()),
        n
      );
    }
    function $(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.message = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.message === void 0 && (n.message = ""), n);
    }
    function P(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.reason = o(
                  "RequestStreamCommonRequestStreamCommonTypes",
                ).TerminationReason.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.message = t.readString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.retry_delay_ms = t.readI64().toString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.reason === void 0 &&
          (n.reason = o(
            "RequestStreamCommonRequestStreamCommonTypes",
          ).TerminationReason.cast(0)),
        n
      );
    }
    function N(t) {
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
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.accepted = t.readBool())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.result = t.readBinary())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function M(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.stream_id = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.last_sequencer = t.readI32())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.amendment_count = t.readI32())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.last_status = o(
                  "RequestStreamCommonRequestStreamCommonTypes",
                ).FlowStatus.cast(t.readI32()))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.stream_id === void 0 && (n.stream_id = "0"),
        n.last_sequencer === void 0 && (n.last_sequencer = 0),
        n.amendment_count === void 0 && (n.amendment_count = 0),
        n.last_status === void 0 &&
          (n.last_status = o(
            "RequestStreamCommonRequestStreamCommonTypes",
          ).FlowStatus.cast(0)),
        n
      );
    }
    function w(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.caller_timestamp_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.streams_to_check = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = M(t);
                n.streams_to_check.push(u);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.caller_timestamp_ms === void 0 && (n.caller_timestamp_ms = "0"),
        n
      );
    }
    function A(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.original_ping_timestamp_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.stream_ids_missing = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readI64().toString();
                n.stream_ids_missing.push(u);
              }
            } else t.skip(a);
            break;
          case 3:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.stream_ids_behind = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = t.readI64().toString();
                n.stream_ids_behind.push(m);
              }
            } else t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.stream_ids_with_lost_amendments = [];
              for (var p = t.readListBegin(), _ = 0; _ < p.size; _++) {
                var f = t.readI64().toString();
                n.stream_ids_with_lost_amendments.push(f);
              }
            } else t.skip(a);
            break;
          case 5:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.stream_ids_with_wrong_status = [];
              for (var g = t.readListBegin(), h = 0; h < g.size; h++) {
                var y = t.readI64().toString();
                n.stream_ids_with_wrong_status.push(y);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.original_ping_timestamp_ms === void 0 &&
          (n.original_ping_timestamp_ms = "0"),
        n
      );
    }
    function F(t) {
      var n,
        a = {};
      for (t.readStructBegin(); ; ) {
        var i = t.readFieldBegin(),
          l = i.ftype,
          s = i.fid;
        if (l === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (s) {
          case 1:
            if (l === (e || (e = r("ThriftTypes"))).I32)
              if (n == null)
                ((a.flow_status = o(
                  "RequestStreamCommonRequestStreamCommonTypes",
                ).FlowStatus.cast(t.readI32())),
                  (n = "flow_status"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: flow_status, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          case 2:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((a.log = $(t)), (n = "log"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: log, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          case 3:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((a.rewrite = T(t)), (n = "rewrite"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: rewrite, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          case 4:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((a.data = x(t)), (n = "data"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: data, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          case 5:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((a.termination = P(t)), (n = "termination"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: termination, previous deserialized field: " +
                    n,
                );
            else t.skip(l);
            break;
          case 6:
            if (l === (e || (e = r("ThriftTypes"))).STRUCT)
              if (n == null) ((a.amend_ack = N(t)), (n = "amend_ack"));
              else
                throw new Error(
                  "more than one field have been deserialized in union type: StreamResponseDelta; current field: amend_ack, previous deserialized field: " +
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
    ((l.ResponseRewriteRequest$DefaultConstructor = s),
      (l.ResponseRewriteConditionalPatchHeaders$DefaultConstructor = u),
      (l.ResponseData$DefaultConstructor = c),
      (l.LogMessage$DefaultConstructor = d),
      (l.Termination$DefaultConstructor = m),
      (l.AmendStreamAck$DefaultConstructor = p),
      (l.StreamCheck$DefaultConstructor = _),
      (l.Ping$DefaultConstructor = f),
      (l.Pong$DefaultConstructor = g),
      (l.StreamResponseDelta$DefaultConstructor = h),
      (l.serializeResponseRewriteRequest = y),
      (l.serializeResponseRewriteConditionalPatchHeaders = C),
      (l.serializeResponseData = b),
      (l.serializeLogMessage = v),
      (l.serializeTermination = S),
      (l.serializeAmendStreamAck = R),
      (l.serializeStreamCheck = L),
      (l.serializePing = E),
      (l.serializePong = k),
      (l.serializeStreamResponseDelta = I),
      (l.deserializeResponseRewriteRequest = T),
      (l.deserializeResponseRewriteConditionalPatchHeaders = D),
      (l.deserializeResponseData = x),
      (l.deserializeLogMessage = $),
      (l.deserializeTermination = P),
      (l.deserializeAmendStreamAck = N),
      (l.deserializeStreamCheck = M),
      (l.deserializePing = w),
      (l.deserializePong = A),
      (l.deserializeStreamResponseDelta = F));
  },
  98,
);
