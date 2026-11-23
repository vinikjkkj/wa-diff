__d(
  "MAIBABottomSheetContextProvider",
  [
    "AdsHelpTrayBottomSheetContext",
    "CometPlaceholder.react",
    "JSResource",
    "lazyLoadComponent",
    "react",
    "requireDeferred",
    "useBoolean",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useMemo,
      m = u.useState,
      p = r("requireDeferred")("resolveMAIBABottomSheetContent").__setRef(
        "MAIBABottomSheetContextProvider",
      ),
      _ = r("lazyLoadComponent")(
        r("JSResource")("AdsAIBottomSheet.react").__setRef(
          "MAIBABottomSheetContextProvider",
        ),
      );
    function f(e) {
      var t,
        n = e.children,
        a = r("useBoolean")(!1),
        l = a.setFalse,
        u = a.setTrue,
        f = a.value,
        g = m(null),
        h = g[0],
        y = g[1];
      c(
        function () {
          f || y(null);
        },
        [f],
      );
      var C = d(
        function () {
          return {
            isShown: f,
            hide: l,
            show: async function (t) {
              var e = t.useCase,
                n = t.useCaseParams,
                r = n === void 0 ? {} : n,
                o = t.onHide,
                a = t.onShow;
              if (!f) {
                u();
                try {
                  var i = await p.load(),
                    s = await i(e, r, function () {
                      (l(), o == null || o());
                    });
                  (y(babelHelpers.extends({}, s, { onHide: o })),
                    a == null || a());
                } catch (e) {
                  throw (l(), o == null || o(), e);
                }
              }
            },
          };
        },
        [f, l, u],
      );
      return s.jsxs(
        o("AdsHelpTrayBottomSheetContext").AdsHelpTrayBottomSheetContext
          .Provider,
        {
          value: C,
          children: [
            n,
            s.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: i.id,
              children: s.jsx(_, {
                children: h == null ? void 0 : h.content,
                footer:
                  (t = h == null ? void 0 : h.footer) != null ? t : void 0,
                isShown: f,
                onHide: function () {
                  (l(), h == null || h.onHide == null || h.onHide());
                },
                title: h == null ? void 0 : h.title,
              }),
            }),
          ],
        },
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
