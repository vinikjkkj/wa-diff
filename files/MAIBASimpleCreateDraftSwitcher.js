__d(
  "MAIBASimpleCreateDraftSwitcher",
  [
    "AdDraftOwnership",
    "AdsApplicationIDs",
    "AdsDraftDataManager",
    "AdsDraftDataManagerFields",
    "AdsDraftLoginAsSetDraftTypeDataAction",
    "AdsDraftTypes",
    "AdsGraphAPI",
    "CurrentUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      try {
        var t;
        return await o("AdsGraphAPI")
          .get(i.id)
          .root("addraft_" + e)
          .batched()
          .get(
            ((t = {}), (t.fields = r("AdsDraftDataManagerFields").fields), t),
          );
      } catch (e) {
        return null;
      }
    }
    async function s(t, n) {
      if (!r("CurrentUser").isEmployee()) return !1;
      var o = await e(n);
      return o == null ||
        o.account_id !== t ||
        o.ownership_type !== r("AdDraftOwnership").USER
        ? !1
        : (r("AdsDraftLoginAsSetDraftTypeDataAction").dispatch(
            { accountID: t, draftType: r("AdsDraftTypes").LOGIN_AS_ACTIVE },
            {
              line: "55",
              module: "MAIBASimpleCreateDraftSwitcher.js",
              moduleID: i.id,
            },
          ),
          r("AdsDraftDataManager").onCurrentDraftSelectedThroughLoginas(
            t,
            o,
            r("AdsDraftTypes").LOGIN_AS_ACTIVE,
            r("AdsApplicationIDs").ADS_POWER_EDITOR,
            r("AdDraftOwnership").USER,
          ),
          !0);
    }
    l.switchToMAIBASimpleCreateDraft = s;
  },
  98,
);
