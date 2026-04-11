__d(
  "WAWebLoadingNewsletterPreviewModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebEmptyState.react",
    "WAWebLoadNewsletterPreviewChatAction",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useState;
    function f(t) {
      var a = t.chatEntryPoint,
        i = t.identifier,
        l = t.onFailure,
        c = t.onSuccess,
        m = t.qpl,
        f = _(!0),
        g = f[0],
        h = f[1],
        y = _(null),
        C = y[0],
        b = y[1],
        v = _(null),
        S = v[0],
        R = v[1];
      p(function () {
        o("WAWebLoadNewsletterPreviewChatAction")
          .loadNewsletterPreviewChat(i, m)
          .then(function (e) {
            if (e == null) throw r("err")("Chat not found");
            b(e);
          })
          .catch(function (t) {
            (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[LoadingNewsletterPreviewModal] Failed to load preview for ",
                  "",
                ])),
              i,
            ),
              R(t));
          })
          .finally(function () {
            h(!1);
          });
      }, []);
      function L() {
        return E.apply(this, arguments);
      }
      function E() {
        return (
          (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getGeosuspendedInYourCountryString();
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, { msg: e, id: k }),
            );
          })),
          E.apply(this, arguments)
        );
      }
      if (g)
        return d.jsx(o("WAWebModal.react").Modal, {
          children: d.jsx(o("WAWebEmptyState.react").Loading, {
            description: "Loading Newsletter Preview Modal",
          }),
        });
      if (C != null) {
        (o("WAWebModalManager").ModalManager.close(), c(C));
        return;
      }
      (o("WAWebModalManager").ModalManager.close(),
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[openNewsletterPreviewChat] Failed to load preview for ",
              "",
            ])),
          i,
        ),
        l == null || l());
      var k = o("WAWebActionToast.react").genId();
      (S == null ? void 0 : S.status) === 405
        ? o("WAWebToastManager").ToastManager.open(
            d.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ "This channel is closed to new followers. Try again later.",
              ),
              id: k,
            }),
          )
        : (S == null ? void 0 : S.status) === 451
          ? L()
          : o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Could not load channel"),
                id: k,
              }),
            );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
