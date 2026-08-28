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
      x = u("statusMute"),
      $ = u("parentStatusMute"),
      P = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [x, $],
      ),
      N = u("privacyMode"),
      M = u("isHosted"),
      w = u("businessProfile"),
      A = s(
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
      F = s(
        function (e) {
          var t = e[0];
          return t || "";
        },
        [p],
      ),
      O = s(
        function (e) {
          var t = e[0];
          return o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [m],
      ),
      B = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isUser(t);
        },
        [m],
      ),
      W = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isGroup(t);
        },
        [m],
      ),
      q = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBroadcast(t);
        },
        [m],
      ),
      U = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isNewsletter(t);
        },
        [m],
      ),
      V = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBot(t);
        },
        [m],
      ),
      H = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t);
        },
        [m],
      ),
      G = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t);
        },
        [m],
      ),
      z = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t);
        },
        [m],
      ),
      j = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isSupportAccount(t);
        },
        [m],
      ),
      K = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t);
        },
        [m],
      ),
      Q = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === "in";
        },
        [B, L],
      ),
      X = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t ? r("WAWebWid").user(n) : null;
        },
        [B, m],
      ),
      Y = s(
        function (e) {
          var t = e[0];
          return (
            t == null ||
            t + o("WATimeUtils").DAY_SECONDS < o("WATimeUtils").unixTime()
          );
        },
        [E],
      ),
      J = s(
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
        [_, C, v, b, j, m],
      ),
      Z = s(
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
      ee = s(
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
      te = s(
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
      ne = s(
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
        [S, R, B],
      ),
      re = s(
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
      (l.getStatusMute = x),
      (l.getCalculatedStatusMute = P),
      (l.getPrivacyMode = N),
      (l.getIsHosted = M),
      (l.getBusinessProfile = w),
      (l.getNotifyName = A),
      (l.getPremiumMessageName = F),
      (l.getIsMe = O),
      (l.getIsUser = B),
      (l.getIsGroup = W),
      (l.getIsBroadcast = q),
      (l.getIsNewsletter = U),
      (l.getIsBot = V),
      (l.getIsAiHub = H),
      (l.getIsPSA = G),
      (l.getIsIAS = z),
      (l.getIsSupportAccount = j),
      (l.getIsCAPISupportAccount = K),
      (l.getIsWAContact = Q),
      (l.getUserid = X),
      (l.getCanRequestPhoneNumber = Y),
      (l.getShowBusinessCheckmarkAsPrimary = J),
      (l.getShowBusinessCheckmarkAsSecondary = Z),
      (l.getShowBusinessCheckmarkInChatlist = ee),
      (l.getIsDisplayNameApproved = te),
      (l.getShouldForceBusinessUpdate = ne),
      (l.getShowAsMetaVerified = re));
  },
  98,
);
