__d(
  "WAWebBroadcastMetadataModel",
  [
    "WAWebAudienceExpressionTypes",
    "WAWebBaseModel",
    "WAWebBroadcastMetadataCollection",
    "WAWebBroadcastRecipientCollection",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.audienceExpression = o("WAWebBaseModel").prop(function () {
            return o("WAWebAudienceExpressionTypes")
              .DEFAULT_AUDIENCE_EXPRESSION;
          })),
          (t.customAudienceFbid = o("WAWebBaseModel").prop()),
          (t.recipients = o("WAWebBaseModel").collection(
            r("WAWebBroadcastRecipientCollection"),
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return r("WAWebBroadcastMetadataCollection");
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "broadcast"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
