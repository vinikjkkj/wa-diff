__d(
  "WAWebContactGetters",
  [
    "WAMd5",
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
      f = u("verifiedLevel"),
      g = u("verifiedName"),
      h = u("name"),
      y = u("forcedBusinessUpdateFromServer"),
      C = u("isContactSyncCompleted"),
      b = u("type"),
      v = u("requestedPnTimestamp"),
      S = u("shortName"),
      R = u("isEnterprise"),
      L = u("isSmb"),
      E = u("labels"),
      k = u("statusMute"),
      I = u("parentStatusMute"),
      T = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [k, I],
      ),
      D = u("privacyMode"),
      x = u("isHosted"),
      $ = u("businessProfile"),
      P = s(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return n && r !== o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH
            ? a
            : t;
        },
        [p, _, f, g],
      ),
      N = s(
        function (e) {
          var t = e[0];
          return t || "";
        },
        [p],
      ),
      M = s(
        function (e) {
          var t = e[0];
          return o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [m],
      ),
      w = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isUser(t);
        },
        [m],
      ),
      A = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isGroup(t);
        },
        [m],
      ),
      F = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBroadcast(t);
        },
        [m],
      ),
      O = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isNewsletter(t);
        },
        [m],
      ),
      B = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBot(t);
        },
        [m],
      ),
      W = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t);
        },
        [m],
      ),
      q = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t);
        },
        [m],
      ),
      U = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t);
        },
        [m],
      ),
      V = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isSupportAccount(t);
        },
        [m],
      ),
      H = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t);
        },
        [m],
      ),
      G = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === "in";
        },
        [w, b],
      ),
      z = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t ? o("WAMd5").md5((n.user || "") + "WA_ADD_NOTIF") : null;
        },
        [w, m],
      ),
      j = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t ? r("WAWebWid").user(n) : null;
        },
        [w, m],
      ),
      K = s(
        function (e) {
          var t = e[0];
          return (
            t == null ||
            t + o("WATimeUtils").DAY_SECONDS < o("WATimeUtils").unixTime()
          );
        },
        [v],
      ),
      Q = s(
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
        [_, f, h, g, V, m],
      ),
      X = s(
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
        [_, f, h, g],
      ),
      Y = s(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            o("WAWebBotUtils").isBotChannelFBID(r) ||
            (t && n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH)
          );
        },
        [_, f, m],
      ),
      J = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t &&
            (n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH ||
              n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW)
          );
        },
        [_, f],
      ),
      Z = s(
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
        [y, C, w],
      ),
      ee = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH;
        },
        [_, f],
      );
    ((l.getContactUnsafe = d),
      (l.getId = m),
      (l.getPushname = p),
      (l.getIsBusiness = _),
      (l.getVerifiedLevel = f),
      (l.getVerifiedName = g),
      (l.getName = h),
      (l.getRequestedPnTimestamp = v),
      (l.getShortName = S),
      (l.getIsEnterprise = R),
      (l.getIsSmb = L),
      (l.getLabels = E),
      (l.getStatusMute = k),
      (l.getCalculatedStatusMute = T),
      (l.getPrivacyMode = D),
      (l.getIsHosted = x),
      (l.getBusinessProfile = $),
      (l.getNotifyName = P),
      (l.getPremiumMessageName = N),
      (l.getIsMe = M),
      (l.getIsUser = w),
      (l.getIsGroup = A),
      (l.getIsBroadcast = F),
      (l.getIsNewsletter = O),
      (l.getIsBot = B),
      (l.getIsAiHub = W),
      (l.getIsPSA = q),
      (l.getIsIAS = U),
      (l.getIsSupportAccount = V),
      (l.getIsCAPISupportAccount = H),
      (l.getIsWAContact = G),
      (l.getUserhash = z),
      (l.getUserid = j),
      (l.getCanRequestPhoneNumber = K),
      (l.getShowBusinessCheckmarkAsPrimary = Q),
      (l.getShowBusinessCheckmarkAsSecondary = X),
      (l.getShowBusinessCheckmarkInChatlist = Y),
      (l.getIsDisplayNameApproved = J),
      (l.getShouldForceBusinessUpdate = Z),
      (l.getShowAsMetaVerified = ee));
  },
  98,
);
