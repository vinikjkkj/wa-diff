__d(
  "WAWebCustomerManagerEducationUnits",
  ["WAWebCustomerManagerEducationVideos", "bx", "cr:18128", "fbs", "once"],
  function (t, n, r, o, a, i, l) {
    var e = r("once")(u);
    function s() {
      var t;
      return (t =
        n("cr:18128") == null
          ? void 0
          : n("cr:18128").getCustomerManagerEducationUnitsOverride()) != null
        ? t
        : e();
    }
    function u() {
      var e = o(
        "WAWebCustomerManagerEducationVideos",
      ).getCustomerManagerEducationVideoUrl("getting_started");
      if (e == null) return [];
      var t = r("bx").getURL(r("bx")("111359"));
      return [
        {
          durationSeconds: null,
          id: "cm_education_getting_started",
          mediaType: "video",
          mediaUrl: e,
          posterUrl: t,
          thumbnailUrl: t,
          title: r("fbs")._(/*BTDS*/ "").toString(),
        },
      ];
    }
    l.getCustomerManagerEducationUnits = s;
  },
  226,
);
