__d(
  "WAWebCommunitySubgroupsMaxReached",
  [
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySubgroupsLimitReachedPopup.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("WAWebCommunityGatingUtils").getParentGroupLinkLimit(),
        n = e ? e.joinedSubgroups.length : 0,
        a = e ? e.unjoinedSubgroups.length : 0,
        i = n + a,
        l = function () {
          o("WAWebModalManager").ModalManager.open(
            s.jsx(r("WAWebCommunitySubgroupsLimitReachedPopup.react"), {
              maxSubgroups: t,
            }),
          );
        };
      return i >= t ? (l(), !0) : !1;
    }
    l.subgroupsMaxReached = u;
  },
  98,
);
