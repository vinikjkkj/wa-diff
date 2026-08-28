__d(
  "SearchSourceCallbackManager",
  ["invariant", "SearchSourceQueryStatus", "createObjectFrom", "nullthrows"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
      function e(e) {
        ((this.$9 = e.parseFn),
          typeof this.$9 == "function" || s(0, 4065),
          (this.$8 = e.matchFn),
          typeof this.$8 == "function" || s(0, 4066),
          (this.$2 = e.alwaysPrefixMatch || !1),
          (this.$6 = e.indexFn || u),
          (this.$4 = e.exclusions || {}),
          this.reset());
      }
      var t = e.prototype;
      return (
        (t.search = function (t, n) {
          var e = this.$13(t, n);
          if (e) return 0;
          this.$1.push({ queryString: t, callback: n });
          var r = this.$1.length - 1;
          return (this.$10.push(r), r);
        }),
        (t.$13 = function (t, n) {
          var e = this,
            r = this.$14(t),
            a = !!this.$5[t];
          if (!r.length)
            return (
              n(
                [],
                t,
                a
                  ? o("SearchSourceQueryStatus").COMPLETE
                  : o("SearchSourceQueryStatus").ACTIVE,
              ),
              a
            );
          var i = r.map(function (t) {
            return e.$3[t];
          });
          return (
            n(
              i,
              t,
              a
                ? o("SearchSourceQueryStatus").COMPLETE
                : o("SearchSourceQueryStatus").ACTIVE,
            ),
            a
          );
        }),
        (t.$15 = function () {
          var e = this.$10;
          ((this.$10 = []), e.forEach(this.$16, this));
        }),
        (t.$16 = function (t) {
          var e = this.$1[t];
          if (e) {
            var n = this.$13(e.queryString, e.callback);
            if (n) {
              delete this.$1[t];
              return;
            }
            this.$10.push(t);
          }
        }),
        (t.reset = function () {
          ((this.$3 = {}),
            (this.$12 = {}),
            (this.$7 = {}),
            (this.$11 = {}),
            (this.$5 = {}),
            (this.$10 = []),
            (this.$1 = [void 0]));
        }),
        (t.addLocalEntries = function (t) {
          var e = this;
          (t.forEach(function (t) {
            var n = t.getUniqueID(),
              r = e.$6(t);
            ((e.$3[n] = t), (e.$12[n] = r));
            var o = e.$9(r);
            o.tokens.forEach(function (t) {
              (Object.prototype.hasOwnProperty.call(e.$7, t) || (e.$7[t] = {}),
                (e.$7[t][n] = !0));
            });
          }),
            this.$15());
        }),
        (t.addQueryEntries = function (t, n, a) {
          var e = this;
          a === o("SearchSourceQueryStatus").COMPLETE &&
            this.setQueryStringAsExhausted(n);
          var i = this.$14(n),
            l = this.$9(n).flatValue;
          ((this.$11[l] = r("createObjectFrom")(i, !0)),
            t.forEach(function (t) {
              var n = t.getUniqueID();
              ((e.$3[n] = t), (e.$12[n] = e.$6(t)), (e.$11[l][n] = !0));
            }),
            this.$15());
        }),
        (t.unsubscribe = function (t) {
          delete this.$1[t];
        }),
        (t.removeEntry = function (t) {
          delete this.$3[t];
        }),
        (t.getAllEntriesMap = function () {
          return this.$3;
        }),
        (t.setQueryStringAsExhausted = function (t) {
          this.$5[t] = !0;
        }),
        (t.unsetQueryStringAsExhausted = function (t) {
          delete this.$5[t];
        }),
        (t.$14 = function (t) {
          var e = this,
            n = this.$17(t),
            r = this.$18(t),
            o = n.concat(r),
            a = {},
            i = [];
          return (
            o.forEach(function (t) {
              a[t] == null &&
                e.$3[t] != null &&
                e.$4[t] == null &&
                (i.push(t), (a[t] = !0));
            }),
            this.$19(t, i)
          );
        }),
        (t.$19 = function (t, n) {
          var e = this.$20(t, n),
            r = this.$3,
            o = this.$9,
            a = o(t).flatValue.trim(),
            i = {};
          n.forEach(function (e) {
            var t = r[e];
            if (t != null && a.length > 0) {
              var n = o(t.getTitle()).flatValue.trim();
              i[e] = n === a || (n.startsWith(a) && n[a.length] === " ");
            } else i[e] = !1;
          });
          function l(t, n) {
            if (i[t] !== i[n]) return i[t] ? -1 : 1;
            if (e[t] !== e[n]) return e[t] ? -1 : 1;
            var o = r[t],
              a = r[n];
            if (o.getOrder() !== a.getOrder())
              return o.getOrder() - a.getOrder();
            var l = o.getTitle().length,
              s = a.getTitle().length;
            return l !== s ? l - s : o.getUniqueID() - a.getUniqueID();
          }
          return n.sort(l).slice();
        }),
        (t.$20 = function (t, n) {
          var e = this,
            r = {};
          return (
            n.forEach(function (n) {
              r[n] = e.$8(t, e.$12[n]);
            }),
            r
          );
        }),
        (t.$17 = function (t) {
          var e = this,
            n = this.$9(t, this.$2),
            o = this.$2 ? r("nullthrows")(n.sortedTokens) : n.tokens,
            a = o.length,
            i = n.isPrefixQuery ? a - 1 : null,
            l = {},
            s = {},
            u = {},
            c = !1,
            d = {},
            m = 0;
          o.forEach(function (t, n) {
            if (!Object.prototype.hasOwnProperty.call(d, t)) {
              (m++, (d[t] = !0));
              for (var r in e.$7) {
                var o = r === t && !Object.prototype.hasOwnProperty.call(l, r),
                  a = !1;
                if (
                  (o || (a = (e.$2 || i === n) && r.indexOf(t) === 0), !o && !a)
                ) {
                  Object.prototype.hasOwnProperty.call(l, r) || (c = !0);
                  continue;
                }
                r === t
                  ? (Object.prototype.hasOwnProperty.call(s, r) && (c = !0),
                    (l[r] = !0))
                  : ((Object.prototype.hasOwnProperty.call(l, r) ||
                      Object.prototype.hasOwnProperty.call(s, r)) &&
                      (c = !0),
                    (s[r] = !0));
                for (var p in e.$7[r])
                  (n === 0 ||
                    (Object.prototype.hasOwnProperty.call(u, p) &&
                      u[p] == m - 1)) &&
                    (u[p] = m);
              }
            }
          });
          var p = Object.keys(u).filter(function (e) {
            return u[e] == m;
          });
          return ((c || m < a) && (p = this.$21(t, p)), p);
        }),
        (t.$18 = function (t) {
          var e = this.$9(t).flatValue,
            n = this.$22(e);
          return Object.prototype.hasOwnProperty.call(this.$11, e)
            ? n
            : this.$21(t, n);
        }),
        (t.$22 = function (t) {
          var e = 0,
            n = null,
            r = this.$11;
          return (
            Object.keys(r).forEach(function (r) {
              ((t.indexOf(r) === 0 && r.length > e) || r === t) &&
                ((e = r.length), (n = r));
            }),
            n != null && Object.prototype.hasOwnProperty.call(r, n)
              ? Object.keys(r[n])
              : []
          );
        }),
        (t.$21 = function (t, n) {
          var e = this;
          return n.filter(function (n) {
            return e.$8(t, e.$12[n]);
          });
        }),
        e
      );
    })();
    function u(e) {
      return [e.getTitle(), e.getKeywordString()].join(" ");
    }
    l.default = e;
  },
  98,
);
