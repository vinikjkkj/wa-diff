__d(
  "WAWebBroadcastMetadataModel",
  [
    "WAWebAudienceExpressionTypes",
    "WAWebBaseModel",
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
          (t.recipients = o("WAWebBaseModel").collection(
            r("WAWebBroadcastRecipientCollection"),
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "broadcast"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
