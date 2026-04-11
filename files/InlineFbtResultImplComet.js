__d(
  "InlineFbtResultImplComet",
  ["FBLogger", "FbtHooks", "FbtReactUtil", "FbtResultBase", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t = e.content,
        n = e.hash,
        o = e.inlineMode,
        a = e.translation;
      return (
        n == null &&
          r("FBLogger")("internationalization").mustfix(
            'Fbt string hash should not be null for translated string "%s" [inlineMode=%s]',
            a,
            o,
          ),
        u.jsx("span", {
          "data-intl-hash": n,
          "data-intl-translation": a,
          "data-intl-trid": "",
          children: t,
        })
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = (function (t) {
      function n(n, a, i, l) {
        var s;
        return (
          (s =
            t.call(
              this,
              n,
              (e || (e = r("FbtHooks"))).getErrorListener({
                hash: l,
                translation: i,
              }),
            ) || this),
          (s.$$typeof = o("FbtReactUtil").REACT_ELEMENT_TYPE),
          (s.key = null),
          (s.ref = null),
          (s.type = c),
          (s.props = { content: n, hash: l, inlineMode: a, translation: i }),
          s
        );
      }
      return (babelHelpers.inheritsLoose(n, t), n);
    })(r("FbtResultBase"));
    l.default = d;
  },
  98,
);
