__d(
  "URLSearchParams",
  ["MaybeSymbol"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var s = /\+/g,
      u = /[!\'()*]/g,
      c = /%20/g,
      d = r("MaybeSymbol") ? r("MaybeSymbol").iterator : null;
    function m(e) {
      return encodeURIComponent(e)
        .replace(c, "+")
        .replace(u, function (e) {
          return "%" + e.charCodeAt(0).toString(16);
        });
    }
    function p(e) {
      return decodeURIComponent(e != null ? e : "").replace(s, " ");
    }
    function _(e) {
      var t = e.slice(0),
        n = {
          next: function () {
            var e = t.length,
              n = t.shift();
            return { done: n === void 0 && e <= 0, value: n };
          },
        };
      return (
        d &&
          (n[d] = function () {
            return n;
          }),
        n
      );
    }
    var f = (function () {
      function e(e) {
        e === void 0 && (e = "");
        var t = e;
        (t[0] === "?" && (t = t.substr(1)),
          (this.$1 = t.length
            ? t.split("&").map(function (e) {
                var t = e.split("="),
                  n = t[0],
                  r = t[1];
                return [p(n), p(r)];
              })
            : []));
      }
      var t = e.prototype;
      return (
        (t.append = function (t, n) {
          this.$1.push([t, String(n)]);
        }),
        (t.delete = function (t) {
          for (var e = 0; e < this.$1.length; e++)
            this.$1[e][0] === t && (this.$1.splice(e, 1), e--);
        }),
        (t.entries = function () {
          if (d) return this.$1[d]();
          var e = this.$1.slice(0);
          return _(e);
        }),
        (t.get = function (t) {
          for (var e = 0, n = this.$1.length; e < n; e++)
            if (this.$1[e][0] === t) return this.$1[e][1];
          return null;
        }),
        (t.getAll = function (t) {
          for (var e = [], n = 0, r = this.$1.length; n < r; n++)
            this.$1[n][0] === t && e.push(this.$1[n][1]);
          return e;
        }),
        (t.has = function (t) {
          for (var e = 0, n = this.$1.length; e < n; e++)
            if (this.$1[e][0] === t) return !0;
          return !1;
        }),
        (t.keys = function () {
          var e = this.$1.map(function (e) {
            var t = e[0],
              n = e[1];
            return t;
          });
          return d ? e[d]() : _(e);
        }),
        (t.set = function (t, n) {
          for (var e = !1, r = 0; r < this.$1.length; r++)
            this.$1[r][0] === t &&
              (e
                ? (this.$1.splice(r, 1), r--)
                : ((this.$1[r][1] = String(n)), (e = !0)));
          e || this.$1.push([t, String(n)]);
        }),
        (t.toString = function () {
          return this.$1
            .map(function (e) {
              var t = e[0],
                n = e[1];
              return m(t) + "=" + m(n);
            })
            .join("&");
        }),
        (t.values = function () {
          var e = this.$1.map(function (e) {
            var t = e[0],
              n = e[1];
            return n;
          });
          return d ? e[d]() : _(e);
        }),
        (t[d] = function () {
          return this.entries();
        }),
        e
      );
    })();
    l.default = f;
  },
  98,
);
