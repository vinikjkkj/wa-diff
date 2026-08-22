__d(
  "WAWebBizAiSmartComposerWrapperLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebModalLoadable",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(4),
        a = m(h),
        i = a[0],
        l = a[1],
        s,
        u;
      return (
        n[0] !== t || n[1] !== i
          ? ((s = function () {
              if (!(!t || i)) {
                var n = !1,
                  a = function () {
                    n || l(!0);
                  };
                return (
                  p.load().then(a, function (t) {
                    (o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Smart composer wrapper failed to load",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t))
                      .sendLogs("biz-ai-smart-composer-wrapper-load-failed"),
                      a());
                  }),
                  function () {
                    n = !0;
                  }
                );
              }
            }),
            (u = [t, i]),
            (n[0] = t),
            (n[1] = i),
            (n[2] = s),
            (n[3] = u))
          : ((s = n[2]), (u = n[3])),
        d(s, u),
        i
      );
    }
    function h() {
      return p.getModuleIfRequired() != null;
    }
    ((l.WAWebBizAiSmartComposerWrapperLoadable = _),
      (l.requireBundle = f),
      (l.useWAWebBizAiSmartComposerWrapperReady = g));
  },
  98,
);
