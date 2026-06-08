__d(
  "WAWebWasaUserPrefs",
  [
    "WABase64",
    "WALogger",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "WAWasaActiveTargetMessageKeys";
    function u(t) {
      var n,
        r =
          (n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) == null
            ? void 0
            : n[t];
      if (typeof r != "string") return null;
      try {
        return new Uint8Array(o("WABase64").decodeB64(r));
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebWasaUserPrefs] failed to decode target message key: ",
                "",
              ])),
            t,
          ),
          null
        );
      }
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = babelHelpers.extends(
              {},
              (n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) !=
                null
                ? n
                : {},
            );
          ((r[e] = o("WABase64").encodeB64(t)),
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, r));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s);
          if (!(t == null || t[e] == null)) {
            var n = babelHelpers.extends({}, t);
            (delete n[e],
              yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, n));
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.getWasaActiveTargetMessageKey = u),
      (l.setWasaActiveTargetMessageKey = c),
      (l.clearWasaActiveTargetMessageKey = m));
  },
  98,
);
