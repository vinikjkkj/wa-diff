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
    var e = ["backRef", "onBack", "orgId", "orgName", "showHeader"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        a = o("react-compiler-runtime").c(22),
        i,
        l,
        s,
        c,
        d,
        p;
      a[0] !== t
        ? ((i = t.backRef),
          (l = t.onBack),
          (s = t.orgId),
          (c = t.orgName),
          (p = t.showHeader),
          (d = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = s),
          (a[4] = c),
          (a[5] = d),
          (a[6] = p))
        : ((i = a[1]),
          (l = a[2]),
          (s = a[3]),
          (c = a[4]),
          (d = a[5]),
          (p = a[6]));
      var _ = p === void 0 ? !0 : p,
        f = r("useWAWebOrgInfoDisplayEnabled")(),
        g =
          (n = r("useWAWebOrgValues")(s, [
            o("WAWebOrgGetters").getOrgName,
            o("WAWebOrgGetters").getOrgViewerRole,
            o("WAWebOrgGetters").getOrgIsMemberDirectoryEnabled,
          ])) != null
            ? n
            : [""],
        h = g[0];
      if (
        !f ||
        !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(
          o("WAWebOrgCollection").OrgCollection.get(s),
        )
      )
        return null;
      var y;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "x78zum5 xdt5ytf x1iyjqo2 x2lwn1j" }), (a[7] = y))
        : (y = a[7]);
      var C;
      a[8] !== i || a[9] !== h || a[10] !== l || a[11] !== c || a[12] !== _
        ? ((C = _
            ? u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                backRef: i,
                onBack: l,
                title: c != null ? c : h,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              })
            : null),
          (a[8] = i),
          (a[9] = h),
          (a[10] = l),
          (a[11] = c),
          (a[12] = _),
          (a[13] = C))
        : (C = a[13]);
      var b;
      a[14] !== l || a[15] !== s || a[16] !== c || a[17] !== d
        ? ((b = u.jsx(
            m,
            babelHelpers.extends({}, d, {
              onBack: l,
              orgId: s,
              orgName: c,
              showHeader: !1,
            }),
          )),
          (a[14] = l),
          (a[15] = s),
          (a[16] = c),
          (a[17] = d),
          (a[18] = b))
        : (b = a[18]);
      var v;
      return (
        a[19] !== C || a[20] !== b
          ? ((v = u.jsxs(
              "div",
              babelHelpers.extends({}, y, {
                "data-testid": "org_member_directory_loadable",
                children: [C, b],
              }),
            )),
            (a[19] = C),
            (a[20] = b),
            (a[21] = v))
          : (v = a[21]),
        v
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
