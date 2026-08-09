__d(
  "MAWFetchDeanonMetadataUsingCache",
  [
    "I64",
    "MAWDeanonDataCheck",
    "MAWFetchEBDeanonMessagesMetadata",
    "MAWMessagesCompare",
    "MAWMessagesDirection",
    "MAWSubscribeToLSTruncateMetadataThreads",
    "WAJids",
    "WAResultOrError",
    "WATagsLogger",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS(["MAWFetchDeanonMetadataUsingCache"]),
      d = new Map(),
      m = r("justknobx")._("3763"),
      p = new Map(),
      _ = null;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatJid,
            n = e.db,
            r = e.direction,
            a = e.isFirstPage,
            i = e.logger,
            l = e.pageSize,
            u = e.range,
            d = e.sortFn;
          y(n);
          var m = h(t, r, i, u);
          if (
            m != null &&
            (i == null ||
              i.addQPLAnnotations({
                bool: { is_first_page: a },
                int: { deanon_cached_data_size: m == null ? void 0 : m.length },
              }),
            o("MAWDeanonDataCheck").hasEnoughDeanonData(m, l, a))
          )
            return (
              c.LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Using cached Deanon messages metadata for comparison to local data",
                  ])),
              ),
              i == null ||
                i.addQPLAnnotations({
                  bool: { is_deanon_cached_data_used: !0 },
                }),
              o("WAResultOrError").makeResult(m)
            );
          var p = yield o(
            "MAWFetchEBDeanonMessagesMetadata",
          ).fetchEBDeanonMessagesMetadata({
            chatJid: t,
            direction: r,
            includeReferenceTimestamp: !a,
            logger: i,
            range: u,
            sortFn: d,
          });
          return (
            p.success === !0 &&
              (i == null ||
                i.addQPLAnnotations({ bool: { is_deanon_data_fetched: !0 } }),
              b(t, r, i, p.value, u)),
            p
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      var a;
      (n == null || n.markQPLPoint("deanon_cache_fetch_start"), S(e, t));
      var i =
        (a = d.get(o("WAJids").threadIdForChatJid(e))) == null
          ? void 0
          : a.get(t);
      if (i == null) return null;
      var l = o("MAWMessagesDirection").getI64RangeTimestampForDirection(t, r),
        s =
          (u || (u = o("I64"))).ge(l, i.minTimestampMs) &&
          (u || (u = o("I64"))).le(l, i.maxTimestampMs);
      if (!s) return null;
      var c = o("MAWMessagesDirection").switchOnMWPMessagesDirection(t, {
          asc: i.msgsMetadata.findIndex(function (e) {
            return (u || (u = o("I64"))).ge(u.of_float(e.sortOrderMs), l);
          }),
          desc: i.msgsMetadata.findIndex(function (e) {
            return (u || (u = o("I64"))).le(u.of_float(e.sortOrderMs), l);
          }),
        }),
        m = i.msgsMetadata.slice(c);
      return (n == null || n.markQPLPoint("deanon_cache_fetch_end"), m);
    }
    function y(e) {
      _ == null &&
        (_ = o(
          "MAWSubscribeToLSTruncateMetadataThreads",
        ).subscribeToLSTruncateMetadataThreads(e, function (e, t) {
          var n = (u || (u = o("I64"))).to_string(e);
          (d.delete(n), p.delete(n));
        }));
    }
    function C(e, t, n, r) {
      var a,
        i = o("WAJids").threadIdForChatJid(e),
        l = (a = d.get(i)) != null ? a : new Map();
      (l.set(t, {
        maxTimestampMs: r.max,
        minTimestampMs: r.min,
        msgsMetadata: n,
      }),
        d.set(i, l));
    }
    function b(e, t, n, r, a) {
      if (r.length !== 0) {
        n == null || n.markQPLPoint("deanon_cache_replace_start");
        var i = (u || (u = o("I64"))).of_float(r[r.length - 1].sortOrderMs),
          l = o("MAWMessagesDirection").switchOnMWPMessagesDirection(t, {
            asc: { max: i, min: a.maxTimestampMs },
            desc: { max: a.minTimestampMs, min: i },
          });
        (C(e, t, r, l),
          n == null || n.markQPLPoint("deanon_cache_replace_end"));
      }
    }
    function v(e, t) {
      if (t.length !== 0) {
        for (
          var n = []
              .concat(t)
              .sort(
                o("MAWMessagesCompare").getSortComparisonFunctionForDirection(
                  "desc",
                ),
              ),
            r = 0,
            a = n.length - 1;
          r < a && n[r].sortOrderMs === n[r + 1].sortOrderMs;
        )
          r++;
        if (r !== a) {
          var i = (u || (u = o("I64"))).of_float(n[a].sortOrderMs);
          p.set(u.to_string(e), {
            insertTime: Date.now(),
            minTimestampMs: i,
            msgsMetadata: n.slice(r),
          });
        }
      }
    }
    function S(t, n) {
      var r = R(t, n);
      r != null &&
        (c.LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Using init-sync deanon data for ",
              "",
            ])),
          t,
        ),
        C(t, n, r.msgsMetadata, {
          max: (u || (u = o("I64"))).max_int,
          min: r.minTimestampMs,
        }),
        p.delete(o("WAJids").threadIdForChatJid(t)));
    }
    function R(e, t) {
      if (t === "desc") {
        var n = Date.now(),
          r = p.get(o("WAJids").threadIdForChatJid(e));
        if (!(r != null && n - r.insertTime > m)) return r;
      }
    }
    ((l.MAWFetchDeanonMetadataUsingCache = f),
      (l.fetchDeanonDataFromCache = h),
      (l.initDeanonCacheDescForThread = v));
  },
  98,
);
