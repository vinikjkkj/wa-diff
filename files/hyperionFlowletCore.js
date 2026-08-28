__d(
  "hyperionFlowletCore",
  ["hyperionCore", "hyperionGlobals", "hyperionHook", "hyperionTimedTrigger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (e || (e = o("hyperionHook"))).Hook(),
      c = 0,
      d = 1e3,
      m = (function () {
        function e(e, t) {
          var n;
          ((this.id = c++),
            (this.$1 = null),
            (this.name = e),
            (this.parent = t),
            (this.data = Object.create(
              (n = t == null ? void 0 : t.data) != null ? n : null,
            )),
            u.call(this));
        }
        var t = e.prototype;
        return (
          (t.getFullName = function () {
            if (!this.$1) {
              for (
                var e, t = [this], n = 0, r = this.parent;
                r && !r.$1 && n < d;
              )
                (t.push(r), ++n, (r = r.parent));
              for (
                var o = r ? ((e = r.$1) != null ? e : "...") : "",
                  a = t.length - 1;
                a >= 0;
                --a
              ) {
                var i = t[a];
                i.$1 = o = o + "/" + i.name + ":" + i.id;
              }
            }
            return this.$1;
          }),
          (t.fork = function (n) {
            return new e(n, this);
          }),
          (t.toString = function () {
            return this.getFullName();
          }),
          e
        );
      })();
    function p(e) {
      return (
        typeof e == "object" &&
        (!e.handleEvent || typeof e.handleEvent == "function")
      );
    }
    function _(e) {
      var t;
      if (e)
        return (
          p(e)
            ? e.handleEvent &&
              ((t = (s || (s = o("hyperionCore"))).interceptFunction(
                e.handleEvent,
              )),
              (e.handleEvent = t.interceptor))
            : (t = (s || (s = o("hyperionCore"))).interceptFunction(e)),
          t
        );
    }
    var f = "__isFlowletSetup",
      g = "__flowletData",
      h = 3e3,
      y = 100,
      C = 10,
      b = (function () {
        function t(t) {
          ((this.$1 = []),
            (this.$2 = null),
            (this.$3 = new Set()),
            (this.$4 = null),
            (this.onPush = new (e || (e = o("hyperionHook"))).Hook()),
            (this.onPop = new e.Hook()),
            (this.flowletCtor = t),
            (this.root = new t("/")),
            this.scheduleCleanup());
        }
        var n = t.prototype;
        return (
          (n.scheduleCleanup = function () {
            var e = this,
              t = this.onPush.add(function () {
                e.stackSize() > y &&
                  !e.$4 &&
                  (e.onPush.remove(t),
                  (e.$4 = new (o("hyperionTimedTrigger").TimedTrigger)(
                    function (t) {
                      e.$4 = null;
                      var n = !t;
                      (e.cleanup(n), e.scheduleCleanup());
                    },
                    h,
                    !0,
                  )));
              });
          }),
          (n.cleanup = function (t) {
            var e = this;
            if (t) {
              if (this.stackSize() > 0) {
                var n, r;
                ((n = (r = o("hyperionGlobals").getLogger()).warn) == null ||
                  n.call(
                    r,
                    "Flushed all pending flowlets from stack of size: ",
                    this.stackSize(),
                  ),
                  (this.$1 = []));
              }
            } else
              this.stackSize() > C &&
                this.$3.size > 0 &&
                (this.popIf(function (t) {
                  return e.$3.has(t);
                }),
                this.$3.clear());
          }),
          (n.top = function () {
            var e;
            return (e = this.$2) != null ? e : this.root;
          }),
          (n.updateTop = function () {
            var e = this.$1.length - 1;
            this.$2 = e >= 0 ? this.$1[e] : null;
          }),
          (n.stackSize = function () {
            return this.$1.length;
          }),
          (n.push = function (t, n) {
            var e = n && this.flowletCtor ? new this.flowletCtor(n, t) : t;
            return (
              this.onPush.call(t, n, e),
              this.$1.push(e),
              this.updateTop(),
              e
            );
          }),
          (n.popIf = function (t) {
            ((this.$1 = this.$1.filter(t)), this.updateTop());
          }),
          (n.pop = function (t, n) {
            var e = this.top();
            if (!t) return e;
            var r;
            return (
              e === t
                ? (this.$1.pop(), this.updateTop(), (r = !0))
                : ((r = !1), this.$3.add(t)),
              this.onPop.call(t, r, n),
              e
            );
          }),
          (n.wrap = function (t, n, r) {
            if (!t) return t;
            var e = _(t);
            if (!e) return t;
            var a = this.top();
            if (e.testAndSet(f)) {
              var i = e.getData(g);
              if (
                (o("hyperionGlobals").assert(
                  i != null,
                  "Flowlet data is not set on the interceptor! This should never happen!",
                ),
                o("hyperionGlobals").getFlags().verboseFlowletLogs &&
                  i.getTriggerFlowlet !== r &&
                  "" + n,
                o("hyperionGlobals").getFlags().preciseTriggerFlowlet &&
                  (i.getTriggerFlowlet !== r ||
                    (!i.getTriggerFlowlet &&
                      i.callFlowlet.data.triggerFlowlet !==
                        a.data.triggerFlowlet)))
              ) {
                var l = p(t)
                  ? function () {
                      return t.handleEvent.apply(this, arguments);
                    }
                  : function () {
                      return t.apply(this, arguments);
                    };
                return this.wrap(l, n, r);
              }
            } else {
              var s = new this.flowletCtor(n, this.top());
              if (!r) {
                var u,
                  c = (u = s.parent) == null ? void 0 : u.data.triggerFlowlet;
                c && (s.data.triggerFlowlet = c);
              }
              var d = this;
              (e.setData(g, { getTriggerFlowlet: r, callFlowlet: s }),
                e.setCustom(function () {
                  var t = e.getOriginal();
                  if (
                    !o("hyperionGlobals").getFlags().preciseTriggerFlowlet ||
                    r
                  ) {
                    var a = r == null ? void 0 : r.apply(this, arguments);
                    a
                      ? (s.data.triggerFlowlet = a)
                      : delete s.data.triggerFlowlet;
                  }
                  if (d.top() === s) return t.apply(this, arguments);
                  var i;
                  try {
                    (d.push(s), (i = t.apply(this, arguments)));
                  } finally {
                    d.pop(s, n);
                  }
                  return i;
                }));
            }
            return p(t) || !e ? t : e.interceptor;
          }),
          (n.mark = function (t, n) {
            if (!t) return t;
            var e = (s || (s = o("hyperionCore"))).interceptFunction(t);
            if (e && !e.testAndSet(f)) {
              var r = this;
              e.setCustom(function () {
                var t = e.getOriginal(),
                  o = n.apply(this, arguments),
                  a = new r.flowletCtor(o, r.top()),
                  i;
                try {
                  (r.push(a), (i = t.apply(this, arguments)));
                } finally {
                  r.pop(a);
                }
                return i;
              });
            }
            return e.interceptor;
          }),
          (n.getWrappedOrOriginal = function (t) {
            if (t && !p(t)) {
              var e = (s || (s = o("hyperionCore"))).getFunctionInterceptor(t);
              if (e) return e.interceptor;
            }
            return t;
          }),
          t
        );
      })();
    function v(e, t) {
      ((t.data.triggerFlowlet = t), (e.__ext_triggerFlowlet = t));
    }
    function S(e) {
      return e == null ? void 0 : e.__ext_triggerFlowlet;
    }
    ((l.Flowlet = m),
      (l.FlowletManager = b),
      (l.getTriggerFlowlet = S),
      (l.onFlowletInit = u),
      (l.setTriggerFlowlet = v));
  },
  98,
);
