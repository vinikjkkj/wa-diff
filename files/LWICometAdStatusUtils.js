__d(
  "LWICometAdStatusUtils",
  [
    "fbt",
    "ix",
    "BoostedComponentStatus",
    "FBLogger",
    "IconSource",
    "getJSEnumSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = r("requireDeferred")("LWICometGenericEventsFalcoEvent").__setRef(
        "LWICometAdStatusUtils",
      ),
      d = {
        ACTIVE: {
          color: "positive",
          icon: new (e = r("IconSource"))("FB", u("1160873"), 12),
          status: s._(/*BTDS*/ "Active"),
        },
        CREATING: {
          color: "positive",
          icon: new e("FB", u("1160857"), 12),
          status: s._(/*BTDS*/ "In review"),
        },
        DRAFT: {
          color: "secondary",
          icon: new e("FB", u("651424"), 12),
          status: s._(/*BTDS*/ "Draft"),
        },
        ERROR: {
          color: "negative",
          icon: new e("FB", u("480267"), 12),
          status: s._(/*BTDS*/ "Unable to create"),
        },
        EXTENDABLE: {
          color: "secondary",
          icon: new e("FB", u("516537"), 12),
          status: s._(/*BTDS*/ "Completed"),
        },
        FINISHED: {
          color: "secondary",
          icon: new e("FB", u("516537"), 12),
          status: s._(/*BTDS*/ "Completed"),
        },
        INACTIVE: {
          color: "secondary",
          icon: new e("FB", u("516537"), 12),
          status: s._(/*BTDS*/ "Completed"),
        },
        LIMITED_DELIVERY: {
          color: "positive",
          icon: new e("FB", u("1160873"), 12),
          status: s._(/*BTDS*/ "Limited delivery"),
        },
        NOT_DELIVERING: {
          color: "negative",
          icon: new e("FB", u("478223"), 12),
          status: s._(/*BTDS*/ "Not delivering"),
        },
        PAUSED: {
          color: "secondary",
          icon: new e("FB", u("1160865"), 12),
          status: s._(/*BTDS*/ "Paused"),
        },
        PENDING: {
          color: "positive",
          icon: new e("FB", u("1160857"), 12),
          status: s._(/*BTDS*/ "In review"),
        },
        PENDING_PA_PERMISSION: {
          color: "positive",
          icon: new e("FB", u("1160857"), 12),
          status: s._(/*BTDS*/ "Pending approval"),
        },
        REJECTED: {
          color: "negative",
          icon: new e("FB", u("478223"), 12),
          status: s._(/*BTDS*/ "Rejected"),
        },
        SCHEDULED: {
          color: "secondary",
          icon: new e("FB", u("651424"), 12),
          status: s._(/*BTDS*/ "Scheduled"),
        },
      };
    function m(e) {
      var t = d[e];
      if (t == null)
        throw (
          c.onReady(function (t) {
            return t.log({
              entry_point: "lwi_web_ad_status",
              event: "lwi_web_ad_status_props_map_invalid",
              extra_data: { ad_status: e },
            });
          }),
          r("FBLogger")("pages_lwi").mustfixThrow(
            "no status props for adStatus: %s",
            String(e),
          )
        );
      return t;
    }
    function p(e) {
      var t = r("getJSEnumSafe")(r("BoostedComponentStatus"), e);
      if (t == null)
        throw r("FBLogger")("pages_lwi").mustfixThrow(
          "status should be a valid BoostedComponentProduct",
        );
      return t;
    }
    function _(e) {
      return e === "FINISHED" || e === "EXTENDABLE";
    }
    ((l.getPrimaryStatusProps = m),
      (l.adStatusFromGraphQLEnumToJSEnumStrict = p),
      (l.isAdStatusCompleted = _));
  },
  226,
);
