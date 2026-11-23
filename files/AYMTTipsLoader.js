__d(
  "AYMTTipsLoader",
  [
    "invariant",
    "AYMTSequentialDisplayManager",
    "AYMTTipActions",
    "AYMTTipDismissalNotifier",
    "AYMTV3SequenceChangedAction",
    "AdsDataAtom",
    "AdsHelpTrayUtils",
    "AdsIntelligentComponentsUtils",
    "AdsInterfacesRouterEvents",
    "AdsMgmt2025H1ExperimentUtils",
    "Arbiter",
    "AsyncRequest",
    "CurrentAdAccount",
    "ExecutionEnvironment",
    "FBLogger",
    "Promise",
    "URI",
    "WhatsAppManagerGrowthCardAYMTTypes",
    "XAYMTClientSideTipsAsyncControllerRouteBuilder",
    "XAYMTV3EligibilitySnapshotAsyncControllerRouteBuilder",
    "clearTimeout",
    "err",
    "mergeDeepInto",
    "performanceNow",
    "promiseDone",
    "qex",
    "requireDeferred",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = (p = r("requireDeferred"))("AdsAccountStore").__setRef(
        "AYMTTipsLoader",
      ),
      f = p("AdsInterfacesRouter").__setRef("AYMTTipsLoader"),
      g = p("URIInitDataUtil").__setRef("AYMTTipsLoader"),
      h = p("whenAdsIntelligentComponentServerContextReady").__setRef(
        "AYMTTipsLoader",
      ),
      y = "AYMTV3EligibilitySnapshot",
      C = "AYMTIntelligentComponentsChannel",
      b = "AYMTCampaignManagerMegaphoneChannel",
      v = "AYMTAMGlobalBannerChannel",
      S = "AYMTAMDAnchorlessNUXChannel",
      R = [
        "AYMTCampaignManagerMegaphoneChannel",
        "AYMTAMGlobalBannerChannel",
        "AYMTCampaignManagerModalChannel",
        "AYMTAMDAnchorlessNUXChannel",
      ],
      L = new Set(R),
      E = 2,
      k = [
        ["channel", "channel"],
        ["tip", "tip"],
        ["cache", "cache"],
        ["validate", "validate"],
        ["invalidate", "invalidate"],
      ],
      I = 35e3,
      T = 3e4,
      D = I - T;
    function x(e) {
      if (typeof e != "object" || e == null || Array.isArray(e)) return null;
      var t = {};
      for (var n of Object.keys(e)) t[n] = e[n];
      return t;
    }
    function $(e) {
      return Array.isArray(e) ? e : null;
    }
    function P(e) {
      var t = x(e);
      if (t == null) return null;
      var n = {};
      for (var r of Object.keys(t)) n[r] = t[r];
      return n;
    }
    function N(e) {
      var t = $(e);
      if (t == null) return null;
      var n = [];
      for (var r of t) {
        var o = P(r);
        if (o == null) return null;
        n.push(o);
      }
      return n;
    }
    function M(e) {
      return typeof e == "string" && e !== ""
        ? e
        : typeof e == "number" && Number.isFinite(e)
          ? String(e)
          : null;
    }
    function w(e) {
      return typeof e == "number" && Number.isFinite(e) ? e : null;
    }
    function A(e, t) {
      var n = babelHelpers.extends({}, e);
      return ((n.ranking_score = t), n);
    }
    function F(e) {
      var t = x(e),
        n = N(t == null ? void 0 : t.tips),
        r = $(t == null ? void 0 : t.candidates),
        o = $(t == null ? void 0 : t.extra_candidates),
        a = $(t == null ? void 0 : t.high_collision_tips);
      if (n == null || r == null || o == null || a == null) return null;
      var i = new Set();
      for (var l of a) {
        if (typeof l != "string" || l === "" || i.has(l)) return null;
        i.add(l);
      }
      var s = [],
        u = function () {
          var e = x(d),
            t = e == null ? void 0 : e.name,
            r = w(e == null ? void 0 : e.ranking_score),
            o = e == null ? void 0 : e.is_required,
            a =
              (e == null ? void 0 : e.spec) == null
                ? n.find(function (e) {
                    return e.name === t;
                  })
                : P(e.spec);
          if (
            a == null ||
            r == null ||
            M(a.tip_id) == null ||
            typeof t != "string" ||
            a.name !== t ||
            !i.has(t) ||
            typeof o != "boolean"
          )
            return { v: null };
          s.push({ isRequired: o, rankingScore: r, tip: a });
        },
        c;
      for (var d of r) if (((c = u()), c)) return c.v;
      var m = [];
      for (var p of o) {
        var _ = x(p),
          f = _ == null ? void 0 : _.name,
          g = w(_ == null ? void 0 : _.ranking_score),
          h = _ == null ? void 0 : _.is_required;
        if (
          typeof f != "string" ||
          !i.has(f) ||
          g == null ||
          typeof h != "boolean"
        )
          return null;
        m.push({ isRequired: h, name: f, rankingScore: g });
      }
      return {
        candidates: s,
        eligibleTipNames: i,
        extraCandidates: m,
        tips: n,
      };
    }
    function O(e) {
      var t = e,
        n = x(t),
        r = x(n == null ? void 0 : n.metadata),
        o = x(r == null ? void 0 : r.aymt_data),
        a = M(o == null ? void 0 : o.tip_id);
      return r == null ||
        typeof r.name != "string" ||
        x(r.ads_guidance_bluetip_data) == null ||
        w(n == null ? void 0 : n.score) == null ||
        a == null
        ? null
        : { message: e, tipID: a };
    }
    function B(e) {
      var t,
        n = e,
        r = x((t = x(n)) == null ? void 0 : t.messages);
      if (r == null) return !1;
      var o = r.aymt_tips;
      if (o == null) return !0;
      var a = x(o);
      return (
        a != null &&
        Object.keys(a).every(function (e) {
          var t = x(a[e]);
          return (
            x(t == null ? void 0 : t.metadata) != null &&
            w(t == null ? void 0 : t.score) != null
          );
        })
      );
    }
    function W(e) {
      var t = $(e);
      if (t == null) return null;
      var n = new Set();
      for (var r of t) {
        if (typeof r != "string" || n.has(r)) return null;
        n.add(r);
      }
      return n;
    }
    function q(e, t, n) {
      var r,
        o,
        a = e,
        i = x(a),
        l = x(i == null ? void 0 : i.channels),
        s = e == null || (r = e.ic) == null ? void 0 : r.response,
        u = e == null || (o = e.ic) == null ? void 0 : o.nux_messages,
        c = i == null ? void 0 : i.is_eligible,
        d = W(i == null ? void 0 : i.eligible_message_ids);
      if (
        i == null ||
        i.snapshot_id !== t ||
        i.status !== "complete" ||
        typeof c != "boolean" ||
        l == null ||
        s == null ||
        !B(s) ||
        u == null ||
        d == null ||
        c !== d.size >= E
      )
        return null;
      var m = new Map(),
        p = new Set();
      for (var _ of R) {
        var f = F(l[_]);
        if (f == null) return null;
        m.set(_, f);
        for (var g of f.eligibleTipNames) p.add(_ + "|" + g);
      }
      var h = new Map();
      for (var y of Object.keys(u)) {
        var b = O(u[y]);
        if (b == null) return null;
        (h.set(y, b), p.add(C + "|" + y));
      }
      return p.size !== d.size ||
        Array.from(d).some(function (e) {
          return !p.has(e);
        })
        ? null
        : {
            channels: m,
            icContext: n,
            icNUXMessages: h,
            icResponse: s,
            isEligible: c,
          };
    }
    function U(e, t) {
      var n;
      return (
        (n = {}),
        (n.ads_guidance_bluetip_data =
          t.message.metadata.ads_guidance_bluetip_data),
        (n.name = e),
        (n.tip_id = t.tipID),
        n
      );
    }
    function V() {
      return (u || (u = r("ExecutionEnvironment"))).canUseDOM
        ? (c || (c = r("URI"))).getRequestURI(!1).getPath().replace(/\/+$/, "")
        : "";
    }
    var H = /^\/adsmanager\/manage(\/(campaigns|adsets|ads))?$/;
    function G() {
      var e,
        t,
        n =
          (e = _.getModuleIfRequireable()) == null
            ? void 0
            : e.getSelectedAccountID();
      return [n == null ? "" : String(n), (t = X()) != null ? t : "", z()].join(
        "|",
      );
    }
    function z() {
      var e = V();
      return H.test(e) ? "/adsmanager/manage" : e;
    }
    function j(e, t) {
      var n = x(t.aymt_data);
      return n == null || M(n.aymt_request_id) == null
        ? null
        : e === v
          ? babelHelpers.extends({}, n, { name: t.name })
          : e === S
            ? babelHelpers.extends({}, n, {
                channel_id: t.channel_id,
                name: t.name,
                tip_id: n.tip_id,
              })
            : null;
    }
    function K(e, t) {
      var n = x(t);
      if (e == null || n == null) return !1;
      var r = Object.keys(n);
      return e.some(function (e) {
        var t = new Set(Object.keys(e));
        return (
          t.size === r.length &&
          r.every(function (r) {
            return t.has(r) && e[r] === n[r];
          })
        );
      });
    }
    function Q(e) {
      try {
        e.abandon();
      } catch (e) {
        return;
      }
    }
    function X() {
      var e,
        t =
          (e = _.getModuleIfRequireable()) == null
            ? void 0
            : e.getSelectedBusinessID();
      return t == null ? null : String(t);
    }
    var Y = (function () {
        function t() {
          ((this.$1 = {}),
            (this.$2 = {}),
            (this.$3 = {}),
            (this.$4 = {}),
            (this.$5 = {}),
            (this.$6 = {}),
            (this.$7 = null),
            (this.$8 = 0),
            (this.$9 = 0),
            (this.$10 = !1),
            (this.$11 = null),
            (this.$12 = new Set()),
            (this.$13 = null),
            (this.$14 = 0),
            (this.$15 = 0),
            (this.$16 = 0),
            (this.$17 = new Map()),
            (this.$18 = new Set()),
            (this.$19 = !1));
        }
        var a = t.prototype;
        return (
          (a.$20 = function () {
            this.$21();
            for (var e of Array.from(this.$12))
              try {
                e();
              } catch (e) {
                continue;
              }
          }),
          (a.subscribeToV3Decisions = function (t) {
            var e = this;
            return (
              this.$12.add(t),
              function () {
                e.$12.delete(t);
              }
            );
          }),
          (a.getV3DecisionKind = function (t) {
            var e = this.$7;
            return e == null || t == null || e.accountID !== t
              ? "ungoverned"
              : e.decision.kind;
          }),
          (a.getCurrentV3DecisionKind = function () {
            var e, t;
            return (e = (t = this.$7) == null ? void 0 : t.decision.kind) !=
              null
              ? e
              : "ungoverned";
          }),
          (a.getV3PageKey = function () {
            return z();
          }),
          (a.getV3CycleToken = function (t) {
            var e = this.$7;
            return e != null && t != null && e.accountID === t && this.$22(e)
              ? e.token
              : null;
          }),
          (a.isTipServable = function (t, n, r) {
            var e,
              a,
              i = this.getV3DecisionKind(t);
            if (i === "ungoverned" || i === "native") return !0;
            var l = this.$7;
            if (
              i !== "treatment" ||
              r == null ||
              l == null ||
              !this.$22(l) ||
              !(
                ((e = l.acceptedTips.get(n)) == null ? void 0 : e.has(r)) ===
                  !0 || K(l.acceptedCopies.get(n), r)
              )
            )
              return !1;
            var s = M((a = x(r)) == null ? void 0 : a.tip_id);
            return (
              s != null &&
              o(
                "AYMTSequentialDisplayManager",
              ).AYMTSequentialDisplayManager.getCurrentTipID() === s
            );
          }),
          (a.getSequencedTipPermit = function (t, n, r) {
            var e = this.getV3DecisionKind(t);
            return e === "ungoverned" || e === "native"
              ? "native"
              : this.isTipServable(t, n, r)
                ? "current"
                : "none";
          }),
          (a.getCurrentSequencedDeliveryID = function () {
            var e, t;
            return (e =
              (t = o(
                "AYMTSequentialDisplayManager",
              ).AYMTSequentialDisplayManager.getCurrentDelivery()) == null
                ? void 0
                : t.deliveryID) != null
              ? e
              : null;
          }),
          (a.releaseSequencedTip = function (t, n, a, i) {
            var e = this;
            i != null &&
              (m || (m = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  if (
                    e.getCurrentSequencedDeliveryID() === i &&
                    e.getSequencedTipPermit(t, n, a) === "current"
                  ) {
                    var r;
                    o("AYMTTipDismissalNotifier").notifyTipDismissal(
                      M((r = x(a)) == null ? void 0 : r.tip_id),
                    );
                  }
                },
              );
          }),
          (a.watchV3CycleRequests = function (t, n) {
            var e = this,
              o = this.getV3CycleToken(t),
              a = !0,
              i = !1,
              l = function () {
                if (!e.governsAccount(t)) return !1;
                var n = e.getV3CycleToken(t);
                return n != null && n !== o;
              },
              s = this.subscribeToV3Decisions(function () {
                !a ||
                  i ||
                  !l() ||
                  ((i = !0),
                  (m || (m = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      try {
                        if (a && l()) {
                          var r;
                          ((o = e.getV3CycleToken(t)),
                            n(),
                            (o = (r = e.getV3CycleToken(t)) != null ? r : o));
                        }
                      } finally {
                        i = !1;
                      }
                    },
                  ));
              });
            return function () {
              ((a = !1), s());
            };
          }),
          (a.getCurrentSequencedTipID = function (t) {
            var e = this.$7;
            if (e == null || e.decision.kind !== "treatment" || !this.$22(e))
              return null;
            var n = o(
                "AYMTSequentialDisplayManager",
              ).AYMTSequentialDisplayManager.getCurrentTipID(),
              r = e.acceptedTips.get(t);
            if (n == null || r == null) return null;
            for (var a of r) {
              var i;
              if (M((i = x(a)) == null ? void 0 : i.tip_id) === n) return n;
            }
            return null;
          }),
          (a.$23 = function () {
            var e = this.$7;
            if (e == null || !this.$22(e))
              return { cycleToken: null, isGoverned: !1, permittedTipID: null };
            var t = e.decision.kind;
            return {
              cycleToken: e.token,
              isGoverned:
                t === "pending" || t === "treatment" || t === "withheld",
              permittedTipID:
                t === "treatment" ? this.getCurrentSequencedTipID(b) : null,
            };
          }),
          (a.$24 = function (t) {
            var e = this.$13;
            return e == null
              ? !t.isGoverned
              : e.isGoverned === t.isGoverned &&
                  e.permittedTipID === t.permittedTipID &&
                  e.cycleToken === t.cycleToken;
          }),
          (a.$25 = function (t) {
            var e = this.$23(),
              n = Array.from(this.$18);
            this.$18.clear();
            var o = this.$24(e);
            (o && n.length === 0 && t.length === 0) ||
              (o || this.$14++,
              (this.$13 = e),
              r("AYMTV3SequenceChangedAction").dispatch(
                {
                  data: {
                    channelName: b,
                    isGoverned: e.isGoverned,
                    permitGeneration: this.$14,
                    permittedTipID: e.permittedTipID,
                    restoredTipIDs: t,
                    retiredTipIDs: n,
                    sequence: ++this.$15,
                  },
                },
                { line: "885", module: "AYMTTipsLoader.js", moduleID: i.id },
              ));
          }),
          (a.$21 = function () {
            var e = this;
            this.$19 ||
              ((this.$19 = !0),
              (m || (m = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  ((e.$19 = !1), e.$25([]));
                },
              ));
          }),
          (a.$26 = function (t, n, o, a, i) {
            var e = this,
              l = t
                .map(function (e) {
                  var t;
                  return M((t = x(e.aymt_data)) == null ? void 0 : t.tip_id);
                })
                .filter(Boolean);
            if (
              !l.some(function (t) {
                return e.$17.has(t);
              }) &&
              this.$18.size === 0 &&
              this.$24(this.$23())
            ) {
              i();
              return;
            }
            (m || (m = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              if (a()) {
                var t = o()
                  ? l.filter(function (t) {
                      var r = e.$17.get(t);
                      return r != null && r <= n;
                    })
                  : [];
                for (var r of t) e.$17.delete(r);
                (e.$25(t), i());
              }
            });
          }),
          (a.$27 = function (t, n, a) {
            var e = this,
              i = n
                .map(function (e) {
                  var t;
                  return M((t = x(e.aymt_data)) == null ? void 0 : t.tip_id);
                })
                .filter(Boolean),
              l = !1;
            ((m || (m = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              if (
                !(
                  !e.$22(t) ||
                  t.decision.kind !== "treatment" ||
                  i.some(function (e) {
                    return (
                      e !==
                      o(
                        "AYMTSequentialDisplayManager",
                      ).AYMTSequentialDisplayManager.getCurrentTipID()
                    );
                  })
                )
              ) {
                for (var n of i) t.deliveredMegaphoneTipIDs.add(n);
                e.$25([]);
                try {
                  a();
                } catch (e) {
                  if (!l) throw e;
                }
              }
            }),
              (l = !0));
          }),
          (a.getV3TreatmentCycleID = function () {
            var e,
              t = (e = this.$7) == null ? void 0 : e.decision;
            return (t == null ? void 0 : t.kind) === "treatment"
              ? t.cycleID
              : null;
          }),
          (a.$28 = function () {
            return "v3_" + String(++this.$9);
          }),
          (a.$29 = function (a, i, l) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              var s = new Date(),
                u = "id_" + Math.random() + "_" + s.getTime();
              ((t.$2[u] = { resolve: e }),
                (t.$3[i] = u),
                (t.$1[i + u] = u),
                (t.$4[i] = a));
              var c = {
                  channel_name: i,
                  is_v3_sequencing_enabled: !1,
                  params: a,
                  previous_params: t.$5[i],
                  previous_tips_aymt_data: t.$6[i],
                  request_id: u,
                  should_show_all_tips: l,
                },
                d = a.channel;
              t.$2[i] ||
                (d && d !== i) ||
                ((c.channel = d),
                (c.cache = a.cache),
                (c.validate = a.validate),
                (c.tip = a.tip),
                (c.invalidate = a.invalidate));
              var m = o(
                  "WhatsAppManagerGrowthCardAYMTTypes",
                ).isWhatsAppManagerOverviewCardChannel(i),
                p = new (r("AsyncRequest"))()
                  .setURI(
                    r(
                      "XAYMTClientSideTipsAsyncControllerRouteBuilder",
                    ).buildUri(c),
                  )
                  .setErrorHandler(function (e) {
                    (m && (delete t.$2[u], delete t.$1[i + u]),
                      n(e.errorDescription));
                  })
                  .setAllowCrossPageTransition(!0);
              m &&
                p.setTimeoutHandler(15e3, function () {
                  t.$2[u] != null &&
                    (delete t.$2[u],
                    delete t.$1[i + u],
                    n({ __html: "Overview card tip request timed out" }));
                });
              try {
                !p.send() &&
                  m &&
                  (delete t.$2[u],
                  delete t.$1[i + u],
                  n({ __html: "Overview card tip request was not sent" }));
              } catch (e) {
                (m && (delete t.$2[u], delete t.$1[i + u]), n(e));
              }
            });
          }),
          (a.$30 = function (t, n, o) {
            ((this.$5[t] = {}),
              r("mergeDeepInto")(this.$5[t], n),
              (this.$6[t] = o.map(function (e) {
                var t;
                return (t = JSON.stringify(e.aymt_data)) != null ? t : "";
              })));
          }),
          (a.$31 = function (t, n, a, i, l, s) {
            var e = this,
              u = o(
                "WhatsAppManagerGrowthCardAYMTTypes",
              ).isWhatsAppManagerOverviewCardChannel(a),
              c = this.$16,
              d = a === b && this.$17.size > 0 ? G() : null;
            r("promiseDone")(
              this.$29(n, a, l),
              function (r) {
                if (e.$32(a, t) && r && r.tips && Array.isArray(r.tips)) {
                  var m = r.tips,
                    p = function () {
                      o("AYMTTipActions").dispatchTips(
                        m,
                        a,
                        i,
                        u ? n : e.$4[a],
                        n,
                        l,
                        s,
                        function () {
                          return e.$32(a, t);
                        },
                        function () {
                          return e.$30(a, n, m);
                        },
                      );
                    };
                  a === b
                    ? e.$26(
                        m,
                        c,
                        function () {
                          return d != null && d === G();
                        },
                        function () {
                          return e.$32(a, t);
                        },
                        p,
                      )
                    : p();
                }
              },
              function (n) {
                e.$32(a, t) &&
                  (u &&
                    r("FBLogger")("ads_growth_communication_platform").warn(
                      "Overview card tip request failed for %s",
                      a,
                    ),
                  o("AYMTTipActions").dispatchTipsLoadingError(
                    r("err")(
                      "Tip loading request failed for %s channel %s",
                      a,
                      n.__html,
                    ),
                    a,
                    i,
                  ));
              },
            );
          }),
          (a.$22 = function (t) {
            return !t.isEnded && this.$7 === t && this.$33(t) && z() === t.path;
          }),
          (a.$32 = function (t, n) {
            if (!L.has(t)) return !0;
            if (n != null) return this.$22(n) && n.decision.kind === "native";
            var e = this.$7;
            return e == null || !this.$22(e);
          }),
          (a.$33 = function (t) {
            var e,
              n =
                (e = _.getModuleIfRequireable()) == null
                  ? void 0
                  : e.getSelectedAccountID();
            return (
              n != null && String(n) === t.accountID && X() === t.businessID
            );
          }),
          (a.$34 = function (t) {
            var e,
              n =
                (e = _.getModuleIfRequireable()) == null
                  ? void 0
                  : e.getSelectedAccountID();
            return (
              !t.isEnded &&
              this.$7 === t &&
              n != null &&
              String(n) === t.accountID &&
              X() === t.businessID
            );
          }),
          (a.$35 = function (t) {
            return (
              t.decision.kind === "pending" && this.$34(t) && z() === t.path
            );
          }),
          (a.$36 = function (t) {
            var e = r("CurrentAdAccount").getID();
            if (e == null || String(e) !== t) return !1;
            try {
              return typeof r("qex")._("488") == "boolean";
            } catch (e) {
              return !1;
            }
          }),
          (a.$37 = function (t) {
            var e = t.startedAt + I - (d || (d = r("performanceNow")))(),
              n = Math.floor(Math.min(T, e - D));
            return n > 0 ? n : null;
          }),
          (a.$38 = function (t, n, r) {
            delete this.$2[n];
            var e = t.requests.get(n);
            (t.requests.delete(n), r && e != null && Q(e));
          }),
          (a.$39 = function (t) {
            for (var e of Array.from(t.requests.keys())) this.$38(t, e, !0);
          }),
          (a.$40 = function () {
            var e,
              t = this,
              n =
                (e = _.getModuleIfRequireable()) == null
                  ? void 0
                  : e.getSelectedAccountID();
            if (n == null) return null;
            var a = String(n),
              i = X(),
              l = z(),
              s = this.$7;
            if (
              s != null &&
              s.accountID === a &&
              s.businessID === i &&
              s.path === l
            )
              return s;
            if ((s != null && this.$41(s), !this.$36(a))) return null;
            this.$42();
            var c = ++this.$8,
              m = {
                acceptedCopies: new Map(),
                acceptedTips: new Map(),
                accountID: a,
                bannerShouldShowAllTips: !1,
                businessID: i,
                cancelContextWait: null,
                decision: { kind: "pending" },
                deliveredMegaphoneTipIDs: new Set(),
                isEnded: !1,
                listeners: [],
                megaphoneGeneration: this.$16,
                pageParams: this.$43(a, i),
                path: l,
                phase: "waiting_for_context",
                renderCancellers: new Set(),
                requests: new Map(),
                servedChannels: new Set(),
                snapshotID: [a, i != null ? i : "", l, String(c)].join("|"),
                startedAt: (d || (d = r("performanceNow")))(),
                token: c,
                watchdog: null,
              };
            return (
              (this.$7 = m),
              o(
                "AYMTSequentialDisplayManager",
              ).AYMTSequentialDisplayManager.abortGateSequence(),
              this.$20(),
              (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
                (m.watchdog = r("setTimeout")(function () {
                  ((m.watchdog = null), t.$44(m));
                }, I)),
              this.$45(m),
              m
            );
          }),
          (a.$43 = function (t, n) {
            var e,
              o,
              a = ((e = {}), (e.ad_account_id = t), e);
            n != null && (a.business_id = n);
            var i =
              (o = (u || (u = r("ExecutionEnvironment"))).canUseDOM
                ? x((c || (c = r("URI"))).getRequestURI(!1).getQueryData())
                : null) != null
                ? o
                : {};
            for (var l of k) {
              var s = l[0],
                d = l[1],
                m = i[d];
              m != null && m !== "" && (a[s] = String(m));
            }
            return a;
          }),
          (a.$46 = function (t) {
            t.watchdog != null &&
              ((u || (u = r("ExecutionEnvironment"))).canUseDOM &&
                r("clearTimeout")(t.watchdog),
              (t.watchdog = null));
            var e = t.cancelContextWait;
            ((t.cancelContextWait = null), e == null || e());
          }),
          (a.$41 = function (t) {
            this.$46(t);
            for (var e of Array.from(t.renderCancellers)) e();
            if (
              (this.$39(t),
              (t.listeners = []),
              (t.isEnded = !0),
              this.$7 === t && (this.$7 = null),
              t.deliveredMegaphoneTipIDs.size > 0)
            ) {
              var n = ++this.$16;
              for (var r of t.deliveredMegaphoneTipIDs)
                (this.$17.set(r, n), this.$18.add(r));
              t.deliveredMegaphoneTipIDs.clear();
            }
            ((t.decision.kind === "treatment" || t.phase === "staging") &&
              o(
                "AYMTSequentialDisplayManager",
              ).AYMTSequentialDisplayManager.abortGateSequence(),
              this.$20());
          }),
          (a.$47 = function () {
            var e = this.$7;
            e != null && (!this.$33(e) || z() !== e.path) && this.$41(e);
          }),
          (a.$48 = function () {
            var e = this;
            (this.$47(),
              (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
                r("setTimeout")(function () {
                  return e.$47();
                }, 0));
          }),
          (a.$42 = function () {
            var e = this,
              t,
              n,
              a = function () {
                return e.$48();
              },
              i =
                (t = f.getModuleIfRequireable()) == null
                  ? void 0
                  : t.getOrNull();
            if (i != null && i !== this.$11) {
              this.$11 = i;
              for (var l of [
                r("AdsInterfacesRouterEvents").NAVIGATE,
                r("AdsInterfacesRouterEvents").POPSTATE,
                r("AdsInterfacesRouterEvents").ROUTE_CHANGE,
              ])
                i.addEventListener(l, a);
            }
            this.$10 ||
              ((this.$10 = !0),
              o(
                "AYMTSequentialDisplayManager",
              ).AYMTSequentialDisplayManager.subscribeToCurrentTip(function () {
                var t, n;
                ((t = e.$7) == null || t.acceptedTips.clear(),
                  (n = e.$7) == null || n.acceptedCopies.clear(),
                  e.$20());
              }),
              (n = _.getModuleIfRequireable()) == null || n.addListener(a),
              r("Arbiter").subscribe("page_transition", a),
              (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
                window.addEventListener("popstate", a));
          }),
          (a.$49 = function (t, n) {
            for (var e of t)
              try {
                e(n);
              } catch (e) {
                continue;
              }
          }),
          (a.$50 = function (t, n) {
            var e = this;
            if (t.decision.kind === "pending") {
              t.listeners.push(n);
              return;
            }
            r("setTimeout")(function () {
              e.$22(t) ? e.$49([n], t.decision) : e.$47();
            }, 0);
          }),
          (a.$51 = function (t, n) {
            if (!(t.isEnded || t.decision.kind !== "pending")) {
              (this.$46(t),
                this.$39(t),
                (t.decision = n),
                (t.phase = "decided"));
              var e = t.listeners;
              ((t.listeners = []), this.$49(e, n), this.$20());
            }
          }),
          (a.$45 = function (a) {
            var t = this,
              i = !0,
              l = null;
            a.cancelContextWait = function () {
              ((i = !1), l == null || l());
            };
            var s = function (n) {
                if (i) {
                  var e = n.whenContextReady(a.accountID, function (e) {
                    if (((i = !1), (a.cancelContextWait = null), !t.$35(a))) {
                      t.$52(a);
                      return;
                    }
                    t.$53(
                      a,
                      o("AdsIntelligentComponentsUtils").convertContext(e),
                    );
                  });
                  i && (l = e);
                }
              },
              u = h.getModuleIfRequireable();
            if (
              u != null &&
              g.getModuleIfRequireable() != null &&
              f.getModuleIfRequireable() != null
            ) {
              s(u);
              return;
            }
            r("promiseDone")(
              (e || (e = n("Promise"))).all([h.load(), g.load(), f.load()]),
              function (e) {
                var n = e[0];
                (t.$42(), s(n));
              },
              function () {
                i && ((i = !1), (a.cancelContextWait = null), t.$44(a));
              },
            );
          }),
          (a.$52 = function (t) {
            this.$41(t);
          }),
          (a.$53 = function (t, n) {
            var e = this;
            if (t.phase === "waiting_for_context") {
              t.phase = "requested";
              var a = this.$37(t);
              if (a == null) {
                this.$44(t);
                return;
              }
              var i = this.$28();
              this.$2[i] = {
                resolve: function (o) {
                  (e.$38(t, i, !1), e.$54(t, n, o));
                },
              };
              try {
                var l;
                t.bannerShouldShowAllTips =
                  r("qex")._("6074") === !0 || r("qex")._("2444") === !0;
                var s = t.pageParams,
                  u = g.getModuleIfRequireable(),
                  c = u == null ? void 0 : u.getDefaultInjectTip(),
                  d = new (r("AsyncRequest"))()
                    .setURI(
                      r(
                        "XAYMTV3EligibilitySnapshotAsyncControllerRouteBuilder",
                      ).buildUri({
                        banner_should_show_all_tips: t.bannerShouldShowAllTips,
                        budget_ms: a,
                        cache: s.cache,
                        channel: s.channel,
                        enable_for_test_users: c != null,
                        ic_context: n,
                        ic_enable_stages:
                          (l =
                            u == null ? void 0 : u.getDefaultEnableStages()) !=
                          null
                            ? l
                            : void 0,
                        ic_inject_tip: c != null ? c : void 0,
                        ic_pathname:
                          o(
                            "AdsHelpTrayUtils",
                          ).getReleventArticlesProcessedURL(),
                        invalidate: s.invalidate,
                        params: babelHelpers.extends({}, s),
                        request_id: i,
                        snapshot_id: t.snapshotID,
                        tip: s.tip,
                        validate: s.validate,
                      }),
                    )
                    .setErrorHandler(function () {
                      (e.$38(t, i, !1), e.$44(t));
                    })
                    .setAllowCrossPageTransition(!0);
                (t.requests.set(i, d), d.send());
              } catch (e) {
                (this.$38(t, i, !1), this.$44(t));
              }
            }
          }),
          (a.$44 = function (t) {
            if (!this.$35(t)) {
              this.$52(t);
              return;
            }
            this.$51(t, { kind: "native", snapshot: null });
          }),
          (a.$54 = function (t, n, o) {
            if (!(t.isEnded || t.decision.kind !== "pending")) {
              if (!this.$35(t)) {
                this.$52(t);
                return;
              }
              var e = q(o == null ? void 0 : o.v3_snapshot, t.snapshotID, n);
              if (e == null || !e.isEligible) {
                this.$51(t, { kind: "native", snapshot: e });
                return;
              }
              if ((d || (d = r("performanceNow")))() >= t.startedAt + I) {
                this.$44(t);
                return;
              }
              var a = !1;
              try {
                a = r("qex")._("935") === !0;
              } catch (e) {
                this.$44(t);
                return;
              }
              if (!a) {
                this.$51(t, { kind: "native", snapshot: e });
                return;
              }
              (this.$46(t), (t.phase = "staging"), this.$55(t, e));
            }
          }),
          (a.$55 = function (a, i) {
            var t = this,
              l = new Set(),
              s = [];
            (R.forEach(function (e, t) {
              var n,
                r,
                o = i.channels.get(e);
              (((n = o == null ? void 0 : o.candidates) != null
                ? n
                : []
              ).forEach(function (n, r) {
                var o = e + "|" + String(n.tip.name);
                l.has(o) ||
                  (l.add(o),
                  s.push({
                    channelName: e,
                    channelOrder: t,
                    extraName: null,
                    isRequired: n.isRequired,
                    rankingScore: n.rankingScore,
                    tip: n.tip,
                    tipIndex: r,
                  }));
              }),
                ((r = o == null ? void 0 : o.extraCandidates) != null
                  ? r
                  : []
                ).forEach(function (n, r) {
                  var a = e + "|" + n.name;
                  if (!l.has(a)) {
                    var i;
                    (l.add(a),
                      s.push({
                        channelName: e,
                        channelOrder: t,
                        extraName: n.name,
                        isRequired: n.isRequired,
                        rankingScore: n.rankingScore,
                        tip: { name: n.name },
                        tipIndex:
                          ((i = o == null ? void 0 : o.candidates.length) !=
                          null
                            ? i
                            : 0) + r,
                      }));
                  }
                }));
            }),
              s.sort(
                o("AYMTSequentialDisplayManager").compareRankedCandidates,
              ));
            var u = new Map();
            for (var c of s.slice(
              0,
              o("AYMTSequentialDisplayManager").MAX_DISPATCHED_TIPS_PER_PAGE,
            )) {
              var d = c.extraName;
              if (d != null) {
                var m,
                  p = (m = u.get(c.channelName)) != null ? m : [];
                (p.push(d), u.set(c.channelName, p));
              }
            }
            var _ = Array.from(u).map(function (e) {
              var n = e[0],
                r = e[1];
              return t.$56(a, n, r).then(
                function (e) {
                  return [n, e];
                },
                function () {
                  return [n, []];
                },
              );
            });
            r("promiseDone")(
              (e || (e = n("Promise"))).all(_),
              function (e) {
                return t.$57(a, i, new Map(e));
              },
              function () {
                return t.$57(a, i, new Map());
              },
            );
          }),
          (a.$57 = function (t, n, r) {
            if (!(t.isEnded || t.decision.kind !== "pending")) {
              if (!this.$34(t) || z() !== t.path) {
                this.$41(t);
                return;
              }
              var e = [],
                a = function () {
                  var t,
                    o = n.channels.get(i),
                    a = new Map(
                      ((t = o == null ? void 0 : o.extraCandidates) != null
                        ? t
                        : []
                      ).map(function (e) {
                        return [e.name, e];
                      }),
                    ),
                    l = [],
                    s = [],
                    u = function (t, n, r) {
                      var e = M(t.tip_id);
                      if (e != null) {
                        var o = A(t, n);
                        (s.push(o),
                          l.push({
                            isRequired: r,
                            rankingScore: n,
                            tip: o,
                            tipID: e,
                            tipIndex: l.length,
                          }));
                      }
                    };
                  for (var c of (d = o == null ? void 0 : o.candidates) != null
                    ? d
                    : []) {
                    var d;
                    u(c.tip, c.rankingScore, c.isRequired);
                  }
                  for (var m of (p = r.get(i)) != null ? p : []) {
                    var p,
                      _ = typeof m.name == "string" ? a.get(m.name) : null;
                    _ != null && u(m, _.rankingScore, _.isRequired);
                  }
                  e.push({ candidates: l, channelName: i, tips: s });
                };
              for (var i of R) a();
              var l = [],
                s = [];
              for (var u of n.icNUXMessages) {
                var c = u[0],
                  d = u[1],
                  m = U(c, d);
                (l.push(m),
                  s.push({
                    isRequired: !1,
                    rankingScore: 0,
                    tip: m,
                    tipID: d.tipID,
                    tipIndex: s.length,
                  }));
              }
              (e.push({ candidates: s, channelName: C, tips: l }),
                o(
                  "AYMTSequentialDisplayManager",
                ).AYMTSequentialDisplayManager.noteAdAccountID(t.accountID));
              var p = o(
                "AYMTSequentialDisplayManager",
              ).AYMTSequentialDisplayManager.stageGateSequence(e);
              if (p == null) {
                this.$51(t, { kind: "withheld" });
                return;
              }
              (this.$51(t, { cycleID: p, kind: "treatment", snapshot: n }),
                o(
                  "AYMTSequentialDisplayManager",
                ).AYMTSequentialDisplayManager.startGateSequence(p) ||
                  o(
                    "AYMTSequentialDisplayManager",
                  ).AYMTSequentialDisplayManager.abortGateSequence());
            }
          }),
          (a.$56 = function (a, i, l) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e) {
              var n = t.$28(),
                s = null,
                c = function () {},
                d = function (i, l) {
                  (l === void 0 && (l = !1),
                    (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
                      s != null &&
                      r("clearTimeout")(s),
                    a.renderCancellers.delete(c),
                    t.$38(a, n, l),
                    e(i));
                };
              ((c = function () {
                return d([], !0);
              }),
                a.renderCancellers.add(c));
              try {
                var m = t.$37(a);
                if (m == null) {
                  d([]);
                  return;
                }
                ((u || (u = r("ExecutionEnvironment"))).canUseDOM &&
                  (s = r("setTimeout")(function () {
                    return d([], !0);
                  }, m + D)),
                  (t.$2[n] = {
                    resolve: function (t) {
                      var e = x(t == null ? void 0 : t.v3_render),
                        n = N(e == null ? void 0 : e.tips);
                      if (
                        e == null ||
                        n == null ||
                        e.snapshot_id !== a.snapshotID ||
                        e.channel_name !== i
                      ) {
                        d([]);
                        return;
                      }
                      var r = new Set(l);
                      d(
                        n.filter(function (e) {
                          return typeof e.name == "string" && r.has(e.name);
                        }),
                      );
                    },
                  }));
                var p = new (r("AsyncRequest"))()
                  .setURI(
                    r(
                      "XAYMTV3EligibilitySnapshotAsyncControllerRouteBuilder",
                    ).buildUri({
                      budget_ms: m,
                      params: babelHelpers.extends({}, a.pageParams),
                      render_channel_name: i,
                      render_tip_names: l.slice(
                        0,
                        o("AYMTSequentialDisplayManager")
                          .MAX_DISPATCHED_TIPS_PER_PAGE,
                      ),
                      request_id: n,
                      snapshot_id: a.snapshotID,
                    }),
                  )
                  .setErrorHandler(function () {
                    return d([]);
                  })
                  .setAllowCrossPageTransition(!0);
                (a.requests.set(n, p), p.send());
              } catch (e) {
                d([]);
              }
            });
          }),
          (a.$58 = function (t, n, r, o) {
            var e;
            if (t.servedChannels.has(r) || this.$5[r] != null) return !1;
            var a = ((e = {}), (e.ad_account_id = t.accountID), e);
            if (
              (t.businessID != null &&
                (r === "AYMTCampaignManagerMegaphoneChannel" ||
                  r === "AYMTAMGlobalBannerChannel") &&
                (a.business_id = t.businessID),
              r === "AYMTAMDAnchorlessNUXChannel")
            )
              for (var i of k) {
                var l = i[0],
                  s = t.pageParams[l];
                s != null && (a[l] = s);
              }
            var u =
                r === "AYMTAMGlobalBannerChannel"
                  ? t.bannerShouldShowAllTips
                  : !1,
              c = Object.keys(n);
            return (
              (o === !0) === u &&
              c.length === Object.keys(a).length &&
              c.every(function (e) {
                return a[e] === n[e];
              })
            );
          }),
          (a.$59 = function (t, n, r, a, i, l, s, u) {
            var e = this;
            o(
              "AYMTSequentialDisplayManager",
            ).AYMTSequentialDisplayManager.registerChannel(r, u, function (u) {
              var c, d;
              if (!e.$34(t)) return !1;
              if (z() !== t.path) return (e.$41(t), !1);
              var m = (c = t.acceptedTips.get(r)) != null ? c : new Set();
              t.acceptedTips.set(r, m);
              var p = [],
                _ = (d = t.acceptedCopies.get(r)) != null ? d : [];
              t.acceptedCopies.set(r, _);
              var f = [];
              for (var g of u) {
                var h = g.aymt_data;
                if (h != null && typeof h == "object" && !m.has(h)) {
                  (m.add(h), p.push(h));
                  var y = j(r, g);
                  y != null && (_.push(y), f.push(y));
                }
              }
              var C = function () {
                p.forEach(function (e) {
                  return m.delete(e);
                });
                for (var e of f) {
                  var t = _.indexOf(e);
                  t >= 0 && _.splice(t, 1);
                }
              };
              try {
                if (l != null) {
                  if (l(u) === !1) return (C(), !1);
                  u.length > 0 && e.$30(r, n, u);
                } else if (r === b) {
                  (e.$27(t, u, function () {
                    (o("AYMTTipActions").dispatchTips(u, r, a, n, n, i, s),
                      u.length > 0 && e.$30(r, n, u));
                  }),
                    p.length > 0 && e.$20());
                  return;
                } else {
                  var v,
                    S =
                      (v = o(
                        "AYMTSequentialDisplayManager",
                      ).AYMTSequentialDisplayManager.getCurrentDelivery()) ==
                      null
                        ? void 0
                        : v.deliveryID;
                  o("AYMTTipActions").dispatchTips(
                    u,
                    r,
                    a,
                    n,
                    n,
                    i,
                    s,
                    function () {
                      var n;
                      return (
                        e.$22(t) &&
                        (u.length === 0 ||
                          (S != null &&
                            ((n = o(
                              "AYMTSequentialDisplayManager",
                            ).AYMTSequentialDisplayManager.getCurrentDelivery()) ==
                            null
                              ? void 0
                              : n.deliveryID) === S))
                      );
                    },
                    function () {
                      u.length > 0 && e.$30(r, n, u);
                    },
                  );
                }
              } catch (e) {
                return (C(), !1);
              }
              p.length > 0 && e.$20();
            });
          }),
          (a.$60 = function (t, n, r, a, i, l, s, u) {
            var e,
              c = this;
            if (!this.$22(t)) {
              this.$47();
              return;
            }
            if (!(n.kind === "withheld" || n.kind === "pending")) {
              if (n.kind === "treatment") {
                this.$59(t, r, a, i, l, s, u, n.cycleID);
                return;
              }
              var d = this.$58(t, r, a, l)
                ? (e = n.snapshot) == null
                  ? void 0
                  : e.channels.get(a)
                : null;
              if (d == null) {
                this.$31(t, r, a, i, l, u);
                return;
              }
              t.servedChannels.add(a);
              var m = d.tips.map(function (e) {
                return babelHelpers.extends({}, e);
              });
              this.$4[a] = r;
              var p = function () {
                o("AYMTTipActions").dispatchTips(
                  m,
                  a,
                  i,
                  r,
                  r,
                  l,
                  u,
                  function () {
                    return c.$22(t) && t.decision.kind === "native";
                  },
                  function () {
                    return c.$30(a, r, m);
                  },
                );
              };
              a === b
                ? this.$26(
                    m,
                    t.megaphoneGeneration,
                    function () {
                      return !0;
                    },
                    function () {
                      return c.$22(t) && t.decision.kind === "native";
                    },
                    p,
                  )
                : p();
            }
          }),
          (a.governIntelligentComponentsLoad = function (t, n) {
            var e = this,
              r = this.$40();
            return r == null || t !== r.accountID
              ? !1
              : (this.$50(r, function (t) {
                  e.$33(r) && n(t);
                }),
                !0);
          }),
          (a.governsAccount = function (t) {
            var e,
              n =
                (e = _.getModuleIfRequireable()) == null
                  ? void 0
                  : e.getSelectedAccountID();
            return t != null && n != null && String(n) === t && this.$36(t);
          }),
          (a.loadTips = function (t, n, r, o, a, i, l) {
            var e = this,
              s = L.has(n) ? this.$40() : null;
            if (s == null) return (this.$31(null, t, n, r, o, i), !0);
            var u = t.ad_account_id === s.accountID;
            return (
              this.$50(s, function (l) {
                if (!u) {
                  l.kind === "native" && e.$22(s) && e.$31(s, t, n, r, o, i);
                  return;
                }
                e.$33(s) && e.$60(s, l, t, n, r, o, a, i);
              }),
              !0
            );
          }),
          (a.setTips = function (t, n, a) {
            var e = o(
              "WhatsAppManagerGrowthCardAYMTTypes",
            ).isWhatsAppManagerOverviewCardChannel(n);
            if (
              (e && delete this.$1[n + a],
              e && !Array.isArray(t == null ? void 0 : t.tips))
            ) {
              var i;
              (this.$2[a] != null &&
                r("FBLogger")("ads_growth_communication_platform").warn(
                  "Overview card tip response was malformed for %s",
                  n,
                ),
                (i = this.$2[a]) == null || i.resolve({ tips: [] }),
                delete this.$2[a]);
              return;
            }
            (t && t.tips) || s(0, 1761, n);
            var l = this.$2[a];
            l != null &&
              (!e &&
              n !== y &&
              this.$3[n] !== a &&
              !(
                o(
                  "AdsMgmt2025H1ExperimentUtils",
                ).getUserShouldMigrateAAUMessages() &&
                n === "AYMTAdsManagerPrivacyGuidanceFrameworkChannel"
              )
                ? l.resolve(null)
                : l.resolve(t),
              delete this.$2[a]);
          }),
          t
        );
      })(),
      J = new Y(),
      Z = J;
    l.default = Z;
  },
  98,
);
