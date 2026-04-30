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
      m = {};
    function p(t, n, a) {
      var i = n.collections,
        l = n.derived,
        p = n.props,
        _ = n.session,
        f = babelHelpers.objectWithoutPropertiesLoose(n, c),
        g = function (t) {
          this.$ProxyState$state = t;
        },
        h = {};
      if (
        ([p, _, i, l].forEach(function (n) {
          n &&
            Object.keys(n).forEach(function (n) {
              h[n] = {
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
                          t,
                          n,
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
                            t,
                            n,
                            this.$ProxyState$ComponentName,
                          )
                          .sendLogs("Invalid ProxyState Access"),
                    this.$ProxyState$state[n]
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
                      t,
                      n,
                      this.$ProxyState$ComponentName,
                    )
                    .sendLogs("Invalid ProxyState Write"),
                    (this.$ProxyState$state[n] = r));
                },
              };
            });
        }),
        (h.proxyName = { value: t }),
        (h.mirrorMask = { value: a }),
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
        t in m)
      )
        throw new d('Duplicated proxy property "' + t + '".');
      m[t] = g;
    }
    ((l.ProxyStates = m), (l.ProxyStateFactory = p));
  },
  98,
);
