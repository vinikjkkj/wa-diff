__d(
  "oz-player/utils/OzReadableStreamUtils",
  ["oz-player/utils/ozConcatUint8Arrays"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
      typeof TextDecoder != "undefined"
        ? function (e) {
            return new TextDecoder("utf-8").decode(new Uint8Array(e));
          }
        : function (e) {
            return String.fromCharCode.apply(null, e);
          };
    function s(e) {
      var t = [],
        n = function () {
          return e.read().then(function (e) {
            var r = e.done,
              o = e.value;
            return r || !o ? null : (t.push(o), n());
          });
        };
      return n().then(function () {
        var e = r("oz-player/utils/ozConcatUint8Arrays")(t),
          n = e.view;
        return n;
      });
    }
    function u(t) {
      return s(t).then(function (t) {
        return e(t);
      });
    }
    function c(e) {
      var t = new Uint8Array(e.length);
      return t.map(function (t, n) {
        return e.charCodeAt(n);
      });
    }
    ((l.pumpAllData = s), (l.pumpString = u), (l.stringToUint8Array = c));
  },
  98,
);
