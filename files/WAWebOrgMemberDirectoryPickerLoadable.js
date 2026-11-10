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
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebOrgInfoDisplayEnabled",
    "useWAWebOrgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["onBack", "orgId", "orgName", "showHeader"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        a = o("react-compiler-runtime").c(20),
        i,
        l,
        s,
        c,
        d;
      a[0] !== t
        ? ((i = t.onBack),
          (l = t.orgId),
          (s = t.orgName),
          (d = t.showHeader),
          (c = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = s),
          (a[4] = c),
          (a[5] = d))
        : ((i = a[1]), (l = a[2]), (s = a[3]), (c = a[4]), (d = a[5]));
      var p = d === void 0 ? !0 : d,
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
      if (
        !_ ||
        !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(
          o("WAWebOrgCollection").OrgCollection.get(l),
        )
      )
        return null;
      var h;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { className: "x78zum5 xdt5ytf x1iyjqo2 x2lwn1j" }), (a[6] = h))
        : (h = a[6]);
      var y;
      a[7] !== g || a[8] !== i || a[9] !== s || a[10] !== p
        ? ((y = p
            ? u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                onBack: i,
                title: s != null ? s : g,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              })
            : null),
          (a[7] = g),
          (a[8] = i),
          (a[9] = s),
          (a[10] = p),
          (a[11] = y))
        : (y = a[11]);
      var C;
      a[12] !== i || a[13] !== l || a[14] !== s || a[15] !== c
        ? ((C = u.jsx(
            m,
            babelHelpers.extends({}, c, {
              onBack: i,
              orgId: l,
              orgName: s,
              showHeader: !1,
            }),
          )),
          (a[12] = i),
          (a[13] = l),
          (a[14] = s),
          (a[15] = c),
          (a[16] = C))
        : (C = a[16]);
      var b;
      return (
        a[17] !== y || a[18] !== C
          ? ((b = u.jsxs(
              "div",
              babelHelpers.extends({}, h, {
                "data-testid": "org_member_directory_loadable",
                children: [y, C],
              }),
            )),
            (a[17] = y),
            (a[18] = C),
            (a[19] = b))
          : (b = a[19]),
        b
      );
    }
    var d = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebOrgMemberDirectoryPicker.react",
          )
            .__setRef("WAWebOrgMemberDirectoryPickerLoadable")
            .load();
        }),
        "OrgMemberDirectoryPicker",
      ),
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
