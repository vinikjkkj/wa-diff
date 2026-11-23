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
      s = 6e4,
      u = 1e3;
    function c(e, t) {
      if (
        t !== e.version ||
        !o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).isProRecipientActivityReadAvailable(e.accountKey)
      )
        throw r("err")("Pro recipient activity request obsolete");
    }
    async function d(t, n, a) {
      try {
        return await o("WAPromiseTimeout").promiseTimeout(
          p(t, n, a),
          s,
          "[bb-pro] activity snapshot request timed out",
        );
      } catch (l) {
        var i = r("getErrorSafe")(l);
        throw (
          m(t, n) &&
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
    function m(e, t) {
      return (
        e.context === t &&
        o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).isProRecipientActivityReadAvailable(e.accountKey)
      );
    }
    async function p(e, t, n) {
      if (!m(e, t)) throw r("err")("Pro recipient activity request obsolete");
      var o = e.version,
        a = await _(e.candidateLids);
      if (!m(e, t)) throw r("err")("Pro recipient activity request obsolete");
      if (o !== e.version) {
        if (!e.keepLoading && e.listeners.size === 0)
          throw r("err")("Pro recipient activity request obsolete");
        return (await f(e), p(e, t, n));
      }
      if (a.error != null) throw a.error;
      return (
        n({ activity: a.activity, isLoading: !1, error: null }),
        a.activity
      );
    }
    async function _(e) {
      try {
        var t =
            e.length === 0
              ? []
              : await o(
                  "WAWebBizBroadcastProAudienceSegmentBridge",
                ).queryProAudienceActivityMetadata(e),
          n = new Map(
            t.map(function (e) {
              return [e.accountLid, e];
            }),
          ),
          a = e.map(function (e) {
            var t = n.get(e);
            if (t == null)
              throw r("err")("Pro recipient activity snapshot incomplete");
            return t;
          });
        return { activity: a, error: null };
      } catch (e) {
        return { activity: [], error: r("getErrorSafe")(e) };
      }
    }
    function f(e) {
      return new Promise(function (t) {
        var n = window.setTimeout(function () {
          ((e.timer = null), t());
        }, u);
        e.timer = { id: n, wake: t };
      });
    }
    ((l.assertProRecipientActivityResultCurrent = c),
      (l.runProRecipientActivityRequest = d));
  },
  98,
);
