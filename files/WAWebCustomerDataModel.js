__d(
  "WAWebCustomerDataModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.chatJid = o("WAWebBaseModel").prop()),
          (t.contactType = o("WAWebBaseModel").prop()),
          (t.email = o("WAWebBaseModel").prop()),
          (t.altPhoneNumbers = o("WAWebBaseModel").prop()),
          (t.birthday = o("WAWebBaseModel").prop()),
          (t.address = o("WAWebBaseModel").prop()),
          (t.acquisitionSource = o("WAWebBaseModel").prop()),
          (t.leadStage = o("WAWebBaseModel").prop()),
          (t.lastOrder = o("WAWebBaseModel").prop()),
          (t.createdAt = o("WAWebBaseModel").prop()),
          (t.modifiedAt = o("WAWebBaseModel").prop()),
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
    e.Proxy = "customerData2";
    var s = o("WAWebBaseModel").defineModel(e);
    l.CustomerData = s;
  },
  98,
);
