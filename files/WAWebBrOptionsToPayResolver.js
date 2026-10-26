__d(
  "WAWebBrOptionsToPayResolver",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebBrPaymentMethodKey",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ordered"],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = "client_static",
      g = 3,
      h = null,
      y = null;
    function C(t) {
      var n = t.candidates,
        r = t.hasUnusableServerOrdering,
        a = r === void 0 ? !1 : r,
        i = t.isSettled,
        l = t.lastUsedMethodKey,
        u = t.orderedMethods,
        c = t.serverRankSource;
      if (n.length < g || i) return null;
      if (a)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "options-to-pay: ordered_methods contains no usable entries",
              ])),
          ),
          null
        );
      var d = u != null && u.length > 0,
        m = d ? L(n, u) : R(n);
      if (
        m == null ||
        !v(m, d ? u : null) ||
        o("WAWebABProps").getABPropConfigValue(
          "br_payments_options_to_pay_sheet_enabled",
        ) !== !0
      )
        return null;
      var p = d ? c : f,
        _ = h;
      if (_ == null)
        return (
          b(),
          S(m, {
            rankSource: p,
            weightsVersion: null,
            rankChanged: !1,
            pinnedEntry: null,
          })
        );
      var y = _.reorderPaymentMethods(
          m,
          function (e) {
            var t = e.candidate;
            return t.methodKey;
          },
          p,
          _.parsePaymentMethodWeights(
            o("WAWebABProps").getABPropConfigValue(
              "br_payments_payment_method_weights",
            ),
          ),
          l,
        ),
        C = y.ordered,
        E = babelHelpers.objectWithoutPropertiesLoose(y, e);
      return S(C, E);
    }
    function b() {
      return (
        y != null ||
          (y = r("JSResourceForInteraction")("WAWebBrPaymentMethodWeights")
            .__setRef("WAWebBrOptionsToPayResolver")
            .load()
            .then(function (e) {
              h = e;
            })
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "options-to-pay: payment method weights failed to load",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("br-payment-method-weights-load-failed");
            })),
        y
      );
    }
    function v(e, t) {
      return e.length === 0 ||
        E(e) ||
        e.some(function (e) {
          var t = e.candidate;
          return !o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.isValid(
            t.methodKey,
          );
        })
        ? !1
        : t == null || k(e[0].candidate.methodKey, t);
    }
    function S(e, t) {
      var n = e[0].candidate;
      return babelHelpers.extends(
        {
          inline: n.value,
          sheet: e.slice(1).map(function (e) {
            var t = e.candidate;
            return t.value;
          }),
          orderedMethodKeys: e.map(function (e) {
            var t = e.candidate;
            return t.methodKey;
          }),
          defaultMethodKey: n.methodKey,
        },
        t,
      );
    }
    function R(e) {
      return e.map(function (e, t) {
        return { candidate: e, rank: t, serverIndex: t };
      });
    }
    function L(e, t) {
      var n = new Map();
      for (var r of (t != null ? t : []).entries()) {
        var a = r[0],
          i = r[1];
        if (n.has(i.methodKey))
          return (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "options-to-pay: ordered_methods contains duplicate method keys",
                ])),
            ),
            null
          );
        n.set(i.methodKey, { rank: i.rank, serverIndex: a });
      }
      var l = [];
      for (var s of e) {
        var u = n.get(s.methodKey);
        if (u == null) return null;
        l.push(babelHelpers.extends({ candidate: s }, u));
      }
      return l.sort(function (e, t) {
        return e.rank !== t.rank
          ? e.rank - t.rank
          : e.serverIndex - t.serverIndex;
      });
    }
    function E(e) {
      var t = new Set(
        e.map(function (e) {
          var t = e.candidate;
          return t.methodKey;
        }),
      );
      return t.size !== e.length
        ? (o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "options-to-pay: eligible methods map to duplicate method keys",
              ])),
          ),
          !0)
        : !1;
    }
    function k(e, t) {
      var n = t.filter(function (e) {
        return e.isDefault;
      });
      return n.length === 0
        ? (o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "options-to-pay: ordered_methods has no default method",
              ])),
          ),
          !1)
        : n.length > 1
          ? (o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "options-to-pay: ordered_methods has multiple default methods",
                ])),
            ),
            !1)
          : n[0].methodKey !== e || n[0].rank !== 0
            ? (o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "options-to-pay: ordered_methods default is not the first ranked eligible method",
                  ])),
              ),
              !1)
            : !0;
    }
    ((l.CLIENT_STATIC_RANK_SOURCE = f),
      (l.resolveOptionsToPay = C),
      (l.preloadBrPaymentMethodWeights = b));
  },
  98,
);
