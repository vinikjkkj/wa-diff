__d(
  "AdsObjectUtils",
  [
    "fbt",
    "invariant",
    "AdsInsightsField",
    "AdsObjectTypes",
    "adsManagerGetAdObjectsNameFromObjectType",
    "expectationViolation",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        toLevel: function (t) {
          switch (t) {
            case r("AdsObjectTypes").BUSINESS_ACCOUNT:
            case r("AdsObjectTypes").ACCOUNT:
              return 4;
            case r("AdsObjectTypes").CAMPAIGN_GROUP:
              return 3;
            case r("AdsObjectTypes").CAMPAIGN:
              return 2;
            case r("AdsObjectTypes").ADGROUP:
              return 1;
            default:
              u(0, 815);
          }
        },
        fromLevel: function (t) {
          switch (t) {
            case 4:
              return r("AdsObjectTypes").ACCOUNT;
            case 3:
              return r("AdsObjectTypes").CAMPAIGN_GROUP;
            case 2:
              return r("AdsObjectTypes").CAMPAIGN;
            case 1:
              return r("AdsObjectTypes").ADGROUP;
            default:
              u(0, 815);
          }
        },
        toPenguinType: function (n) {
          return r("nullthrows")(e.toPenguinTypeOrNull(n));
        },
        toPenguinTypeOrNull: function (t) {
          switch (t) {
            case r("AdsObjectTypes").CAMPAIGN_GROUP:
              return "campaign_group";
            case r("AdsObjectTypes").CAMPAIGN:
              return "campaign";
            case r("AdsObjectTypes").ACCOUNT:
              return "account";
            case r("AdsObjectTypes").ADGROUP:
              return "adgroup";
            default:
              return null;
          }
        },
        fromPenguinType: function (n) {
          return r("nullthrows")(e.fromPenguinTypeOrNull(n));
        },
        fromPenguinTypeOrNull: function (t) {
          switch (t) {
            case "campaign_group":
              return r("AdsObjectTypes").CAMPAIGN_GROUP;
            case "campaign":
              return r("AdsObjectTypes").CAMPAIGN;
            case "account":
              return r("AdsObjectTypes").ACCOUNT;
            case "adgroup":
              return r("AdsObjectTypes").ADGROUP;
            default:
              return null;
          }
        },
        toFilterObjectTypeOrNull: function (t) {
          switch (t) {
            case r("AdsObjectTypes").CAMPAIGN_GROUP:
              return "campaign";
            case r("AdsObjectTypes").CAMPAIGN:
              return "adset";
            case r("AdsObjectTypes").ADGROUP:
              return "ad";
            case r("AdsObjectTypes").ACCOUNT:
              return "account";
            default:
              return null;
          }
        },
        toFilterObjectType: function (n) {
          return r("nullthrows")(e.toFilterObjectTypeOrNull(n));
        },
        getNavSectionFromObjectTypeOrNull: function (t) {
          switch (t) {
            case r("AdsObjectTypes").ADGROUP:
              return "L1";
            case r("AdsObjectTypes").CAMPAIGN:
              return "L2";
            case r("AdsObjectTypes").CAMPAIGN_GROUP:
              return "L3";
            case r("AdsObjectTypes").ACCOUNT:
              return "ACCOUNT";
            case r("AdsObjectTypes").OPPORTUNITIES:
              return "OPPORTUNITIES";
            case r("AdsObjectTypes").CREATIVE:
              return "CREATIVES";
          }
          return null;
        },
        getNavSectionFromObjectType: function (n) {
          return r("nullthrows")(e.getNavSectionFromObjectTypeOrNull(n));
        },
        getNavSectionFromObjectLevel: function (n) {
          var t = e.getObjectTypeFromAdObjectLevelsType(n);
          return e.getNavSectionFromObjectType(t);
        },
        getObjectTypeFromNavSection: function (t) {
          var e;
          switch (t) {
            case "OPPORTUNITIES":
              e = r("AdsObjectTypes").OPPORTUNITIES;
              break;
            case "L1":
              e = r("AdsObjectTypes").ADGROUP;
              break;
            case "PACKAGE_AD_CREATION":
              e = r("AdsObjectTypes").CREATION_PACKAGE;
              break;
            case "L2":
              e = r("AdsObjectTypes").CAMPAIGN;
              break;
            case "L3":
            case "CAMPAIGN_OVERVIEW":
            case "MESSAGE_LANDING_PAGE":
              e = r("AdsObjectTypes").CAMPAIGN_GROUP;
              break;
            case "ACCOUNT":
            case "ADVERTISING_SETTINGS":
            case "AD_ACCOUNT_SETTINGS":
            case "CREATIVES":
              e = r("AdsObjectTypes").ACCOUNT;
              break;
            case "MESSAGE_SETTINGS":
              e = r("AdsObjectTypes").ACCOUNT;
              break;
            default:
              u(0, 1577);
          }
          return e;
        },
        fromFilterObjectTypeOrNull: function (t) {
          switch (t) {
            case "campaign":
              return r("AdsObjectTypes").CAMPAIGN_GROUP;
            case "adset":
              return r("AdsObjectTypes").CAMPAIGN;
            case "ad":
              return r("AdsObjectTypes").ADGROUP;
            case "account":
              return r("AdsObjectTypes").ACCOUNT;
            default:
              return null;
          }
        },
        fromFilterObjectType: function (n) {
          return r("nullthrows")(e.fromFilterObjectTypeOrNull(n));
        },
        getObjectTypeFromAdObjectLevelsType: function (t) {
          switch (t) {
            case "ad_account":
              return r("AdsObjectTypes").ACCOUNT;
            case "campaign":
              return r("AdsObjectTypes").CAMPAIGN_GROUP;
            case "ad_set":
              return r("AdsObjectTypes").CAMPAIGN;
            case "ad":
              return r("AdsObjectTypes").ADGROUP;
            case "privacy_info_center":
              return r("AdsObjectTypes").PRIVACY_INFO_CENTER;
            default:
              return (
                r("expectationViolation")(
                  "Received an AdObjectLevel with no equivalent AdsObjectType",
                ),
                r("AdsObjectTypes").ADGROUP
              );
          }
        },
        getNameFromAdObjectLevelsType: function (n, o, a) {
          a === void 0 && (a = {});
          var t = e.getObjectTypeFromAdObjectLevelsType(n);
          return r("adsManagerGetAdObjectsNameFromObjectType")(t, o, a);
        },
        getCountAndNameFromObjectType: function (t, n, o) {
          return (
            o === void 0 && (o = {}),
            s._(/*BTDS*/ "{number of objects} {object name}", [
              s._param("number of objects", n),
              s._param(
                "object name",
                r("adsManagerGetAdObjectsNameFromObjectType")(t, n, o),
              ),
            ])
          );
        },
        getSingularNameFromObjectType: function (t, n) {
          return (
            n === void 0 && (n = {}),
            r("adsManagerGetAdObjectsNameFromObjectType")(t, 1, n)
          );
        },
        getSingularNameFromObjectLevel: function (n, o) {
          return (
            o === void 0 && (o = {}),
            r("adsManagerGetAdObjectsNameFromObjectType")(
              e.getObjectTypeFromAdObjectLevelsType(n),
              1,
              o,
            )
          );
        },
        getPluralNameFromObjectType: function (t, n) {
          return (
            n === void 0 && (n = {}),
            r("adsManagerGetAdObjectsNameFromObjectType")(t, 2, n)
          );
        },
        getPluralNameFromObjectLevel: function (n, o) {
          return (
            o === void 0 && (o = {}),
            r("adsManagerGetAdObjectsNameFromObjectType")(
              e.getObjectTypeFromAdObjectLevelsType(n),
              2,
              o,
            )
          );
        },
        isParentLowerThanChild: function (t, n) {
          switch (t) {
            case r("AdsObjectTypes").ADGROUP:
              return (
                n === r("AdsObjectTypes").ACCOUNT ||
                n === r("AdsObjectTypes").CAMPAIGN_GROUP ||
                n === r("AdsObjectTypes").CAMPAIGN
              );
            case r("AdsObjectTypes").CAMPAIGN:
              return (
                n === r("AdsObjectTypes").ACCOUNT ||
                n === r("AdsObjectTypes").CAMPAIGN_GROUP
              );
            case r("AdsObjectTypes").CAMPAIGN_GROUP:
              return n === r("AdsObjectTypes").ACCOUNT;
            case r("AdsObjectTypes").ACCOUNT:
              return !1;
            default:
              return !1;
          }
        },
        fromNameFieldOrNull: function (t) {
          switch (t) {
            case "account_name":
              return r("AdsObjectTypes").ACCOUNT;
            case "campaign_group_name":
              return r("AdsObjectTypes").CAMPAIGN_GROUP;
            case "campaign_name":
              return r("AdsObjectTypes").CAMPAIGN;
            case "adgroup_name":
              return r("AdsObjectTypes").ADGROUP;
            default:
              return null;
          }
        },
        toNameFieldOrNull: function (t) {
          switch (t) {
            case r("AdsObjectTypes").ACCOUNT:
              return "account_name";
            case r("AdsObjectTypes").CAMPAIGN_GROUP:
              return "campaign_group_name";
            case r("AdsObjectTypes").CAMPAIGN:
              return "campaign_name";
            case r("AdsObjectTypes").ADGROUP:
              return "adgroup_name";
            default:
              return null;
          }
        },
        fromInsightsAPIFieldOrNull: function (t) {
          switch (t) {
            case r("AdsInsightsField").ACCOUNT_ID:
              return r("AdsObjectTypes").ACCOUNT;
            case r("AdsInsightsField").CAMPAIGN_ID:
              return r("AdsObjectTypes").CAMPAIGN_GROUP;
            case r("AdsInsightsField").ADSET_ID:
              return r("AdsObjectTypes").CAMPAIGN;
            case r("AdsInsightsField").AD_ID:
              return r("AdsObjectTypes").ADGROUP;
            default:
              return null;
          }
        },
        toInsightsAPIFieldOrNull: function (t) {
          switch (t) {
            case r("AdsObjectTypes").ACCOUNT:
              return r("AdsInsightsField").ACCOUNT_ID;
            case r("AdsObjectTypes").CAMPAIGN_GROUP:
              return r("AdsInsightsField").CAMPAIGN_ID;
            case r("AdsObjectTypes").CAMPAIGN:
              return r("AdsInsightsField").ADSET_ID;
            case r("AdsObjectTypes").ADGROUP:
              return r("AdsInsightsField").AD_ID;
            default:
              return null;
          }
        },
      },
      c = e;
    l.default = c;
  },
  226,
);
