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
      p = new WeakMap();
    function _(e, t) {
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
    function f(e, t, n, r) {
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
    function g(t, n, r, a) {
      a === void 0 && (a = 1);
      var i = (function (e) {
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
        l = t.removed === 0 ? "zero" : "nonzero",
        s =
          t.trigger === "snooze" || t.trigger === "unfollow"
            ? f(
                t.trigger,
                (t.author != null ? 1 : 0) + (t.target != null ? 2 : 0),
                l,
                t.context,
              )
            : t.trigger + "." + i + "." + l;
      (e || (e = o("ODS"))).bumpEntityKey(
        757,
        "comet_feed_cache_invalidation",
        "opportunity." + s + "." + n + "." + r,
        Math.min(r === "duration_seconds" ? u / 1e3 : m, Math.max(0, a)),
      );
    }
    function h(e, t, n) {
      e.actions.delete(t) &&
        (g(t.operation, "window", n),
        g(
          t.operation,
          "window",
          "duration_seconds",
          Math.floor(Math.min(u, Date.now() - t.operation.started) / 1e3),
        ),
        t.candidates.clear(),
        t.operation.baseline.clear());
    }
    function y(e) {
      var t = p.get(e);
      if (t == null) return null;
      var n = Date.now();
      for (var r of t.actions)
        n - r.operation.started >= u && h(t, r, "expired");
      for (var o of t.deliveries) {
        var a = o[0],
          i = o[1];
        n - i.timestamp >= u && t.deliveries.delete(a);
      }
      return t;
    }
    function C(e) {
      p.has(e) ||
        p.set(e, {
          actions: new Set(),
          deliveries: new Map(),
          historyCensoredUntil: 0,
          sequence: 0,
        });
    }
    function b(e) {
      return e === !0;
    }
    function v(e) {
      var t,
        n = e.getLinkedRecords("actors"),
        r = e.getLinkedRecord("target_group"),
        o = e.getLinkedRecord("tombstone_feedunit");
      return {
        author: n == null || (t = n[0]) == null ? void 0 : t.getDataID(),
        authorKnown: n !== void 0,
        hidden: o != null && b(o.getValue("is_hidden_from_client")),
        id: e.getDataID(),
        target: r == null ? void 0 : r.getDataID(),
        targetKnown: r !== void 0,
      };
    }
    function S(e, t) {
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
          b(
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
    function R(e, t) {
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
    function L(e, t, n) {
      var r = t.candidates,
        o = t.operation;
      if (!(o.baseline.has(n.id) || r.has(n.id))) {
        if (r.size >= c) {
          (g(o, "window", "saturated"), h(e, t, "censored"));
          return;
        }
        var a = R(o, n);
        (r.set(n.id, { identity: n, match: a }),
          g(o, "fetched", "candidate"),
          g(o, "fetched", a));
      }
    }
    function E(t, n) {
      if (!(t.historyCensoredUntil > Date.now())) {
        var r = t.deliveries.get(n.id);
        if (r != null) {
          r.identity = n;
          return;
        }
        if (t.deliveries.size >= c) {
          t.historyCensoredUntil = Date.now() + u;
          for (var a of t.actions)
            (g(a.operation, "window", "saturated"), h(t, a, "censored"));
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
        for (var i of t.actions) L(t, i, n);
      }
    }
    function k(e, t) {
      C(e);
      var n = t("comet_news_feed"),
        r = {
          update: function (r, a) {
            (P(
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
                    l = y(e);
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
                      ? E(l, v(c))
                      : u != null &&
                        E(l, {
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
    function I(e, t, n, r, a) {
      var i = y(e);
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
          var C = g == null ? void 0 : g.getLinkedRecord("node");
          C != null ? l.add(C.getDataID()) : (u = !1);
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
    function T(e, t, n) {
      if (!t.finished) {
        t.finished = !0;
        var r = y(e);
        if (r == null) {
          t.baseline.clear();
          return;
        }
        if ((g(t, "result", n), n === "null_result")) {
          t.baseline.clear();
          return;
        }
        if (t.author == null && t.target == null) {
          (g(t, "result", "ineligible"),
            t.skippedAuthor != null &&
              g(t, "result", _("author", t.skippedAuthor)),
            t.skippedTarget != null &&
              g(t, "result", _("target", t.skippedTarget)),
            t.baseline.clear());
          return;
        }
        if (
          (g(t, "result", "removed_edges", t.removed),
          g(t, "result", "matched_edges", t.removed),
          t.baselineComplete
            ? (g(t, "result", "considered_edges", t.considered),
              g(t, "result", "remaining_edges", t.considered - t.removed))
            : g(t, "result", "counts_unknown"),
          (t.saturated || t.removed >= m) && g(t, "result", "counts_saturated"),
          t.removed === 0 && g(t, "result", "no_match"),
          n !== "completed")
        ) {
          t.baseline.clear();
          return;
        }
        for (var o of r.actions) {
          var a = o.candidates.get(t.storyID);
          a != null &&
            ["author", "target", "both"].includes(a.match) &&
            g(o.operation, "window", "repeated_action");
        }
        if (!t.baselineComplete || r.historyCensoredUntil > Date.now()) {
          (g(t, "window", t.saturated ? "saturated" : "baseline_unknown"),
            g(t, "window", "censored"),
            t.baseline.clear());
          return;
        }
        if (r.actions.size >= d) {
          (g(t, "window", "saturated"),
            g(t, "window", "censored"),
            t.baseline.clear());
          return;
        }
        var i = { candidates: new Map(), operation: t };
        (r.actions.add(i), g(t, "window", "started"));
        for (var l of r.deliveries.values())
          l.sequence > t.deliverySequence && L(r, i, l.identity);
      }
    }
    function D(t, n) {
      var r = y(t);
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
          l = i == null || r.actions.size === 0 ? null : S(t, i),
          u = !1,
          c = i == null;
        for (var d of r.actions) {
          var m = i == null ? null : d.candidates.get(i);
          if (m != null) {
            var p = l == null ? "unknown" : R(d.operation, l);
            (m.match === "unknown" &&
              p !== "unknown" &&
              ((m.match = p), g(d.operation, "hydrated", p)),
              (c = c || p === "unknown"),
              (u = u || ["author", "target", "both"].includes(p)));
          }
        }
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
    function x(e, t) {
      var n,
        r,
        o = Array.from(
          (n = (r = y(e)) == null ? void 0 : r.actions) != null ? n : [],
        ).filter(function (e) {
          return e.operation.storyID === t;
        });
      return o.length === 1 ? o[0] : null;
    }
    function $(e, t) {
      var n = y(e);
      n != null && h(n, t, "undo");
    }
    function P(t, n) {
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
    var N = {
      complete: function (t, n, r) {
        P(
          function () {
            return T(t, n, r);
          },
          void 0,
        );
      },
      getUndoObservation: function (t, n) {
        return P(function () {
          return x(t, n);
        }, null);
      },
      observeVPV: function (t, n) {
        P(
          function () {
            return D(t, n);
          },
          void 0,
        );
      },
      prepare: function (t, n, r, o, a) {
        return P(function () {
          return I(t, n, r, o, a);
        }, null);
      },
      recordRejected: function (n, r, a, i) {
        P(
          function () {
            y(n) != null &&
              (e || (e = o("ODS"))).bumpEntityKey(
                757,
                "comet_feed_cache_invalidation",
                "opportunity." + f(r, 0, "zero", i) + ".result." + a,
                1,
              );
          },
          void 0,
        );
      },
      recordSkipped: function (n, r, a, i) {
        P(
          function () {
            y(n) != null &&
              (e || (e = o("ODS"))).bumpEntityKey(
                757,
                "comet_feed_cache_invalidation",
                "opportunity." + r + "." + a + ".zero.result." + _(a, i),
                1,
              );
          },
          void 0,
        );
      },
      register: function (t) {
        P(
          function () {
            return C(t);
          },
          void 0,
        );
      },
      undo: function (t, n) {
        P(
          function () {
            return $(t, n);
          },
          void 0,
        );
      },
      wrapHandlerProvider: k,
    };
    l.default = N;
  },
  98,
);
