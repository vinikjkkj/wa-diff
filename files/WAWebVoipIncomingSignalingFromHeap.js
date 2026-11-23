__d(
  "WAWebVoipIncomingSignalingFromHeap",
  ["WAWebVoipWasmHeapBuffer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        typeof e.handleIncomingSignalingOfferFromHeap == "function" &&
        typeof e.handleIncomingSignalingMessageFromHeap == "function" &&
        typeof e.handleIncomingSignalingAckFromHeap == "function" &&
        typeof e.handleIncomingSignalingReceiptFromHeap == "function"
      );
    }
    function s(e, t, n) {
      var r = o("WAWebVoipWasmHeapBuffer").createHeapBufferState(),
        a = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(e, r, t.byteLength);
      if (a === 0) return null;
      try {
        return (
          e.GROWABLE_HEAP_U8().set(new Uint8Array(t), a),
          n(a, t.byteLength)
        );
      } finally {
        o("WAWebVoipWasmHeapBuffer").freeHeapBuffer(e, r);
      }
    }
    ((l.hasIncomingSignalingFromHeap = e), (l.callWithFrameOnHeap = s));
  },
  98,
);
