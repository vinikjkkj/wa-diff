__d(
  "WAWebCustomerDataCollection",
  [
    "WAWebBaseCollection",
    "WAWebContactType",
    "WAWebCustomerDataModel",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        var t;
        return ((t = e.call(this) || this), (t.queriedChatJids = new Set()), t);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.maybeGetCustomerDataByChatJid = function (t) {
          var e = this.findFirst(function (e) {
            return e.chatJid === t;
          });
          return e != null ? e : null;
        }),
        (n.isCustomer = function (t) {
          var e = this.maybeGetCustomerDataByChatJid(
            o("WAWebWidToJid").widToChatJid(t.id),
          );
          return (
            e != null &&
            e.contactType === o("WAWebContactType").ContactType.CUSTOMER
          );
        }),
        (n.getCustomerModels = function () {
          return this.getModelsArray().filter(function (e) {
            return e.contactType === o("WAWebContactType").ContactType.CUSTOMER;
          });
        }),
        (n.hasCachedQueryForChatJid = function (t) {
          return this.queriedChatJids.has(t);
        }),
        (n.updateCollectionFromDB = function (t, n) {
          (this.queriedChatJids.add(t),
            n != null &&
              this.add(
                new (o("WAWebCustomerDataModel").CustomerData)(
                  babelHelpers.extends({}, n, { id: n.chatJid }),
                ),
                { merge: !0 },
              ));
        }),
        (n.initializeFromCache = function (t) {
          t.length !== 0 &&
            this.add(
              t.map(function (e) {
                return new (o("WAWebCustomerDataModel").CustomerData)(
                  babelHelpers.extends({}, e, { id: e.chatJid }),
                );
              }),
              { merge: !0 },
            );
        }),
        (n.purgeCustomerDataByChatJid = function (t) {
          var e = this.where({ chatJid: t });
          (this.remove(e), this.queriedChatJids.delete(t));
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebCustomerDataModel").CustomerData;
    var s = new e();
    l.CustomerDataCollection = s;
  },
  98,
);
