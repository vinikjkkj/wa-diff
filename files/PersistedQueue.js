__d(
  "PersistedQueue",
  [
    "AnalyticsCoreData",
    "BaseEventEmitter",
    "ExecutionEnvironment",
    "Run",
    "WebStorage",
    "WebStorageMutex",
    "cr:8958",
    "err",
    "guid",
    "nullthrows",
    "performanceAbsoluteNow",
    "requestAnimationFrame",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 864e5,
      m = 30 * 1e3,
      p = new (r("BaseEventEmitter"))(),
      _;
    function f(t) {
      if ((t === void 0 && (t = !1), _ === void 0)) {
        var n;
        if (
          (n = (e || (e = r("AnalyticsCoreData")))
            .queue_activation_experiment) != null &&
          n &&
          t
        )
          try {
            return (s || (s = r("WebStorage"))).getLocalStorageForRead();
          } catch (e) {
            return null;
          }
        var o = "check_quota";
        try {
          var a = (s || (s = r("WebStorage"))).getLocalStorage();
          a ? (a.setItem(o, o), a.removeItem(o), (_ = a)) : (_ = null);
        } catch (e) {
          _ = null;
        }
      }
      return _;
    }
    function g(e) {
      var t = e.prev,
        n = e.next;
      (n && (n.prev = t), t && (t.next = n), (e.next = null), (e.prev = null));
    }
    function h(e) {
      return { item: e, next: null, prev: null };
    }
    function y(e, t) {
      var n;
      return (
        e +
        "^$" +
        ((n = t == null ? void 0 : t.queueNameSuffix) != null ? n : "")
      );
    }
    var C = {},
      b = {},
      v = {},
      S = !1,
      R = (function () {
        function e(e, t) {
          var n,
            o = this;
          if (
            ((this.$7 = 0),
            (this.$3 = e),
            (this.$5 =
              (n = t == null ? void 0 : t.queueNameSuffix) != null ? n : ""),
            (this.$4 = y(e, t)),
            (this.$11 = this.$4 + "^$" + r("guid")()),
            (this.$14 = !1),
            t)
          ) {
            var a;
            ((this.$8 = (a = t.max_age_in_ms) != null ? a : d),
              (this.$12 = t.migrate),
              (this.$13 = t.onLoad));
          } else this.$8 = d;
          ((this.$9 = [
            p.addListener("active", function () {
              (o.$10 != null || !o.$14) &&
                ((o.$14 = !0), (o.$10 = null), o.$15());
            }),
            p.addListener("inactive", function () {
              o.$10 == null && ((o.$10 = Date.now()), o.$16());
            }),
          ]),
            ((u || (u = r("ExecutionEnvironment"))).canUseDOM ||
              (u || (u = r("ExecutionEnvironment"))).isInWorker) &&
              r("requestAnimationFrame")(function () {
                return o.$15();
              }));
        }
        var t = e.prototype;
        return (
          (t.isActive = function () {
            var e = this.$10;
            return e == null
              ? !0
              : Date.now() - e > m
                ? ((this.$10 = null), p.emit("active", null), !0)
                : !1;
          }),
          (t.$15 = function () {
            (this.$17(), this.$18());
          }),
          (t.$16 = function () {
            this.$19();
          }),
          (t.getFullName = function () {
            return this.$4;
          }),
          (t.getQueueNameSuffix = function () {
            return this.$5;
          }),
          (e.isQueueActivateExperiment = function () {
            return S;
          }),
          (e.setOnQueueActivateExperiment = function () {
            S = !0;
          }),
          (e.create = function (n, o) {
            var t = y(n, o);
            if (t in C) throw r("err")("Duplicate queue created: " + n);
            var a = new e(n, o);
            ((C[t] = a), v[n] ? v[n].push(a) : (v[n] = [a]));
            var i = b[n];
            return (i && a.setHandler(i), a);
          }),
          (e.setHandler = function (t, n) {
            if (v[t]) {
              var e = v[t];
              for (var r of e) r.setHandler(n);
            }
            b[t] = n;
          }),
          (t.destroy = function () {
            this.$9.forEach(function (e) {
              return e.remove();
            });
          }),
          (e.destroy = function (t, n) {
            var e = y(t, n);
            (C[e].destroy(), delete C[e]);
          }),
          (t.setHandler = function (t) {
            return ((this.$6 = t), this.$18(), this);
          }),
          (t.$18 = function () {
            this.$7 > 0 && this.$6 && this.$6(this);
          }),
          (t.length = function () {
            return this.$7;
          }),
          (t.enumeratedLength = function () {
            return this.$20().length;
          }),
          (e.isPersistenceAllowed = function () {
            var e = f();
            return !!e;
          }),
          (e.getSuffixesForKey = function (t) {
            var e = [];
            try {
              var n = f(!0);
              if (!n) return e;
              for (var r = t + "^$", o = 0; o < n.length; o++) {
                var a = n.key(o);
                if (typeof a == "string" && a.startsWith("mutex_falco_"))
                  n.removeItem(a);
                else if (typeof a == "string" && a.startsWith(r)) {
                  var i = a.split("^$");
                  if (i.length > 2) {
                    var l = i[1];
                    e.push(l);
                  } else e.push("");
                }
              }
            } catch (e) {}
            return e;
          }),
          (t.$17 = function () {
            var e = this,
              t = f(!0);
            if (t) {
              var o = this.$4 + "^$",
                a = new (r("WebStorageMutex"))(o),
                i = this.$12,
                l = this.$13;
              a.lock(function (a) {
                var s = Date.now() - e.$8;
                try {
                  for (var u = 0; u < t.length; u++) {
                    var c = t.key(u);
                    if (typeof c == "string" && c.startsWith(o)) {
                      var d = t.getItem(c);
                      if ((t.removeItem(c), d != null && d.startsWith("{"))) {
                        var m = n("cr:8958").parse(r("nullthrows")(d));
                        if (m.ts > s)
                          try {
                            for (var p of m.items) {
                              var _ = i != null ? i(p) : p;
                              ((_ = l != null ? l(p) : p), e.$21(_));
                            }
                          } catch (e) {}
                      }
                    }
                  }
                } catch (e) {}
                (a.unlock(), e.$18());
              });
            }
          }),
          (t.$19 = function () {
            var e = f();
            if (e) {
              var t = this.$20();
              if (t.length === 0) {
                e.getItem(this.$11) != null && e.removeItem(this.$11);
                return;
              }
              (s || (s = r("WebStorage"))).setItemGuarded(
                e,
                this.$11,
                n("cr:8958").stringify({
                  items: t.map(function (e) {
                    return e;
                  }),
                  ts: (c || (c = r("performanceAbsoluteNow")))(),
                }),
              );
            }
          }),
          (t.$20 = function () {
            var e = this.$1,
              t = [];
            if (!e) return t;
            do t.push(e.item);
            while ((e = e.prev));
            return t.reverse();
          }),
          (t.markItemAsCompleted = function (t) {
            var e = t.prev;
            (g(t),
              this.$1 === t && (this.$1 = e),
              this.$7--,
              this.isActive() || this.$19());
          }),
          (t.markItemAsFailed = function (t) {
            g(t);
            var e = this.$2;
            if (e) {
              var n = e.prev;
              (n && ((n.next = t), (t.prev = n)), (t.next = e), (e.prev = t));
            }
            ((this.$2 = t), this.isActive() && this.$18());
          }),
          (t.markItem = function (t, n) {
            n ? this.markItemAsCompleted(t) : this.markItemAsFailed(t);
          }),
          (t.$21 = function (t) {
            var e = h(t),
              n = this.$1;
            (n && ((n.next = e), (e.prev = n)),
              (this.$1 = e),
              this.$2 || (this.$2 = e),
              this.$7++);
          }),
          (t.wrapAndEnqueueItem = function (t) {
            (this.$21(t), this.isActive() ? this.$18() : this.$19());
          }),
          (t.dequeueItem = function () {
            if (this.$10 != null) return null;
            var e = this.$2;
            return e ? ((this.$2 = e.next), e) : null;
          }),
          e
        );
      })();
    if (
      ((R.eventEmitter = p), (u || (u = r("ExecutionEnvironment"))).canUseDOM)
    ) {
      var L = o("Run").maybeOnBeforeUnload(function () {
        (p.emit("inactive", null), L == null || L.remove());
      }, !1);
      if (!L)
        var E = o("Run").onUnload(function () {
          (p.emit("inactive", null), E.remove());
        });
    }
    l.default = R;
  },
  98,
);
