__d(
  "WAWebFrontendContactGetters",
  [
    "fbt",
    "WAWebAlphaRegex",
    "WAWebBusinessProfileTypes",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactComparator",
    "WAWebContactExternalUserState",
    "WAWebContactGetters",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebL10NAccentFold",
    "WAWebL10NRemoveAccents",
    "WAWebLidMigrationUtils",
    "WAWebTextStatusUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
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
      g = p("externalUserState"),
      h = m(
        function (e) {
          var t = e[0];
          return o("WAWebContactExternalUserState").isGuestUser(t);
        },
        [g],
      ),
      y = p("birthday"),
      C = p("locale"),
      b = p("pendingAction"),
      v = p("isContactBlocked"),
      S = p("shareOwnPn"),
      R = p("businessProfile"),
      L = p("commonGroups"),
      E = p("businessCatalog"),
      k = p("textStatusString"),
      I = p("textStatusEmoji"),
      T = p("textStatusEphemeralDuration"),
      D = p("textStatusLastUpdateTime"),
      x = p("textStatusExpiryTs"),
      $ = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3],
            i = e[4];
          return o("WAWebTextStatusUtils").shouldDisplayTextStatus({
            textStatusEmoji: t,
            textStatusEphemeralDuration: n,
            textStatusExpiryTs: r,
            textStatusLastUpdateTime: a,
            textStatusString: i,
          });
        },
        [I, T, x, D, k],
      ),
      P = p("usernameKey"),
      N = p("username");
    function M() {
      var e = c == null ? void 0 : c.getMeContact();
      return e != null
        ? o("WAWebUsernameTypes").serializeMaybeUsername(N(e))
        : null;
    }
    var w = p("isUsernameContact"),
      A = p("isEphemeralityDisabled"),
      F = m(
        function (e) {
          var t = e[0];
          return o("WAWebUsernameTypes").isPresentUsername(t)
            ? {
                displayName: o("WAWebUsernameTypes").displayUsername(t),
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME,
              }
            : null;
        },
        [N],
      ),
      O = m(
        function (e) {
          var t = e[0];
          return t != null ? t.displayName : null;
        },
        [F],
      ),
      B = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3];
          return a ===
            o("WAWebContactExternalUserState").ExternalUserState.GuestUser &&
            !r("isStringNullOrEmpty")(i)
            ? {
                displayName: i,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PUSHNAME,
              }
            : n != null &&
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
                    displayName: o("WAWebWidFormat").getUnknownUserOrNumber(),
                    type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                      .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER,
                  };
        },
        [f, O, g, o("WAWebContactGetters").getPushname],
      ),
      W = m(
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
        [_, B],
      ),
      q = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [W],
      ),
      U = m(
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
        [o("WAWebContactGetters").getName, W],
      ),
      V = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [U],
      ),
      H = m(
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
        [o("WAWebContactGetters").getId, W],
      ),
      G = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return n != null &&
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
            ? n
            : t;
        },
        [H, F],
      ),
      z = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [B],
      ),
      j = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [G],
      );
    function K(e) {
      return e
        ? r("fbs")._(/*BTDS*/ "WhatsApp Business").toString()
        : r("fbs")._(/*BTDS*/ "WhatsApp").toString();
    }
    var Q = m(
        function (e) {
          var t = e[0],
            n = e[1];
          if (!t.isRegularUser()) return !1;
          if (t.isLid()) return n;
          var r = o("WAWebLidMigrationUtils").toUserLid(t),
            a = r != null ? (c == null ? void 0 : c.get(r)) : null;
          return a != null && a.isUsernameContact;
        },
        [o("WAWebContactGetters").getId, w],
      ),
      X = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !!(t && ((n != null && n.length) || r));
        },
        [
          o("WAWebContactGetters").getIsUser,
          o("WAWebContactGetters").getName,
          Q,
        ],
      ),
      Y = p("orgMemberName"),
      J = p("orgPrimaryId"),
      Z = p("orgPrimaryTag"),
      ee = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t && n === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH && !!r
          );
        },
        [
          o("WAWebContactGetters").getIsBusiness,
          o("WAWebContactGetters").getVerifiedLevel,
          o("WAWebContactGetters").getVerifiedName,
        ],
      ),
      te = m(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2],
            a = e[3],
            i = e[4],
            l = e[5];
          return t == null || a || i
            ? null
            : r("isStringNullOrEmpty")(n)
              ? l || r("isStringNullOrEmpty")(o)
                ? null
                : o
              : n;
        },
        [
          J,
          Y,
          o("WAWebContactGetters").getPushname,
          X,
          ee,
          o("WAWebContactGetters").getIsBusiness,
        ],
      ),
      ne = p("orgMemberFirstName"),
      re = m(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2],
            a = e[3];
          if (!r("isStringNullOrEmpty")(t) || n == null) return t;
          if (r("isStringNullOrEmpty")(o)) {
            var i = n.split(/\s/),
              l = i[0];
            return r("WAWebAlphaRegex").exec(l) ? l : n;
          }
          return r("isStringNullOrEmpty")(a) ? n : a;
        },
        [o("WAWebContactGetters").getShortName, te, Y, ne],
      ),
      oe = m(
        function (e) {
          var t = e[0];
          return (t == null ? void 0 : t.isAuthorizedAgent) === !0;
        },
        [R],
      ),
      ae = m(
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
          X,
        ],
      ),
      ie = m(
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
              a !== ""
              ? a
              : null
            : t || n;
        },
        [
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getNotifyName,
          ae,
          o("WAWebContactGetters").getVerifiedName,
          o("WAWebContactGetters").getVerifiedLevel,
          oe,
        ],
      ),
      le = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return n != null ? n : t;
        },
        [ie, te],
      ),
      se = ce(le),
      ue = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [ce(ie)],
      );
    function ce(e) {
      return m(
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
              ? {
                  displayName: K(
                    o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn),
                  ),
                  type: null,
                }
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
          e,
          o("WAWebContactGetters").getIsMe,
          G,
        ],
      );
    }
    var de = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [se],
      ),
      me = m(
        function (e) {
          var t = e[0];
          return t.type;
        },
        [se],
      ),
      pe = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4];
          if (r("WAWebWid").isPSA(a))
            return {
              displayName: o("WAWebL10NAccentFold").accentFold(
                K(o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)),
              ),
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
          j,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
          C,
        ],
      ),
      _e = m(
        function (e) {
          var t = e[0];
          return t != null ? t.displayName : null;
        },
        [pe],
      ),
      fe = m(
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
                ? {
                    displayName: K(
                      o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn),
                    ),
                    type: null,
                  }
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
          G,
          o("WAWebContactGetters").getIsUser,
          o("WAWebContactGetters").getIsMe,
          C,
        ],
      ),
      ge = Ie(fe),
      he = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [ge],
      ),
      ye = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [fe],
      ),
      Ce = m(
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
          re,
          ge,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
          C,
        ],
      ),
      be = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [Ce],
      ),
      ve = Re(re, ge),
      Se = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [Re(o("WAWebContactGetters").getShortName, fe)],
      );
    function Re(e, t) {
      return m(
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
          e,
          t,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
          C,
        ],
      );
    }
    var Le = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [ve],
      ),
      Ee = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4],
            s = e[5];
          return n
            ? r("WAWebWid").isPSA(n)
              ? {
                  displayName: K(
                    o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn),
                  ),
                  type: null,
                }
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
          G,
          C,
        ],
      ),
      ke = Ie(Ee);
    function Ie(e) {
      return m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2];
          return n == null
            ? t
            : {
                displayName: n,
                type: r("isStringNullOrEmpty")(a)
                  ? o("WAWebWamEnumOppositeVisibleIdentificationType")
                      .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PUSHNAME
                  : o("WAWebWamEnumOppositeVisibleIdentificationType")
                      .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME,
              };
        },
        [e, te, Y],
      );
    }
    var Te = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [ke],
      ),
      De = m(
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
      xe = m(
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
          X,
          o("WAWebContactGetters").getId,
        ],
      ),
      $e = /^[^0-9]+$/,
      Pe = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = t === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW;
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
      Ne = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4];
          function s(e) {
            var t = e.toLowerCase(),
              n = r("WAWebAlphaRegex").exec(t);
            if ((n && n.index === 0) || (n && $e.test(t.slice(n.index)))) {
              var a = n[0],
                i = o("WAWebL10NRemoveAccents").removeAccents(a);
              return o("WAWebContactComparator").getCollator().compare(i, a)
                ? a
                : i;
            }
            return "#";
          }
          return t
            ? s(t)
            : l != null
              ? s(l)
              : (a === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH ||
                    a === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW) &&
                  n
                ? s(n)
                : i != null && i !== ""
                  ? "~"
                  : "#";
        },
        [
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getVerifiedName,
          o("WAWebContactGetters").getVerifiedLevel,
          o("WAWebContactGetters").getNotifyName,
          te,
        ],
      );
    ((l.getPhoneNumber = _),
      (l.getIsGuest = h),
      (l.getBirthday = y),
      (l.getPendingAction = b),
      (l.getIsContactBlocked = v),
      (l.getShareOwnPn = S),
      (l.getBusinessProfile = R),
      (l.getCommonGroups = L),
      (l.getBusinessCatalog = E),
      (l.getTextStatusString = k),
      (l.getTextStatusEmoji = I),
      (l.getTextStatusEphemeralDuration = T),
      (l.getTextStatusLastUpdateTime = D),
      (l.getTextStatusExpiryTs = x),
      (l.getIsTextStatusDisplayable = $),
      (l.getUsernameKey = P),
      (l.getUsername = N),
      (l.getMyUsername = M),
      (l.getIsUsernameContactField = w),
      (l.getIsEphemeralityDisabled = A),
      (l.getFormattedUsernameAndType = F),
      (l.getFormattedUsername = O),
      (l.getDisplayNameForLidAndType = B),
      (l.getPnForLid = q),
      (l.getUserDisplayNameForLid = V),
      (l.getFormattedPhoneAndType = H),
      (l.getFormattedUsernameOrPhoneAndType = G),
      (l.getMaskedPhoneLid = z),
      (l.getFormattedUsernameOrPhone = j),
      (l.getIsUsernameContact = Q),
      (l.getIsMyContact = X),
      (l.getOrgMemberName = Y),
      (l.getOrgPrimaryId = J),
      (l.getOrgPrimaryTag = Z),
      (l.getShownOrgMemberName = te),
      (l.getIsNonVerified = ae),
      (l.getDisplayNameAndType = se),
      (l.getContactDisplayName = ue),
      (l.getDisplayName = de),
      (l.getDisplayNameType = me),
      (l.getSearchName = _e),
      (l.getContactFormattedNameAndType = fe),
      (l.getFormattedNameAndType = ge),
      (l.getFormattedName = he),
      (l.getContactFormattedName = ye),
      (l.getFormattedShortNameWithNonBreakingSpaces = be),
      (l.getFormattedShortNameAndType = ve),
      (l.getContactFormattedShortName = Se),
      (l.getFormattedShortName = Le),
      (l.getContactFormattedUserAndType = Ee),
      (l.getFormattedUserAndType = ke),
      (l.getFormattedUser = Te),
      (l.getFormattedSavedNameOrPushnameWithType = De),
      (l.getShowBiz3pBotVerifiedNameAsSecondary = xe),
      (l.getSearchVerifiedName = Pe),
      (l.getHeader = Ne));
  },
  226,
);
