__d(
  "LSRelaySharedServerRequests",
  ["err", "nullthrows", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return { entries: new Map(), providerValues: new Map() };
    }
    function s(e, t, n, r) {
      return (
        t == null &&
        n == null &&
        r == null &&
        e.poll == null &&
        e.liveConfigId == null &&
        e.onSubscribe == null &&
        e.onPause == null &&
        e.onResume == null &&
        e.metadata == null &&
        e.transactionId == null
      );
    }
    function u(e, t, n, r, a, i, l) {
      var u = t.metadata,
        d = u.server_variables;
      if (
        !Array.isArray(d) ||
        t.operationKind !== "query" ||
        u.live != null ||
        !s(r, a, i, l)
      )
        return null;
      for (var m = t.providedVariables, p = {}, _ = 0; _ < d.length; _++) {
        var f = d[_];
        if (typeof f == "string") {
          var g = m == null ? void 0 : m[f];
          p[f] = g == null ? n[f] : c(e, g.get);
        }
      }
      var h = o("relay-runtime").getRequestIdentifier(t, p);
      return r.force === !0 ? "force:" + h : h;
    }
    function c(e, t) {
      var n = e.providerValues;
      return (n.has(t) || n.set(t, t()), n.get(t));
    }
    function d(e, t, n, r) {
      return {
        entry: null,
        isHolder: !1,
        isPreloaded: r,
        key: t,
        requests: e,
        source: n,
      };
    }
    function m(e) {
      return o("relay-runtime").Observable.create(function (t) {
        if (e.entry != null)
          throw r("err")(
            "observeServerRequestShare: Expected a share to be subscribed at most once.",
          );
        var n = e.requests.entries,
          a = n.get(e.key),
          i =
            a != null
              ? a
              : {
                  holders: 0,
                  key: e.key,
                  requests: e.requests,
                  subject: new (o("relay-runtime").ReplaySubject)(),
                  subscription: null,
                };
        if (
          (a == null && n.set(e.key, i),
          (e.entry = i),
          (e.isHolder = !0),
          i.holders++,
          a != null && e.isPreloaded)
        )
          return e.source.subscribe(t);
        var l = i.subject.subscribe(t);
        return (
          a == null && f(i, e.source),
          function () {
            (l.unsubscribe(), g(i));
          }
        );
      });
    }
    function p(e) {
      if (e.isHolder) {
        e.isHolder = !1;
        var t = r("nullthrows")(e.entry);
        (t.holders--, h(t));
      }
    }
    function _(e) {
      if (e.isHolder) {
        e.isHolder = !1;
        var t = r("nullthrows")(e.entry);
        (t.holders--, t.holders === 0 && h(t));
      }
    }
    function f(e, t) {
      t.subscribe({
        complete: function () {
          ((e.subscription = null), e.subject.complete());
        },
        error: function (n) {
          ((e.subscription = null), h(e), e.subject.error(n));
        },
        next: function (n) {
          e.subject.next(n);
        },
        start: function (n) {
          e.subscription = n;
        },
      });
    }
    function g(e) {
      var t = e.subscription;
      t == null ||
        e.subject.getObserverCount() > 0 ||
        ((e.subscription = null), h(e), t.unsubscribe());
    }
    function h(e) {
      var t = e.requests.entries;
      t.get(e.key) === e && t.delete(e.key);
    }
    ((l.createSharedServerRequests = e),
      (l.canShareResponse = s),
      (l.getServerRequestKey = u),
      (l.createServerRequestShare = d),
      (l.observeServerRequestShare = m),
      (l.markServerResponseEmitted = p),
      (l.releaseServerRequestShare = _));
  },
  98,
);
