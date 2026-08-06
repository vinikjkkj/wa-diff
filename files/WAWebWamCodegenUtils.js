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
      return e
        .replace(/([a-z]{2,})(\d)/g, "$1_$2")
        .replace(/([A-Z])/g, "_$1")
        .toLowerCase();
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
      m = new Map(),
      p = r("justknobx")._("1600");
    function _(e) {
      return m.get(e);
    }
    function f(t) {
      var n = t.id,
        a = t.name,
        i = t.privateStatsIdInt,
        l = t.props,
        _ = t.validators,
        f = t.wamChannel,
        g = t.weight,
        h = {
          id: n,
          weight: g,
          wamChannel: f,
          privateStatsIdInt: i,
          validators: _,
        },
        y = {},
        C = [],
        b = {},
        v = new Map();
      for (var S in l) {
        var R = l[S],
          L = c.define({ eventName: a, fieldName: S, id: R[0], type: R[1] });
        (v.set(R[0], L.name),
          (y[S] = L.validator),
          p && (b[S] = e(S)),
          R[1] === u.TIMER && C.push(S));
      }
      if (p) {
        var E = s(a);
        ((h.$falcoEventName = E),
          (h.$falcoFieldMap = b),
          m.set(n, { falcoEventName: E, falcoFieldMap: b, fieldIdToName: v }));
      }
      var k = o("WAWebWamTypeHash").defineTypeHash(
        a,
        y,
        o("WAWebWamCodegenWamEvent").WamEvent,
      );
      return (
        C.forEach(function (e) {
          ((h["mark" + r("WAUpperFirst")(e)] = function () {
            var t,
              n,
              r = this.eventTime,
              o = this.startMarkers;
            this[e] =
              Date.now() -
              ((t = (n = o[e]) == null ? void 0 : n.ts) != null ? t : r);
          }),
            (h["start" + r("WAUpperFirst")(e)] = function () {
              var t = Date.now();
              this.startMarkers[e] = { ts: t };
            }));
        }),
        p && (h.$rawProps = l),
        Object.assign(k.prototype, h),
        (d[a] = k),
        k
      );
    }
    function g(e, t) {
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
        return f({
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
    var h = (function (e) {
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
    function y(e) {
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
      var a = o("WAWebWamTypeHash").defineTypeHash("Global", t, h);
      return new a();
    }
    ((l.TYPES = u),
      (l.metrics = c),
      (l.events = d),
      (l.getFalcoMetadataForWamEventId = _),
      (l.defineEvents = g),
      (l.defineGlobal = y));
  },
  98,
);
