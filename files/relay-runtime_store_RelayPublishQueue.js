__d(
  "relay-runtime/store/RelayPublishQueue",
  [
    "invariant",
    "relay-runtime/mutations/RelayRecordSourceMutator",
    "relay-runtime/mutations/RelayRecordSourceProxy",
    "relay-runtime/mutations/RelayRecordSourceSelectorProxy",
    "relay-runtime/store/RelayReader",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/deepFreeze",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        typeof t != "undefined"
          ? t
          : typeof window != "undefined"
            ? window
            : void 0,
      d =
        (e =
          c == null || (s = c.ErrorUtils) == null
            ? void 0
            : s.applyWithGuard) != null
          ? e
          : function (e, t, n, r, o) {
              return e.apply(t, n);
            },
      m = (function () {
        function e(e, t, n, r, o) {
          ((this.$6 = !1),
            (this.$2 = t || null),
            (this.$7 = !1),
            (this.$8 = new Set()),
            (this.$9 = new Set()),
            (this.$1 = e),
            (this.$10 = new Set()),
            (this.$11 = null),
            (this.$4 = n),
            (this.$3 = r),
            (this.$5 = o));
        }
        var t = e.prototype;
        return (
          (t.applyUpdate = function (t) {
            ((!this.$10.has(t) && !this.$9.has(t)) || l(0, 680),
              this.$9.add(t));
          }),
          (t.revertUpdate = function (t) {
            this.$9.has(t)
              ? this.$9.delete(t)
              : this.$10.has(t) && ((this.$7 = !0), this.$10.delete(t));
          }),
          (t.revertAll = function () {
            ((this.$7 = !0), this.$9.clear(), this.$10.clear());
          }),
          (t.commitPayload = function (t, n, r) {
            ((this.$7 = !0),
              this.$8.add({
                kind: "payload",
                operation: t,
                payload: n,
                updater: r,
              }));
          }),
          (t.commitUpdate = function (t) {
            ((this.$7 = !0), this.$8.add({ kind: "updater", updater: t }));
          }),
          (t.commitSource = function (t) {
            ((this.$7 = !0), this.$8.add({ kind: "source", source: t }));
          }),
          (t.run = function (t) {
            var e = this.$10 === 0 && !!this.$11,
              r = !this.$7 && this.$9.size === 0 && !e;
            if (
              (n("warning")(
                !r,
                "RelayPublishQueue.run was called, but the call would have been a noop.",
              ),
              n("relay-runtime/util/RelayFeatureFlags").DISALLOW_NESTED_UPDATES
                ? l(
                    this.$12 !== !0,
                    "A store update was detected within another store update. Please make sure new store updates aren't being executed within an updater function for a different update.",
                  )
                : n("warning")(
                    this.$12 !== !0,
                    "A store update was detected within another store update. Please make sure new store updates aren't being executed within an updater function for a different update.",
                  ),
              (this.$12 = !0),
              r)
            )
              return ((this.$12 = !1), []);
            this.$7 && this.$6 && (this.$1.restore(), (this.$6 = !1));
            var o = this.$13();
            return (
              (this.$9.size || (this.$7 && this.$10.size)) &&
                (this.$6 || (this.$1.snapshot(), (this.$6 = !0)), this.$14()),
              (this.$7 = !1),
              this.$10.size > 0
                ? this.$11 || (this.$11 = this.$1.holdGC())
                : this.$11 && (this.$11.dispose(), (this.$11 = null)),
              (this.$12 = !1),
              this.$1.notify(t, o)
            );
          }),
          (t.$15 = function (t) {
            var e = this,
              r = t.payload,
              o = t.operation,
              a = t.updater,
              i = r.source,
              s = r.fieldPayloads,
              u = new (n("relay-runtime/mutations/RelayRecordSourceMutator"))(
                this.$1.getSource(),
                i,
              ),
              c = new (n("relay-runtime/mutations/RelayRecordSourceProxy"))(
                u,
                this.$4,
                this.$2,
                this.$3,
                this.$5,
              );
            if (
              (s &&
                s.length &&
                s.forEach(function (t) {
                  var n = e.$2 && e.$2(t.handle);
                  (n || l(0, 681, t.handle), n.update(c, t));
                }),
              a)
            ) {
              var d = o.fragment;
              d != null || l(0, 12580);
              var m = new (n(
                  "relay-runtime/mutations/RelayRecordSourceSelectorProxy",
                ))(u, c, d, this.$3),
                _ = p(i, d);
              a(m, _);
            }
            var f = c.getIDsMarkedForInvalidation();
            return (this.$1.publish(i, f), c.isStoreMarkedForInvalidation());
          }),
          (t.$13 = function () {
            var e = this;
            if (!this.$8.size) return !1;
            var t = !1;
            return (
              this.$8.forEach(function (r) {
                if (r.kind === "payload") {
                  var o = e.$15(r);
                  t = t || o;
                } else if (r.kind === "source") {
                  var a = r.source;
                  e.$1.publish(a);
                } else {
                  var i = r.updater,
                    l = n("relay-runtime/store/RelayRecordSource").create(),
                    s = new (n(
                      "relay-runtime/mutations/RelayRecordSourceMutator",
                    ))(e.$1.getSource(), l),
                    u = new (n(
                      "relay-runtime/mutations/RelayRecordSourceProxy",
                    ))(s, e.$4, e.$2, e.$3, e.$5);
                  (d(i, null, [u], null, "RelayPublishQueue:commitData"),
                    (t = t || u.isStoreMarkedForInvalidation()));
                  var c = u.getIDsMarkedForInvalidation();
                  e.$1.publish(l, c);
                }
              }),
              this.$8.clear(),
              t
            );
          }),
          (t.$14 = function () {
            var e = this,
              t = n("relay-runtime/store/RelayRecordSource").create(),
              r = new (n("relay-runtime/mutations/RelayRecordSourceMutator"))(
                this.$1.getSource(),
                t,
              ),
              o = new (n("relay-runtime/mutations/RelayRecordSourceProxy"))(
                r,
                this.$4,
                this.$2,
                this.$3,
                this.$5,
              ),
              a = function (a) {
                if (a.storeUpdater) {
                  var t = a.storeUpdater;
                  d(t, null, [o], null, "RelayPublishQueue:applyUpdates");
                } else {
                  var i = a.operation,
                    l = a.payload,
                    s = a.updater,
                    u = l.source,
                    c = l.fieldPayloads;
                  if ((u && o.publishSource(u, c), s)) {
                    var m;
                    u && (m = p(u, i.fragment));
                    var _ = new (n(
                      "relay-runtime/mutations/RelayRecordSourceSelectorProxy",
                    ))(r, o, i.fragment, e.$3);
                    d(s, null, [_, m], null, "RelayPublishQueue:applyUpdates");
                  }
                }
              };
            (this.$7 && this.$10.size && this.$10.forEach(a),
              this.$9.size &&
                (this.$9.forEach(function (t) {
                  (a(t), e.$10.add(t));
                }),
                this.$9.clear()),
              this.$1.publish(t));
          }),
          e
        );
      })();
    function p(e, t) {
      var r = n("relay-runtime/store/RelayReader").read(
        e,
        t,
        null,
        void 0,
        void 0,
      ).data;
      return r;
    }
    a.exports = m;
  },
  null,
);
