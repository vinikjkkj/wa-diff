__d(
  "WebBloksHasteAppLoader",
  [
    "AbstractWebBloksAppLoader",
    "URI",
    "WebBloksVersioningID",
    "getAsyncParams",
    "webBloksFetchJson",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n(e) {
          var n;
          return (
            (n = t.call(this) || this),
            (n.$WebBloksHasteAppLoader$p_1 = e),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.makePostRequest = function (n, a) {
            return r("webBloksFetchJson")(
              new (e || (e = r("URI")))(n)
                .addQueryData({ __bkv: o("WebBloksVersioningID").versioningID })
                .toString(),
              babelHelpers.extends({}, r("getAsyncParams")("POST"), a),
            );
          }),
          (a.getAsyncFetchURI = function (t, n, r) {
            return this.$WebBloksHasteAppLoader$p_1
              .getURIBuilder()
              .setParams({ appid: t, type: r })
              .getURI()
              .toString();
          }),
          (a.getAsyncFetchData = function (t, n, r) {
            return { params: n !== null ? JSON.stringify(n) : null };
          }),
          n
        );
      })(o("AbstractWebBloksAppLoader").AbstractWebBloksAppLoader);
    l.WebBloksHasteAppLoader = s;
  },
  98,
);
