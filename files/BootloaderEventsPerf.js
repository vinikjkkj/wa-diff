__d(
  "BootloaderEventsPerf",
  [
    "invariant",
    "Bootloader",
    "BootloaderEvents",
    "ResourceTimingStore",
    "objectEntries",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["durations", "resources", "start_time"],
      u = {
        total_count: 0,
        total_bytes: 0,
        downloaded_count: 0,
        downloaded_bytes: 0,
        cached_count: 0,
        cached_bytes: 0,
        inlined_count: 0,
        inlined_bytes: 0,
        duration: 0,
        missing_count: 0,
      };
    function c(e, t, n) {
      return Math.max(0, (n != null ? n : 0) - Math.max(e, t != null ? t : 0));
    }
    function d() {
      return {
        blocking: babelHelpers.extends({}, u),
        nonblocking: babelHelpers.extends({}, u),
        default: babelHelpers.extends({}, u),
      };
    }
    function m(e, t, n) {
      var r, a;
      if (n == null) ((r = 0), (a = "downloaded"));
      else if (n[1]) ((r = n[0].length), (a = "inlined"));
      else {
        var i = o("ResourceTimingStore").getEntryForURL(n[0]);
        i
          ? ((r = i.encodedBodySize),
            (a = i.transferSize === 0 ? "cached" : "downloaded"))
          : ((r = 0), (a = "downloaded"), e.missing_count++);
      }
      if ((e.total_count++, (e.total_bytes += r), !!t))
        switch (((e.duration = Math.max(e.duration, t)), a)) {
          case "downloaded":
            (e.downloaded_count++, (e.downloaded_bytes += r));
            break;
          case "inlined":
            (e.inlined_count++, (e.inlined_bytes += r));
            break;
          case "cached":
            (e.cached_count++, (e.cached_bytes += r));
            break;
        }
    }
    function p(e, t, n, o, a) {
      var i = r("Bootloader").getResourceState(t);
      (m(e, c(n, i.loadStart, i.loadEnd), o), i.loadError != null && a.add(t));
    }
    function _(e, t, n, o) {
      var a = d();
      for (var i of r("objectEntries")(e)) {
        var l = i[0],
          u = i[1];
        for (var c of u) {
          var m = c[0],
            _ = c[1],
            f = void 0,
            g = void 0;
          switch (_.type) {
            case "async":
              ((g = null), (f = n));
              break;
            case "js":
            case "css":
              ((g = [_.src, _.d === 1]), (f = a));
              break;
            default:
              s(0, 3721);
          }
          p(f[l], m, t, g, o);
        }
      }
      return a;
    }
    function f(e, t) {
      var n = {
        unpredicted: o("BootloaderEvents").newResourceMapSet(),
        ef: o("BootloaderEvents").newResourceMapSet(),
        overpredicted: o("BootloaderEvents").newResourceMapSet(),
      };
      for (var a of r("objectEntries")(t)) {
        var i = a[0],
          l = a[1];
        for (var s of l.entries()) {
          var u = s[0],
            c = s[1];
          e[i].has(u) ? n.ef[i].set(u, c) : n.overpredicted[i].set(u, c);
        }
      }
      for (var d of r("objectEntries")(e)) {
        var m = d[0],
          p = d[1];
        for (var _ of p.entries()) {
          var f = _[0],
            g = _[1];
          t[m].has(f) || n.unpredicted[m].set(f, g);
        }
      }
      return n;
    }
    function g(e) {
      var t,
        n = e.efData,
        r = e.rsrcs,
        o = e.startTime,
        a = new Set(),
        i,
        l,
        s;
      if (n) {
        var u = f(r, n.tierOne);
        ((s = u.unpredicted),
          (i = {
            ef: _(u.ef, n.fetchRsrcsStart, d(), a),
            overpredicted: _(u.overpredicted, n.fetchRsrcsStart, d(), a),
          }),
          (l = {
            ef_fetch_predictions:
              n.fetchPredictionsEnd - n.fetchPredictionsStart,
            ef_fetch_start_wait: n.fetchPredictionsEnd - n.fetchRsrcsStart,
            ef_head_start: o - n.fetchRsrcsStart,
          }));
      } else ((s = r), (i = {}), (l = {}));
      var c = babelHelpers.extends({ unpredicted: _(s, o, d(), a) }, i);
      return {
        source: e.source,
        source_detail: e.sourceDetail,
        is_first_identical: e.isFirstIdentical,
        timeslice_context: (t = e.timesliceContext) == null ? void 0 : t.name,
        start_time: o,
        err_count: a.size,
        resources: c,
        durations: babelHelpers.extends(
          {
            jsmods_wait: e.jsmodsStart - o,
            jsmods: e.jsmodsEnd - e.jsmodsStart,
            jsmods_done_wait: e.jsmodsEnd - o,
            download_done_wait: e.logTime - o,
          },
          l,
        ),
        payloadStats: e.payloadStats,
      };
    }
    function h(e) {
      var t,
        n = e.startTime,
        a = 0,
        i = 0,
        l = 0,
        s = 0;
      for (var u of e.components) {
        var p = r("Bootloader").getComponentTiming(u),
          f = p.tierThreeEnd,
          g = p.tierThreeStart,
          h = p.tierTwoEnd,
          y = p.tierTwoStart;
        ((a = Math.max(a, c(n, y, h))),
          (i = Math.max(i, c(n, n, h))),
          (l = Math.max(l, c(n, g, f))),
          (s = Math.max(s, c(n, n, f))));
      }
      var C = new Set(),
        b = d(),
        v = _(e.tierOne, n, b, C),
        S = _(e.tierTwo, n, b, C),
        R = _(e.tierThree, n, b, C),
        L = b.blocking.downloaded_count != 0,
        E = d(),
        k = o("BootloaderEvents").newResourceMapSet(),
        I = new Set();
      for (var T of [e.tierOne, e.tierTwo, e.tierThree])
        for (var D of r("objectValues")(T)) for (var x of D.keys()) I.add(x);
      var $ = 0,
        P = 0,
        N = 0;
      for (var M of e.beRequests.values()) {
        (($ += c(n, n, M.requestStart)),
          (P += M.serverGenTime),
          (N += M.jsmodsEnd - M.jsmodsStart),
          m(
            E[L ? "blocking" : "nonblocking"],
            M.responseStart - M.requestStart,
            [M.uri, !1],
          ));
        for (var w of r("objectEntries")(M.rsrcs)) {
          var A = w[0],
            F = w[1];
          for (var O of F) {
            var B = O[0],
              W = O[1];
            I.has(B) || k[A].set(B, W);
          }
        }
      }
      var q = _(k, n, b, C);
      return {
        ref: e.ref,
        components: e.components,
        timeslice_context: (t = e.timesliceContext) == null ? void 0 : t.name,
        start_time: n,
        err_count: C.size,
        resources: { t1: v, t2: S, t3: R, be: E, unpredicted: q, async: b },
        durations: {
          fetch_start_wait: e.fetchStartTime - n,
          be_start_wait: $,
          be_server_gen: P,
          be_jsmods: N,
          callback_wait: e.callbackStart - n,
          callback: e.callbackEnd - e.callbackStart,
          bootload_done_wait: e.callbackEnd - n,
          rdfd_requirelazy: a,
          rdfd_done_wait: i,
          rd_requirelazy: l,
          rd_done_wait: s,
        },
      };
    }
    function y(t) {
      var n = t.durations,
        o = t.resources,
        a = t.start_time,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e);
      for (var l of r("objectEntries")(o)) {
        var s = l[0],
          u = l[1];
        for (var c of r("objectEntries")(u)) {
          var d = c[0],
            m = c[1];
          for (var p of r("objectEntries")(m)) {
            var _ = p[0],
              f = p[1];
            i[s + "_" + d + "_resources_" + _] = Math.round(Number(f));
          }
        }
      }
      for (var g of r("objectEntries")(n)) {
        var h = g[0],
          y = g[1];
        i[h + "_duration"] = Math.round(Number(y));
      }
      if (i.payloadStats) {
        for (var C of r("objectEntries")(i.payloadStats)) {
          var b = C[0],
            v = C[1];
          for (var S of r("objectEntries")(v)) {
            var R = S[0],
              L = S[1];
            i[b + "_" + R + "_count"] = Math.round(Number(L));
          }
        }
        delete i.payloadStats;
      }
      return i;
    }
    ((l.computeHRData = g), (l.computeBLData = h), (l.flattenData = y));
  },
  98,
);
