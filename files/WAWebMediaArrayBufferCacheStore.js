__d(
  "WAWebMediaArrayBufferCacheStore",
  ["WAWebKeyValueCacheStore"],
  function (t, n, r, o, a, i, l) {
    var e = { ignoreSearch: !0, ignoreMethod: !0, ignoreVary: !0 },
      s = (function (t) {
        function n(n) {
          return (
            t.call(this, n, u, c, { encodeKey: d, matchOptions: e }) || this
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(r("WAWebKeyValueCacheStore"));
    function u(e) {
      return new Response(e);
    }
    function c(e) {
      return e.arrayBuffer();
    }
    function d(e, t) {
      var n = encodeURIComponent(e),
        r = encodeURIComponent(t);
      return "https://_media_cache_v2_.whatsapp.com/" + r + "_" + n;
    }
    l.default = s;
  },
  98,
);
