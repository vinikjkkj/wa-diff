__d(
  "WAWebProxyStateFactory",
  ["WACustomError", "WALogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["collections", "derived", "props", "session"],
      d = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "DuplicatedProxyProperty"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      m = {},
      p = function (n, a, i) {
        var t = a.collections,
          l = a.derived,
          p = a.props,
          _ = a.session,
          f = babelHelpers.objectWithoutPropertiesLoose(a, c),
          g = function (t) {
            this.$ProxyState$state = t;
          },
          h = {};
        if (
          ([p, _, t, l].forEach(function (t) {
            t &&
              Object.keys(t).forEach(function (t) {
                h[t] = {
                  get: function () {
                    return (
                      r("gkx")("26258")
                        ? o("WALogger").WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                '[ProxyState] read "',
                                ".",
                                '" in <',
                                "/> not in concerns",
                              ])),
                            n,
                            t,
                            this.$ProxyState$ComponentName,
                          )
                        : o("WALogger")
                            .ERROR(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  '[ProxyState] read "',
                                  ".",
                                  '" in <',
                                  "/> not in concerns",
                                ])),
                              n,
                              t,
                              this.$ProxyState$ComponentName,
                            )
                            .sendLogs("Invalid ProxyState Access"),
                      this.$ProxyState$state[t]
                    );
                  },
                  set: function (r) {
                    (o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            '[ProxyState] write "',
                            ".",
                            '" in <',
                            "/> not in concerns",
                          ])),
                        n,
                        t,
                        this.$ProxyState$ComponentName,
                      )
                      .sendLogs("Invalid ProxyState Write"),
                      (this.$ProxyState$state[t] = r));
                  },
                };
              });
          }),
          (h.proxyName = { value: n }),
          (h.mirrorMask = { value: i }),
          ["set", "get"].concat(Object.keys(f)).forEach(function (e) {
            h[e] = {
              value: function () {
                var t = this.$ProxyState$state;
                return t[e].apply(t, arguments);
              },
            };
          }),
          (g.prototype = Object.create(null, h)),
          (g.prototype.constructor = g),
          n in m)
        )
          throw new d('Duplicated proxy property "' + n + '".');
        m[n] = g;
      };
    ((l.ProxyStates = m), (l.ProxyStateFactory = p));
  },
  98,
);
