__d(
  "WAWebRobotoVariableFontLoadable",
  [
    "JSResourceForInteraction",
    "WAWebEnvironment",
    "WAWebLazyLoadedRetriable",
    "WAWebRobotoFontMode",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect,
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WDSLoadRobotoVariableFont",
          )
            .__setRef("WAWebRobotoVariableFontLoadable")
            .load();
          return e;
        }),
        "WDSLoadRobotoVariableFont",
      );
    function c() {
      var e = o("WAWebRobotoFontMode").getWDSRobotoMode();
      return e === 3 ||
        (e === 2 && o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC)
        ? !0
        : !!(
            e === 1 &&
            (r("WAWebEnvironment").isWindows ||
              o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.WINDOWS)
          );
    }
    function d() {
      if (c()) {
        var e;
        (u(), (e = document.body) == null || e.classList.add("roboto-font"));
      } else {
        var t;
        (t = document.body) == null || t.classList.remove("roboto-font");
      }
    }
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        s(p, t));
    }
    function p() {
      d();
    }
    ((l.requireRobotoVariableFont = u),
      (l.isRobotoFontEnabled = c),
      (l.applyRobotoFont = d),
      (l.useApplyRobotoFont = m));
  },
  98,
);
