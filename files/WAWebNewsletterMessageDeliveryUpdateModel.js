__d(
  "WAWebNewsletterMessageDeliveryUpdateModel",
  ["WAWebBaseModel", "WAWebMsgKey"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.serverId = o("WAWebBaseModel").prop()),
          (t.msgModel = o("WAWebBaseModel").prop()),
          (t.code = o("WAWebBaseModel").prop()),
          (t.t = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          e.prototype.initialize.call(this);
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "newsletter_message_update"), (e.idClass = r("WAWebMsgKey")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterMessageDeliveryUpdate = s;
  },
  98,
);
