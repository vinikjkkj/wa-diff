__d(
  "WAWebCommunitySubgroupsLimitReachedPopup.react",
  ["fbt", "WAWebConfirmPopup.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.isCommunityCreation,
        n = t === void 0 ? !1 : t,
        r = e.maxSubgroups;
      return n
        ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            testid: void 0,
            onOK: o("WAWebModalManager").closeModalManager,
            children: s._(
              /*BTDS*/ '_j{"*":"You can only add {max_subgroup_count} groups when creating a community. You can add more after this community is created.","_1":"You can only add 1 group when creating a community. You can add more after this community is created."}',
              [s._plural(r - 1, "max_subgroup_count")],
            ),
          })
        : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            testid: void 0,
            onOK: o("WAWebModalManager").closeModalManager,
            children: s._(
              /*BTDS*/ '_j{"*":"Limit of {max_subgroups} groups reached.","_1":"Limit of 1 group reached."}',
              [s._plural(r - 1, "max_subgroups")],
            ),
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
