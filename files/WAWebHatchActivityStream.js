__d(
  "WAWebHatchActivityStream",
  [
    "WALogger",
    "WAWebHatchActivityFeed",
    "WAWebHatchActivityRecord",
    "WAWebHatchFrontendGating",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmConnection",
    "WAWebHatchVmSubscription",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "activity.updated",
      m = 3e4,
      p = [[], ["ACTIVITY_FEED_GOALS", "ACTIVITY_FEED_GOAL_ACTIONS_LAZY"]],
      _ = 0,
      f = {
        feed: o("WAWebHatchActivityFeed").HATCH_ACTIVITY_EMPTY_FEED,
        syncState: "idle",
      },
      g = [],
      h = 0,
      y = 0,
      C = [],
      b = !1,
      v = new Set();
    function S() {
      (F(), _++, _ === 1 && k());
      var e = !1;
      return function () {
        e || ((e = !0), _--, _ === 0 && I());
      };
    }
    function R() {
      if (
        !(_ === 0 || !o("WAWebHatchFrontendGating").isHatchActivityEnabled())
      ) {
        var e = ++h,
          t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
          n = function () {
            return e === h && B(t);
          };
        (U({ syncState: "loading" }),
          x(n).then(function (e) {
            n() && U({ syncState: e ? "loaded" : "failed" });
          }));
      }
    }
    function L() {
      return f;
    }
    function E(e) {
      var t = { listener: e };
      return (
        v.add(t),
        function () {
          v.delete(t);
        }
      );
    }
    function k() {
      o("WAWebHatchFrontendGating").isHatchActivityEnabled() &&
        ((g = p.map(function (e) {
          var t = new (r("WAWebHatchVmSubscription"))({
            connect: function () {
              return T(t);
            },
            kind: e.length === 0 ? "activity" : "activity-goals",
            onEvent: w,
            onResubscribed: D,
            open: function (n, r) {
              return n.openActivitySubscription(e, r);
            },
          });
          return t;
        })),
        g.forEach(function (e) {
          return e.start();
        }),
        R());
    }
    function I() {
      var e = g;
      ((g = []),
        e.forEach(function (e) {
          return e.stop();
        }));
    }
    async function T(e) {
      return !g.includes(e) ||
        !o("WAWebHatchFrontendGating").isHatchActivityEnabled()
        ? null
        : o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
    }
    function D() {
      var e = o("WAWebHatchVmConnection").getHatchVmAccountGeneration();
      x(function () {
        return B(e);
      });
    }
    async function x(e) {
      y++;
      var t = { complete: !1, records: [] };
      try {
        t = await $();
      } finally {
        y--;
      }
      if ((e() && M(t.records), y === 0)) {
        var n = C;
        ((C = []),
          n.forEach(function (e) {
            var t = e.event,
              n = e.generation;
            return A(t, n);
          }));
      }
      return t.complete;
    }
    async function $() {
      var t = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      if (t == null)
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-activity/read-failed reason=session",
                ])),
            )
            .sendLogs("hatch-activity-read-failed"),
          { complete: !1, records: [] }
        );
      var n = await Promise.all(
        p.map(function (e) {
          return P(t, e);
        }),
      );
      return {
        complete: n.every(Boolean),
        records: n.flatMap(function (e) {
          return e != null ? e : [];
        }),
      };
    }
    async function P(e, t) {
      var n = function () {
          return e.activityPage(
            o("WAWebHatchActivityFeed").HATCH_ACTIVITY_MAX_ROWS,
            t,
            { timeoutMs: m },
          );
        },
        r = await n(),
        a = r.kind === "Failure" ? await n() : r;
      return a.kind !== "Ok"
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-activity/read-failed reason=",
                  " goals=",
                  "",
                ])),
              W(a),
              String(t.length > 0),
            )
            .sendLogs("hatch-activity-read-failed"),
          null)
        : N(a.value);
    }
    function N(e) {
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
    function M(e) {
      var t = [],
        n = f.feed;
      for (var r of e) {
        var a = o("WAWebHatchActivityRecord").decodeHatchActivityRecord(
          r,
          null,
        );
        a.kind === "row"
          ? (n = o("WAWebHatchActivityFeed").applyHatchActivityRecord(
              n,
              a.record,
            ))
          : t.push(a.reason);
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-activity/applied-page records=",
            " dropped=",
            " noId=",
            " noTime=",
            " malformed=",
            "",
          ])),
        e.length,
        t.length,
        q(t, "no_id"),
        q(t, "no_time"),
        q(t, "malformed"),
      ),
        U({ feed: n }));
    }
    function w(e) {
      if (e.name === d) {
        var t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration();
        if (y > 0) {
          C.push({ event: e, generation: t });
          return;
        }
        A(e, t);
      }
    }
    function A(e, t) {
      if (B(t)) {
        var n = e.tsMs > 0 ? e.tsMs : null,
          r = o("WAWebHatchActivityRecord").decodeHatchActivityRecord(
            o("WAWebHatchActivityRecord").unwrapHatchActivityStreamPayload(
              e.payload,
            ),
            n,
          );
        if (r.kind === "dropped") {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-activity/dropped-update reason=",
                "",
              ])),
            r.reason,
          );
          return;
        }
        U({
          feed: o("WAWebHatchActivityFeed").applyHatchActivityRecord(
            f.feed,
            r.record,
          ),
        });
      }
    }
    function F() {
      b ||
        ((b = !0),
        o("WAWebHatchVmConnection").subscribeToHatchVmAccountChange(O));
    }
    function O() {
      (I(),
        h++,
        (C = []),
        U({
          feed: o("WAWebHatchActivityFeed").HATCH_ACTIVITY_EMPTY_FEED,
          syncState: "idle",
        }),
        _ > 0 && k());
    }
    function B(e) {
      return e === o("WAWebHatchVmConnection").getHatchVmAccountGeneration();
    }
    function W(e) {
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
    function q(e, t) {
      return e.filter(function (e) {
        return e === t;
      }).length;
    }
    function U(e) {
      var t = babelHelpers.extends({}, f, e);
      if (!(t.feed === f.feed && t.syncState === f.syncState)) {
        f = t;
        for (var n of Array.from(v)) n.listener();
      }
    }
    ((l.retainHatchActivityStream = S),
      (l.refreshHatchActivity = R),
      (l.getHatchActivitySnapshot = L),
      (l.subscribeToHatchActivity = E));
  },
  98,
);
