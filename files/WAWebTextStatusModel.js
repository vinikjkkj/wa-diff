__d(
  "WAWebTextStatusModel",
  [
    "WAWebBaseModel",
    "WAWebTextStatusCollection",
    "WAWebWid",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.status = o("WAWebBaseModel").prop()),
          (t.stale = o("WAWebBaseModel").session(!0)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebTextStatusCollection").TextStatusCollection;
        }),
        (n.isValidTextStatus = function () {
          return (
            this.status !== void 0 &&
            r("isStringNotNullAndNotWhitespaceOnly")(this.status)
          );
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "textStatus"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
