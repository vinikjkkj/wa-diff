__d(
  "WAWebMmsClientMmsLogError",
  ["WAAbortError", "WALogger", "WAWebMmsClientErrors"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      var n = t.debug,
        r = t.error,
        a = t.hasExpectedErrors,
        i = a === void 0 ? !0 : a,
        l = t.source;
      r instanceof o("WAWebMmsClientErrors").MediaNotFoundError && i
        ? o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": expected error",
              ])),
            l,
          )
        : typeof r == "object" &&
            (r == null ? void 0 : r.name) === o("WAAbortError").ABORT_ERROR
          ? o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": canceled",
                ])),
              l,
            )
          : o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
              l,
              r,
            );
    }
    l.mmsLogError = c;
  },
  98,
);
