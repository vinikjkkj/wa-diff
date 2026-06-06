__d(
  "WAWebOrderCollection",
  [
    "WAWebBizOrderAction",
    "WAWebBizOrderGetFriendlyRandomIdAction",
    "WAWebCurrencyUtils",
    "WAWebE2EProtoUtils",
    "WAWebL10NCountryCodes",
    "WAWebOrderModel",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
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
          var t = r("WAWebBizOrderGetFriendlyRandomIdAction")(),
            n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          return (
            e.prototype.add.call(this, {
              id: t,
              fetchedFromServer: !1,
              sellerJid: o("WAWebE2EProtoUtils").encodeJid(n),
              createdAt: Math.round(new Date().getTime() / 1e3),
              currency: o("WAWebCurrencyUtils").currencyForCountryShortcode(
                o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(n.user),
              ),
              products: [],
              tax: null,
              subtotal: null,
              total: null,
            }),
            this.assertGet(t)
          );
        }),
        (n.findOrder = function (t, n, r) {
          var e = this.get(t);
          return e != null
            ? Promise.resolve(e)
            : this.$OrderCollectionImpl$p_1(t, n, r);
        }),
        (n.$OrderCollectionImpl$p_1 = async function (n, r, a) {
          var t = await o("WAWebBizOrderAction").queryOrder(
            o("WAWebWidFactory").createWid(r),
            n,
            this.width,
            this.height,
            a,
          );
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
