__d(
  "WAWebMuseDefaultAssistantVariant",
  ["$InternalEnum", "WAWebMuseDefaultAssistantVariantSource"],
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
    ((l.MuseDefaultAssistantVariant = e),
      (l.getMuseDefaultAssistantVariant = s));
  },
  98,
);
