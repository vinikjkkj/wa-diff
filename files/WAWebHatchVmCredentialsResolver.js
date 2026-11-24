__d(
  "WAWebHatchVmCredentialsResolver",
  [
    "WALogger",
    "WAWebBoolFunc",
    "WAWebHatchAuthCredentials",
    "WAWebHatchVmFetcher",
    "justknobx",
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
      b = new Set(["CREATING", "UPDATING"]),
      v = Promise.resolve({ kind: "ok" }),
      S = {
        cause: "network",
        detail: "VM wake request threw",
        kind: "failure",
      },
      R = "hatch-vm-forced-wake",
      L = (function () {
        function t(e) {
          var t, n, r, a, i, l, s, u;
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
              (n = e.clock) != null
                ? n
                : function () {
                    return Date.now();
                  }),
            (this.$7 = new (o("WAWebHatchVmFetcher").WAWebHatchVmFetcher)(
              (r = e.fetch) != null ? r : A,
              this.$4,
            )),
            (this.$13 =
              (a = e.isChannelLinked) != null
                ? a
                : function () {
                    return Promise.resolve(!1);
                  }),
            (this.$14 =
              (i = e.isCvmAccount) != null
                ? i
                : function () {
                    return Promise.resolve(!1);
                  }),
            (this.$15 = (l = e.isWakeBeforeDialEnabled) != null ? l : E),
            (this.$17 = e.mintAbraToken),
            (this.$19 =
              (s = e.readPastedAbraToken) != null
                ? s
                : o("WAWebHatchAuthCredentials").readHatchAuthAbraToken),
            (this.$20 =
              (u = e.sleep) != null
                ? u
                : function (e) {
                    return new Promise(function (t) {
                      return self.setTimeout(t, e);
                    });
                  }));
        }
        var n = t.prototype;
        return (
          (n.resolve = function () {
            var t = this,
              n = this.$21();
            if (n != null) return n;
            var r = this.$12;
            if (r != null) return r;
            var a = this.$22(this.$11)
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
                t.$12 === a && (t.$12 = null);
              });
            return ((this.$12 = a), a);
          }),
          (n.$21 = function () {
            var e = this.$3;
            return e != null &&
              e.expiresAtMs - c > this.$4() &&
              (e.credentials.confidential !== !0 || this.$2())
              ? Promise.resolve({
                  credentials: e.credentials,
                  kind: "ok",
                  slowWake: e.slowWake,
                })
              : null;
          }),
          (n.refreshVm = function (t, n) {
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
          (n.markVmConnected = function (t) {
            this.$5.add(t);
            var e = this.$6;
            (this.$3 == null &&
              (e == null ? void 0 : e.credentials) === t &&
              (this.$3 = e),
              (this.$6 = null));
          }),
          (n.dropForcedWake = function () {
            (this.$8++, (this.$9 = null));
          }),
          (n.invalidate = function () {
            (this.$11++,
              (this.$1 = null),
              (this.$3 = null),
              (this.$6 = null),
              (this.$9 = null),
              (this.$12 = null),
              this.$18.clear(),
              (this.$10 = null));
          }),
          (n.$22 = async function (t) {
            var e = await this.$13();
            return t !== this.$11
              ? f
              : e
                ? this.$23(t)
                : {
                    cause: "channel_not_linked",
                    detail: "Muse channel is not linked",
                    kind: "failure",
                  };
          }),
          (n.$23 = async function (t) {
            var e,
              n = (e = this.$1) != null ? e : this.$19(),
              r = n != null ? n : await this.$24(t);
            if (r == null)
              return {
                cause: "mint_failed",
                detail: "ABRA token could not be minted",
                kind: "failure",
              };
            var o = r,
              a = await this.$25(o, t);
            if (a.kind === "unauthorized" && n != null) {
              this.$26(n, t);
              var i = await this.$24(t);
              if (i == null)
                return {
                  cause: "mint_failed",
                  detail: a.detail,
                  kind: "failure",
                };
              ((o = i), (a = await this.$25(o, t)));
            }
            return a.kind === "unauthorized"
              ? (this.$26(o, t),
                t === this.$11 && this.dropForcedWake(),
                { cause: "unauthorized", detail: a.detail, kind: "failure" })
              : a.kind !== "ok"
                ? a
                : this.$27(a, t);
          }),
          (n.$27 = function (t, n) {
            var e = this;
            if (n !== this.$11) return f;
            var r = t.entry;
            if (!w(r) && !this.$2())
              return {
                cause: "unsupported_vm_type",
                detail: "Confidential access was turned off during the resolve",
                kind: "failure",
              };
            var o = I(r),
              a = M(r),
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
          (n.$25 = async function (t, n) {
            var e = await this.$7.fetch(t);
            if (e.kind === "ok" && e.entries.length === 0) {
              var r = await this.$28(t, n);
              if (r != null) return r;
              e = await this.$7.fetch(t);
            }
            if (e.kind !== "ok") return e;
            var o = x(e.entries);
            if (o == null)
              return {
                cause: "no_vm",
                detail: "fetch_vms returned no VM",
                kind: "failure",
              };
            var a = await this.$29({ entry: o, generation: n, token: t });
            return T(a)
              ? this.$30({ entry: o, generation: n, prepared: a, token: t })
              : a;
          }),
          (n.$28 = async function (t, n) {
            if (this.$16 === n)
              return {
                cause: "lease_pending",
                detail: "Leased VM is not listed yet",
                kind: "failure",
              };
            var e = await this.$14();
            if (n !== this.$11) return f;
            if (e)
              return {
                cause: "cvm_account",
                detail: "A CVM account is not leased a standard VM",
                kind: "failure",
              };
            this.$16 = n;
            var r = await this.$7.lease(t);
            return r.kind === "unauthorized"
              ? (this.$16 === n && (this.$16 = null), r)
              : r.kind === "not_found"
                ? { cause: "http", detail: r.detail, kind: "failure" }
                : r.kind === "ok"
                  ? null
                  : r;
          }),
          (n.$30 = async function (t) {
            var e,
              n = t.entry,
              r = t.generation,
              o = t.prepared,
              a = t.token,
              i = await this.$7.fetch(a);
            if (i.kind === "unauthorized") return i;
            var l = i.kind === "ok" ? x(i.entries) : null;
            return l == null
              ? o
              : (e = $({ after: l, before: n })) != null
                ? e
                : this.$29({ entry: l, generation: r, token: a });
          }),
          (n.$29 = async function (t) {
            var e,
              n = t.entry,
              r = t.generation,
              o = t.token,
              a = this.$31(n);
            if (a != null) return a;
            var i = this.$32(n.vmId, r),
              l = this.$33(n.vmId, r),
              s = l || this.$15(),
              u = await this.$34(o, n, r);
            if (u.kind !== "ok") return u;
            var c = u.entry,
              d =
                c === n
                  ? null
                  : (e = $({ after: c, before: n })) != null
                    ? e
                    : this.$31(c);
            return d != null
              ? d
              : s
                ? this.$35({ entry: c, generation: r, isForced: i, token: o })
                : { entry: c, kind: "ok", wake: v };
          }),
          (n.$31 = function (t) {
            return w(t)
              ? null
              : t.vmType !== g || !this.$2()
                ? {
                    cause: "unsupported_vm_type",
                    detail: "VM type " + String(t.vmType) + " is not supported",
                    kind: "failure",
                  }
                : N(t)
                  ? {
                      cause: "cvm_replacement_in_progress",
                      detail: "Confidential VM is being replaced",
                      kind: "failure",
                    }
                  : this.$36(t)
                    ? P(t)
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
          (n.$36 = function (t) {
            var e = t.noiseNotaryToken;
            return (
              e != null &&
              e.startsWith(y) &&
              e.length > y.length &&
              t.notaryExpiresAtMs - c > this.$4()
            );
          }),
          (n.$34 = async function (t, n, r) {
            var e,
              o = (e = n.state) == null ? void 0 : e.toUpperCase();
            return o != null && C.has(o)
              ? { cause: "vm_state", detail: "VM is " + o, kind: "failure" }
              : o != null && b.has(o)
                ? this.$37(t, n.vmId, r)
                : { entry: n, kind: "ok" };
          }),
          (n.$35 = function (t) {
            var e,
              n = this,
              r = t.entry,
              o = t.generation,
              a = t.isForced,
              i = t.token,
              l = this.$8,
              s = (e = this.$18.get(r.vmId)) != null ? e : this.$38(i, r.vmId);
            return (
              s.then(function (e) {
                return n.$39({
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
          (n.$38 = function (t, n) {
            var e = this,
              r = this.$7.wake(t, n).catch(function () {
                return S;
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
          (n.$33 = function (t, n) {
            if (n !== this.$11) return !1;
            var e = this.$10 === t;
            return ((this.$10 = null), e);
          }),
          (n.$32 = function (t, n) {
            if (n !== this.$11) return !1;
            var e = this.$9 === t;
            return ((this.$9 = null), e);
          }),
          (n.$39 = function (t) {
            var e = t.epoch,
              n = t.generation,
              r = t.isForced,
              o = t.vmId,
              a = t.woke;
            (r && k(a),
              r &&
                a.kind === "unauthorized" &&
                n === this.$11 &&
                e === this.$8 &&
                (this.$9 = o));
          }),
          (n.$37 = async function (t, n, r, o, a) {
            (o === void 0 && (o = 0), a === void 0 && (a = this.$4()));
            var e = Math.min(d * Math.pow(2, o), m);
            if (o >= p || this.$4() - a + e > _)
              return {
                cause: "not_running",
                detail: "VM was not ready in time",
                kind: "failure",
              };
            if ((await this.$20(e), r !== this.$11)) return f;
            var i = await this.$7.fetch(t),
              l = D(i, n);
            return l != null ? l : this.$37(t, n, r, o + 1, a);
          }),
          (n.$24 = async function (t) {
            var e = await this.$17();
            return e.kind !== "ok"
              ? null
              : (t === this.$11 && (this.$1 = e.token), e.token);
          }),
          (n.$26 = function (t, n) {
            n === this.$11 && this.$1 === t && (this.$1 = null);
          }),
          t
        );
      })();
    function E() {
      return r("justknobx")._("7766");
    }
    function k(e) {
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
        .sendLogs(R);
    }
    function I(e) {
      var t = {
        notaryToken: e.notaryToken,
        vmAuthToken: e.vmAuthToken,
        vmId: e.vmId,
      };
      return e.vmType === g
        ? babelHelpers.extends({}, t, { confidential: !0 })
        : t;
    }
    function T(e) {
      return e.kind === "failure" && e.cause === "cvm_notary_unavailable";
    }
    function D(e, t) {
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
      if (!w(r) && N(r))
        return {
          cause: "cvm_replacement_in_progress",
          detail: "Confidential VM is being replaced",
          kind: "failure",
        };
      var o = (n = r.state) == null ? void 0 : n.toUpperCase();
      return o != null && C.has(o)
        ? { cause: "vm_state", detail: "VM is " + o, kind: "failure" }
        : o != null && b.has(o)
          ? null
          : { entry: r, kind: "ok" };
    }
    function x(e) {
      var t = e.find(function (e) {
        return e.isDefault;
      });
      return t != null ? t : e.every(w) || e.length === 1 ? e[0] : null;
    }
    function $(e) {
      var t = e.after,
        n = e.before;
      return !w(n) && w(t)
        ? {
            cause: "unsupported_vm_type",
            detail: "Confidential VM came back as a standard VM",
            kind: "failure",
          }
        : null;
    }
    function P(e) {
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
    function N(e) {
      var t;
      return (
        ((t = e.state) == null ? void 0 : t.toUpperCase().startsWith(h)) === !0
      );
    }
    function M(e) {
      return e.vmType === g;
    }
    function w(e) {
      return o("WAWebHatchVmFetcher").isStandardVmType(e.vmType);
    }
    async function A(e, t) {
      var n = await self.fetch(
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
    }
    l.WAWebHatchVmCredentialsResolver = L;
  },
  98,
);
