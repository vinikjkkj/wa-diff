__d(
  "WAFtsQuickSwitchOrchestrator",
  ["WAFtsBaseOrchestrator", "WAFtsSearchResultComparator", "WANullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return { eof: !0, messages: [], status: 200 };
    };
    function s(e, t) {
      return function (n) {
        return e
          .getMessageSource()
          .removeFromBacklog(n)
          .then(function () {
            if (t) return t(n);
          });
      };
    }
    var u = (function (t) {
      function n() {
        return t.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(n, t);
      var o = n.prototype;
      return (
        (o.purge = async function (t) {
          var e,
            n,
            r = await Promise.all([
              this.__getIndexer(!0),
              this.__getIndexer(!1),
            ]),
            o = r[0],
            a = r[1];
          return Promise.all([
            (e = o == null ? void 0 : o.purge(t)) != null ? e : !1,
            (n = a == null ? void 0 : a.purge(t)) != null ? n : !0,
          ]).then(function (e) {
            var t = e[0],
              n = e[1];
            return !!t && n;
          });
        }),
        (o.purge__DEPRECATED_DO_NOT_USE = async function (t, n, r) {
          var e,
            o,
            a = await Promise.all([
              this.__getIndexer(!0),
              this.__getIndexer(!1),
            ]),
            i = a[0],
            l = a[1];
          return Promise.all([
            (e =
              i == null ? void 0 : i.purge__DEPRECATED_DO_NOT_USE(t, n, r)) !=
            null
              ? e
              : !1,
            (o =
              l == null ? void 0 : l.purge__DEPRECATED_DO_NOT_USE(t, n, r)) !=
            null
              ? o
              : !0,
          ]).then(function (e) {
            var t = e[0],
              n = e[1];
            return !!t && n;
          });
        }),
        (o.purgeChat = async function (t) {
          var e,
            n,
            r = await Promise.all([
              this.__getIndexer(!0),
              this.__getIndexer(!1),
            ]),
            o = r[0],
            a = r[1];
          return Promise.all([
            (e = o == null ? void 0 : o.purgeChat(t)) != null ? e : !1,
            (n = a == null ? void 0 : a.purgeChat(t)) != null ? n : !0,
          ]).then(function (e) {
            var t = e[0],
              n = e[1];
            return !!t && n;
          });
        }),
        (o.search = async function (n, o) {
          var t,
            a,
            i = await Promise.all([
              this.__getIndexer(!0),
              this.__getIndexer(!1),
            ]),
            l = i[0],
            s = i[1],
            u = await Promise.all([
              (t = l == null ? void 0 : l.search(n, o)) != null ? t : e(),
              (a = s == null ? void 0 : s.search(n, o)) != null ? a : e(),
            ]),
            c = u[0],
            d = u[1],
            m = [].concat(c.messages, d.messages),
            p = new Set();
          if (m.length > 0) {
            var _ = [];
            m.forEach(function (e) {
              var t = e.chatId,
                n = e.id,
                r = n + "," + t;
              p.has(r) || (_.push(e), p.add(r));
            });
            var f = _.sort(r("WAFtsSearchResultComparator"));
            return { eof: c.eof && d.eof, messages: f, status: 200 };
          }
          return e();
        }),
        (o.incremental = async function (t, n) {
          var e = await Promise.all([
              this.__getIndexer(!0),
              this.__getIndexer(!1),
            ]),
            o = e[0],
            a = e[1],
            i = r("WANullthrows")(a != null ? a : o),
            l = s(i, t);
          return i.incremental(l, n);
        }),
        (o.full = async function (t, n) {
          var e = await this.__initVersions();
          return e.next != null
            ? this.__startFullIndexingForVersion(e.next, t)
            : this.__startFullIndexingForVersion(e.current, t);
        }),
        n
      );
    })(r("WAFtsBaseOrchestrator"));
    l.default = u;
  },
  98,
);
