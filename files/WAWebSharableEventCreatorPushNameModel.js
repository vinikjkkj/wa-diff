__d(
  "WAWebSharableEventCreatorPushNameModel",
  ["WAWebBaseModel", "WAWebSharableEventCreatorPushNameCollection", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.pushName = o("WAWebBaseModel").prop()),
          (t.publishedTsUsec = o("WAWebBaseModel").prop(0)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebSharableEventCreatorPushNameCollection")
            .SharableEventCreatorPushNameCollection;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "sharableEventCreatorPushName"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.SharableEventCreatorPushName = s;
  },
  98,
);
