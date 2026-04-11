__d(
  "WAWebSubgroupSuggestionModel",
  ["WAWebBaseModel", "WAWebCellRequestState", "WAWebContactCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.groupId = o("WAWebBaseModel").prop()),
          (t.parentGroupId = o("WAWebBaseModel").prop()),
          (t.subject = o("WAWebBaseModel").prop()),
          (t.desc = o("WAWebBaseModel").prop()),
          (t.owner = o("WAWebBaseModel").prop()),
          (t.t = o("WAWebBaseModel").prop()),
          (t.isExistingGroup = o("WAWebBaseModel").prop()),
          (t.participantCount = o("WAWebBaseModel").prop()),
          (t.hiddenSubgroup = o("WAWebBaseModel").prop()),
          (t.ownerContact = o("WAWebBaseModel").session()),
          (t.currentState = o("WAWebBaseModel").session()),
          (t.error = o("WAWebBaseModel").session()),
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
              "ownerContact",
              o("WAWebContactCollection").ContactCollection.gadd(this.owner),
            ),
            this.resetState());
        }),
        (n.resetState = function () {
          ((this.currentState = o("WAWebCellRequestState").State.Pending),
            (this.error = void 0));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "subgroup_suggestion";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
