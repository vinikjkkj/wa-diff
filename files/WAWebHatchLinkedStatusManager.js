__d(
  "WAWebHatchLinkedStatusManager",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebLocalStorage",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      _ = (function () {
        function t() {
          ((this.$1 = null),
            (this.$2 = "not_loaded"),
            (this.$3 = null),
            (this.$4 = []),
            (this.$5 = null),
            (this.$6 = 0),
            (this.$7 = null),
            (this.$8 = new (o("WAResolvable").Resolvable)()),
            (this.$9 = !1));
        }
        var a = t.prototype;
        return (
          (a.registerFetcher = function (t) {
            var e = this.$7 != null;
            ((this.$5 = t), this.$10(), e && this.fetchAndUpdateStatus());
          }),
          (a.subscribeToLinkedStatus = function (t) {
            var e = this;
            return (
              this.$4.push(t),
              function () {
                e.$4 = e.$4.filter(function (e) {
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
          (a.isLinked = function () {
            return this.$3 === "linked";
          }),
          (a.isUnlinked = function () {
            return this.$3 === "unlinked";
          }),
          (a.fetchConfirmedLinkedStatusStateIfUnknown = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                t = (e = this.$3) != null ? e : h();
              return t != null
                ? t
                : (this.$7 == null && this.fetchAndUpdateStatus(), this.$11());
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
              g("unlinked"),
              this.$10(),
              this.$12());
          }),
          (a.fetchAndUpdateStatus = function () {
            var t = this;
            if (this.$7 != null) {
              this.$9 = !0;
              return;
            }
            var n = this.$5;
            if (n == null) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] no fetcher registered, skipping",
                  ])),
              );
              return;
            }
            var a = this.$6,
              i = n()
                .then(function (e) {
                  a === t.$6 && t.$13(e);
                })
                .catch(function (e) {
                  a === t.$6 &&
                    (o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[HatchLinkedStatusManager] fetch failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("hatch-linked-status-fetch-fail"),
                    t.$14());
                });
            ((this.$7 = i),
              i.then(function () {
                t.$7 === i &&
                  ((t.$7 = null),
                  t.$9 && ((t.$9 = !1), t.fetchAndUpdateStatus()));
              }));
          }),
          (a.__resetForTesting = function () {
            ((this.$1 = null),
              (this.$2 = "not_loaded"),
              (this.$3 = null),
              (this.$4 = []),
              (this.$5 = null),
              this.$10(),
              r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").removeItem(p));
          }),
          (a.$11 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.$7;
              return e == null || this.$3 != null
                ? this.$3
                : (yield (m || (m = n("Promise"))).race([e, this.$8.promise]),
                  this.$11());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$13 = function (t) {
            var e = t != null && f(t) ? "linked" : "unlinked";
            ((this.$1 = t),
              (this.$2 = e),
              (this.$3 = e),
              g(e),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] fetched linked status",
                  ])),
              ),
              this.$12());
          }),
          (a.$14 = function () {
            ((this.$2 = "failed"), this.$12());
          }),
          (a.$10 = function () {
            ((this.$6 += 1),
              (this.$7 = null),
              (this.$9 = !1),
              this.$8.resolve(),
              (this.$8 = new (o("WAResolvable").Resolvable)()));
          }),
          (a.$12 = function () {
            for (var e of [].concat(this.$4)) e(this.$1);
          }),
          t
        );
      })();
    function f(e) {
      return e.hasChannel && e.status === "ACTIVE" && e.isPaired;
    }
    function g(e) {
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
    function h() {
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
        return t == null || n == null ? null : y(JSON.parse(n), t);
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
    function y(e, t) {
      if (e == null || typeof e != "object") return null;
      var n = e.owner,
        r = e.state;
      return n === t && (r === "linked" || r === "unlinked") ? r : null;
    }
    var C = new _(),
      b = C;
    l.default = b;
  },
  98,
);
