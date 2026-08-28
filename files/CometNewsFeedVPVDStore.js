__d(
  "CometNewsFeedVPVDStore",
  [
    "CircularBuffer",
    "CometNewsFeedVPVDStore_newsFeedEdge.graphql",
    "CometRelay",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useMemo,
      p = new Map();
    function _(e) {
      e === void 0 && (e = 0);
      var t = Array.from(p.entries()),
        n = 0,
        r,
        o,
        a = !1;
      if (
        (t.forEach(function (e, t) {
          ((!a && e[1].start >= n) || e[1].end == null) &&
            ((n = e[1].start), (o = t), (a = a || e[1].end == null));
        }),
        o == null)
      )
        return [];
      if (e > 0) r = Math.max(0, o - (e - 1));
      else {
        r = o;
        for (var i = o - 1; i >= 0 && t[i][1].end == null; i--) r = i;
      }
      return t.slice(r, o + 1).map(function (e) {
        return e[0];
      });
    }
    function f() {
      p.clear();
    }
    var g = function () {
        var e = new (r("CircularBuffer"))(50);
        return {
          readRecentVPVDs: function () {
            var t = e.read();
            return (e.clear(), t);
          },
          writeRecentVPVD: function (n, a, i) {
            var t,
              l,
              s,
              u,
              c,
              d,
              m = b(a),
              p = e.read().find(function (e) {
                var t,
                  n = e.vsid;
                return (
                  (m == null || (t = m.feed_backend_data) == null
                    ? void 0
                    : t.vsid) === n
                );
              });
            p ||
              (e.write({
                client_vpv_token: r("uuidv4")(),
                evt: "vpv",
                feed_backend_data_serialized_payloads:
                  m == null || (t = m.feed_backend_data) == null
                    ? void 0
                    : t.serialized_payloads,
                fetch_tracking:
                  m == null || (l = m.feed_backend_data) == null
                    ? void 0
                    : l.should_recent_vpv_fetch_tracking_data,
                original_qid:
                  m == null || (s = m.feed_backend_data) == null
                    ? void 0
                    : s.original_qid,
                qid:
                  m == null || (u = m.feed_backend_data) == null
                    ? void 0
                    : u.qid,
                timestamp: i,
                vsid:
                  m == null || (c = m.feed_backend_data) == null
                    ? void 0
                    : c.vsid,
                vspos:
                  m == null || (d = m.feed_backend_data) == null
                    ? void 0
                    : d.vspos,
              }),
              o("CometRelay").commitLocalUpdate(n, function (e) {
                var t = e.get(m.__id);
                t != null && t.setValue(!0, "has_been_seen");
              }));
          },
        };
      },
      h = u.createContext(),
      y = u.createContext([r("emptyFunction"), r("emptyFunction")]);
    function C(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.children,
        r = e.environment,
        a = e.newsFeedEdge,
        i = d(h),
        l;
      t[0] !== r || t[1] !== a || t[2] !== i
        ? ((l = function (t) {
            var e;
            i && i.writeRecentVPVD(r, a, t);
            var n = (e = b(a).feed_backend_data) == null ? void 0 : e.vsid;
            n != null && p.set(n, { end: null, start: Date.now() });
          }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l))
        : (l = t[3]);
      var s;
      t[4] !== a
        ? ((s = function (t) {
            var e,
              n,
              r,
              o = (e = b(a).feed_backend_data) == null ? void 0 : e.vsid;
            o != null &&
              p.set(o, {
                end: Date.now(),
                start:
                  (n = (r = p.get(o)) == null ? void 0 : r.start) != null
                    ? n
                    : Date.now(),
              });
          }),
          (t[4] = a),
          (t[5] = s))
        : (s = t[5]);
      var c;
      t[6] !== l || t[7] !== s
        ? ((c = [l, s]), (t[6] = l), (t[7] = s), (t[8] = c))
        : (c = t[8]);
      var m = c,
        _;
      return (
        t[9] !== n || t[10] !== m
          ? ((_ = u.jsx(y.Provider, { value: m, children: n })),
            (t[9] = n),
            (t[10] = m),
            (t[11] = _))
          : (_ = t[11]),
        _
      );
    }
    function b(t) {
      return o("CometRelay").readInlineData(
        e !== void 0
          ? e
          : (e = n("CometNewsFeedVPVDStore_newsFeedEdge.graphql")),
        t,
      );
    }
    ((l.readVisibleViewstateIDs = _),
      (l.resetVisibleViewstateIDs = f),
      (l.createStore = g),
      (l.StoreContext = h),
      (l.LoggerContext = y),
      (l.LoggerProvider = C));
  },
  98,
);
