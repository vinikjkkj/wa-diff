__d(
  "ReactDOM",
  [
    "consolePatchForReact",
    "cr:1293",
    "cr:1294159",
    "cr:7162",
    "cr:734",
    "err",
    "setupReactRefresh",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    (n("setupReactRefresh"), n("consolePatchForReact"));
    function c() {
      throw r("err")("This React API is not available on Workplace.");
    }
    var d = n("cr:734")
      ? n("cr:734")(n("cr:1294159").createPortal)
      : n("cr:1294159").createPortal;
    function m(e, t, r) {
      return n("cr:1294159").hydrateRoot(
        e,
        t,
        babelHelpers.extends(
          {
            onRecoverableError: function (t) {
              if (t != null && typeof t.message == "string") {
                var e = t.message;
                if (
                  e.indexOf(
                    "The server could not finish this Suspense boundary",
                  ) !== -1 ||
                  e.indexOf("Minified React error #419;") !== -1 ||
                  e.indexOf("This Suspense boundary received an update") !==
                    -1 ||
                  e.indexOf("Minified React error #421;") !== -1
                )
                  return;
              }
              typeof reportError == "function" && reportError(t);
            },
          },
          r,
        ),
      );
    }
    var p =
        (e = n("cr:1293") == null ? void 0 : n("cr:1293").findDOMNode) != null
          ? e
          : c,
      _ =
        (s = n("cr:7162") == null ? void 0 : n("cr:7162").render_DEPRECATED) !=
        null
          ? s
          : c,
      f =
        (u =
          n("cr:7162") == null
            ? void 0
            : n("cr:7162").unmountComponentAtNode_DEPRECATED) != null
          ? u
          : c;
    ((l.createPortal = d),
      (l.createRoot = n("cr:1294159").createRoot),
      (l.hydrateRoot = m),
      (l.flushSync = n("cr:1294159").flushSync),
      (l.useFormStatus = n("cr:1294159").useFormStatus),
      (l.useFormState = n("cr:1294159").useFormState),
      (l.preload = n("cr:1294159").preload),
      (l.version = n("cr:1294159").version),
      (l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
        n(
          "cr:1294159",
        ).__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE),
      (l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
        n("cr:1294159").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
      (l.unstable_batchedUpdates = n("cr:1294159").unstable_batchedUpdates),
      (l.unstable_createEventHandle =
        n("cr:1294159").unstable_createEventHandle),
      (l.findDOMNode = p),
      (l.render = _),
      (l.unmountComponentAtNode = f));
  },
  98,
);
