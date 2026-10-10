__d(
  "WAWebHatchBrowserControlSession",
  [
    "WALogger",
    "WAWebHatchBrowserControl",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      f = (function () {
        function t(e, t, n) {
          ((this.$1 = { kind: "watching" }),
            (this.$5 = 0),
            (this.$6 = null),
            (this.$7 = !1),
            (this.$8 = 0),
            (this.$10 = 0),
            (this.$11 = !1),
            (this.$12 = !1),
            (this.$2 = e),
            (this.$3 = t),
            (this.$4 = n),
            (this.$9 = 0));
        }
        var a = t.prototype;
        return (
          (a.getState = function () {
            return this.$1;
          }),
          (a.takeControl = function (t) {
            if (!(this.$12 || this.$6 != null)) {
              var e = this.$5;
              ((this.$6 = t), this.$13({ kind: "requesting" }), this.$14(t, e));
            }
          }),
          (a.releaseControl = function () {
            var e = this.$6,
              t = o("WAWebHatchBrowserControl").isDriving(this.$1) || this.$7;
            (this.$15(),
              e != null && t && this.$16(e).catch(g),
              this.$13({ kind: "watching" }));
          }),
          (a.close = function () {
            ((this.$12 = !0), this.releaseControl());
          }),
          (a.$14 = function (t, n) {
            n === this.$5 &&
              ((this.$11 = this.$10 > 0), this.$11 || this.$17(t).catch(g));
          }),
          (a.$17 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this.$5;
                this.$7 = !0;
                var r = yield this.$2.takeover(t);
                if (n === this.$5) {
                  if (((this.$7 = !1), r.kind !== "granted")) {
                    (o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-browser-control/takeover-refused result=",
                          "",
                        ])),
                      r.kind,
                    ),
                      this.$18(r));
                    return;
                  }
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-browser-control/granted",
                      ])),
                  ),
                    this.$19(r.lease, t));
                }
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.$19 = function (t, n) {
            var e = this,
              r = t.expiresAtMs - this.$3();
            if (r <= 0) {
              this.$20();
              return;
            }
            this.$21();
            var o = ++this.$5;
            ((this.$9 = self.setTimeout(function () {
              o === e.$5 && e.$20();
            }, r)),
              this.$22(t, n),
              this.$13({ kind: "driving", lease: t }));
          }),
          (a.$22 = function (t, n) {
            var e = this,
              r = this.$5,
              a = o("WAWebHatchBrowserControl").heartbeatDelayMs(
                t.expiresAtMs - this.$3(),
              );
            this.$8 = self.setTimeout(function () {
              r === e.$5 && ((e.$8 = 0), e.$23(t, n).catch(g));
            }, a);
          }),
          (a.$23 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = this.$5;
                if (this.$24(n, e)) {
                  var r = yield this.$2.heartbeat(t);
                  if (this.$24(n, e))
                    e: {
                      var a = r;
                      if (
                        ((typeof a == "object" && a !== null) ||
                          typeof a == "function") &&
                        a.kind === "granted" &&
                        "lease" in a
                      ) {
                        var i = a.lease;
                        this.$19(i, t);
                        break e;
                      }
                      if (
                        ((typeof a == "object" && a !== null) ||
                          typeof a == "function") &&
                        a.kind === "retry"
                      ) {
                        (o("WALogger").WARN(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "hatch-browser-control/renewal-failed",
                            ])),
                        ),
                          this.$22(e, t));
                        break e;
                      }
                      if (
                        (((typeof a == "object" && a !== null) ||
                          typeof a == "function") &&
                          a.kind === "heldByOther") ||
                        (((typeof a == "object" && a !== null) ||
                          typeof a == "function") &&
                          a.kind === "notControllable")
                      ) {
                        (o("WALogger").WARN(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "hatch-browser-control/lost-on-renewal result=",
                              "",
                            ])),
                          r.kind,
                        ),
                          this.$18(r));
                        break e;
                      }
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          a,
                      );
                    }
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$24 = function (t, n) {
            return t !== this.$5
              ? !1
              : this.$3() >= n.expiresAtMs
                ? (this.$20(), !1)
                : !0;
          }),
          (a.$20 = function () {
            (o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-browser-control/lease-expired",
                ])),
            ),
              this.$15(),
              this.$13({ kind: "expired" }));
          }),
          (a.$18 = function (t) {
            (this.$15(),
              this.$13(
                t.kind === "heldByOther"
                  ? { kind: "heldByOther" }
                  : t.kind === "notControllable"
                    ? { kind: "notControllable" }
                    : t.kind === "granted" || t.kind === "retry"
                      ? { kind: "watching" }
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              t.kind,
                          );
                        })(),
              ));
          }),
          (a.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                this.$10++;
                var t = yield this.$2.release(e).catch(function (e) {
                  return (g(e), !1);
                });
                (t ||
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-browser-control/release-failed",
                      ])),
                  ),
                  this.$10--);
                var n = this.$6;
                this.$11 && n != null && this.$14(n, this.$5);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$15 = function () {
            (this.$5++,
              (this.$6 = null),
              (this.$7 = !1),
              (this.$11 = !1),
              this.$21());
          }),
          (a.$21 = function () {
            (self.clearTimeout(this.$8),
              self.clearTimeout(this.$9),
              (this.$8 = 0),
              (this.$9 = 0));
          }),
          (a.$13 = function (t) {
            if (!o("WAWebHatchBrowserControl").isSameControlState(t, this.$1)) {
              this.$1 = t;
              try {
                this.$4(t);
              } catch (e) {
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-browser-control/listener-failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("hatch-browser-control-listener-failed");
              }
            }
          }),
          t
        );
      })();
    function g(e) {
      o("WALogger")
        .WARN(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-browser-control/call-failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("hatch-browser-control-call-failed");
    }
    l.default = f;
  },
  98,
);
