__d(
  "WAWebBrLastUsedPaymentMethodStore",
  [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebPaymentsGatingUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "WABrLastUsedPaymentMethods",
      u = 50;
    function c(t, n) {
      if (!(o("WAWebMsgGetters").getIsSentByMe(t.unsafe()) || n === "")) {
        var a = o("WAWebFrontendMsgGetters").getChat(t.unsafe());
        !a.id.isUser() ||
          !o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(a) ||
          d(a.id.toString(), n, Date.now()).catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[BR_LAST_USED_PAYMENT_METHOD] record failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("br-last-used-payment-method-record-failed");
          });
      }
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              s,
              p(
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s),
                e,
                t,
                n,
                Date.now(),
              ),
            ));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r, o) {
      var a,
        i,
        l = _(e),
        s = (a = (i = l[t]) == null ? void 0 : i.t) != null ? a : 0;
      if (s > r && s <= o) return l;
      l[t] = { m: n, t: r };
      var c = Object.keys(l);
      if (c.length <= u) return l;
      var d = {};
      return (
        c
          .sort(function (e, t) {
            return l[t].t - l[e].t;
          })
          .slice(0, u)
          .forEach(function (e) {
            d[e] = l[e];
          }),
        d
      );
    }
    function _(e) {
      var t = {};
      if (e == null || typeof e != "object" || Array.isArray(e)) return t;
      for (var n of Object.entries(e)) {
        var r = n[0],
          o = n[1];
        if (!(o == null || typeof o != "object")) {
          var a = o.m,
            i = o.t;
          typeof a == "string" &&
            typeof i == "number" &&
            Number.isFinite(i) &&
            i >= 0 &&
            (t[r] = { m: a, t: i });
        }
      }
      return t;
    }
    ((l.MAX_MERCHANTS = u),
      (l.recordLastUsedBrPaymentMethod = c),
      (l.updateLastUsedPaymentMethods = p));
  },
  98,
);
