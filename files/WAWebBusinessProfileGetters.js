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
      _ = c("id"),
      f = c("automatedType"),
      g = c("customUrlPath"),
      h = c("profileOptions"),
      y = c("address"),
      C = c("businessHours"),
      b = c("catalogStatus"),
      v = c("categories"),
      S = c("commands"),
      R = c("commandsDescription"),
      L = c("coverPhoto"),
      E = c("description"),
      k = c("email"),
      I = c("fbPage"),
      T = c("googlePlaceId"),
      D = c("igProfessional"),
      x = c("isAuthorizedAgent"),
      $ = c("isProfileLinked"),
      P = c("latitude"),
      N = c("longitude"),
      M = c("obaPhoneNumber"),
      w = c("parentCompanyLogoUrl"),
      A = c("parentCompanyName"),
      F = c("prompts"),
      O = c("showGoogleInfo"),
      B = c("showGoogleReviews"),
      W = c("website"),
      q = c("welcomeMsgProtocolMode"),
      U = u(
        function (e) {
          var t = e[0],
            n;
          if (t != null) n = t;
          else return null;
          return "" + o("WAWebBusinessProfileTypes").BUSINESS_URL_DOMAIN + n;
        },
        [g],
      ),
      V = u(
        function (e) {
          var t = e[0];
          return t === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P;
        },
        [f],
      ),
      H = u(
        function (e) {
          var t = e[0];
          return t === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P;
        },
        [f],
      );
    ((l.clearBusinessProfileGetterCacheFor = m),
      (l.getBusinessProfileUnsafe = p),
      (l.getId = _),
      (l.getAutomatedType = f),
      (l.getCustomUrlPath = g),
      (l.getProfileOptions = h),
      (l.getAddress = y),
      (l.getBusinessHours = C),
      (l.getCatalogStatus = b),
      (l.getCategories = v),
      (l.getCommands = S),
      (l.getCommandsDescription = R),
      (l.getCoverPhoto = L),
      (l.getDescription = E),
      (l.getEmail = k),
      (l.getFbPage = I),
      (l.getGooglePlaceId = T),
      (l.getIgProfessional = D),
      (l.getIsAuthorizedAgent = x),
      (l.getIsProfileLinked = $),
      (l.getLatitude = P),
      (l.getLongitude = N),
      (l.getObaPhoneNumber = M),
      (l.getParentCompanyLogoUrl = w),
      (l.getParentCompanyName = A),
      (l.getPrompts = F),
      (l.getShowGoogleInfo = O),
      (l.getShowGoogleReviews = B),
      (l.getWebsite = W),
      (l.getWelcomeMsgProtocolMode = q),
      (l.getCustomUrl = U),
      (l.getIsBizBot3p = V),
      (l.getIsBizBot1p = H));
  },
  98,
);
