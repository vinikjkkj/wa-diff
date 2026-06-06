__d(
  "WAWebOrderCollection",
  [
    "Promise",
    "WAWebBizOrderAction",
    "WAWebBizOrderGetFriendlyRandomIdAction",
    "WAWebCurrencyUtils",
    "WAWebE2EProtoUtils",
    "WAWebL10NCountryCodes",
    "WAWebOrderModel",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function a(e, n) {
          var r;
          return (
            (r = t.call(this) || this),
            (r.width = 80),
            (r.height = 80),
            e != null && (r.width = e),
            n != null && (r.height = n),
            r
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.addOrder = function () {
            var e = r("WAWebBizOrderGetFriendlyRandomIdAction")(),
              n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
            return (
              t.prototype.add.call(this, {
                id: e,
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
              this.assertGet(e)
            );
          }),
          (i.findOrder = function (r, o, a) {
            var t = this.get(r);
            return t != null
              ? (e || (e = n("Promise"))).resolve(t)
              : this.$OrderCollectionImpl$p_1(r, o, a);
          }),
          (i.$OrderCollectionImpl$p_1 = (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (r, a, i) {
                var l = yield o("WAWebBizOrderAction").queryOrder(
                  o("WAWebWidFactory").createWid(a),
                  r,
                  this.width,
                  this.height,
                  i,
                );
                t.prototype.add.call(
                  this,
                  babelHelpers.extends(
                    { id: r, fetchedFromServer: !0, sellerJid: a },
                    l,
                  ),
                );
                var s = this.get(r);
                if (s != null) return (e || (e = n("Promise"))).resolve(s);
              },
            );
            function a(e, t, n) {
              return r.apply(this, arguments);
            }
            return a;
          })()),
          a
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    s.model = r("WAWebOrderModel");
    var u = new s();
    l.OrderCollection = u;
  },
  98,
);
