__d(
  "WAWebHatchVmSession",
  [
    "WALogger",
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseChannel",
    "WAWebHatchNoiseVmTransport",
    "WAWebHatchVmApi",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c() {
      return Promise.resolve(!1);
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
          (this.$4 = new Map()),
          (this.$6 = null),
          (this.$5 = e));
      }
      var n = t.prototype;
      return (
        (n.connectedApi = function () {
          return this.$1;
        }),
        (n.connectedVmId = function () {
          return this.$6;
        }),
        (n.disconnect = function () {
          var e;
          ((this.$3 += 1),
            (e = this.$2) == null || e.close(),
            (this.$2 = null),
            (this.$1 = null),
            (this.$6 = null));
        }),
        (n.connect = async function (t) {
          this.disconnect();
          var e = this.$3,
            n = this.$5(this.$7(t.credentials.vmId)),
            r;
          try {
            r = await n.connect({
              abraToken: t.credentials.vmAuthToken,
              notaryToken: t.credentials.notaryToken,
              vmId: t.credentials.vmId,
            });
          } catch (e) {
            throw (n.close(), e);
          }
          return e !== this.$3
            ? (n.close(),
              {
                cause: "superseded",
                detail: "Connection was superseded",
                kind: "Failure",
              })
            : this.$8({
                acceptLanguage: t.acceptLanguage,
                channel: n,
                connected: r,
                credentials: t.credentials,
                generation: e,
              });
        }),
        (n.$7 = function (t) {
          var e = this;
          return async function (n) {
            try {
              await e.$9(t, n);
            } catch (e) {
              m(e);
            }
            return !0;
          };
        }),
        (n.$9 = async function (n, r) {
          var t = o("WAWebHatchNoiseBytes").bytesToHex(
              new Uint8Array(
                await crypto.subtle.digest("SHA-256", r.slice().buffer),
              ),
            ),
            a = this.$4.get(n);
          (this.$4.set(n, t),
            a != null &&
              a !== t &&
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: VM key changed",
                    ])),
                )
                .sendLogs("hatch-vm-key-changed"));
        }),
        (n.$10 = function (t) {
          t === this.$3 &&
            (this.disconnect(),
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-vm: channel failed, session reset",
                ])),
            ));
        }),
        (n.connectConfidential = async function (t) {
          this.disconnect();
          var e = this.$3,
            n = this.$5(c),
            r;
          try {
            r = await n.connect({
              abraToken: t.credentials.vmAuthToken,
              notaryToken: t.credentials.notaryToken,
              privateAuth: t.privateAuth,
              vmId: t.credentials.vmId,
            });
          } catch (e) {
            throw (n.close(), e);
          }
          return e !== this.$3
            ? (n.close(),
              {
                cause: "superseded",
                detail: "Connection was superseded",
                kind: "Failure",
              })
            : this.$8({
                acceptLanguage: t.acceptLanguage,
                channel: n,
                connected: r,
                credentials: t.credentials,
                generation: e,
              });
        }),
        (n.$8 = function (t) {
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
    function m(e) {
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
    var p = new d();
    ((l.WAWebHatchVmSession = d), (l.waWebHatchVmSession = p));
  },
  98,
);
