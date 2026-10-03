__d(
  "WAWebHatchVmSession",
  [
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseChannel",
    "WAWebHatchNoiseVmTransport",
    "WAWebHatchVmApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.trim().replace(/:/g, "");
      return /^[0-9a-fA-F]{64}$/.test(t)
        ? o("WAWebHatchNoiseBytes").hexToBytes(t)
        : null;
    }
    function s(e) {
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
    function u(e) {
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
    var c = (function () {
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
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                this.disconnect();
                var n = this.$3,
                  a = t.trustedFingerprint,
                  i = null,
                  l;
                if (a == null)
                  l = u(function (e) {
                    i = e;
                  });
                else {
                  var c = e(a);
                  if (c == null)
                    return {
                      detail: "Trusted peer fingerprint is invalid",
                      kind: "Failure",
                    };
                  l = s(c);
                }
                var d = this.$4(l),
                  m;
                try {
                  m = yield d.connect({
                    abraToken: t.credentials.vmAuthToken,
                    notaryToken: t.credentials.notaryToken,
                    vmId: t.credentials.vmId,
                  });
                } catch (e) {
                  throw (d.close(), e);
                }
                return n !== this.$3
                  ? (d.close(),
                    { detail: "Connection was superseded", kind: "Failure" })
                  : a == null
                    ? (d.close(),
                      i != null
                        ? { fingerprint: i, kind: "NeedsTrust" }
                        : {
                            detail:
                              m.status === "failed"
                                ? m.detail
                                : "Noise peer fingerprint was not presented",
                            kind: "Failure",
                          })
                    : m.status === "failed"
                      ? (d.close(), { detail: m.detail, kind: "Failure" })
                      : ((this.$2 = d),
                        (this.$1 = new (o("WAWebHatchVmApi").WAWebHatchVmApi)(
                          r("WAWebHatchNoiseVmTransport").create(
                            m.transport,
                            t.credentials.vmAuthToken,
                          ),
                        )),
                        (this.$5 = t.credentials.vmId),
                        { kind: "Ready", vmId: t.credentials.vmId });
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          t
        );
      })(),
      d = new c();
    ((l.WAWebHatchVmSession = c), (l.waWebHatchVmSession = d));
  },
  98,
);
