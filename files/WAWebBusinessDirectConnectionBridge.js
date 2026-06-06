__d(
  "WAWebBusinessDirectConnectionBridge",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBusinessDirectConnectionCollection",
    "WAWebBusinessDirectUtils",
    "WAWebDirectConnectionCypher",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      if (!(await o("WAWebBusinessDirectUtils").isCypherNeeded(t))) return n();
      var a = async function (o) {
        o === void 0 && (o = !1);
        var e = (
          await r("WAWebBusinessDirectConnectionCollection").getCypher(t, {
            forceRenew: o,
          })
        ).cypher;
        return n(e);
      };
      try {
        return await a();
      } catch (t) {
        var i = r("getErrorSafe")(t);
        return o(
          "WAWebBusinessDirectUtils",
        ).errorIsDirectConnectionCypherError421(i)
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[direct-connection] 421 received, renewing cert & retrying",
                ])),
            ),
            a(!0))
          : Promise.reject(i);
      }
    }
    async function c(e, t) {
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "share_phone_number_on_cart_send_to_direct_connection_biz_enabled",
        )
      )
        return u(e, t);
      if (!(await o("WAWebBusinessDirectUtils").isCypherNeeded(e))) return t();
      var n = async function () {
          var n,
            a =
              (n = await r(
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
        a = async function () {
          var a = await r("WAWebBusinessDirectConnectionCollection").getCypher(
            e,
          );
          return a.cypherType ===
            o("WAWebDirectConnectionCypher").CypherType.PhoneNumberAndPostcode
            ? t(a.cypher)
            : n();
        };
      try {
        return await a();
      } catch (e) {
        var i = r("getErrorSafe")(e);
        return o(
          "WAWebBusinessDirectUtils",
        ).errorIsDirectConnectionCypherError421(i)
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[direct-connection] 421 received, renewing cert & retrying",
                ])),
            ),
            n())
          : Promise.reject(i);
      }
    }
    ((l.attemptWithDirectConnectionRetry = u),
      (l.attemptWithOrderDirectConnectionRetry = c));
  },
  98,
);
