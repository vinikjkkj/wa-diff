__d(
  "AdsDML",
  [
    "AdsDMLQueryBuilder",
    "AdsDMLQueryHandler_DerivedData",
    "AdsDMLUtils",
    "FBLogger",
    "err",
    "relay-runtime",
    "useDMLFragment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    "use no memo";
    function e() {}
    var s = (function (t) {
      function n() {
        return t.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(n, t);
      var r = n.prototype;
      return (
        (r.Derived = function (r) {
          var t;
          return new n(
            new (o("AdsDMLQueryHandler_DerivedData").DerivedQueryHandler)(
              e,
              r,
              (t = this.__metadata) == null ? void 0 : t.name,
            ),
            this,
          );
        }),
        n
      );
    })(o("AdsDMLQueryBuilder").TQueryBuilder);
    function u(e) {
      return new s(
        {
          load: function (t) {
            t.isLoading = !1;
          },
        },
        null,
        e,
      );
    }
    function c(e, t, n) {
      return e.fetchQueryFragments(t, n);
    }
    function d(e, t) {
      return {
        read: function () {
          var n,
            a = c(e, t);
          switch (a.status) {
            case "loaded":
              return a.data;
            case "loading":
              return o("relay-runtime").suspenseSentinel();
            case "error":
              throw a.error;
            case "pending":
              return (
                r("FBLogger")("dml").info(
                  "[DML] Pending status with fragment %s",
                  (n = e.__metadata) == null ? void 0 : n.name,
                ),
                o("relay-runtime").suspenseSentinel()
              );
            default:
              throw (a.status, r("err")("exhaustive switch case"));
          }
        },
        subscribe: function (r) {
          var n = r,
            o = function () {
              return n == null ? void 0 : n();
            };
          return (
            (o.isRevoked = !1),
            (o.revoke = function () {
              ((o.isRevoked = !0), (n = null));
            }),
            c(e, t, o),
            o.revoke
          );
        },
      };
    }
    function m(e, t) {
      var n = c(e, t);
      if (n.status === "loaded") return n.data;
      throw n.status === "error" ? n.error : e.getPromise(t);
    }
    function p(e, t) {
      return (f(e, t), m(e, t));
    }
    function _(e, t, n) {
      return p(o("AdsDMLUtils").selectorToQuery(e, n), t);
    }
    function f(e, t) {
      return r("useDMLFragment")(e, t);
    }
    ((l.TQueryMaker = s),
      (l.Query = u),
      (l.fetchQuery = c),
      (l.subscribeQueryLive = d),
      (l.useSuspensefulDMLFragment = p),
      (l.useSuspensefulSelector = _),
      (l.useDMLFragment = f));
  },
  98,
);
