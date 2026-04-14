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
      var t = e.newLanguage,
        n = e.newLocale;
      return (
        r("vulture")("MqdxC6cIk8RmFF4LADLCE4v9ONU="),
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "confirm-language",
          },
          title: s._(/*BTDS*/ "Change language?"),
          onOK: function () {
            return c(n);
          },
          okText: s._(/*BTDS*/ "Set language to {language-name}", [
            s._param("language-name", t),
          ]),
          onCancel: m,
          cancelText: s._(/*BTDS*/ "Cancel"),
          children: s._(
            /*BTDS*/ "To change the language to {language-name}, we need to reload the page.",
            [s._param("language-name", t)],
          ),
        })
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = d;
  },
  226,
);
