__d(
  "WAWebContactBridgeApi",
  [
    "WAWebApiContact",
    "WAWebBizUpdateContactsWithVerifiedNamesAction",
    "WAWebBizUpdateVerifiedInfoAction",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactMutator",
    "WAWebFrontendContactGetters",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        updatePushname: (e = o("WAWebContactMutator")).updatePushname,
        updateContactExternalUserState: e.updateContactExternalUserState,
        updateContactLearnedPnState: e.updateContactLearnedPnState,
        bulkUpdatePhoneNumberJids: e.bulkUpdatePhoneNumberJids,
        bulkUpdateLidContactState: e.bulkUpdateLidContactState,
        updateDisappearingMode: e.updateDisappearingMode,
        updateTextStatus: e.updateTextStatus,
        updateContactWithVerifiedName: function (t) {
          var e = t.contactId,
            n = t.verifiedNameInfo,
            r = o("WAWebJidToWid").userJidToUserWid(e),
            a = o("WAWebContactCollection").ContactCollection.gadd(r);
          o(
            "WAWebBizUpdateContactsWithVerifiedNamesAction",
          ).updateContactsWithVerifiedNames(
            [babelHelpers.extends({}, n, { id: r })],
            [a],
          );
        },
        bulkAddContactToCollection: function (t) {
          var e = t.contacts,
            n = { merge: !0 };
          e.forEach(function (e) {
            var t = o("WAWebWidFactory").createUserWidOrThrow(e.id);
            o("WAWebContactCollection").ContactCollection.add(
              babelHelpers.extends({}, e, { id: t }),
              n,
            );
            var r = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            );
            r &&
              o("WAWebContactCollection").ContactCollection.add(
                babelHelpers.extends({}, e, { id: r }),
                n,
              );
          });
        },
        updateBusinessInfo: e.updateBusinessInfo,
        queryAndUpdateContactPropertiesOnNewChat: function (t) {
          var e = t.contactInfoId,
            n = t.requestOrigin;
          return o(
            "WAWebBizUpdateVerifiedInfoAction",
          ).queryAndUpdateContactPropertiesOnNewChat(
            o("WAWebWidFactory").createWid(e),
            n,
          );
        },
        bulkUpdateUsernames: e.bulkUpdateUsernames,
        bulkUpdateContactPushnames: e.bulkUpdateContactPushnames,
        updateContactAdvAccountType: e.updateContactAdvAccountType,
        getFilteredContacts: e.getFilteredContacts,
        updateUsernameKey: e.updateUsernameKey,
        propagateIdentityFieldsToLidContact:
          e.propagateIdentityFieldsToLidContact,
        updateContactsStatusMute: function (t) {
          var e = t.groupStatusMuteUpdates,
            n = t.newsletterStatusMuteUpdates,
            r = t.userStatusMuteUpdates,
            a = r
              .concat(e)
              .concat(n)
              .map(function (e) {
                var t = o("WAWebWidFactory").createWid(e.id),
                  n = o("WAWebContactCollection").ContactCollection.get(t);
                return {
                  id: t,
                  pushname: (n == null ? void 0 : n.pushname) || "",
                  type: (n == null ? void 0 : n.type) || "out",
                  name: n == null ? void 0 : n.name,
                  statusMute: e.statusMute === !0,
                };
              });
          o("WAWebContactCollection").ContactCollection.add(a, { merge: !0 });
        },
        getFrequentContacts: function (t) {
          var e = t.count,
            n = t.includeVoipCallableOnly,
            a = 5,
            i = o("WAWebChatCollection").ChatCollection.getModelsArray(),
            l = i.filter(function (e) {
              return e.id.isRegularUser()
                ? !o("WAWebUserUtils").isMeAccount(e.id)
                : !1;
            }),
            s = [],
            u = l.map(async function (e) {
              var t = o("WAWebContactCollection").ContactCollection.get(e.id);
              t != null && s.push(e);
            });
          return Promise.all(u).then(function () {
            var e = s
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0)
                );
              })
              .slice(0, a);
            return r("compactMap")(e, function (e) {
              var t,
                n = o("WAWebContactCollection").ContactCollection.get(e.id);
              if (n == null) return null;
              var r = o("WAWebLidMigrationUtils").toLid(n.id);
              return (t = r == null ? void 0 : r.toString()) != null ? t : null;
            });
          });
        },
        getFrequentChatsForSharing: function () {
          var e = o("WAWebChatCollection").ChatCollection.getModelsArray(),
            t = e.filter(u),
            n = c(e),
            r = t
              .filter(function (e) {
                return e.pin != null;
              })
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.pin) != null ? n : 0) - ((r = e.pin) != null ? r : 0)
                );
              }),
            a = t
              .filter(function (e) {
                return e.pin == null;
              })
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0)
                );
              }),
            i = [].concat(r, a),
            l = [];
          for (var s of i) {
            var d,
              m,
              p,
              _,
              f = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.get(s.id),
              g =
                (d = o("WAWebProfilePicThumbGetters").getMaybeImg(f)) != null
                  ? d
                  : null;
            if (s.id.isGroup()) {
              var h, y, C;
              l.push({
                lid: s.id.toString(),
                name:
                  (h =
                    (y = s.formattedTitle) != null
                      ? y
                      : (C = s.groupMetadata) == null
                        ? void 0
                        : C.subject) != null
                    ? h
                    : "",
                contactType: "group",
                imgUrl: g,
              });
              continue;
            }
            var b = o("WAWebContactCollection").ContactCollection.get(s.id);
            if (b != null) {
              var v = o("WAWebLidMigrationUtils").toLid(b.id);
              if (
                !(
                  v == null ||
                  n.has(v) ||
                  ((m = o(
                    "WAWebChatCollection",
                  ).ChatCollection.getChatByAccountLid(v)) == null
                    ? void 0
                    : m.isLocked) === !0
                )
              ) {
                var S = v.toString(),
                  R =
                    (p = o("WAWebLidMigrationUtils").toPn(s.id)) != null
                      ? p
                      : b.phoneNumber,
                  L =
                    (_ =
                      R != null
                        ? o("WAWebContactCollection").ContactCollection.get(R)
                        : null) != null
                      ? _
                      : b,
                  E = o("WAWebUserUtils").isMeAccount(s.id),
                  k = "personal";
                (E
                  ? (k = "me")
                  : L.isEnterprise
                    ? (k = "enterprise")
                    : L.isSmb
                      ? (k = "smb")
                      : L.isBusiness && (k = "business"),
                  l.push({
                    lid: S,
                    name:
                      o("WAWebFrontendContactGetters").getFormattedUser(L) ||
                      b.pushname ||
                      b.name ||
                      "",
                    contactType: k,
                    imgUrl: g,
                  }));
              }
            }
          }
          return Promise.resolve(l);
        },
        setContactsNotMyUsernameContacts: function (t) {
          var e = t.usernameContactIdsToRemove,
            n = { merge: !0 };
          e.forEach(function (e) {
            var t = o("WAWebWidFactory").createUserLidOrThrow(e),
              r = o("WAWebContactCollection").ContactCollection.get(t),
              a =
                (r == null ? void 0 : r.phoneNumber) ||
                o("WAWebLidMigrationUtils").toPn(t),
              i = {
                id: t,
                type: "out",
                name: void 0,
                shortName: void 0,
                username: r == null ? void 0 : r.username,
                phoneNumber: a,
                isAddressBookContact: 0,
                isContactSyncCompleted: 0,
                syncToAddressbook: !1,
                isUsernameContact: !1,
                birthday: null,
              };
            o("WAWebContactCollection").ContactCollection.add(i, n);
            var l = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            );
            l &&
              o("WAWebContactCollection").ContactCollection.add(
                babelHelpers.extends({}, i, { id: l }),
                n,
              );
          });
        },
      };
    function u(e) {
      return e.isLocked
        ? !1
        : e.id.isGroup()
          ? !0
          : e.id.isRegularUser() &&
            o("WAWebContactCollection").ContactCollection.get(e.id) != null;
    }
    function c(e) {
      var t = new Set();
      for (var n of e)
        n.isLocked && n.accountLid != null && t.add(n.accountLid);
      return t;
    }
    l.ContactBridgeApi = s;
  },
  98,
);
