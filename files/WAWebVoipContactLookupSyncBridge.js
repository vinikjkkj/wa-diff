__d(
  "WAWebVoipContactLookupSyncBridge",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = 1,
      s = 8,
      u = 5e3,
      c = Reflect.get(globalThis, "Atomics"),
      d = function (t, n, r, o) {
        return c.wait(t, n, r, o);
      };
    function m() {
      var e = new SharedArrayBuffer(s),
        t = new Int32Array(e);
      return { buffer: t.buffer, view: t };
    }
    function p(t) {
      var n = t.jid,
        r = t.onComplete,
        o = t.postMessage,
        a = t.timeoutMs,
        i = a === void 0 ? u : a,
        s = t.waitFn,
        p = s === void 0 ? d : s,
        _ = m(),
        f = _.buffer,
        g = _.view;
      (c.store(g, e, 0),
        c.store(g, l, 0),
        o({
          type: "waWasmWorkerCompatibleCallback",
          __name: "contactLookupSyncRequest",
          jid: n,
          buffer: f,
        }));
      var h = p(g, e, 0, i);
      if (h === "timed-out")
        return (
          r == null || r({ jid: n, outcome: "timed-out", timeoutMs: i }),
          !1
        );
      var y = c.load(g, l) === 1;
      return (
        r == null ||
          r({ jid: n, outcome: y ? "known" : "unknown", timeoutMs: i }),
        y
      );
    }
    i.resolveParticipantKnownContactSync = p;
  },
  66,
);
