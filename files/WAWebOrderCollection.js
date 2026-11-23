__d(
  "WAWebOrderCollection",
  [
    "WAWebBizComplianceUtil",
    "WAWebBizOrderAction",
    "WAWebBizOrderGetFriendlyRandomIdAction",
    "WAWebCurrencyUtils",
    "WAWebE2EProtoUtils",
    "WAWebL10NCountryCodes",
    "WAWebOrderModel",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this) || this),
          (r.width = 80),
          (r.height = 80),
          t != null && (r.width = t),
          n != null && (r.height = n),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.addOrder = function () {
          var t,
            n = r("WAWebBizOrderGetFriendlyRandomIdAction")(),
            a = o("WAWebUserUtils").getMeUserOrThrow(),
            i = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            l =
              i != null
                ? o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(i.user)
                : (t = o("WAWebBizComplianceUtil").getCountryShortcodeByWid(
                      a,
                    )) != null
                  ? t
                  : "";
          return (
            e.prototype.add.call(this, {
              id: n,
              fetchedFromServer: !1,
              sellerJid: o("WAWebE2EProtoUtils").encodeJid(a),
              createdAt: Math.round(Date.now() / 1e3),
              currency: o("WAWebCurrencyUtils").currencyForCountryShortcode(l),
              products: [],
              tax: null,
              subtotal: null,
              total: null,
            }),
            this.assertGet(n)
          );
        }),
        (n.findOrder = function (t, n, r) {
          var e = this.get(t);
          return e != null
            ? Promise.resolve(e)
            : this.$OrderCollectionImpl$p_1(t, n, r);
        }),
        (n.$OrderCollectionImpl$p_1 = async function (n, r, a) {
          var t = await o("WAWebBizOrderAction").queryOrder({
            height: this.height,
            orderId: n,
            sellerJid: r,
            token: a,
            width: this.width,
          });
          e.prototype.add.call(
            this,
            babelHelpers.extends(
              { id: n, fetchedFromServer: !0, sellerJid: r },
              t,
            ),
          );
          var i = this.get(n);
          if (i != null) return Promise.resolve(i);
        }),
        t
      );
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    e.model = r("WAWebOrderModel");
    var s = new e();
    l.OrderCollection = s;
  },
  98,
);
