__d(
  "WAWebHatchFirstPartyConnectors",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.freeze({
        facebook: {
          idField: "fb_user_id",
          nameField: "name",
          wireValue: "facebook",
        },
        instagram: {
          idField: "user_fbid",
          nameField: "username",
          wireValue: "instagram",
        },
        instagram_messages: {
          idField: "user_fbid",
          nameField: "username",
          wireValue: "instagram_messages",
        },
        threads: { idField: "id", nameField: "username", wireValue: "threads" },
        threads_messages: {
          idField: "id",
          nameField: "username",
          wireValue: "threads_messages",
        },
        meta_business: {
          idField: "id",
          nameField: "label",
          wireValue: "meta_business",
        },
      }),
      l = new Map([
        [
          "facebook",
          _("facebook", "facebook", { isAccountsCenterManaged: !0 }),
        ],
        [
          "facebook_cli",
          _("facebook_cli", "facebook", { isAccountsCenterManaged: !0 }),
        ],
        [
          "instagram",
          _("instagram", "instagram", { isAccountsCenterManaged: !0 }),
        ],
        [
          "instagram_messages",
          _("instagram_messages", "instagram_messages", {
            canManageAccountSelection: !0,
            requiresAccountSelection: !0,
          }),
        ],
        [
          "messenger",
          _("messenger", "facebook", { requiresAccountSelection: !0 }),
        ],
        [
          "meta_business",
          _("meta_business", "meta_business", { listsAccountsOnConsent: !0 }),
        ],
        ["threads", _("threads", "threads", { isAccountsCenterManaged: !0 })],
        [
          "threads_messages",
          _("threads_messages", "threads_messages", {
            canManageAccountSelection: !0,
            requiresAccountSelection: !0,
          }),
        ],
      ]),
      s = "https://accountscenter.meta.com/",
      u = Object.freeze({
        facebook: "HATCH_ACCOUNT_LINK_FB_UPSELL",
        instagram: "HATCH_ACCOUNT_LINK_IG_UPSELL",
        instagram_messages: "HATCH_ACCOUNT_LINK_IG_UPSELL",
        meta_business: "HATCH_ACCOUNT_LINK_FB_UPSELL",
        threads: "HATCH_ACCOUNT_LINK_TH_UPSELL",
        threads_messages: "HATCH_ACCOUNT_LINK_TH_UPSELL",
      });
    function c(e) {
      var t;
      return (t = l.get(e)) != null ? t : null;
    }
    function d(e) {
      return c(e) != null;
    }
    function m(t) {
      return e[t];
    }
    function p(e) {
      return s + "add_accounts?flow=" + u[e];
    }
    function _(e, t, n) {
      return babelHelpers.extends(
        {
          app: t,
          canManageAccountSelection: !1,
          connectorId: e,
          isAccountsCenterManaged: !1,
          listsAccountsOnConsent: !1,
          requiresAccountSelection: !1,
        },
        n,
      );
    }
    ((i.HATCH_ACCOUNTS_CENTER_HOME_URL = s),
      (i.getHatchFirstPartyConnector = c),
      (i.isHatchFirstPartyConnector = d),
      (i.getHatchFoaAppConfig = m),
      (i.getHatchAccountsCenterUrl = p));
  },
  66,
);
