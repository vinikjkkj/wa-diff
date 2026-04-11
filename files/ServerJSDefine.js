__d(
  "ServerJSDefine",
  ["BitMap", "replaceTransportMarkers"],
  function (t, n, r, o, a, i, l) {
    var e = 2,
      s = 8,
      u = new (r("BitMap"))(),
      c = {
        getLoadedModuleHash: function () {
          return u.toCompressedString();
        },
        getModuleNameAndHash: function (t) {
          var e = t.split("@");
          return { hash: e[1], name: e[0] };
        },
        handleDefine: function (n, o, a, i, l) {
          (i >= 0 && u.set(i),
            define(
              n,
              o,
              function (t, o, s, u, c) {
                var e = { data: a };
                if (
                  (r("replaceTransportMarkers")({ relativeTo: l }, e),
                  i === -42)
                ) {
                  var d = a != null && typeof a == "object" && a.__throw8367__;
                  throw new Error(n + ": " + (typeof d == "string" ? d : ""));
                }
                c.exports = e.data;
              },
              e | s,
            ));
        },
        handleDefines: function (t, n) {
          t.forEach(function (e) {
            var t;
            (n != null ? (t = [].concat(e, [n])) : (t = [].concat(e, [null])),
              c.handleDefine.apply(null, t));
          });
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
