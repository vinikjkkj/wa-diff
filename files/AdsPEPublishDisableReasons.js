__d(
  "AdsPEPublishDisableReasons",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        PUBLISH: s._(
          /*BTDS*/ "This ad account has a balance that needs to be paid before you can publish. Please verify your billing information is up to date.",
        ),
        EDIT: s._(
          /*BTDS*/ "This ad account has a balance that needs to be paid before you can take this action. Please verify your billing information is up to date.",
        ),
      },
      u = s._(
        /*BTDS*/ "Your account is closed and can't be used to run ads. You can create a new ad account or make this one active again.",
      ),
      c = s._(
        /*BTDS*/ "Your account is currently pending closure and is unable to run ads. You can cancel closing your account to run ads again.",
      ),
      d = s._(
        /*BTDS*/ "You do not have permission to create ads on this account.",
      ),
      m = {
        EDIT: s._(
          /*BTDS*/ "Direct deals cannot be modified through Ads Manager. Please use the direct deals tool.",
        ),
      };
    ((l.ACCOUNT_UNSETTLED = e),
      (l.ACCOUNT_CLOSED = u),
      (l.ACCOUNT_PENDING_CLOSURE = c),
      (l.NO_PERMISSION = d),
      (l.IS_DIRECT_DEALS_AD_ACCOUNT = m));
  },
  226,
);
