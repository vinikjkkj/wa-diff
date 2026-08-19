__d(
  "WAWebBusinessProfileGetters",
  [
    "WAWebBotTypes",
    "WAWebBusinessProfileTypes",
    "WAWebGetters",
    "WAWebGettersCaches",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createBusinessProfileCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = e.unsafeIdentityGetter,
      m = s,
      p = d,
      _ = c("automatedType"),
      f = c("customUrlPath"),
      g = c("profileOptions"),
      h = u(
        function (e) {
          var t = e[0],
            n;
          if (t != null) n = t;
          else return null;
          return "" + o("WAWebBusinessProfileTypes").BUSINESS_URL_DOMAIN + n;
        },
        [f],
      ),
      y = u(
        function (e) {
          var t = e[0];
          return t === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P;
        },
        [_],
      );
    function C(e) {
      return e != null && y(e);
    }
    var b = u(
      function (e) {
        var t = e[0];
        return t === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P;
      },
      [_],
    );
    ((l.clearBusinessProfileGetterCacheFor = m),
      (l.getBusinessProfileUnsafe = p),
      (l.getAutomatedType = _),
      (l.getCustomUrlPath = f),
      (l.getProfileOptions = g),
      (l.getCustomUrl = h),
      (l.getIsBizBot3p = y),
      (l.isBizBot3pBusinessProfile = C),
      (l.getIsBizBot1p = b));
  },
  98,
);
