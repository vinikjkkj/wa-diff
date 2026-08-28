__d(
  "ZenonStateSyncStore",
  [
    "ZenonInfraActionsLogger",
    "ZenonStateSyncSerializer",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = new Map()),
          (this.$2 = new Map()),
          (this.$3 = new Set()),
          (this.$4 = new Map()));
      }
      var t = e.prototype;
      return (
        (t.addTopicHandler = function (t, n) {
          this.$3.add(t);
          var e = this.getTopicHandlers(t);
          this.$4.set(t, e.add(n));
        }),
        (t.getTopicHandlers = function (t) {
          var e;
          return (e = this.$4.get(t)) != null ? e : new Set();
        }),
        (t.getInputStates = function () {
          return this.$1;
        }),
        (t.getOutputStates = function () {
          return this.$2;
        }),
        (t.$5 = function (t) {
          var e = { stateStore: {} },
            n = o("ZenonStateSyncSerializer").serializeStateSyncSnapshot(e);
          return { data: n, version: t };
        }),
        (t.updateInputState = function (t, n) {
          var e, a;
          this.$3.add(t);
          var i =
            ((e = (a = this.$1.get(t)) == null ? void 0 : a.version) != null
              ? e
              : 0) + 1;
          if (t === "e2ee_v2_msg") return this.$5(i);
          this.$1.set(t, { data: n, version: i });
          var l = o("ZenonStateSyncSerializer").serializeInputState(t, n);
          return (
            t === "live_stream" &&
              r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
                checkpoint:
                  "Update state sync " +
                  t +
                  " and serialized input data " +
                  JSON.stringify(l),
              }),
            l !== null ? { data: l, version: i } : { version: i }
          );
        }),
        (t.$6 = function (t, r, a) {
          var e, i;
          if (this.$3.has(t)) {
            var l =
              (e = (i = this.$2.get(t)) == null ? void 0 : i.version) != null
                ? e
                : -1;
            if (!(a <= l)) {
              var s = o("ZenonStateSyncSerializer").deserializeOutputState(
                t,
                r,
              );
              this.$2.set(t, { data: s, version: a });
              var u = this.getTopicHandlers(t);
              u &&
                u.forEach(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        yield e(s);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
            }
          }
        }),
        (t.$7 = function (t) {
          var e = this,
            n = o("ZenonStateSyncSerializer").deserializeE2eeData(t.data);
          if (n != null) {
            var r = o("ZenonStateSyncSerializer").deserializeStateSyncSnapshot(
              n.data,
            );
            r != null &&
              Object.keys(r.stateStore).forEach(function (t) {
                var n = r.stateStore[t];
                n.data == null ||
                  n.data.length === 0 ||
                  e.$6(t, n.data, n.version);
              });
          }
        }),
        (t.updateOutputState = function (t, n) {
          if (t === "e2ee_v2_msg") {
            this.$7(n);
            return;
          }
          this.$6(t, n.data, n.version);
        }),
        (t.unsubscribe = function (t) {
          var e, n;
          this.$3.delete(t);
          var r =
            ((e = (n = this.$1.get(t)) == null ? void 0 : n.version) != null
              ? e
              : 0) + 1;
          return (this.$1.set(t, { data: null, version: r }), { version: r });
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
