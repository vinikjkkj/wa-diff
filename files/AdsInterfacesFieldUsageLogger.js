__d(
  "AdsInterfacesFieldUsageLogger",
  [
    "AdsAccountStore",
    "AdsInterfacesFieldUsageTypedLogger",
    "AdsManagerAppConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.logForAnalytics = function (n, a, i) {
            var t;
            (i === void 0 && (i = {}), e++);
            var l = o("AdsManagerAppConfig").sessionID,
              s = r("AdsAccountStore").getSelectedAccountID();
            s == null && (s = 0);
            var u = i,
              c = u.ad_object_ids,
              d = u.fields,
              m = u.level,
              p = u.objective,
              _ = u.source,
              f = u.spec_diff;
            new (r("AdsInterfacesFieldUsageTypedLogger"))()
              .updateData({
                spec_diff: JSON.stringify(f),
                fields: d,
                ad_account_id: s,
                event_name: (t = i.action) == null ? void 0 : t.type,
                event_index: e,
                level: m,
                objective: p,
                source: _,
                session_id: l,
                ad_object_ids: c,
              })
              .log();
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
