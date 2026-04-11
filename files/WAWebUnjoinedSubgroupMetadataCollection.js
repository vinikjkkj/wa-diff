__d(
  "WAWebUnjoinedSubgroupMetadataCollection",
  [
    "WAWebBaseCollection",
    "WAWebGroupMetadataCollection",
    "WAWebUnjoinedSubgroupMetadataModel",
    "WAWebUpdateSubgroupsCommunityAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this) || this),
          t.listenTo(t, "add", t.$UnjoinedSubgroupMetadataCollection$p_1),
          t.listenTo(t, "remove", t.$UnjoinedSubgroupMetadataCollection$p_1),
          t.listenTo(
            t,
            "change:parentGroupId",
            t.$UnjoinedSubgroupMetadataCollection$p_2,
          ),
          t
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.$UnjoinedSubgroupMetadataCollection$p_3 = function (t) {
          t &&
            o("WAWebUpdateSubgroupsCommunityAction").updateUnjoinedSubgroups(t);
        }),
        (n.$UnjoinedSubgroupMetadataCollection$p_1 = function (t) {
          var e = r("WAWebGroupMetadataCollection").get(
            t.parentGroupId.toString(),
          );
          this.$UnjoinedSubgroupMetadataCollection$p_3(e);
        }),
        (n.$UnjoinedSubgroupMetadataCollection$p_2 = function (t, n, o) {
          var e =
              n != null
                ? r("WAWebGroupMetadataCollection").get(n.toString())
                : null,
            a =
              o != null
                ? r("WAWebGroupMetadataCollection").get(o.toString())
                : null;
          (this.$UnjoinedSubgroupMetadataCollection$p_3(e),
            this.$UnjoinedSubgroupMetadataCollection$p_3(a));
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = r("WAWebUnjoinedSubgroupMetadataModel");
    var s = new e();
    l.default = s;
  },
  98,
);
