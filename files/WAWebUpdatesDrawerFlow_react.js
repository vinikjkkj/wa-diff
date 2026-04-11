__d(
  "WAWebUpdatesDrawerFlow.react",
  [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebDrawerManager",
    "WAWebHiddenUpdatesDrawer.react",
    "WAWebNewNewsletterInfoDrawer.react",
    "WAWebNewsletterAdminFunnelLogging",
    "WAWebNewsletterCollection",
    "WAWebNewsletterDirectoryFlowLoadable",
    "WAWebOpenNewsletterCreationFlow",
    "WAWebOpenNewsletterDirectory",
    "WAWebPrivacySettingsStatusPostDrawer.react",
    "WAWebUpdatesDrawer.react",
    "WAWebUserPrefsNewsletter",
    "WAWebWamEnumAdminFlowType",
    "cr:177",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef,
      c = 0,
      d = n("$InternalEnum").Mirrored([
        "UpdatesDrawer",
        "NewsletterDirectoryFlow",
        "StatusPrivacySettingDrawer",
        "CreateNewsletter",
        "HiddenUpdatesDrawer",
      ]);
    function m(e) {
      var t = e.onBack,
        a = e.initialStep,
        i = a === void 0 ? d.UpdatesDrawer : a,
        l = e.directoryEntryPoint,
        m = e.adminFunnelLogger,
        p =
          m === void 0
            ? new (o(
                "WAWebNewsletterAdminFunnelLogging",
              ).NewsletterAdminFunnelLogger)(
                o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.CREATION,
              )
            : m,
        _ = function () {
          (o("WAWebUserPrefsNewsletter").setNewsletterTabLastSeenTimestamp(
            o("WATimeUtils").unixTime(),
          ),
            r("WAWebNewsletterCollection").trigger("updates_tab_close"),
            t != null
              ? t()
              : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
        },
        f = function () {
          y.pop();
        },
        g = o("useWAWebFlow").useFlow(i, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: _,
        }),
        h = g[0],
        y = g[1],
        C = u(l),
        b = u(p),
        v = n("cr:177")();
      if (y.step == null) return null;
      var S = function () {
          y.push(d.HiddenUpdatesDrawer);
        },
        R;
      switch (y.step) {
        case d.UpdatesDrawer:
          R = s.jsx(r("WAWebUpdatesDrawer.react"), {
            onBack: _,
            onOpenStatusPrivacySettingDrawer: function () {
              y.push(d.StatusPrivacySettingDrawer);
            },
            onOpenHiddenUpdates: S,
            newsletters: v,
            initialScrollTop: c,
            setScrollTop: function (t) {
              c = t;
            },
            onCreateNewsletter: function () {
              o("WAWebOpenNewsletterCreationFlow").openNewsletterCreationFlow({
                tosAcceptCallback: function (t) {
                  (y.push(d.CreateNewsletter), (b.current = t));
                },
              });
            },
            onNewsletterDirectorySearch: function (t) {
              o("WAWebOpenNewsletterDirectory").openNewsletterDirectory({
                tosAcceptCallback: function () {
                  ((C.current = t), y.push(d.NewsletterDirectoryFlow));
                },
              });
            },
          });
          break;
        case d.CreateNewsletter: {
          R = s.jsx(r("WAWebNewNewsletterInfoDrawer.react"), {
            onBack: function () {
              return y.pop();
            },
            adminFunnelLoggerRef: b,
          });
          break;
        }
        case d.NewsletterDirectoryFlow:
          R = s.jsx(
            o("WAWebNewsletterDirectoryFlowLoadable")
              .NewsletterDirectoryFlowLoadable,
            {
              directoryEntryPoint: C.current,
              onBack: function () {
                return y.pop();
              },
            },
          );
          break;
        case d.StatusPrivacySettingDrawer:
          R = s.jsx(r("WAWebPrivacySettingsStatusPostDrawer.react"), {
            onClose: f,
          });
          break;
        case d.HiddenUpdatesDrawer:
          R = s.jsx(r("WAWebHiddenUpdatesDrawer.react"), { onBack: f });
          break;
      }
      return s.jsx(h, { flow: y, children: R });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
