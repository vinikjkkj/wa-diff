__d(
  "WebBloksHasteAppLoader",
  ["AbstractWebBloksAppLoader", "URI", "getAsyncParams", "webBloksFetchJson"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n(e, n) {
          var r;
          return (
            (r = t.call(this) || this),
            (r.$WebBloksHasteAppLoader$p_1 = e),
            (r.$WebBloksHasteAppLoader$p_2 = n),
            r
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.makePostRequest = function (n, o) {
            var t =
              this.$WebBloksHasteAppLoader$p_2 != null
                ? this.$WebBloksHasteAppLoader$p_2()
                : null;
            return r("webBloksFetchJson")(
              new (e || (e = r("URI")))(n)
                .addQueryData({ __bkv: this.getVersioningID() })
                .toString(),
              babelHelpers.extends({}, r("getAsyncParams")("POST"), o),
              t != null ? t : void 0,
            );
          }),
          (o.getAsyncFetchURI = function (t, n, r) {
            return this.$WebBloksHasteAppLoader$p_1
              .getURIBuilder()
              .setParams({ appid: t, type: r })
              .getURI()
              .toString();
          }),
          (o.getAsyncFetchData = function (t, n, r) {
            return { params: n !== null ? JSON.stringify(n) : null };
          }),
          n
        );
      })(o("AbstractWebBloksAppLoader").AbstractWebBloksAppLoader);
    l.WebBloksHasteAppLoader = s;
  },
  98,
);
