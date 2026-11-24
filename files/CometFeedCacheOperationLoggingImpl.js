__d(
  "CometFeedCacheOperationLoggingImpl",
  [
    "CometNewsFeedConnectionHandler",
    "ODS",
    "relay-runtime",
    "relay-runtime/store/RelayModernRecord",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 864e5,
      c = 2e3,
      d = 20,
      m = 1e4,
      p = new WeakMap(),
      _ = {
        author: {
          seen_or_above: "author_seen_or_above",
          unpositioned: "author_unpositioned",
          unseen_below: "author_unseen_below",
        },
        both: {
          seen_or_above: "both_seen_or_above",
          unpositioned: "both_unpositioned",
          unseen_below: "both_unseen_below",
        },
        none: {
          seen_or_above: "none_seen_or_above",
          unpositioned: "none_unpositioned",
          unseen_below: "none_unseen_below",
        },
        target: {
          seen_or_above: "target_seen_or_above",
          unpositioned: "target_unpositioned",
          unseen_below: "target_unseen_below",
        },
        unknown: {
          seen_or_above: "unknown_seen_or_above",
          unpositioned: "unknown_unpositioned",
          unseen_below: "unknown_unseen_below",
        },
      },
      f = o("relay-runtime").getRelayHandleKey(
        "comet_news_feed",
        "CometNewsFeed_viewer_news_feed",
        null,
      );
    function g(e, t) {
      return e === "author"
        ? t === "missing_story"
          ? "skipped_author_missing_story"
          : t === "missing_entity"
            ? "skipped_author_missing_entity"
            : t === "scope_disabled"
              ? "skipped_author_scope_disabled"
              : t === "store_unavailable"
                ? "skipped_author_store_unavailable"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })()
        : e === "target"
          ? t === "missing_story"
            ? "skipped_target_missing_story"
            : t === "missing_entity"
              ? "skipped_target_missing_entity"
              : t === "scope_disabled"
                ? "skipped_target_scope_disabled"
                : t === "store_unavailable"
                  ? "skipped_target_store_unavailable"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })()
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function h(e, t, n, r) {
      var o,
        a,
        i,
        l = e === "snooze" ? 3 : 4;
      return (
        "trigger_" +
        l +
        ".scope_" +
        t +
        "." +
        n +
        ".source_" +
        ((o = r == null ? void 0 : r.sourcePath) != null ? o : 0) +
        ".interface_" +
        ((a = r == null ? void 0 : r.interface) != null ? a : 0) +
        ".surface_" +
        ((i = r == null ? void 0 : r.surface) != null ? i : 0)
      );
    }
    function y(t, n, r, a) {
      var i;
      a === void 0 && (a = 1);
      var l = (function (e) {
          if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === !0)
            return "both";
          if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === !1)
            return "author";
          if (Array.isArray(e) && e.length === 2 && e[0] === !1 && e[1] === !0)
            return "target";
          if (Array.isArray(e) && e.length === 2 && e[0] === !1 && e[1] === !1)
            return "none";
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        })([t.author != null, t.target != null]),
        s =
          ((i = t.opportunity) != null ? i : t.removed) === 0
            ? "zero"
            : "nonzero",
        c =
          t.trigger === "snooze" || t.trigger === "unfollow"
            ? h(
                t.trigger,
                (t.author != null ? 1 : 0) + (t.target != null ? 2 : 0),
                s,
                t.context,
              )
            : t.trigger + "." + l + "." + s;
      (e || (e = o("ODS"))).bumpEntityKey(
        757,
        "comet_feed_cache_invalidation",
        "opportunity." + c + "." + n + "." + r,
        Math.min(r === "duration_seconds" ? u / 1e3 : m, Math.max(0, a)),
      );
    }
    function C(e, t, n) {
      var r;
      e.actions.delete(t) &&
        (y(t.operation, "window", n),
        y(
          t.operation,
          "window",
          "duration_seconds",
          Math.floor(Math.min(u, Date.now() - t.operation.started) / 1e3),
        ),
        t.candidates.clear(),
        (r = t.pool) == null || r.clear(),
        t.operation.baseline.clear());
    }
    function b(e) {
      var t = p.get(e);
      if (t == null) return null;
      var n = Date.now();
      for (var r of t.actions)
        n - r.operation.started >= u && C(t, r, "expired");
      for (var o of t.deliveries) {
        var a = o[0],
          i = o[1];
        n - i.timestamp >= u && t.deliveries.delete(a);
      }
      return t;
    }
    function v(e) {
      p.has(e) ||
        p.set(e, {
          actions: new Set(),
          deliveries: new Map(),
          historyCensoredUntil: 0,
          sequence: 0,
        });
    }
    function S(e) {
      return e === !0;
    }
    function R(e) {
      var t,
        n = e.getLinkedRecords("actors"),
        r = e.getLinkedRecord("target_group"),
        o = e.getLinkedRecord("tombstone_feedunit");
      return {
        author: n == null || (t = n[0]) == null ? void 0 : t.getDataID(),
        authorKnown: n !== void 0,
        hidden: o != null && S(o.getValue("is_hidden_from_client")),
        id: e.getDataID(),
        target: r == null ? void 0 : r.getDataID(),
        targetKnown: r !== void 0,
      };
    }
    function L(e, t) {
      var n = e.getSource(),
        r = n.get(t);
      if (r == null) return null;
      var a = (
          s || (s = o("relay-runtime/store/RelayModernRecord"))
        ).getLinkedRecordIDs(r, "actors"),
        i = s.getLinkedRecordID(r, "target_group"),
        l = s.getLinkedRecordID(r, "tombstone_feedunit"),
        u = l == null ? null : n.get(l);
      return {
        author: a == null ? void 0 : a[0],
        authorKnown: a !== void 0,
        hidden:
          u != null &&
          S(
            (s || (s = o("relay-runtime/store/RelayModernRecord"))).getValue(
              u,
              "is_hidden_from_client",
            ),
          ),
        id: t,
        target: i,
        targetKnown: i !== void 0,
      };
    }
    function E(e, t) {
      if (t.id === e.storyID || t.hidden) return "excluded";
      if (
        (e.author != null && !t.authorKnown) ||
        (e.target != null && !t.targetKnown)
      )
        return "unknown";
      var n = e.author != null && t.author === e.author,
        r = e.target != null && t.target === e.target;
      return n && r ? "both" : n ? "author" : r ? "target" : "none";
    }
    function k(e, t, n) {
      var r = t.candidates,
        o = t.operation;
      if (!(o.baseline.has(n.id) || r.has(n.id))) {
        if (r.size >= c) {
          (y(o, "window", "saturated"), C(e, t, "censored"));
          return;
        }
        var a = E(o, n);
        (r.set(n.id, { identity: n, match: a }),
          y(o, "fetched", "candidate"),
          y(o, "fetched", a));
      }
    }
    function I(t, n) {
      if (!(t.historyCensoredUntil > Date.now())) {
        var r = t.deliveries.get(n.id);
        if (r != null) {
          r.identity = n;
          return;
        }
        if (t.deliveries.size >= c) {
          t.historyCensoredUntil = Date.now() + u;
          for (var a of t.actions)
            (y(a.operation, "window", "saturated"), C(t, a, "censored"));
          (t.deliveries.clear(),
            (e || (e = o("ODS"))).bumpEntityKey(
              757,
              "comet_feed_cache_invalidation",
              "opportunity.history.saturated",
            ));
          return;
        }
        (t.sequence++,
          t.deliveries.set(n.id, {
            identity: n,
            sequence: t.sequence,
            timestamp: Date.now(),
          }));
        for (var i of t.actions) k(t, i, n);
      }
    }
    function T(e, t) {
      v(e);
      var n = t("comet_news_feed"),
        r = {
          update: function (r, a) {
            (F(
              function () {
                var t,
                  n =
                    (t = r.get(a.dataID)) == null
                      ? void 0
                      : t.getLinkedRecord(a.fieldKey);
                if (
                  a.handleKey.includes("CometNewsFeed_viewer_news_feed") &&
                  a.args.before == null
                ) {
                  var i,
                    l = b(e);
                  if (l == null || l.historyCensoredUntil > Date.now()) return;
                  var s =
                    (i =
                      n == null
                        ? void 0
                        : n.getLinkedRecords(
                            o("relay-runtime").ConnectionInterface.get().EDGES,
                          )) != null
                      ? i
                      : [];
                  for (var u of s) {
                    var c = u == null ? void 0 : u.getLinkedRecord("node");
                    c != null
                      ? I(l, R(c))
                      : u != null &&
                        I(l, {
                          author: null,
                          authorKnown: !1,
                          hidden: !1,
                          id: u.getDataID(),
                          target: null,
                          targetKnown: !1,
                        });
                  }
                }
              },
              void 0,
            ),
              n.update(r, a));
          },
        };
      return function (e) {
        return e === "comet_news_feed" ? r : t(e);
      };
    }
    function D(e, t, n, r, a) {
      var i = b(e);
      if (i == null) return null;
      var l = new Set(i.deliveries.keys()),
        s = 0,
        u = i.historyCensoredUntil <= Date.now(),
        d = !u,
        p = t.get("client:root:viewer"),
        _ =
          p == null
            ? null
            : o("CometNewsFeedConnectionHandler").getAllConnectionsWithKey(
                t,
                p,
                "CometNewsFeed_viewer_news_feed",
              );
      _ == null && (u = !1);
      for (var f of _ != null ? _ : []) {
        for (var g of (h = f.getLinkedRecords(
          o("relay-runtime").ConnectionInterface.get().EDGES,
        )) != null
          ? h
          : []) {
          var h;
          if (s >= m || l.size >= c) {
            ((u = !1), (d = !0));
            break;
          }
          s++;
          var y = g == null ? void 0 : g.getLinkedRecord("node");
          y != null ? l.add(y.getDataID()) : (u = !1);
        }
        if (d) break;
      }
      return {
        author: null,
        baseline: l,
        baselineComplete: u,
        considered: s,
        context: a != null ? a : void 0,
        deliverySequence: i.sequence,
        finished: !1,
        removed: 0,
        saturated: d,
        started: Date.now(),
        storyID: r,
        target: null,
        trigger: n,
      };
    }
    function x(e, t, n) {
      if (!t.finished) {
        t.finished = !0;
        var r = b(e);
        if (r == null) {
          t.baseline.clear();
          return;
        }
        if ((y(t, "result", n), n === "null_result")) {
          t.baseline.clear();
          return;
        }
        if (t.author == null && t.target == null) {
          (y(t, "result", "ineligible"),
            t.skippedAuthor != null &&
              y(t, "result", g("author", t.skippedAuthor)),
            t.skippedTarget != null &&
              y(t, "result", g("target", t.skippedTarget)),
            t.baseline.clear());
          return;
        }
        if (
          (y(t, "result", "removed_edges", t.removed),
          y(t, "result", "matched_edges", t.removed),
          t.baselineComplete
            ? (y(t, "result", "considered_edges", t.considered),
              y(t, "result", "remaining_edges", t.considered - t.removed))
            : y(t, "result", "counts_unknown"),
          (t.saturated || t.removed >= m) && y(t, "result", "counts_saturated"),
          t.removed === 0 && y(t, "result", "no_match"),
          n !== "completed")
        ) {
          t.baseline.clear();
          return;
        }
        for (var o of r.actions) {
          var a = o.candidates.get(t.storyID);
          a != null &&
            ["author", "target", "both"].includes(a.match) &&
            y(o.operation, "window", "repeated_action");
        }
        $(r, t);
      }
    }
    function $(e, t, n) {
      if (!t.baselineComplete || e.historyCensoredUntil > Date.now()) {
        (y(t, "window", t.saturated ? "saturated" : "baseline_unknown"),
          y(t, "window", "censored"),
          t.baseline.clear());
        return;
      }
      if (e.actions.size >= d) {
        (y(t, "window", "saturated"),
          y(t, "window", "censored"),
          t.baseline.clear());
        return;
      }
      var r =
        n == null
          ? { candidates: new Map(), operation: t }
          : { candidates: new Map(), operation: t, pool: n };
      (e.actions.add(r), y(t, "window", "started"));
      for (var o of e.deliveries.values())
        o.sequence > t.deliverySequence && k(e, r, o.identity);
    }
    function P(e) {
      var t = e.getSource().get("client:root:viewer");
      if (t == null) return null;
      var n = [];
      for (var r of (
        s || (s = o("relay-runtime/store/RelayModernRecord"))
      ).getFields(t))
        if (r === f || r.startsWith(f + "(")) {
          var a = (
            s || (s = o("relay-runtime/store/RelayModernRecord"))
          ).getLinkedRecordID(t, r);
          a != null && n.push(a);
        }
      return n;
    }
    function N(t, n, r) {
      var a,
        i,
        l,
        u,
        d,
        p = b(t);
      if (p != null) {
        (e || (e = o("ODS"))).bumpEntityKey(
          757,
          "comet_feed_cache_invalidation",
          "opportunity.interested.entry_point." + r,
        );
        var f = L(t, n),
          g = {
            author: f == null ? void 0 : f.author,
            baseline: new Set(p.deliveries.keys()),
            baselineComplete: p.historyCensoredUntil <= Date.now(),
            considered: 0,
            deliverySequence: p.sequence,
            finished: !0,
            opportunity: 0,
            removed: 0,
            saturated: p.historyCensoredUntil > Date.now(),
            started: Date.now(),
            storyID: n,
            target: f == null ? void 0 : f.target,
            trigger: "interested",
          };
        if (f == null) {
          y(g, "result", "missing_story");
          return;
        }
        if (g.author == null && g.target == null) {
          (y(g, "result", "completed"), y(g, "result", "ineligible"));
          return;
        }
        var h = t.getSource(),
          C = new Map(),
          v = new Map(),
          S = !1,
          R = !0,
          k = !1,
          I = P(t);
        I == null && ((g.baselineComplete = !1), (R = !1));
        for (var T of I != null ? I : []) {
          var D = h.get(T),
            x =
              D == null
                ? null
                : (
                    s || (s = o("relay-runtime/store/RelayModernRecord"))
                  ).getLinkedRecordIDs(
                    D,
                    o("relay-runtime").ConnectionInterface.get().EDGES,
                  ),
            N = (x != null ? x : []).map(function (e) {
              return e == null ? null : h.get(e);
            }),
            M = N.findIndex(function (e) {
              return (
                e != null &&
                (
                  s || (s = o("relay-runtime/store/RelayModernRecord"))
                ).getLinkedRecordID(e, "node") === n
              );
            });
          S = S || M >= 0;
          for (var w = 0; w < N.length; w++) {
            var A;
            if (g.considered >= m) {
              k = !0;
              break;
            }
            g.considered++;
            var F = N[w],
              O =
                F == null
                  ? null
                  : (
                      s || (s = o("relay-runtime/store/RelayModernRecord"))
                    ).getLinkedRecordID(F, "node");
            O == null
              ? ((g.baselineComplete = !1), (R = !1))
              : g.baseline.size < c || g.baseline.has(O)
                ? g.baseline.add(O)
                : ((g.baselineComplete = !1), (g.saturated = !0));
            var B = O == null ? null : L(t, O),
              W = B == null ? "unknown" : E(g, B);
            if (W !== "excluded") {
              var q =
                  M < 0
                    ? "unpositioned"
                    : w > M &&
                        (F == null ||
                          (
                            s ||
                            (s = o("relay-runtime/store/RelayModernRecord"))
                          ).getValue(F, "has_been_seen") !== !0)
                      ? "unseen_below"
                      : "seen_or_above",
                U = _[W][q];
              (C.set(U, ((A = C.get(U)) != null ? A : 0) + 1),
                O != null &&
                  q === "unseen_below" &&
                  (W === "author" || W === "target" || W === "both") &&
                  v.set(O, W));
            }
          }
          if (k) break;
        }
        var V =
            ((a = C.get("author_unseen_below")) != null ? a : 0) +
            ((i = C.get("both_unseen_below")) != null ? i : 0),
          H =
            ((l = C.get("target_unseen_below")) != null ? l : 0) +
            ((u = C.get("both_unseen_below")) != null ? u : 0),
          G = V + ((d = C.get("target_unseen_below")) != null ? d : 0);
        ((g.opportunity = G),
          y(g, "result", "completed"),
          S || y(g, "result", "acted_missing"));
        for (var z of C) {
          var j = z[0],
            K = z[1];
          y(g, "result", j, K);
        }
        (G > 0 && y(g, "result", "any_unseen_below"),
          V > 0 && y(g, "result", "any_author_unseen_below"),
          H > 0 && y(g, "result", "any_target_unseen_below"),
          R && !k
            ? y(g, "result", "considered_edges", g.considered)
            : y(g, "result", "counts_unknown"),
          k && y(g, "result", "counts_saturated"),
          $(p, g, v));
      }
    }
    function M(t, n) {
      var r = b(t);
      if (r != null) {
        (e || (e = o("ODS"))).bumpEntityKey(
          757,
          "comet_feed_cache_invalidation",
          "opportunity.vpv.total",
        );
        var a = t.getSource().get(n),
          i =
            a == null
              ? null
              : (
                  s || (s = o("relay-runtime/store/RelayModernRecord"))
                ).getLinkedRecordID(a, "node"),
          l = i == null || r.actions.size === 0 ? null : L(t, i),
          u = !1,
          c = i == null,
          d = function () {
            var e,
              t = i == null ? null : (e = m.pool) == null ? void 0 : e.get(i);
            if (i != null && t != null) {
              var n;
              ((n = m.pool) == null || n.delete(i),
                y(m.operation, "window", "pool_viewed"),
                y(
                  m.operation,
                  "window",
                  t === "author"
                    ? "pool_viewed_author"
                    : t === "target"
                      ? "pool_viewed_target"
                      : t === "both"
                        ? "pool_viewed_both"
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                t,
                            );
                          })(),
                ));
            }
            var r = i == null ? null : m.candidates.get(i);
            if (r == null) return 1;
            var o = l == null ? "unknown" : E(m.operation, l);
            (r.match === "unknown" &&
              o !== "unknown" &&
              ((r.match = o), y(m.operation, "hydrated", o)),
              (c = c || o === "unknown"),
              (u = u || ["author", "target", "both"].includes(o)));
          };
        for (var m of r.actions) d();
        u
          ? (e || (e = o("ODS"))).bumpEntityKey(
              757,
              "comet_feed_cache_invalidation",
              "opportunity.vpv.matching",
            )
          : c &&
            (e || (e = o("ODS"))).bumpEntityKey(
              757,
              "comet_feed_cache_invalidation",
              "opportunity.vpv.unknown",
            );
      }
    }
    function w(e, t) {
      var n,
        r,
        o = Array.from(
          (n = (r = b(e)) == null ? void 0 : r.actions) != null ? n : [],
        ).filter(function (e) {
          return (
            e.operation.storyID === t && e.operation.trigger !== "interested"
          );
        });
      return o.length === 1 ? o[0] : null;
    }
    function A(e, t) {
      var n = b(e);
      n != null && C(n, t, "undo");
    }
    function F(t, n) {
      try {
        return t();
      } catch (t) {
        try {
          (e || (e = o("ODS"))).bumpEntityKey(
            757,
            "comet_feed_cache_invalidation",
            "opportunity.error",
          );
        } catch (e) {
          return n;
        }
        return n;
      }
    }
    var O = {
      complete: function (t, n, r) {
        F(
          function () {
            return x(t, n, r);
          },
          void 0,
        );
      },
      getUndoObservation: function (t, n) {
        return F(function () {
          return w(t, n);
        }, null);
      },
      observeInterested: function (t, n, r) {
        F(
          function () {
            return N(t, n, r);
          },
          void 0,
        );
      },
      observeVPV: function (t, n) {
        F(
          function () {
            return M(t, n);
          },
          void 0,
        );
      },
      prepare: function (t, n, r, o, a) {
        return F(function () {
          return D(t, n, r, o, a);
        }, null);
      },
      recordRejected: function (n, r, a, i) {
        F(
          function () {
            b(n) != null &&
              (e || (e = o("ODS"))).bumpEntityKey(
                757,
                "comet_feed_cache_invalidation",
                "opportunity." + h(r, 0, "zero", i) + ".result." + a,
                1,
              );
          },
          void 0,
        );
      },
      recordSkipped: function (n, r, a, i) {
        F(
          function () {
            b(n) != null &&
              (e || (e = o("ODS"))).bumpEntityKey(
                757,
                "comet_feed_cache_invalidation",
                "opportunity." + r + "." + a + ".zero.result." + g(a, i),
                1,
              );
          },
          void 0,
        );
      },
      register: function (t) {
        F(
          function () {
            return v(t);
          },
          void 0,
        );
      },
      undo: function (t, n) {
        F(
          function () {
            return A(t, n);
          },
          void 0,
        );
      },
      wrapHandlerProvider: T,
    };
    l.default = O;
  },
  98,
);
