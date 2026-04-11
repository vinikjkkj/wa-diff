__d(
  "WAWebServiceAreaRadiusConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
        {
          label: function () {
            return s._(/*BTDS*/ "Exact location");
          },
          value: 0,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "1 KM");
          },
          value: 1e3,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "5 KM");
          },
          value: 5e3,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "10 KM");
          },
          value: 1e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "20 KM");
          },
          value: 2e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "50 KM");
          },
          value: 5e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "100 KM");
          },
          value: 1e5,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "200 KM");
          },
          value: 2e5,
        },
      ],
      u = [
        {
          label: function () {
            return s._(/*BTDS*/ "Exact location");
          },
          value: 0,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "\u003C 1 MI");
          },
          value: 1e3,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "5 MI");
          },
          value: 5e3,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "10 MI");
          },
          value: 1e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "20 MI");
          },
          value: 2e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "30 MI");
          },
          value: 5e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "50 MI");
          },
          value: 1e5,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "100+ MI");
          },
          value: 2e5,
        },
      ],
      c = [0, 1e3, 5e3, 1e4, 2e4, 5e4, 1e5, 2e5];
    function d() {
      var e,
        t,
        n = (e = navigator.language) != null ? e : "",
        r = (t = n.split("-")[1]) != null ? t : "";
      return r === "US" || r === "GB";
    }
    function m() {
      return d() ? u : e;
    }
    function p(e) {
      if (e <= 0) return 0;
      for (var t = c[0], n = Math.abs(e - t), r = 1; r < c.length; r++) {
        var o = Math.abs(e - c[r]);
        o < n && ((n = o), (t = c[r]));
      }
      return t;
    }
    function _(e) {
      var t = p(e),
        n = m(),
        r = n.find(function (e) {
          return e.value === t;
        });
      return r != null ? r.label() : n[0].label();
    }
    ((l.isImperialLocale = d),
      (l.getServiceAreaRadiusOptions = m),
      (l.radiusMetersToOptionValue = p),
      (l.getRadiusLabel = _));
  },
  226,
);
