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
      v = u("isDeactivated"),
      S = u("requestedPnTimestamp"),
      R = u("shortName"),
      L = u("isEnterprise"),
      E = u("isSmb"),
      k = u("labels"),
      I = u("statusMute"),
      T = u("parentStatusMute"),
      D = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [I, T],
      ),
      x = u("privacyMode"),
      $ = u("isHosted"),
      P = u("businessProfile"),
      N = s(
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
      M = s(
        function (e) {
          var t = e[0];
          return t || "";
        },
        [p],
      ),
      w = s(
        function (e) {
          var t = e[0];
          return o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [m],
      ),
      A = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isUser(t);
        },
        [m],
      ),
      F = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isGroup(t);
        },
        [m],
      ),
      O = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBroadcast(t);
        },
        [m],
      ),
      B = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isNewsletter(t);
        },
        [m],
      ),
      W = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isBot(t);
        },
        [m],
      ),
      q = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t);
        },
        [m],
      ),
      U = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t);
        },
        [m],
      ),
      V = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t);
        },
        [m],
      ),
      H = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isSupportAccount(t);
        },
        [m],
      ),
      G = s(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t);
        },
        [m],
      ),
      z = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === "in";
        },
        [A, b],
      ),
      j = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [A, v],
      ),
      K = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t ? o("WAMd5").md5((n.user || "") + "WA_ADD_NOTIF") : null;
        },
        [A, m],
      ),
      Q = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t ? r("WAWebWid").user(n) : null;
        },
        [A, m],
      ),
      X = s(
        function (e) {
          var t = e[0];
          return (
            t == null ||
            t + o("WATimeUtils").DAY_SECONDS < o("WATimeUtils").unixTime()
          );
        },
        [S],
      ),
      Y = s(
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
        [_, f, h, g, H, m],
      ),
      J = s(
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
      Z = s(
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
      ee = s(
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
      te = s(
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
        [y, C, A],
      ),
      ne = s(
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
      (l.getRequestedPnTimestamp = S),
      (l.getShortName = R),
      (l.getIsEnterprise = L),
      (l.getIsSmb = E),
      (l.getLabels = k),
      (l.getStatusMute = I),
      (l.getCalculatedStatusMute = D),
      (l.getPrivacyMode = x),
      (l.getIsHosted = $),
      (l.getBusinessProfile = P),
      (l.getNotifyName = N),
      (l.getPremiumMessageName = M),
      (l.getIsMe = w),
      (l.getIsUser = A),
      (l.getIsGroup = F),
      (l.getIsBroadcast = O),
      (l.getIsNewsletter = B),
      (l.getIsBot = W),
      (l.getIsAiHub = q),
      (l.getIsPSA = U),
      (l.getIsIAS = V),
      (l.getIsSupportAccount = H),
      (l.getIsCAPISupportAccount = G),
      (l.getIsWAContact = z),
      (l.getIsContactDeactivated = j),
      (l.getUserhash = K),
      (l.getUserid = Q),
      (l.getCanRequestPhoneNumber = X),
      (l.getShowBusinessCheckmarkAsPrimary = Y),
      (l.getShowBusinessCheckmarkAsSecondary = J),
      (l.getShowBusinessCheckmarkInChatlist = Z),
      (l.getIsDisplayNameApproved = ee),
      (l.getShouldForceBusinessUpdate = te),
      (l.getShowAsMetaVerified = ne));
  },
  98,
);
