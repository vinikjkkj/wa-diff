__d(
  "WAWebBusinessDirectConnectionModel",
  ["WAWebBaseModel", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.cypher = o("WAWebBaseModel").prop()),
          (t.cypherExpirationTimestamp = o("WAWebBaseModel").prop()),
          (t.cypherType = o("WAWebBaseModel").prop()),
          (t.postcode = o("WAWebBaseModel").prop()),
          (t.postcodeSetByUser = o("WAWebBaseModel").prop()),
          (t.postcodeLocationName = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "business_direct_connection"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
