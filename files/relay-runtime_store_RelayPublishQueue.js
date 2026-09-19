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
            (this.$8 = !1),
            (this.$9 = !1),
            (this.$10 = new Set()),
            (this.$11 = new Set()),
            (this.$1 = e),
            (this.$12 = new Set()),
            (this.$13 = null),
            (this.$4 = n),
            (this.$3 = r),
            (this.$5 = o));
        }
        var t = e.prototype;
        return (
          (t.applyUpdate = function (t) {
            ((!this.$12.has(t) && !this.$11.has(t)) || l(0, 680),
              this.$11.add(t));
          }),
          (t.revertUpdate = function (t) {
            this.$11.has(t)
              ? this.$11.delete(t)
              : this.$12.has(t) && ((this.$7 = !0), this.$12.delete(t));
          }),
          (t.revertAll = function () {
            ((this.$7 = !0), this.$11.clear(), this.$12.clear());
          }),
          (t.commitPayload = function (t, n, r) {
            ((this.$7 = !0),
              this.$10.add({
                kind: "payload",
                operation: t,
                payload: n,
                updater: r,
              }));
          }),
          (t.commitUpdate = function (t) {
            ((this.$7 = !0), this.$10.add({ kind: "updater", updater: t }));
          }),
          (t.commitSource = function (t) {
            ((this.$7 = !0), this.$10.add({ kind: "source", source: t }));
          }),
          (t.publishWithDeferredNotify = function (t, n) {
            var e = this;
            return (
              this.$15(),
              (this.$7 = !0),
              this.$10.add({
                kind: "payload",
                operation: t,
                payload: n,
                updater: null,
                deferNotify: !0,
              }),
              (this.$14 = !0),
              this.$16(),
              (this.$14 = !1),
              (this.$9 = !0),
              function () {
                e.$9 && e.run();
              }
            );
          }),
          (t.run = function (t) {
            var e = this.$12.size === 0 && !!this.$13,
              r = !this.$7 && this.$11.size === 0 && !this.$9 && !e;
            if (
              (n("warning")(
                !r,
                "RelayPublishQueue.run was called, but the call would have been a noop.",
              ),
              this.$15(),
              (this.$14 = !0),
              r)
            )
              return ((this.$14 = !1), []);
            this.$16();
            var o = this.$8;
            return (
              (this.$8 = !1),
              (this.$9 = !1),
              (this.$14 = !1),
              this.$1.notify(t, o)
            );
          }),
          (t.$16 = function () {
            (this.$7 && this.$6 && (this.$1.restore(), (this.$6 = !1)),
              this.$17() && (this.$8 = !0),
              (this.$11.size || (this.$7 && this.$12.size)) &&
                (this.$6 || (this.$1.snapshot(), (this.$6 = !0)), this.$18()),
              (this.$7 = !1),
              this.$12.size > 0
                ? this.$13 || (this.$13 = this.$1.holdGC())
                : this.$13 && (this.$13.dispose(), (this.$13 = null)));
          }),
          (t.$15 = function () {
            n("relay-runtime/util/RelayFeatureFlags").DISALLOW_NESTED_UPDATES
              ? l(
                  this.$14 !== !0,
                  "A store update was detected within another store update. Please make sure new store updates aren't being executed within an updater function for a different update.",
                )
              : n("warning")(
                  this.$14 !== !0,
                  "A store update was detected within another store update. Please make sure new store updates aren't being executed within an updater function for a different update.",
                );
          }),
          (t.$19 = function (t) {
            var e = this,
              r = t.payload,
              o = t.operation,
              a = t.updater,
              i = t.deferNotify,
              s = r.source,
              u = r.fieldPayloads,
              c = new (n("relay-runtime/mutations/RelayRecordSourceMutator"))(
                this.$1.getSource(),
                s,
              ),
              d = new (n("relay-runtime/mutations/RelayRecordSourceProxy"))(
                c,
                this.$4,
                this.$2,
                this.$3,
                this.$5,
              );
            if (
              (u &&
                u.length &&
                u.forEach(function (t) {
                  var n = e.$2 && e.$2(t.handle);
                  (n || l(0, 681, t.handle), n.update(d, t));
                }),
              a)
            ) {
              var m = o.fragment;
              m != null || l(0, 12580);
              var _ = new (n(
                  "relay-runtime/mutations/RelayRecordSourceSelectorProxy",
                ))(c, d, m, this.$3),
                f = p(s, m);
              a(_, f);
            }
            var g = d.getIDsMarkedForInvalidation();
            return (
              i === !0
                ? this.$1.publishWithDeferredNotify(s, o, g)
                : this.$1.publish(s, g),
              d.isStoreMarkedForInvalidation()
            );
          }),
          (t.$17 = function () {
            var e = this;
            if (!this.$10.size) return !1;
            var t = !1;
            return (
              this.$10.forEach(function (r) {
                if (r.kind === "payload") {
                  var o = e.$19(r);
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
              this.$10.clear(),
              t
            );
          }),
          (t.$18 = function () {
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
            (this.$7 && this.$12.size && this.$12.forEach(a),
              this.$11.size &&
                (this.$11.forEach(function (t) {
                  (a(t), e.$12.add(t));
                }),
                this.$11.clear()),
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
