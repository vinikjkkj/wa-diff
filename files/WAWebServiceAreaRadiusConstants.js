__d(
  "WAWebServiceAreaRadiusConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 0,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 1e3,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 5e3,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 1e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 2e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 5e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 1e5,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 2e5,
        },
      ],
      u = [
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 0,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 1e3,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 5e3,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 1e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 2e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 5e4,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          value: 1e5,
        },
        {
          label: function () {
            return s._(/*BTDS*/ "");
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
    ((l.isImperialLocale = d),
      (l.getServiceAreaRadiusOptions = m),
      (l.radiusMetersToOptionValue = p));
  },
  226,
);
