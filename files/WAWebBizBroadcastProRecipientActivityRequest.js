__d(
  "WAWebBizBroadcastProRecipientActivityRequest",
  [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBizBroadcastProAudienceSegmentBridge",
    "WAWebBizBroadcastProRecipientActivityEvents",
    "asyncToGeneratorRuntime",
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
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          try {
            return yield o("WAPromiseTimeout").promiseTimeout(
              f(t, n, a),
              u,
              "[bb-pro] activity snapshot request timed out",
            );
          } catch (l) {
            var i = r("getErrorSafe")(l);
            throw (
              _(t, n) &&
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return (
        e.context === t &&
        o(
          "WAWebBizBroadcastProRecipientActivityEvents",
        ).isProRecipientActivityReadAvailable(e.accountKey)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!_(e, t))
            throw r("err")("Pro recipient activity request obsolete");
          var o = e.version,
            a = yield h(e.candidateLids);
          if (!_(e, t))
            throw r("err")("Pro recipient activity request obsolete");
          if (o !== e.version) {
            if (!e.keepLoading && e.listeners.size === 0)
              throw r("err")("Pro recipient activity request obsolete");
            return (yield C(e), f(e, t, n));
          }
          if (a.error != null) throw a.error;
          return (
            n({ activity: a.activity, isLoading: !1, error: null }),
            a.activity
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t =
                e.length === 0
                  ? []
                  : yield o(
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
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return new (s || (s = n("Promise")))(function (t) {
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
