__d(
  "WAWebShortcakeLinkingRequestOptionsCache",
  ["WALogger", "WAWebABProps", "WAWebShortcakeLinkingIq"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      var e,
        t =
          (e = o("WAWebABProps").getABPropConfigValue(
            "shortcake_companion_prologue__passkeys__request_options_ttl_seconds",
          )) != null
            ? e
            : 600;
      return t * 1e3;
    }
    var c = null,
      d = 0;
    function m(e) {
      ((c = e), (d = Date.now()));
    }
    function p() {
      ((c = null), (d = 0));
    }
    function _() {
      return c;
    }
    async function f() {
      var t = _();
      if (t != null && Date.now() - d < u())
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake prologue: using cached PasskeyRequestOptions",
              ])),
          ),
          t
        );
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[shortcake] fetching fresh PasskeyRequestOptions",
          ])),
      );
      var n = await o("WAWebShortcakeLinkingIq").requestPasskeyRequestOptions();
      return (m(n), n);
    }
    ((l.setCachedRequestOptions = m),
      (l.clearCachedRequestOptions = p),
      (l.getCachedRequestOptions = _),
      (l.getRequestOptions = f));
  },
  98,
);
