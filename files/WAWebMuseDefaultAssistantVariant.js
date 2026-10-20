__d(
  "WAWebMuseDefaultAssistantVariant",
  [
    "$InternalEnum",
    "WAWebCmd",
    "WAWebMuseDefaultAssistantVariantSource",
    "WAWebPrimaryFeaturesModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      MetaAI: 0,
      MuseAfterLinking: 1,
      MuseAlways: 2,
    });
    function s() {
      var t;
      return (t = e.cast(
        o(
          "WAWebMuseDefaultAssistantVariantSource",
        ).readMuseDefaultAssistantVariantSource(),
      )) != null
        ? t
        : e.MetaAI;
    }
    function u(e) {
      var t = function () {
        return e();
      };
      return (
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", t),
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on("change:features", t),
        function () {
          (o("WAWebCmd").Cmd.off("on_ab_props_update_from_bridge", t),
            o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off(
              "change:features",
              t,
            ));
        }
      );
    }
    ((l.MuseDefaultAssistantVariant = e),
      (l.getMuseDefaultAssistantVariant = s),
      (l.subscribeToMuseDefaultAssistantVariant = u));
  },
  98,
);
