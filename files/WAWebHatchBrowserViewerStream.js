__d(
  "WAWebHatchBrowserViewerStream",
  ["WALogger", "asyncToGeneratorRuntime", "getErrorSafe"],
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
          ((this.$4 = null),
            (this.$5 = null),
            (this.$6 = !1),
            (this.$1 = e),
            (this.$2 = t),
            (this.$3 = n));
        }
        var a = t.prototype;
        return (
          (a.open = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                this.$4 = t;
                var n = yield this.$1().catch(function (t) {
                  return (
                    o("WALogger")
                      .WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "hatch-browser-viewer/connect-failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t))
                      .sendLogs("hatch-browser-viewer-connect-failed"),
                    null
                  );
                });
                if (!this.$6) {
                  if (n == null) {
                    (o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-browser-viewer/session-unavailable",
                        ])),
                    ),
                      this.$7({
                        kind: "sessionUnavailable",
                        reason: "connectFailed",
                      }));
                    return;
                  }
                  var a = yield this.$2.present(this.$3);
                  if (!this.$6) {
                    var i = g(a);
                    if (i != null) {
                      (o("WALogger").WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "hatch-browser-viewer/present-failed result=",
                            "",
                          ])),
                        a,
                      ),
                        this.$7(i));
                      return;
                    }
                    this.$8(n);
                  }
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.write = function (t) {
            var e = this.$5;
            e == null ||
              this.$6 ||
              t.length === 0 ||
              e.write(t) ||
              (o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-browser-viewer/write-refused",
                  ])),
              ),
              this.$7({ kind: "transportFailed" }));
          }),
          (a.close = function () {
            var e;
            this.$6 ||
              ((this.$6 = !0),
              (e = this.$5) == null || e.close(),
              (this.$5 = null));
          }),
          (a.$8 = function (t) {
            var e = this,
              n = t.openBrowserTaskAttach(this.$3, {
                onClose: function (n) {
                  (n != null &&
                    !e.$6 &&
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-browser-viewer/attach-stream-failed",
                        ])),
                    ),
                    e.$7(n == null ? null : { kind: "transportFailed" }));
                },
                onData: function (n) {
                  if (!e.$6) {
                    var t;
                    (t = e.$4) == null || t.onData(n);
                  }
                },
                onResponse: function (n) {
                  return e.$9(n);
                },
              });
            if (n == null) {
              (o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-browser-viewer/attach-refused",
                  ])),
              ),
                this.$7({ kind: "streamRefused" }));
              return;
            }
            if (this.$6) {
              n.close();
              return;
            }
            this.$5 = n;
          }),
          (a.$9 = function (t) {
            if (!this.$6) {
              if (t >= 200 && t <= 299) {
                var e;
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-browser-viewer/attached",
                    ])),
                ),
                  (e = this.$4) == null || e.onOpen());
                return;
              }
              (o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-browser-viewer/attach-failed status=",
                    "",
                  ])),
                t,
              ),
                this.$7(
                  t === 409 || t === 410
                    ? { kind: "liveViewUnavailable" }
                    : { kind: "unexpectedStatus", statusCode: t },
                ));
            }
          }),
          (a.$7 = function (t) {
            var e;
            this.$6 || (this.close(), (e = this.$4) == null || e.onClose(t));
          }),
          t
        );
      })();
    function g(e) {
      return e === "presented"
        ? null
        : e === "retry"
          ? { kind: "presentFailed" }
          : e === "unavailable"
            ? { kind: "sessionUnavailable", reason: "noChannel" }
            : e === "gone" || e === "previewRevoked"
              ? { kind: "liveViewUnavailable" }
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    l.default = f;
  },
  98,
);
