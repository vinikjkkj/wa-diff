__d(
  "WASmaxMockRunnerUtils",
  ["$InternalEnum", "WASmaxWasmMemoryManagement"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Injection: 0,
      InjectionToServer: 1,
      MockCompleted: 2,
      SequenceCompleted: 3,
      MockRequestMatched: 4,
    });
    function s(e) {
      var t = e._malloc(4);
      return (e.setValue(t, 0, "i32"), t);
    }
    function u(e, t) {
      return o("WASmaxWasmMemoryManagement").withScopedAllocation(
        e,
        function () {
          var n = s(e);
          try {
            return t(n);
          } finally {
            var r = e.getValue(n, "i32");
            if (r !== 0) {
              var o = e.getValue(r, "i32"),
                a = e.UTF8ToString(o);
              throw (
                e.ccall("SmaxRunnerErrorFree", null, ["number"], [r]),
                new Error(a)
              );
            }
          }
        },
      );
    }
    function c(e, t) {
      var n = e._malloc(t.length),
        r = new Uint8Array(e.HEAPU8.buffer, n, t.length).set(t);
      return n;
    }
    function d(e, t, n) {
      var r = c(e, t.data),
        o = c(e, t.signature || new Uint8Array(64).fill(0));
      (e.setValue(n, t.id, "i32"),
        e.setValue(n + 4, r, "*"),
        e.setValue(n + 8, o, "*"));
    }
    function m(e, t) {
      var n = t.identity,
        r = t.privateIdentity,
        o = t.registrationId,
        a = t.preKeys,
        i = t.signedPreKey,
        l = 12,
        s = c(e, n),
        u = 0;
      r != null && (u = c(e, r));
      var m = e._malloc(l);
      d(e, i, m);
      for (var p = e._malloc(a.length * l), _ = 0; _ < a.length; ++_)
        d(e, a[_], p + _ * l);
      return {
        identityPtr: s,
        privateIdentityPtr: u,
        registrationId: o,
        preKeysPtr: p,
        preKeysLength: a.length,
        signedPreKeyPtr: m,
      };
    }
    function p(e, t, n) {
      var r = e.getValue(t, "i32"),
        o = e.getValue(t + 4, "*"),
        a = new Uint8Array(e.HEAPU8.buffer, o, 32);
      if (!n) return { id: r, data: new Uint8Array(a), signature: null };
      var i = e.getValue(t + 8, "*"),
        l = new Uint8Array(e.HEAPU8.buffer, i, 64);
      return { id: r, data: new Uint8Array(a), signature: new Uint8Array(l) };
    }
    function _(e, t) {
      for (
        var n = t,
          r = n + 4,
          o = r + 4,
          a = o + 4,
          i = a + 4,
          l = i + 4,
          s = [],
          u = e.getValue(a, "i32"),
          c = e.getValue(i, "*"),
          d = 0;
        d < u;
        ++d
      )
        (s.push(p(e, c, !1)), (c += 12));
      var m = e.getValue(l, "*"),
        _ = null;
      m !== 0 && (_ = new Uint8Array(new Uint8Array(e.HEAPU8.buffer, m, 32)));
      var f = {
        identity: new Uint8Array(
          new Uint8Array(e.HEAPU8.buffer, e.getValue(n, "*"), 32),
        ),
        registrationId: e.getValue(r, "i32"),
        signedPreKey: p(e, e.getValue(o, "*"), !0),
        preKeys: s,
        privateIdentity: _,
      };
      return (e.ccall("SmaxRunnerPreKeyBundleFree", null, ["number"], [t]), f);
    }
    function f(t, n) {
      for (
        var r = [],
          o = t.getValue(n, "i32"),
          a = t.ccall("SmaxRunnerEventsCount", "number", ["number"], [o]),
          i = 0;
        i < a;
        i++
      ) {
        var l = e.cast(
          t.ccall(
            "SmaxRunnerEventsGetEventType",
            "number",
            ["number", "number"],
            [o, i],
          ),
        );
        if (l == null) throw new Error("Invalid event type");
        switch (l) {
          case e.Injection: {
            var s = t.ccall(
              "SmaxRunnerEventsGetInjectionEvent",
              "number",
              ["number", "number"],
              [o, i],
            );
            r.push(g(t, s));
            break;
          }
          case e.InjectionToServer:
            break;
          case e.MockCompleted: {
            var u = t.ccall(
              "SmaxRunnerEventsGetMockCompletedEvent",
              "number",
              ["number", "number"],
              [o, i],
            );
            r.push(h(t, u));
            break;
          }
          case e.SequenceCompleted: {
            var c = t.ccall(
              "SmaxRunnerEventsGetSequenceCompletedEvent",
              "number",
              ["number", "number"],
              [o, i],
            );
            r.push(y(t, c));
            break;
          }
          case e.MockRequestMatched: {
            var d = t.ccall(
              "SmaxRunnerEventsGetMockRequestMatchedEvent",
              "number",
              ["number", "number"],
              [o, i],
            );
            r.push(C(t, d));
            break;
          }
        }
      }
      return (t.ccall("SmaxRunnerEventsFree", null, ["number"], [o]), r);
    }
    function g(e, t) {
      var n = e.getValue(t, "i32"),
        r = e.getValue(t + 4, "i32");
      return {
        type: "Injection",
        data: new Uint8Array(new Uint8Array(e.HEAPU8.buffer, n, r)),
      };
    }
    function h(e, t) {
      var n = e.getValue(t, "i32");
      return { type: "MockCompleted", name: e.UTF8ToString(n) };
    }
    function y(e, t) {
      var n = e.getValue(t, "i32");
      return { type: "SequenceCompleted", name: e.UTF8ToString(n) };
    }
    function C(e, t) {
      var n = e.getValue(t, "i32");
      return { type: "MockRequestMatched", name: e.UTF8ToString(n) };
    }
    ((l.EventType = e),
      (l.makePointer = s),
      (l.withError = u),
      (l.copyByteArrayToWasmMemory = c),
      (l.makePreKeyBundle = m),
      (l.copyPreKey = p),
      (l.copyPreKeyBundle = _),
      (l.convertEvents = f),
      (l.getInjectionEvent = g),
      (l.getMockCompletedEvent = h),
      (l.getSequenceCompletedEvent = y),
      (l.getMockRequestMatchedEvent = C));
  },
  98,
);
