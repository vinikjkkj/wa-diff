__d(
  "WAWebNewsletterDirectoryFlow.react",
  [
    "$InternalEnum",
    "WAWebDrawerManager",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebNewsletterDirectoryCategoriesDrawer.react",
    "WAWebNewsletterDirectoryDrawer.react",
    "WAWebNewsletterDirectoryFunnelLogging",
    "WAWebNewsletterGatingUtils",
    "WAWebUserPrefsMeUser",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState,
      f = n("$InternalEnum").Mirrored([
        "NewsletterDirectoryCategories",
        "NewsletterDirectoryList",
      ]);
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.directoryEntryPoint,
        l = a.onBack,
        s = m(function () {
          return new (o(
            "WAWebNewsletterDirectoryFunnelLogging",
          ).NewsletterDirectoryFunnelLogger)();
        }, []),
        c = function () {
          (s.logDirectoryClose(),
            l != null
              ? l()
              : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
        },
        g = o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterDirectoryCategoriesEnabled()
          ? f.NewsletterDirectoryCategories
          : f.NewsletterDirectoryList,
        h = o("useWAWebFlow").useFlow(g, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: c,
        }),
        y = h[0],
        C = h[1],
        b = d(
          function () {
            (C.pop(), s.resetValuesForDirectoryCategoriesPage());
          },
          [C, s],
        ),
        v = p(i),
        S = _(
          o(
            "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
          ).getCountryCodeIso(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
          ),
        ),
        R = S[0],
        L = S[1],
        E = _(null),
        k = E[0],
        I = E[1];
      if (C.step == null) return null;
      var T;
      switch (C.step) {
        case f.NewsletterDirectoryList: {
          T = u.jsx(r("WAWebNewsletterDirectoryDrawer.react"), {
            entryPoint: v.current,
            onBack: b,
            selectedCountryCode: R,
            selectedCategory: k,
            newsletterDirectoryFunnelLogger: s,
          });
          break;
        }
        case f.NewsletterDirectoryCategories: {
          T = u.jsx(r("WAWebNewsletterDirectoryCategoriesDrawer.react"), {
            entryPoint: v.current,
            onBack: function () {
              return C.pop();
            },
            onSeeAllNewsletters: function (t, n, r) {
              ((v.current = t), L(n), I(r), C.push(f.NewsletterDirectoryList));
            },
            selectedCountryCode: R,
            newsletterDirectoryFunnelLogger: s,
          });
          break;
        }
      }
      return u.jsx(y, { flow: C, ref: n, children: T });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.NewsletterDirectoryFlowStep = f),
      (l.NewsletterDirectoryFlow = g));
  },
  98,
);
