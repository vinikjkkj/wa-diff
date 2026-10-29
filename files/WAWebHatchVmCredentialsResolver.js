__d(
  "WAWebHatchVmCredentialsResolver",
  [
    "Promise",
    "WALogger",
    "WAWebHatchAuthCredentials",
    "WAWebHatchVmFetcher",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 6e4,
      d = 1e3,
      m = 1e4,
      p = 10,
      _ = 12e4,
      f = {
        cause: "superseded",
        detail: "Superseded by an account change",
        kind: "failure",
      },
      g = new Set(["DELETING", "DISABLED", "ERROR"]),
      h = (function () {
        function t(e) {
          var t, r, a, i;
          ((this.$1 = null),
            (this.$2 = null),
            (this.$5 = 0),
            (this.$6 = null),
            (this.$7 = null),
            (this.$3 =
              (t = e.clock) != null
                ? t
                : function () {
                    return Date.now();
                  }),
            (this.$4 = new (o("WAWebHatchVmFetcher").WAWebHatchVmFetcher)(
              (r = e.fetch) != null ? r : v,
              this.$3,
            )),
            (this.$8 = e.mintAbraToken),
            (this.$9 =
              (a = e.readPastedAbraToken) != null
                ? a
                : o("WAWebHatchAuthCredentials").readHatchAuthAbraToken),
            (this.$10 =
              (i = e.sleep) != null
                ? i
                : function (e) {
                    return new (u || (u = n("Promise")))(function (t) {
                      return self.setTimeout(t, e);
                    });
                  }));
        }
        var r = t.prototype;
        return (
          (r.resolve = function () {
            var t = this,
              r = this.$2;
            if (r != null && r.expiresAtMs - c > this.$3())
              return (u || (u = n("Promise"))).resolve({
                credentials: r.credentials,
                kind: "ok",
                state: r.state,
              });
            var a = this.$6;
            if (a != null) return a;
            var i = this.$11(this.$5)
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
                  {
                    cause: "threw",
                    detail: "VM credential resolve failed",
                    kind: "failure",
                  }
                );
              })
              .finally(function () {
                t.$6 === i && (t.$6 = null);
              });
            return ((this.$6 = i), i);
          }),
          (r.refreshVm = function (t) {
            var e;
            ((e = this.$2) == null ? void 0 : e.credentials) === t &&
              (this.$2 = null);
          }),
          (r.invalidate = function () {
            (this.$5++, (this.$1 = null), (this.$2 = null), (this.$6 = null));
          }),
          (r.$11 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = (t = this.$1) != null ? t : this.$9(),
                  r = n != null ? n : yield this.$12(e);
                if (r == null)
                  return {
                    cause: "mint_failed",
                    detail: "ABRA token could not be minted",
                    kind: "failure",
                  };
                var o = r,
                  a = yield this.$13(o, e);
                if (a.kind === "unauthorized" && n != null) {
                  this.$14(n, e);
                  var i = yield this.$12(e);
                  if (i == null)
                    return {
                      cause: "mint_failed",
                      detail: a.detail,
                      kind: "failure",
                    };
                  ((o = i), (a = yield this.$13(o, e)));
                }
                if (a.kind === "unauthorized")
                  return (
                    this.$14(o, e),
                    { cause: "unauthorized", detail: a.detail, kind: "failure" }
                  );
                if (a.kind !== "ok") return a;
                if (e !== this.$5) return f;
                var l = a,
                  s = l.entry,
                  u = {
                    notaryToken: s.notaryToken,
                    vmAuthToken: s.vmAuthToken,
                    vmId: s.vmId,
                  };
                return (
                  a.cacheable &&
                    (this.$2 = {
                      credentials: u,
                      expiresAtMs: s.notaryExpiresAtMs,
                      state: s.state,
                    }),
                  { credentials: u, kind: "ok", state: s.state }
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$4.fetch(e);
                if (n.kind === "ok" && n.entries.length === 0) {
                  if (this.$7 === t)
                    return {
                      cause: "lease_pending",
                      detail: "Leased VM is not listed yet",
                      kind: "failure",
                    };
                  this.$7 = t;
                  var r = yield this.$4.lease(e);
                  if (r.kind === "unauthorized")
                    return (this.$7 === t && (this.$7 = null), r);
                  if (r.kind === "not_found")
                    return { cause: "http", detail: r.detail, kind: "failure" };
                  if (r.kind !== "ok") return r;
                  n = yield this.$4.fetch(e);
                }
                if (n.kind !== "ok") return n;
                var o = y(n.entries);
                return o == null
                  ? {
                      cause: "no_vm",
                      detail: "fetch_vms returned no VM",
                      kind: "failure",
                    }
                  : this.$15({ entry: o, generation: t, token: e });
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$15 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = e.entry,
                  r = e.generation,
                  o = e.token,
                  a = C(n);
                if (a != null) return a;
                var i = yield this.$16(o, n, r);
                return i.kind !== "ok" || i.entry === n
                  ? i
                  : (t = C(i.entry)) != null
                    ? t
                    : i;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r,
                  a = (r = t.state) == null ? void 0 : r.toUpperCase();
                if (a === "RUNNING")
                  return { cacheable: !0, entry: t, kind: "ok" };
                if (a != null && g.has(a))
                  return {
                    cause: "vm_state",
                    detail: "VM is " + a,
                    kind: "failure",
                  };
                if (a === "CREATING" || a === "UPDATING")
                  return this.$17(e, t.vmId, n);
                var i = yield this.$4.wake(e, t.vmId);
                return i.kind === "unauthorized"
                  ? i
                  : i.kind === "not_found"
                    ? { cause: "no_vm", detail: i.detail, kind: "failure" }
                    : (i.kind === "failure" &&
                        o("WALogger")
                          .WARN(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "hatch-vm-credentials: wake failed, continuing",
                              ])),
                          )
                          .sendLogs("hatch-vm-credentials-wake-failed"),
                      a === "STOPPED"
                        ? this.$17(e, t.vmId, n)
                        : { cacheable: i.kind === "ok", entry: t, kind: "ok" });
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, o) {
                var a;
                (r === void 0 && (r = 0), o === void 0 && (o = this.$3()));
                var i = Math.min(d * Math.pow(2, r), m);
                if (r >= p || this.$3() - o + i > _)
                  return {
                    cause: "not_running",
                    detail: "VM was not running in time",
                    kind: "failure",
                  };
                if ((yield this.$10(i), n !== this.$5)) return f;
                var l = yield this.$4.fetch(e);
                if (l.kind === "unauthorized") return l;
                var s =
                  l.kind === "ok"
                    ? l.entries.find(function (e) {
                        return e.vmId === t;
                      })
                    : void 0;
                if (l.kind === "ok" && s == null)
                  return {
                    cause: "no_vm",
                    detail: "VM is no longer listed",
                    kind: "failure",
                  };
                var u =
                  s == null || (a = s.state) == null ? void 0 : a.toUpperCase();
                return s != null && u === "RUNNING"
                  ? { cacheable: !0, entry: s, kind: "ok" }
                  : u != null && g.has(u)
                    ? {
                        cause: "vm_state",
                        detail: "VM is " + u,
                        kind: "failure",
                      }
                    : this.$17(e, t, n, r + 1, o);
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$12 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$8();
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
          (r.$14 = function (t, n) {
            n === this.$5 && this.$1 === t && (this.$1 = null);
          }),
          t
        );
      })();
    function y(e) {
      var t = e.find(function (e) {
        return e.isDefault;
      });
      return t != null ? t : e.every(b) || e.length === 1 ? e[0] : null;
    }
    function C(e) {
      return b(e)
        ? null
        : {
            cause: "unsupported_vm_type",
            detail: "VM type " + String(e.vmType) + " is not supported",
            kind: "failure",
          };
    }
    function b(e) {
      return o("WAWebHatchVmFetcher").isStandardVmType(e.vmType);
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield self.fetch(e, t);
          return {
            json: function () {
              return n.json();
            },
            ok: n.ok,
            status: n.status,
          };
        })),
        S.apply(this, arguments)
      );
    }
    l.WAWebHatchVmCredentialsResolver = h;
  },
  98,
);
