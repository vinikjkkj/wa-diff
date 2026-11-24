__d(
  "WAWebBizBroadcastProRecipientActivityRequest",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBizBroadcastProAudienceSegmentBridge",
    "WAWebBizBroadcastProRecipientActivityEvents",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 6e4,
      c = 1e3;
    function d(e, t) {
      if (
        t !== e.version ||
        !o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).isProRecipientActivityReadAvailable(e.accountKey)
      )
        throw r("err")("Pro recipient activity request obsolete");
    }
    async function m(t, n, a) {
      try {
        return await o("WAPromiseTimeout").promiseTimeout(
          _(t, n, a),
          u,
          "[bb-pro] activity snapshot request timed out",
        );
      } catch (l) {
        var i = r("getErrorSafe")(l);
        throw (
          p(t, n) &&
            ((t.context = null),
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to query Pro recipient activity",
                  ])),
              )
              .catching(i)
              .sendLogs("bb-pro-recipient-activity-query-failed"),
            a({ activity: [], isLoading: !1, error: i })),
          i
        );
      }
    }
    function p(e, t) {
      return (
        e.context === t &&
        o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).isProRecipientActivityReadAvailable(e.accountKey)
      );
    }
    async function _(e, t, n) {
      if (!p(e, t)) throw r("err")("Pro recipient activity request obsolete");
      var o = e.version,
        a = await f(e, t, o);
      if (!p(e, t)) throw r("err")("Pro recipient activity request obsolete");
      if (o !== e.version) {
        if (!e.keepLoading && e.listeners.size === 0)
          throw r("err")("Pro recipient activity request obsolete");
        return (await g(e), _(e, t, n));
      }
      if (a.error != null) throw a.error;
      return (
        n({ activity: a.activity, isLoading: !1, error: null }),
        a.activity
      );
    }
    async function f(e, t, n) {
      var a = e.candidateLids;
      try {
        var i =
            a.length === 0
              ? []
              : await o(
                  "WAWebBizBroadcastProAudienceSegmentBridge",
                ).queryProAudienceActivityMetadata(a),
          l = new Map(
            i.map(function (e) {
              return [e.accountLid, e];
            }),
          ),
          u = a.filter(function (e) {
            return !l.has(e);
          });
        if (u.length > 0 && p(e, t) && n === e.version) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Retrying missing Pro recipient activity rows",
                ])),
            )
            .sendLogs("bb-pro-recipient-activity-snapshot-incomplete");
          var c = await o(
              "WAWebBizBroadcastProAudienceSegmentBridge",
            ).queryProAudienceActivityMetadata(u),
            d = new Set(u);
          for (var m of c) d.has(m.accountLid) && l.set(m.accountLid, m);
        }
        var _ = a.map(function (e) {
          var t = l.get(e);
          if (t == null)
            throw r("err")("Pro recipient activity snapshot incomplete");
          return t;
        });
        return { activity: _, error: null };
      } catch (e) {
        return { activity: [], error: r("getErrorSafe")(e) };
      }
    }
    function g(e) {
      return new Promise(function (t) {
        var n = window.setTimeout(function () {
          ((e.timer = null), t());
        }, c);
        e.timer = { id: n, wake: t };
      });
    }
    ((l.assertProRecipientActivityResultCurrent = d),
      (l.runProRecipientActivityRequest = m));
  },
  98,
);
