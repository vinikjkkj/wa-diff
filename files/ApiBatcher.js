__d(
  "ApiBatcher",
  [
    "invariant",
    "ApiClientUtils",
    "QueryString",
    "sdk.safelyParseResponse",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 50,
      u = 105440539523,
      c = (function () {
        function t(e, t) {
          ((this.$1 = []),
            (this.$2 = []),
            (this.$4 = null),
            (this.executeRequest = e),
            (this.$3 = t));
        }
        var n = t.prototype;
        return (
          (n.scheduleBatchCall = function () {
            for (
              var n = this, r = arguments.length, o = new Array(r), a = 0;
              a < r;
              a++
            )
              o[a] = arguments[a];
            var i = t.prepareBatchParams(o),
              l = i.body,
              s = i.callback,
              u = i.method,
              c = i.relative_url,
              d = { method: u, relative_url: c };
            (l && (d.body = l),
              this.$1.push(d),
              this.$2.push(s),
              this.$1.length == e
                ? (this.$4 && window.clearTimeout(this.$4), this.$5())
                : this.$4 ||
                  (this.$4 = window.setTimeout(function () {
                    n.$5();
                  }, 0)));
          }),
          (t.prepareBatchParams = function (t, n) {
            n === void 0 && (n = []);
            var e = o("ApiClientUtils").parseCallDataFromArgs(t),
              a = e.callback,
              i = e.params.method,
              l = e.uri,
              s,
              u = l.removeQueryData("method").toString();
            if (i.toLowerCase() === "post") {
              var c = l.getQueryData();
              s = r("QueryString").encode(c);
              var d = r("whitelistObjectKeys")(c, n);
              u = l.setQueryData(d).toString();
            }
            return { body: s, callback: a, method: i, relative_url: u };
          }),
          (n.$5 = function () {
            (this.$1.length > 0 || s(0, 4698),
              this.$1.length === this.$2.length || s(0, 4699));
            var e = this.$1,
              t = this.$2;
            if (
              ((this.$1 = []), (this.$2 = []), (this.$4 = null), e.length === 1)
            ) {
              var n = e[0],
                o = t[0],
                a = n.body ? r("QueryString").decode(n.body) : null;
              this.executeRequest(n.relative_url, n.method, a, o);
              return;
            }
            this.executeRequest(
              "/",
              "POST",
              { batch: e, include_headers: !1, batch_app_id: this.$3 || u },
              function (e) {
                Array.isArray(e)
                  ? e.forEach(function (e, n) {
                      t[n](r("sdk.safelyParseResponse")(e && e.body));
                    })
                  : t.forEach(function (e) {
                      return e({
                        error: { message: "Fatal: batch call failed." },
                      });
                    });
              },
            );
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
