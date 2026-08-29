__d(
  "WAWebContactGetters",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebBusinessProfileTypes",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createContactsCache,
      }),
      s = e.computed,
      u = e.field,
      c = e.unsafeIdentityGetter,
      d = c,
      m = u("id"),
      p = u("pushname"),
      _ = u("isBusiness"),
      f = u("isContactOptedOut"),
      g = u("isEverOptedOutOfMarketingMessages"),
      h = u("isMarketingMessageThread"),
      y = u("profilePicThumb"),
      C = u("verifiedLevel"),
      b = u("verifiedName"),
      v = u("name"),
      S = u("forcedBusinessUpdateFromServer"),
      R = u("isContactSyncCompleted"),
      L = u("type"),
      E = u("requestedPnTimestamp"),
      k = u("shortName"),
      I = u("isEnterprise"),
      T = u("isSmb"),
      D = u("labels"),
      x = u("disappearingModeDuration"),
      $ = u("disappearingModeSettingTimestamp"),
      P = u("statusMute"),
      N = u("parentStatusMute"),
      M = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [P, N],
      ),
      w = u("privacyMode"),
      A = u("isHosted"),
      F = u("businessProfile"),
      O = s(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return n && r !== o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH
            ? a
            : t;
        },
        [p, _, C, b],
      ),
      B = s(
        function (e) {
          var t = e[0];
          return t || "";
        },
        [p],
      ),
      W = s(
        function (e) {
          var t = e[0];
          return o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [m],
      ),
      q = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isUser(t);
        },
        [m],
      ),
      U = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isGroup(t);
        },
        [m],
      ),
      V = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBroadcast(t);
        },
        [m],
      ),
      H = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isNewsletter(t);
        },
        [m],
      ),
      G = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBot(t);
        },
        [m],
      ),
      z = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t);
        },
        [m],
      ),
      j = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t);
        },
        [m],
      ),
      K = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t);
        },
        [m],
      ),
      Q = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isMetaForBusiness(t);
        },
        [m],
      ),
      X = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isSupportAccount(t);
        },
        [m],
      ),
      Y = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t);
        },
        [m],
      ),
      J = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === "in";
        },
        [q, L],
      ),
      Z = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t ? r("WAWebWid").user(n) : null;
        },
        [q, m],
      ),
      ee = s(
        function (e) {
          var t = e[0];
          return (
            t == null ||
            t + o("WATimeUtils").DAY_SECONDS < o("WATimeUtils").unixTime()
          );
        },
        [E],
      ),
      te = s(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3],
            i = e[4],
            l = e[5];
          return (
            i ||
            o("WAWebBotUtils").isBotChannelFBID(l) ||
            (t &&
              n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH &&
              (r === a || !r || l.isBot()))
          );
        },
        [_, C, v, b, X, m],
      ),
      ne = s(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return (
            t &&
            n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH &&
            !!r &&
            r !== a
          );
        },
        [_, C, v, b],
      ),
      re = s(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            o("WAWebBotUtils").isBotChannelFBID(r) ||
            (t && n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH)
          );
        },
        [_, C, m],
      ),
      oe = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t &&
            (n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH ||
              n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW)
          );
        },
        [_, C],
      ),
      ae = s(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2];
          return !r("justknobx")._("2452") &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_reduce_cascading_updates_chat_open",
            ) &&
            !a
            ? !1
            : !t && !n;
        },
        [S, R, q],
      ),
      ie = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH;
        },
        [_, C],
      );
    ((l.getContactUnsafe = d),
      (l.getId = m),
      (l.getPushname = p),
      (l.getIsBusiness = _),
      (l.getIsContactOptedOut = f),
      (l.getIsEverOptedOutOfMarketingMessages = g),
      (l.getIsMarketingMessageThread = h),
      (l.getProfilePicThumb = y),
      (l.getVerifiedLevel = C),
      (l.getVerifiedName = b),
      (l.getName = v),
      (l.getRequestedPnTimestamp = E),
      (l.getShortName = k),
      (l.getIsEnterprise = I),
      (l.getIsSmb = T),
      (l.getLabels = D),
      (l.getDisappearingModeDuration = x),
      (l.getDisappearingModeSettingTimestamp = $),
      (l.getStatusMute = P),
      (l.getCalculatedStatusMute = M),
      (l.getPrivacyMode = w),
      (l.getIsHosted = A),
      (l.getBusinessProfile = F),
      (l.getNotifyName = O),
      (l.getPremiumMessageName = B),
      (l.getIsMe = W),
      (l.getIsUser = q),
      (l.getIsGroup = U),
      (l.getIsBroadcast = V),
      (l.getIsNewsletter = H),
      (l.getIsBot = G),
      (l.getIsAiHub = z),
      (l.getIsPSA = j),
      (l.getIsIAS = K),
      (l.getIsMetaForBusiness = Q),
      (l.getIsSupportAccount = X),
      (l.getIsCAPISupportAccount = Y),
      (l.getIsWAContact = J),
      (l.getUserid = Z),
      (l.getCanRequestPhoneNumber = ee),
      (l.getShowBusinessCheckmarkAsPrimary = te),
      (l.getShowBusinessCheckmarkAsSecondary = ne),
      (l.getShowBusinessCheckmarkInChatlist = re),
      (l.getIsDisplayNameApproved = oe),
      (l.getShouldForceBusinessUpdate = ae),
      (l.getShowAsMetaVerified = ie));
  },
  98,
);
