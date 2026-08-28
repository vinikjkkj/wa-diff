__d(
  "CometAIHTSMemorializationLegacyContactDataSource",
  [
    "BaseTypeaheadPayloadDecoratorAddLimit",
    "CometAIHTSMemorializationLegacyContactDataSource.query",
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
              l = i.identityId,
              u = i.interface,
              c = u === void 0 ? "FB_WEB" : u,
              d = i.limit,
              m = d === void 0 ? s : d,
              p = i.relayEnvironment,
              _ = r("BaseTypeaheadPayloadDecoratorAddLimit")(m);
            return t === "" || l == null
              ? (e || (e = n("Promise"))).resolve(_({ entries: [], params: a }))
              : o("CometRelay")
                  .fetchQuery(
                    p,
                    o("CometAIHTSMemorializationLegacyContactDataSource.query")
                      .query,
                    {
                      first: m,
                      identity_identifier: l,
                      interface: c,
                      query: t,
                    },
                  )
                  .toPromise()
                  .then(
                    o("CometAIHTSMemorializationLegacyContactDataSource.query")
                      .normalize,
                  )
                  .then(function (e) {
                    return _({ entries: e, params: a });
                  });
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
