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
    var e;
    function s(e) {
      var t = e.trim().replace(/:/g, "");
      return /^[0-9a-fA-F]{64}$/.test(t)
        ? o("WAWebHatchNoiseBytes").hexToBytes(t)
        : null;
    }
    function u(e) {
      return (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length !== 32) return !1;
          var n = new Uint8Array(
            yield crypto.subtle.digest("SHA-256", t.slice().buffer),
          );
          return o("WAWebHatchNoiseBytes").constantTimeEqual(n, e);
        });
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
    }
    function c(e) {
      return (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length !== 32) return !1;
          var n = new Uint8Array(
            yield crypto.subtle.digest("SHA-256", t.slice().buffer),
          );
          return (e(o("WAWebHatchNoiseBytes").bytesToHex(n)), !1);
        });
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
    }
    var d = (function () {
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
            (this.$5 = null),
            (this.$4 = e));
        }
        var a = t.prototype;
        return (
          (a.connectedApi = function () {
            return this.$1;
          }),
          (a.connectedVmId = function () {
            return this.$5;
          }),
          (a.disconnect = function () {
            var e;
            ((this.$3 += 1),
              (e = this.$2) == null || e.close(),
              (this.$2 = null),
              (this.$1 = null),
              (this.$5 = null));
          }),
          (a.connect = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                this.disconnect();
                var n = this.$3,
                  a = e.trustedFingerprint,
                  i = null,
                  l;
                if (a == null)
                  l = c(function (e) {
                    i = e;
                  });
                else {
                  var d = s(a);
                  if (d == null)
                    return {
                      detail: "Trusted peer fingerprint is invalid",
                      kind: "Failure",
                    };
                  l = u(d);
                }
                var m = this.$4(l),
                  p;
                try {
                  p = yield m.connect({
                    abraToken: e.credentials.vmAuthToken,
                    notaryToken: e.credentials.notaryToken,
                    vmId: e.credentials.vmId,
                  });
                } catch (e) {
                  throw (m.close(), e);
                }
                if (n !== this.$3)
                  return (
                    m.close(),
                    { detail: "Connection was superseded", kind: "Failure" }
                  );
                if (a == null)
                  return (
                    m.close(),
                    i != null
                      ? { fingerprint: i, kind: "NeedsTrust" }
                      : {
                          detail:
                            p.status === "failed"
                              ? p.detail
                              : "Noise peer fingerprint was not presented",
                          kind: "Failure",
                        }
                  );
                if (p.status === "failed")
                  return (m.close(), { detail: p.detail, kind: "Failure" });
                var _ = r("WAWebHatchNoiseVmTransport").create(
                  p.transport,
                  e.credentials.vmAuthToken,
                  e.acceptLanguage,
                  function () {
                    return t.$6(n);
                  },
                );
                return n !== this.$3
                  ? (m.close(),
                    { detail: "Noise channel failed", kind: "Failure" })
                  : ((this.$2 = m),
                    (this.$1 = new (o("WAWebHatchVmApi").WAWebHatchVmApi)(_)),
                    (this.$5 = e.credentials.vmId),
                    { kind: "Ready", vmId: e.credentials.vmId });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$6 = function (n) {
            n === this.$3 &&
              (this.disconnect(),
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-vm: channel failed, session reset",
                  ])),
              ));
          }),
          t
        );
      })(),
      m = new d();
    ((l.WAWebHatchVmSession = d), (l.waWebHatchVmSession = m));
  },
  98,
);
