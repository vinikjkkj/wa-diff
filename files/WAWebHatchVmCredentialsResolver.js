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
      c,
      d = 6e4,
      m = 1e3,
      p = 1e4,
      _ = 10,
      f = 12e4,
      g = {
        cause: "superseded",
        detail: "Superseded by an account change",
        kind: "failure",
      },
      h = "hatch_cvm",
      y = "CVM_",
      C = "endorsement.",
      b = new Set(["DELETING", "DISABLED", "ERROR"]),
      v = "hatch-vm-forced-wake",
      S = (function () {
        function t(e) {
          var t, r, a, i, l;
          ((this.$1 = null),
            (this.$3 = null),
            (this.$6 = 0),
            (this.$7 = null),
            (this.$8 = 0),
            (this.$9 = null),
            (this.$10 = null),
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
              (a = e.fetch) != null ? a : P,
              this.$4,
            )),
            (this.$11 = e.mintAbraToken),
            (this.$12 =
              (i = e.readPastedAbraToken) != null
                ? i
                : o("WAWebHatchAuthCredentials").readHatchAuthAbraToken),
            (this.$13 =
              (l = e.sleep) != null
                ? l
                : function (e) {
                    return new (c || (c = n("Promise")))(function (t) {
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
              r.expiresAtMs - d > this.$4() &&
              (r.credentials.confidential !== !0 || this.$2())
            )
              return (c || (c = n("Promise"))).resolve({
                credentials: r.credentials,
                kind: "ok",
                state: r.state,
              });
            var a = this.$9;
            if (a != null) return a;
            var i = this.$14(this.$8)
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
                t.$9 === i && (t.$9 = null);
              });
            return ((this.$9 = i), i);
          }),
          (r.refreshVm = function (t, n) {
            var e = n === void 0 ? {} : n,
              r = e.wake,
              o = r === void 0 ? !1 : r,
              a = this.$3;
            return a != null && a.credentials !== t
              ? !1
              : ((this.$3 = null), o && (this.$7 = t.vmId), !0);
          }),
          (r.dropForcedWake = function () {
            (this.$6++, (this.$7 = null));
          }),
          (r.invalidate = function () {
            (this.$8++,
              (this.$1 = null),
              (this.$3 = null),
              (this.$7 = null),
              (this.$9 = null));
          }),
          (r.$14 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = (t = this.$1) != null ? t : this.$12(),
                  r = n != null ? n : yield this.$15(e);
                if (r == null)
                  return {
                    cause: "mint_failed",
                    detail: "ABRA token could not be minted",
                    kind: "failure",
                  };
                var o = r,
                  a = yield this.$16(o, e);
                if (a.kind === "unauthorized" && n != null) {
                  this.$17(n, e);
                  var i = yield this.$15(e);
                  if (i == null)
                    return {
                      cause: "mint_failed",
                      detail: a.detail,
                      kind: "failure",
                    };
                  ((o = i), (a = yield this.$16(o, e)));
                }
                return a.kind === "unauthorized"
                  ? (this.$17(o, e),
                    e === this.$8 && this.dropForcedWake(),
                    {
                      cause: "unauthorized",
                      detail: a.detail,
                      kind: "failure",
                    })
                  : a.kind !== "ok"
                    ? a
                    : this.$18(a, e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$18 = function (t, n) {
            if (n !== this.$8) return g;
            var e = t.entry;
            if (!$(e) && !this.$2())
              return {
                cause: "unsupported_vm_type",
                detail: "Confidential access was turned off during the resolve",
                kind: "failure",
              };
            var r = L(e);
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
          (r.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$5.fetch(e);
                if (n.kind === "ok" && n.entries.length === 0) {
                  if (this.$10 === t)
                    return {
                      cause: "lease_pending",
                      detail: "Leased VM is not listed yet",
                      kind: "failure",
                    };
                  this.$10 = t;
                  var r = yield this.$5.lease(e);
                  if (r.kind === "unauthorized")
                    return (this.$10 === t && (this.$10 = null), r);
                  if (r.kind === "not_found")
                    return { cause: "http", detail: r.detail, kind: "failure" };
                  if (r.kind !== "ok") return r;
                  n = yield this.$5.fetch(e);
                }
                if (n.kind !== "ok") return n;
                var o = I(n.entries);
                if (o == null)
                  return {
                    cause: "no_vm",
                    detail: "fetch_vms returned no VM",
                    kind: "failure",
                  };
                var a = yield this.$19({ entry: o, generation: t, token: e });
                return E(a)
                  ? this.$20({ entry: o, generation: t, prepared: a, token: e })
                  : a;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$20 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = e.entry,
                  r = e.generation,
                  o = e.prepared,
                  a = e.token,
                  i = yield this.$5.fetch(a);
                if (i.kind === "unauthorized") return i;
                var l = i.kind === "ok" ? I(i.entries) : null;
                return l == null
                  ? o
                  : (t = T({ after: l, before: n })) != null
                    ? t
                    : this.$19({ entry: l, generation: r, token: a });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$19 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n,
                  r = e.entry,
                  o = e.generation,
                  a = e.token,
                  i = this.$21(r);
                if (i != null) return i;
                var l = yield this.$22(a, r, o);
                return l.kind !== "ok" || l.entry === r
                  ? l
                  : (t =
                        (n = T({ after: l.entry, before: r })) != null
                          ? n
                          : this.$21(l.entry)) != null
                    ? t
                    : l;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$21 = function (t) {
            return $(t)
              ? null
              : t.vmType !== h || !this.$2()
                ? {
                    cause: "unsupported_vm_type",
                    detail: "VM type " + String(t.vmType) + " is not supported",
                    kind: "failure",
                  }
                : x(t)
                  ? {
                      cause: "cvm_replacement_in_progress",
                      detail: "Confidential VM is being replaced",
                      kind: "failure",
                    }
                  : this.$23(t)
                    ? D(t)
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
          (r.$23 = function (t) {
            var e = t.noiseNotaryToken;
            return (
              e != null &&
              e.startsWith(C) &&
              e.length > C.length &&
              t.notaryExpiresAtMs - d > this.$4()
            );
          }),
          (r.$22 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r,
                  o = this.$24(t.vmId, n),
                  a = (r = t.state) == null ? void 0 : r.toUpperCase();
                if (a === "RUNNING")
                  return o
                    ? this.$25(e, t, n)
                    : { cacheable: !0, entry: t, kind: "ok" };
                if (a != null && b.has(a))
                  return {
                    cause: "vm_state",
                    detail: "VM is " + a,
                    kind: "failure",
                  };
                if (a === "CREATING" || a === "UPDATING")
                  return this.$26(e, t.vmId, n);
                var i = yield this.$5.wake(e, t.vmId);
                return this.$27({ entry: t, generation: n, token: e, woke: i });
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$24 = function (t, n) {
            if (n !== this.$8) return !1;
            var e = this.$7 === t;
            return ((this.$7 = null), e);
          }),
          (r.$25 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = this.$6,
                  o = yield this.$5.wake(e, t.vmId);
                return (
                  R(o),
                  o.kind === "unauthorized" &&
                    n === this.$8 &&
                    r === this.$6 &&
                    (this.$7 = t.vmId),
                  this.$27({ entry: t, generation: n, token: e, woke: o })
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$27 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = e.entry,
                  r = e.generation,
                  a = e.token,
                  i = e.woke;
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
                      ((t = n.state) == null ? void 0 : t.toUpperCase()) ===
                        "STOPPED" || n.vmType === h
                        ? this.$26(a, n.vmId, r)
                        : { cacheable: i.kind === "ok", entry: n, kind: "ok" });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$26 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, o) {
                (r === void 0 && (r = 0), o === void 0 && (o = this.$4()));
                var a = Math.min(m * Math.pow(2, r), p);
                if (r >= _ || this.$4() - o + a > f)
                  return {
                    cause: "not_running",
                    detail: "VM was not running in time",
                    kind: "failure",
                  };
                if ((yield this.$13(a), n !== this.$8)) return g;
                var i = yield this.$5.fetch(e),
                  l = k(i, t);
                return l != null ? l : this.$26(e, t, n, r + 1, o);
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$15 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$11();
                return t.kind !== "ok"
                  ? null
                  : (e === this.$8 && (this.$1 = t.token), t.token);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$17 = function (t, n) {
            n === this.$8 && this.$1 === t && (this.$1 = null);
          }),
          t
        );
      })();
    function R(e) {
      var t =
        e.kind === "ok"
          ? "ok"
          : e.kind === "failure"
            ? "failed"
            : e.kind === "not_found"
              ? "not_found"
              : e.kind === "unauthorized"
                ? "unauthorized"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e.kind,
                    );
                  })();
      o("WALogger")
        .LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-vm: forced wake after refused connect result=",
              "",
            ])),
          t,
        )
        .sendLogs(v);
    }
    function L(e) {
      var t = {
        notaryToken: e.notaryToken,
        vmAuthToken: e.vmAuthToken,
        vmId: e.vmId,
      };
      return e.vmType === h
        ? babelHelpers.extends({}, t, { confidential: !0 })
        : t;
    }
    function E(e) {
      return e.kind === "failure" && e.cause === "cvm_notary_unavailable";
    }
    function k(e, t) {
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
        : !$(r) && x(r)
          ? {
              cause: "cvm_replacement_in_progress",
              detail: "Confidential VM is being replaced",
              kind: "failure",
            }
          : o != null && b.has(o)
            ? { cause: "vm_state", detail: "VM is " + o, kind: "failure" }
            : null;
    }
    function I(e) {
      var t = e.find(function (e) {
        return e.isDefault;
      });
      return t != null ? t : e.every($) || e.length === 1 ? e[0] : null;
    }
    function T(e) {
      var t = e.after,
        n = e.before;
      return !$(n) && $(t)
        ? {
            cause: "unsupported_vm_type",
            detail: "Confidential VM came back as a standard VM",
            kind: "failure",
          }
        : null;
    }
    function D(e) {
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
    function x(e) {
      var t;
      return (
        ((t = e.state) == null ? void 0 : t.toUpperCase().startsWith(y)) === !0
      );
    }
    function $(e) {
      return o("WAWebHatchVmFetcher").isStandardVmType(e.vmType);
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        N.apply(this, arguments)
      );
    }
    l.WAWebHatchVmCredentialsResolver = S;
  },
  98,
);
