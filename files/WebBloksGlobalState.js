__d(
  "WebBloksGlobalState",
  ["WebBloksDataModule", "WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (e == null) return null;
      var r = new Map(e);
      return (r.set(t, n), r);
    }
    var s = (function () {
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
      u = (function () {
        function e() {
          ((this.store = new Map()), (this.subscribers = []));
        }
        var t = e.prototype;
        return (
          (t.peek = function (t) {
            return this.store.get(t);
          }),
          (t.publishInitial = function (t, n) {
            this.peek(t) == null && this.publish(t, n);
          }),
          (t.subscribe = function (t, n, r) {
            var e = this.subscriberForObserver(r);
            e && e.add(t, n);
          }),
          (t.publish = function (t, n) {
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
          (t.subscriberForObserver = function (t) {
            if (t == null) return null;
            for (var e of this.subscribers) if (e.observer === t) return e;
            var n = new s(t);
            return (this.subscribers.push(n), n);
          }),
          e
        );
      })(),
      c = (function () {
        function t(e) {
          this.store = e;
        }
        var n = t.prototype;
        return (
          (n.setup = function (n, r, a, i) {
            var t,
              l,
              s = r.data.key;
            if (s == null)
              throw new (o("WebBloksErrors").WebBloksError)(
                "Key not found in global state data manifest entry",
              );
            var u = o("WebBloksDataModule").getDataEntryInitialValue(r, a),
              c =
                (t = (l = r.data) == null ? void 0 : l.mode) != null ? t : "d",
              d = this.store,
              m,
              p,
              _ = i;
            if (c === "p") ((m = u), (p = "publish"), (_ = e(i, s, u)));
            else {
              var f = i != null && i.has(s) ? i.get(s) : d.peek(s);
              f == null
                ? ((m = u), (p = "initial"), (_ = e(i, s, u)))
                : ((m = f), (p = "subscribe"));
            }
            return {
              initialData: {
                initialValue: m,
                commitToStore: function (t, n) {
                  return (
                    p === "publish"
                      ? d.publish(s, u)
                      : p === "initial" && d.publishInitial(s, u),
                    d.subscribe(s, t, n),
                    null
                  );
                },
              },
              snapshot: _,
            };
          }),
          (n.publish = function (t, n) {
            this.store.publish(t, n);
          }),
          t
        );
      })(),
      d = new u();
    ((l.WebBloksGlobalStateStore = u),
      (l.WebBloksGlobalStateDataModule = c),
      (l.GLOBAL_STATE_STORE = d));
  },
  98,
);
