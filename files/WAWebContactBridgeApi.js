__d(
  "WAWebContactBridgeApi",
  [
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBizUpdateContactsWithVerifiedNamesAction",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactMutator",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebProfilePicThumbCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        updatePushname: (e = o("WAWebContactMutator")).updatePushname,
        updateContactExternalUserState: e.updateContactExternalUserState,
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
        bulkUpdateUsernames: e.bulkUpdateUsernames,
        bulkUpdateContactPushnames: e.bulkUpdateContactPushnames,
        updateContactAdvAccountType: e.updateContactAdvAccountType,
        getFilteredContacts: e.getFilteredContacts,
        updateUsernameKey: e.updateUsernameKey,
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
            i =
              o("WAWebABProps").getABPropConfigValue("calling_lid_version") > 0,
            l = o("WAWebChatCollection").ChatCollection.getModelsArray(),
            s = l.filter(function (e) {
              return e.id.isRegularUser()
                ? !o("WAWebUserPrefsMeUser").isMeAccount(e.id)
                : !1;
            }),
            u = [],
            c = s.map(async function (e) {
              var t = o("WAWebContactCollection").ContactCollection.get(e.id);
              t != null && u.push(e);
            });
          return Promise.all(c).then(function () {
            var e = u
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0)
                );
              })
              .slice(0, a);
            return r("compactMap")(e, function (e) {
              var t = o("WAWebContactCollection").ContactCollection.get(e.id);
              if (t == null) return null;
              if (i) {
                var n,
                  r = o("WAWebLidMigrationUtils").toLid(t.id);
                return (n = r == null ? void 0 : r.toString()) != null
                  ? n
                  : null;
              }
              return t.id.toString();
            });
          });
        },
        getFrequentChatsForSharing: function () {
          var e =
              o("WAWebABProps").getABPropConfigValue("calling_lid_version") > 0,
            t = o("WAWebChatCollection").ChatCollection.getModelsArray(),
            n = [];
          for (var r of t) {
            var a = r.id.isGroup(),
              i = r.id.isRegularUser();
            if (!(!i && !a)) {
              if (i) {
                var l = o("WAWebContactCollection").ContactCollection.get(r.id);
                if (l == null) continue;
              }
              n.push(r);
            }
          }
          var s = n
              .filter(function (e) {
                return e.pin != null;
              })
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.pin) != null ? n : 0) - ((r = e.pin) != null ? r : 0)
                );
              }),
            u = n
              .filter(function (e) {
                return e.pin == null;
              })
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0)
                );
              }),
            c = [].concat(s, u),
            d = [];
          for (var m of c) {
            var p,
              _,
              f,
              g,
              h = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.get(m.id),
              y = (p = h == null ? void 0 : h.img) != null ? p : null;
            if (m.id.isGroup()) {
              var C, b, v;
              d.push({
                lid: m.id.toString(),
                name:
                  (C =
                    (b = m.formattedTitle) != null
                      ? b
                      : (v = m.groupMetadata) == null
                        ? void 0
                        : v.subject) != null
                    ? C
                    : "",
                contactType: "group",
                imgUrl: y,
              });
              continue;
            }
            var S = o("WAWebContactCollection").ContactCollection.get(m.id);
            if (S != null) {
              var R = null;
              if (e) {
                var L = o("WAWebLidMigrationUtils").toLid(S.id);
                if (L == null) continue;
                R = L.toString();
              } else R = S.id.toString();
              var E = o("WAWebUserPrefsMeUser").isMeAccount(m.id),
                k = "personal";
              (E
                ? (k = "me")
                : S.isEnterprise
                  ? (k = "enterprise")
                  : S.isSmb
                    ? (k = "smb")
                    : S.isBusiness && (k = "business"),
                d.push({
                  lid: R,
                  name:
                    (_ =
                      (f = (g = m.formattedTitle) != null ? g : S.pushname) !=
                      null
                        ? f
                        : S.name) != null
                      ? _
                      : "",
                  contactType: k,
                  imgUrl: y,
                }));
            }
          }
          return Promise.resolve(d);
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
    l.ContactBridgeApi = s;
  },
  98,
);
