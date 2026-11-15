__d(
  "WAWebHatchVmCredentialsResolver",
  [
    "Promise",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebHatchAuthCredentials",
    "WAWebHatchVmFetcher",
    "asyncToGeneratorRuntime",
    "justknobx",
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
      v = new Set(["CREATING", "UPDATING"]),
      S = (c || (c = n("Promise"))).resolve({ kind: "ok" }),
      R = {
        cause: "network",
        detail: "VM wake request threw",
        kind: "failure",
      },
      L = "hatch-vm-forced-wake",
      E = (function () {
        function t(e) {
          var t, r, a, i, l, s, u, d;
          ((this.$1 = null),
            (this.$3 = null),
            (this.$5 = new WeakSet()),
            (this.$6 = null),
            (this.$8 = 0),
            (this.$9 = null),
            (this.$10 = null),
            (this.$11 = 0),
            (this.$12 = null),
            (this.$16 = null),
            (this.$18 = new Map()),
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
            (this.$7 = new (o("WAWebHatchVmFetcher").WAWebHatchVmFetcher)(
              (a = e.fetch) != null ? a : F,
              this.$4,
            )),
            (this.$13 =
              (i = e.isChannelLinked) != null
                ? i
                : function () {
                    return (c || (c = n("Promise"))).resolve(!1);
                  }),
            (this.$14 =
              (l = e.isCvmAccount) != null
                ? l
                : function () {
                    return (c || (c = n("Promise"))).resolve(!1);
                  }),
            (this.$15 = (s = e.isWakeBeforeDialEnabled) != null ? s : k),
            (this.$17 = e.mintAbraToken),
            (this.$19 =
              (u = e.readPastedAbraToken) != null
                ? u
                : o("WAWebHatchAuthCredentials").readHatchAuthAbraToken),
            (this.$20 =
              (d = e.sleep) != null
                ? d
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
                slowWake: r.slowWake,
              });
            var a = this.$12;
            if (a != null) return a;
            var i = this.$21(this.$11)
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
                t.$12 === i && (t.$12 = null);
              });
            return ((this.$12 = i), i);
          }),
          (r.refreshVm = function (t, n) {
            var e = n === void 0 ? {} : n,
              r = e.wake,
              o = r === void 0 ? !1 : r,
              a = this.$3;
            return a != null && a.credentials !== t
              ? !1
              : ((this.$3 = null),
                (this.$6 = null),
                (this.$10 = t.vmId),
                o && (this.$9 = t.vmId),
                !0);
          }),
          (r.markVmConnected = function (t) {
            this.$5.add(t);
            var e = this.$6;
            (this.$3 == null &&
              (e == null ? void 0 : e.credentials) === t &&
              (this.$3 = e),
              (this.$6 = null));
          }),
          (r.dropForcedWake = function () {
            (this.$8++, (this.$9 = null));
          }),
          (r.invalidate = function () {
            (this.$11++,
              (this.$1 = null),
              (this.$3 = null),
              (this.$6 = null),
              (this.$9 = null),
              (this.$12 = null),
              this.$18.clear(),
              (this.$10 = null));
          }),
          (r.$21 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$13();
                return e !== this.$11
                  ? g
                  : t
                    ? this.$22(e)
                    : {
                        cause: "channel_not_linked",
                        detail: "Muse channel is not linked",
                        kind: "failure",
                      };
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$22 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = (t = this.$1) != null ? t : this.$19(),
                  r = n != null ? n : yield this.$23(e);
                if (r == null)
                  return {
                    cause: "mint_failed",
                    detail: "ABRA token could not be minted",
                    kind: "failure",
                  };
                var o = r,
                  a = yield this.$24(o, e);
                if (a.kind === "unauthorized" && n != null) {
                  this.$25(n, e);
                  var i = yield this.$23(e);
                  if (i == null)
                    return {
                      cause: "mint_failed",
                      detail: a.detail,
                      kind: "failure",
                    };
                  ((o = i), (a = yield this.$24(o, e)));
                }
                return a.kind === "unauthorized"
                  ? (this.$25(o, e),
                    e === this.$11 && this.dropForcedWake(),
                    {
                      cause: "unauthorized",
                      detail: a.detail,
                      kind: "failure",
                    })
                  : a.kind !== "ok"
                    ? a
                    : this.$26(a, e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$26 = function (t, n) {
            var e = this;
            if (n !== this.$11) return g;
            var r = t.entry;
            if (!A(r) && !this.$2())
              return {
                cause: "unsupported_vm_type",
                detail: "Confidential access was turned off during the resolve",
                kind: "failure",
              };
            var o = T(r),
              a = w(r),
              i = {
                credentials: o,
                expiresAtMs: r.notaryExpiresAtMs,
                slowWake: a,
              };
            return (
              (this.$3 = i),
              (this.$6 = null),
              t.wake.then(function (t) {
                t.kind !== "ok" &&
                  e.$3 === i &&
                  !e.$5.has(o) &&
                  ((e.$3 = null), (e.$6 = i));
              }),
              { credentials: o, kind: "ok", slowWake: a }
            );
          }),
          (r.$24 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$7.fetch(e);
                if (n.kind === "ok" && n.entries.length === 0) {
                  var r = yield this.$27(e, t);
                  if (r != null) return r;
                  n = yield this.$7.fetch(e);
                }
                if (n.kind !== "ok") return n;
                var o = $(n.entries);
                if (o == null)
                  return {
                    cause: "no_vm",
                    detail: "fetch_vms returned no VM",
                    kind: "failure",
                  };
                var a = yield this.$28({ entry: o, generation: t, token: e });
                return D(a)
                  ? this.$29({ entry: o, generation: t, prepared: a, token: e })
                  : a;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$27 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (this.$16 === t)
                  return {
                    cause: "lease_pending",
                    detail: "Leased VM is not listed yet",
                    kind: "failure",
                  };
                var n = yield this.$14();
                if (t !== this.$11) return g;
                if (n)
                  return {
                    cause: "cvm_account",
                    detail: "A CVM account is not leased a standard VM",
                    kind: "failure",
                  };
                this.$16 = t;
                var r = yield this.$7.lease(e);
                return r.kind === "unauthorized"
                  ? (this.$16 === t && (this.$16 = null), r)
                  : r.kind === "not_found"
                    ? { cause: "http", detail: r.detail, kind: "failure" }
                    : r.kind === "ok"
                      ? null
                      : r;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$29 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = e.entry,
                  r = e.generation,
                  o = e.prepared,
                  a = e.token,
                  i = yield this.$7.fetch(a);
                if (i.kind === "unauthorized") return i;
                var l = i.kind === "ok" ? $(i.entries) : null;
                return l == null
                  ? o
                  : (t = P({ after: l, before: n })) != null
                    ? t
                    : this.$28({ entry: l, generation: r, token: a });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$28 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = e.entry,
                  r = e.generation,
                  o = e.token,
                  a = this.$30(n);
                if (a != null) return a;
                var i = this.$31(n.vmId, r),
                  l = this.$32(n.vmId, r),
                  s = l || this.$15(),
                  u = yield this.$33(o, n, r);
                if (u.kind !== "ok") return u;
                var c = u.entry,
                  d =
                    c === n
                      ? null
                      : (t = P({ after: c, before: n })) != null
                        ? t
                        : this.$30(c);
                return d != null
                  ? d
                  : s
                    ? this.$34({
                        entry: c,
                        generation: r,
                        isForced: i,
                        token: o,
                      })
                    : { entry: c, kind: "ok", wake: S };
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$30 = function (t) {
            return A(t)
              ? null
              : t.vmType !== h || !this.$2()
                ? {
                    cause: "unsupported_vm_type",
                    detail: "VM type " + String(t.vmType) + " is not supported",
                    kind: "failure",
                  }
                : M(t)
                  ? {
                      cause: "cvm_replacement_in_progress",
                      detail: "Confidential VM is being replaced",
                      kind: "failure",
                    }
                  : this.$35(t)
                    ? N(t)
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
          (r.$35 = function (t) {
            var e = t.noiseNotaryToken;
            return (
              e != null &&
              e.startsWith(C) &&
              e.length > C.length &&
              t.notaryExpiresAtMs - d > this.$4()
            );
          }),
          (r.$33 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r,
                  o = (r = t.state) == null ? void 0 : r.toUpperCase();
                return o != null && b.has(o)
                  ? { cause: "vm_state", detail: "VM is " + o, kind: "failure" }
                  : o != null && v.has(o)
                    ? this.$36(e, t.vmId, n)
                    : { entry: t, kind: "ok" };
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$34 = function (t) {
            var e,
              n = this,
              r = t.entry,
              o = t.generation,
              a = t.isForced,
              i = t.token,
              l = this.$8,
              s = (e = this.$18.get(r.vmId)) != null ? e : this.$37(i, r.vmId);
            return (
              s.then(function (e) {
                return n.$38({
                  epoch: l,
                  generation: o,
                  isForced: a,
                  vmId: r.vmId,
                  woke: e,
                });
              }),
              { entry: r, kind: "ok", wake: s }
            );
          }),
          (r.$37 = function (t, n) {
            var e = this,
              r = this.$7.wake(t, n).catch(function () {
                return R;
              });
            return (
              this.$18.set(n, r),
              r.then(function (t) {
                (e.$18.get(n) === r && e.$18.delete(n),
                  (t.kind === "failure" || t.kind === "not_found") &&
                    o("WALogger")
                      .WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "hatch-vm-credentials: wake failed, continuing",
                          ])),
                      )
                      .sendLogs("hatch-vm-credentials-wake-failed"));
              }),
              r
            );
          }),
          (r.$32 = function (t, n) {
            if (n !== this.$11) return !1;
            var e = this.$10 === t;
            return ((this.$10 = null), e);
          }),
          (r.$31 = function (t, n) {
            if (n !== this.$11) return !1;
            var e = this.$9 === t;
            return ((this.$9 = null), e);
          }),
          (r.$38 = function (t) {
            var e = t.epoch,
              n = t.generation,
              r = t.isForced,
              o = t.vmId,
              a = t.woke;
            (r && I(a),
              r &&
                a.kind === "unauthorized" &&
                n === this.$11 &&
                e === this.$8 &&
                (this.$9 = o));
          }),
          (r.$36 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, o) {
                (r === void 0 && (r = 0), o === void 0 && (o = this.$4()));
                var a = Math.min(m * Math.pow(2, r), p);
                if (r >= _ || this.$4() - o + a > f)
                  return {
                    cause: "not_running",
                    detail: "VM was not ready in time",
                    kind: "failure",
                  };
                if ((yield this.$20(a), n !== this.$11)) return g;
                var i = yield this.$7.fetch(e),
                  l = x(i, t);
                return l != null ? l : this.$36(e, t, n, r + 1, o);
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$23 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$17();
                return t.kind !== "ok"
                  ? null
                  : (e === this.$11 && (this.$1 = t.token), t.token);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$25 = function (t, n) {
            n === this.$11 && this.$1 === t && (this.$1 = null);
          }),
          t
        );
      })();
    function k() {
      return r("justknobx")._("7766");
    }
    function I(e) {
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
        .sendLogs(L);
    }
    function T(e) {
      var t = {
        notaryToken: e.notaryToken,
        vmAuthToken: e.vmAuthToken,
        vmId: e.vmId,
      };
      return e.vmType === h
        ? babelHelpers.extends({}, t, { confidential: !0 })
        : t;
    }
    function D(e) {
      return e.kind === "failure" && e.cause === "cvm_notary_unavailable";
    }
    function x(e, t) {
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
      if (!A(r) && M(r))
        return {
          cause: "cvm_replacement_in_progress",
          detail: "Confidential VM is being replaced",
          kind: "failure",
        };
      var o = (n = r.state) == null ? void 0 : n.toUpperCase();
      return o != null && b.has(o)
        ? { cause: "vm_state", detail: "VM is " + o, kind: "failure" }
        : o != null && v.has(o)
          ? null
          : { entry: r, kind: "ok" };
    }
    function $(e) {
      var t = e.find(function (e) {
        return e.isDefault;
      });
      return t != null ? t : e.every(A) || e.length === 1 ? e[0] : null;
    }
    function P(e) {
      var t = e.after,
        n = e.before;
      return !A(n) && A(t)
        ? {
            cause: "unsupported_vm_type",
            detail: "Confidential VM came back as a standard VM",
            kind: "failure",
          }
        : null;
    }
    function N(e) {
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
    function M(e) {
      var t;
      return (
        ((t = e.state) == null ? void 0 : t.toUpperCase().startsWith(y)) === !0
      );
    }
    function w(e) {
      return e.vmType === h;
    }
    function A(e) {
      return o("WAWebHatchVmFetcher").isStandardVmType(e.vmType);
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        O.apply(this, arguments)
      );
    }
    l.WAWebHatchVmCredentialsResolver = E;
  },
  98,
);
