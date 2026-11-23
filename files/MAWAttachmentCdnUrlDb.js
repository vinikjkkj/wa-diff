__d(
  "MAWAttachmentCdnUrlDb",
  ["MAWAttachmentCdnUrlSchema", "MpsErrors", "WAResolvable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (o("WAResolvable").Resolvable)();
    async function u(t) {
      try {
        var n = o("MAWAttachmentCdnUrlSchema").makeSchema(t);
        return (await n.init(), (e = n), s.resolve(n), n);
      } catch (e) {
        var r = o("MpsErrors").MpsErrors.classify(
          e,
          "attachment_cdn_url_db_init",
          "store_init_failed",
        );
        throw (s.reject(r), r);
      }
    }
    function c() {
      if (e == null)
        throw o("MpsErrors").MpsErrors.error(
          "used_before_init",
          "MAW attachment CDN URL DB is not initialized",
        );
      return e;
    }
    function d() {
      return s.promise;
    }
    ((l.makeAttachmentCdnUrlDb = u),
      (l.getAttachmentCdnUrlDb = c),
      (l.getAttachmentCdnUrlDbPromise = d));
  },
  98,
);
