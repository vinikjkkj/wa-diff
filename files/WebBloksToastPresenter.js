__d(
  "WebBloksToastPresenter",
  [
    "WebBloksFocusScopeQueries",
    "WebBloksScreen",
    "WebBloksScreenHost",
    "WebBloksStyle",
    "WebBloksTreeResources",
    "react",
    "useWebBloksAccessibilityModule",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = o("WebBloksStyle").createStyles({
        root: { display: "flex", justifyContent: "center" },
        defaultRoot: {
          bottom: 0,
          left: 0,
          position: "fixed !important",
          right: 0,
          width: "100%",
          zIndex: 100,
        },
        defaultInnerContainer: { transform: "translateY(0)" },
        defaultInnerContainerHidden: { transform: "translateY(100%)" },
        miniToastRoot: {
          alignItems: "center !important",
          boxSizing: "border-box",
          bottom: "50%",
          display: "flex",
          flexDirection: "column",
          left: 0,
          overflow: "hidden",
          position: "fixed !important",
          right: 0,
          zIndex: 100,
        },
        miniToastInnerContainer: {
          opacity: 1,
          transitionProperty: "opacity!important",
        },
        miniToastInnerContainerHidden: {
          opacity: 0,
          transitionProperty: "opacity!important",
        },
      });
    function p(e) {
      var t = e.objectSet,
        n = t.toastManager,
        a = d(function () {
          return n.getEmptyState();
        }),
        i = a[0],
        l = a[1];
      c(
        function () {
          var e = n.addListener(l);
          return function () {
            e.remove();
          };
        },
        [n],
      );
      var u = r("useWebBloksAccessibilityModule")(),
        p = u.FocusRegion,
        _ = i.currentToast,
        f = i.isToastHiding,
        g = o("WebBloksStyle").classNames(
          m.defaultInnerContainer,
          (_ == null || f) && m.defaultInnerContainerHidden,
        ),
        h = o("WebBloksStyle").classNames(
          m.miniToastInnerContainer,
          (_ == null || f) && m.miniToastInnerContainerHidden,
        ),
        y = null,
        C = null,
        b = 0,
        v = "ease-out";
      if (_ != null) {
        switch (_.type) {
          case "simple": {
            y = _.component;
            break;
          }
          case "bloksModel": {
            var S = o("WebBloksScreen").WebBloksScreen.fromBloksModel(
              t,
              _.model,
              o("WebBloksTreeResources").WebBloksTreeResources.empty(),
              { isModal: !1, isEmbedded: !0 },
            );
            y = s.jsx(r("WebBloksScreenHost"), { screen: S }, S.screenId);
            break;
          }
          case "bloksParseResult": {
            var R = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
              t,
              _.parseResult,
              { isModal: !1, isEmbedded: !0 },
            );
            y = s.jsx(r("WebBloksScreenHost"), { screen: R }, R.screenId);
            break;
          }
          case "mini": {
            C = _.component;
            break;
          }
        }
        f
          ? ((b = _.options.showAnimationDurationMs / 1e3),
            (v = _.options.showAnimationInterpolator))
          : ((b = _.options.dismissAnimationDurationMs / 1e3),
            (v = _.options.dismissAnimationInterpolator));
      }
      return (
        y != null &&
          (y = s.jsx(p, {
            autoFocusQuery: o("WebBloksFocusScopeQueries").tabbableScopeQuery,
            autoRestoreFocus: !0,
            containFocusQuery: o("WebBloksFocusScopeQueries")
              .tabbableScopeQuery,
            children: y,
          })),
        C != null &&
          (C = s.jsx(p, {
            autoFocusQuery: o("WebBloksFocusScopeQueries").tabbableScopeQuery,
            autoRestoreFocus: !0,
            containFocusQuery: o("WebBloksFocusScopeQueries")
              .tabbableScopeQuery,
            children: C,
          })),
        s.jsxs("div", {
          role: f ? void 0 : "alert",
          "aria-atomic": "true",
          name: "WebBloksToastPresenter",
          "data-testid": void 0,
          className: m.root,
          children: [
            s.jsx("div", {
              className: m.defaultRoot,
              children: s.jsx("div", {
                className: g,
                style: { transition: "transform " + b + "s " + v },
                children: y,
              }),
            }),
            s.jsx("div", {
              className: m.miniToastRoot,
              children: s.jsx("div", {
                className: h,
                style: { transition: "opacity " + b + "s " + v },
                children: C,
              }),
            }),
          ],
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
