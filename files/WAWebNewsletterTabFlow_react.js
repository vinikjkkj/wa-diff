__d(
  "WAWebNewsletterTabFlow.react",
  [
    "WATimeUtils",
    "WAWebDrawerManager",
    "WAWebNewNewsletterInfoDrawer.react",
    "WAWebNewsletterAdminFunnelLogging",
    "WAWebNewsletterCollection",
    "WAWebNewsletterDirectoryFlowLoadable",
    "WAWebNewsletterTabDrawer.react",
    "WAWebNewsletterTabFlowStep",
    "WAWebOpenNewsletterCreationFlow",
    "WAWebOpenNewsletterDirectory",
    "WAWebUserPrefsNewsletter",
    "WAWebWamEnumAdminFlowType",
    "cr:177",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e) {
      var t = u(0),
        a = e.onBack,
        i = e.initialStep,
        l =
          i === void 0
            ? o("WAWebNewsletterTabFlowStep").NewsletterTabFlowStep
                .NewsletterTab
            : i,
        c = e.adminFunnelLogger,
        d =
          c === void 0
            ? new (o(
                "WAWebNewsletterAdminFunnelLogging",
              ).NewsletterAdminFunnelLogger)(
                o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.CREATION,
              )
            : c,
        m = e.directoryEntryPoint,
        p = function () {
          (o("WAWebUserPrefsNewsletter").setNewsletterTabLastSeenTimestamp(
            o("WATimeUtils").unixTime(),
          ),
            r("WAWebNewsletterCollection").trigger("newsletter_tab_close"),
            a != null
              ? a()
              : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
        },
        _ = o("useWAWebFlow").useFlow(l, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: p,
        }),
        f = _[0],
        g = _[1],
        h = u(m),
        y = u(d),
        C = n("cr:177")();
      if (g.step == null) return null;
      var b;
      switch (g.step) {
        case o("WAWebNewsletterTabFlowStep").NewsletterTabFlowStep
          .NewsletterTab: {
          b = s.jsx(r("WAWebNewsletterTabDrawer.react"), {
            newsletters: C,
            onBack: p,
            initialScrollTop: t.current,
            setScrollTop: function (n) {
              t.current = n;
            },
            onCreateNewsletter: function () {
              o("WAWebOpenNewsletterCreationFlow").openNewsletterCreationFlow({
                tosAcceptCallback: function (t) {
                  (g.push(
                    o("WAWebNewsletterTabFlowStep").NewsletterTabFlowStep
                      .CreateNewsletter,
                  ),
                    (y.current = t));
                },
              });
            },
            onNewsletterDirectorySearch: function (t) {
              o("WAWebOpenNewsletterDirectory").openNewsletterDirectory({
                tosAcceptCallback: function () {
                  ((h.current = t),
                    g.push(
                      o("WAWebNewsletterTabFlowStep").NewsletterTabFlowStep
                        .NewsletterDirectoryFlow,
                    ));
                },
              });
            },
          });
          break;
        }
        case o("WAWebNewsletterTabFlowStep").NewsletterTabFlowStep
          .CreateNewsletter: {
          b = s.jsx(r("WAWebNewNewsletterInfoDrawer.react"), {
            onBack: function () {
              return g.pop();
            },
            adminFunnelLoggerRef: y,
          });
          break;
        }
        case o("WAWebNewsletterTabFlowStep").NewsletterTabFlowStep
          .NewsletterDirectoryFlow: {
          b = s.jsx(
            o("WAWebNewsletterDirectoryFlowLoadable")
              .NewsletterDirectoryFlowLoadable,
            {
              directoryEntryPoint: h.current,
              onBack: function () {
                return g.pop();
              },
            },
          );
          break;
        }
      }
      return s.jsx(f, { flow: g, children: b });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.NewsletterTabFlow = c));
  },
  98,
);
