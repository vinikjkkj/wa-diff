__d(
  "WAWebHatchVmCredentialsResolver",
  [
    "Promise",
    "WALogger",
    "WAWebHatchMuseAuthCredentials",
    "WAWebHatchVmFetcher",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 6e4,
      c = (function () {
        function t(e) {
          var t, n, r;
          ((this.$1 = null),
            (this.$2 = null),
            (this.$5 = 0),
            (this.$6 = null),
            (this.$3 =
              (t = e.clock) != null
                ? t
                : function () {
                    return Date.now();
                  }),
            (this.$4 = new (o("WAWebHatchVmFetcher").WAWebHatchVmFetcher)(
              (n = e.fetch) != null ? n : m,
              this.$3,
            )),
            (this.$7 = e.mintAbraToken),
            (this.$8 =
              (r = e.readPastedAbraToken) != null
                ? r
                : o("WAWebHatchMuseAuthCredentials")
                    .readHatchMuseAuthAbraToken));
        }
        var r = t.prototype;
        return (
          (r.resolve = function () {
            var t = this,
              r = this.$2;
            if (r != null && r.expiresAtMs - u > this.$3())
              return (s || (s = n("Promise"))).resolve({
                credentials: r.credentials,
                kind: "ok",
                state: r.state,
              });
            var a = this.$6;
            if (a != null) return a;
            var i = this.$9(this.$5)
              .catch(function () {
                return (
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-vm-credentials: resolve threw",
                        ])),
                    )
                    .sendLogs("hatch-vm-credentials-resolve-threw"),
                  { detail: "VM credential resolve failed", kind: "failure" }
                );
              })
              .finally(function () {
                t.$6 === i && (t.$6 = null);
              });
            return ((this.$6 = i), i);
          }),
          (r.invalidate = function () {
            (this.$5++, (this.$1 = null), (this.$2 = null), (this.$6 = null));
          }),
          (r.$9 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = (t = this.$1) != null ? t : this.$8(),
                  r = n != null ? n : yield this.$10(e);
                if (r == null)
                  return {
                    detail: "ABRA token could not be minted",
                    kind: "failure",
                  };
                var o = r,
                  a = yield this.$4.fetch(o);
                if (a.kind === "unauthorized" && n != null) {
                  this.$11(n, e);
                  var i = yield this.$10(e);
                  if (i == null) return { detail: a.detail, kind: "failure" };
                  ((o = i), (a = yield this.$4.fetch(o)));
                }
                if (
                  (a.kind === "unauthorized" && this.$11(o, e), a.kind !== "ok")
                )
                  return { detail: a.detail, kind: "failure" };
                var l = d(a.entries);
                if (l == null)
                  return {
                    detail: "fetch_vms returned no usable VM",
                    kind: "failure",
                  };
                if (e !== this.$5)
                  return {
                    detail: "Superseded by an account change",
                    kind: "failure",
                  };
                var s = {
                  notaryToken: l.notaryToken,
                  vmAuthToken: l.vmAuthToken,
                  vmId: l.vmId,
                };
                return (
                  (this.$2 = {
                    credentials: s,
                    expiresAtMs: l.notaryExpiresAtMs,
                    state: l.state,
                  }),
                  { credentials: s, kind: "ok", state: l.state }
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$10 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$7();
                return t.kind !== "ok"
                  ? null
                  : (e === this.$5 && (this.$1 = t.token), t.token);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$11 = function (t, n) {
            n === this.$5 && this.$1 === t && (this.$1 = null);
          }),
          t
        );
      })();
    function d(e) {
      var t;
      return (t = e.find(function (e) {
        return e.isDefault;
      })) != null
        ? t
        : e[0];
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield self.fetch(e, t);
          return {
            json: function () {
              return n.json();
            },
            ok: n.ok,
            status: n.status,
          };
        })),
        p.apply(this, arguments)
      );
    }
    l.WAWebHatchVmCredentialsResolver = c;
  },
  98,
);
