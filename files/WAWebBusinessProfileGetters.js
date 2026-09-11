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
      D = c("isAuthorizedAgent"),
      x = c("isProfileLinked"),
      $ = c("latitude"),
      P = c("longitude"),
      N = c("obaPhoneNumber"),
      M = c("parentCompanyLogoUrl"),
      w = c("parentCompanyName"),
      A = c("prompts"),
      F = c("showGoogleInfo"),
      O = c("showGoogleReviews"),
      B = c("website"),
      W = c("welcomeMsgProtocolMode"),
      q = u(
        function (e) {
          var t = e[0],
            n;
          if (t != null) n = t;
          else return null;
          return "" + o("WAWebBusinessProfileTypes").BUSINESS_URL_DOMAIN + n;
        },
        [f],
      ),
      U = u(
        function (e) {
          var t = e[0];
          return t === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P;
        },
        [_],
      ),
      V = u(
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
      (l.getIsAuthorizedAgent = D),
      (l.getIsProfileLinked = x),
      (l.getLatitude = $),
      (l.getLongitude = P),
      (l.getObaPhoneNumber = N),
      (l.getParentCompanyLogoUrl = M),
      (l.getParentCompanyName = w),
      (l.getPrompts = A),
      (l.getShowGoogleInfo = F),
      (l.getShowGoogleReviews = O),
      (l.getWebsite = B),
      (l.getWelcomeMsgProtocolMode = W),
      (l.getCustomUrl = q),
      (l.getIsBizBot3p = U),
      (l.getIsBizBot1p = V));
  },
  98,
);
