__d(
  "WAWebMuseDefaultAssistantVariant",
  [
    "$InternalEnum",
    "WAWebCmd",
    "WAWebMuseDefaultAssistantVariantSource",
    "WAWebPrimaryFeaturesModel",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        MetaAI: 0,
        MuseAfterLinking: 1,
        MuseAlways: 2,
      }),
      s = new Set(),
      u = null;
    function c() {
      var t,
        n =
          u != null && r("gkx")("16539")
            ? u
            : o(
                "WAWebMuseDefaultAssistantVariantSource",
              ).readMuseDefaultAssistantVariantSource();
      return (t = e.cast(n)) != null ? t : e.MetaAI;
    }
    function d(e) {
      var t = function () {
        return e();
      };
      return (
        s.add(t),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", t),
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on("change:features", t),
        function () {
          (s.delete(t),
            o("WAWebCmd").Cmd.off("on_ab_props_update_from_bridge", t),
            o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off(
              "change:features",
              t,
            ));
        }
      );
    }
    function m(e) {
      return r("gkx")("16539")
        ? ((u = e),
          s.forEach(function (e) {
            e();
          }),
          !0)
        : !1;
    }
    ((l.MuseDefaultAssistantVariant = e),
      (l.getMuseDefaultAssistantVariant = c),
      (l.subscribeToMuseDefaultAssistantVariant = d),
      (l.overrideMuseDefaultAssistantVariantForDebug = m));
  },
  98,
);
