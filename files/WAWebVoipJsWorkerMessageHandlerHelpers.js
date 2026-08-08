__d(
  "WAWebVoipJsWorkerMessageHandlerHelpers",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      try {
        globalThis.postMessage({
          type: "waWasmWorkerCompatibleCallback",
          __name: "loggingCallback",
          level: e,
          message: t,
        });
      } catch (e) {}
    }
    function l(e, t) {
      var n,
        r = t,
        o = r.error,
        a = {
          bufferedAmount: e.bufferedAmount,
          eventType: (n = r.type) != null ? n : "error",
          readyState: e.readyState,
        };
      return (
        (o == null ? void 0 : o.name) != null && (a.errorName = o.name),
        (o == null ? void 0 : o.message) != null &&
          (a.errorMessage = o.message),
        (o == null ? void 0 : o.errorDetail) != null &&
          (a.errorDetail = o.errorDetail),
        (o == null ? void 0 : o.sctpCauseCode) != null &&
          (a.sctpCauseCode = o.sctpCauseCode),
        (o == null ? void 0 : o.sentAlert) != null &&
          (a.sentAlert = o.sentAlert),
        (o == null ? void 0 : o.receivedAlert) != null &&
          (a.receivedAlert = o.receivedAlert),
        a
      );
    }
    function s(e) {
      var t = [
        "eventType=" + e.eventType,
        "readyState=" + e.readyState,
        "bufferedAmount=" + String(e.bufferedAmount),
      ];
      return (
        e.errorName != null && t.push("name=" + e.errorName),
        e.errorMessage != null && t.push("message=" + e.errorMessage),
        e.errorDetail != null && t.push("errorDetail=" + e.errorDetail),
        e.sctpCauseCode != null &&
          t.push("sctpCauseCode=" + String(e.sctpCauseCode)),
        e.sentAlert != null && t.push("sentAlert=" + String(e.sentAlert)),
        e.receivedAlert != null &&
          t.push("receivedAlert=" + String(e.receivedAlert)),
        t.join(", ")
      );
    }
    function u(e) {
      if (e.byteLength < 2) return !1;
      var t = new Uint8Array(e);
      return (t[0] & 192) === 0;
    }
    var c = 8,
      d = 5,
      m = 3480,
      p = 3478;
    function _(e, t, n) {
      return e[t % n];
    }
    function f(e, t, n) {
      var r = _(e, t, n),
        o = _(e, t + 1, n);
      return r + o * 256;
    }
    function g(e, t, n, r) {
      var o = new Uint8Array(n),
        a = t % r,
        i = a + n;
      if (i <= r) o.set(e.subarray(a, i));
      else {
        var l = r - a;
        (o.set(e.subarray(a, r)), o.set(e.subarray(0, n - l), l));
      }
      return o;
    }
    function h(e) {
      var t = e.ip,
        n = e.port,
        r = e.removeRelayPortOverride,
        o;
      return (
        r ? (o = n) : (o = n === m || n === p ? m : n),
        t.includes(":") ? "[" + t + "]:" + o : t + ":" + o
      );
    }
    ((i.logToPhysicalLogs = e),
      (i.getDataChannelErrorDetails = l),
      (i.formatDataChannelErrorDetails = s),
      (i.isStunPacket = u),
      (i.RING_BUFFER_HEADER_BYTES = c),
      (i.RING_BUFFER_ENTRY_HEADER_BYTES = d),
      (i.readRingByte = _),
      (i.readRingU16LE = f),
      (i.readRingBytes = g),
      (i.getConnectionIdFromIpPort = h));
  },
  66,
);
