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
      p = new Map();
    function _(e) {
      return p.get(e);
    }
    var f = r("justknobx")._("1600");
    function g(e) {
      return m.get(e);
    }
    function h(t) {
      var n = t.id,
        a = t.name,
        i = t.privateStatsIdInt,
        l = t.props,
        _ = t.validators,
        g = t.wamChannel,
        h = t.weight,
        y = {
          id: n,
          weight: h,
          wamChannel: g,
          privateStatsIdInt: i,
          validators: _,
        },
        C = {},
        b = [],
        v = {},
        S = new Map();
      for (var R in l) {
        var L = l[R],
          E = c.define({ eventName: a, fieldName: R, id: L[0], type: L[1] });
        (S.set(L[0], E.name),
          (C[R] = E.validator),
          f && (v[R] = e(R)),
          L[1] === u.TIMER && b.push(R));
      }
      if (f) {
        var k = s(a);
        ((y.$falcoEventName = k),
          (y.$falcoFieldMap = v),
          m.set(n, { falcoEventName: k, falcoFieldMap: v, fieldIdToName: S }));
      }
      var I = l.dedupKey;
      I != null && p.set(n, I[0]);
      var T = o("WAWebWamTypeHash").defineTypeHash(
        a,
        C,
        o("WAWebWamCodegenWamEvent").WamEvent,
      );
      return (
        b.forEach(function (e) {
          ((y["mark" + r("WAUpperFirst")(e)] = function () {
            var t,
              n,
              r = this.eventTime,
              o = this.startMarkers;
            this[e] =
              Date.now() -
              ((t = (n = o[e]) == null ? void 0 : n.ts) != null ? t : r);
          }),
            (y["start" + r("WAUpperFirst")(e)] = function () {
              var t = Date.now();
              this.startMarkers[e] = { ts: t };
            }));
        }),
        f && (y.$rawProps = l),
        Object.assign(T.prototype, y),
        (d[a] = T),
        T
      );
    }
    function y(e, t) {
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
        return h({
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
    var C = (function (e) {
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
    function b(e) {
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
      var a = o("WAWebWamTypeHash").defineTypeHash("Global", t, C);
      return new a();
    }
    ((l.TYPES = u),
      (l.metrics = c),
      (l.events = d),
      (l.getWamDedupKeyFieldId = _),
      (l.getFalcoMetadataForWamEventId = g),
      (l.defineEvents = y),
      (l.defineGlobal = b));
  },
  98,
);
