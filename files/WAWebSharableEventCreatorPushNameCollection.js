__d(
  "WAWebSharableEventCreatorPushNameCollection",
  [
    "WAWebBaseCollection",
    "WAWebJidToWid",
    "WAWebSharableEventCreatorPushNameModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.addRows = function (t) {
          return this.add(
            t.map(function (e) {
              return {
                id: o("WAWebJidToWid").lidUserJidToUserLid(e.creatorLid),
                pushName: e.pushName,
                publishedTsUsec: e.publishedTsUsec,
              };
            }),
            { merge: !0 },
          );
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o(
      "WAWebSharableEventCreatorPushNameModel",
    ).SharableEventCreatorPushName;
    var s = new e();
    l.SharableEventCreatorPushNameCollection = s;
  },
  98,
);
