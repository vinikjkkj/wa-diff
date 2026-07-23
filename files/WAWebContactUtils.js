__d(
  "WAWebContactUtils",
  [
    "WALogger",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactManagementGating",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebPrimaryFeaturesModel",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVcardParsingUtils",
    "WAWebWamEnumBizPlatform",
    "WAWebWid",
    "WAWebWidFactory",
    "WAXplatTrim",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = /^[A-Za-z\s]+$/;
    function u(e) {
      if (e == null) return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
      var t = o("WAWebContactCollection").ContactCollection.get(
        o("WAWebWidFactory").createWid(e),
      );
      return t == null || !t.isBusiness
        ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
        : t.isEnterprise
          ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT
          : o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB;
    }
    function c(e) {
      var t = o("WAXplatTrim").trim(e != null ? e : "");
      if (!t) return { firstName: "", lastName: "" };
      if (s.test(t)) {
        var n = t.split(" ").filter(function (e) {
          return e.length > 0;
        });
        if (n.length === 2) return { firstName: n[0], lastName: n[1] };
      }
      return { firstName: t, lastName: "" };
    }
    function d(e) {
      var t = e.id;
      if (t.isRegularUser()) {
        var n = o("WAWebLidMigrationUtils").toUserLid(t),
          a = t.isRegularUserPn() ? t : e.phoneNumber,
          i = o("WAWebUsernameTypes").serializeMaybeUsername(e.username),
          l = o("WAWebFrontendContactGetters").getIsMyContact(e);
        if (!l) {
          var s,
            u = (s = e.pushname) != null ? s : e.verifiedName,
            d = c(u),
            m = d.firstName,
            p = d.lastName,
            _ =
              o(
                "WAWebUsernameWorkerCompatibleGatingUtils",
              ).usernameContactUIEnabled() &&
              !r("isStringNullOrEmpty")(i) &&
              !e.isSmb;
          return {
            lid: n,
            phoneNumber: _ ? null : a,
            firstName: m,
            lastName: p,
            isExistingContact: l,
            username: i,
          };
        }
        var f = e.shortName,
          g = e.name.replace(f, "").trim();
        if (r("isStringNullOrEmpty")(f) && !r("isStringNullOrEmpty")(g)) {
          var y = g.split(" "),
            C = y[0],
            b = babelHelpers.arrayLikeToArray(y).slice(1);
          ((f = C), (g = b.join(" ")));
        }
        var v = o("WAWebFrontendContactGetters").getIsUsernameContact(e);
        return {
          lid: n,
          phoneNumber: v ? null : a,
          firstName: f,
          lastName: g,
          isExistingContact: l,
          syncToAddressbook: h(e),
          username: i,
        };
      }
    }
    function m(e) {
      return (
        e.isRegularUser() &&
        !o("WAWebUserPrefsMeUser").isMeAccount(e) &&
        !r("WAWebWid").isAiHub(e) &&
        !r("WAWebWid").isIAS(e) &&
        !r("WAWebWid").isCAPISupportAccount(e) &&
        !r("WAWebWid").isSupportAccount(e)
      );
    }
    function p() {
      return (
        !o("WAWebPrimaryFeaturesModel").PrimaryFeatures.isContactsBackupOn ||
        !o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .primaryHasAgreedToNativeContactsNux
      );
    }
    function _(t) {
      var n, r, a, i, l, s, u;
      if (!t) return null;
      var c =
          t == null || (n = t.N) == null || (n = n[0]) == null
            ? void 0
            : n.value,
        d =
          t == null || (r = t.FN) == null || (r = r[0]) == null
            ? void 0
            : r.value,
        m = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(t)[0],
        p = o("WAWebVcardParsingUtils").vcardLidWid(t);
      if (m == null && p == null)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "vcard has no phone number or lid",
                ])),
            )
            .sendLogs("vcard-no-phone-number-or-lid", { sampling: 0.01 }),
          null
        );
      var _ =
          (a =
            p != null
              ? o("WAWebContactCollection").ContactCollection.get(p)
              : null) != null
            ? a
            : o("WAWebContactCollection").ContactCollection.get(m),
        f = _ != null && o("WAWebFrontendContactGetters").getIsMyContact(_);
      return {
        lid: p,
        phoneNumber: m,
        firstName:
          (i =
            (l = c == null ? void 0 : c[1]) != null
              ? l
              : d == null
                ? void 0
                : d.split(" ")[0]) != null
            ? i
            : "",
        lastName:
          (s =
            (u = c == null ? void 0 : c[0]) != null
              ? u
              : d == null
                ? void 0
                : d.split(" ")[1]) != null
            ? s
            : "",
        isExistingContact: f,
        username: o("WAWebUsernameTypes").serializeMaybeUsername(
          _ == null ? void 0 : _.username,
        ),
      };
    }
    function f(e, t) {
      for (var n = [], r = 0, a = 0; r < e.length && a < t.length; )
        o("WAWebContactComparator").ContactComparator(e[r], t[a]) <= 0
          ? (n.push(e[r]), r++)
          : (n.push(t[a]), a++);
      for (; r < e.length; ) (n.push(e[r]), r++);
      for (; a < t.length; ) (n.push(t[a]), a++);
      return n;
    }
    function g(e) {
      (e.name &&
        (e.set("name", void 0),
        e.set("shortName", void 0),
        e.set("type", "out")),
        e.set("isUsernameContact", !1));
    }
    function h(e) {
      var t;
      return o("WAWebContactManagementGating").contactManagementEnabled()
        ? (t = e.syncToAddressbook) != null
          ? t
          : !0
        : !1;
    }
    ((l.getMaybeBizPlatformForLogging = u),
      (l.splitContactName = c),
      (l.getContactDataFromContactModel = d),
      (l.canSaveAsMyContact = m),
      (l.shouldShowNativeContactsNux = p),
      (l.getContactDataFromVcard = _),
      (l.mergeSortedContacts = f),
      (l.setContactNotMine = g));
  },
  98,
);
