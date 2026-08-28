__d(
  "AYMTTipsLoader",
  [
    "invariant",
    "AYMTSequentialDisplayManager",
    "AYMTTipActions",
    "AdsMgmt2025H1ExperimentUtils",
    "AsyncRequest",
    "Promise",
    "XAYMTClientSideTipsAsyncControllerRouteBuilder",
    "err",
    "mergeDeepInto",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = new Set(o("AYMTSequentialDisplayManager").V3_CRITICAL_CHANNELS),
      c = "AYMTIntelligentComponentsChannel",
      d = ["ad_account_id", "business_id"],
      m = ["cache", "channel", "invalidate", "tip", "validate"],
      p = new Set(m),
      _ = (function () {
        function t() {
          ((this.$1 = {}),
            (this.$2 = {}),
            (this.$3 = {}),
            (this.$4 = {}),
            (this.$5 = {}),
            (this.$6 = {}),
            (this.$7 = !1),
            (this.$8 = {}),
            (this.$9 = {}),
            (this.$10 = new Set()),
            (this.$11 = {}),
            (this.$12 = {}));
        }
        var a = t.prototype;
        return (
          (a.$13 = function () {
            for (var e of Object.keys(this.$2)) this.$2[e].resolve(null);
            ((this.$1 = {}),
              (this.$2 = {}),
              (this.$3 = {}),
              (this.$4 = {}),
              (this.$5 = {}),
              (this.$6 = {}),
              (this.$7 = !1),
              (this.$8 = {}),
              (this.$9 = {}),
              this.$10.clear(),
              (this.$11 = {}),
              (this.$12 = {}));
          }),
          (a.$14 = function (o, a, i, l) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              var s = new Date(),
                u = "id_" + Math.random() + "_" + s.getTime();
              ((t.$2[u] = { resolve: e }),
                (t.$3[a] = u),
                (t.$1[a + u] = u),
                (t.$4[a] = o));
              var c = {
                  channel_name: a,
                  is_v3_sequencing_enabled: i,
                  params: o,
                  previous_params: t.$5[a],
                  previous_tips_aymt_data: t.$6[a],
                  request_id: u,
                  should_show_all_tips: l,
                },
                d = o.channel;
              (t.$2[a] ||
                (d && d !== a) ||
                ((c.channel = d),
                (c.cache = o.cache),
                (c.validate = o.validate),
                (c.tip = o.tip),
                (c.invalidate = o.invalidate)),
                new (r("AsyncRequest"))()
                  .setURI(
                    r(
                      "XAYMTClientSideTipsAsyncControllerRouteBuilder",
                    ).buildUri(c),
                  )
                  .setErrorHandler(function (e) {
                    n(e.errorDescription);
                  })
                  .setAllowCrossPageTransition(!0)
                  .send());
            });
          }),
          (a.$15 = function (t) {
            var e = [];
            return (
              t.forEach(function (t, n) {
                var r = t.tip_id;
                if (!(typeof r != "string" && typeof r != "number")) {
                  var o = t.ranking_score;
                  e.push({
                    rankingScore:
                      typeof o == "number" && Number.isFinite(o) ? o : 0,
                    tip: t,
                    tipID: String(r),
                    tipIndex: n,
                  });
                }
              }),
              e
            );
          }),
          (a.reportHighCollisionNuxIfInUniverse = function (t) {
            (o(
              "AYMTSequentialDisplayManager",
            ).AYMTCollisionExposureObserver.registerSurface(t),
              o(
                "AYMTSequentialDisplayManager",
              ).AYMTCollisionExposureObserver.reportEligibleTips(t, [t]));
          }),
          (a.$16 = function (t, n, a, i, l, s, u) {
            var e = this;
            o(
              "AYMTSequentialDisplayManager",
            ).AYMTSequentialDisplayManager.registerChannel(n, u, function (u) {
              if (l != null) {
                if (l(u) === !1) return !1;
              } else
                o("AYMTTipActions").dispatchTips(u, n, a, e.$4[n], t, i, s);
              u.length > 0 &&
                ((e.$5[n] = {}),
                r("mergeDeepInto")(e.$5[n], t),
                (e.$6[n] = u.map(function (e) {
                  var t;
                  return (t = JSON.stringify(e.aymt_data)) != null ? t : "";
                })));
            });
          }),
          (a.$17 = function (t, n, a, i) {
            var e = this,
              l = this.$14(t, n, !0, a),
              s = this.$3[n];
            r("promiseDone")(
              l,
              function (t) {
                if (e.$3[n] === s && t && t.tips && Array.isArray(t.tips)) {
                  if (u.has(n) && n !== c) {
                    var r;
                    o(
                      "AYMTSequentialDisplayManager",
                    ).AYMTCollisionExposureObserver.reportEligibleTips(
                      n,
                      (r = t.high_collision_tips) != null ? r : [],
                    );
                  }
                  var a = e.$15(t.tips);
                  o(
                    "AYMTSequentialDisplayManager",
                  ).AYMTSequentialDisplayManager.addChannelResult(
                    n,
                    t.tips,
                    a,
                    i,
                  );
                }
              },
              function () {
                e.$3[n] === s &&
                  o(
                    "AYMTSequentialDisplayManager",
                  ).AYMTSequentialDisplayManager.addChannelResult(n, [], [], i);
              },
            );
          }),
          (a.$18 = function (t, n, r, a, i) {
            i === void 0 && (i = !1);
            var e = {};
            for (var l of Object.keys(t).sort()) e[l] = t[l];
            var s = JSON.stringify({ params: e, shouldShowAllTips: r === !0 }),
              u = this.$10.has(n);
            return (u && (!i || this.$9[n] === s)) ||
              (u &&
                i &&
                !o(
                  "AYMTSequentialDisplayManager",
                ).AYMTSequentialDisplayManager.supersedeChannelLoad(n, a))
              ? !1
              : (this.$10.add(n), (this.$9[n] = s), this.$17(t, n, r, a), !0);
          }),
          (a.$19 = function (t, n, r) {
            var e;
            for (var o of d) {
              var a = t[o];
              a != null && (this.$11[o] = a);
            }
            var i = (e = this.$8[n]) != null ? e : {};
            for (var l of Object.keys(t))
              !d.includes(l) && !p.has(l) && (i[l] = t[l]);
            this.$8[n] = i;
            var s = t.channel || n;
            if (u.has(s)) {
              var c,
                _ = (c = this.$8[s]) != null ? c : {};
              for (var f of m) {
                var g = t[f];
                g != null && (_[f] = g);
              }
              this.$8[s] = _;
            }
            r != null && (this.$12[n] = r);
          }),
          (a.$20 = function (t) {
            return babelHelpers.extends({}, this.$11, this.$8[t]);
          }),
          (a.$21 = function (t, n) {
            var e = !1;
            for (var r of o("AYMTSequentialDisplayManager")
              .V3_CRITICAL_CHANNELS) {
              var a = this.$18(this.$20(r), r, this.$12[r], t, !0);
              r === n && (e = a);
            }
            return e;
          }),
          (a.$22 = function (t, n) {
            this.$7 = !0;
            for (var e of o("AYMTSequentialDisplayManager")
              .V3_CRITICAL_CHANNELS)
              e !== t &&
                o(
                  "AYMTSequentialDisplayManager",
                ).AYMTSequentialDisplayManager.beginChannelLoad(e);
            return this.$21(n, t);
          }),
          (a.loadTips = function (t, n, a, i, l, s) {
            var e = this,
              c = u.has(n);
            if (
              (c &&
                o(
                  "AYMTSequentialDisplayManager",
                ).AYMTCollisionExposureObserver.registerSurface(n),
              o(
                "AYMTSequentialDisplayManager",
              ).AYMTSequentialDisplayManager.isV3Enabled())
            ) {
              var d = o(
                "AYMTSequentialDisplayManager",
              ).AYMTSequentialDisplayManager.beginChannelLoad(n);
              return (
                d.isNewCycle && this.$13(),
                this.$16(t, n, a, i, l, s, d.cycleID),
                u.has(n)
                  ? (this.$19(t, n, i),
                    this.$7 ? this.$21(d.cycleID, n) : this.$22(n, d.cycleID))
                  : this.$18(t, n, i, d.cycleID)
              );
            }
            return (
              r("promiseDone")(
                this.$14(t, n, !1, i),
                function (l) {
                  if (l && l.tips && Array.isArray(l.tips)) {
                    if (c) {
                      var u;
                      o(
                        "AYMTSequentialDisplayManager",
                      ).AYMTCollisionExposureObserver.reportEligibleTips(
                        n,
                        (u = l.high_collision_tips) != null ? u : [],
                      );
                    }
                    (o("AYMTTipActions").dispatchTips(
                      l.tips,
                      n,
                      a,
                      e.$4[n],
                      t,
                      i,
                      s,
                    ),
                      (e.$5[n] = {}),
                      r("mergeDeepInto")(e.$5[n], t),
                      (e.$6[n] = l.tips.map(function (e) {
                        var t;
                        return (t = JSON.stringify(e.aymt_data)) != null
                          ? t
                          : "";
                      })));
                  }
                },
                function (e) {
                  o("AYMTTipActions").dispatchTipsLoadingError(
                    r("err")(
                      "Tip loading request failed for %s channel %s",
                      n,
                      e.__html,
                    ),
                    n,
                    a,
                  );
                },
              ),
              !0
            );
          }),
          (a.setTips = function (t, n, r) {
            (t && t.tips) || s(0, 1761, n);
            var e = this.$2[r];
            e != null &&
              (this.$3[n] !== r &&
              !(
                o(
                  "AdsMgmt2025H1ExperimentUtils",
                ).getUserShouldMigrateAAUMessages() &&
                n === "AYMTAdsManagerPrivacyGuidanceFrameworkChannel"
              )
                ? e.resolve(null)
                : e.resolve(t),
              delete this.$2[r]);
          }),
          t
        );
      })(),
      f = new _(),
      g = f;
    l.default = g;
  },
  98,
);
