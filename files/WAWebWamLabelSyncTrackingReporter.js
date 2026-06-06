__d(
  "WAWebWamLabelSyncTrackingReporter",
  [
    "WAWebABProps",
    "WAWebMdLabelSyncTrackingWamEvent",
    "WAWebMobilePlatforms",
    "WAWebWamEnumLabelSyncDeviceRoleType",
    "WAWebWamEnumLabelSyncDirectionType",
    "WAWebWamEnumLabelSyncResultType",
    "WAWebWamEnumLabelSyncTypeEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "whatsapp_label_sync_tracking_v1",
      s = null;
    function u() {
      if (s == null) {
        var t = new TextEncoder();
        s = crypto.subtle.importKey(
          "raw",
          t.encode(e),
          { name: "HMAC", hash: "SHA-256" },
          !1,
          ["sign"],
        );
      }
      return s;
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_label_sync_critical_event_logging",
        )
      );
    }
    async function d(e) {
      var t = await u(),
        n = new TextEncoder(),
        r = await crypto.subtle.sign("HMAC", t, n.encode(e));
      return Array.from(new Uint8Array(r))
        .map(function (e) {
          return e.toString(16).padStart(2, "0");
        })
        .join("");
    }
    async function m(e) {
      try {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        var o = n
            .map(function (e) {
              return ',"' + e + '"';
            })
            .join(""),
          a = '["' + e + '"' + o + "]";
        return await d(a);
      } catch (e) {
        return "hash_generation_failed";
      }
    }
    async function p(e, t) {
      return m("label_jid", e, t);
    }
    async function _(e) {
      return m("label_edit", e);
    }
    async function f(e) {
      return m("label_reorder", e);
    }
    function g(e, t, n, r, a, i, l, s) {
      if (c()) {
        var u = {
          labelSyncHash: e,
          labelSyncType: t,
          labelSyncDirection: n,
          labelSyncResult: r,
          labelSyncIsLabeled: a,
          labelSyncTimestamp: i,
          labelSyncDeviceRole: o("WAWebWamEnumLabelSyncDeviceRoleType")
            .LABEL_SYNC_DEVICE_ROLE_TYPE.COMPANION,
        };
        (l != null && (u.labelSyncHasPending = l),
          s != null && (u.labelSyncPredefinedId = s));
        var d = new (o(
          "WAWebMdLabelSyncTrackingWamEvent",
        ).MdLabelSyncTrackingWamEvent)(u);
        d.commit();
      }
    }
    ((l.generateHash = m),
      (l.generateLabelJidHash = p),
      (l.generateLabelEditHash = _),
      (l.generateLabelReorderHash = f),
      (l.logLabelSyncEvent = g),
      (l.LABEL_SYNC_TYPE_ENUM = o(
        "WAWebWamEnumLabelSyncTypeEnum",
      ).LABEL_SYNC_TYPE_ENUM),
      (l.LABEL_SYNC_DIRECTION_TYPE = o(
        "WAWebWamEnumLabelSyncDirectionType",
      ).LABEL_SYNC_DIRECTION_TYPE),
      (l.LABEL_SYNC_RESULT_TYPE = o(
        "WAWebWamEnumLabelSyncResultType",
      ).LABEL_SYNC_RESULT_TYPE));
  },
  98,
);
