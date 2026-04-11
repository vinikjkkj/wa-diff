__d(
  "WAWebCommunitySubgroupsLimitReachedPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.isCommunityCreation,
        r = e.maxSubgroups,
        a = n === void 0 ? !1 : n;
      if (a) {
        var i;
        t[0] !== r
          ? ((i = s._(
              /*BTDS*/ '_j{"*":"You can only add {max_subgroup_count} groups when creating a community. You can add more after this community is created.","_1":"You can only add 1 group when creating a community. You can add more after this community is created."}',
              [s._plural(r - 1, "max_subgroup_count")],
            )),
            (t[0] = r),
            (t[1] = i))
          : (i = t[1]);
        var l;
        return (
          t[2] !== i
            ? ((l = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                testid: void 0,
                onOK: o("WAWebModalManager").closeModalManager,
                children: i,
              })),
              (t[2] = i),
              (t[3] = l))
            : (l = t[3]),
          l
        );
      }
      var c;
      return (
        t[4] !== r
          ? ((c = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: void 0,
              onOK: o("WAWebModalManager").closeModalManager,
              children: s._(
                /*BTDS*/ '_j{"*":"Limit of {max_subgroups} groups reached.","_1":"Limit of 1 group reached."}',
                [s._plural(r - 1, "max_subgroups")],
              ),
            })),
            (t[4] = r),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = c;
  },
  226,
);
