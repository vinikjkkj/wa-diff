__d(
  "MediaUploadTime",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1e3,
      l = e * 60,
      s = l * 60;
    function u(e) {
      return e;
    }
    function c(t) {
      return t * e;
    }
    function d(e) {
      return e * l;
    }
    function m(e) {
      return e * s;
    }
    function p(e) {
      return e;
    }
    function _(t) {
      return (1 * t) / e;
    }
    function f(e) {
      return (1 * e) / l;
    }
    function g(e) {
      return (1 * e) / s;
    }
    function h(e, t) {
      return e == null ? null : t(e);
    }
    function y(e) {
      return h(e, p);
    }
    function C(e) {
      return h(e, _);
    }
    function b(e) {
      return h(e, f);
    }
    function v(e) {
      return h(e, g);
    }
    function S(e, t) {
      return e + t;
    }
    function R(e, t) {
      return e - t;
    }
    function L(e, t) {
      return e < t ? -1 : e > t ? 1 : 0;
    }
    ((i.millisecondsToTime = u),
      (i.secondsToTime = c),
      (i.minutesToTime = d),
      (i.hoursToTime = m),
      (i.timeToMilliseconds = p),
      (i.timeToSeconds = _),
      (i.timeToMinutes = f),
      (i.timeToHours = g),
      (i.maybeTimeToMilliseconds = y),
      (i.maybeTimeToSeconds = C),
      (i.maybeTimeToMinutes = b),
      (i.maybeTimeToHours = v),
      (i.addTime = S),
      (i.subtractTime = R),
      (i.compareTime = L));
  },
  66,
);
