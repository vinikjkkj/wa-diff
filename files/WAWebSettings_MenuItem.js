__d(
  "WAWebSettings.MenuItem",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawerManager",
    "WAWebMenuItems.react",
    "WAWebSettingsFlowLoadable",
    "WAWebSettingsStepIcon.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? { descriptorType: "settings", initialStep: e }
          : s.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
              onEnd: o("WAWebDrawerManager").closeDrawerLeft,
              initialStep: e,
            }),
      );
    }
    function c(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(23),
        i = e.border,
        l = e.isRefresh,
        u = e.onSelect,
        c = e.setting,
        d = e.showIcon,
        m;
      if (
        a[0] !== ((t = c.parent) == null ? void 0 : t.step) ||
        a[1] !== c.step ||
        a[2] !== d
      ) {
        var p, _, f;
        ((m = d
          ? s.jsx(r("WAWebSettingsStepIcon.react"), {
              setting:
                (p = (_ = c.parent) == null ? void 0 : _.step) != null
                  ? p
                  : c.step,
            })
          : " "),
          (a[0] = (f = c.parent) == null ? void 0 : f.step),
          (a[1] = c.step),
          (a[2] = d),
          (a[3] = m));
      } else m = a[3];
      var g = m,
        h;
      if (l === !0) {
        var y;
        (a[4] !== c
          ? ((y =
              (c == null ? void 0 : c.secondaryTitle) != null &&
              (c == null ? void 0 : c.secondaryTitle())),
            (a[4] = c),
            (a[5] = y))
          : (y = a[5]),
          (h = y));
      } else {
        var C;
        if (a[6] !== c.parent) {
          var b;
          ((C = (b = c.parent) == null ? void 0 : b.title()),
            (a[6] = c.parent),
            (a[7] = C));
        } else C = a[7];
        h = C;
      }
      var v;
      a[8] !== c
        ? ((v =
            c.color != null
              ? s.jsx(o("WAWebText.react").WAWebTextColor, {
                  color: c.color,
                  children: c.title(),
                })
              : c.title()),
          (a[8] = c),
          (a[9] = v))
        : (v = a[9]);
      var S = v,
        R = c.color === "critical" ? "negative" : void 0,
        L;
      a[10] !== c.isDevOnly
        ? ((L =
            c.isDevOnly === !0 &&
            s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {})),
          (a[10] = c.isDevOnly),
          (a[11] = L))
        : (L = a[11]);
      var E = (n = c.testid) != null ? n : "settings-search-" + c.id,
        k;
      return (
        a[12] !== i ||
        a[13] !== R ||
        a[14] !== g ||
        a[15] !== l ||
        a[16] !== u ||
        a[17] !== S ||
        a[18] !== h ||
        a[19] !== c.id ||
        a[20] !== L ||
        a[21] !== E
          ? ((k = s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              optionId: c.id,
              onSelect: u,
              detailLeft: g,
              primary: S,
              secondary: h,
              detailRight: L,
              testid: E,
              border: i,
              isRefresh: l,
              textWrap: "wrap",
              colorScheme: R,
            })),
            (a[12] = i),
            (a[13] = R),
            (a[14] = g),
            (a[15] = l),
            (a[16] = u),
            (a[17] = S),
            (a[18] = h),
            (a[19] = c.id),
            (a[20] = L),
            (a[21] = E),
            (a[22] = k))
          : (k = a[22]),
        k
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onSelect,
        r = e.settings,
        a;
      if (t[0] !== n || t[1] !== r) {
        var i = new Set();
        ((a = r.map(function (e) {
          var t = !1;
          if (e.parent == null || !i.has(e.parent.step)) {
            var r, o;
            ((t = !0),
              i.add(
                (r = (o = e.parent) == null ? void 0 : o.step) != null
                  ? r
                  : e.step,
              ));
          }
          return s.jsx(
            c,
            {
              setting: e,
              showIcon: t,
              onSelect: function () {
                return n(e);
              },
            },
            e.id,
          );
        })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a));
      } else a = t[2];
      return a;
    }
    ((l.openSettingDrawer = u), (l.SettingsMenuItem = c), (l.SettingsMenu = d));
  },
  98,
);
