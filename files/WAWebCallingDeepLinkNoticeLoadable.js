__d(
  "WAWebCallingDeepLinkNoticeLoadable",
  [
    "JSResourceForInteraction",
    "WAWebFbtCommon",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WDSDialogBridge",
    "WDSTextLayout.react",
    "nullthrows",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(null);
    function p(e) {
      return s.jsx(m.Provider, {
        value: e,
        children: s.jsx(f, babelHelpers.extends({}, e)),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = r("WAWebLazyLoadedRetriable")(async function () {
        return r("nullthrows")(
          await r("JSResourceForInteraction")(
            "WAWebCallingDeepLinkNotice.react",
          )
            .__setRef("WAWebCallingDeepLinkNoticeLoadable")
            .load(),
        );
      }, "CallingDeepLinkNotice"),
      f = r("react-loadable")({ loader: _, delay: 0, loading: g });
    function g(e) {
      var t = e.error,
        n = e.retry,
        a = r("nullthrows")(d(m)),
        i = a.description,
        l = a.title;
      return s.jsx(
        "div",
        babelHelpers.extends(
          {
            "aria-label": String(l),
            "aria-modal": !0,
            "data-testid": "calling-deep-link-notice-loading",
            role: "dialog",
          },
          {
            0: { className: "x16w0wmm x1vd4hg5 x16xn7b0 x1n2onr6 xdzyupr" },
            1: {
              className:
                "x16w0wmm x16xn7b0 x1n2onr6 xdzyupr x9f619 xt7dq6l x1rpy74y x1odjw0f x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
            },
          }[(t != null) << 0],
          {
            children:
              t != null
                ? s.jsx(r("WDSTextLayout.react"), {
                    headline: l,
                    body: i,
                    primaryAction: {
                      label: h("Try again"),
                      onPress: n,
                      testid: "calling-deep-link-notice-retry",
                    },
                    secondaryAction: {
                      label: h("OK"),
                      onPress: o("WDSDialogBridge").closeWDSDialog,
                      testid: "calling-deep-link-notice-dismiss",
                    },
                  })
                : s.jsx(r("WAWebLazyLoadLoading.react"), { error: !1 }),
          },
        ),
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return r("WAWebFbtCommon")(e);
    }
    l.default = p;
  },
  98,
);
