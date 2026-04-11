__d(
  "useWAWebModelValues",
  [
    "WACustomError",
    "WALogger",
    "WANullthrows",
    "WAWebStateConcern",
    "WAWebStateUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState,
      _ = (function (e) {
        function t(t) {
          var n = "Received a null value for model key: " + t;
          return e.call(this, n) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    function f(t, n, a) {
      if (t == null)
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(
                  ["useModelValues hook received an unexpected `null` model"],
                  [
                    "useModelValues hook received an unexpected \\`null\\` model",
                  ],
                )),
            )
            .sendLogs("state-hook-null-model"),
          new _("Unknown")
        );
      var i = g(t, n, a);
      return r("WANullthrows")(i);
    }
    function g(e, t, n) {
      var a = n != null ? n : {},
        i = a.componentName,
        l = a.isStrong,
        s = l === void 0 ? !0 : l,
        u = e ? o("WAWebStateUtils").unproxy(e) : null,
        _ = m();
      function f() {
        if (!u) return null;
        if (_.current == null) {
          if (!u) return null;
          _.current = new (r("WAWebStateConcern"))(
            i != null ? i : "Hook(useModelValues)",
            u.proxyName,
            Array.from(new Set(t)),
            s,
            !0,
          );
        }
        return _.current;
      }
      var g = p(function () {
          var e = f();
          if (!e) return null;
          var t = e.getModelAndValidate(u);
          return t ? e.createProxy(t) : null;
        }),
        h = g[0],
        y = g[1],
        C = c(function (e, t) {
          var n = e.getModelAndValidate(t);
          y(n ? e.createProxy(n) : null);
        }, []);
      d(
        function () {
          var e = f();
          if (!(!e || !h)) {
            var t = e.getModel(u);
            return (
              e.attachConcern(t, h.proxyBitMask, C),
              function () {
                e.detachConcern(t, C);
              }
            );
          }
        },
        [u, h, C],
      );
      var b = p(u),
        v = b[0],
        S = b[1],
        R = f();
      if (v !== u && R) {
        v && R.detachConcern(v, C);
        var L = R.getModelAndValidate(u);
        (S(L), y(L ? R.createProxy(L) : null));
      }
      return (!R && h != null && y(null), h);
    }
    ((l.StateHookMissingModelError = _),
      (l.useModelValues = f),
      (l.useOptionalModelValues = g));
  },
  98,
);
