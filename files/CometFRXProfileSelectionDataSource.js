__d(
  "CometFRXProfileSelectionDataSource",
  [
    "BaseTypeaheadPayloadDecoratorAddLimit",
    "CometFRXProfileSelectionDataSource.query",
    "CometRelay",
    "Promise",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5,
      u = (function () {
        function t(e) {
          this.$1 = e;
        }
        var a = t.prototype;
        return (
          (a.fetchNetwork = function (a) {
            var t = a.query;
            if (t === "")
              return (e || (e = n("Promise"))).resolve({
                entries: [],
                params: a,
              });
            var i = this.$1,
              l = i.frxTagType,
              u = i.includeIgInteropUsers,
              c = i.limit,
              d = c === void 0 ? s : c,
              m = i.relayEnvironment,
              p = i.reportableEntId,
              _ = i.searchableEntityTypes,
              f = i.ufoKey,
              g = i.verifiedEntitiesOnly;
            return o("CometRelay")
              .fetchQuery(
                m,
                o("CometFRXProfileSelectionDataSource.query").query,
                {
                  input: {
                    frx_tag_type: l,
                    include_ig_interop_users: u,
                    limit: d,
                    query: t,
                    reportable_entity_id: p,
                    searchable_entity_types: _,
                    ufo_key: f,
                    verified_entities_only: g,
                  },
                  picture_size: o("CometFRXProfileSelectionDataSource.query")
                    .ICON_SIZE,
                  scale: o("WebPixelRatio").get(),
                },
              )
              .toPromise()
              .then(o("CometFRXProfileSelectionDataSource.query").normalize)
              .then(function (e) {
                var t = r("BaseTypeaheadPayloadDecoratorAddLimit")(d);
                return t({ entries: e, params: a });
              });
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
