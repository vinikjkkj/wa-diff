__d(
  "WAWebBizAiSmartComposerWrapperLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebModalLoadable",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState,
      p = r("JSResourceForInteraction")(
        "WAWebBizAiSmartComposerWrapper.react",
      ).__setRef("WAWebBizAiSmartComposerWrapperLoadable"),
      _ = r("WAWebModalLoadable")(p, "BizAiSmartComposerWrapper", function () {
        return u.jsx(u.Fragment, {});
      }),
      f = r("WAWebLazyLoadedRetriable")(function () {
        return p.load();
      }, "BizAiSmartComposerWrapper");
    function g(t) {
      var n = m(function () {
          return p.getModuleIfRequired() != null;
        }),
        a = n[0],
        i = n[1];
      return (
        d(
          function () {
            if (!(!t || a)) {
              var n = !1,
                l = function () {
                  n || i(!0);
                };
              return (
                p.load().then(l, function (t) {
                  (o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Smart composer wrapper failed to load",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("biz-ai-smart-composer-wrapper-load-failed"),
                    l());
                }),
                function () {
                  n = !0;
                }
              );
            }
          },
          [t, a],
        ),
        a
      );
    }
    ((l.WAWebBizAiSmartComposerWrapperLoadable = _),
      (l.requireBundle = f),
      (l.useWAWebBizAiSmartComposerWrapperReady = g));
  },
  98,
);
