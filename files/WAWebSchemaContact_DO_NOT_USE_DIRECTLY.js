__d(
  "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
  ["WAWebModelStorageUtils", "WAWebModelStorageVersions"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage();
      e.add_OPTIMIZED_EXPERIMENT("contact", function (e, t) {
        var n,
          r = t.addColumn,
          a = t.addIndex,
          i = t.addUserDefinedPrimaryKey;
        return e
          .version((n = o("WAWebModelStorageVersions")).contactCreateTable(), [
            i("id"),
            r("name"),
            r("shortName"),
            r("pushname"),
            r("type"),
            r("verifiedName"),
            r("isBusiness"),
            r("isEnterprise"),
            r("verifiedLevel"),
            r("statusMute"),
            r("sectionHeader"),
            r("isAddressBookContact"),
            r("username"),
            r("usernameKey"),
            r("usernameCountryCode"),
            r("usernameSoftDeleted"),
            a("isAddressBookContact"),
            r("isHosted"),
            r("syncToAddressbook"),
            r("isOrHasBeenHosted"),
          ])
          .version(n.contactAddIsContactSyncCompleted(), [
            r("isContactSyncCompleted"),
            a("isContactSyncCompleted"),
          ])
          .version(n.contactAddDisappearingModeProperties(), [
            r("disappearingModeDuration"),
            r("disappearingModeSettingTimestamp"),
          ])
          .version(n.contactAddHash(), [r("contactHash"), a("contactHash")])
          .version(n.contactAddLidProperties(), [
            r("phoneNumber"),
            r("phoneNumberCreatedAt"),
            r("requestedPnTimestamp"),
            r("shareOwnPn"),
            r("displayNameLID"),
            a("phoneNumber"),
          ])
          .version(n.contactTextStatus(), [
            r("textStatusString"),
            r("textStatusEmoji"),
            r("textStatusEphemeralDuration"),
            r("textStatusLastUpdateTime"),
            r("textStatusExpiryTs"),
            a("textStatusExpiryTs"),
          ])
          .version(n.contactPnHash(), [r("pnContactHash")])
          .version(n.contactPnHashIndex(), [
            a("pnContactHash"),
            r("isUsernameContact"),
            r("isEphemeralityDisabled"),
          ])
          .view(function (e) {
            return e;
          })
          .commit();
      });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("contact");
    }
    ((l.addTable = e), (l.getContactTable = s));
  },
  98,
);
