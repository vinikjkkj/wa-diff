__d(
  "formatFileSize",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
        function (e) {
          return s._(/*BTDS*/ '_j{"*":"{value} B"}', [
            s._param("value", e, [0]),
          ]);
        },
        function (e) {
          return s._(/*BTDS*/ '_j{"*":"{value} KB"}', [
            s._param("value", e, [0]),
          ]);
        },
        function (e) {
          return s._(/*BTDS*/ '_j{"*":"{value} MB"}', [
            s._param("value", e, [0]),
          ]);
        },
        function (e) {
          return s._(/*BTDS*/ '_j{"*":"{value} GB"}', [
            s._param("value", e, [0]),
          ]);
        },
        function (e) {
          return s._(/*BTDS*/ '_j{"*":"{value} TB"}', [
            s._param("value", e, [0]),
          ]);
        },
        function (e) {
          return s._(/*BTDS*/ '_j{"*":"{value} PB"}', [
            s._param("value", e, [0]),
          ]);
        },
        function (e) {
          return s._(/*BTDS*/ '_j{"*":"{value} EB"}', [
            s._param("value", e, [0]),
          ]);
        },
      ],
      u = 0;
    function c(t, n, r) {
      if ((n === void 0 && (n = 1024), r === void 0 && (r = 2), t == null))
        return null;
      if (t === 0) return e[u](0);
      var o = Math.floor(Math.log(Math.abs(t)) / Math.log(n)),
        a = t / Math.pow(n, o),
        i = Math.pow(10, r);
      return ((a = Math.round(a * i) / i), e[o](a));
    }
    l.default = c;
  },
  226,
);
