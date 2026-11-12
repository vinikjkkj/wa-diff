__d(
  "WAWebHatchLinkedStatusManager",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebHatchLinkedStatusFetchFailure",
    "WAWebLocalStorage",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMuseChannelStatus",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "hatch-linked-status",
      _ = [2e3, 8e3, 3e4],
      f = 0.5,
      g = (function () {
        function t() {
          ((this.$1 = null),
            (this.$2 = "not_loaded"),
            (this.$3 = null),
            (this.$4 = !1),
            (this.$5 = []),
            (this.$6 = null),
            (this.$7 = h),
            (this.$8 = 0),
            (this.$9 = null),
            (this.$10 = null),
            (this.$11 = null),
            (this.$12 = null),
            (this.$13 = new (o("WAResolvable").Resolvable)()),
            (this.$14 = !1),
            (this.$15 = null));
        }
        var a = t.prototype;
        return (
          (a.registerFetcher = function (t, n) {
            if ((n === void 0 && (n = h), !(t === this.$6 && n === this.$7))) {
              var e = this.$9 != null || this.$15 != null;
              ((this.$6 = t),
                (this.$7 = n),
                this.$16(),
                e && this.fetchAndUpdateStatus());
            }
          }),
          (a.subscribeToLinkedStatus = function (t) {
            var e = this;
            return (
              this.$5.push(t),
              function () {
                e.$5 = e.$5.filter(function (e) {
                  return e !== t;
                });
              }
            );
          }),
          (a.getLinkedStatus = function () {
            return this.$1;
          }),
          (a.getLinkedStatusState = function () {
            return this.$2;
          }),
          (a.getLastConfirmedLinkedStatusState = function () {
            return this.$3;
          }),
          (a.getMuseChannelStatusForLogging = function () {
            var e = this;
            return (function (t) {
              return t === "linked"
                ? o("WAWebWamEnumMuseChannelStatus").MUSE_CHANNEL_STATUS
                    .CHANNEL_CONNECTED
                : t === "unlinked" && e.$4
                  ? o("WAWebWamEnumMuseChannelStatus").MUSE_CHANNEL_STATUS
                      .CHANNEL_DISCONNECTED
                  : o("WAWebWamEnumMuseChannelStatus").MUSE_CHANNEL_STATUS
                      .UNKNOWN;
            })(this.$2);
          }),
          (a.isLinked = function () {
            return this.$3 === "linked";
          }),
          (a.isUnlinked = function () {
            return this.$3 === "unlinked";
          }),
          (a.getKnownConfirmedLinkedStatusState = function () {
            var e;
            return (e = this.$3) != null ? e : S();
          }),
          (a.fetchConfirmedLinkedStatusStateIfUnknown = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                t = this.getKnownConfirmedLinkedStatusState();
              if (t != null) return t;
              if (
                this.$9 == null ||
                this.$10 !==
                  ((e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
                    ? void 0
                    : e.toString())
              )
                this.fetchAndUpdateStatus();
              else {
                var n;
                (n = this.$12) == null || n.resolve();
              }
              return this.$17();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.markUnlinked = function () {
            ((this.$1 = null),
              (this.$2 = "unlinked"),
              (this.$3 = "unlinked"),
              b("unlinked"),
              this.$16(),
              this.$18());
          }),
          (a.resetForTests = function () {
            var e;
            ((this.$1 = null),
              (this.$2 = "not_loaded"),
              (this.$3 = null),
              (this.$4 = !1),
              (this.$5 = []),
              (this.$6 = null),
              (this.$7 = h),
              (this.$10 = null),
              (this.$11 = null),
              (e = this.$12) == null || e.resolve(),
              this.$16(),
              v());
          }),
          (a.fetchAndUpdateStatus = function (n) {
            var t,
              a = this;
            if (this.$9 != null) {
              var i;
              if (
                this.$10 ===
                ((i = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
                  ? void 0
                  : i.toString())
              )
                return ((this.$14 = !0), !0);
              this.$16();
            }
            var l = this.$6;
            if (l == null)
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[HatchLinkedStatusManager] no fetcher registered, skipping",
                    ])),
                ),
                !1
              );
            var s = r("justknobx")._("7616");
            if (
              s &&
              (n == null ? void 0 : n.skipCanonicalWait) !== !0 &&
              !o("WAWebCanonicalUtils").isCanonicalPresent() &&
              o("WAWebCanonicalGating").isCanonicalEnabled()
            )
              return (this.$19(), !0);
            this.$15 = null;
            var u = this.$8,
              c =
                (t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
                  ? void 0
                  : t.toString(),
              d = function () {
                var e;
                return (
                  u === a.$8 &&
                  ((e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
                    ? void 0
                    : e.toString()) === c
                );
              },
              m = new (o("WAResolvable").Resolvable)(),
              p = this.$20(l, d, s ? _ : [], function () {
                var e = m;
                ((m = new (o("WAResolvable").Resolvable)()),
                  a.$11 === e.promise && (a.$11 = m.promise),
                  e.resolve());
              })
                .then(function (e) {
                  e.kind === "dropped" || !d() || a.$21(e.status);
                })
                .catch(function (e) {
                  d() &&
                    (o(
                      "WAWebHatchLinkedStatusFetchFailure",
                    ).logHatchLinkedStatusFetchFailure(e),
                    a.$22());
                });
            return (
              (this.$9 = p),
              (this.$10 = c),
              (this.$11 = m.promise),
              p.then(function () {
                a.$9 === p &&
                  ((a.$9 = null),
                  a.$14 && ((a.$14 = !1), a.fetchAndUpdateStatus()));
              }),
              !0
            );
          }),
          (a.$19 = function () {
            var e,
              t = this,
              n = this.$15,
              r = this.$8,
              a =
                (e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
                  ? void 0
                  : e.toString();
            if (
              !(
                (n == null ? void 0 : n.generation) === r &&
                (n == null ? void 0 : n.owner) === a
              )
            ) {
              var i = { generation: r, owner: a };
              ((this.$15 = i),
                o("WAWebCanonicalUtils")
                  .waitForCanonicalPresent()
                  .then(function () {
                    var e;
                    t.$15 === i &&
                      ((t.$15 = null),
                      r === t.$8 &&
                        ((e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) ==
                        null
                          ? void 0
                          : e.toString()) === a &&
                        t.fetchAndUpdateStatus());
                  }));
            }
          }),
          (a.$20 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r, o, a) {
                a === void 0 && (a = 0);
                try {
                  return { kind: "fetched", status: yield e() };
                } catch (e) {
                  var i = r[a];
                  if (i == null || !this.$7(e)) throw e;
                  (yield (m || (m = n("Promise"))).resolve(),
                    o(),
                    yield this.$23(y(i), t));
                }
                return t() ? this.$20(e, t, r, o, a + 1) : { kind: "dropped" };
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$23 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = new (o("WAResolvable").Resolvable)();
                (t() && (this.$12 = r),
                  yield (m || (m = n("Promise"))).race([
                    o("WAPromiseDelays").delayMs(e),
                    r.promise,
                  ]),
                  this.$12 === r && (this.$12 = null));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.$9,
                t = this.$11;
              if (e == null || t == null || this.$3 != null) return this.$3;
              var r = yield (m || (m = n("Promise"))).race([
                e.then(function () {
                  return !1;
                }),
                this.$13.promise.then(function () {
                  return !1;
                }),
                t.then(function () {
                  return !0;
                }),
              ]);
              return r && this.$9 === e ? this.$3 : this.$17();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$21 = function (t) {
            var e = t != null && C(t) ? "linked" : "unlinked";
            ((this.$1 = t),
              (this.$2 = e),
              (this.$3 = e),
              e === "linked" && (this.$4 = !0),
              b(e),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] fetched linked status",
                  ])),
              ),
              this.$18());
          }),
          (a.$22 = function () {
            ((this.$2 = "failed"), this.$18());
          }),
          (a.$16 = function () {
            ((this.$8 += 1),
              (this.$9 = null),
              (this.$14 = !1),
              (this.$15 = null),
              (this.$12 = null),
              this.$13.resolve(),
              (this.$13 = new (o("WAResolvable").Resolvable)()));
          }),
          (a.$18 = function () {
            for (var e of [].concat(this.$5)) e(this.$1);
          }),
          t
        );
      })();
    function h(e) {
      return !1;
    }
    function y(e) {
      return e * (1 + (Math.random() - 0.5) * f);
    }
    function C(e) {
      return e.hasChannel && e.status === "ACTIVE" && e.isPaired;
    }
    function b(e) {
      try {
        var t,
          n =
            (t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
              ? void 0
              : t.toString();
        n != null &&
          (r("WAWebLocalStorage") == null ||
            r("WAWebLocalStorage").setItem(
              p,
              JSON.stringify({ owner: n, state: e }),
            ));
      } catch (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[HatchLinkedStatusManager] storing the confirmed state failed",
              ])),
          )
          .sendLogs("hatch-linked-status-store-failed", { sampling: 0.01 });
      }
    }
    function v() {
      try {
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(p);
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[HatchLinkedStatusManager] clearing the confirmed state failed",
              ])),
          )
          .sendLogs("hatch-linked-status-clear-failed", { sampling: 0.01 });
      }
    }
    function S() {
      try {
        var e,
          t =
            (e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
              ? void 0
              : e.toString(),
          n =
            r("WAWebLocalStorage") == null
              ? void 0
              : r("WAWebLocalStorage").getItem(p);
        return t == null || n == null ? null : R(JSON.parse(n), t);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[HatchLinkedStatusManager] reading the confirmed state failed",
                ])),
            )
            .sendLogs("hatch-linked-status-read-failed", { sampling: 0.01 }),
          null
        );
      }
    }
    function R(e, t) {
      if (e == null || typeof e != "object") return null;
      var n = e.owner,
        r = e.state;
      return n === t && (r === "linked" || r === "unlinked") ? r : null;
    }
    var L = new g(),
      E = L;
    l.default = E;
  },
  98,
);
