__d(
  "WAWebFrontendContactGetters",
  [
    "fbt",
    "WAWebAlphaRegex",
    "WAWebBizCoexGatingUtils",
    "WAWebBusinessProfileTypes",
    "WAWebConnModel",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebL10NAccentFold",
    "WAWebL10NRemoveAccents",
    "WAWebLidMigrationUtils",
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WAWebWid",
    "WAWebWidFormat",
    "cr:17143",
    "fbs",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = (e = n("cr:17143")) != null ? e : {},
      c = u.ContactCollection,
      d = o("WAWebGetters").createGetterFactories({
        root: o("WAWebContactGetters").getContactUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendContactsCache,
      }),
      m = d.computed,
      p = d.field,
      _ = p("phoneNumber"),
      f = p("displayNameLID"),
      g = p("locale"),
      h = p("pendingAction"),
      y = p("isContactBlocked"),
      C = p("shareOwnPn"),
      b = p("businessProfile"),
      v = p("commonGroups"),
      S = p("businessCatalog"),
      R = p("textStatusString"),
      L = p("textStatusEmoji"),
      E = p("textStatusEphemeralDuration"),
      k = p("textStatusLastUpdateTime"),
      I = p("textStatusExpiryTs"),
      T = p("usernameKey"),
      D = p("username");
    function x() {
      var e = c == null ? void 0 : c.getMeContact();
      return e != null ? D(e) : null;
    }
    var $ = p("isUsernameContact"),
      P = p("isEphemeralityDisabled"),
      N = m(
        function (e) {
          var t = e[0];
          return t != null && t.length > 0
            ? {
                displayName: "@" + t,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME,
              }
            : null;
        },
        [D],
      ),
      M = m(
        function (e) {
          var t = e[0];
          return t != null ? t.displayName : null;
        },
        [N],
      ),
      w = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return n != null &&
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
            ? {
                displayName: n,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME,
              }
            : t != null
              ? {
                  displayName: t,
                  type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                    .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.MASKED_PHONE_NUMBER,
                }
              : {
                  displayName: o("WAWebWidFormat").getUnknownUserOrNumber(r),
                  type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                    .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER,
                };
        },
        [f, M, o("WAWebContactGetters").getId],
      ),
      A = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null
            ? {
                displayName: o("WAWebWidFormat").widToFormattedUser(t),
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER,
              }
            : n;
        },
        [_, w],
      ),
      F = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [A],
      ),
      O = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null && t !== ""
            ? {
                displayName: t,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME,
              }
            : n;
        },
        [o("WAWebContactGetters").getName, A],
      ),
      B = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [O],
      ),
      W = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.isLid()
            ? n
            : {
                displayName: o("WAWebWidFormat").widToFormattedUser(t),
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER,
              };
        },
        [o("WAWebContactGetters").getId, A],
      ),
      q = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return n != null &&
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
            ? n
            : t;
        },
        [W, N],
      ),
      U = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [w],
      ),
      V = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [q],
      );
    function H(e) {
      return e
        ? r("fbs")._(/*BTDS*/ "WhatsApp Business").toString()
        : r("fbs")._(/*BTDS*/ "WhatsApp").toString();
    }
    var G = m(
        function (e) {
          var t = e[0],
            n = e[1];
          if (!t.isRegularUser()) return !1;
          if (t.isLid()) return n;
          var r = o("WAWebLidMigrationUtils").toUserLid(t),
            a = r != null ? (c == null ? void 0 : c.get(r)) : null;
          return a != null && a.isUsernameContact;
        },
        [o("WAWebContactGetters").getId, $],
      ),
      z = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !!(t && ((n != null && n.length) || r));
        },
        [
          o("WAWebContactGetters").getIsUser,
          o("WAWebContactGetters").getName,
          G,
        ],
      ),
      j = m(
        function (e) {
          var t = e[0];
          return (t == null ? void 0 : t.isAuthorizedAgent) === !0;
        },
        [b],
      ),
      K = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            !r && t && n !== o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH
          );
        },
        [
          o("WAWebContactGetters").getIsBusiness,
          o("WAWebContactGetters").getVerifiedLevel,
          z,
        ],
      ),
      Q = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3],
            i = e[4],
            l = e[5];
          return r
            ? l &&
              i === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW &&
              a !== "" &&
              o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled()
              ? a
              : null
            : t || n;
        },
        [
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getNotifyName,
          K,
          o("WAWebContactGetters").getVerifiedName,
          o("WAWebContactGetters").getVerifiedLevel,
          j,
        ],
      ),
      X = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3];
          return a &&
            !r("isStringNullOrEmpty")(o("WAWebConnModel").Conn.pushname)
            ? {
                displayName: o("WAWebConnModel").Conn.pushname,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PUSHNAME,
              }
            : r("WAWebWid").isPSA(t)
              ? { displayName: H(o("WAWebConnModel").Conn.isSMB), type: null }
              : n != null && n !== ""
                ? {
                    displayName: n,
                    type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                      .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME,
                  }
                : i;
        },
        [
          o("WAWebContactGetters").getId,
          Q,
          o("WAWebContactGetters").getIsMe,
          q,
        ],
      ),
      Y = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [X],
      ),
      J = m(
        function (e) {
          var t = e[0];
          return t.type;
        },
        [X],
      ),
      Z = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4];
          if (r("WAWebWid").isPSA(a))
            return {
              displayName: H(o("WAWebConnModel").Conn.isSMB),
              type: null,
            };
          if (r("WAWebWid").isSupportAccount(a))
            return {
              displayName: o("WAWebL10NAccentFold").accentFold(
                "WhatsApp Support",
              ),
              type: null,
            };
          if (i) {
            var u = s._(/*BTDS*/ "{nameOrPhoneNumber} (You)", [
              s._param("nameOrPhoneNumber", t != null ? t : n),
            ]);
            return {
              displayName: o("WAWebL10NAccentFold").accentFold(u.toString()),
              type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME,
            };
          }
          return t != null
            ? {
                displayName: o("WAWebL10NAccentFold").accentFold(t),
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME,
              }
            : null;
        },
        [
          o("WAWebContactGetters").getName,
          V,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
          g,
        ],
      ),
      ee = m(
        function (e) {
          var t = e[0];
          return t != null ? t.displayName : null;
        },
        [Z],
      ),
      te = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4],
            s = e[5],
            u = e[6],
            c = e[7];
          return n
            ? u
              ? {
                  displayName: r("fbs")._(/*BTDS*/ "You").toString(),
                  type: null,
                }
              : r("WAWebWid").isPSA(n)
                ? { displayName: H(o("WAWebConnModel").Conn.isSMB), type: null }
                : r("WAWebWid").isSupportAccount(n)
                  ? { displayName: "WhatsApp Support", type: null }
                  : t
                    ? {
                        displayName: t,
                        type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                          .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE
                          .SAVED_CONTACT_NAME,
                      }
                    : a ===
                          o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH &&
                        i
                      ? {
                          displayName: i,
                          type: o(
                            "WAWebWamEnumOppositeVisibleIdentificationType",
                          ).OPPOSITE_VISIBLE_IDENTIFICATION_TYPE
                            .VERIFIED_BUSINESS_NAME,
                        }
                      : s
                        ? l
                        : { displayName: "", type: null }
            : { displayName: "", type: null };
        },
        [
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getVerifiedLevel,
          o("WAWebContactGetters").getVerifiedName,
          q,
          o("WAWebContactGetters").getIsUser,
          o("WAWebContactGetters").getIsMe,
          g,
        ],
      ),
      ne = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [te],
      ),
      re = m(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2],
            a = e[3],
            i = e[4];
          if (!o) return { displayName: "", type: null };
          if (a)
            return {
              displayName: r("fbs")._(/*BTDS*/ "You").toString(),
              type: null,
            };
          if (t != null) return { displayName: t, type: null };
          var l = n.displayName;
          return { displayName: l && l.replace(/\s/g, " "), type: n.type };
        },
        [
          o("WAWebContactGetters").getShortName,
          te,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
          g,
        ],
      ),
      oe = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [re],
      ),
      ae = m(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2],
            a = e[3],
            i = e[4];
          if (!o) return { displayName: "", type: null };
          if (a)
            return {
              displayName: r("fbs")._(/*BTDS*/ "You").toString(),
              type: null,
            };
          if (t != null && t !== "") return { displayName: t, type: null };
          var l = n.displayName,
            s = n.type;
          return { displayName: l, type: s };
        },
        [
          o("WAWebContactGetters").getShortName,
          te,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
          g,
        ],
      ),
      ie = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [ae],
      ),
      le = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4],
            s = e[5];
          return n
            ? r("WAWebWid").isPSA(n)
              ? { displayName: H(o("WAWebConnModel").Conn.isSMB), type: null }
              : r("WAWebWid").isSupportAccount(n)
                ? { displayName: "WhatsApp Support", type: null }
                : t
                  ? {
                      displayName: t,
                      type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                        .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE
                        .SAVED_CONTACT_NAME,
                    }
                  : a >= o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW && i
                    ? {
                        displayName: i,
                        type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                          .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE
                          .VERIFIED_BUSINESS_NAME,
                      }
                    : l
            : { displayName: "", type: null };
        },
        [
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getVerifiedLevel,
          o("WAWebContactGetters").getVerifiedName,
          q,
          g,
        ],
      ),
      se = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [le],
      ),
      ue = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t
            ? {
                displayName: t,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME,
              }
            : n
              ? {
                  displayName: n,
                  type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                    .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PUSHNAME,
                }
              : null;
        },
        [
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getPushname,
        ],
      ),
      ce = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3],
            a = e[4];
          return t && !!r && o && n !== r && !a.isBot();
        },
        [
          o("WAWebContactGetters").getIsBusiness,
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getVerifiedName,
          z,
          o("WAWebContactGetters").getId,
        ],
      ),
      de = /^[^0-9]+$/,
      me = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r =
              t === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW &&
              o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled();
          return t !== o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH && !r
            ? null
            : n
              ? o("WAWebL10NAccentFold").accentFold(n)
              : null;
        },
        [
          o("WAWebContactGetters").getVerifiedLevel,
          o("WAWebContactGetters").getVerifiedName,
        ],
      ),
      pe = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3];
          function l(e) {
            var t = e.toLowerCase(),
              n = r("WAWebAlphaRegex").exec(t);
            if ((n && n.index === 0) || (n && de.test(t.slice(n.index)))) {
              var a = n[0],
                i = o("WAWebL10NRemoveAccents").removeAccents(a);
              return o("WAWebContactComparator").getCollator().compare(i, a)
                ? a
                : i;
            }
            return "#";
          }
          return t
            ? l(t)
            : (a === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH ||
                  (a === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW &&
                    o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled())) &&
                n
              ? l(n)
              : i != null && i !== ""
                ? "~"
                : "#";
        },
        [
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getVerifiedName,
          o("WAWebContactGetters").getVerifiedLevel,
          o("WAWebContactGetters").getNotifyName,
        ],
      );
    ((l.getPhoneNumber = _),
      (l.getPendingAction = h),
      (l.getIsContactBlocked = y),
      (l.getShareOwnPn = C),
      (l.getBusinessProfile = b),
      (l.getCommonGroups = v),
      (l.getBusinessCatalog = S),
      (l.getTextStatusString = R),
      (l.getTextStatusEmoji = L),
      (l.getTextStatusEphemeralDuration = E),
      (l.getTextStatusLastUpdateTime = k),
      (l.getTextStatusExpiryTs = I),
      (l.getUsernameKey = T),
      (l.getUsername = D),
      (l.getMyUsername = x),
      (l.getIsEphemeralityDisabled = P),
      (l.getFormattedUsernameAndType = N),
      (l.getFormattedUsername = M),
      (l.getPnForLid = F),
      (l.getUserDisplayNameForLid = B),
      (l.getFormattedPhoneAndType = W),
      (l.getFormattedUsernameOrPhoneAndType = q),
      (l.getMaskedPhoneLid = U),
      (l.getFormattedUsernameOrPhone = V),
      (l.getIsUsernameContact = G),
      (l.getIsMyContact = z),
      (l.getIsNonVerified = K),
      (l.getDisplayNameAndType = X),
      (l.getDisplayName = Y),
      (l.getDisplayNameType = J),
      (l.getSearchName = ee),
      (l.getFormattedNameAndType = te),
      (l.getFormattedName = ne),
      (l.getFormattedShortNameWithNonBreakingSpaces = oe),
      (l.getFormattedShortNameAndType = ae),
      (l.getFormattedShortName = ie),
      (l.getFormattedUserAndType = le),
      (l.getFormattedUser = se),
      (l.getFormattedSavedNameOrPushnameWithType = ue),
      (l.getShowBiz3pBotVerifiedNameAsSecondary = ce),
      (l.getSearchVerifiedName = me),
      (l.getHeader = pe));
  },
  226,
);
