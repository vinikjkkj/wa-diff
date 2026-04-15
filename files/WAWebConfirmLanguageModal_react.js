__d(
  "WAWebConfirmLanguageModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebL10N",
    "WAWebL10NConstants",
    "WAWebModalManager",
    "WAWebSettingsSyncBridge",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebSettingsSyncBridge").sendSettingChange("language", e, "app"),
            yield r("WAWebL10N").setLocale(
              e,
              o("WAWebL10NConstants").L10N_PRIORITY.SAVED,
              !0,
            ),
            o("WAWebModalManager").ModalManager.close());
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })();
    function d(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.newLanguage,
        a = e.newLocale;
      r("vulture")("MqdxC6cIk8RmFF4LADLCE4v9ONU=");
      var i, l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { surface: "unknown", viewName: "confirm-language" }),
          (l = s._(/*BTDS*/ "Change language?")),
          (t[0] = i),
          (t[1] = l))
        : ((i = t[0]), (l = t[1]));
      var d;
      t[2] !== a
        ? ((d = function () {
            return c(a);
          }),
          (t[2] = a),
          (t[3] = d))
        : (d = t[3]);
      var p;
      t[4] !== n
        ? ((p = s._(/*BTDS*/ "Set language to {language-name}", [
            s._param("language-name", n),
          ])),
          (t[4] = n),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Cancel")), (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] !== n
        ? ((f = s._(
            /*BTDS*/ "To change the language to {language-name}, we need to reload the page.",
            [s._param("language-name", n)],
          )),
          (t[7] = n),
          (t[8] = f))
        : (f = t[8]);
      var g;
      return (
        t[9] !== d || t[10] !== p || t[11] !== f
          ? ((g = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: i,
              title: l,
              onOK: d,
              okText: p,
              onCancel: m,
              cancelText: _,
              children: f,
            })),
            (t[9] = d),
            (t[10] = p),
            (t[11] = f),
            (t[12] = g))
          : (g = t[12]),
        g
      );
    }
    function m() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = d;
  },
  226,
);
