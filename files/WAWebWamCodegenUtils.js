__d(
  "WAWebWamCodegenUtils",
  [
    "WAUpperFirst",
    "WAWebWamCodegenGlobalMetrics",
    "WAWebWamCodegenWamEvent",
    "WAWebWamInitQueue",
    "WAWebWamRuntimeProvider",
    "WAWebWamTypeHash",
    "err",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.replace(/([A-Z])/g, "_$1").toLowerCase();
    }
    function s(e) {
      var t = e
        .replace(/([A-Z])/g, "_$1")
        .toLowerCase()
        .replace(/^_/, "");
      return "wam_" + t;
    }
    var u = Object.freeze({
        BOOLEAN: "boolean",
        INTEGER: "integer",
        NUMBER: "number",
        STRING: "string",
        TIMER: "timer",
      }),
      c = new (o("WAWebWamCodegenGlobalMetrics").Metrics)(),
      d = {},
      m = r("justknobx")._("1600");
    function p(t) {
      var n = t.id,
        a = t.name,
        i = t.privateStatsIdInt,
        l = t.props,
        p = t.validators,
        _ = t.wamChannel,
        f = t.weight,
        g = {
          id: n,
          weight: f,
          wamChannel: _,
          privateStatsIdInt: i,
          validators: p,
        },
        h = {},
        y = [],
        C = {};
      for (var b in l) {
        var v = l[b],
          S = c.define(a, b, v[0], v[1]);
        ((h[b] = S.validator),
          m && (C[b] = e(b)),
          v[1] === u.TIMER && y.push(b));
      }
      m && ((g.$falcoEventName = s(a)), (g.$falcoFieldMap = C));
      var R = o("WAWebWamTypeHash").defineTypeHash(
        a,
        h,
        o("WAWebWamCodegenWamEvent").WamEvent,
      );
      return (
        y.forEach(function (e) {
          ((g["mark" + r("WAUpperFirst")(e)] = function () {
            var t,
              n,
              r = this.eventTime,
              o = this.startMarkers;
            this[e] =
              Date.now() -
              ((t = (n = o[e]) == null ? void 0 : n.ts) != null ? t : r);
          }),
            (g["start" + r("WAUpperFirst")(e)] = function () {
              var t = Date.now();
              this.startMarkers[e] = { ts: t };
            }));
        }),
        m && (g.$rawProps = l),
        Object.assign(R.prototype, g),
        (d[a] = R),
        R
      );
    }
    function _(e, t) {
      t === void 0 && (t = {});
      for (var n in e) {
        var o,
          a,
          i = e[n],
          l = i[2],
          s = 1;
        (r("gkx")("26259") && (s = l[1]), r("gkx")("26258") && (s = l[2]));
        var u = (o = i[3]) != null ? o : "regular",
          c = i.length === 5 ? i[4] : -1;
        return p({
          name: n,
          id: i[0],
          props: i[1],
          weight: s,
          wamChannel: u,
          privateStatsIdInt: c,
          validators: (a = t[n]) != null ? a : [],
        });
      }
      throw r("err")("defineEvent: empty definition");
    }
    var f = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.commitOnSet = !0),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebWamTypeHash").TypeHash);
    function g(e) {
      var t = {},
        n = function () {
          var n = e[r],
            a = n[0],
            i = n[1],
            l = n[2],
            s = l === void 0 ? ["regular"] : l,
            u = c.defineGlobal(r, a, i, s);
          t[r] = {
            type: u.validator,
            set: function (t) {
              if (this.commitOnSet) {
                var e = o("WAWebWamRuntimeProvider").getWamRuntime();
                e ? e.set(u, t) : o("WAWebWamInitQueue").queueMetric(u, t);
              }
            },
          };
        };
      for (var r in e) n();
      var a = o("WAWebWamTypeHash").defineTypeHash("Global", t, f);
      return new a();
    }
    ((l.TYPES = u),
      (l.metrics = c),
      (l.events = d),
      (l.defineEvents = _),
      (l.defineGlobal = g));
  },
  98,
);
