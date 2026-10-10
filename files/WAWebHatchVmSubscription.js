__d(
  "WAWebHatchVmSubscription",
  [
    "WALogger",
    "WATypeUtils",
    "WAWebHatchJsonReaders",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 1e3,
      g = 3e4,
      h = 5e3,
      y = 4 * 1024 * 1024,
      C = new Set([403, 404]),
      b = 10,
      v = 13,
      S = (function () {
        function t(e) {
          var t;
          ((this.$3 = !1),
            (this.$4 = null),
            (this.$5 = 0),
            (this.$6 = null),
            (this.$7 = !1),
            (this.$8 = 0),
            (this.$9 = null),
            (this.$10 = []),
            (this.$11 = 0),
            (this.$12 = new TextDecoder()),
            (this.$1 = e),
            (this.$2 =
              (t = e.clock) != null
                ? t
                : function () {
                    return self.performance.now();
                  }));
        }
        var r = t.prototype;
        return (
          (r.start = function () {
            this.$3 || ((this.$3 = !0), (this.$8 = 0), this.$13());
          }),
          (r.stop = function () {
            this.$3 && ((this.$3 = !1), this.$14(), this.$15());
          }),
          (r.$13 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!(!this.$3 || this.$4 != null)) {
                var t = ++this.$5,
                  n = yield this.$1
                    .connect()
                    .catch(o("WAWebNullFunc").returnNull);
                if (!(!this.$3 || this.$4 != null || t !== this.$5)) {
                  if (n == null) {
                    (this.$16(
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "hatch-vm-subscription/session-failed kind=",
                            "",
                          ])),
                        this.$1.kind,
                      ),
                      "hatch-vm-subscription-session-failed",
                    ),
                      this.$17());
                    return;
                  }
                  this.$18(n, t);
                }
              }
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.$18 = function (t, n) {
            var e = this,
              r = function () {
                return n === e.$5 && e.$4 != null;
              },
              a = this.$1.open(t, {
                onClose: function (n) {
                  r() && e.$19(n != null);
                },
                onData: function (n) {
                  r() && e.$6 != null && e.$20(n, r);
                },
                onResponse: function (n) {
                  r() && e.$21(n);
                },
              });
            if (a == null) {
              (this.$16(
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm-subscription/stream-refused kind=",
                      "",
                    ])),
                  this.$1.kind,
                ),
                "hatch-vm-subscription-stream-refused",
              ),
                this.$17());
              return;
            }
            this.$4 = a;
          }),
          (r.$21 = function (t) {
            var e = this.$1.kind;
            if (t < 200 || t > 299) {
              if (
                (this.$16(
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-vm-subscription/refused kind=",
                        " status=",
                        "",
                      ])),
                    e,
                    t,
                  ),
                  "hatch-vm-subscription-refused",
                ),
                C.has(t))
              ) {
                this.stop();
                return;
              }
              (this.$15(), this.$17());
              return;
            }
            ((this.$6 = this.$2()),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-vm-subscription/opened kind=",
                    " resubscribed=",
                    "",
                  ])),
                e,
                String(this.$7),
              ),
              this.$7 && this.$1.onResubscribed(),
              (this.$7 = !0));
          }),
          (r.$20 = function (t, n) {
            for (var e = 0, r = t.indexOf(b); r !== -1; ) {
              var o = e === 0 ? this.$11 : 0;
              if (o + r - e > y) {
                this.$22(o + r - e);
                return;
              }
              if ((this.$23(e === 0 ? this.$24(t, r) : t.subarray(e, r)), !n()))
                return;
              ((e = r + 1), (r = t.indexOf(b, e)));
            }
            this.$25(t.slice(e));
          }),
          (r.$24 = function (t, n) {
            var e = t.subarray(0, n);
            if (this.$10.length === 0) return e;
            var r = E([].concat(this.$10, [e]));
            return ((this.$10 = []), (this.$11 = 0), r);
          }),
          (r.$25 = function (t) {
            t.length !== 0 &&
              (this.$10.push(t),
              (this.$11 += t.length),
              this.$11 > y && this.$22(this.$11));
          }),
          (r.$22 = function (t) {
            (o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-vm-subscription/line-too-long kind=",
                    " bytes=",
                    "",
                  ])),
                this.$1.kind,
                t,
              )
              .sendLogs("hatch-vm-subscription-line-too-long"),
              this.$15(),
              this.$17());
          }),
          (r.$23 = function (t) {
            var e,
              n = t[t.length - 1] === v ? t.subarray(0, -1) : t;
            if (n.length !== 0) {
              var r = L(this.$12.decode(n)),
                a = o("WAWebHatchJsonReaders").readField(r, "event");
              if (!o("WATypeUtils").isString(a)) {
                o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-vm-subscription/line-undecodable kind=",
                        " bytes=",
                        "",
                      ])),
                    this.$1.kind,
                    n.length,
                  )
                  .sendLogs("hatch-vm-subscription-line-undecodable");
                return;
              }
              var i = o("WAWebHatchJsonReaders").readField(r, "type");
              (i != null && i !== "event") ||
                this.$1.onEvent({
                  name: a,
                  payload: o("WAWebHatchJsonReaders").readField(r, "payload"),
                  tsMs:
                    (e = o("WAWebHatchJsonReaders").readNumber(r, "ts_ms")) !=
                    null
                      ? e
                      : 0,
                });
            }
          }),
          (r.$19 = function (t) {
            !t && this.$11 > 0 && this.$23(E(this.$10));
            var e = this.$6,
              n = e != null && this.$2() - e >= h;
            this.$15();
            var r = this.$1.kind;
            (n
              ? (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm-subscription/ended kind=",
                      " failed=",
                      "",
                    ])),
                  r,
                  String(t),
                ),
                (this.$8 = 0))
              : (this.$16(
                  o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-vm-subscription/dropped kind=",
                        " failed=",
                        "",
                      ])),
                    r,
                    String(t),
                  ),
                  "hatch-vm-subscription-dropped",
                ),
                this.$8++),
              this.$26());
          }),
          (r.$16 = function (t, n) {
            this.$8 === 0 && t.sendLogs(n);
          }),
          (r.$17 = function () {
            (this.$8++, this.$26());
          }),
          (r.$26 = function () {
            var e = this;
            if (this.$3) {
              this.$14();
              var t = R(this.$8);
              if (t === 0) {
                this.$13();
                return;
              }
              this.$9 = self.setTimeout(function () {
                ((e.$9 = null), e.$13());
              }, t);
            }
          }),
          (r.$14 = function () {
            this.$9 != null && (self.clearTimeout(this.$9), (this.$9 = null));
          }),
          (r.$15 = function () {
            this.$5++;
            var e = this.$4;
            ((this.$4 = null),
              (this.$6 = null),
              (this.$10 = []),
              (this.$11 = 0),
              e == null || e.close());
          }),
          t
        );
      })();
    function R(e) {
      return e <= 0 ? 0 : Math.min(f * Math.pow(2, e - 1), g);
    }
    function L(e) {
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    function E(e) {
      var t = new Uint8Array(
          e.reduce(function (e, t) {
            return e + t.length;
          }, 0),
        ),
        n = 0;
      for (var r of e) (t.set(r, n), (n += r.length));
      return t;
    }
    l.default = S;
  },
  98,
);
