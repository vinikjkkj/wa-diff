__d(
  "WAWebMmsClientMmsLogError",
  ["WAAbortError", "WALogger", "WAWebMmsClientErrors"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n, r, a) {
      (a === void 0 && (a = !0),
        n instanceof o("WAWebMmsClientErrors").MediaNotFoundError && a
          ? o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": expected error",
                ])),
              t,
            )
          : typeof n == "object" &&
              (n == null ? void 0 : n.name) === o("WAAbortError").ABORT_ERROR
            ? o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": canceled",
                  ])),
                t,
              )
            : o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
                t,
                n,
              ));
    }
    l.mmsLogError = c;
  },
  98,
);
