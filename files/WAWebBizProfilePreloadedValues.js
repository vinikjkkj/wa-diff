__d(
  "WAWebBizProfilePreloadedValues",
  ["WAWebBizProfilePreloadedValues_profile.graphql", "WAWebSmbUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizProfilePreloadedValues_profile.graphql"));
    function u(e) {
      if (e == null) return null;
      var t = e.service_areas[0],
        n = e.business_hours,
        r =
          n != null
            ? o("WAWebSmbUtils").getBusinessHoursForEditFromGraphQL({
                note: n.note,
                operating_ranges: n.operating_ranges.map(function (e) {
                  return {
                    close_time: e.close_time,
                    day_of_week: e.day_of_week,
                    mode: e.mode,
                    open_time: e.open_time,
                  };
                }),
                timezone_id: n.timezone_id,
              })
            : null;
      return {
        about: e.about,
        address: e.physical_address,
        businessHours: r,
        categories: e.localized_categories.reduce(function (e, t) {
          var n = t.id,
            r = t.localized_display_name;
          return (
            n != null &&
              r != null &&
              e.push({ id: n, localized_display_name: r }),
            e
          );
        }, []),
        description: e.description,
        email: e.email,
        latitude: e.latitude,
        locationNotes: t == null ? void 0 : t.description,
        longitude: e.longitude,
        serviceAreaRadius:
          (t == null ? void 0 : t.radius_meters) != null
            ? String(t.radius_meters)
            : null,
        websites: e.websites,
      };
    }
    ((l.bizProfilePreloadedValuesFragment = s),
      (l.getPreloadedBizProfileValues = u));
  },
  98,
);
