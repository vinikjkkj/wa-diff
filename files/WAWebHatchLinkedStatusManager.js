__d(
  "WAWebHatchLinkedStatusManager",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebBoolFunc",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebHatchLinkedStatusFetchFailure",
    "WAWebLocalStorage",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMuseChannelStatus",
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
            (this.$7 = o("WAWebBoolFunc").returnFalse),
            (this.$8 = 0),
            (this.$9 = null),
            (this.$10 = null),
            (this.$11 = null),
            (this.$12 = null),
            (this.$13 = new (o("WAResolvable").Resolvable)()),
            (this.$14 = !1),
            (this.$15 = null));
        }
        var n = t.prototype;
        return (
          (n.registerFetcher = function (t, n) {
            if (
              (n === void 0 && (n = o("WAWebBoolFunc").returnFalse),
              !(t === this.$6 && n === this.$7))
            ) {
              var e = this.$9 != null || this.$15 != null;
              ((this.$6 = t),
                (this.$7 = n),
                this.$16(),
                e && this.fetchAndUpdateStatus());
            }
          }),
          (n.subscribeToLinkedStatus = function (t) {
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
          (n.getLinkedStatus = function () {
            return this.$1;
          }),
          (n.getLinkedStatusState = function () {
            return this.$2;
          }),
          (n.getLastConfirmedLinkedStatusState = function () {
            return this.$3;
          }),
          (n.getMuseChannelStatusForLogging = function () {
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
          (n.isLinked = function () {
            return this.$3 === "linked";
          }),
          (n.isUnlinked = function () {
            return this.$3 === "unlinked";
          }),
          (n.getKnownConfirmedLinkedStatusState = function () {
            var e;
            return (e = this.$3) != null ? e : v();
          }),
          (n.fetchConfirmedLinkedStatusStateIfUnknown = async function (t) {
            var e,
              n =
                (t == null ? void 0 : t.ignoreStoredState) === !0
                  ? this.$3
                  : this.getKnownConfirmedLinkedStatusState();
            if (n != null) return n;
            if (
              this.$9 == null ||
              this.$10 !==
                ((e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
                  ? void 0
                  : e.toString())
            )
              this.fetchAndUpdateStatus();
            else {
              var r;
              (r = this.$12) == null || r.resolve();
            }
            return this.$17();
          }),
          (n.markUnlinked = function () {
            ((this.$1 = null),
              (this.$2 = "unlinked"),
              (this.$3 = "unlinked"),
              C("unlinked"),
              this.$16(),
              this.$18());
          }),
          (n.resetForTests = function () {
            var e;
            ((this.$1 = null),
              (this.$2 = "not_loaded"),
              (this.$3 = null),
              (this.$4 = !1),
              (this.$5 = []),
              (this.$6 = null),
              (this.$7 = o("WAWebBoolFunc").returnFalse),
              (this.$10 = null),
              (this.$11 = null),
              (e = this.$12) == null || e.resolve(),
              this.$16(),
              b());
          }),
          (n.fetchAndUpdateStatus = function (n) {
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
            ((this.$9 = p), (this.$10 = c), (this.$11 = m.promise));
            var f = function () {
              a.$9 === p &&
                ((a.$9 = null),
                a.$14 && ((a.$14 = !1), a.fetchAndUpdateStatus()));
            };
            return (p.then(f, f), !0);
          }),
          (n.$19 = function () {
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
          (n.$20 = async function (t, n, r, o, a) {
            a === void 0 && (a = 0);
            try {
              return { kind: "fetched", status: await t() };
            } catch (t) {
              var e = r[a];
              if (e == null || !this.$7(t)) throw t;
              (await Promise.resolve(), o(), await this.$23(h(e), n));
            }
            return n() ? this.$20(t, n, r, o, a + 1) : { kind: "dropped" };
          }),
          (n.$23 = async function (t, n) {
            var e = new (o("WAResolvable").Resolvable)();
            (n() && (this.$12 = e),
              await Promise.race([o("WAPromiseDelays").delayMs(t), e.promise]),
              this.$12 === e && (this.$12 = null));
          }),
          (n.$17 = async function () {
            var e = this.$9,
              t = this.$11;
            if (e == null || t == null || this.$3 != null) return this.$3;
            var n = await Promise.race([
              e.then(o("WAWebBoolFunc").returnFalse),
              this.$13.promise.then(o("WAWebBoolFunc").returnFalse),
              t.then(o("WAWebBoolFunc").returnTrue),
            ]);
            return n && this.$9 === e ? this.$3 : this.$17();
          }),
          (n.$21 = function (t) {
            var e = t != null && y(t) ? "linked" : "unlinked";
            ((this.$1 = t),
              (this.$2 = e),
              (this.$3 = e),
              e === "linked" && (this.$4 = !0),
              C(e),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] fetched linked status",
                  ])),
              ),
              this.$18());
          }),
          (n.$22 = function () {
            ((this.$2 = "failed"), this.$18());
          }),
          (n.$16 = function () {
            ((this.$8 += 1),
              (this.$9 = null),
              (this.$14 = !1),
              (this.$15 = null),
              (this.$12 = null),
              this.$13.resolve(),
              (this.$13 = new (o("WAResolvable").Resolvable)()));
          }),
          (n.$18 = function () {
            for (var e of [].concat(this.$5))
              try {
                e(this.$1);
              } catch (e) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[HatchLinkedStatusManager] a linked status listener threw",
                      ])),
                  )
                  .sendLogs("hatch-linked-status-listener-failed", {
                    sampling: 0.01,
                  });
              }
          }),
          t
        );
      })();
    function h(e) {
      return e * (1 + (Math.random() - 0.5) * f);
    }
    function y(e) {
      return e.hasChannel && e.status === "ACTIVE" && e.isPaired;
    }
    function C(e) {
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
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[HatchLinkedStatusManager] storing the confirmed state failed",
              ])),
          )
          .sendLogs("hatch-linked-status-store-failed", { sampling: 0.01 });
      }
    }
    function b() {
      try {
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(p);
      } catch (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[HatchLinkedStatusManager] clearing the confirmed state failed",
              ])),
          )
          .sendLogs("hatch-linked-status-clear-failed", { sampling: 0.01 });
      }
    }
    function v() {
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
        return t == null || n == null ? null : S(JSON.parse(n), t);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[HatchLinkedStatusManager] reading the confirmed state failed",
                ])),
            )
            .sendLogs("hatch-linked-status-read-failed", { sampling: 0.01 }),
          null
        );
      }
    }
    function S(e, t) {
      if (e == null || typeof e != "object") return null;
      var n = e.owner,
        r = e.state;
      return n === t && (r === "linked" || r === "unlinked") ? r : null;
    }
    var R = new g(),
      L = R;
    l.default = L;
  },
  98,
);
