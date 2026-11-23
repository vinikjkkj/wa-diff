__d(
  "AYMTSequentialDisplayManager",
  [
    "AYMTTipDismissalNotifier",
    "AYMTTipImpressionNotifier",
    "AdsNUXTourStore",
    "AsyncRequest",
    "ExecutionEnvironment",
    "ODS",
    "XAYMTSequentialDisplayCycleLoggerAsyncControllerRouteBuilder",
    "getAsyncParams",
    "performanceNow",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = [
        "AYMTCampaignManagerMegaphoneChannel",
        "AYMTAMGlobalBannerChannel",
        "AYMTCampaignManagerModalChannel",
        "AYMTIntelligentComponentsChannel",
        "AYMTAMDAnchorlessNUXChannel",
      ],
      d = [].concat(c),
      m = 3e4,
      p = 5e3,
      _ = 2e4,
      f = 1e4,
      g = 500,
      h = 2;
    function y(e, t) {
      try {
        return e();
      } catch (e) {
        return t;
      }
    }
    function C(e) {
      return Math.max(0, Math.round(e));
    }
    function b(e) {
      var t = function () {
          var t;
          return y((t = e.now) != null ? t : s || (s = r("performanceNow")), 0);
        },
        n = function () {
          var t;
          return y(
            (t = e.getPath) != null
              ? t
              : function () {
                  return "";
                },
            "",
          );
        },
        o = function (n) {
          return y(
            function () {
              return e.bumpCounter == null ? void 0 : e.bumpCounter(n);
            },
            void 0,
          );
        },
        a = [],
        i = [],
        l = null,
        u = null,
        c = [],
        m = t(),
        p = n(),
        _ = null,
        f = null,
        g = [],
        h = [],
        b = [],
        v = null,
        S = !1,
        R = !1;
      function L(e, t) {
        var n = b.indexOf(e);
        n >= 0 && (a[n] = t);
      }
      function E(e, t) {
        return e != null
          ? e
          : _ == null
            ? "not_started"
            : t.currentTipID != null
              ? u != null
                ? "blocked_impressed_undismissed"
                : "blocked_awaiting_render"
              : t.bufferedCandidate != null
                ? "blocked_awaiting_dispatcher"
                : "advance_pending";
      }
      function k(e) {
        var t = null;
        return e.map(function (e) {
          if (e.channelName === "AYMTIntelligentComponentsChannel")
            return "ic_tail";
          if (e.isRequired) return "required";
          var n = t;
          return (
            (t = e),
            n == null || n.rankingScore !== e.rankingScore
              ? "score_descending"
              : n.channelOrder !== e.channelOrder
                ? "tie_channel_order"
                : "tie_tip_index"
          );
        });
      }
      function I(e, r, o) {
        var s,
          y,
          S = t(),
          R = b,
          L = E(r, o),
          I = R.map(function (e, t) {
            var n,
              r = (n = a[t]) != null ? n : "not_reached";
            return r !== "dispatched" || t !== l || o.currentTipID == null
              ? r
              : u != null
                ? "blocking_impressed_undismissed"
                : "blocking_awaiting_render";
          }),
          T = L === "blocked_impressed_undismissed" && l != null ? R[l] : null;
        return {
          ad_account_id: v,
          blocked_ms: T != null && u != null ? C(S - u) : null,
          blocking_channel:
            (s = T == null ? void 0 : T.channelName) != null ? s : null,
          blocking_tip_id:
            (y = T == null ? void 0 : T.tipID) != null ? y : null,
          candidate_channels: R.map(function (e) {
            return e.channelName;
          }),
          candidate_impressed: R.map(function (e, t) {
            return i[t] === !0;
          }),
          candidate_order_reasons: k(R),
          candidate_outcomes: I,
          candidate_score_missing: R.map(function (e) {
            return typeof e.tip.ranking_score != "number";
          }),
          candidate_scores: R.map(function (e) {
            return e.rankingScore;
          }),
          candidate_tip_ids: R.map(function (e) {
            return e.tipID;
          }),
          candidate_tip_indices: R.map(function (e) {
            return e.tipIndex;
          }),
          coverage_version: "v3_frontend_sequential_manager",
          cycle_id: o.cycleID,
          cycle_lifetime_ms: C(S - m),
          dispatched_tip_count: o.dispatchedTipCount,
          finish_empty_dispatch_channels: c,
          flush_trigger: e,
          path_at_flush: n(),
          path_at_open: p,
          registered_channels_at_start: g,
          sampling_probability: 1,
          sequence_start_offset_ms: _ != null ? C(_ - m) : null,
          settled_channels_at_start: h,
          start_trigger: f,
          stop_reason: L,
          undispatched_channels: d.filter(function (e) {
            return !o.dispatchedChannels.includes(e);
          }),
        };
      }
      return {
        dismissedCurrent: function () {
          l != null && (a[l] = "dismissed");
        },
        dispatched: function (t) {
          ((l = b.indexOf(t)), (u = null), L(t, "dispatched"));
        },
        finishEmptyDispatch: function (t) {
          c.push(t);
        },
        flush: function (n, r, a) {
          if (!(R || !S)) {
            R = !0;
            var t = I(n, r, a);
            (o("flush." + n),
              o("stop." + t.stop_reason),
              e.logCycle == null || e.logCycle(t));
          }
        },
        impressedCurrent: function () {
          (u == null && (u = t()), l != null && (i[l] = !0));
        },
        noteActivity: function () {
          S = !0;
        },
        noteAdAccountID: function (t) {
          v = t;
        },
        openCycle: function () {
          ((m = t()), (p = n()));
        },
        outcome: L,
        reset: function () {
          ((a = []),
            (i = []),
            (l = null),
            (u = null),
            (c = []),
            (m = t()),
            (p = n()),
            (_ = null),
            (f = null),
            (g = []),
            (h = []),
            (b = []),
            (S = !1),
            (R = !1));
        },
        sequenceStarted: function (n, r, a, i) {
          ((b = n),
            (_ = t()),
            (f = r),
            (g = a),
            (h = i),
            o("sequence_started"));
        },
      };
    }
    function v(e, t) {
      return JSON.stringify([e, t]);
    }
    function S(e) {
      var t = new Map();
      return (
        d.forEach(function (n, r) {
          var o = e.get(n);
          if (o != null)
            for (var a of o.candidates) {
              var i = v(n, a.tipID),
                l = {
                  channelName: n,
                  channelOrder: r,
                  isRequired: a.isRequired === !0,
                  rankingScore: a.rankingScore,
                  tip: a.tip,
                  tipID: a.tipID,
                  tipIndex: a.tipIndex,
                },
                s = t.get(i);
              (s == null ||
                (n !== "AYMTIntelligentComponentsChannel" &&
                  l.rankingScore > s.rankingScore)) &&
                t.set(i, l);
            }
        }),
        Array.from(t.values())
      );
    }
    function R(e) {
      return e.channelName === "AYMTIntelligentComponentsChannel"
        ? 2
        : e.isRequired
          ? 0
          : 1;
    }
    function L(e, t) {
      var n = R(e) - R(t);
      if (n !== 0) return n;
      if (e.channelName === "AYMTIntelligentComponentsChannel") {
        var r = e.tip.ads_guidance_bluetip_data != null,
          o = t.tip.ads_guidance_bluetip_data != null;
        return r === o ? e.tipIndex - t.tipIndex : r ? -1 : 1;
      }
      return (
        t.rankingScore - e.rankingScore ||
        e.channelOrder - t.channelOrder ||
        e.tipIndex - t.tipIndex
      );
    }
    function E(e) {
      return S(e).sort(L);
    }
    function k(e, t) {
      e != null && t(e);
    }
    function I(e, t, n) {
      var r = function (o) {
        if (t.has(o)) return 1;
        var r = e.get(o);
        r != null &&
          (r([]),
          t.add(o),
          n(function (e) {
            return e.finishEmptyDispatch(o);
          }));
      };
      for (var o of d) r(o);
    }
    function T(e, t, n, r) {
      if (!t.has(e)) {
        var o = n.get(e),
          a = r.get(e);
        o == null || a == null || (o(a.tips), n.delete(e), r.delete(e));
      }
    }
    function D(e, t, n) {
      if (t == null || t.channelName !== e) return null;
      var r = n.get(e);
      return r == null ? null : { candidate: t, dispatch: r };
    }
    function x(e) {
      var t = new Set(c),
        n = new Set(d),
        r = new Map(),
        o = new Map(),
        a = new Set(),
        i = new Set(),
        l = null,
        s = [],
        u = 0,
        g = null,
        C = new Set(),
        R = null,
        x = 0,
        $ = null,
        P = null,
        N = null,
        M = null,
        w = null,
        A = null,
        F = null,
        O = null,
        B = null,
        W = !1,
        q = !1,
        U = 0,
        V = 0,
        H = !0,
        G = !1,
        z = !1,
        j = new Set(),
        K = y(function () {
          return b(e);
        }, null);
      function Q(t) {
        if (K != null)
          try {
            t(K);
          } catch (t) {
            y(
              function () {
                return e.bumpCounter == null
                  ? void 0
                  : e.bumpCounter("log_error");
              },
              void 0,
            );
          }
      }
      function X() {
        return {
          bufferedCandidate: N,
          currentTipID: g,
          cycleID: V,
          dispatchedChannels: Array.from(i),
          dispatchedTipCount: U,
        };
      }
      y(
        function () {
          return e.subscribeToPageHide == null
            ? void 0
            : e.subscribeToPageHide(function () {
                return Q(function (e) {
                  return e.flush("page_hide", null, X());
                });
              });
        },
        void 0,
      );
      function Y() {
        return a.size === c.length;
      }
      function J() {
        return (l != null || (l = e.isV3Enabled()), l);
      }
      function Z() {
        (k(M, e.clearTimeout), (M = null));
      }
      function ee() {
        (k(w, e.clearTimeout), (w = null));
      }
      function te() {
        (k(A, e.clearTimeout), (A = null));
      }
      function ne() {
        (k(F, e.clearTimeout), (F = null));
      }
      function re() {
        M != null ||
          W ||
          q ||
          (M = e.setTimeout(function () {
            ((M = null), Se(!0));
          }, m));
      }
      function oe() {
        w != null ||
          q ||
          G ||
          W ||
          (w = e.setTimeout(function () {
            ((w = null), (G = !0), Se());
          }, p));
      }
      function ae() {
        (O == null || O(), (O = null), B == null || B(), (B = null));
      }
      function ie() {
        var e = P;
        ((P = null), e != null && y(e.cancel, void 0));
      }
      function le(t) {
        var n = e.waitForInterruptiveUIToClear;
        if (
          t == null ||
          t.channelName !== "AYMTIntelligentComponentsChannel" ||
          n == null
        ) {
          Ce();
          return;
        }
        var r = { cancel: function () {} };
        ((P = r),
          y(
            function () {
              return e.bumpCounter == null
                ? void 0
                : e.bumpCounter("awaiting_ui_clear");
            },
            void 0,
          ));
        var o = null;
        try {
          o = n(function () {
            P === r && ((P = null), Ce());
          });
        } catch (e) {
          P === r && ((P = null), Ce());
          return;
        }
        o != null && (r.cancel = o);
      }
      function se(e) {
        if (g !== e) {
          g = e;
          for (var t of Array.from(C))
            try {
              t();
            } catch (e) {
              continue;
            }
        }
      }
      function ue() {
        (ie(),
          Z(),
          ee(),
          te(),
          ne(),
          ae(),
          (s = []),
          (u = 0),
          se(null),
          (R = null),
          ($ = null),
          (N = null),
          (W = !1));
      }
      function ce() {
        (Q(function (e) {
          return e.flush("cycle_reset", null, X());
        }),
          ue(),
          r.clear(),
          o.clear(),
          a.clear(),
          i.clear(),
          (G = !1),
          (l = null),
          (U = 0),
          j.clear(),
          (z = !1),
          V++,
          (H = !0),
          (q = !1),
          Q(function (e) {
            return e.reset();
          }));
      }
      function de(e, n) {
        return n !== V || W || q || !t.has(e)
          ? !1
          : (a.delete(e), o.delete(e), !0);
      }
      function me(e) {
        var t = H;
        return (
          (H = !1),
          t &&
            Q(function (e) {
              return e.openCycle();
            }),
          { cycleID: V, isNewCycle: t }
        );
      }
      function pe(e) {
        (I(r, i, Q),
          Q(function (t) {
            return t.flush("sequence_finished", e, X());
          }),
          ue(),
          (q = !0),
          (H = !1));
      }
      function _e(t, n) {
        (te(),
          (N = null),
          x++,
          (R = t),
          se(t.tipID),
          ($ = n),
          Q(function (e) {
            return e.dispatched(t);
          }),
          (F = e.setTimeout(function () {
            ((F = null),
              g === t.tipID &&
                (se(null),
                (R = null),
                ($ = null),
                Q(function (e) {
                  return e.outcome(t, "timer_advanced");
                }),
                le(t)));
          }, f)));
        var r;
        try {
          r = n([t.tip]);
        } catch (n) {
          (ne(),
            se(null),
            ($ = null),
            Q(function (e) {
              return e.outcome(t, "dispatch_threw");
            }),
            e.setTimeout(Ce, 0));
          return;
        }
        if (r === !1) {
          (ne(),
            se(null),
            ($ = null),
            Q(function (e) {
              return e.outcome(t, "dispatch_rejected");
            }),
            Ce());
          return;
        }
        (i.add(t.channelName), U++);
      }
      function fe(t) {
        (te(),
          (N = t),
          Q(function (e) {
            return e.outcome(t, "awaiting_dispatcher");
          }),
          (A = e.setTimeout(function () {
            N !== t ||
              r.has(t.channelName) ||
              ((A = null),
              (N = null),
              Q(function (e) {
                return e.outcome(t, "dispatcher_missing");
              }),
              Ce());
          }, _)));
      }
      function ge(e) {
        var t = D(e, N, r);
        t != null && (te(), ne(), _e(t.candidate, t.dispatch));
      }
      function he(e) {
        var t = R,
          n = r.get(e);
        if (
          !(
            t == null ||
            t.channelName !== e ||
            g !== t.tipID ||
            n == null ||
            n === $
          )
        ) {
          $ = n;
          try {
            n([t.tip]);
          } catch (e) {}
        }
      }
      function ye(a, i) {
        e.setTimeout(function () {
          i === V &&
            (he(a), ge(a), t.has(a) ? Se() : n.has(a) || T(a, n, r, o));
        }, 0);
      }
      function Ce() {
        if (!(g != null || N != null || P != null)) {
          if ((ne(), te(), U >= h)) {
            pe("page_cap_reached");
            return;
          }
          for (; u < s.length; ) {
            var e = s[u++];
            j.add(v(e.channelName, e.tipID));
            var t = r.get(e.channelName);
            if (t == null) {
              fe(e);
              return;
            }
            _e(e, t);
            return;
          }
          pe("exhausted");
        }
      }
      function be(e) {
        g === e &&
          (ne(),
          Q(function (e) {
            return e.impressedCurrent();
          }));
      }
      function ve(e) {
        if (g === e) {
          var t = R;
          (ne(),
            se(null),
            (R = null),
            ($ = null),
            Q(function (e) {
              return e.dismissedCurrent();
            }),
            le(t));
        }
      }
      function Se(t, n) {
        (t === void 0 && (t = !1),
          n === void 0 && (n = t ? "barrier_timeout" : "all_settled"),
          !(q || W || (!t && (!G || !Y()))) &&
            ((W = !0),
            Z(),
            ee(),
            (s = E(o).filter(function (e) {
              return !j.has(v(e.channelName, e.tipID));
            })),
            Q(function (e) {
              return e.sequenceStarted(
                s,
                n,
                d.filter(function (e) {
                  return r.has(e);
                }),
                d.filter(function (e) {
                  return a.has(e);
                }),
              );
            }),
            (B = e.subscribeToImpressions(be)),
            (O = e.subscribeToDismissals(ve)),
            Ce()));
      }
      function Re(e) {
        (o.set(e.channelName, { candidates: e.candidates, tips: e.tips }),
          e.dispatch != null && r.set(e.channelName, e.dispatch));
      }
      function Le(e) {
        var t = s.slice(0, u),
          n = S(
            new Map([[e.channelName, { candidates: e.candidates, tips: [] }]]),
          ).filter(function (e) {
            return !j.has(v(e.channelName, e.tipID));
          });
        s = t.concat(
          s
            .slice(u)
            .filter(function (t) {
              return t.channelName !== e.channelName;
            })
            .concat(n)
            .sort(L),
        );
      }
      return {
        getCurrentDelivery: function () {
          var e = R;
          return g == null || e == null || e.tipID !== g
            ? null
            : { channelName: e.channelName, deliveryID: x, tipID: e.tipID };
        },
        getCurrentTipID: function () {
          return g;
        },
        subscribeToCurrentTip: function (t) {
          return (
            C.add(t),
            function () {
              C.delete(t);
            }
          );
        },
        abortGateSequence: function () {
          try {
            return ((z = !1), ce(), !0);
          } catch (e) {
            return !1;
          }
        },
        offerLateGateResult: function (t, n) {
          n === void 0 && (n = !0);
          try {
            return z
              ? (Re(t),
                Q(function (e) {
                  return e.noteActivity();
                }),
                q && !n
                  ? !0
                  : q
                    ? ((q = !1),
                      i.delete(t.channelName),
                      Q(function (e) {
                        return e.reset();
                      }),
                      Q(function (e) {
                        return e.openCycle();
                      }),
                      Se(!0, "gate_late_result"),
                      !0)
                    : (W && (Le(t), Ce()), !0))
              : !1;
          } catch (e) {
            return !1;
          }
        },
        stageGateSequence: function (t) {
          try {
            (ce(),
              (H = !1),
              Q(function (e) {
                return e.openCycle();
              }),
              (z = !0),
              (G = !0));
            for (var e of t) Re(e);
            for (var n of c) a.add(n);
            return (
              Q(function (e) {
                return e.noteActivity();
              }),
              V
            );
          } catch (e) {
            return ((z = !1), null);
          }
        },
        startGateSequence: function (t) {
          try {
            return !z || t !== V ? !1 : (Se(!0, "gate_decided"), W || q);
          } catch (e) {
            return !1;
          }
        },
        addChannelResult: function (i, l, s, u) {
          u !== V ||
            q ||
            (o.set(i, { candidates: s, tips: l }),
            Q(function (e) {
              return e.noteActivity();
            }),
            t.has(i) ? (a.add(i), Se()) : n.has(i) || T(i, n, r, o));
        },
        beginChannelLoad: me,
        isV3Enabled: J,
        noteAdAccountID: function (t) {
          Q(function (e) {
            return e.noteAdAccountID(t);
          });
        },
        registerChannel: function (n, i, l) {
          var e;
          i === V &&
            (r.set(n, l),
            ((e = N) == null ? void 0 : e.channelName) === n && te(),
            t.has(n) && (o.has(n) && a.add(n), re(), oe()),
            ye(n, i));
        },
        supersedeChannelLoad: de,
        reset: function () {
          ce();
        },
      };
    }
    function $(e, t) {
      if ((u || (u = r("ExecutionEnvironment"))).canUseDOM) {
        if (typeof window.navigator.sendBeacon != "function") return !1;
        var n = new URLSearchParams(),
          o = function (t, r) {
            r != null && n.append(t, String(r));
          };
        for (var a of Object.entries(r("getAsyncParams")("POST"))) {
          var i = a[0],
            l = a[1];
          o(i, l);
        }
        var s = function (n) {
          var e = t[n];
          Array.isArray(e)
            ? e.forEach(function (e, t) {
                return o(n + "[" + t + "]", e);
              })
            : o(n, e);
        };
        for (var c of Object.keys(t)) s(c);
        return window.navigator.sendBeacon(e, n);
      }
      return !1;
    }
    function P(e) {
      var t = e,
        n = String(
          r(
            "XAYMTSequentialDisplayCycleLoggerAsyncControllerRouteBuilder",
          ).buildUri({}),
        );
      if (
        (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
        !(e.flush_trigger === "page_hide" && $(n, t))
      ) {
        var o = {};
        for (var a of Object.keys(t)) {
          var i = t[a];
          i != null && (o[a] = i);
        }
        new (r("AsyncRequest"))()
          .setURI(n)
          .setMethod("POST")
          .setData(o)
          .setAllowCrossPageTransition(!0)
          .send();
      }
    }
    function N(e, t) {
      var n = null,
        o = !1,
        a = function () {
          return r("AdsNUXTourStore").isTourOver() === !1;
        },
        i = function () {
          n != null && (t.clearTimeout(n), (n = null));
        };
      function l() {
        o ||
          a() ||
          (n = t.setTimeout(function () {
            ((n = null), !o && !a() && (u(), e()));
          }, g));
      }
      var s = r("AdsNUXTourStore").addListener(function () {
        (i(), l());
      });
      function u() {
        ((o = !0), i(), s.remove());
      }
      return (l(), u);
    }
    var M = x({
      bumpCounter: function (n) {
        return (e || (e = o("ODS"))).bumpEntityKey(
          68,
          "aymt_v3_sequential_cycle",
          n,
        );
      },
      clearTimeout: function (t) {
        (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
          window.clearTimeout(t);
      },
      getPath: function () {
        return (u || (u = r("ExecutionEnvironment"))).canUseDOM
          ? window.location.pathname
          : "";
      },
      isV3Enabled: function () {
        return r("qex")._("488") === !0;
      },
      logCycle: P,
      setTimeout: function (t, n) {
        return (u || (u = r("ExecutionEnvironment"))).canUseDOM
          ? window.setTimeout(t, n)
          : null;
      },
      subscribeToDismissals: o("AYMTTipDismissalNotifier")
        .subscribeToTipDismissals,
      subscribeToImpressions: o("AYMTTipImpressionNotifier")
        .subscribeToTipImpressions,
      subscribeToPageHide: function (t) {
        (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
          window.addEventListener("pagehide", t);
      },
      waitForInterruptiveUIToClear: function (t) {
        return N(t, {
          clearTimeout: function (t) {
            (u || (u = r("ExecutionEnvironment"))).canUseDOM &&
              window.clearTimeout(t);
          },
          setTimeout: function (t, n) {
            return (u || (u = r("ExecutionEnvironment"))).canUseDOM
              ? window.setTimeout(t, n)
              : null;
          },
        });
      },
    });
    ((l.V3_CRITICAL_CHANNELS = c),
      (l.CHANNEL_BARRIER_TIMEOUT_MS = m),
      (l.CHANNEL_REGISTRATION_GRACE_PERIOD_MS = p),
      (l.DISPATCHER_REGISTRATION_TIMEOUT_MS = _),
      (l.RENDER_CONFIRMATION_TIMEOUT_MS = f),
      (l.INTERRUPTIVE_UI_CLEAR_SETTLE_MS = g),
      (l.MAX_DISPATCHED_TIPS_PER_PAGE = h),
      (l.compareRankedCandidates = L),
      (l.createAYMTSequentialDisplayManager = x),
      (l.sendAYMTSequentialCycleRecord = P),
      (l.waitForNUXTourToClear = N),
      (l.AYMTSequentialDisplayManager = M));
  },
  98,
);
