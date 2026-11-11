__d(
  "WAWebHatchLinkedStatusManager",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebHatchLinkedStatusFetchFailure",
    "WAWebLocalStorage",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMuseChannelStatus",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = "hatch-linked-status",
      p = (function () {
        function t() {
          ((this.$1 = null),
            (this.$2 = "not_loaded"),
            (this.$3 = null),
            (this.$4 = !1),
            (this.$5 = []),
            (this.$6 = null),
            (this.$7 = 0),
            (this.$8 = null),
            (this.$9 = new (o("WAResolvable").Resolvable)()),
            (this.$10 = !1));
        }
        var r = t.prototype;
        return (
          (r.registerFetcher = function (t) {
            var e = this.$8 != null;
            ((this.$6 = t), this.$11(), e && this.fetchAndUpdateStatus());
          }),
          (r.subscribeToLinkedStatus = function (t) {
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
          (r.getLinkedStatus = function () {
            return this.$1;
          }),
          (r.getLinkedStatusState = function () {
            return this.$2;
          }),
          (r.getLastConfirmedLinkedStatusState = function () {
            return this.$3;
          }),
          (r.getMuseChannelStatusForLogging = function () {
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
          (r.isLinked = function () {
            return this.$3 === "linked";
          }),
          (r.isUnlinked = function () {
            return this.$3 === "unlinked";
          }),
          (r.getKnownConfirmedLinkedStatusState = function () {
            var e;
            return (e = this.$3) != null ? e : g();
          }),
          (r.fetchConfirmedLinkedStatusStateIfUnknown = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.getKnownConfirmedLinkedStatusState();
              return e != null
                ? e
                : (this.$8 == null && this.fetchAndUpdateStatus(), this.$12());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.markUnlinked = function () {
            ((this.$1 = null),
              (this.$2 = "unlinked"),
              (this.$3 = "unlinked"),
              f("unlinked"),
              this.$11(),
              this.$13());
          }),
          (r.fetchAndUpdateStatus = function () {
            var t = this;
            if (this.$8 != null) return ((this.$10 = !0), !0);
            var n = this.$6;
            if (n == null)
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[HatchLinkedStatusManager] no fetcher registered, skipping",
                    ])),
                ),
                !1
              );
            var r = this.$7,
              a = n()
                .then(function (e) {
                  r === t.$7 && t.$14(e);
                })
                .catch(function (e) {
                  r === t.$7 &&
                    (o(
                      "WAWebHatchLinkedStatusFetchFailure",
                    ).logHatchLinkedStatusFetchFailure(e),
                    t.$15());
                });
            return (
              (this.$8 = a),
              a.then(function () {
                t.$8 === a &&
                  ((t.$8 = null),
                  t.$10 && ((t.$10 = !1), t.fetchAndUpdateStatus()));
              }),
              !0
            );
          }),
          (r.$12 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.$8;
              return e == null || this.$3 != null
                ? this.$3
                : (yield (d || (d = n("Promise"))).race([e, this.$9.promise]),
                  this.$12());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$14 = function (t) {
            var e = t != null && _(t) ? "linked" : "unlinked";
            ((this.$1 = t),
              (this.$2 = e),
              (this.$3 = e),
              e === "linked" && (this.$4 = !0),
              f(e),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[HatchLinkedStatusManager] fetched linked status",
                  ])),
              ),
              this.$13());
          }),
          (r.$15 = function () {
            ((this.$2 = "failed"), this.$13());
          }),
          (r.$11 = function () {
            ((this.$7 += 1),
              (this.$8 = null),
              (this.$10 = !1),
              this.$9.resolve(),
              (this.$9 = new (o("WAResolvable").Resolvable)()));
          }),
          (r.$13 = function () {
            for (var e of [].concat(this.$5)) e(this.$1);
          }),
          t
        );
      })();
    function _(e) {
      return e.hasChannel && e.status === "ACTIVE" && e.isPaired;
    }
    function f(e) {
      try {
        var t,
          n =
            (t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
              ? void 0
              : t.toString();
        n != null &&
          (r("WAWebLocalStorage") == null ||
            r("WAWebLocalStorage").setItem(
              m,
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
    function g() {
      try {
        var e,
          t =
            (e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
              ? void 0
              : e.toString(),
          n =
            r("WAWebLocalStorage") == null
              ? void 0
              : r("WAWebLocalStorage").getItem(m);
        return t == null || n == null ? null : h(JSON.parse(n), t);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[HatchLinkedStatusManager] reading the confirmed state failed",
                ])),
            )
            .sendLogs("hatch-linked-status-read-failed", { sampling: 0.01 }),
          null
        );
      }
    }
    function h(e, t) {
      if (e == null || typeof e != "object") return null;
      var n = e.owner,
        r = e.state;
      return n === t && (r === "linked" || r === "unlinked") ? r : null;
    }
    var y = new p(),
      C = y;
    l.default = C;
  },
  98,
);
