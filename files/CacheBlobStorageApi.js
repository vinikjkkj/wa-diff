__d(
  "CacheBlobStorageApi",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "/media-blob-storage/",
      s = "x-blob-kind";
    function u(t) {
      return e + encodeURIComponent(t);
    }
    function c(e, t) {
      var n;
      return new Response(e, { headers: ((n = {}), (n[s] = t), n) });
    }
    function d(e) {
      var t = null;
      function n(n) {
        var o;
        if (typeof ((o = self.caches) == null ? void 0 : o.open) != "function")
          return Promise.reject(r("err")("Cache Storage is not supported"));
        if (t == null) {
          var a = self.caches.open(e);
          (a.catch(function () {
            t === a && (t = null);
          }),
            (t = a));
        }
        return t.then(n);
      }
      return {
        delete: function (t) {
          return n(async function (e) {
            await e.delete(u(t));
          });
        },
        read: function (t) {
          return n(async function (e) {
            var n = await e.match(u(t));
            return n == null ? null : n.arrayBuffer();
          });
        },
        readKind: function (t) {
          return n(async function (e) {
            var n,
              r = (n = await e.match(u(t))) == null ? void 0 : n.headers.get(s);
            return r === "fullsize" || r === "progressive-preview" ? r : null;
          });
        },
        write: function (t, r, o) {
          return n(function (e) {
            return e.put(u(t), c(r, o));
          });
        },
        writeIfNotExist: function (t, r, o) {
          return n(async function (e) {
            var n = u(t);
            (await e.match(n)) == null && (await e.put(n, c(r, o)));
          });
        },
      };
    }
    l.createCacheBlobStorageApi = d;
  },
  98,
);
