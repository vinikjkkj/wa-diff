__d(
  "WAWebLocaleManualUpdateButterbar.react",
  [
    "fbt",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebL10N",
    "WDSBanner.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAsync",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = function () {
        return {
          dir: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
          strings: {
            title: s._(/*BTDS*/ "Language out of sync").toString(),
            text: s
              ._(
                /*BTDS*/ "The language on this device does not match the language on your phone",
              )
              .toString(),
            action_text: s._(/*BTDS*/ "Update now").toString(),
          },
        };
      };
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null || e === "") return p();
          try {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "locale_change: requesting translated strings in ",
                  "",
                ])),
              e,
            );
            var t = yield self.fetch(
                o("WAWebBuildConstants").DYN_ORIGIN +
                  "locale_change/?locale=" +
                  e,
              ),
              n = yield t.json();
            if (n && typeof n == "object") return n;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "locale_change: Unable to get translated strings",
                    ])),
                )
                .tags("non-sad"),
              p()
            );
          }
          return p();
        })),
        f.apply(this, arguments)
      );
    }
    function g(t) {
      var n = t.locale,
        a = r("useWAWebAsync")(
          function () {
            return _(n);
          },
          [n],
        ),
        i = r("useWAWebPrevious")(a.value),
        l;
      if (a.loading)
        if (i != null) l = i;
        else return null;
      else a.error ? (l = p()) : (l = a.value);
      return m.jsx("div", {
        dir: l.dir,
        className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
        children: m.jsx(r("WDSBanner.react"), {
          type: "warning",
          title: l.strings.title,
          body: l.strings.text,
          actionText: l.strings.action_text,
          onAction: function () {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] LocaleManualUpdateButterbar.onAction",
                ])),
            ),
              self.location.reload());
          },
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
