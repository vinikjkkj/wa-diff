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
          (n.peek = function (t) {
            return this.store.get(t);
          }),
          (n.publishInitial = function (t, n) {
            this.peek(t) == null && this.publish(t, n);
          }),
          (n.subscribe = function (t, n, r) {
            var e = this.subscriberForObserver(r);
            e && e.add(t, n);
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
          t
        );
      })(),
      u = (function () {
        function e(e) {
          this.store = e;
        }
        var t = e.prototype;
        return (
          (t.setup = function (t, n, r) {
            var e,
              a,
              i = n.data.key;
            if (i == null)
              throw new (o("WebBloksErrors").WebBloksError)(
                "Key not found in global state data manifest entry",
              );
            var l = o("WebBloksDataModule").getDataEntryInitialValue(n, r),
              s =
                (e = (a = n.data) == null ? void 0 : a.mode) != null ? e : "d",
              u = this.store,
              c,
              d;
            if (s === "p") ((c = l), (d = "publish"));
            else {
              var m = u.peek(i);
              m == null
                ? ((c = l), (d = "initial"))
                : ((c = m), (d = "subscribe"));
            }
            return {
              initialValue: c,
              commitToStore: function (t, n) {
                return (
                  d === "publish"
                    ? u.publish(i, l)
                    : d === "initial" && u.publishInitial(i, l),
                  u.subscribe(i, t, n),
                  null
                );
              },
            };
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
