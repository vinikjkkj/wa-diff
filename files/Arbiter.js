__d(
  "Arbiter",
  [
    "invariant",
    "ArbiterToken",
    "CallbackDependencyManager",
    "ErrorGuard",
    "EventEmitter",
    "EventEmitterWithHolding",
    "EventHolder",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e) {
      return Array.isArray(e) ? e : [e];
    }
    function c(e) {
      return e instanceof d || e === d ? e : d;
    }
    var d = (function () {
        function t() {
          var e = new (r("EventEmitter"))();
          ((this.$3 = new m()),
            (this.$2 = new (r("EventEmitterWithHolding"))(e, this.$3)),
            (this.$1 = new (r("CallbackDependencyManager"))()),
            (this.$4 = []));
        }
        var n = t.prototype;
        return (
          (n.subscribe = function (t, n, o) {
            var e = this;
            ((t = u(t)),
              t.forEach(function (e) {
                (e && typeof e == "string") || s(0, 1966, e);
              }),
              typeof n == "function" || s(0, 1967, n),
              (o = o || "all"),
              o === "new" || o === "all" || s(0, 1968, o));
            var a = t.map(function (t) {
              var r = function (o) {
                return e.$5(n, t, o);
              };
              if (((r.__SMmeta = n.__SMmeta), o === "new"))
                return e.$2.addListener(t, r);
              e.$4.push({});
              var a = e.$2.addRetroactiveListener(t, r);
              return (e.$4.pop(), a);
            });
            return new (r("ArbiterToken"))(this, a);
          }),
          (n.$5 = function (n, o, a) {
            var t = this.$4[this.$4.length - 1];
            if (t[o] !== !1) {
              var i = (e || (e = r("ErrorGuard"))).applyWithGuard(n, null, [
                o,
                a,
              ]);
              (i === !1 && this.$2.releaseCurrentEvent(), (t[o] = i));
            }
          }),
          (n.unsubscribeCurrentSubscription = function () {
            this.$2.removeCurrentListener();
          }),
          (n.releaseCurrentPersistentEvent = function () {
            this.$2.releaseCurrentEvent();
          }),
          (n.subscribeOnce = function (t, n, r) {
            var e = this,
              o = this.subscribe(
                t,
                function (t, r) {
                  return (e.unsubscribeCurrentSubscription(), n(t, r));
                },
                r,
              );
            return o;
          }),
          (n.unsubscribe = function (t) {
            (t.isForArbiterInstance(this) || s(0, 1969), t.unsubscribe());
          }),
          (n.inform = function (t, n, r) {
            var e = Array.isArray(t);
            ((t = u(t)), (r = r || "event"));
            var o = r === "state" || r === "persistent";
            this.$4.push({});
            for (var a = 0; a < t.length; a++) {
              var i = t[a];
              (i || s(0, 1970, i),
                this.$3.setHoldingBehavior(i, r),
                this.$2.emitAndHold(i, n),
                this.$6(i, n, o));
            }
            var l = this.$4.pop();
            return e ? l : l[t[0]];
          }),
          (n.query = function (t) {
            var e = this.$3.getHoldingBehavior(t);
            !e || e === "state" || s(0, 1971, t);
            var n = null;
            return (
              this.$3.emitToListener(t, function (e) {
                n = e;
              }),
              n
            );
          }),
          (n.registerCallback = function (t, n) {
            return typeof t == "function"
              ? this.$1.registerCallback(t, n)
              : this.$1.addDependenciesToExistingCallback(t, n);
          }),
          (n.$6 = function (t, n, r) {
            n !== null &&
              (r
                ? this.$1.satisfyPersistentDependency(t)
                : this.$1.satisfyNonPersistentDependency(t));
          }),
          (t.subscribe = function (n, r, o) {
            return t.prototype.subscribe.apply(c(this), arguments);
          }),
          (t.unsubscribeCurrentSubscription = function () {
            return t.prototype.unsubscribeCurrentSubscription.apply(c(this));
          }),
          (t.releaseCurrentPersistentEvent = function () {
            return t.prototype.releaseCurrentPersistentEvent.apply(c(this));
          }),
          (t.subscribeOnce = function (n, r, o) {
            return t.prototype.subscribeOnce.apply(c(this), arguments);
          }),
          (t.unsubscribe = function (n) {
            return t.prototype.unsubscribe.apply(c(this), arguments);
          }),
          (t.inform = function (n, r, o) {
            return t.prototype.inform.apply(c(this), arguments);
          }),
          (t.informSingle = function (n, r, o) {
            return t.prototype.inform.apply(c(this), arguments);
          }),
          (t.query = function (n) {
            return t.prototype.query.apply(c(this), arguments);
          }),
          (t.registerCallback = function (n, r) {
            return t.prototype.registerCallback.apply(c(this), arguments);
          }),
          (t.$6 = function (n, r, o) {
            return t.prototype.$6.apply(c(this), arguments);
          }),
          (t.$5 = function (n, r, o) {
            return t.prototype.$5.apply(c(this), arguments);
          }),
          t
        );
      })(),
      m = (function (e) {
        function t() {
          var t;
          return ((t = e.call(this) || this), (t.$ArbiterEventHolder1 = {}), t);
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.setHoldingBehavior = function (t, n) {
            this.$ArbiterEventHolder1[t] = n;
          }),
          (n.getHoldingBehavior = function (t) {
            return this.$ArbiterEventHolder1[t];
          }),
          (n.holdEvent = function (n) {
            var t = this.$ArbiterEventHolder1[n];
            if (
              (t !== "persistent" && this.$ArbiterEventHolder2(n),
              t !== "event")
            ) {
              for (
                var r,
                  o = arguments.length,
                  a = new Array(o > 1 ? o - 1 : 0),
                  i = 1;
                i < o;
                i++
              )
                a[i - 1] = arguments[i];
              return (r = e.prototype.holdEvent).call.apply(
                r,
                [this, n].concat(a),
              );
            }
          }),
          (n.$ArbiterEventHolder2 = function (t) {
            var e = this;
            this.emitToListener(t, function () {
              return e.releaseCurrentEvent();
            });
          }),
          (n.releaseEvent = function (n) {
            n && e.prototype.releaseEvent.call(this, n);
          }),
          t
        );
      })(r("EventHolder"));
    d.call(d);
    var p = d;
    l.default = p;
  },
  98,
);
