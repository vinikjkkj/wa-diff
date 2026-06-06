__d(
  "WAWebBusinessDirectConnectionBridge",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBusinessDirectConnectionCollection",
    "WAWebBusinessDirectUtils",
    "WAWebDirectConnectionCypher",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (!(yield o("WAWebBusinessDirectUtils").isCypherNeeded(t)))
            return a();
          var i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                e === void 0 && (e = !1);
                var n = (yield r(
                  "WAWebBusinessDirectConnectionCollection",
                ).getCypher(t, { forceRenew: e })).cypher;
                return a(n);
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
          try {
            return yield i();
          } catch (t) {
            var l = r("getErrorSafe")(t);
            return o(
              "WAWebBusinessDirectUtils",
            ).errorIsDirectConnectionCypherError421(l)
              ? (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[direct-connection] 421 received, renewing cert & retrying",
                    ])),
                ),
                i(!0))
              : (u || (u = n("Promise"))).reject(l);
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o("WAWebABProps").getABPropConfigValue(
              "share_phone_number_on_cart_send_to_direct_connection_biz_enabled",
            )
          )
            return c(e, t);
          if (!(yield o("WAWebBusinessDirectUtils").isCypherNeeded(e)))
            return t();
          var a = (function () {
              var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var n,
                    a =
                      (n = yield r(
                        "WAWebBusinessDirectConnectionCollection",
                      ).genNewCypher(
                        e,
                        o("WAWebDirectConnectionCypher").CypherType
                          .PhoneNumberAndPostcode,
                        { forceRenew: !0 },
                      )) == null
                        ? void 0
                        : n.cypher;
                  return t(a);
                },
              );
              return function () {
                return a.apply(this, arguments);
              };
            })(),
            i = (function () {
              var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var n = yield r(
                    "WAWebBusinessDirectConnectionCollection",
                  ).getCypher(e);
                  return n.cypherType ===
                    o("WAWebDirectConnectionCypher").CypherType
                      .PhoneNumberAndPostcode
                    ? t(n.cypher)
                    : a();
                },
              );
              return function () {
                return i.apply(this, arguments);
              };
            })();
          try {
            return yield i();
          } catch (e) {
            var l = r("getErrorSafe")(e);
            return o(
              "WAWebBusinessDirectUtils",
            ).errorIsDirectConnectionCypherError421(l)
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[direct-connection] 421 received, renewing cert & retrying",
                    ])),
                ),
                a())
              : (u || (u = n("Promise"))).reject(l);
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.attemptWithDirectConnectionRetry = c),
      (l.attemptWithOrderDirectConnectionRetry = m));
  },
  98,
);
