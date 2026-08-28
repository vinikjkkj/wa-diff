__d(
  "CometAIHTSIGAccountSearchDataSource",
  [
    "BaseTypeaheadPayloadDecoratorAddLimit",
    "CometAIHTSIGAccountSearchDataSource.query",
    "CometRelay",
    "Promise",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 10,
      u = (function () {
        function t(e) {
          this.$1 = e;
        }
        var a = t.prototype;
        return (
          (a.fetchNetwork = function (a) {
            var t = a.query,
              i = this.$1,
              l = i.limit,
              u = l === void 0 ? s : l,
              c = i.relayEnvironment,
              d = r("BaseTypeaheadPayloadDecoratorAddLimit")(u);
            return t === ""
              ? (e || (e = n("Promise"))).resolve(d({ entries: [], params: a }))
              : o("CometRelay")
                  .fetchQuery(
                    c,
                    o("CometAIHTSIGAccountSearchDataSource.query").query,
                    { limit: u, search_query: t },
                  )
                  .toPromise()
                  .then(
                    o("CometAIHTSIGAccountSearchDataSource.query").normalize,
                  )
                  .then(function (e) {
                    return d({ entries: e, params: a });
                  });
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
