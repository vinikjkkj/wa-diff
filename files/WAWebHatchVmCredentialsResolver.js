__d(
  "WAWebHatchVmCredentialsResolver",
  [
    "Promise",
    "WALogger",
    "WAWebBoolFunc",
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
      g = "hatch_cvm",
      h = "CVM_",
      y = "endorsement.",
      C = new Set(["DELETING", "DISABLED", "ERROR"]),
      b = (function () {
        function t(e) {
          var t, r, a, i, l;
          ((this.$1 = null),
            (this.$3 = null),
            (this.$6 = 0),
            (this.$7 = null),
            (this.$8 = null),
            (this.$2 =
              (t = e.allowConfidentialConnection) != null
                ? t
                : o("WAWebBoolFunc").returnFalse),
            (this.$4 =
              (r = e.clock) != null
                ? r
                : function () {
                    return Date.now();
                  }),
            (this.$5 = new (o("WAWebHatchVmFetcher").WAWebHatchVmFetcher)(
              (a = e.fetch) != null ? a : D,
              this.$4,
            )),
            (this.$9 = e.mintAbraToken),
            (this.$10 =
              (i = e.readPastedAbraToken) != null
                ? i
                : o("WAWebHatchAuthCredentials").readHatchAuthAbraToken),
            (this.$11 =
              (l = e.sleep) != null
                ? l
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
              r = this.$3;
            if (
              r != null &&
              r.expiresAtMs - c > this.$4() &&
              (r.credentials.confidential !== !0 || this.$2())
            )
              return (u || (u = n("Promise"))).resolve({
                credentials: r.credentials,
                kind: "ok",
                state: r.state,
              });
            var a = this.$7;
            if (a != null) return a;
            var i = this.$12(this.$6)
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
                t.$7 === i && (t.$7 = null);
              });
            return ((this.$7 = i), i);
          }),
          (r.refreshVm = function (t) {
            var e;
            ((e = this.$3) == null ? void 0 : e.credentials) === t &&
              (this.$3 = null);
          }),
          (r.invalidate = function () {
            (this.$6++, (this.$1 = null), (this.$3 = null), (this.$7 = null));
          }),
          (r.$12 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = (t = this.$1) != null ? t : this.$10(),
                  r = n != null ? n : yield this.$13(e);
                if (r == null)
                  return {
                    cause: "mint_failed",
                    detail: "ABRA token could not be minted",
                    kind: "failure",
                  };
                var o = r,
                  a = yield this.$14(o, e);
                if (a.kind === "unauthorized" && n != null) {
                  this.$15(n, e);
                  var i = yield this.$13(e);
                  if (i == null)
                    return {
                      cause: "mint_failed",
                      detail: a.detail,
                      kind: "failure",
                    };
                  ((o = i), (a = yield this.$14(o, e)));
                }
                return a.kind === "unauthorized"
                  ? (this.$15(o, e),
                    {
                      cause: "unauthorized",
                      detail: a.detail,
                      kind: "failure",
                    })
                  : a.kind !== "ok"
                    ? a
                    : this.$16(a, e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$16 = function (t, n) {
            if (n !== this.$6) return f;
            var e = t.entry;
            if (!T(e) && !this.$2())
              return {
                cause: "unsupported_vm_type",
                detail: "Confidential access was turned off during the resolve",
                kind: "failure",
              };
            var r = v(e);
            return (
              t.cacheable &&
                (this.$3 = {
                  credentials: r,
                  expiresAtMs: e.notaryExpiresAtMs,
                  state: e.state,
                }),
              { credentials: r, kind: "ok", state: e.state }
            );
          }),
          (r.$14 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$5.fetch(e);
                if (n.kind === "ok" && n.entries.length === 0) {
                  if (this.$8 === t)
                    return {
                      cause: "lease_pending",
                      detail: "Leased VM is not listed yet",
                      kind: "failure",
                    };
                  this.$8 = t;
                  var r = yield this.$5.lease(e);
                  if (r.kind === "unauthorized")
                    return (this.$8 === t && (this.$8 = null), r);
                  if (r.kind === "not_found")
                    return { cause: "http", detail: r.detail, kind: "failure" };
                  if (r.kind !== "ok") return r;
                  n = yield this.$5.fetch(e);
                }
                if (n.kind !== "ok") return n;
                var o = L(n.entries);
                if (o == null)
                  return {
                    cause: "no_vm",
                    detail: "fetch_vms returned no VM",
                    kind: "failure",
                  };
                var a = yield this.$17({ entry: o, generation: t, token: e });
                return S(a)
                  ? this.$18({ entry: o, generation: t, prepared: a, token: e })
                  : a;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$18 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = e.entry,
                  r = e.generation,
                  o = e.prepared,
                  a = e.token,
                  i = yield this.$5.fetch(a);
                if (i.kind === "unauthorized") return i;
                var l = i.kind === "ok" ? L(i.entries) : null;
                return l == null
                  ? o
                  : (t = E({ after: l, before: n })) != null
                    ? t
                    : this.$17({ entry: l, generation: r, token: a });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n,
                  r = e.entry,
                  o = e.generation,
                  a = e.token,
                  i = this.$19(r);
                if (i != null) return i;
                var l = yield this.$20(a, r, o);
                return l.kind !== "ok" || l.entry === r
                  ? l
                  : (t =
                        (n = E({ after: l.entry, before: r })) != null
                          ? n
                          : this.$19(l.entry)) != null
                    ? t
                    : l;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$19 = function (t) {
            return T(t)
              ? null
              : t.vmType !== g || !this.$2()
                ? {
                    cause: "unsupported_vm_type",
                    detail: "VM type " + String(t.vmType) + " is not supported",
                    kind: "failure",
                  }
                : I(t)
                  ? {
                      cause: "cvm_replacement_in_progress",
                      detail: "Confidential VM is being replaced",
                      kind: "failure",
                    }
                  : this.$21(t)
                    ? k(t)
                      ? null
                      : {
                          cause: "cvm_vm_id_mismatch",
                          detail:
                            "Confidential VM id is not its gateway host label",
                          kind: "failure",
                        }
                    : {
                        cause: "cvm_notary_unavailable",
                        detail: "Confidential VM has no notary endorsement",
                        kind: "failure",
                      };
          }),
          (r.$21 = function (t) {
            var e = t.noiseNotaryToken;
            return (
              e != null &&
              e.startsWith(y) &&
              e.length > y.length &&
              t.notaryExpiresAtMs - c > this.$4()
            );
          }),
          (r.$20 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r,
                  a = (r = t.state) == null ? void 0 : r.toUpperCase();
                if (a === "RUNNING")
                  return { cacheable: !0, entry: t, kind: "ok" };
                if (a != null && C.has(a))
                  return {
                    cause: "vm_state",
                    detail: "VM is " + a,
                    kind: "failure",
                  };
                if (a === "CREATING" || a === "UPDATING")
                  return this.$22(e, t.vmId, n);
                var i = yield this.$5.wake(e, t.vmId);
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
                      a === "STOPPED" || t.vmType === g
                        ? this.$22(e, t.vmId, n)
                        : { cacheable: i.kind === "ok", entry: t, kind: "ok" });
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$22 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, o) {
                (r === void 0 && (r = 0), o === void 0 && (o = this.$4()));
                var a = Math.min(d * Math.pow(2, r), m);
                if (r >= p || this.$4() - o + a > _)
                  return {
                    cause: "not_running",
                    detail: "VM was not running in time",
                    kind: "failure",
                  };
                if ((yield this.$11(a), n !== this.$6)) return f;
                var i = yield this.$5.fetch(e),
                  l = R(i, t);
                return l != null ? l : this.$22(e, t, n, r + 1, o);
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$9();
                return t.kind !== "ok"
                  ? null
                  : (e === this.$6 && (this.$1 = t.token), t.token);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$15 = function (t, n) {
            n === this.$6 && this.$1 === t && (this.$1 = null);
          }),
          t
        );
      })();
    function v(e) {
      var t = {
        notaryToken: e.notaryToken,
        vmAuthToken: e.vmAuthToken,
        vmId: e.vmId,
      };
      return e.vmType === g
        ? babelHelpers.extends({}, t, { confidential: !0 })
        : t;
    }
    function S(e) {
      return e.kind === "failure" && e.cause === "cvm_notary_unavailable";
    }
    function R(e, t) {
      var n;
      if (e.kind === "unauthorized") return e;
      if (e.kind !== "ok") return null;
      var r = e.entries.find(function (e) {
        return e.vmId === t;
      });
      if (r == null)
        return {
          cause: "no_vm",
          detail: "VM is no longer listed",
          kind: "failure",
        };
      var o = (n = r.state) == null ? void 0 : n.toUpperCase();
      return o === "RUNNING"
        ? { cacheable: !0, entry: r, kind: "ok" }
        : !T(r) && I(r)
          ? {
              cause: "cvm_replacement_in_progress",
              detail: "Confidential VM is being replaced",
              kind: "failure",
            }
          : o != null && C.has(o)
            ? { cause: "vm_state", detail: "VM is " + o, kind: "failure" }
            : null;
    }
    function L(e) {
      var t = e.find(function (e) {
        return e.isDefault;
      });
      return t != null ? t : e.every(T) || e.length === 1 ? e[0] : null;
    }
    function E(e) {
      var t = e.after,
        n = e.before;
      return !T(n) && T(t)
        ? {
            cause: "unsupported_vm_type",
            detail: "Confidential VM came back as a standard VM",
            kind: "failure",
          }
        : null;
    }
    function k(e) {
      var t = e.gatewayUrl,
        n = e.vmId,
        r;
      try {
        r = new URL(t).hostname;
      } catch (e) {
        return !1;
      }
      var o = r.split(".")[0];
      return n !== "" && o.toLowerCase() === n.toLowerCase();
    }
    function I(e) {
      var t;
      return (
        ((t = e.state) == null ? void 0 : t.toUpperCase().startsWith(h)) === !0
      );
    }
    function T(e) {
      return o("WAWebHatchVmFetcher").isStandardVmType(e.vmType);
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield self.fetch(
            e,
            babelHelpers.extends({}, t, { redirect: "error" }),
          );
          return {
            json: function () {
              return n.json();
            },
            ok: n.ok,
            status: n.status,
          };
        })),
        x.apply(this, arguments)
      );
    }
    l.WAWebHatchVmCredentialsResolver = b;
  },
  98,
);
