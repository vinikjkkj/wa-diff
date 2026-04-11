__d(
  "WAWebMediaHost",
  ["WAWebMmsMediaTypes"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(o("WAWebMmsMediaTypes").MEDIA_TYPE_VALUES),
      s = Object.freeze({ PRIMARY: "primary", FALLBACK: "fallback" }),
      u = (function () {
        function e(t) {
          ((this.hostname = t.hostname),
            (this.ips = t.ips || []),
            (this.type = t.type),
            (this.class = t.class));
          var n = c(t.rules),
            r = n.downloadBuckets,
            o = n.supportedDownloadTypes,
            a = n.supportedUploadTypes;
          ((this.downloadBuckets = r),
            (this.$1 = o),
            (this.$2 = a),
            (this.fallback =
              t.fallback != null
                ? new e(
                    babelHelpers.extends({}, t, t.fallback, {
                      type: "fallback",
                      fallback: void 0,
                    }),
                  )
                : null));
        }
        var t = e.prototype;
        return (
          (t.equals = function (t) {
            return this.hostname === (t == null ? void 0 : t.hostname);
          }),
          (t.isFallback = function () {
            return this.type === s.FALLBACK;
          }),
          (t.supportsDownloadMediaType = function (t) {
            return this.$1.has(d(t));
          }),
          (t.supportsUploadMediaType = function (t) {
            return this.$2.has(m(t));
          }),
          (t.setSelectedBucket = function (t) {
            this.selectedBucket = t;
          }),
          e
        );
      })();
    function c(t) {
      var n = t || [],
        r,
        o,
        a;
      for (var i of n) {
        if (i.download) {
          r = r != null ? r : new Set();
          for (var l of i.download) r.add(l);
        }
        if (i.upload) {
          o = o != null ? o : new Set();
          for (var s of i.upload) o.add(s);
        }
        i.downloadBuckets &&
          (a = i.downloadBuckets.map(function (e) {
            return parseInt(e, 10);
          }));
      }
      return {
        supportedDownloadTypes: r != null ? r : e,
        supportedUploadTypes: o != null ? o : e,
        downloadBuckets: a,
      };
    }
    function d(e) {
      return e === "ptv" ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTV
        ? o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO
        : e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT
          ? o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE
          : e;
    }
    function m(e) {
      return e === "ptv"
        ? o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO
        : e === "product-catalog-image"
          ? o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT
          : e;
    }
    ((l.HOST_TYPE = s), (l.MediaHost = u));
  },
  98,
);
