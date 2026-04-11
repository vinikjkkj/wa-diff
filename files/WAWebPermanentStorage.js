__d(
  "WAWebPermanentStorage",
  [
    "WALogger",
    "WAWebLocalStorage",
    "WAWebStorageErrorHandlingUtils",
    "WAWebWAWCStorage",
    "asyncToGeneratorRuntime",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, r) {
      (r === void 0 && (r = {}),
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[storage] db ",
              ":Error: ",
              "",
            ])),
          n,
          t,
        ),
        (t.name === "QuotaExceededError" ||
          (t.message && t.message.includes("QuotaExceededError"))) &&
          o("WAWebStorageErrorHandlingUtils").reportQuotaExceededError(
            t,
            babelHelpers.extends({ op: n, db: "wawc" }, r),
          ));
    }
    var u = (function () {
        function e() {
          this.dataStore = {};
        }
        var t = e.prototype;
        return (
          (t.setItem = function (t, n, o) {
            if (
              (o === void 0 && (o = !0),
              (this.dataStore[t] = n),
              r("WAWebLocalStorage") != null)
            )
              try {
                r("WAWebLocalStorage").setItem(t, n);
              } catch (e) {
                throw e;
              }
            o &&
              r("WAWebWAWCStorage")
                .idb()
                .then(function (e) {
                  return e.user.put({ key: t, value: n });
                })
                .catch(function (e) {
                  e instanceof Error &&
                    s(e, "setItem", { writeSize: n.length });
                });
          }),
          (t.getItem = function (t, n) {
            if ((n === void 0 && (n = !1), this.dataStore[t] === void 0 || n)) {
              if (r("WAWebLocalStorage") != null) {
                var e = r("WAWebLocalStorage").getItem(t);
                return (e != null && this.setItem(t, e, !1), e);
              }
              return null;
            }
            return this.dataStore[t];
          }),
          (t.removeItem = function (t) {
            (delete this.dataStore[t],
              r("WAWebLocalStorage") != null &&
                r("WAWebLocalStorage").removeItem(t),
              r("WAWebWAWCStorage")
                .idb()
                .then(function (e) {
                  return e.user.delete(t);
                })
                .catch(function (e) {
                  e instanceof Error && s(e, "removeItem");
                }));
          }),
          (t.clear = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                ((this.dataStore = {}),
                  r("WAWebLocalStorage") != null &&
                    (r("WAWebLocalStorage").clear(),
                    e &&
                      r("lodash").forOwn(e, function (e, t) {
                        r("WAWebLocalStorage").setItem(t, e);
                      })),
                  yield r("WAWebWAWCStorage")
                    .idb()
                    .then(function (e) {
                      return e.user.clear();
                    })
                    .catch(function (e) {
                      e instanceof Error && s(e, "clear");
                    }));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })(),
      c = new u();
    l.default = c;
  },
  98,
);
