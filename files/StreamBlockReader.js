__d(
  "StreamBlockReader",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e,
      l = (function () {
        function t(t) {
          var r = this;
          if (!("getReader" in t)) {
            var o = new Error("No getReader method found on given object");
            throw (o.stack, o);
          }
          ((this.$3 = t.getReader()),
            (this.$1 = ""),
            (this.$2 = null),
            (this.$4 = !1),
            (this.$5 = "utf-8"),
            (this.$6 = ""),
            (this.$9 = !1),
            (this.$8 = function () {
              return (e || (e = n("Promise"))).reject(
                "Sorry, you are somehow using this too early.",
              );
            }),
            (this.$7 = new (e || (e = n("Promise")))(function (e) {
              r.$8 = e;
            })));
        }
        var r = t.prototype;
        return (
          (r.changeEncoding = function (t) {
            if (this.$2) {
              var e = new Error(
                "Decoder already in use, encoding cannot be changed",
              );
              throw (e.stack, e);
            }
            this.$5 = t;
          }),
          (r.$10 = function () {
            if (!self.TextDecoder) {
              var e = new Error("TextDecoder is not supported here");
              throw (e.stack, e);
            }
            return (
              this.$2 || (this.$2 = new self.TextDecoder(this.$5)),
              this.$2
            );
          }),
          (r.$11 = function () {
            if (this.$9) {
              var e = new Error(
                "Something else is already reading from this reader",
              );
              throw (e.stack, e);
            }
            this.$9 = !0;
          }),
          (r.$12 = function () {
            this.$9 = !1;
          }),
          (r.isDone = function () {
            return this.$4;
          }),
          (r.$13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.$6 !== "") {
                var e = this.$6;
                return ((this.$6 = ""), e);
              }
              if (this.isDone()) {
                var t = new Error("You cannot read from a stream that is done");
                throw (t.stack, t);
              }
              var n = yield this.$3.read(),
                r = n.done,
                o = n.value;
              return (
                (this.$4 = r),
                r && this.$8(),
                o ? this.$10().decode(o, { stream: !r }) : ""
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.readNextBlock = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.$11();
              var e = this.$13();
              return (this.$12(), e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.readUntilStringOrEnd = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return yield this.readUntilOneOfStringOrEnd_DO_NOT_USE([e]);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.readUntilStringOrThrow = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (!e) {
                  var t = new Error("cannot read empty string");
                  throw (t.stack, t);
                }
                this.$11();
                for (var n = "", r = 0; !this.isDone(); )
                  if (((n += yield this.$13()), !(n.length < e.length))) {
                    var o = n.substring(r).indexOf(e);
                    if (o !== -1)
                      return (
                        (o += r),
                        (this.$6 = n.substring(o + e.length)),
                        this.$12(),
                        n.substring(0, o)
                      );
                    r = n.length - e.length + 1;
                  }
                ((this.$6 = n), this.$12());
                var a = new Error("Breakpoint not found");
                throw (a.stack, a);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.readUntilOneOfStringOrEnd_DO_NOT_USE = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                this.$11();
                for (var t = ""; !this.isDone(); ) {
                  t += yield this.$13();
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                      o = t.indexOf(r);
                    if (o !== -1)
                      return (
                        (this.$6 = t.substring(o + r.length)),
                        this.$12(),
                        t.substring(0, o)
                      );
                  }
                }
                return (this.$12(), t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.waitUntilDone = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return this.$7;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    i.default = l;
  },
  66,
);
