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
      $ = p("usernameKey"),
      P = p("username");
    function N() {
      var e = c == null ? void 0 : c.getMeContact();
      return e != null
        ? o("WAWebUsernameTypes").serializeMaybeUsername(P(e))
        : null;
    }
    var M = p("isUsernameContact"),
      w = p("isEphemeralityDisabled"),
      A = m(
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
        [P],
      ),
      F = m(
        function (e) {
          var t = e[0];
          return t != null ? t.displayName : null;
        },
        [A],
      ),
      O = m(
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
        [f, F, g, o("WAWebContactGetters").getPushname],
      ),
      B = m(
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
        [_, O],
      ),
      W = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [B],
      ),
      q = m(
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
        [o("WAWebContactGetters").getName, B],
      ),
      U = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [q],
      ),
      V = m(
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
        [o("WAWebContactGetters").getId, B],
      ),
      H = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return n != null &&
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
            ? n
            : t;
        },
        [V, A],
      ),
      G = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [O],
      ),
      z = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [H],
      );
    function j(e) {
      return e
        ? r("fbs")._(/*BTDS*/ "WhatsApp Business").toString()
        : r("fbs")._(/*BTDS*/ "WhatsApp").toString();
    }
    var K = m(
        function (e) {
          var t = e[0],
            n = e[1];
          if (!t.isRegularUser()) return !1;
          if (t.isLid()) return n;
          var r = o("WAWebLidMigrationUtils").toUserLid(t),
            a = r != null ? (c == null ? void 0 : c.get(r)) : null;
          return a != null && a.isUsernameContact;
        },
        [o("WAWebContactGetters").getId, M],
      ),
      Q = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !!(t && ((n != null && n.length) || r));
        },
        [
          o("WAWebContactGetters").getIsUser,
          o("WAWebContactGetters").getName,
          K,
        ],
      ),
      X = p("orgMemberName"),
      Y = p("orgPrimaryId"),
      J = p("orgPrimaryTag"),
      Z = m(
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
      ee = m(
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
          Y,
          X,
          o("WAWebContactGetters").getPushname,
          Q,
          Z,
          o("WAWebContactGetters").getIsBusiness,
        ],
      ),
      te = p("orgMemberFirstName"),
      ne = m(
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
        [o("WAWebContactGetters").getShortName, ee, X, te],
      ),
      re = m(
        function (e) {
          var t = e[0];
          return (t == null ? void 0 : t.isAuthorizedAgent) === !0;
        },
        [R],
      ),
      oe = m(
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
          Q,
        ],
      ),
      ae = m(
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
          oe,
          o("WAWebContactGetters").getVerifiedName,
          o("WAWebContactGetters").getVerifiedLevel,
          re,
        ],
      ),
      ie = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return n != null ? n : t;
        },
        [ae, ee],
      ),
      le = ue(ie),
      se = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [ue(ae)],
      );
    function ue(e) {
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
                  displayName: j(
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
          H,
        ],
      );
    }
    var ce = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [le],
      ),
      de = m(
        function (e) {
          var t = e[0];
          return t.type;
        },
        [le],
      ),
      me = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4];
          if (r("WAWebWid").isPSA(a))
            return {
              displayName: o("WAWebL10NAccentFold").accentFold(
                j(o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)),
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
          z,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
          C,
        ],
      ),
      pe = m(
        function (e) {
          var t = e[0];
          return t != null ? t.displayName : null;
        },
        [me],
      ),
      _e = m(
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
                    displayName: j(
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
          H,
          o("WAWebContactGetters").getIsUser,
          o("WAWebContactGetters").getIsMe,
          C,
        ],
      ),
      fe = ke(_e),
      ge = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [fe],
      ),
      he = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [_e],
      ),
      ye = m(
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
          ne,
          fe,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getIsMe,
          C,
        ],
      ),
      Ce = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [ye],
      ),
      be = Se(ne, fe),
      ve = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [Se(o("WAWebContactGetters").getShortName, _e)],
      );
    function Se(e, t) {
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
    var Re = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [be],
      ),
      Le = m(
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
                  displayName: j(
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
          H,
          C,
        ],
      ),
      Ee = ke(Le);
    function ke(e) {
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
        [e, ee, X],
      );
    }
    var Ie = m(
        function (e) {
          var t = e[0];
          return t.displayName;
        },
        [Ee],
      ),
      Te = m(
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
      De = m(
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
          Q,
          o("WAWebContactGetters").getId,
        ],
      ),
      xe = /^[^0-9]+$/,
      $e = m(
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
      Pe = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4];
          function s(e) {
            var t = e.toLowerCase(),
              n = r("WAWebAlphaRegex").exec(t);
            if ((n && n.index === 0) || (n && xe.test(t.slice(n.index)))) {
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
          ee,
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
      (l.getUsernameKey = $),
      (l.getUsername = P),
      (l.getMyUsername = N),
      (l.getIsUsernameContactField = M),
      (l.getIsEphemeralityDisabled = w),
      (l.getFormattedUsernameAndType = A),
      (l.getFormattedUsername = F),
      (l.getDisplayNameForLidAndType = O),
      (l.getPnForLid = W),
      (l.getUserDisplayNameForLid = U),
      (l.getFormattedPhoneAndType = V),
      (l.getFormattedUsernameOrPhoneAndType = H),
      (l.getMaskedPhoneLid = G),
      (l.getFormattedUsernameOrPhone = z),
      (l.getIsUsernameContact = K),
      (l.getIsMyContact = Q),
      (l.getOrgMemberName = X),
      (l.getOrgPrimaryId = Y),
      (l.getOrgPrimaryTag = J),
      (l.getShownOrgMemberName = ee),
      (l.getIsNonVerified = oe),
      (l.getDisplayNameAndType = le),
      (l.getContactDisplayName = se),
      (l.getDisplayName = ce),
      (l.getDisplayNameType = de),
      (l.getSearchName = pe),
      (l.getContactFormattedNameAndType = _e),
      (l.getFormattedNameAndType = fe),
      (l.getFormattedName = ge),
      (l.getContactFormattedName = he),
      (l.getFormattedShortNameWithNonBreakingSpaces = Ce),
      (l.getFormattedShortNameAndType = be),
      (l.getContactFormattedShortName = ve),
      (l.getFormattedShortName = Re),
      (l.getContactFormattedUserAndType = Le),
      (l.getFormattedUserAndType = Ee),
      (l.getFormattedUser = Ie),
      (l.getFormattedSavedNameOrPushnameWithType = Te),
      (l.getShowBiz3pBotVerifiedNameAsSecondary = De),
      (l.getSearchVerifiedName = $e),
      (l.getHeader = Pe));
  },
  226,
);
