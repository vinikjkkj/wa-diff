__d(
  "WAWebHatchVmSession",
  [
    "Promise",
    "WALogger",
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseChannel",
    "WAWebHatchNoiseVmTransport",
    "WAWebHatchVmApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d() {
      return (c || (c = n("Promise"))).resolve(!1);
    }
    var m = (function () {
      function t(e) {
        (e === void 0 &&
          (e = function (t) {
            return new (o("WAWebHatchNoiseChannel").WAWebHatchNoiseChannel)({
              attestationVerifier: t,
            });
          }),
          (this.$1 = null),
          (this.$2 = null),
          (this.$3 = 0),
          (this.$4 = new Map()),
          (this.$6 = null),
          (this.$5 = e));
      }
      var a = t.prototype;
      return (
        (a.connectedApi = function () {
          return this.$1;
        }),
        (a.connectedVmId = function () {
          return this.$6;
        }),
        (a.disconnect = function () {
          var e;
          ((this.$3 += 1),
            (e = this.$2) == null || e.close(),
            (this.$2 = null),
            (this.$1 = null),
            (this.$6 = null));
        }),
        (a.connect = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            this.disconnect();
            var t = this.$3,
              n = this.$5(this.$7(e.credentials.vmId)),
              r;
            try {
              r = yield n.connect({
                abraToken: e.credentials.vmAuthToken,
                notaryToken: e.credentials.notaryToken,
                vmId: e.credentials.vmId,
              });
            } catch (e) {
              throw (n.close(), e);
            }
            return t !== this.$3
              ? (n.close(),
                {
                  cause: "superseded",
                  detail: "Connection was superseded",
                  kind: "Failure",
                })
              : this.$8({
                  acceptLanguage: e.acceptLanguage,
                  channel: n,
                  connected: r,
                  credentials: e.credentials,
                  generation: t,
                });
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$7 = function (t) {
          var e = this;
          return (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                try {
                  yield e.$9(t, n);
                } catch (e) {
                  p(e);
                }
                return !0;
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        }),
        (a.$9 = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              var r = o("WAWebHatchNoiseBytes").bytesToHex(
                  new Uint8Array(
                    yield crypto.subtle.digest("SHA-256", n.slice().buffer),
                  ),
                ),
                a = this.$4.get(t);
              (this.$4.set(t, r),
                a != null &&
                  a !== r &&
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-vm: VM key changed",
                        ])),
                    )
                    .sendLogs("hatch-vm-key-changed"));
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (a.$10 = function (t) {
          t === this.$3 &&
            (this.disconnect(),
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-vm: channel failed, session reset",
                ])),
            ));
        }),
        (a.connectConfidential = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            this.disconnect();
            var t = this.$3,
              n = this.$5(d),
              r;
            try {
              r = yield n.connect({
                abraToken: e.credentials.vmAuthToken,
                notaryToken: e.credentials.notaryToken,
                privateAuth: e.privateAuth,
                vmId: e.credentials.vmId,
              });
            } catch (e) {
              throw (n.close(), e);
            }
            return t !== this.$3
              ? (n.close(),
                {
                  cause: "superseded",
                  detail: "Connection was superseded",
                  kind: "Failure",
                })
              : this.$8({
                  acceptLanguage: e.acceptLanguage,
                  channel: n,
                  connected: r,
                  credentials: e.credentials,
                  generation: t,
                });
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$8 = function (t) {
          var e = this,
            n = t.acceptLanguage,
            a = t.channel,
            i = t.connected,
            l = t.credentials,
            s = t.generation;
          if (i.status === "failed")
            return (
              a.close(),
              { cause: i.cause, detail: i.detail, kind: "Failure" }
            );
          var u = r("WAWebHatchNoiseVmTransport").create(
            i.transport,
            l.vmAuthToken,
            n,
            function () {
              return e.$10(s);
            },
          );
          return s !== this.$3
            ? (a.close(),
              {
                cause: "superseded",
                detail: "Noise channel failed",
                kind: "Failure",
              })
            : ((this.$2 = a),
              (this.$1 = new (o("WAWebHatchVmApi").WAWebHatchVmApi)(u)),
              (this.$6 = l.vmId),
              { kind: "Ready", vmId: l.vmId });
        }),
        t
      );
    })();
    function p(e) {
      try {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: VM key check failed",
              ])),
          )
          .sendLogs("hatch-vm-key-check-failed");
      } catch (e) {}
    }
    var _ = new m();
    ((l.WAWebHatchVmSession = m), (l.waWebHatchVmSession = _));
  },
  98,
);
