__d(
  "adsCrepeBulkEditValidationSelector",
  [
    "AdsCampaignGroupDraftFragmentStore",
    "AdsPECampaignGroupLiveSelectors",
    "AdsPECrepePackages",
    "FBLogger",
    "adsChooseSelector",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("adsCreateSelector"))(
        [
          o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
          r("AdsCampaignGroupDraftFragmentStore").getRawSelector,
        ],
        function (t, n) {
          return t.some(function (e) {
            var t,
              r = n(e),
              a = r.action === "add",
              i =
                ((t = r.adCreationPackageConfig) == null ? void 0 : t.id) ===
                o("AdsPECrepePackages").ASA_ODAX_PACKAGE_CONFIG_ID;
            return a && i;
          });
        },
        { name: i.id + ".isDisabledForNewAscDraftSelector" },
      ),
      u = e(
        [
          o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
          o("AdsPECampaignGroupLiveSelectors").getByFieldsSelector,
        ],
        function (t, n) {
          var e = t.some(function (e) {
            return n(e, {
              ad_creation_package_config: null,
              spend_cap: null,
            }).match({
              loading: function () {
                return !1;
              },
              empty: function () {
                return !1;
              },
              error: function (n) {
                return (
                  r("FBLogger")("ads").debug(
                    "Failed to load live campaign group %s with error message: %s",
                    e,
                    n.message,
                  ),
                  !1
                );
              },
              loaded: function (t) {
                var e;
                return (
                  (t == null || (e = t.ad_creation_package_config) == null
                    ? void 0
                    : e.id) ===
                    o("AdsPECrepePackages").ASA_ODAX_PACKAGE_CONFIG_ID &&
                  (t == null ? void 0 : t.spend_cap) == null
                );
              },
            });
          });
          return e;
        },
        { name: i.id + ".isDisabledForPublishedAscSelector" },
      ),
      c = r("adsChooseSelector")(
        function () {
          return !0;
        },
        e(
          [s, u],
          function (t, n) {
            return { isSpendCapDisabled: t || n };
          },
          { name: i.id },
        ),
        e(
          [],
          function () {
            return null;
          },
          { name: i.id },
        ),
        !0,
        i.id + ".adsCrepeBulkEditValidationSelector",
      ),
      d = c;
    l.default = d;
  },
  98,
);
