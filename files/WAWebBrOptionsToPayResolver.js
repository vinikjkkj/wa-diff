__d(
  "WAWebBrOptionsToPayResolver",
  ["WALogger", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "client_static",
      _ = 3;
    function f(t) {
      var n = t.candidates,
        r = t.hasUnusableServerOrdering,
        a = r === void 0 ? !1 : r,
        i = t.isSettled,
        l = t.orderedMethods,
        s = t.serverRankSource;
      if (n.length < _ || i) return null;
      if (a)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "options-to-pay: ordered_methods contains no usable entries",
              ])),
          ),
          null
        );
      var u = l != null && l.length > 0,
        c = u ? C(n, l) : y(n);
      return c == null ||
        !g(c, u ? l : null) ||
        o("WAWebABProps").getABPropConfigValue(
          "br_payments_options_to_pay_sheet_enabled",
        ) !== !0
        ? null
        : h(c, u ? s : p);
    }
    function g(e, t) {
      return e.length === 0 || b(e)
        ? !1
        : t == null || v(e[0].candidate.methodKey, t);
    }
    function h(e, t) {
      var n = e[0].candidate;
      return {
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
        rankSource: t,
      };
    }
    function y(e) {
      return e.map(function (e, t) {
        return { candidate: e, rank: t, serverIndex: t };
      });
    }
    function C(e, t) {
      var n = new Map();
      for (var r of (t != null ? t : []).entries()) {
        var a = r[0],
          i = r[1];
        if (n.has(i.methodKey))
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "options-to-pay: ordered_methods contains duplicate method keys",
                ])),
            ),
            null
          );
        n.set(i.methodKey, { rank: i.rank, serverIndex: a });
      }
      var l = [];
      for (var u of e) {
        var c = n.get(u.methodKey);
        if (c == null) return null;
        l.push(babelHelpers.extends({ candidate: u }, c));
      }
      return l.sort(function (e, t) {
        return e.rank !== t.rank
          ? e.rank - t.rank
          : e.serverIndex - t.serverIndex;
      });
    }
    function b(e) {
      var t = new Set(
        e.map(function (e) {
          var t = e.candidate;
          return t.methodKey;
        }),
      );
      return t.size !== e.length
        ? (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "options-to-pay: eligible methods map to duplicate method keys",
              ])),
          ),
          !0)
        : !1;
    }
    function v(e, t) {
      var n = t.filter(function (e) {
        return e.isDefault;
      });
      return n.length === 0
        ? (o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "options-to-pay: ordered_methods has no default method",
              ])),
          ),
          !1)
        : n.length > 1
          ? (o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "options-to-pay: ordered_methods has multiple default methods",
                ])),
            ),
            !1)
          : n[0].methodKey !== e
            ? (o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "options-to-pay: ordered_methods default is not the first ranked eligible method",
                  ])),
              ),
              !1)
            : !0;
    }
    ((l.CLIENT_STATIC_RANK_SOURCE = p), (l.resolveOptionsToPay = f));
  },
  98,
);
