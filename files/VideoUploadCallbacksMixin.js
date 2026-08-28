__d(
  "VideoUploadCallbacksMixin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return Array.isArray(e) ? e : [e];
    }
    var l = {
      inform: function (n, r) {
        var t = this.__callbacksByType;
        if (t != null) {
          var o = e(n);
          o.forEach(function (e) {
            var n = t[e];
            n != null &&
              n.forEach(function (t) {
                try {
                  t(e, r);
                } catch (e) {}
              });
          });
        }
      },
      subscribe: function (n, r) {
        var t,
          o = (this.__callbacksByType =
            (t = this.__callbacksByType) != null ? t : {}),
          a = e(n);
        a.forEach(function (e) {
          var t,
            n = (o[e] = (t = o[e]) != null ? t : []);
          n.push(r);
        });
        var i = !1;
        return {
          remove: function () {
            i !== !0 &&
              ((i = !0),
              a.forEach(function (e) {
                var t = o[e];
                if (t != null) {
                  var n = t.indexOf(r);
                  (n !== -1 && t.splice(n, 1), t.length === 0 && delete o[e]);
                }
              }));
          },
        };
      },
    };
    a.exports = l;
  },
  null,
);
