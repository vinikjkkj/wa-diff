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
      h = c("address"),
      y = c("businessHours"),
      C = c("catalogStatus"),
      b = c("categories"),
      v = c("commands"),
      S = c("commandsDescription"),
      R = c("coverPhoto"),
      L = c("description"),
      E = c("email"),
      k = c("fbPage"),
      I = c("googlePlaceId"),
      T = c("igProfessional"),
      D = c("dataSource"),
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
        [f],
      ),
      V = u(
        function (e) {
          var t = e[0];
          return t === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P;
        },
        [_],
      ),
      H = u(
        function (e) {
          var t = e[0];
          return t === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P;
        },
        [_],
      );
    ((l.clearBusinessProfileGetterCacheFor = m),
      (l.getBusinessProfileUnsafe = p),
      (l.getAutomatedType = _),
      (l.getProfileOptions = g),
      (l.getAddress = h),
      (l.getBusinessHours = y),
      (l.getCatalogStatus = C),
      (l.getCategories = b),
      (l.getCommands = v),
      (l.getCommandsDescription = S),
      (l.getCoverPhoto = R),
      (l.getDescription = L),
      (l.getEmail = E),
      (l.getFbPage = k),
      (l.getGooglePlaceId = I),
      (l.getIgProfessional = T),
      (l.getDataSource = D),
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
