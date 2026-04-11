__d(
  "WAWebConversionTupleCollection",
  [
    "WATimeUtils",
    "WAWebApiParse",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebConversionTupleModel",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["conversionData"],
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.initializeFromCache = function (n) {
            if (n) {
              var t =
                  o("WATimeUtils").unixTime() -
                  o("WAWebConversionTupleModel").ConversionTupleExpiry,
                r = n.filter(function (e) {
                  return e.timestamp - t > 0;
                }),
                a = r.map(function (t) {
                  var n = t.conversionData,
                    r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                  if (n == null) return r;
                  var a = o("WAWebApiParse").parseConversionData(n);
                  return a
                    ? babelHelpers.extends({}, r, { conversionData: a })
                    : r;
                });
              (this.add(a), this.saveToCache());
            }
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((s.model = o("WAWebConversionTupleModel").ConversionTuple),
      (s.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS
          .CONVERSION_TUPLE_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1e3,
      }));
    var u = new s();
    l.default = u;
  },
  98,
);
