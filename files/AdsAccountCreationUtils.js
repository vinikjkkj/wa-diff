__d(
  "AdsAccountCreationUtils",
  ["errorDesc", "AdsPEPublishDisableReasons", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [101, 2, 100, 3];
    function u(t) {
      var n = !_(t);
      return !p(t) && !e.includes(t.account_status) && n;
    }
    function c(e) {
      return r("gkx")("22018")
        ? o("AdsPEPublishDisableReasons").IS_DIRECT_DEALS_AD_ACCOUNT.EDIT
        : e && e.account_status === 3
          ? o("AdsPEPublishDisableReasons").ACCOUNT_UNSETTLED.EDIT
          : null;
    }
    function d(e) {
      return r("gkx")("22018")
        ? o("AdsPEPublishDisableReasons").IS_DIRECT_DEALS_AD_ACCOUNT.EDIT
        : e && e.account_status === 3
          ? o("AdsPEPublishDisableReasons").ACCOUNT_UNSETTLED.EDIT
          : m(e);
    }
    function m(e) {
      if (e && !u(e)) {
        var t = e.account_status;
        switch (t) {
          case 3:
            return o("AdsPEPublishDisableReasons").ACCOUNT_UNSETTLED.EDIT;
          case 101:
          case 2:
          case 100:
            return s._(function (e, t) {
              return e._(
                /*BTDS*/ "Only active accounts can create or edit ads.",
              );
            }, {});
          default:
            return o("AdsPEPublishDisableReasons").NO_PERMISSION;
        }
      }
      return null;
    }
    function p(e, t) {
      var n,
        r,
        o,
        a =
          (n =
            (r =
              e == null || (o = e.userpermissions) == null ? void 0 : o.data) !=
            null
              ? r
              : t) != null
            ? n
            : [];
      return (
        a.length > 0 &&
        a.every(function (e) {
          return e.role === "REPORTS_ONLY";
        })
      );
    }
    function _(e, t) {
      var n,
        r,
        o,
        a =
          (n =
            (r =
              e == null || (o = e.userpermissions) == null ? void 0 : o.data) !=
            null
              ? r
              : t) != null
            ? n
            : [];
      return (
        a.length > 0 &&
        a.every(function (e) {
          return e.role === "DRAFT";
        })
      );
    }
    function f(e, t) {
      return !_(e, t) && !p(e, t);
    }
    ((l.getEditDisabledReason = c),
      (l.getPublishDisabledReason = d),
      (l.getAccountHasNoPublishPermissionDisabledReason = m),
      (l.isAnalystAccount = p),
      (l.accountHasPermissionToCreateAds = f));
  },
  226,
);
