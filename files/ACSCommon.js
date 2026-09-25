__d(
  "ACSCommon",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, "ACS server rejected config ID " + t) || this),
            (n.name = "ACSInvalidConfigIdError"),
            (n.configId = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      l = "acs_storage_manager_server_config",
      s = "acs_storage_manager_cached_token",
      u = "server_config_id",
      c = "nonce",
      d = "shared_secret",
      m = "token_expires_on",
      p = "max_redemptions",
      _ = "number_redemptions",
      f = "cipher_suite",
      g = "config_expires_on",
      h = "max_evals",
      y = "public_key",
      C = "token_ttl";
    ((i.ACSInvalidConfigIdError = e),
      (i.ACS_STORAGE_MANAGER_SERVER_CONFIG_KEY = l),
      (i.ACS_STORAGE_MANAGER_CACHED_TOKEN_KEY = s),
      (i.SERVER_CONFIG_ID_KEY = u),
      (i.NONCE_KEY = c),
      (i.SHARED_SECRET_KEY = d),
      (i.TOKEN_EXPIRES_ON_KEY = m),
      (i.MAX_REDEMPTIONS_KEY = p),
      (i.NUMBER_REDEMPTIONS_KEY = _),
      (i.CIPHER_SUITE_KEY = f),
      (i.CONFIG_EXPIRES_ON_KEY = g),
      (i.MAX_EVALS_KEY = h),
      (i.PUBLIC_KEY = y),
      (i.TOKEN_TTL_KEY = C));
  },
  66,
);
