__d(
  "WebBloksGlobalState",
  ["WebBloksDataModule", "WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e(e) {
          ((this.variableIds = new Map()), (this.observer = e));
        }
        var t = e.prototype;
        return (
          (t.add = function (t, n) {
            var e,
              r = (e = this.variableIds.get(t)) != null ? e : new Set();
            (r.add(n), this.variableIds.set(t, r));
          }),
          e
        );
      })(),
      s = (function () {
        function t() {
          ((this.store = new Map()), (this.subscribers = []));
        }
        var n = t.prototype;
        return (
          (n.fetchAndSubscribe = function (t, n, r, o) {
            var e = this.store.get(t);
            return (
              e == null && ((e = n), this.store.set(t, n)),
              this.$1(t, e, r, o)
            );
          }),
          (n.publishAndSubscribe = function (t, n, r, o) {
            return (this.publish(t, n), this.$1(t, n, r, o));
          }),
          (n.publish = function (t, n) {
            if (n == null) {
              if (!this.store.has(t)) return;
            } else if (n === this.store.get(t)) return;
            this.store.set(t, n);
            for (var e of this.subscribers) {
              var r = e.observer,
                o = e.variableIds.get(t);
              if (o) for (var a of o) r.enqueueVariableUpdateOperation(a, n);
            }
          }),
          (n.subscriberForObserver = function (n) {
            if (n == null) return null;
            for (var t of this.subscribers) if (t.observer === n) return t;
            var r = new e(n);
            return (this.subscribers.push(r), r);
          }),
          (n.$1 = function (t, n, r, o) {
            var e = this.subscriberForObserver(o);
            return (e && e.add(t, r), { initialValue: n });
          }),
          t
        );
      })(),
      u = (function () {
        function e(e) {
          this.store = e;
        }
        var t = e.prototype;
        return (
          (t.setup = function (t, n, r, a) {
            var e,
              i,
              l = n.data.key;
            if (l == null)
              throw new (o("WebBloksErrors").WebBloksError)(
                "Key not found in global state data manifest entry",
              );
            var s = o("WebBloksDataModule").getDataEntryInitialValue(n, a),
              u =
                (e = (i = n.data) == null ? void 0 : i.mode) != null ? e : "d",
              c = n.id;
            return u === "p"
              ? this.store.publishAndSubscribe(l, s, c, r)
              : this.store.fetchAndSubscribe(l, s, c, r);
          }),
          (t.publish = function (t, n) {
            this.store.publish(t, n);
          }),
          e
        );
      })(),
      c = new s();
    ((l.WebBloksGlobalStateStore = s),
      (l.WebBloksGlobalStateDataModule = u),
      (l.GLOBAL_STATE_STORE = c));
  },
  98,
);
