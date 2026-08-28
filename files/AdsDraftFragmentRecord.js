__d(
  "AdsDraftFragmentRecord",
  [
    "invariant",
    "AdsAPIDraftFragmentPaths",
    "AdsDraftFragmentRecordChangedFieldsMismatchRecorder",
    "AdsDraftFragmentValueRecord",
    "getByPath",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    o("AdsDraftFragmentRecordChangedFieldsMismatchRecorder").setEnabled(
      Math.random() < 0.01,
    );
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getChangedFields = function () {
          var e = this;
          if (
            this.$AdsDraftFragmentRecord$p_1 == null &&
            ((this.$AdsDraftFragmentRecord$p_1 = r("immutable")
              .Set()
              .withMutations(function (t) {
                e.values.forEach(function (e) {
                  t.union(e.getChangedFields());
                });
              })),
            o(
              "AdsDraftFragmentRecordChangedFieldsMismatchRecorder",
            ).isEnabled())
          ) {
            var t;
            o(
              "AdsDraftFragmentRecordChangedFieldsMismatchRecorder",
            ).checkAndLogIfMismatch(
              (t = this.$AdsDraftFragmentRecord$p_1) != null
                ? t
                : r("immutable").Set(),
              this.values,
            );
          }
          return (
            this.$AdsDraftFragmentRecord$p_1 != null || s(0, 71267),
            this.$AdsDraftFragmentRecord$p_1
          );
        }),
        (n.toAPI = function () {
          var e,
            t = [];
          return (
            this.values.forEach(function (e) {
              t.push(e.toAPI());
            }),
            (e = {}),
            (e.id = this.fragmentID),
            (e.ad_object_id = this.objectID),
            (e.account_id = this.accountID),
            (e.ad_creation_package_config = this.adCreationPackageConfig),
            (e.ad_draft_id = this.draftID),
            (e.action = this.action),
            (e.active_errors = this.activeErrors),
            (e.ad_object_type = this.objectType),
            (e.business_folder = this.businessFolder),
            (e.checkout_action = this.checkoutAction),
            (e.draft_version = this.draftVersion),
            (e.fragment_version = this.fragmentVersion),
            (e.parent_ad_object_id = this.parentAdObjectID),
            (e.publish_status = this.publishStatus),
            (e.source = this.source),
            (e.status = this.status),
            (e.time_created = this.timeCreated),
            (e.time_updated = this.timeUpdated),
            (e.validate = this.validate),
            (e.validation_status = this.validationStatus),
            (e.branded_content_errors = this.brandedContentErrors),
            (e.values = t),
            e
          );
        }),
        (t.fromAPI = function (n) {
          var e = r("getByPath")(n, r("AdsAPIDraftFragmentPaths").VALUES) || [],
            o = r("immutable")
              .Map()
              .withMutations(function (t) {
                e.forEach(function (e) {
                  var n = r("AdsDraftFragmentValueRecord").fromAPI(e);
                  n && t.set(n.field, n);
                });
              });
          return new t({
            accountID: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").ACCOUNT_ID,
            ),
            action: r("getByPath")(n, r("AdsAPIDraftFragmentPaths").ACTION),
            activeErrors: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").ACTIVE_ERRORS,
            ),
            adCreationPackageConfig: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").AD_CREATION_PACKAGE_CONFIG,
            ),
            businessFolder: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").BUSINESS_FOLDER,
            ),
            deleteOverride: void 0,
            draftID: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").AD_DRAFT_ID,
            ),
            draftVersion: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").DRAFT_VERSION,
            ),
            fragmentID: n.id,
            fragmentVersion: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").FRAGMENT_VERSION,
            ),
            objectID: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").AD_OBJECT_ID,
            ),
            objectType: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").AD_OBJECT_TYPE,
            ),
            parentAdObjectID: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").PARENT_AD_OBJECT_ID,
            ),
            publishError: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").PUBLISH_ERROR,
            ),
            publishStatus: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").PUBLISH_STATUS,
            ),
            source: r("getByPath")(n, r("AdsAPIDraftFragmentPaths").SOURCE),
            status: r("getByPath")(n, r("AdsAPIDraftFragmentPaths").STATUS),
            timeCreated: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").TIME_CREATED,
            ),
            timeUpdated: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").TIME_UPDATED,
            ),
            validationStatus: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").VALIDATION_STATUS,
            ),
            brandedContentErrors: r("getByPath")(
              n,
              r("AdsAPIDraftFragmentPaths").BRANDED_CONTENT_ERRORS,
            ),
            values: o,
          });
        }),
        (n.setPath = function (t, n, o) {
          t.length >= 1 || s(0, 2037);
          var e = t[0],
            a = babelHelpers.arrayLikeToArray(t).slice(1),
            i = a.length > 0,
            l = r("immutable").fromJS(o),
            c = this.$AdsDraftFragmentRecord$p_2(e, n, i),
            d = !1;
          if (i) {
            c.newValue || (c = c.set("newValue", r("immutable").Map()));
            var m = ["newValue"].concat(a);
            l === void 0 ? (c = c.deleteIn(m)) : (c = c.setIn(m, l));
          } else l !== void 0 ? (c = c.set("newValue", l)) : (d = !0);
          return u(c.oldValue, c.newValue) || d
            ? this.deleteIn(["values", e])
            : this.setIn(["values", e], c);
        }),
        (n.$AdsDraftFragmentRecord$p_2 = function (t, n, o) {
          var e = this.values.get(t);
          if (e) return e;
          o && c(n);
          var a = r("immutable").fromJS(n);
          return new (r("AdsDraftFragmentValueRecord"))({
            field: t,
            oldValue: a,
            newValue: o ? a || r("immutable").Map() : a,
          });
        }),
        t
      );
    })(
      r("immutable").Record({
        accountID: null,
        action: null,
        activeErrors: null,
        adCreationPackageConfig: null,
        businessFolder: null,
        checkoutAction: null,
        deleteOverride: null,
        draftID: null,
        draftVersion: null,
        fragmentID: null,
        fragmentVersion: null,
        objectID: null,
        objectType: null,
        parentAdObjectID: null,
        publishError: null,
        publishStatus: null,
        source: null,
        status: null,
        timeCreated: null,
        timeUpdated: null,
        validate: !0,
        validationStatus: null,
        brandedContentErrors: null,
        values: r("immutable").Map(),
      }),
    );
    function u(e, t) {
      return r("immutable").is(e, t) || (e == null && t == null);
    }
    function c(e) {
      e == null ||
        !e ||
        e instanceof r("immutable").Map ||
        Object.prototype.toString.call(e) === "[object Object]" ||
        s(0, 2038, JSON.stringify(e));
    }
    l.default = e;
  },
  98,
);
