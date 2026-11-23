__d(
  "WAWebOrgMemberDirectoryPickerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebDrawerHeader.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebNetworkStatus",
    "WAWebOrgCollection",
    "WAWebOrgGetters",
    "WAWebOrgMemberSearchErrorRow.react",
    "WAWebOrgMemberSearchLoadingRow.react",
    "WAWebOrgViewerRoleUtils",
    "react",
    "useWAWebOrgInfoDisplayEnabled",
    "useWAWebOrgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["backRef", "onBack", "orgId", "orgName", "showHeader"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        a = t.backRef,
        i = t.onBack,
        l = t.orgId,
        s = t.orgName,
        c = t.showHeader,
        d = c === void 0 ? !0 : c,
        p = babelHelpers.objectWithoutPropertiesLoose(t, e),
        _ = r("useWAWebOrgInfoDisplayEnabled")(),
        f =
          (n = r("useWAWebOrgValues")(l, [
            o("WAWebOrgGetters").getOrgName,
            o("WAWebOrgGetters").getOrgViewerRole,
            o("WAWebOrgGetters").getOrgIsMemberDirectoryEnabled,
          ])) != null
            ? n
            : [""],
        g = f[0];
      return !_ ||
        !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(
          o("WAWebOrgCollection").OrgCollection.get(l),
        )
        ? null
        : u.jsxs("div", {
            className: "x78zum5 xdt5ytf x1iyjqo2 x2lwn1j",
            "data-testid": "org_member_directory_loadable",
            children: [
              d
                ? u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                    backRef: a,
                    onBack: i,
                    title: s != null ? s : g,
                    type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                  })
                : null,
              u.jsx(
                m,
                babelHelpers.extends({}, p, {
                  onBack: i,
                  orgId: l,
                  orgName: s,
                  showHeader: !1,
                }),
              ),
            ],
          });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebOrgMemberDirectoryPicker.react",
        )
          .__setRef("WAWebOrgMemberDirectoryPickerLoadable")
          .load();
      }, "OrgMemberDirectoryPicker"),
      m = r("WAWebLoadable")({
        loader: d,
        renderLoadingImmediately: !0,
        loading: function (t) {
          var e = t.error,
            n = t.retry;
          return e != null
            ? u.jsx(r("WAWebOrgMemberSearchErrorRow.react"), {
                canRetry: !0,
                failure: r("WAWebNetworkStatus").online
                  ? "unavailable"
                  : "offline",
                onRetry: n,
              })
            : u.jsx(r("WAWebOrgMemberSearchLoadingRow.react"), {});
        },
      });
    l.WAWebOrgMemberDirectoryPickerLoadable = c;
  },
  98,
);
