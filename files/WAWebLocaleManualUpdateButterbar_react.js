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
    "react-compiler-runtime",
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
    function g(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.locale,
        a,
        i;
      t[0] !== n
        ? ((a = function () {
            return _(n);
          }),
          (i = [n]),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2]));
      var l = r("useWAWebAsync")(a, i),
        s = r("useWAWebPrevious")(l.value),
        u;
      if (l.loading)
        if (s != null) u = s;
        else return null;
      else if (l.error) {
        var c;
        (t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = p()), (t[3] = c))
          : (c = t[3]),
          (u = c));
      } else u = l.value;
      var d = u.dir,
        f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x1380le5 x14mko6t xefnzgg x1uvdrpn" }),
          (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] !== u.strings.action_text ||
      t[6] !== u.strings.text ||
      t[7] !== u.strings.title
        ? ((g = m.jsx(r("WDSBanner.react"), {
            type: "warning",
            title: u.strings.title,
            body: u.strings.text,
            actionText: u.strings.action_text,
            onAction: h,
          })),
          (t[5] = u.strings.action_text),
          (t[6] = u.strings.text),
          (t[7] = u.strings.title),
          (t[8] = g))
        : (g = t[8]);
      var y;
      return (
        t[9] !== g || t[10] !== u.dir
          ? ((y = m.jsx(
              "div",
              babelHelpers.extends({ dir: d }, f, { children: g }),
            )),
            (t[9] = g),
            (t[10] = u.dir),
            (t[11] = y))
          : (y = t[11]),
        y
      );
    }
    function h() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] LocaleManualUpdateButterbar.onAction",
          ])),
      ),
        self.location.reload());
    }
    l.default = g;
  },
  226,
);
