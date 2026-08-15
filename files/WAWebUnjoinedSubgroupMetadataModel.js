__d(
  "WAWebUnjoinedSubgroupMetadataModel",
  [
    "WAWebBaseModel",
    "WAWebGroupParticipantCollection",
    "WAWebGroupType",
    "WAWebUnjoinedSubgroupMetadataGetters",
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
          (t.subject = o("WAWebBaseModel").prop()),
          (t.subjectTime = o("WAWebBaseModel").prop()),
          (t.parentGroupId = o("WAWebBaseModel").prop()),
          (t.defaultSubgroup = o("WAWebBaseModel").prop()),
          (t.generalSubgroup = o("WAWebBaseModel").prop()),
          (t.desc = o("WAWebBaseModel").prop()),
          (t.creation = o("WAWebBaseModel").prop()),
          (t.owner = o("WAWebBaseModel").prop()),
          (t.size = o("WAWebBaseModel").prop()),
          (t.adminRequestRequired = o("WAWebBaseModel").prop()),
          (t.membershipApprovalMode = o("WAWebBaseModel").prop()),
          (t.membershipApprovalRequest = o("WAWebBaseModel").prop()),
          (t.hiddenSubgroup = o("WAWebBaseModel").prop()),
          (t.suspended = o("WAWebBaseModel").prop()),
          (t.participants = o("WAWebBaseModel").collection(
            r("WAWebGroupParticipantCollection"),
          )),
          (t.groupType = o("WAWebBaseModel").derived(
            function () {
              return this.defaultSubgroup === !0
                ? o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                : this.generalSubgroup === !0
                  ? o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
                  : o("WAWebGroupType").GroupType.LINKED_SUBGROUP;
            },
            ["defaultSubgroup", "generalSubgroup"],
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.delete = function () {
          (e.prototype.delete.call(this),
            o(
              "WAWebUnjoinedSubgroupMetadataGetters",
            ).clearUnjoinedSubgroupMetadataGetterCacheFor(this));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "unjoinedSubgroupMetadata"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
