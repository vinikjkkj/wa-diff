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
    "useWAWebSourceSnapshot",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["onBack", "orgName", "showHeader"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        a = o("react-compiler-runtime").c(18),
        i,
        l,
        s,
        c;
      a[0] !== t
        ? ((i = t.onBack),
          (l = t.orgName),
          (c = t.showHeader),
          (s = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = s),
          (a[4] = c))
        : ((i = a[1]), (l = a[2]), (s = a[3]), (c = a[4]));
      var m = c === void 0 ? !0 : c,
        _ = r("useWAWebOrgInfoDisplayEnabled")(),
        f = r("useWAWebSourceSnapshot")(
          o("WAWebOrgCollection").OrgCollection,
          "add remove reset sort change",
          d,
        ),
        g = f[0],
        h =
          (n = r("useWAWebOrgValues")(g == null ? void 0 : g.id, [
            o("WAWebOrgGetters").getOrgName,
          ])) != null
            ? n
            : [""],
        y = h[0];
      if (!_ || !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(g))
        return null;
      var C;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { className: "x78zum5 xdt5ytf x1iyjqo2 x2lwn1j" }), (a[5] = C))
        : (C = a[5]);
      var b;
      a[6] !== y || a[7] !== i || a[8] !== l || a[9] !== m
        ? ((b = m
            ? u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                onBack: i,
                title: l != null ? l : y,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              })
            : null),
          (a[6] = y),
          (a[7] = i),
          (a[8] = l),
          (a[9] = m),
          (a[10] = b))
        : (b = a[10]);
      var v;
      a[11] !== i || a[12] !== l || a[13] !== s
        ? ((v = u.jsx(
            p,
            babelHelpers.extends({}, s, {
              onBack: i,
              orgName: l,
              showHeader: !1,
            }),
          )),
          (a[11] = i),
          (a[12] = l),
          (a[13] = s),
          (a[14] = v))
        : (v = a[14]);
      var S;
      return (
        a[15] !== b || a[16] !== v
          ? ((S = u.jsxs(
              "div",
              babelHelpers.extends({}, C, {
                "data-testid": "org_member_directory_loadable",
                children: [b, v],
              }),
            )),
            (a[15] = b),
            (a[16] = v),
            (a[17] = S))
          : (S = a[17]),
        S
      );
    }
    function d(e) {
      return e.getOrderedOrgs();
    }
    var m = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebOrgMemberDirectoryPicker.react",
          )
            .__setRef("WAWebOrgMemberDirectoryPickerLoadable")
            .load();
        }),
        "OrgMemberDirectoryPicker",
      ),
      p = r("WAWebLoadable")({
        loader: m,
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
