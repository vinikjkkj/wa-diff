__d(
  "WAWebHatchVmSession",
  [
    "WALogger",
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseChannel",
    "WAWebHatchNoiseVmTransport",
    "WAWebHatchVmApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function () {
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
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                this.disconnect();
                var n = this.$3,
                  a = this.$5(this.$7(e.credentials.vmId)),
                  i;
                try {
                  i = yield a.connect({
                    abraToken: e.credentials.vmAuthToken,
                    notaryToken: e.credentials.notaryToken,
                    vmId: e.credentials.vmId,
                  });
                } catch (e) {
                  throw (a.close(), e);
                }
                if (n !== this.$3)
                  return (
                    a.close(),
                    {
                      cause: "superseded",
                      detail: "Connection was superseded",
                      kind: "Failure",
                    }
                  );
                if (i.status === "failed")
                  return (
                    a.close(),
                    { cause: i.cause, detail: i.detail, kind: "Failure" }
                  );
                var l = r("WAWebHatchNoiseVmTransport").create(
                  i.transport,
                  e.credentials.vmAuthToken,
                  e.acceptLanguage,
                  function () {
                    return t.$8(n);
                  },
                );
                return n !== this.$3
                  ? (a.close(),
                    {
                      cause: "superseded",
                      detail: "Noise channel failed",
                      kind: "Failure",
                    })
                  : ((this.$2 = a),
                    (this.$1 = new (o("WAWebHatchVmApi").WAWebHatchVmApi)(l)),
                    (this.$6 = e.credentials.vmId),
                    { kind: "Ready", vmId: e.credentials.vmId });
              },
            );
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
                    d(e);
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
          (a.$8 = function (t) {
            t === this.$3 &&
              (this.disconnect(),
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-vm: channel failed, session reset",
                  ])),
              ));
          }),
          t
        );
      })();
    function d(e) {
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
    var m = new c();
    ((l.WAWebHatchVmSession = c), (l.waWebHatchVmSession = m));
  },
  98,
);
