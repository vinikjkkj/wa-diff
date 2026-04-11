__d(
  "WAWebUnjoinedSubgroupMetadataModel",
  [
    "fbt",
    "WAWebBaseModel",
    "WAWebGroupParticipantCollection",
    "WAWebGroupType",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l, s) {
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
          (t.displayedDesc = o("WAWebBaseModel").derived(
            function () {
              return this.groupType ===
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
                (this.desc == null || this.desc === "")
                ? s
                    ._(
                      /*BTDS*/ "Get the latest announcements from the admins of this community.",
                    )
                    .toString()
                : this.desc;
            },
            ["desc", "groupType"],
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "unjoinedSubgroupMetadata"), (e.idClass = r("WAWebWid")));
    var u = o("WAWebBaseModel").defineModel(e);
    l.default = u;
  },
  226,
);
