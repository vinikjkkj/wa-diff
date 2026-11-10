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
      y = p("locale"),
      C = p("pendingAction"),
      b = p("isContactBlocked"),
      v = p("shareOwnPn"),
      S = p("businessProfile"),
      R = p("commonGroups"),
      L = p("businessCatalog"),
      E = p("textStatusString"),
      k = p("textStatusEmoji"),
      I = p("textStatusEphemeralDuration"),
      T = p("textStatusLastUpdateTime"),
      D = p("textStatusExpiryTs"),
      x = p("usernameKey"),
      $ = p("username");
    function P() {
      var e = c == null ? void 0 : c.getMeContact();
      return e != null
        ? o("WAWebUsernameTypes").serializeMaybeUsername($(e))
        : null;
    }
    var N = p("isUsernameContact"),
      M = p("isEphemeralityDisabled"),
      w = m(
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
        [$],
      ),
      A = m(
        function (e) {
          var t = e[0];
          return t != null ? t.displayName : null;
        },
        [w],
      ),
      F = m(
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
        [f, A, g, o("WAWebContactGetters").getPushname],
      ),
      O = m(
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
        [_, F],
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
          return t != null && t !== ""
            ? {
                displayName: t,
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME,
              }
            : n;
        },
        [o("WAWebContactGetters").getName, O],
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
          return t.isLid()
            ? n
            : {
                displayName: o("WAWebWidFormat").widToFormattedUser(t),
                type: o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER,
              };
        },
        [o("WAWebContactGetters").getId, O],
      ),
      V = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return n != null &&
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
            ? n
            : t;
        },
        [U, w],
      ),
      H = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [F],
      ),
      G = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [V],
      );
    function z(e) {
      return e
        ? r("fbs")._(/*BTDS*/ "WhatsApp Business").toString()
        : r("fbs")._(/*BTDS*/ "WhatsApp").toString();
    }
    var j = m(
        function (e) {
          var t = e[0],
            n = e[1];
          if (!t.isRegularUser()) return !1;
          if (t.isLid()) return n;
          var r = o("WAWebLidMigrationUtils").toUserLid(t),
            a = r != null ? (c == null ? void 0 : c.get(r)) : null;
          return a != null && a.isUsernameContact;
        },
        [o("WAWebContactGetters").getId, N],
      ),
      K = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !!(t && ((n != null && n.length) || r));
        },
        [
          o("WAWebContactGetters").getIsUser,
          o("WAWebContactGetters").getName,
          j,
        ],
      ),
      Q = p("orgMemberName"),
      X = p("orgPrimaryId"),
      Y = p("orgPrimaryTag"),
      J = m(
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
      Z = m(
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
          X,
          Q,
          o("WAWebContactGetters").getPushname,
          K,
          J,
          o("WAWebContactGetters").getIsBusiness,
        ],
      ),
      ee = p("orgMemberFirstName"),
      te = m(
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
        [o("WAWebContactGetters").getShortName, Z, Q, ee],
      ),
      ne = m(
        function (e) {
          var t = e[0];
          return (t == null ? void 0 : t.isAuthorizedAgent) === !0;
        },
        [S],
      ),
      re = m(
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
          K,
        ],
      ),
      oe = m(
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
          re,
          o("WAWebContactGetters").getVerifiedName,
          o("WAWebContactGetters").getVerifiedLevel,
          ne,
        ],
      ),
      ae = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return n != null ? n : t;
        },
        [oe, Z],
      ),
      ie = se(ae),
      le = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [se(oe)],
      );
    function se(e) {
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
                  displayName: z(
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
          V,
        ],
      );
    }
    var ue = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [ie],
      ),
      ce = m(
        function (e) {
          var t = e[0];
          return t.type;
        },
        [ie],
      ),
      de = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4];
          if (r("WAWebWid").isPSA(a))
            return {
              displayName: o("WAWebL10NAccentFold").accentFold(
                z(o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)),
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
          G,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
          y,
        ],
      ),
      me = m(
        function (e) {
          var t = e[0];
          return t != null ? t.displayName : null;
        },
        [de],
      ),
      pe = m(
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
                    displayName: z(
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
          V,
          o("WAWebContactGetters").getIsUser,
          o("WAWebContactGetters").getIsMe,
          y,
        ],
      ),
      _e = Ee(pe),
      fe = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [_e],
      ),
      ge = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [pe],
      ),
      he = m(
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
          te,
          _e,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
          y,
        ],
      ),
      ye = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [he],
      ),
      Ce = ve(te, _e),
      be = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [ve(o("WAWebContactGetters").getShortName, pe)],
      );
    function ve(e, t) {
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
          y,
        ],
      );
    }
    var Se = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [Ce],
      ),
      Re = m(
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
                  displayName: z(
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
          V,
          y,
        ],
      ),
      Le = Ee(Re);
    function Ee(e) {
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
        [e, Z, Q],
      );
    }
    var ke = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [Le],
      ),
      Ie = m(
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
      Te = m(
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
          K,
          o("WAWebContactGetters").getId,
        ],
      ),
      De = /^[^0-9]+$/,
      xe = m(
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
      $e = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4];
          function s(e) {
            var t = e.toLowerCase(),
              n = r("WAWebAlphaRegex").exec(t);
            if ((n && n.index === 0) || (n && De.test(t.slice(n.index)))) {
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
          Z,
        ],
      );
    ((l.getPhoneNumber = _),
      (l.getIsGuest = h),
      (l.getPendingAction = C),
      (l.getIsContactBlocked = b),
      (l.getShareOwnPn = v),
      (l.getBusinessProfile = S),
      (l.getCommonGroups = R),
      (l.getBusinessCatalog = L),
      (l.getTextStatusString = E),
      (l.getTextStatusEmoji = k),
      (l.getTextStatusEphemeralDuration = I),
      (l.getTextStatusLastUpdateTime = T),
      (l.getTextStatusExpiryTs = D),
      (l.getUsernameKey = x),
      (l.getUsername = $),
      (l.getMyUsername = P),
      (l.getIsEphemeralityDisabled = M),
      (l.getFormattedUsernameAndType = w),
      (l.getFormattedUsername = A),
      (l.getDisplayNameForLidAndType = F),
      (l.getPnForLid = B),
      (l.getUserDisplayNameForLid = q),
      (l.getFormattedPhoneAndType = U),
      (l.getFormattedUsernameOrPhoneAndType = V),
      (l.getMaskedPhoneLid = H),
      (l.getFormattedUsernameOrPhone = G),
      (l.getIsUsernameContact = j),
      (l.getIsMyContact = K),
      (l.getOrgMemberName = Q),
      (l.getOrgPrimaryId = X),
      (l.getOrgPrimaryTag = Y),
      (l.getShownOrgMemberName = Z),
      (l.getIsNonVerified = re),
      (l.getDisplayNameAndType = ie),
      (l.getContactDisplayName = le),
      (l.getDisplayName = ue),
      (l.getDisplayNameType = ce),
      (l.getSearchName = me),
      (l.getContactFormattedNameAndType = pe),
      (l.getFormattedNameAndType = _e),
      (l.getFormattedName = fe),
      (l.getContactFormattedName = ge),
      (l.getFormattedShortNameWithNonBreakingSpaces = ye),
      (l.getFormattedShortNameAndType = Ce),
      (l.getContactFormattedShortName = be),
      (l.getFormattedShortName = Se),
      (l.getContactFormattedUserAndType = Re),
      (l.getFormattedUserAndType = Le),
      (l.getFormattedUser = ke),
      (l.getFormattedSavedNameOrPushnameWithType = Ie),
      (l.getShowBiz3pBotVerifiedNameAsSecondary = Te),
      (l.getSearchVerifiedName = xe),
      (l.getHeader = $e));
  },
  226,
);
