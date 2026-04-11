__d(
  "XPlatReactToasterStateManager",
  ["FBLogger", "clearTimeout", "removeFromArray", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    function s(e) {
      var t = !1;
      return function () {
        t || (e(), (t = !0));
      };
    }
    var u = (function () {
      function t(e) {
        var t = e.callbackScheduler,
          n = e.maxQueuedToasts,
          r = e.minimumDurationMs;
        ((this.$1 = 0),
          (this.$2 = new Map()),
          (this.$3 = []),
          (this.$4 = []),
          (this.$5 = null),
          (this.$7 = t),
          (this.$6 = n),
          (this.$8 = r));
      }
      var n = t.prototype;
      return (
        (n.setMinimumDurationMs = function (t) {
          this.$8 = t;
        }),
        (n.getMinimumDurationMs = function () {
          return this.$8;
        }),
        (n.push = function (t, n) {
          var e = "toast-" + this.$1++,
            r = {
              duration: n,
              expired: !1,
              id: e,
              shown: !1,
              timer: null,
              value: t,
            };
          return (this.$9({ node: r, type: "PUSH" }), e);
        }),
        (n.replace = function (t, n) {
          this.$9({ id: t, type: "REPLACE", value: n });
        }),
        (n.shown = function (t) {
          this.$9({ id: t, type: "SHOWN" });
        }),
        (n.delete = function (t) {
          this.$9({ id: t, type: "DELETE" });
        }),
        (n.expire = function (t) {
          this.$9({ id: t, type: "EXPIRE" });
        }),
        (n.hidden = function (t) {
          this.$9({ id: t, type: "HIDDEN" });
        }),
        (n.stopTimer = function (t) {
          this.$9({ id: t, type: "STOP_TIMER" });
        }),
        (n.resetTimer = function (t) {
          this.$9({ id: t, type: "RESET_TIMER" });
        }),
        (n.getState = function () {
          return Object.fromEntries(this.$2);
        }),
        (n.getEmptyState = function () {
          return e;
        }),
        (n.addListener = function (t) {
          var e = this;
          return (
            this.$3.push(t),
            {
              remove: s(function () {
                r("removeFromArray")(e.$3, t);
              }),
            }
          );
        }),
        (n.$10 = function (t) {
          (this.$5 == null || t.priority > this.$5.priority) && (this.$5 = t);
        }),
        (n.registerView = function (t, n) {
          var e = this;
          n === void 0 && (n = 1);
          var o = { handler: t, priority: n };
          return (
            this.$4.push(o),
            this.$10(o),
            this.$11(),
            {
              remove: s(function () {
                (r("removeFromArray")(e.$4, o),
                  e.$5 === o &&
                    ((e.$5 = null),
                    e.$4.forEach(function (t) {
                      return e.$10(t);
                    })));
              }),
            }
          );
        }),
        (n.$9 = function (t) {
          var e = this.$2;
          switch (t.type) {
            case "PUSH":
              {
                var n = t.node;
                if (
                  ((this.$2 = new Map(
                    [].concat(Array.from(this.$2), [[n.id, n]]),
                  )),
                  this.$6 !== 0)
                ) {
                  var r = Array.from(this.$2.values()).filter(function (e) {
                    return !e.shown && !e.expired;
                  });
                  if (r.length > this.$6) {
                    var o = r[0];
                    this.delete(o.id);
                  }
                }
              }
              break;
            case "SHOWN":
              if (this.$2.has(t.id) && !this.$12(t.id).shown) {
                var a = babelHelpers.extends({}, this.$12(t.id), { shown: !0 });
                this.$2 = new Map(
                  [].concat(Array.from(this.$2), [[t.id, this.$13(a)]]),
                );
              }
              break;
            case "EXPIRE":
              if (this.$2.has(t.id)) {
                var i = babelHelpers.extends({}, this.$12(t.id), {
                  expired: !0,
                });
                ((this.$2 = new Map(
                  [].concat(Array.from(this.$2), [[t.id, this.$14(i)]]),
                )),
                  this.$15(i));
              }
              break;
            case "HIDDEN":
              if (this.$2.has(t.id)) {
                var l = this.$12(t.id);
                (l.shown || l.expired) &&
                  ((this.$2 = new Map(this.$2)),
                  this.$2.delete(t.id),
                  this.$14(l));
              }
              break;
            case "DELETE":
              if (this.$2.has(t.id)) {
                var s = this.$12(t.id);
                ((this.$2 = new Map(this.$2)),
                  this.$2.delete(t.id),
                  this.$14(s));
              }
              break;
            case "REPLACE":
              if (this.$2.has(t.id)) {
                var u = this.$12(t.id);
                this.$2 = new Map(
                  [].concat(Array.from(this.$2), [
                    [t.id, babelHelpers.extends({}, u, { value: t.value })],
                  ]),
                );
              }
              break;
            case "STOP_TIMER":
              if (this.$2.has(t.id) && this.$16(this.$12(t.id))) {
                var c = babelHelpers.extends({}, this.$12(t.id));
                this.$2 = new Map(
                  [].concat(Array.from(this.$2), [[t.id, this.$14(c)]]),
                );
              }
              break;
            case "RESET_TIMER":
              if (this.$2.has(t.id) && !this.$16(this.$12(t.id))) {
                var d = babelHelpers.extends({}, this.$12(t.id));
                this.$2 = new Map(
                  [].concat(Array.from(this.$2), [[t.id, this.$13(d)]]),
                );
              }
              break;
            default:
              t.type;
          }
          e !== this.$2 && this.$11();
        }),
        (n.$11 = function () {
          var e = this;
          (this.$3.forEach(function (t) {
            return e.$7(function () {
              t();
            });
          }),
            this.$4.forEach(function (t) {
              return e.$7(function () {
                t.handler(t === e.$5 ? e.getState() : e.getEmptyState());
              });
            }));
        }),
        (n.$13 = function (t) {
          var e = this;
          if (t.duration !== null && t.timer == null) {
            var n = t.duration;
            (this.$8 != null && n != null && this.$8 > n && (n = this.$8),
              (t.timer = r("setTimeout")(function () {
                e.expire(t.id);
              }, n)));
          }
          return t;
        }),
        (n.$14 = function (t) {
          return (
            t.timer != null && (r("clearTimeout")(t.timer), (t.timer = null)),
            t
          );
        }),
        (n.$15 = function (t) {
          var e = this;
          this.$14(t);
          var n = t.id;
          r("setTimeout")(function () {
            e.delete(n);
          }, 1e3);
        }),
        (n.$16 = function (t) {
          return t.timer != null;
        }),
        (n.$12 = function (t) {
          var e = this.$2.get(t);
          if (e == null)
            throw r("FBLogger")("comet_ui").mustfixThrow(
              "Toast with given identifier was not found",
            );
          return e;
        }),
        (t.getInstance = function (n) {
          return (t.$17 == null && (t.$17 = new t(n)), t.$17);
        }),
        (t.resetInstance_DO_NOT_USE = function () {
          t.$17 = null;
        }),
        t
      );
    })();
    l.default = u;
  },
  98,
);
