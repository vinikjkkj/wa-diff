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
      l = 64,
      s = "acs_storage_manager_server_config",
      u = "acs_storage_manager_cached_token",
      c = "server_config_id",
      d = "nonce",
      m = "shared_secret",
      p = "token_expires_on",
      _ = "max_redemptions",
      f = "number_redemptions",
      g = "cipher_suite",
      h = "config_expires_on",
      y = "max_evals",
      C = "public_key",
      b = "token_ttl";
    ((i.ACSInvalidConfigIdError = e),
      (i.SHA_512_SIZE_IN_BYTES = l),
      (i.ACS_STORAGE_MANAGER_SERVER_CONFIG_KEY = s),
      (i.ACS_STORAGE_MANAGER_CACHED_TOKEN_KEY = u),
      (i.SERVER_CONFIG_ID_KEY = c),
      (i.NONCE_KEY = d),
      (i.SHARED_SECRET_KEY = m),
      (i.TOKEN_EXPIRES_ON_KEY = p),
      (i.MAX_REDEMPTIONS_KEY = _),
      (i.NUMBER_REDEMPTIONS_KEY = f),
      (i.CIPHER_SUITE_KEY = g),
      (i.CONFIG_EXPIRES_ON_KEY = h),
      (i.MAX_EVALS_KEY = y),
      (i.PUBLIC_KEY = C),
      (i.TOKEN_TTL_KEY = b));
  },
  66,
);
