__d(
  "WAWebGroupMembershipApprovalRequestModel",
  ["WAWebBaseModel", "WAWebContactCollection", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.t = o("WAWebBaseModel").prop()),
          (t.addedBy = o("WAWebBaseModel").prop()),
          (t.requestMethod = o("WAWebBaseModel").prop()),
          (t.parentGroupId = o("WAWebBaseModel").prop()),
          (t.contact = o("WAWebBaseModel").session()),
          (t.addedByContact = o("WAWebBaseModel").session()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          (e.prototype.initialize.call(this),
            this.addChild(
              "contact",
              o("WAWebContactCollection").ContactCollection.gadd(this.id),
            ),
            this.addChild(
              "addedByContact",
              o("WAWebContactCollection").ContactCollection.gadd(this.addedBy),
            ));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "membership_approval_request"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
