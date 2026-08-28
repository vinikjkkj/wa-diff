__d(
  "hyperionUtil",
  ["hyperionGlobals", "hyperionTimedTrigger"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      try {
        t = window[e];
        var n = "__storage_test__";
        return (t.setItem(n, n), t.removeItem(n), t);
      } catch (e) {
        return {
          getItem: function (t) {
            return null;
          },
          setItem: function (t, n) {},
        };
      }
    }
    var s = e("sessionStorage"),
      u = e("localStorage"),
      c = 20,
      d = 200,
      m = function () {
        var e = this;
        ((this.runner = null),
          (this.pending = new Set()),
          (this.schedule = function (t) {
            var n = function (r) {
              o("hyperionGlobals").assert(
                !e.runner,
                "Invalid state! First call should not have runner",
              );
              var t = (e.runner = new (o("hyperionTimedTrigger").TimedTrigger)(
                function () {
                  for (var t of e.pending) t.save();
                  (e.pending.clear(), (e.runner = null), (e.schedule = n));
                },
                o("hyperionGlobals").getFlags().optimizePersistentData ? d : c,
              ));
              typeof window == "object" &&
                typeof window.addEventListener == "function" &&
                window.addEventListener("beforeUnload", function () {
                  (t.run(),
                    (e.schedule = function (e) {
                      e.save();
                    }));
                });
              var a = function (r) {
                (e.pending.add(r),
                  o("hyperionGlobals").getFlags().optimizePersistentData
                    ? t.isDone() && t.run()
                    : t.delay());
              };
              (e.pending.add(r), (e.schedule = a));
            };
            n(t);
          }));
      },
      p = (function () {
        function e(e, t, n, r, o, a) {
          ((this.fieldName = e),
            (this.stringify = n),
            (this.saveImmediately = o),
            (this.storage = a));
          var i = this.storage.getItem(this.fieldName),
            l;
          if (!i) ((l = t()), this.setValue(l));
          else
            try {
              l = r(i);
            } catch (e) {
              l = t();
            }
          this.$1 = l;
        }
        var t = e.prototype;
        return (
          (t.save = function () {
            this.storage.setItem(this.fieldName, this.stringify(this.$1));
          }),
          (t.getValue = function () {
            return this.$1;
          }),
          (t.setValue = function (n) {
            return (
              (this.$1 = n),
              this.saveImmediately ? this.save() : e.scheduler.schedule(this),
              n
            );
          }),
          e
        );
      })();
    p.scheduler = new m();
    var _ = (function (e) {
        function t(t, n, r, o, a) {
          return (
            a === void 0 && (a = !1),
            e.call(this, t, n, r, o, a, s) || this
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(p),
      f = (function (e) {
        function t(t, n, r, o, a) {
          return (
            a === void 0 && (a = !1),
            e.call(this, t, n, r, o, a, u) || this
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(p),
      g = (function () {
        function e(e) {
          (e === void 0 && (e = ""), (this.cookieAttributes = e));
        }
        var t = e.prototype;
        return (
          (t.getItem = function (t) {
            var e = document.cookie.match(new RegExp(t + "=([^;]*)(?:;|$)"));
            return e && e.length > 1 ? e[1] : null;
          }),
          (t.setItem = function (t, n) {
            document.cookie = t + "=" + n + this.cookieAttributes;
          }),
          e
        );
      })(),
      h = (function (e) {
        function t(t, n, r, o, a) {
          return e.call(this, t, n, r, o, !0, new g(a)) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(p),
      y = (function () {
        if (typeof globalThis == "object" && globalThis.crypto) {
          var e = (function () {
              function e(e) {
                (e === void 0 && (e = 1024),
                  (this.$1 = new Uint32Array(e)),
                  (this.$2 = 0),
                  crypto.getRandomValues(this.$1));
              }
              var t = e.prototype;
              return (
                (t.next = function () {
                  var e = this.$1[this.$2++];
                  return (
                    this.$2 === this.$1.length &&
                      (crypto.getRandomValues(this.$1), (this.$2 = 0)),
                    e
                  );
                }),
                e
              );
            })(),
            t = new e(50);
          return function () {
            return t.next().toString(16);
          };
        } else
          return function () {
            return (Math.random() * (1 << 30)).toString(16).replace(".", "");
          };
      })();
    function C() {
      return "f" + y();
    }
    var b = new _(
        "alcsid",
        C,
        function (e) {
          return e;
        },
        function (e) {
          return e;
        },
        !0,
      ).getValue(),
      v = (function () {
        function e(e) {
          (e === void 0 && (e = ""), (this.$1 = null), (this.name = e));
        }
        var t = e.prototype;
        return (
          (t.isSet = function () {
            return this.$1 !== null;
          }),
          (t.get = function () {
            return (
              o("hyperionGlobals").assert(
                this.$1 !== null,
                this.name + " instance read before set",
                {
                  logger: {
                    error: function (t) {
                      throw t;
                    },
                  },
                },
              ),
              this.$1
            );
          }),
          (t.set = function (t) {
            (o("hyperionGlobals").assert(
              !this.isSet(),
              this.name + " instance can only be set once.",
            ),
              (this.$1 = t));
          }),
          e
        );
      })();
    ((l.ClientSessionID = b),
      (l.CookiePersistentData = h),
      (l.CookieStorage = g),
      (l.LocalStoragePersistentData = f),
      (l.SafeGetterSetter = v),
      (l.SessionPersistentData = _),
      (l.guid = C));
  },
  98,
);
