__d(
  "WAWebStatusSwPrefetchHandler",
  ["WAWebSWBusActions", "WAWebSwFeature", "WAWebSwVideoStreamer", "err"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.$StatusSwPrefetchHandler$p_1 = new Map()),
          (t.matchAction = function (e) {
            return (
              e === r("WAWebSWBusActions").STATUS_VIDEO_PREFETCH ||
              e === r("WAWebSWBusActions").STATUS_VIDEO_PREFETCH_CANCEL
            );
          }),
          (t.onAction = async function (e, n) {
            var a = s(n);
            if (a == null)
              return Promise.reject(
                r("err")("Invalid status video prefetch message"),
              );
            var i = a.clientUrl;
            if (e === r("WAWebSWBusActions").STATUS_VIDEO_PREFETCH_CANCEL) {
              t.$StatusSwPrefetchHandler$p_1.forEach(function (e, t) {
                e === i && t.abort();
              });
              return;
            }
            var l = o("WAWebSwVideoStreamer").computeServerRange(0, null),
              u = l.serverRangeEnd,
              c = l.serverRangeStart,
              d = new Request(i);
            await t.$StatusSwPrefetchHandler$p_2(
              i,
              o("WAWebSwVideoStreamer").createServerRequest(d, c, u, i),
            );
          }),
          (t.$StatusSwPrefetchHandler$p_2 = async function (e, n) {
            var r = new AbortController();
            t.$StatusSwPrefetchHandler$p_1.set(r, e);
            try {
              var o = await self.fetch(n, { signal: r.signal });
              await o.arrayBuffer();
            } catch (e) {
              if (!r.signal.aborted) throw e;
            } finally {
              t.$StatusSwPrefetchHandler$p_1.delete(r);
            }
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebSwFeature").SWFeature);
    function s(e) {
      if (e != null && typeof e == "object") {
        var t = e.clientUrl;
        if (typeof t == "string") return { clientUrl: t };
      }
      return null;
    }
    l.default = e;
  },
  98,
);
