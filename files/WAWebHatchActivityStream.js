__d(
  "WAWebHatchActivityStream",
  [
    "Promise",
    "WALogger",
    "WAWebHatchActivityFeed",
    "WAWebHatchActivityRecord",
    "WAWebHatchFrontendGating",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmConnection",
    "WAWebHatchVmSubscription",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = "activity.updated",
      p = 3e4,
      _ = [[], ["ACTIVITY_FEED_GOALS", "ACTIVITY_FEED_GOAL_ACTIONS_LAZY"]],
      f = 0,
      g = {
        feed: o("WAWebHatchActivityFeed").HATCH_ACTIVITY_EMPTY_FEED,
        syncState: "idle",
      },
      h = [],
      y = 0,
      C = 0,
      b = [],
      v = !1,
      S = new Set();
    function R() {
      (U(), f++, f === 1 && I());
      var e = !1;
      return function () {
        e || ((e = !0), f--, f === 0 && T());
      };
    }
    function L() {
      if (
        !(f === 0 || !o("WAWebHatchFrontendGating").isHatchActivityEnabled())
      ) {
        var e = ++y,
          t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
          n = function () {
            return e === y && H(t);
          };
        (j({ syncState: "loading" }),
          P(n).then(function (e) {
            n() && j({ syncState: e ? "loaded" : "failed" });
          }));
      }
    }
    function E() {
      return g;
    }
    function k(e) {
      var t = { listener: e };
      return (
        S.add(t),
        function () {
          S.delete(t);
        }
      );
    }
    function I() {
      o("WAWebHatchFrontendGating").isHatchActivityEnabled() &&
        ((h = _.map(function (e) {
          var t = new (r("WAWebHatchVmSubscription"))({
            connect: function () {
              return D(t);
            },
            kind: e.length === 0 ? "activity" : "activity-goals",
            onEvent: W,
            onResubscribed: $,
            open: function (n, r) {
              return n.openActivitySubscription(e, r);
            },
          });
          return t;
        })),
        h.forEach(function (e) {
          return e.start();
        }),
        L());
    }
    function T() {
      var e = h;
      ((h = []),
        e.forEach(function (e) {
          return e.stop();
        }));
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return !h.includes(e) ||
            !o("WAWebHatchFrontendGating").isHatchActivityEnabled()
            ? null
            : o("WAWebHatchVmConnection")
                .connectHatchVmApi()
                .catch(o("WAWebNullFunc").returnNull);
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      var e = o("WAWebHatchVmConnection").getHatchVmAccountGeneration();
      P(function () {
        return H(e);
      });
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          C++;
          var t = { complete: !1, records: [] };
          try {
            t = yield M();
          } finally {
            C--;
          }
          if ((e() && B(t.records), C === 0)) {
            var n = b;
            ((b = []),
              n.forEach(function (e) {
                var t = e.event,
                  n = e.generation;
                return q(t, n);
              }));
          }
          return t.complete;
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          if (e == null)
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-activity/read-failed reason=session",
                    ])),
                )
                .sendLogs("hatch-activity-read-failed"),
              { complete: !1, records: [] }
            );
          var t = yield (d || (d = n("Promise"))).all(
            _.map(function (t) {
              return A(e, t);
            }),
          );
          return {
            complete: t.every(Boolean),
            records: t.flatMap(function (e) {
              return e != null ? e : [];
            }),
          };
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = function () {
              return e.activityPage(
                o("WAWebHatchActivityFeed").HATCH_ACTIVITY_MAX_ROWS,
                t,
                { timeoutMs: p },
              );
            },
            r = yield n(),
            a = r.kind === "Failure" ? yield n() : r;
          return a.kind !== "Ok"
            ? (o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-activity/read-failed reason=",
                      " goals=",
                      "",
                    ])),
                  G(a),
                  String(t.length > 0),
                )
                .sendLogs("hatch-activity-read-failed"),
              null)
            : O(a.value);
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      var t;
      return (
        (t = o("WAWebHatchJsonReaders").readArray(e, "days")) != null ? t : []
      ).flatMap(function (e) {
        var t;
        return (t = o("WAWebHatchJsonReaders").readArray(e, "activities")) !=
          null
          ? t
          : [];
      });
    }
    function B(t) {
      var n = [],
        r = g.feed;
      for (var a of t) {
        var i = o("WAWebHatchActivityRecord").decodeHatchActivityRecord(
          a,
          null,
        );
        i.kind === "row"
          ? (r = o("WAWebHatchActivityFeed").applyHatchActivityRecord(
              r,
              i.record,
            ))
          : n.push(i.reason);
      }
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-activity/applied-page records=",
            " dropped=",
            " noId=",
            " noTime=",
            " malformed=",
            "",
          ])),
        t.length,
        n.length,
        z(n, "no_id"),
        z(n, "no_time"),
        z(n, "malformed"),
      ),
        j({ feed: r }));
    }
    function W(e) {
      if (e.name === m) {
        var t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration();
        if (C > 0) {
          b.push({ event: e, generation: t });
          return;
        }
        q(e, t);
      }
    }
    function q(e, t) {
      if (H(t)) {
        var n = e.tsMs > 0 ? e.tsMs : null,
          r = o("WAWebHatchActivityRecord").decodeHatchActivityRecord(
            o("WAWebHatchActivityRecord").unwrapHatchActivityStreamPayload(
              e.payload,
            ),
            n,
          );
        if (r.kind === "dropped") {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-activity/dropped-update reason=",
                "",
              ])),
            r.reason,
          );
          return;
        }
        j({
          feed: o("WAWebHatchActivityFeed").applyHatchActivityRecord(
            g.feed,
            r.record,
          ),
        });
      }
    }
    function U() {
      v ||
        ((v = !0),
        o("WAWebHatchVmConnection").subscribeToHatchVmAccountChange(V));
    }
    function V() {
      (T(),
        y++,
        (b = []),
        j({
          feed: o("WAWebHatchActivityFeed").HATCH_ACTIVITY_EMPTY_FEED,
          syncState: "idle",
        }),
        f > 0 && I());
    }
    function H(e) {
      return e === o("WAWebHatchVmConnection").getHatchVmAccountGeneration();
    }
    function G(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected" &&
          "statusCode" in e
        ) {
          var t = e.statusCode;
          if (t != null) return "http." + t;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected"
        )
          return "rejected";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Unreadable"
        )
          return "malformedResponse";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Failure"
        )
          return "transport";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Ok"
        )
          return "none";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function z(e, t) {
      return e.filter(function (e) {
        return e === t;
      }).length;
    }
    function j(e) {
      var t = babelHelpers.extends({}, g, e);
      if (!(t.feed === g.feed && t.syncState === g.syncState)) {
        g = t;
        for (var n of Array.from(S)) n.listener();
      }
    }
    ((l.retainHatchActivityStream = R),
      (l.refreshHatchActivity = L),
      (l.getHatchActivitySnapshot = E),
      (l.subscribeToHatchActivity = k));
  },
  98,
);
