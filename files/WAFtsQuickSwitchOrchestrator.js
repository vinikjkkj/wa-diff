__d(
  "WAFtsQuickSwitchOrchestrator",
  [
    "Promise",
    "WAFtsBaseOrchestrator",
    "WAFtsSearchResultComparator",
    "WANullthrows",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        return { eof: !0, messages: [], status: 200 };
      };
    function u(e, t) {
      return function (n) {
        return e
          .getMessageSource()
          .removeFromBacklog(n)
          .then(function () {
            if (t) return t(n);
          });
      };
    }
    var c = (function (t) {
      function o() {
        return t.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(o, t);
      var a = o.prototype;
      return (
        (a.purge = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var r,
              o,
              a = yield (e || (e = n("Promise"))).all([
                this.__getIndexer(!0),
                this.__getIndexer(!1),
              ]),
              i = a[0],
              l = a[1];
            return e
              .all([
                (r = i == null ? void 0 : i.purge(t)) != null ? r : !1,
                (o = l == null ? void 0 : l.purge(t)) != null ? o : !0,
              ])
              .then(function (e) {
                var t = e[0],
                  n = e[1];
                return !!t && n;
              });
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (a.purge__DEPRECATED_DO_NOT_USE = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, r, o) {
              var a,
                i,
                l = yield (e || (e = n("Promise"))).all([
                  this.__getIndexer(!0),
                  this.__getIndexer(!1),
                ]),
                s = l[0],
                u = l[1];
              return e
                .all([
                  (a =
                    s == null
                      ? void 0
                      : s.purge__DEPRECATED_DO_NOT_USE(t, r, o)) != null
                    ? a
                    : !1,
                  (i =
                    u == null
                      ? void 0
                      : u.purge__DEPRECATED_DO_NOT_USE(t, r, o)) != null
                    ? i
                    : !0,
                ])
                .then(function (e) {
                  var t = e[0],
                    n = e[1];
                  return !!t && n;
                });
            },
          );
          function r(e, n, r) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (a.purgeChat = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var r,
              o,
              a = yield (e || (e = n("Promise"))).all([
                this.__getIndexer(!0),
                this.__getIndexer(!1),
              ]),
              i = a[0],
              l = a[1];
            return e
              .all([
                (r = i == null ? void 0 : i.purgeChat(t)) != null ? r : !1,
                (o = l == null ? void 0 : l.purgeChat(t)) != null ? o : !0,
              ])
              .then(function (e) {
                var t = e[0],
                  n = e[1];
                return !!t && n;
              });
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (a.search = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, o) {
              var a,
                i,
                l = yield (e || (e = n("Promise"))).all([
                  this.__getIndexer(!0),
                  this.__getIndexer(!1),
                ]),
                u = l[0],
                c = l[1],
                d = yield e.all([
                  (a = u == null ? void 0 : u.search(t, o)) != null ? a : s(),
                  (i = c == null ? void 0 : c.search(t, o)) != null ? i : s(),
                ]),
                m = d[0],
                p = d[1],
                _ = [].concat(m.messages, p.messages),
                f = new Set();
              if (_.length > 0) {
                var g = [];
                _.forEach(function (e) {
                  var t = e.chatId,
                    n = e.id,
                    r = n + "," + t;
                  f.has(r) || (g.push(e), f.add(r));
                });
                var h = g.sort(r("WAFtsSearchResultComparator"));
                return { eof: m.eof && p.eof, messages: h, status: 200 };
              }
              return s();
            },
          );
          function o(e, n) {
            return t.apply(this, arguments);
          }
          return o;
        })()),
        (a.incremental = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, o) {
              var a = yield (e || (e = n("Promise"))).all([
                  this.__getIndexer(!0),
                  this.__getIndexer(!1),
                ]),
                i = a[0],
                l = a[1],
                s = r("WANullthrows")(l != null ? l : i),
                c = u(s, t);
              return s.incremental(c, o);
            },
          );
          function o(e, n) {
            return t.apply(this, arguments);
          }
          return o;
        })()),
        (a.full = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield this.__initVersions();
              return n.next != null
                ? this.__startFullIndexingForVersion(n.next, e)
                : this.__startFullIndexingForVersion(n.current, e);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        o
      );
    })(r("WAFtsBaseOrchestrator"));
    l.default = c;
  },
  98,
);
