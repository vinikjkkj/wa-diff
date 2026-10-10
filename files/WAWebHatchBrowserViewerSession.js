__d(
  "WAWebHatchBrowserViewerSession",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebHatchBrowserControl",
    "WAWebHatchBrowserControlChrome",
    "WAWebHatchBrowserControlSession",
    "WAWebHatchBrowserRFBChannel",
    "WAWebHatchBrowserRFBFilter",
    "WAWebHatchBrowserTaskClient",
    "WAWebHatchBrowserViewerStream",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 65536,
      p = 1e3,
      _ = (function () {
        function t(e, t, n, a) {
          var i = this;
          (a === void 0 && (a = o("WATimeUtils").unixTimeMs),
            (this.$6 = new (r("WAWebHatchBrowserRFBFilter"))()),
            (this.$7 = null),
            (this.$8 = null),
            (this.$9 = !1),
            (this.$10 = null),
            (this.$11 = !1),
            (this.$12 = !1),
            (this.$13 = 0),
            (this.$14 = 0),
            (this.$1 = e),
            (this.$2 = t),
            (this.$3 = n),
            (this.$4 = new (r("WAWebHatchBrowserTaskClient"))(e, a)),
            (this.$5 = new (r("WAWebHatchBrowserControlSession"))(
              this.$4,
              a,
              function () {
                return i.$15();
              },
            )));
        }
        var a = t.prototype;
        return (
          (a.getState = function () {
            var e = this.$9 && this.$10 == null && !this.$11,
              t = this.$5.getState();
            return {
              chrome: o("WAWebHatchBrowserControlChrome").browserControlChrome(
                t,
                e,
              ),
              failure: this.$10,
              hasEnded: this.$11,
              isDriving: o("WAWebHatchBrowserControl").isDriving(t),
              isLoading: !e && this.$10 == null && !this.$11,
            };
          }),
          (a.openChannel = function () {
            var e = this;
            this.$16();
            var t = new (r("WAWebHatchBrowserRFBChannel"))(
              function (n) {
                e.$8 === t && e.$17(n);
              },
              function () {
                e.$8 === t && e.$16();
              },
            );
            if (((this.$8 = t), this.$11 || this.$12)) return t;
            ((this.$6 = new (r("WAWebHatchBrowserRFBFilter"))()),
              (this.$13 = 0),
              (this.$14 = 0),
              (this.$10 = null));
            var n = new (r("WAWebHatchBrowserViewerStream"))(
              this.$1,
              this.$4,
              this.$2,
            );
            return (
              (this.$7 = n),
              n.open({
                onClose: function (r) {
                  return e.$18(t, r);
                },
                onData: function (r) {
                  return e.$19(t, r);
                },
                onOpen: function () {
                  return t.opened();
                },
              }),
              this.$15(),
              t
            );
          }),
          (a.handleConnected = function (t) {
            this.$8 !== t || this.$7 == null || ((this.$9 = !0), this.$15());
          }),
          (a.handlePageFailure = function (t, n) {
            this.$8 === t &&
              (this.$16(), this.$20({ kind: "cannotOpen", detail: n }));
          }),
          (a.toggleControl = function () {
            o("WAWebHatchBrowserControl").isDriving(this.$5.getState())
              ? this.$5.releaseControl()
              : this.$5.takeControl(this.$2);
          }),
          (a.releaseControl = function () {
            this.$5.releaseControl();
          }),
          (a.stop = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = yield this.$4.stopUntilSettled(this.$2);
              return t === "failed"
                ? (o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-browser-viewer/stop-failed",
                      ])),
                  ),
                  !1)
                : (this.$21(), !0);
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.close = function () {
            ((this.$12 = !0), this.$16(), this.$5.close());
          }),
          (a.$17 = function (t) {
            var e = this.$7;
            if (e != null) {
              var n = this.$6.filter(t, this.getState().chrome.isInputEnabled);
              if (n.kind !== "forward") {
                this.$22(n);
                return;
              }
              (this.$23(), e.write(n.bytes));
            }
          }),
          (a.$22 = function (t) {
            (o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-browser-viewer/rfb-rejected kind=",
                  " type=",
                  "",
                ])),
              t.kind,
              t.messageType,
            ),
              this.$16(),
              this.$20({
                kind: "cannotOpen",
                detail: t.kind + " type=" + t.messageType,
              }));
          }),
          (a.$23 = function () {
            var e = this.$6.getSuppressedTypes();
            e.size !== this.$14 &&
              ((this.$14 = e.size),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-browser-viewer/input-suppressed types=",
                    "",
                  ])),
                Array.from(e).join(","),
              ));
          }),
          (a.$19 = function (t, n) {
            var e = this.$13;
            ((this.$13 += n.length),
              Math.floor(e / m) !== Math.floor(this.$13 / m) &&
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-browser-viewer/received bytes=",
                      "",
                    ])),
                  this.$13,
                ),
              t.received(n));
          }),
          (a.$18 = function (t, n) {
            if (
              ((this.$7 = null),
              (this.$9 = !1),
              this.$5.releaseControl(),
              n == null)
            ) {
              (this.$15(), t.closed(p));
              return;
            }
            (o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-browser-viewer/stream-closed error=",
                  "",
                ])),
              g(n),
            ),
              this.$20(f(n)),
              t.failed());
          }),
          (a.$20 = function (t) {
            this.$10 != null ||
              this.$11 ||
              ((this.$10 = t), this.$5.releaseControl(), this.$15());
          }),
          (a.$21 = function () {
            ((this.$11 = !0),
              (this.$10 = null),
              this.$16(),
              this.$5.close(),
              this.$15());
          }),
          (a.$16 = function () {
            var e;
            ((e = this.$7) == null || e.close(),
              (this.$7 = null),
              (this.$9 = !1));
          }),
          (a.$15 = function () {
            this.$12 || this.$3(this.getState());
          }),
          t
        );
      })();
    function f(e) {
      return e.kind === "liveViewUnavailable"
        ? { kind: "unavailable" }
        : { kind: "cannotOpen", detail: g(e) };
    }
    function g(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "sessionUnavailable" &&
          "reason" in e
        ) {
          var t = e.reason;
          return "sessionUnavailable(" + t + ")";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unexpectedStatus" &&
          "statusCode" in e
        ) {
          var n = e.statusCode;
          return "unexpectedStatus(" + n + ")";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "kind" in e
        ) {
          var r = e.kind;
          return r;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    l.default = _;
  },
  98,
);
