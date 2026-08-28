__d(
  "AdsUEditorAdgroupCallBusinessHoursStoreUtils",
  ["AdsPageStore", "AdsUEditorAdgroupCallBusinessHoursUtils", "DateConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 4,
      u = 60,
      c = 24 * u,
      d = [
        {
          day: (e = o("DateConsts")).DAYS.SUNDAY,
          openKey: "sun_1_open",
          close1Key: "sun_1_close",
          close2Key: "sun_2_close",
        },
        {
          day: e.DAYS.MONDAY,
          openKey: "mon_1_open",
          close1Key: "mon_1_close",
          close2Key: "mon_2_close",
        },
        {
          day: e.DAYS.TUESDAY,
          openKey: "tue_1_open",
          close1Key: "tue_1_close",
          close2Key: "tue_2_close",
        },
        {
          day: e.DAYS.WEDNESDAY,
          openKey: "wed_1_open",
          close1Key: "wed_1_close",
          close2Key: "wed_2_close",
        },
        {
          day: e.DAYS.THURSDAY,
          openKey: "thu_1_open",
          close1Key: "thu_1_close",
          close2Key: "thu_2_close",
        },
        {
          day: e.DAYS.FRIDAY,
          openKey: "fri_1_open",
          close1Key: "fri_1_close",
          close2Key: "fri_2_close",
        },
        {
          day: e.DAYS.SATURDAY,
          openKey: "sat_1_open",
          close1Key: "sat_1_close",
          close2Key: "sat_2_close",
        },
      ];
    function m(e) {
      if (e == null) return null;
      var t = e.split(":").map(Number),
        n = t[0],
        r = t[1];
      return Number.isNaN(n) || Number.isNaN(r) ? null : n * u + r;
    }
    function p(e, t) {
      var n,
        r = m(t[e.openKey]),
        o = (n = m(t[e.close2Key])) != null ? n : m(t[e.close1Key]);
      if (r == null || o == null) return null;
      var a = o <= r ? c : o;
      return a <= r ? null : { end_minute: a, start_minute: r };
    }
    function _(e) {
      if (e == null) return null;
      var t = r("AdsPageStore").get(e).hours;
      if (t == null) return null;
      var n = [],
        o = [],
        a = [];
      for (var i of d) {
        var l = p(i, t);
        l != null &&
          (n.push(i.day), o.push(l.start_minute), a.push(l.end_minute));
      }
      return n.length < s
        ? null
        : [
            {
              days: n,
              end_minute: Math.max.apply(Math, a),
              start_minute: Math.min.apply(Math, o),
              timezone_type: "ADVERTISER",
            },
          ];
    }
    function f(e) {
      var t;
      return (t = _(e)) != null
        ? t
        : o(
            "AdsUEditorAdgroupCallBusinessHoursUtils",
          ).getDefaultBusinessHours();
    }
    ((l.getBusinessHoursFromPage = _), (l.getDefaultBusinessHoursForPage = f));
  },
  98,
);
