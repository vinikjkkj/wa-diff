__d(
  "WAWebFalcoCanonicalWebcEnv",
  ["WAWebWamEnumWebcEnvCode", "WAWebWamUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        ((e = {}),
        (e[(s = o("WAWebWamEnumWebcEnvCode")).WEBC_ENV_CODE.PROD] = "prod"),
        (e[s.WEBC_ENV_CODE.INTERN] = "intern"),
        (e[s.WEBC_ENV_CODE.DEV] = "dev"),
        (e[s.WEBC_ENV_CODE.E2E] = "e2e"),
        e);
    function c() {
      return u[o("WAWebWamUtils").getWamEnv()];
    }
    l.default = c;
  },
  98,
);
