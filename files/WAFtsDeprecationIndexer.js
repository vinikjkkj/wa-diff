__d(
  "WAFtsDeprecationIndexer",
  ["WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E = "deprecatedFTS",
      k = {
        getBacklogged: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": emptyMessageSource",
                  ])),
                E,
              ),
              []
            );
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        hasBacklogged: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": hasBacklogged",
                  ])),
                E,
              ),
              !1
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        removeFromBacklog: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": removeFromBacklog",
                ])),
              E,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getAllAfterId: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": getAllAfterId",
                    ])),
                  E,
                ),
                []
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getAll: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": getAll",
                  ])),
                E,
              ),
              []
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        size: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose(["", ": size"])),
                E,
              ),
              0
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      I = (function () {
        function e(e) {
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Deprecated Version ",
                  " of FTS is being initialized",
                ])),
              e,
            )
            .tags("fts")
            .sendLogs("fts-deprecated-version-initialized: " + e, {
              sampling: 0.01,
            });
        }
        var t = e.prototype;
        return (
          (t.purge = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": purge",
                      ])),
                    E,
                  ),
                  !0
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.purgeChat = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": purgeChat",
                      ])),
                    E,
                  ),
                  !0
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.purge__DEPRECATED_DO_NOT_USE = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                return (
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": purge__DEPRECATED_DO_NOT_USE",
                      ])),
                    E,
                  ),
                  !0
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.search = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                return (
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": search",
                      ])),
                    E,
                  ),
                  { eof: !0, messages: [], status: 200 }
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.incremental = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": incremental",
                      ])),
                    E,
                  ),
                  !0
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.full = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                return (
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": full",
                      ])),
                    E,
                  ),
                  [self.performance.now()]
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.getIndexingProgress = function () {
            return (
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": getIndexingProgress",
                  ])),
                E,
              ),
              1
            );
          }),
          (t.isFullIndexingPending = function () {
            return (
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": isFullIndexingPending",
                  ])),
                E,
              ),
              !1
            );
          }),
          (t.isQueuedIndexingPending = function () {
            return (
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": isQueuedIndexingPending",
                  ])),
                E,
              ),
              !1
            );
          }),
          (t.getMessageSource = function () {
            return (
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": getMessageSource",
                  ])),
                E,
              ),
              k
            );
          }),
          (t.eraseIndex = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": eraseIndex",
                  ])),
                E,
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })();
    l.default = I;
  },
  98,
);
